# STATUS — BoraWuwa

Relatório de progresso do projeto, pra retomar o trabalho em qualquer máquina/sessão sem perder o fio. Atualize esse arquivo conforme o projeto avança — ele é o "norte" combinado.

## O que é isso

Site pessoal de referência pra builds de Wuthering Waves: galeria de Ressonadores (filtrável por elemento, arma e raridade) com guia de build por personagem, e uma segunda galeria de Mecânicas do jogo (ainda vazia de conteúdo). Sem lore, sem backend — é uma ferramenta estática pra consulta rápida.

Spec de design completo em [`Design/README.md`](Design/README.md) e no protótipo [`Design/Wuthering Waves Hub.dc.html`](<Design/Wuthering Waves Hub.dc.html>) (não é pra copiar como código, é a referência de layout/tokens/comportamento). Screenshots de referência em `Design/screenshots/`.

## Stack

- React + Vite + TypeScript
- react-router-dom (rotas: `/`, `/:characterId`, `/mecanicas`, `/mecanicas/:mechanicId`)
- Sem CSS framework — estilos inline em objeto JS (mesma abordagem do protótipo), tokens OKLCH centralizados em `src/styles/global.css` como CSS custom properties
- Sem backend/API — dados hardcoded em `src/data/*.ts`

## Estrutura

```
src/
  data/
    types.ts        — Character (id, name, element, weaponType, rarity, role?, ready, detail?), Mechanic, etc.
    elements.ts      — ELEMENTS map (label, cor por elemento)
    weaponTypes.ts    — WEAPON_TYPES map (label PT por tipo de arma)
    characters.ts     — roster completo: 53 personagens lançados (Phrolova com guia completo, resto registro básico)
    mechanics.ts      — 6 mecânicas (placeholder)
    images.ts         — characterImageSrc(id, size) com 3 variantes por personagem ('hq'/'md'/'lq'), weaponImageSrc / echoImageSrc (por slug, opcionais)
  components/       — TabBar, FilterChip, CharacterCard, MechanicCard, ImageSlot (compartilhados)
  components/characters/ — galeria (3 filtros: elemento/arma/raridade), detalhe, seções (Overview/Echoes/Synergy/Weapons/Priority), TOC desktop, bottom sheet mobile
  components/mechanics/  — galeria e detalhe (placeholder puro por enquanto)
  hooks/useIsDesktop.ts — breakpoint 900px via JS (não CSS media query)
  styles/global.css — tokens de design (cores, raios, fontes)
public/img/characters/ — card art (~3:4) de TODOS os 53 personagens lançados, baixada de prydwen.gg. Cada um tem 3 variantes de tamanho (`{id}-hq.webp` original ~374x512 pro retrato grande do detalhe, `{id}-md.webp` 360px de altura pro card da home, `{id}-lq.webp` 150px de altura — hoje sem uso ativo no código, ver pendências) geradas por `scripts/generate-character-image-variants.mjs` (reaproveitável: rode de novo quando entrar personagem novo, ele ignora quem já está sufixado)
public/img/weapons/    — ícones de arma (prydwen.gg), guardados por slug e reutilizáveis entre personagens que citam a mesma arma
public/img/echoes/     — ícones de set de echo (prydwen.gg), mesma lógica de reuso por slug
Design/ — spec de design original (README + protótipo .dc.html + screenshots), mantido como referência versionada
mini/   — pasta com thumbnails quadrados brutos baixados de wuthering.gg num teste anterior (obsoleta pro roster — hoje usamos a card art da prydwen.gg pra todo mundo, mais bonita e uniforme; mantida só como histórico)
```

## O que já funciona

