# Design — MomboLabs

Tema claro com laranja, definido pela auditoria visual de 25/09/2026 (substitui o tema verde-limão). Tokens em `_ds/mambolabs-design-system-…/tokens/`.

## Mundo
Fundo creme claro, cartões brancos com borda fina, laranja só em CTA primário e destaques. Seções alternam `--bg` e `--surface` para separar os blocos. Áreas escuras (`--dark`) apenas no painel do hero, nas imagens de exemplo e no rodapé.

## Cores
| Papel | Token | Valor |
|---|---|---|
| Fundo | `--bg` | #FAF9F5 |
| Seção alternada | `--surface` | #F4F2EE |
| Cartão / campo | `--card` | #FFFFFF |
| Texto | `--text` | #0D0912 |
| Texto secundário | `--text-muted` | #5B5566 |
| Borda | `--border` / `--border-strong` | #D9D6DE / #BDB8C6 |
| Destaque / CTA | `--accent` | #FF7A1A |
| Texto sobre laranja | `--accent-contrast` | #0D0912 |
| Laranja como texto | `--accent-ink` | #B34A00 |
| Chips / fundos suaves | `--accent-soft` / `--accent-line` | rgba(255,122,26,.08) / .25 |
| Escuro | `--dark` | #0D0912 |
| WhatsApp | `--whatsapp` | #25D366 (texto escuro) |

Regras: #FF7A1A nunca como cor de texto sobre fundo claro (use `--accent-ink`), exceto o "Labs" do logotipo. Texto sobre laranja é sempre `--accent-contrast`. Os nomes antigos (`--graphite-*`, `--text-*-dark`, `--accent-500`…) são aliases lidos pelo `_ds_bundle.js`; não usar em código novo.

## Tipografia
- Manrope 700 nos títulos (h1 72px, h2 52px, h3 16–22px).
- Inter no texto e nos rótulos (rótulos: 12px, 600, caixa alta, tracking 0.08em).
- Escala única: 12 / 14 / 16 / 18 / 22 / 32 / 52 / 72. Nenhum outro tamanho.
- `button, input, select, textarea { font-family: inherit }` no CSS global.

## Componentes
- Botão primário: `Button variant="primary"` (laranja, texto escuro, pílula).
- Botão secundário: `Button variant="ghost" className="mb-outline"` (contorno 1.5px `--text`).
- WhatsApp: `className="mb-wa"` com `icon={<Icon name="whatsapp" … />}`.
- Chips: fundo `--accent-soft`, borda `--accent-line`, texto `--accent-ink`.
- Ícones: `IconBadge` (fundo `--accent-soft`, traço `--accent-ink`); caminhos em `sections/Icons.jsx`.
- Não usar a variante `dark` do Button (fundo e texto resolvem para a mesma cor) nem o `Tag` do pacote.

## Forma e ritmo
Raios 8 / 16 / 24px e pílula. Seções com 96px verticais (64px no celular). Grades viram 1 coluna abaixo de 860px. Elevação no hover com `.mb-lift`.

## Assinaturas
- `.mb-mark`: marca-texto laranja translúcido atrás de palavras-chave.
- Pulso "caos → ritmo": trecho irregular em cinza, trecho estável em laranja.
- Diagrama de sistemas desconectados (seção Problema).

## Movimento
Entrada escalonada no hero, traço do pulso desenhado, revelação ao rolar (`animation-timeline: view()`, aprimoramento progressivo), elevação de cartões. Tudo desligado com `prefers-reduced-motion`.

## Pendências de conteúdo
- "Mais escolhido" no plano do meio foi pedido pela auditoria; confirmar com dados reais.
- Cards de cenário típico mostram o indicador acompanhado sem valores; preencher com números reais quando houver casos.
