# STATUS — BoraWuwa

Relatório de progresso do projeto, pra retomar o trabalho em qualquer máquina/sessão sem perder o fio. Atualize esse arquivo conforme o projeto avança — ele é o "norte" combinado.

## O que é isso

Site pessoal de referência pra builds de Wuthering Waves: galeria de Ressonadores (filtrável por elemento) com guia de build por personagem, e uma segunda galeria de Mecânicas do jogo (ainda vazia de conteúdo). Sem lore, sem backend — é uma ferramenta estática pra consulta rápida.

Spec de design completo em [`Design/README.md`](Design/README.md) e no protótipo [`Design/Wuthering Waves Hub.dc.html`](<Design/Wuthering Waves Hub.dc.html>) (não é pra copiar como código, é a referência de layout/tokens/comportamento). Screenshots de referência em `Design/screenshots/`.

## Stack

- React + Vite + TypeScript
- react-router-dom (rotas: `/`, `/:characterId`, `/mecanicas`, `/mecanicas/:mechanicId`)
- Sem CSS framework — estilos inline em objeto JS (mesma abordagem do protótipo), tokens OKLCH centralizados em `src/styles/global.css` como CSS custom properties
- Sem backend/API — dados hardcoded em `src/data/*.ts`

## Estrutura

```
src/
  data/            — types, elements (cores por elemento), characters (roster de 21: 20 + Phrolova), mechanics (6 itens), images (mapa de thumbnails/ícones de arma/echo reais)
  components/       — TabBar, FilterChip, CharacterCard, MechanicCard, ImageSlot (compartilhados)
  components/characters/ — galeria, detalhe, seções (Overview/Echoes/Synergy/Weapons/Priority), TOC desktop, bottom sheet mobile
  components/mechanics/  — galeria e detalhe (placeholder puro por enquanto)
  hooks/useIsDesktop.ts — breakpoint 900px via JS (não CSS media query)
  styles/global.css — tokens de design (cores, raios, fontes)
public/img/characters/ — thumbnails reais (wuthering.gg) dos personagens do roster + Phrolova (arte especial, ver abaixo) + nomes usados em Sinergia de Time
public/img/weapons/    — ícones de arma (prydwen.gg), guardados por slug e reutilizáveis entre personagens que citam a mesma arma
public/img/echoes/     — ícones de set de echo (prydwen.gg), mesma lógica de reuso por slug
Design/ — spec de design original (README + protótipo .dc.html + screenshots), mantido como referência versionada
mini/   — pasta com os thumbnails brutos baixados de wuthering.gg (52 de 53 personagens do jogo, além dos usados no roster)
```

## O que já funciona

