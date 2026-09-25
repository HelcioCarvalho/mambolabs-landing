# Design — MomboLabs

Base: design system "Unlock Potential — Pro Plan" (Neuform), aplicado em 25/09/2026. Tokens em `_ds/mambolabs-design-system-…/tokens/`.

## Mundo
Tema claro, técnico e limpo. Fundo cinza-claro com cartões brancos; o verde-limão é a energia da marca e aparece em ações, marca-texto e faixas. Três áreas escuras (`--night`) funcionam como palco para o limão: painel do pulso no hero, faixa de benefícios, plano em destaque, rodapé.

## Cores
| Papel | Token | Valor |
|---|---|---|
| Fundo | `--canvas` | #ECEEF0 |
| Cartão | `--paper` | #FFFFFF |
| Ação / destaque | `--lime` | #D4ED57 |
| Superfície de apoio | `--lime-soft` | #DCE8AD |
| Texto de destaque sobre claro | `--olive` | #5A6A18 |
| Texto | `--ink` / `--ink-2` / `--ink-3` | #111827 / #4B5563 / #5F6673 |
| Painéis escuros | `--night` | #2A2B22 |
| Linhas | `--hairline` | rgba(42,43,34,.14) |

Regras: limão nunca como cor de texto sobre fundo claro (use `--olive`); texto sobre limão é sempre `--night`/`--ink`. O laranja existe só dentro do logo.

Os nomes antigos (`--graphite-*`, `--text-*-dark`, `--accent-*`) são aliases lidos pelo `_ds_bundle.js`; "-dark" significa "sobre o fundo da página". Não usar a variante `dark` do Button (texto e fundo resolvem para a mesma cor).

## Tipografia
- Inter (500) para títulos: display grande, entrelinha 1.04, tracking negativo.
- Inter para texto corrido.
- Michroma (`--font-accent`) só em chamadas curtas, números de etapa e selos. Nunca em parágrafos.
- JetBrains Mono (600, 12px, caixa alta) para rótulos e metadados.
- Sem eyebrow/kicker acima de títulos.

## Forma
Raios: controle 8px, cartão 16px, painel 24px, pílula para botões, selos e chips. Seções com 88px verticais (64px no celular). Cartões com borda hairline; elevação no hover (`.mb-lift`).

## Assinaturas
- `.mb-mark`: marca-texto em limão atrás de palavras-chave em títulos.
- Pulso "caos → ritmo" (`PulseLine`/`pulsePath`): cinza no trecho caótico, limão (fundo escuro) ou oliva (fundo claro) no trecho estável.
- Imagens ilustrativas em escala de cinza sobre painel `--night`, com selo limão.

## Movimento
Entrada escalonada no hero (`.mb-rise-*`), traço do pulso desenhado, revelação ao rolar via `animation-timeline: view()` (aprimoramento progressivo), elevação de cartões. Tudo desligado com `prefers-reduced-motion`.
