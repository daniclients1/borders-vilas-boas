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
**Preview:** config `borders` no `launch.json` → `autoPort: true` (porta 3001 preferida, mas cede para outra se ocupada)

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
- `hero-loop.mp4` — vídeo hero loop (12.3MB, 720p, sem áudio — já comprimido com FFmpeg CRF26; será substituído por vídeo real do cliente)
- `sobre.jpg` — foto seção Sobre (Border Collie)
- `familia.jpg` — foto seção Família (criança com filhote)
- `bordercollielogo.jpeg` — logo oficial do cliente

## Estrutura de Seções (ordem em page.tsx)
1. **Hero** (`#inicio`) — vídeo loop full-bleed (`/hero-loop.mp4`, 12.3MB 720p comprimido), título Fraunces uppercase, curva SVG cream na base. `min-h-[85vh] sm:min-h-[92vh]` para mostrar peek da seção seguinte no mobile. CTA WhatsApp visível só no mobile (`sm:hidden`).
2. **Sobre** (`#sobre`) — split: foto `sobre.jpg` (next/image, priority) + texto raça
3. **Família** (`#familia`) — split invertido: texto + foto `familia.jpg` (next/image) + logo flutuante no canto. Stats grid `grid-cols-3 gap-3 sm:gap-6` com `text-lg sm:text-2xl` para caber em mobile.
4. **Diferenciais** (`#diferenciais`) — 6 pilares em grid `sm:grid-cols-2 lg:grid-cols-3`, sem caixas, com divisórias
5. **Plantel** (`#plantel`) — showcase editorial interativo. **Mobile**: tabs pílula + foto portrait (3:4, max-h-72vh) com overlay + bio abaixo em cream. **Desktop**: grid 2 colunas — foto contida `h-[520px] rounded-3xl` + painel de info (contador, trait, bio em text-lg, pills de navegação). Troca de cão com cross-fade + slide direcional (Framer Motion AnimatePresence custom dir). Nomes/fotos são EXEMPLOS — Aurora, Maple, Thor, Uísque em `src/lib/site.ts`.
6. **Como funciona** (`#como-funciona`) — 4 passos, `grid gap-10 sm:grid-cols-2 lg:grid-cols-4`, linha conectora só no desktop.
7. **Filhotes** (`#filhotes`) — full-bleed forest com checklist e CTA WhatsApp
8. **Depoimentos** (`#depoimentos`) — carrossel coverflow SEM rotação automática, navegação por setas + swipe touch + dots. Hint "Deslize para navegar" visível só no mobile (`sm:hidden`). Transição 0.45s.
9. **Galeria** (`#galeria`) — cabeçalho centralizado (eyebrow + título + botão Instagram). Duas faixas marquee: superior 45s (direita→esquerda, `w-60/w-72`), inferior 45s (esquerda→direita, `w-40/w-48`, `animationDirection: reverse` inline). Placeholders duotone (fotos reais pendentes).
10. **FAQ** (`#faq`) — acordeão animado (Framer Motion AnimatePresence)
11. **Contato** (`#contato`) — canais de contato (linhas com `divide-y divide-cream-50/8`, ícones `rounded-2xl` sólidos: WA verde, Instagram gradiente oficial, endereço sage) + compositor WhatsApp + Google Maps embed `h-64 sm:h-96`.
12. **Footer** — logo + nav + contato com endereço completo
13. **WhatsAppFloat** — botão flutuante aparece após 500px de scroll, `bottom-6 right-5`, ping 2.4s

## Componentes Especiais
- `BrandMark.tsx` — usa `<Image src="/bordercollielogo.jpeg">` em span `rounded-full overflow-hidden`
- `Logo` (exportado de BrandMark.tsx) — BrandMark + texto "Borders Vilas Boas / Canil de Border Collies"
- `ui/Photo.tsx` — placeholder duotone com gradiente + textura patinhas (usado até chegar fotos reais)
- `ui/Reveal.tsx` — fade+translate-y ao entrar na viewport (Framer Motion, respeita reduced-motion)
- `ui/ZoomReveal.tsx` — zoom-out ao entrar na viewport (usado nas fotos About/Family)
- `ui/Counter.tsx` — contador 0→N animado ao entrar na viewport
- `WhatsAppIcon.tsx` / `InstagramIcon.tsx` — logos oficiais SVG
- `ui/Button.tsx` — `min-h-[44px]` em ambos os tamanhos (md e lg) para cumprir touch target mínimo

## Animações (tailwind.config.ts)
- `animate-marquee` — galeria faixa superior (45s linear infinite, direita→esquerda)
- `marqueeReverse` keyframe + `animate-marquee-reverse` — definidos no config, mas faixa inferior usa `animationDirection: "reverse"` inline (mais confiável no build)
- `animate-[ping_2.4s_ease-in-out_infinite]` — pulse WhatsApp float (inline no componente)
- Removidas: kenburns, float, fade-up, shimmer

## Problema Recorrente: EBUSY (OneDrive)
O OneDrive às vezes bloqueia arquivos do `.next/`. Solução: parar servidor → `Remove-Item -Recurse -Force .next` → reiniciar.


## Pendências de Conteúdo (aguardando cliente)
- [ ] **Fotos do plantel** — Aurora, Maple, Thor, Uísque são nomes/fotos de exemplo em `src/lib/site.ts`
- [ ] **Fotos da galeria** — marquee usa `Photo` placeholders duotone; trocar por fotos reais
- [ ] **Fotos nos depoimentos** — Polaroids usam `Photo` placeholders; trocar por fotos reais das famílias
- [ ] **Depoimentos reais** — os 6 depoimentos em `src/lib/site.ts` são exemplos inventados
- [ ] **Vídeo hero real** — `hero-loop.mp4` atual é placeholder comprimido (12.3MB 720p); substituir por vídeo real do cliente e recomprimir com FFmpeg (comando: veja seção Ferramentas abaixo)

## Melhorias Aplicadas (sessão de revisão mobile)
- Hero: altura `min-h-[85vh]` no mobile + CTA WhatsApp exclusivo mobile
- Família: stats grid gap e font-size responsivos para não quebrar linha no mobile
- HowItWorks: `sm:grid-cols-2` para grid 2×2 em tablets
- Plantel: redesign completo — showcase editorial com tabs mobile e card 2-col desktop
- Contato: canais redesenhados (sem glass-card) + ícone Instagram com gradiente oficial + mapa responsivo `h-64 sm:h-96`
- Button: `min-h-[44px]` em md e lg (touch target Apple/Google HIG)
- Depoimentos: hint "Deslize para navegar" no mobile
- WhatsApp Float: `bottom-6` (margem safe area iOS)

## Melhorias Sugeridas (pendentes)
- Faixa CTA antes do rodapé ("Pronto para conhecer seu Border Collie?")
- Open Graph image dedicada (foto de Border Collie para preview no WhatsApp/redes)
- Domínio personalizado quando disponível (apontar para Vercel)

## Ferramentas Instaladas
- **FFmpeg 8.1.1** — instalado via winget (`winget install Gyan.FFmpeg`). Usar para comprimir vídeos futuros:
  ```powershell
  # Comprimir vídeo para hero (720p, sem áudio, web-ready):
  ffmpeg -i "input.mp4" -vf "scale=-2:720" -c:v libx264 -crf 26 -preset slow -an -movflags +faststart "output.mp4"
  ```
