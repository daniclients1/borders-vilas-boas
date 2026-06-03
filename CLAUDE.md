# Borders Vilas Boas — Contexto do Projeto

## Localização
`C:\Users\Daniel\OneDrive\Claude Code Projetos\Automação de Sites\BorderCollie VilasBoas\`

## Como rodar localmente
```powershell
# Se der erro EBUSY (OneDrive bloqueando), limpar cache primeiro:
Remove-Item -Recurse -Force ".next"
# Subir servidor dev (a partir da pasta pai "Automação de Sites"):
npm --prefix "BorderCollie VilasBoas" run dev
```
**Preview:** config `borders` no `launch.json` → porta 3000

## Stack
Next.js 14 (App Router) + TypeScript + Tailwind v3 + Framer Motion + Lucide React

## Repositório e Deploy
- **GitHub:** `https://github.com/daniclients1/borders-vilas-boas`
- **Vercel:** `https://borders-vilas-boas.vercel.app` *(ver seção Pendências abaixo)*
- **Vercel projeto:** `borders-vilas-boas` | Team: `daniel-torsani-rosa-s-projects`
- **Vercel project ID:** `prj_t5mrmJedjn8SymRCl5uiNb3wNtrx`
- **Vercel team ID:** `team_ArdDQb7va0tZ0dImW9DZfsFt`
- **Para fazer novo deploy:** `vercel --prod --yes` (CLI já instalado e autenticado como `daniclients1`)

## Identidade Visual
- **Paleta:** sage (verde), cream, forest (verde escuro), tan (caramelo) — tokens em `tailwind.config.ts`
- **Fontes:** Fraunces (display/títulos) + Inter (corpo) — Dancing Script foi REMOVIDA
- **Logo real:** `public/bordercollielogo.jpeg` — badge circular, fundo cream, "BORDERS VILAS BOAS"
- **Favicon:** `src/app/icon.svg` — SVG com logo em base64 clipado em círculo (40KB)
- **Apple icon:** `src/app/apple-icon.jpeg`

## Contato / Dados do Cliente
- **WhatsApp:** `5547988934120` / `(47) 98893-4120`
- **Instagram:** `@bordersvilasboas` → `https://www.instagram.com/bordersvilasboas/`
- **Endereço:** Rua João Januário da Silva, 6046 — Bairro Ratones — Florianópolis, SC — CEP 88052-200
- Todos os dados centralizados em `src/lib/site.ts`

## Arquivos Públicos (public/)
- `VideoloopingCabeçalho.mp4` — vídeo hero loop (53MB — comprimir é pendência)
- `sobre.jpg` — foto seção Sobre (Border Collie)
- `familia.jpg` — foto seção Família (criança com filhote)
- `bordercollielogo.jpeg` — logo oficial do cliente

## Estrutura de Seções (ordem em page.tsx)
1. **Hero** (`#inicio`) — vídeo loop full-bleed, título Fraunces uppercase, curva SVG cream na base
2. **Sobre** (`#sobre`) — split: foto `sobre.jpg` (next/image, priority) + texto raça
3. **Família** (`#familia`) — split invertido: texto + foto `familia.jpg` (next/image) + logo flutuante no canto
4. **Diferenciais** (`#diferenciais`) — 6 pilares em grid, sem caixas, com divisórias
5. **Plantel** (`#plantel`) — 4 retratos verticais 2-col mobile / 4-col desktop (nomes: Aurora, Maple, Thor, Uísque — EXEMPLOS)
6. **Como funciona** (`#como-funciona`) — 4 passos, linha conectora desktop, animação só na entrada (hover removido)
7. **Filhotes** (`#filhotes`) — full-bleed forest com checklist e CTA WhatsApp
8. **Depoimentos** (`#depoimentos`) — carrossel coverflow auto-rotativo 6s, suporte a swipe touch no mobile
9. **Galeria** (`#galeria`) — marquee 45s com placeholders duotone (fotos reais pendentes)
10. **FAQ** (`#faq`) — acordeão animado (Framer Motion AnimatePresence)
11. **Contato** (`#contato`) — compositor WhatsApp + Google Maps embed (Rua João Januário)
12. **Footer** — logo + nav + contato com endereço completo
13. **WhatsAppFloat** — botão flutuante aparece após 500px de scroll, ping 2.4s

