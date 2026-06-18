# Base Vitrine Moda Premium

Base profissional de vitrine online para lojas de moda, boutiques e marcas que vendem pelo WhatsApp.

## Stack

- React 19
- TypeScript
- Vite
- CSS responsivo sem dependência de framework visual
- Dados centralizados em `src/data/store.ts`

## Como rodar

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

## Estrutura principal

```txt
src/
├─ App.tsx
├─ main.tsx
├─ styles.css
└─ data/
   └─ store.ts
```

## Como adaptar para uma loja

Edite o arquivo:

```txt
src/data/store.ts
```

Ali ficam:

- nome da marca
- WhatsApp
- Instagram
- endereço
- categorias
- produtos
- cores
- tamanhos
- imagens
- textos de produto

## Deploy na Vercel

- Framework: Vite
- Build command: `pnpm build`
- Output directory: `dist`

## Observação

Este repositório foi organizado para a raiz ser o app principal. Pastas antigas geradas pelo Replit/Lovable podem permanecer no histórico, mas o projeto pronto para uso está na raiz.
