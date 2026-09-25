# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Donos, gestores e líderes de operação de empresas brasileiras (de pequeno a médio porte) que convivem com tarefas manuais, planilhas e sistemas desconectados (ERP, CRM, WhatsApp, e-mail). Chegam ao site avaliando se vale conversar com a MomboLabs. *(Inferido do conteúdo do site; confirmar.)*

## Product Purpose
A MomboLabs cria agentes de IA, automações, integrações e sistemas personalizados que fazem a operação de uma empresa funcionar "no mesmo ritmo". O site existe para gerar pedidos de diagnóstico (formulário e WhatsApp).

## Positioning
Começa pelo diagnóstico do processo, não pela ferramenta: entende a operação, prioriza por impacto e entrega em etapas, integrando o que o cliente já usa, sem se prender a uma única plataforma.

## Operating Context
Atendimento também pelo WhatsApp Business Platform (Meta), com agentes de IA. Páginas legais publicadas para a Meta: /privacidade.html, /termos.html, /exclusao-de-dados.html (HTML estático, legível sem JavaScript).

## Capabilities and Constraints
- Site estático hospedado na Hostinger, com deploy automático a partir do `main` de github.com/HelcioCarvalho/mambolabs-landing. Push no main publica em produção.
- Subdomínios de clientes vivem dentro do mesmo `public_html`; nunca substituir a pasta inteira.
- A landing é renderizada por `support.js` a partir de `sections/*.jsx`; páginas que precisam ser lidas por robôs devem ser HTML estático.
- Em aberto: CNPJ/razão social, número de WhatsApp público.

## Brand Commitments
- Nome: **MomboLabs** (não "MamboLabs"); domínio mombolabs.com; e-mail contato@mombolabs.com.
- Logo: lêmure de boné laranja + wordmark "Mombo" preto / "Labs" laranja (`images/mombolabs-logo-original.png`). O logo não é recolorido; em fundo escuro usa-se `images/mombolabs-logo-dark.webp` (wordmark em creme).
- Voz: português do Brasil, direta, sem jargão, foco em operação e resultado.

## Evidence on Hand
Nenhum estudo de caso, depoimento, cliente citável ou número de resultado publicado ainda. Não inventar.

## Product Principles
1. Processo antes de tecnologia.
2. Integrar o que o cliente já tem antes de substituir.
3. Entregar em etapas que provem valor.
4. Supervisão humana e proteção de dados em processos críticos.