## Componentes Especiais
- `BrandMark.tsx` — usa `<Image src="/bordercollielogo.jpeg">` em span `rounded-full overflow-hidden`
- `Logo` (exportado de BrandMark.tsx) — BrandMark + texto "Borders Vilas Boas / Canil de Border Collies"
- `ui/Photo.tsx` — placeholder duotone com gradiente + textura patinhas (usado até chegar fotos reais)
- `ui/Reveal.tsx` — fade+translate-y ao entrar na viewport (Framer Motion, respeita reduced-motion)
- `ui/ZoomReveal.tsx` — zoom-out ao entrar na viewport (usado nas fotos About/Family)
- `ui/Counter.tsx` — contador 0→N animado ao entrar na viewport
- `WhatsAppIcon.tsx` / `InstagramIcon.tsx` — logos oficiais SVG

## Animações (tailwind.config.ts)
- `animate-marquee` — galeria deslizante (45s linear infinite) — ÚNICA animação Tailwind restante
- `animate-[ping_2.4s_ease-in-out_infinite]` — pulse WhatsApp float (inline no componente)
- Removidas: kenburns, float, fade-up, shimmer

## Problema Recorrente: EBUSY (OneDrive)
O OneDrive às vezes bloqueia arquivos do `.next/`. Solução: parar servidor → `Remove-Item -Recurse -Force .next` → reiniciar.

---

## ⚠️ PENDÊNCIA CRÍTICA: Deploy Vercel retornando 404

**Situação:** Build compila com sucesso (`✓ Compiled successfully`, 6 páginas estáticas), deployment mostra `READY`, mas TODAS as URLs retornam `404: NOT_FOUND` da Vercel.

**O que já foi feito:**
- SSO Protection desativada via API (`ssoProtection: null`)
- Redeploy forçado sem cache (`vercel --prod --force`)
- Deployment ID mais recente: `dpl_DUg8BcdpiE4Up1GYCE3JhnLuUVy4`
- Problema persiste em todas as URLs (alias e URL direta)

**Suspeitas a investigar:**
1. `src/app/icon.svg` com 40KB de base64 embutido — pode estar causando problema no output do Next.js (rota `/icon.svg` aparece com 0 B no build)
2. Ausência de `next.config.js` / `next.config.ts` — projeto não tem arquivo de config explícito
3. Conflito entre os 3 projetos Vercel criados (`borders-vilas-boas`, `canil-borders-vilas-boas`, `borders-vilas-boas-788h`)
4. Vídeo com caracteres especiais no nome (`VideoloopingCabeçalho.mp4`) pode causar problema no upload

**Próximos passos sugeridos para debugar:**
- Tentar mover `icon.svg` para `public/` e remover de `src/app/` (deixar só apple-icon.jpeg)
- Criar `next.config.js` mínimo: `module.exports = {}`
- Verificar os outros projetos duplicados no Vercel dashboard e deletá-los
- Tentar deploy sem o vídeo (renomear no .gitignore) para isolar o problema

---

## Pendências de Conteúdo (aguardando cliente)
- [ ] **Fotos do plantel** — Aurora, Maple, Thor, Uísque são nomes/fotos de exemplo em `src/lib/site.ts`
- [ ] **Fotos da galeria** — marquee usa `Photo` placeholders duotone; trocar por fotos reais
- [ ] **Fotos nos depoimentos** — Polaroids usam `Photo` placeholders; trocar por fotos reais das famílias
- [ ] **Depoimentos reais** — os 6 depoimentos em `src/lib/site.ts` são exemplos inventados
- [ ] **Comprimir vídeo** — `VideoloopingCabeçalho.mp4` tem 53MB; ideal < 8MB para Vercel/performance

## Melhorias Sugeridas
- Faixa CTA antes do rodapé ("Pronto para conhecer seu Border Collie?")
- Open Graph image dedicada (foto de Border Collie para preview no WhatsApp/redes)
- Domínio personalizado quando disponível (apontar para Vercel)
