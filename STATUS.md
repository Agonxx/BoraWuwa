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
  data/            — types, elements (cores por elemento), characters (roster de 20), mechanics (6 itens), images (mapa de thumbnails reais)
  components/       — TabBar, FilterChip, CharacterCard, MechanicCard, ImageSlot (compartilhados)
  components/characters/ — galeria, detalhe, seções (Overview/Echoes/Synergy/Weapons/Priority), TOC desktop, bottom sheet mobile
  components/mechanics/  — galeria e detalhe (placeholder puro por enquanto)
  hooks/useIsDesktop.ts — breakpoint 900px via JS (não CSS media query)
  styles/global.css — tokens de design (cores, raios, fontes)
public/img/characters/ — thumbnails reais (baixadas de wuthering.gg) dos personagens do roster + 3 nomes usados em Sinergia de Time
Design/ — spec de design original (README + protótipo .dc.html + screenshots), mantido como referência versionada
mini/   — pasta com os thumbnails brutos baixados de wuthering.gg (52 de 53 personagens do jogo, além dos 20 usados aqui)
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
- [x] Thumbnails reais (recorte quadrado) para os 20 personagens do roster + Ciaconna/Sanhua/Aero Rover (usados em Sinergia de Time) — portraits 3:4 grandes ainda são placeholder, já que a fonte só tinha ícone quadrado 100×100
- [x] Verificado via Playwright headless: as duas galerias, filtro, navegação entre abas, detalhe pronto/não-pronto, accordion mobile, bottom sheet — sem erros de console
- [x] Git inicializado na raiz do projeto

## Pendências / próximos passos

- [ ] **Fazer o primeiro commit e criar o repositório no GitHub** (ainda não foi criado remoto nem feito push — só está local)
- [ ] **Arte vertical 3:4** dos personagens (portrait/hero grande) — hoje usa o mesmo ícone quadrado 100×100 esticado via `object-fit: cover`, funciona mas não é a arte "de verdade" prevista no spec (`img-{id}-full`, PNG vertical transparente)
- [ ] **Ícones de arma e de echo** (36×36 e 32×32) — ainda são só placeholders tracejados, nenhuma arte disponível ainda
- [ ] **Conteúdo dos outros 19 personagens** — só Cartethyia tem guia completo; os demais mostram "Guia em construção". Preencher `detail` em `src/data/characters.ts` conforme forem sendo estudados
- [ ] **Conteúdo das 6 Mecânicas** — nenhum modelo de dado foi definido ainda (README trata isso como "intencionalmente vazio"); quando o primeiro guia de mecânica for escrito, desenhar a estrutura de seções pra ela (provavelmente parecida com as seções de personagem, mas isso é uma decisão em aberto)
- [ ] **Corrigir/confirmar o Rover (Spectro)** — não foi baixado; a página fonte (wuthering.gg/characters) retornou o mesmo ID de imagem do Rover (Aero), que é suspeito. Verificar manualmente antes de usar
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