- [x] Scaffold Vite + React + TS, `react-router-dom` instalado
- [x] Design tokens (cores OKLCH, tipografia Space Grotesk/Manrope, raios) fiéis ao spec
- [x] Tab bar Ressonadores/Mecânicas (roteada por URL: `/` vs `/mecanicas`)
- [x] Galeria de Mecânicas: 6 cards placeholder
- [x] Layout desktop (sidebar TOC fixa + tudo expandido) vs mobile (accordion + botão flutuante ☰ + bottom sheet), breakpoint 900px via JS
- [x] Scroll suave até seção ao clicar em item da TOC/bottom sheet
- [x] Detalhe de mecânica: shell mínimo (ícone + título + aviso de construção)
- [x] Git inicializado na raiz do projeto, commits publicados em [github.com/Agonxx/BoraWuwa](https://github.com/Agonxx/BoraWuwa)
- [x] **Roster completo (53 personagens lançados)** — extraído de [prydwen.gg/wuthering-waves/characters](https://www.prydwen.gg/wuthering-waves/characters) (JSON embutido na página, não HTML espalhado): elemento, raridade e tipo de arma corretos pra todo mundo, corrigindo vários erros que o roster anterior (baseado no protótipo de design, com dados inventados) tinha — ex: Zhezhi é Glacio (estava Spectro), Zani é Spectro (estava Havoc). Os 7 personagens ainda não lançados (`upcoming: true` na Prydwen — Hsin, Jingran, Qingxiao, Rover Electro, Suisui, Suoming, Yangyang·Xuanling) ficaram de fora por não terem elemento/arma definidos ainda
- [x] **Card art real pra todo mundo** — baixada de `cdn.prydwen.gg/images/ww/characters/{shortcode}_card.webp` pra cada um dos 53, salva em `public/img/characters/{id}.webp`. Substituiu os ícones quadrados de wuthering.gg (`mini/`) que estavam sendo usados antes — a card art é vertical (~3:4), bate certinho com o slot de portrait do design, sem crop feio
- [x] **3 filtros combináveis na home**: Elemento, Arma, Raridade (5★/4★), todos AND entre si. Badge de raridade (★) sobreposto no canto do card; linha de meta mostra elemento + tipo de arma
- [x] **Phrolova com guia completo** (overview, echoes, sinergia de time, armas, prioridade de habilidades), servindo de base/referência de padrão antes de replicar pros outros. Cartethyia teve o `detail` removido de propósito (guia antigo não seguia os padrões de dado atuais, tipo `%` de desempenho de arma) — fica registro básico até ser refeita. Os outros 51 ficam registrados (imagem, elemento, arma, raridade) mas sem guia — "Guia em construção"
- [x] Ids de alguns personagens foram alinhados à grafia oficial da prydwen.gg (fonte mais confiável que o protótipo original): `ciaccona` (era `ciaconna`), `rover-aero` (era `aero-rover`), `the-shorekeeper` (era `shorekeeper`), `xiangli-yao` (era `xiangliyao`) — referências em `synergyPairs` da Phrolova já atualizadas
- [x] Verificado via Playwright headless: galeria completa, os 3 filtros isolados e combinados, mobile, detalhe de personagem pronto/não-pronto — sem erros de console; `npm run build` passa limpo
- [x] **Redesenho de Opções de Arma**: virou grid de cards com ícone grande, `%` de desempenho em destaque (cor por faixa) e selo "Assinatura", em vez da lista horizontal antiga (`WeaponsSection.tsx`)
- [x] **Redesenho de Sinergia de Time**: cards de retrato por membro do combo; desktop divide a linha em fotos + painel de Rotação/Notas, mobile mantém as fotos e expande o mesmo painel ao tocar (`SynergySection.tsx`). Rotação/notas da combo Phrolova+Lucilla+Qiuyuan são de fonte real (prydwen/game8); as outras 4 combos da Phrolova são texto placeholder ainda não verificado
- [x] **Redesenho de Prioridade de Habilidades**: desktop usa chips com rótulos curtos (Básico/Habilidade/Ultimate/Intro/Circuito Forte) e separador uniforme; mobile converte a mesma sequência em barras ponderadas por tier (Essencial/Alta/Média/Baixa) — corrige a quebra de layout feia que a lista de chips tinha em telas estreitas (`PrioritySection.tsx`)

## Pendências / próximos passos

- [ ] **Role/especialidade (Dano Principal / Suporte / Sub-DPS) só existe pra 21 personagens** (os que já estavam no roster antes + Cartethyia/Phrolova) — a Prydwen não expõe isso na página de listagem, só dentro de cada guia individual. Os outros 32 personagens não mostram essa linha no card (fica só elemento + arma). Se quiser preencher, precisa visitar a página de cada um (mesmo fluxo usado pra Phrolova) ou achar outra fonte com esse dado em lista
- [ ] **Conteúdo de guia dos outros 52 personagens** (Cartethyia incluída) — só Phrolova tem guia completo, e ela mesma serve de padrão a validar antes de replicar. Preencher `detail` em `src/data/characters.ts` conforme forem sendo estudados (fluxo reaproveitável: link do guia → extrair texto/imagens → preencher `characters.ts` + baixar assets em `public/img/`)
- [ ] **Conteúdo das 6 Mecânicas** — nenhum modelo de dado foi definido ainda; quando o primeiro guia de mecânica for escrito, desenhar a estrutura de seções pra ela
- [ ] **Stats numéricos de arma da Phrolova** (rolls exatos tipo "ATK 587 · Crit Rate 24,3%", em vez do `%` de desempenho que já existe) — tentei buscar via web e não achei números confiáveis (respostas incompletas/conflitantes, wiki Fandom bloqueou fetch com 402). Precisa ou de uma fonte melhor ou dos valores conferidos direto no jogo
- [ ] **Dados dos Echoes da Phrolova parecem desatualizados/errados** — o set "Endless Resonance" cadastrado em `characters.ts` não parece existir no jogo (não achei em nenhuma fonte), e o build recomendado real (pesquisado em 2026) é 3 peças de Dream of the Lost + eco principal Nightmare: Hecate + 2 peças de Havoc Eclipse ou Lingering Tunes — bem diferente da estrutura "Dream of the Lost + [set]" que está lá hoje. Corrigir a composição antes de tentar adicionar o texto do efeito de sonata de cada set
- [ ] **Efeito de sonata nos cards de Echo** — a seção só mostra custo/stat principal/sub-stat, não o que o set realmente faz. Já tenho o efeito real de Havoc Eclipse (2pc +10% Dano Havoc, 5pc +7,5% por 15s empilhando 4x) e Frosty Resolve (2pc +12% Dano de Habilidade, 5pc +22,5% Dano Glacio/+18% Dano de Habilidade) prontos pra usar assim que o ponto acima for resolvido
- [ ] **7 personagens ainda não lançados no jogo** (ver lista acima) ficaram de fora do roster — adicionar quando saírem e a Prydwen atualizar elemento/arma deles
- [ ] **Rover (Spectro)** — tem card art agora (veio no lote novo), mas ainda não foi conferida visualmente com atenção
- [ ] `mini/` ficou obsoleta como fonte de imagem do roster (era wuthering.gg, agora usamos prydwen.gg) — pode limpar/arquivar quando quiser, não faz mal ficar
- [ ] **Variante `-lq` de imagem (150px) ficou sem uso** — o card de Sinergia de Time usava ela mas ficou borrado (o card renderiza maior que 150px em vários layouts), trocado pra `-md`. Os 53 arquivos `-lq.webp` continuam gerados e versionados; decidir se vale manter pra um uso futuro ou remover do script e do repo
- [ ] Deploy (Vercel/Netlify/GitHub Pages?) — ainda não decidido; lembrar que rotas tipo `/cartethyia` recarregadas direto precisam de fallback SPA configurado no host escolhido

## Roteiro pra montar o guia de um personagem

Checklist pra usar sempre que for preencher o `detail` de um personagem (ex: "monta o da Aemeath"). Existe porque a Phrolova — o próprio modelo-padrão — foi ao ar com um set de echo que não existe e rotações de time inventadas com a mesma cara visual de dado real. A regra de ouro: **número/nome de jogo sem fonte cruzada não entra; vira pendência em vez de suposição.**

**0. Fonte**
- prydwen.gg é a canônica (`/wuthering-waves/characters/{slug}`). Costuma bloquear fetch direto (403) — usar WebSearch citando "prydwen" e cruzar com uma segunda fonte (game8.co, wutheringwaves-builds.com) antes de aceitar qualquer número, nome de set ou nome de arma.
- Nunca estimar/inventar valor de jogo (%, dano, ATK, efeito de set, rotação específica de um trio de personagens). Sem fonte confiável = campo fica de fora, registrado como pendência.

**1. Overview** — `weapon`, `rarityStars`, `overviewBullets` (3–5 frases curtas, sem parágrafo)

**2. Echoes** (`echoSets[]`) — `label`, `cost`, `mainStat`, `subStat`, `slug`, e o efeito real de sonata (2pc/5pc) quando for preenchido; confirmar que o set citado existe de fato antes de aceitar o nome. Ícone em `public/img/echoes/{slug}.webp`, cadastrar em `HAS_ECHO_IMAGE` (`images.ts`)

**3. Synergy** (`synergyPairs[]`) — `members[]` (ids batendo com `characters.ts`), `rotation` (uma linha) e `notes[]` (2–3 bullets). Só vira combo "real" se achar fonte específica pra aquele trio exato de personagens — senão, pula a combo em vez de preencher com hipótese

**4. Weapons** (`weapons[]`) — `name`, `stat` (substats), `slug`, `pct` (% de desempenho da prydwen), `isSignature`, e `rolls` (ATK base + substat exato) só quando a fonte confirmar o valor. Ícone em `public/img/weapons/{slug}.webp`, cadastrar em `HAS_WEAPON_IMAGE`

**5. Priority** (`priorityChips[]`) — sequência `{label, sep}` usando os 5 nomes canônicos por extenso (Circuito Forte, Ataque Normal, Habilidade de Ressonância, Liberação de Ressonância, Habilidade de Introdução); o encurtamento pro desktop já existe em `PrioritySection.tsx`, não duplicar aqui

**6. Imagens** — card art já existe pra todo o roster (`{id}-hq/md/lq.webp`); se for personagem que ainda não tinha `.webp` nenhum, rodar `node scripts/generate-character-image-variants.mjs` de novo (ele ignora quem já está sufixado)

**7. Antes de considerar pronto** — `npm run build` + `npm run lint` limpos, e todo campo que não passou pela verificação de fonte cruzada listado em Pendências (não publicado em silêncio como se fosse verificado)

## Comandos úteis

```bash
npm run dev       # servidor de desenvolvimento (http://localhost:5173)
npm run build     # build de produção
npm run lint      # oxlint
```

## Decisões tomadas (pra não re-perguntar)

- Roteamento com URL própria por personagem/mecânica (não só estado em memória) — pra poder favoritar/compartilhar
- TypeScript, não JS puro
- Design/ e mini/ ficam dentro do próprio repositório, versionados, como referência viva (mesmo que mini/ tenha ficado obsoleta pro roster)
- Imagens de personagem: card art real da prydwen.gg pra todo mundo (não mais placeholder nem ícone quadrado) — mudou de plano no meio do caminho porque a fonte se mostrou boa o suficiente pra cobrir o roster inteiro de uma vez
- Imagens de arma/echo ficam em pastas próprias por slug (`public/img/weapons/`, `public/img/echoes/`), não por personagem — assim qualquer personagem futuro que use a mesma arma/set reaproveita o arquivo já baixado, sem rebaixar
- Ids do roster seguem a grafia/slug da prydwen.gg como fonte canônica quando há divergência com o protótipo de design original (ela é mais confiável e tem todo o roster, não só uma amostra)
- Role/especialidade não é bloqueante pro registro do roster — melhor deixar de fora do que inventar; só entra quando tiver fonte confiável