- [x] Scaffold Vite + React + TS, `react-router-dom` instalado
- [x] Camada de dados tipada (personagens, elementos, mecânicas)
- [x] Design tokens (cores OKLCH, tipografia Space Grotesk/Manrope, raios) fiéis ao spec
- [x] Galeria de Ressonadores: grid responsivo, filtro por elemento, badge "Em construção"
- [x] Tab bar Ressonadores/Mecânicas (roteada por URL: `/` vs `/mecanicas`)
- [x] Galeria de Mecânicas: 6 cards placeholder
- [x] Detalhe de personagem: header com portrait/badges, 5 seções de conteúdo (Cartethyia com dado real completo; os outros 19 mostram "Guia em construção")
- [x] Layout desktop (sidebar TOC fixa + tudo expandido) vs mobile (accordion + botão flutuante ☰ + bottom sheet), breakpoint 900px via JS
- [x] Scroll suave até seção ao clicar em item da TOC/bottom sheet
- [x] Detalhe de mecânica: shell mínimo (ícone + título + aviso de construção)
- [x] Thumbnails reais (recorte quadrado) para os 20 personagens do roster + Ciaconna/Sanhua/Aero Rover (usados em Sinergia de Time) — portraits 3:4 grandes ainda são placeholder pra maioria, já que a fonte só tinha ícone quadrado 100×100
- [x] Verificado via Playwright headless: as duas galerias, filtro, navegação entre abas, detalhe pronto/não-pronto, accordion mobile, bottom sheet — sem erros de console
- [x] Git inicializado na raiz do projeto, primeiro commit feito e publicado em [github.com/Agonxx/BoraWuwa](https://github.com/Agonxx/BoraWuwa)
- [x] **Phrolova (guia completo)** — extraída de [prydwen.gg/wuthering-waves/characters/phrolova](https://www.prydwen.gg/wuthering-waves/characters/phrolova): overview, 3 variantes de echo (Dream of the Lost + 2pc à escolha), top 5 armas com % de desempenho, 5 times de exemplo, prioridade de habilidades. Primeiro personagem com **arte vertical real** (`phrolova_full.webp` da Prydwen) no lugar do ícone quadrado, e primeiro com **ícones reais de arma e echo** (baixados de `cdn.prydwen.gg`, guardados em `public/img/weapons/` e `public/img/echoes/` por slug, reutilizáveis por qualquer outro personagem que cite a mesma arma/set)

## Pendências / próximos passos

- [ ] **Arte vertical 3:4** dos demais personagens (portrait/hero grande) — só a Phrolova tem arte vertical de verdade agora; o resto usa o ícone quadrado 100×100 esticado via `object-fit: cover`. Repetir o processo da Phrolova (buscar `{id}_full.webp` na Prydwen) quando fizer sentido
- [ ] **Rover (Spectro)** — segue sem imagem confiável (usado na sinergia da Phrolova, aparece como placeholder). A página wuthering.gg/characters retornou o mesmo ID de imagem do Rover (Aero) pra ele, que é suspeito; não usar até confirmar manualmente
- [ ] **Conteúdo dos outros 19 personagens do roster original** — só Cartethyia e Phrolova têm guia completo; os demais mostram "Guia em construção". Preencher `detail` em `src/data/characters.ts` conforme forem sendo estudados (o fluxo Phrolova — link de guia → extrair texto/imagens → preencher `characters.ts` + baixar assets em `public/img/` — é reaproveitável)
- [ ] **Conteúdo das 6 Mecânicas** — nenhum modelo de dado foi definido ainda (README trata isso como "intencionalmente vazio"); quando o primeiro guia de mecânica for escrito, desenhar a estrutura de seções pra ela (provavelmente parecida com as seções de personagem, mas isso é uma decisão em aberto)
- [ ] **Stats numéricos de arma** (tipo "ATK 412 · HP 72,2%" que a Cartethyia tem) — pra Phrolova usamos o % de desempenho da Prydwen em vez de rolls exatos, porque a página de guia não expõe isso (só a página de banco de dados de armas teria). Se quiser esse nível de detalhe, precisa de outra busca dedicada
- [ ] **Nomes com grafia divergente**: usamos `ciaconna` no dado interno (vindo do protótipo original) mas o asset baixado de wuthering.gg está com o nome `ciaccona` (grafia oficial provável) — ficou consistente porque renomeei o arquivo copiado, mas vale revisar a grafia correta em algum momento
- [ ] Deploy (Vercel/Netlify/GitHub Pages?) — ainda não decidido; lembrar que rotas tipo `/cartethyia` recarregadas direto precisam de fallback SPA configurado no host escolhido

## Comandos úteis

```bash
npm run dev       # servidor de desenvolvimento (http://localhost:5173)
npm run build     # build de produção
npm run lint      # oxlint
```

## Decisões tomadas (pra não re-perguntar)

- Roteamento com URL própria por personagem/mecânica (não só estado em memória) — pra poder favoritar/compartilhar
- TypeScript, não JS puro
- Design/ e mini/ ficam dentro do próprio repositório, versionados, como referência viva
- Imagens: usar os thumbnails reais já baixados como estão (recorte quadrado) até ter arte vertical de verdade — decisão pragmática, não estava no plano original que previa só placeholder
- Imagens de arma/echo ficam em pastas próprias por slug (`public/img/weapons/`, `public/img/echoes/`), não por personagem — assim qualquer personagem futuro que use a mesma arma/set reaproveita o arquivo já baixado, sem rebaixar
- Quando um personagem tem arte vertical de verdade disponível (caso da Phrolova), ela substitui o ícone quadrado padrão via um mapa de overrides em `src/data/images.ts` — o resto do roster continua no fallback quadrado até ganhar a mesma atenção
