/* @ds-bundle: {"format":4,"namespace":"MamboLabsDesignSystem_aa0c67","components":[{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"FormControls","sourcePath":"components/forms/FormControls.jsx"},{"name":"Input","sourcePath":"components/forms/FormControls.jsx"},{"name":"Textarea","sourcePath":"components/forms/FormControls.jsx"},{"name":"Select","sourcePath":"components/forms/FormControls.jsx"},{"name":"Checkbox","sourcePath":"components/forms/FormControls.jsx"},{"name":"Accordion","sourcePath":"components/layout/Accordion.jsx"},{"name":"Surfaces","sourcePath":"components/layout/Surfaces.jsx"},{"name":"Card","sourcePath":"components/layout/Surfaces.jsx"},{"name":"Badge","sourcePath":"components/layout/Surfaces.jsx"},{"name":"Tag","sourcePath":"components/layout/Surfaces.jsx"}],"sourceHashes":{"components/forms/Button.jsx":"9109dc92db4e","components/forms/FormControls.jsx":"81ebb50c0484","components/layout/Accordion.jsx":"2e0b15e93935","components/layout/Surfaces.jsx":"cb57f85f38a2","ui_kits/marketing-site/Benefits.jsx":"1fd5e890aefb","ui_kits/marketing-site/Contact.jsx":"e1f59ecf105d","ui_kits/marketing-site/Differentiators.jsx":"ab9ab035839b","ui_kits/marketing-site/Examples.jsx":"c32bbe2e21bb","ui_kits/marketing-site/Faq.jsx":"a4e537bd399a","ui_kits/marketing-site/Footer.jsx":"8caaca5fdd20","ui_kits/marketing-site/Header.jsx":"e6f4e7e2a9da","ui_kits/marketing-site/Hero.jsx":"907d3120fbd0","ui_kits/marketing-site/Journey.jsx":"c20d4aa4e13a","ui_kits/marketing-site/Pricing.jsx":"ce9b0416ab69","ui_kits/marketing-site/Problem.jsx":"038941de6a9e","ui_kits/marketing-site/ProofAbout.jsx":"ee1afdde76f8","ui_kits/marketing-site/Solutions.jsx":"bd4e52295d39","ui_kits/marketing-site/ValueProp.jsx":"45ad9151c13d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MamboLabsDesignSystem_aa0c67 = window.MamboLabsDesignSystem_aa0c67 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  ...rest
}) {
  const pad = size === 'sm' ? '10px 18px' : size === 'lg' ? '18px 32px' : '14px 26px';
  const fontSize = size === 'sm' ? 'var(--text-body-sm)' : 'var(--text-body-md)';
  const base = {
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--weight-semibold)',
    fontSize,
    padding: pad,
    borderRadius: 'var(--radius-pill)',
    border: '1px solid transparent',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'all var(--dur-fast) var(--ease-standard)',
    whiteSpace: 'nowrap'
  };
  const variants = {
    primary: {
      background: 'var(--accent-primary)',
      color: 'var(--graphite-950)'
    },
    dark: {
      background: 'var(--text-primary-dark)',
      color: 'var(--graphite-950)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-primary-dark)',
      border: '1px solid var(--border-dark)'
    },
    ghostLight: {
      background: 'transparent',
      color: 'var(--text-primary-light)',
      border: '1px solid var(--border-light)'
    },
    link: {
      background: 'transparent',
      color: 'var(--accent-primary)',
      padding: '4px 0',
      borderRadius: 0
    }
  };
  const style = {
    ...base,
    ...variants[variant]
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    style: style
  }, rest, {
    onMouseEnter: e => {
      if (variant === 'primary') e.currentTarget.style.background = 'var(--accent-primary-hover)';
      if (variant === 'ghost' || variant === 'ghostLight') e.currentTarget.style.borderColor = 'var(--accent-primary)';
    },
    onMouseLeave: e => {
      if (variant === 'primary') e.currentTarget.style.background = 'var(--accent-primary)';
      if (variant === 'ghost') e.currentTarget.style.borderColor = 'var(--border-dark)';
      if (variant === 'ghostLight') e.currentTarget.style.borderColor = 'var(--border-light)';
    }
  }), icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/FormControls.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FormControls = {
  Input: null,
  Textarea: null,
  Select: null,
  Checkbox: null
};
function Input({
  label,
  placeholder,
  type = 'text',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontFamily: 'var(--font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-label)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-secondary-dark)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    placeholder: placeholder
  }, rest, {
    style: {
      background: 'var(--surface-card-dark-raised)',
      border: '1px solid var(--border-dark)',
      borderRadius: 'var(--radius-md)',
      padding: '14px 16px',
      color: 'var(--text-primary-dark)',
      fontSize: 'var(--text-body-md)',
      outline: 'none',
      transition: 'border-color var(--dur-fast) var(--ease-standard)'
    },
    onFocus: e => e.currentTarget.style.borderColor = 'var(--focus-ring)',
    onBlur: e => e.currentTarget.style.borderColor = 'var(--border-dark)'
  })));
}
function Textarea({
  label,
  placeholder,
  rows = 4,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontFamily: 'var(--font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-label)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-secondary-dark)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)'
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    placeholder: placeholder
  }, rest, {
    style: {
      background: 'var(--surface-card-dark-raised)',
      border: '1px solid var(--border-dark)',
      borderRadius: 'var(--radius-md)',
      padding: '14px 16px',
      color: 'var(--text-primary-dark)',
      fontSize: 'var(--text-body-md)',
      outline: 'none',
      resize: 'vertical',
      fontFamily: 'inherit'
    },
    onFocus: e => e.currentTarget.style.borderColor = 'var(--focus-ring)',
    onBlur: e => e.currentTarget.style.borderColor = 'var(--border-dark)'
  })));
}
function Select({
  label,
  options = [],
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontFamily: 'var(--font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-label)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-secondary-dark)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)'
    }
  }, label), /*#__PURE__*/React.createElement("select", _extends({}, rest, {
    style: {
      background: 'var(--surface-card-dark-raised)',
      border: '1px solid var(--border-dark)',
      borderRadius: 'var(--radius-md)',
      padding: '14px 16px',
      color: 'var(--text-primary-dark)',
      fontSize: 'var(--text-body-md)',
      outline: 'none'
    }
  }), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o))));
}
function Checkbox({
  label,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-secondary-dark)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox"
  }, rest, {
    style: {
      width: '18px',
      height: '18px',
      accentColor: 'var(--accent-primary)'
    }
  })), label);
}
Object.assign(__ds_scope, { FormControls, Input, Textarea, Select, Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FormControls.jsx", error: String((e && e.message) || e) }); }

// components/layout/Accordion.jsx
try { (() => {
function Accordion({
  items = []
}) {
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'var(--font-body)'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderBottom: '1px solid var(--border-dark)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(open === i ? -1 : i),
    style: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '16px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      textAlign: 'left',
      padding: '22px 4px',
      color: 'var(--text-primary-dark)',
      fontSize: 'var(--text-body-lg)',
      fontWeight: 'var(--weight-medium)'
    }
  }, it.q, /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      width: '28px',
      height: '28px',
      borderRadius: '50%',
      border: '1px solid var(--border-dark)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--accent-primary)',
      transform: open === i ? 'rotate(45deg)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-standard)'
    }
  }, "+")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: open === i ? '240px' : '0px',
      overflow: 'hidden',
      transition: 'max-height var(--dur-slow) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 4px 22px',
      color: 'var(--text-secondary-dark)',
      fontSize: 'var(--text-body-md)',
      lineHeight: 'var(--lh-relaxed)',
      maxWidth: '640px'
    }
  }, it.a)))));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/layout/Surfaces.jsx
try { (() => {
const Surfaces = {
  Card: null,
  Badge: null,
  Tag: null
};
function Card({
  dark = true,
  padded = true,
  hover = false,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: dark ? 'var(--surface-card-dark)' : 'var(--surface-card-light)',
      border: `1px solid ${dark ? 'var(--border-dark)' : 'var(--border-light)'}`,
      borderRadius: 'var(--radius-lg)',
      padding: padded ? 'var(--space-8)' : 0,
      boxShadow: dark ? 'var(--shadow-card-dark)' : 'var(--shadow-card-light)',
      transition: 'transform var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-standard)',
      ...style
    },
    onMouseEnter: hover ? e => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.borderColor = 'var(--accent-primary)';
    } : undefined,
    onMouseLeave: hover ? e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.borderColor = dark ? 'var(--border-dark)' : 'var(--border-light)';
    } : undefined
  }, children);
}
function Badge({
  children,
  tone = 'accent'
}) {
  const tones = {
    accent: {
      background: 'var(--accent-primary-tint)',
      color: 'var(--accent-600)'
    },
    neutral: {
      background: 'var(--graphite-800)',
      color: 'var(--text-secondary-dark)'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-label)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)',
      padding: '6px 14px',
      borderRadius: 'var(--radius-pill)',
      ...tones[tone]
    }
  }, children);
}
function Tag({
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-secondary-dark)',
      background: 'var(--graphite-800)',
      border: '1px solid var(--border-dark)',
      borderRadius: 'var(--radius-sm)',
      padding: '6px 12px'
    }
  }, children);
}
Object.assign(__ds_scope, { Surfaces, Card, Badge, Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Surfaces.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Benefits.jsx
try { (() => {
const benStyles = {
  section: {
    padding: '128px 24px',
    background: 'var(--graphite-950)'
  },
  inner: {
    maxWidth: 'var(--container-max)',
    margin: '0 auto'
  },
  h2: {
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: 'var(--text-display-lg)',
    color: 'var(--white-soft)',
    margin: '0 0 48px',
    letterSpacing: '-0.02em',
    maxWidth: 640
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5,1fr)',
    gap: 1,
    background: 'var(--border-dark)',
    borderRadius: 'var(--radius-lg)',
    overflow: 'hidden'
  },
  cell: {
    background: 'var(--surface-card-dark)',
    padding: '28px 20px',
    fontFamily: 'var(--font-body)',
    fontSize: 14.5,
    color: 'var(--text-secondary-dark)',
    lineHeight: 1.5
  }
};
const BENEFITS = ['Redução de tarefas manuais', 'Processos mais rápidos', 'Menor risco de erros', 'Informações centralizadas', 'Atendimento mais ágil', 'Maior rastreabilidade', 'Integração entre equipes e sistemas', 'Crescimento sem custos proporcionais', 'Decisões baseadas em dados', 'Melhor aproveitamento da equipe'];
function Benefits() {
  return /*#__PURE__*/React.createElement("section", {
    style: benStyles.section,
    "data-screen-label": "Benef\xEDcios"
  }, /*#__PURE__*/React.createElement("div", {
    style: benStyles.inner
  }, /*#__PURE__*/React.createElement("h2", {
    style: benStyles.h2
  }, "Mais efici\xEAncia para operar. Mais intelig\xEAncia para crescer."), /*#__PURE__*/React.createElement("div", {
    style: benStyles.grid
  }, BENEFITS.map(b => /*#__PURE__*/React.createElement("div", {
    key: b,
    style: benStyles.cell
  }, b)))));
}
window.Benefits = Benefits;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Benefits.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Contact.jsx
try { (() => {
const cStyles = {
  section: {
    padding: '128px 24px',
    background: 'var(--surface-canvas-light)'
  },
  inner: {
    maxWidth: 'var(--container-max)',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '0.9fr 1.1fr',
    gap: 64
  },
  h2: {
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: 'var(--text-display-lg)',
    color: 'var(--text-primary-light)',
    margin: '0 0 20px',
    letterSpacing: '-0.02em'
  },
  p: {
    fontFamily: 'var(--font-body)',
    fontSize: 16,
    lineHeight: 1.65,
    color: 'var(--text-secondary-light)',
    margin: '0 0 32px'
  },
  trust: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    fontFamily: 'var(--font-body)',
    fontSize: 14,
    color: 'var(--text-secondary-light)'
  },
  trustItem: {
    display: 'flex',
    gap: 10,
    alignItems: 'flex-start'
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: '50%',
    background: 'var(--accent-500)',
    marginTop: 7,
    flexShrink: 0
  },
  form: {
    background: 'var(--graphite-950)',
    borderRadius: 'var(--radius-xl)',
    padding: 36,
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    boxShadow: 'var(--shadow-card-dark)'
  },
  row: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 20
  },
  success: {
    fontFamily: 'var(--font-body)',
    color: 'var(--accent-400)',
    fontSize: 15
  }
};
const TRUST = ['Conversa inicial sem compromisso', 'Análise orientada ao negócio', 'Confidencialidade das informações', 'Retorno em prazo comercial claramente definido'];
function Contact({
  Input,
  Select,
  Textarea,
  Button
}) {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    id: "contato",
    style: cStyles.section,
    "data-screen-label": "Contato"
  }, /*#__PURE__*/React.createElement("div", {
    style: cStyles.inner
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: cStyles.h2
  }, "Qual processo est\xE1 limitando o crescimento da sua empresa?"), /*#__PURE__*/React.createElement("p", {
    style: cStyles.p
  }, "Conte brevemente o que sua empresa precisa melhorar. A MamboLabs analisar\xE1 o cen\xE1rio e identificar\xE1 poss\xEDveis caminhos utilizando IA, automa\xE7\xE3o, integra\xE7\xE3o ou desenvolvimento personalizado."), /*#__PURE__*/React.createElement("div", {
    style: cStyles.trust
  }, TRUST.map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: cStyles.trustItem
  }, /*#__PURE__*/React.createElement("span", {
    style: cStyles.dot
  }), t))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghostLight"
  }, "Falar com a MamboLabs no WhatsApp"))), /*#__PURE__*/React.createElement("form", {
    style: cStyles.form,
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: cStyles.row
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nome",
    placeholder: "Seu nome",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Empresa",
    placeholder: "Nome da empresa",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    style: cStyles.row
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Cargo",
    placeholder: "Seu cargo"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "E-mail",
    type: "email",
    placeholder: "voce@empresa.com",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    style: cStyles.row
  }, /*#__PURE__*/React.createElement(Input, {
    label: "WhatsApp",
    placeholder: "(11) 90000-0000"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Tamanho da empresa",
    options: ['1-10 pessoas', '11-50 pessoas', '51-200 pessoas', '200+ pessoas']
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Principal desafio",
    placeholder: "Ex.: atendimento lento, sistemas desconectados..."
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Sistemas utilizados",
    placeholder: "Ex.: ERP, CRM, WhatsApp..."
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "Mensagem",
    placeholder: "Conte brevemente o que precisa melhorar",
    rows: 4
  }), sent ? /*#__PURE__*/React.createElement("p", {
    style: cStyles.success
  }, "Recebemos sua mensagem \u2014 retornaremos em breve.") : /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "Solicitar uma an\xE1lise"))));
}
window.Contact = Contact;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Differentiators.jsx
try { (() => {
const diffStyles = {
  section: {
    padding: '128px 24px',
    background: 'var(--graphite-950)'
  },
  inner: {
    maxWidth: 'var(--container-max)',
    margin: '0 auto'
  },
  h2: {
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: 'var(--text-display-lg)',
    color: 'var(--white-soft)',
    margin: '0 0 48px',
    letterSpacing: '-0.02em',
    maxWidth: 640
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2,1fr)',
    gap: '1px',
    background: 'var(--border-dark)',
    border: '1px solid var(--border-dark)',
    borderRadius: 'var(--radius-lg)',
    overflow: 'hidden'
  },
  cell: {
    background: 'var(--surface-card-dark)',
    padding: 32
  },
  title: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 18,
    color: 'var(--white-soft)',
    margin: '0 0 8px'
  },
  desc: {
    fontFamily: 'var(--font-body)',
    fontSize: 14.5,
    lineHeight: 1.6,
    color: 'var(--text-secondary-dark)',
    margin: 0
  }
};
const DIFFS = [['Soluções sob medida', 'A tecnologia é adaptada aos processos e objetivos da empresa, e não o contrário.'], ['Integração com o ambiente existente', 'Aproveitamos os sistemas e dados que o cliente já utiliza sempre que isso for tecnicamente adequado.'], ['Visão de processo', 'Antes de automatizar, analisamos o fluxo completo para evitar apenas acelerar um processo mal estruturado.'], ['Entrega progressiva', 'Os projetos podem ser divididos em etapas menores, permitindo validar valor antes de ampliar o investimento.'], ['Independência tecnológica', 'Selecionamos as tecnologias de acordo com a necessidade do projeto, sem limitar a solução a uma única plataforma.'], ['Segurança e controle', 'As soluções consideram permissões, proteção de dados, rastreabilidade e supervisão humana.']];
function Differentiators() {
  return /*#__PURE__*/React.createElement("section", {
    style: diffStyles.section,
    "data-screen-label": "Diferenciais"
  }, /*#__PURE__*/React.createElement("div", {
    style: diffStyles.inner
  }, /*#__PURE__*/React.createElement("h2", {
    style: diffStyles.h2
  }, "IA com aplica\xE7\xE3o pr\xE1tica, integra\xE7\xE3o e vis\xE3o de neg\xF3cio."), /*#__PURE__*/React.createElement("div", {
    style: diffStyles.grid
  }, DIFFS.map(([t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: diffStyles.cell
  }, /*#__PURE__*/React.createElement("h3", {
    style: diffStyles.title
  }, t), /*#__PURE__*/React.createElement("p", {
    style: diffStyles.desc
  }, d))))));
}
window.Differentiators = Differentiators;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Differentiators.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Examples.jsx
try { (() => {
const exStyles = {
  section: {
    padding: '128px 24px',
    background: 'var(--surface-canvas-light)'
  },
  inner: {
    maxWidth: 'var(--container-max)',
    margin: '0 auto'
  },
  h2: {
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: 'var(--text-display-lg)',
    color: 'var(--text-primary-light)',
    margin: '0 0 48px',
    letterSpacing: '-0.02em',
    maxWidth: 640
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gap: 20
  },
  card: {
    background: 'var(--surface-card-light)',
    border: '1px solid var(--border-light)',
    borderRadius: 'var(--radius-lg)',
    padding: 28,
    boxShadow: 'var(--shadow-card-light)'
  },
  title: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 17,
    color: 'var(--text-primary-light)',
    margin: '0 0 8px'
  },
  desc: {
    fontFamily: 'var(--font-body)',
    fontSize: 14.5,
    lineHeight: 1.6,
    color: 'var(--text-secondary-light)',
    margin: 0
  }
};
const EXAMPLES = [['Assistente comercial inteligente', 'Um agente que consulta produtos, preços, clientes e histórico para ajudar a equipe comercial a responder com mais rapidez.'], ['Atendimento conectado ao ERP', 'O cliente pergunta pelo WhatsApp sobre pedido, estoque ou entrega, e a IA consulta o sistema para gerar a resposta.'], ['Leitura e processamento de documentos', 'A IA recebe contratos, notas ou formulários, extrai informações e envia os dados para o processo correto.'], ['Automação de leads', 'Novos contatos são recebidos, classificados, registrados no CRM e encaminhados automaticamente para o responsável.'], ['Assistente interno de conhecimento', 'Funcionários consultam políticas, procedimentos e manuais utilizando uma conversa em linguagem natural.'], ['Relatórios automáticos', 'Dados são coletados de diferentes sistemas, organizados e enviados periodicamente para os gestores.'], ['Aprovações automatizadas', 'Solicitações são direcionadas aos responsáveis, acompanhadas e registradas sem depender de trocas manuais.'], ['Integração entre plataformas', 'Uma informação cadastrada em um sistema é automaticamente validada e transmitida para os demais.'], ['Portais e sistemas personalizados', 'Criação de ambientes para clientes, fornecedores ou equipes acompanharem informações e processos.']];
function Examples() {
  return /*#__PURE__*/React.createElement("section", {
    id: "exemplos",
    style: exStyles.section,
    "data-screen-label": "Exemplos de aplica\xE7\xE3o"
  }, /*#__PURE__*/React.createElement("div", {
    style: exStyles.inner
  }, /*#__PURE__*/React.createElement("h2", {
    style: exStyles.h2
  }, "O que a MamboLabs pode construir para sua empresa?"), /*#__PURE__*/React.createElement("div", {
    style: exStyles.grid
  }, EXAMPLES.map(([t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: exStyles.card
  }, /*#__PURE__*/React.createElement("h3", {
    style: exStyles.title
  }, t), /*#__PURE__*/React.createElement("p", {
    style: exStyles.desc
  }, d))))));
}
window.Examples = Examples;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Examples.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Faq.jsx
try { (() => {
const faqData = [['O que pode ser automatizado em uma empresa?', 'Atividades repetitivas, consultas, cadastros, notificações, integrações, processamento de documentos, geração de relatórios e diversos fluxos administrativos. A viabilidade depende do processo, dos sistemas e das regras envolvidas.'], ['Preciso substituir os sistemas que já utilizo?', 'Nem sempre. Em muitos projetos, a solução é construída para integrar e ampliar os sistemas existentes.'], ['A MamboLabs trabalha apenas com grandes empresas?', 'Não. Os projetos podem ser estruturados para empresas de diferentes portes, começando por processos menores e evoluindo gradualmente.'], ['Minha empresa precisa ter uma equipe de tecnologia?', 'Não necessariamente. A MamboLabs pode conduzir a análise técnica, o desenvolvimento e a implantação em conjunto com os responsáveis pelo negócio.'], ['Quanto tempo leva um projeto?', 'O prazo depende da complexidade, do número de integrações e do escopo. Projetos podem começar por uma validação menor antes da implantação completa.'], ['Os agentes de IA podem acessar informações internas?', 'Sim, desde que o acesso seja tecnicamente autorizado e configurado com regras adequadas de segurança, permissão e governança.'], ['A IA substitui completamente o trabalho humano?', 'O objetivo principal é automatizar atividades repetitivas, organizar informações e apoiar decisões. Processos críticos podem manter revisão, aprovação ou supervisão humana.'], ['Como saber por onde começar?', 'O primeiro passo é mapear processos, identificar gargalos e priorizar oportunidades com impacto operacional e viabilidade técnica.']];
function Faq({
  Accordion
}) {
  const s = {
    section: {
      padding: '128px 24px',
      background: 'var(--graphite-950)'
    },
    inner: {
      maxWidth: 760,
      margin: '0 auto'
    },
    h2: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--text-display-md)',
      color: 'var(--white-soft)',
      margin: '0 0 40px',
      letterSpacing: '-0.02em'
    }
  };
  return /*#__PURE__*/React.createElement("section", {
    style: s.section,
    "data-screen-label": "FAQ"
  }, /*#__PURE__*/React.createElement("div", {
    style: s.inner
  }, /*#__PURE__*/React.createElement("h2", {
    style: s.h2
  }, "Perguntas frequentes"), /*#__PURE__*/React.createElement(Accordion, {
    items: faqData.map(([q, a]) => ({
      q,
      a
    }))
  })));
}
window.Faq = Faq;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Faq.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Footer.jsx
try { (() => {
const fStyles = {
  section: {
    padding: '80px 24px 32px',
    background: 'var(--graphite-950)',
    borderTop: '1px solid var(--border-dark)'
  },
  inner: {
    maxWidth: 'var(--container-max)',
    margin: '0 auto'
  },
  top: {
    display: 'grid',
    gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
    gap: 40,
    marginBottom: 56
  },
  logo: {
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: 20,
    color: 'var(--white-soft)',
    marginBottom: 12
  },
  tagline: {
    fontFamily: 'var(--font-body)',
    fontSize: 14,
    color: 'var(--text-secondary-dark)',
    maxWidth: 260,
    lineHeight: 1.5
  },
  colTitle: {
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    fontSize: 13,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    color: 'var(--text-tertiary-dark)',
    marginBottom: 16
  },
  link: {
    display: 'block',
    fontFamily: 'var(--font-body)',
    fontSize: 14,
    color: 'var(--text-secondary-dark)',
    textDecoration: 'none',
    marginBottom: 10
  },
  bottom: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: 28,
    borderTop: '1px solid var(--border-dark)',
    fontFamily: 'var(--font-body)',
    fontSize: 13,
    color: 'var(--text-tertiary-dark)',
    flexWrap: 'wrap',
    gap: 12
  }
};
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: fStyles.section
  }, /*#__PURE__*/React.createElement("div", {
    style: fStyles.inner
  }, /*#__PURE__*/React.createElement("div", {
    style: fStyles.top
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: fStyles.logo
  }, "Mambo", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent-500)'
    }
  }, "Labs")), /*#__PURE__*/React.createElement("p", {
    style: fStyles.tagline
  }, "MamboLabs \u2014 Intelig\xEAncia que transforma opera\xE7\xF5es.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: fStyles.colTitle
  }, "Navega\xE7\xE3o"), /*#__PURE__*/React.createElement("a", {
    href: "#solucoes",
    style: fStyles.link
  }, "Solu\xE7\xF5es"), /*#__PURE__*/React.createElement("a", {
    href: "#jornada",
    style: fStyles.link
  }, "Como trabalhamos"), /*#__PURE__*/React.createElement("a", {
    href: "#exemplos",
    style: fStyles.link
  }, "Aplica\xE7\xF5es"), /*#__PURE__*/React.createElement("a", {
    href: "#sobre",
    style: fStyles.link
  }, "Sobre")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: fStyles.colTitle
  }, "Contato"), /*#__PURE__*/React.createElement("a", {
    href: "#contato",
    style: fStyles.link
  }, "contato@mambolabs.com"), /*#__PURE__*/React.createElement("a", {
    href: "#contato",
    style: fStyles.link
  }, "WhatsApp"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: fStyles.link
  }, "LinkedIn"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: fStyles.link
  }, "Instagram")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: fStyles.colTitle
  }, "Legal"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: fStyles.link
  }, "Pol\xEDtica de privacidade"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: fStyles.link
  }, "Termos de uso"))), /*#__PURE__*/React.createElement("div", {
    style: fStyles.bottom
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 MamboLabs. Todos os direitos reservados."), /*#__PURE__*/React.createElement("span", null, "CNPJ: a definir"))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Header.jsx
try { (() => {
const headerStyles = {
  bar: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    display: 'flex',
    justifyContent: 'center',
    padding: '16px 24px',
    background: 'rgba(10,13,18,0.72)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid var(--border-dark)'
  },
  inner: {
    width: '100%',
    maxWidth: 'var(--container-max)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  logo: {
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: 20,
    color: 'var(--white-soft)',
    letterSpacing: '-0.01em'
  },
  nav: {
    display: 'flex',
    gap: 32,
    alignItems: 'center'
  },
  link: {
    fontFamily: 'var(--font-body)',
    fontSize: 15,
    color: 'var(--text-secondary-dark)',
    textDecoration: 'none',
    cursor: 'pointer'
  }
};
const NAV = [['Soluções', '#solucoes'], ['Como trabalhamos', '#jornada'], ['Aplicações', '#exemplos'], ['Sobre', '#sobre'], ['Contato', '#contato']];
function Header({
  Button
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: headerStyles.bar
  }, /*#__PURE__*/React.createElement("div", {
    style: headerStyles.inner
  }, /*#__PURE__*/React.createElement("span", {
    style: headerStyles.logo
  }, "Mambo", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent-500)'
    }
  }, "Labs")), /*#__PURE__*/React.createElement("nav", {
    style: headerStyles.nav
  }, NAV.map(([label, href]) => /*#__PURE__*/React.createElement("a", {
    key: href,
    href: href,
    style: headerStyles.link
  }, label))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: () => document.getElementById('contato').scrollIntoView({
      behavior: 'smooth'
    })
  }, "Agendar diagn\xF3stico")));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Hero.jsx
try { (() => {
const heroStyles = {
  section: {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    background: 'var(--graphite-950)',
    overflow: 'hidden',
    padding: '160px 24px 100px'
  },
  glow: {
    position: 'absolute',
    top: '-20%',
    right: '-10%',
    width: '60%',
    height: '80%',
    background: 'radial-gradient(circle, rgba(255,106,61,0.16) 0%, rgba(255,61,122,0.06) 45%, transparent 70%)',
    filter: 'blur(40px)',
    pointerEvents: 'none'
  },
  grid: {
    position: 'absolute',
    inset: 0,
    backgroundImage: 'linear-gradient(var(--border-dark) 1px, transparent 1px), linear-gradient(90deg, var(--border-dark) 1px, transparent 1px)',
    backgroundSize: '64px 64px',
    opacity: 0.25,
    maskImage: 'radial-gradient(ellipse at 60% 30%, black 0%, transparent 70%)'
  },
  inner: {
    position: 'relative',
    zIndex: 1,
    width: '100%',
    maxWidth: 'var(--container-max)',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1.1fr 0.9fr',
    gap: 48,
    alignItems: 'center'
  },
  eyebrow: {
    display: 'inline-flex',
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    fontSize: 13,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    color: 'var(--accent-500)',
    marginBottom: 20
  },
  h1: {
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: 'var(--text-display-xl)',
    lineHeight: 'var(--lh-tight)',
    letterSpacing: '-0.02em',
    color: 'var(--white-soft)',
    margin: '0 0 24px'
  },
  sub: {
    fontFamily: 'var(--font-body)',
    fontSize: 19,
    lineHeight: 1.6,
    color: 'var(--text-secondary-dark)',
    maxWidth: 520,
    margin: '0 0 36px'
  },
  ctas: {
    display: 'flex',
    gap: 16,
    flexWrap: 'wrap',
    marginBottom: 20
  },
  risk: {
    fontFamily: 'var(--font-body)',
    fontSize: 14,
    color: 'var(--text-tertiary-dark)'
  },
  panel: {
    position: 'relative',
    borderRadius: 'var(--radius-xl)',
    border: '1px solid var(--border-dark)',
    background: 'var(--surface-card-dark)',
    boxShadow: 'var(--shadow-card-dark)',
    padding: 28,
    display: 'flex',
    flexDirection: 'column',
    gap: 14
  },
  node: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    padding: '12px 14px',
    background: 'var(--surface-card-dark-raised)',
    borderRadius: 'var(--radius-md)',
    border: '1px solid var(--border-dark)'
  },
  dot: c => ({
    width: 8,
    height: 8,
    borderRadius: '50%',
    background: c,
    flexShrink: 0
  }),
  nodeLabel: {
    fontFamily: 'var(--font-body)',
    fontSize: 14,
    color: 'var(--text-secondary-dark)'
  },
  flowLine: {
    width: 2,
    height: 20,
    background: 'linear-gradient(var(--border-dark), var(--accent-500))',
    marginLeft: 18
  }
};
const NODES = [['ERP', 'var(--slate-400)'], ['CRM', 'var(--slate-400)'], ['WhatsApp', 'var(--accent-500)'], ['Agente MamboLabs', 'var(--accent-alt-500)'], ['Resposta ao cliente', 'var(--white-soft)']];
function Hero({
  Button,
  Badge
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "topo",
    style: heroStyles.section,
    "data-screen-label": "Hero"
  }, /*#__PURE__*/React.createElement("div", {
    style: heroStyles.glow
  }), /*#__PURE__*/React.createElement("div", {
    style: heroStyles.grid
  }), /*#__PURE__*/React.createElement("div", {
    style: heroStyles.inner
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, null, "Diagn\xF3stico e implementa\xE7\xE3o"), /*#__PURE__*/React.createElement("h1", {
    style: heroStyles.h1
  }, "Sua empresa pode", /*#__PURE__*/React.createElement("br", null), "operar de forma", /*#__PURE__*/React.createElement("br", null), "mais inteligente."), /*#__PURE__*/React.createElement("p", {
    style: heroStyles.sub
  }, "A MamboLabs cria automa\xE7\xF5es, agentes de IA, integra\xE7\xF5es e sistemas personalizados que eliminam tarefas repetitivas, conectam informa\xE7\xF5es e aceleram a opera\xE7\xE3o do seu neg\xF3cio."), /*#__PURE__*/React.createElement("div", {
    style: heroStyles.ctas
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "Descubra o que pode ser automatizado"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg"
  }, "Conhe\xE7a nossas solu\xE7\xF5es")), /*#__PURE__*/React.createElement("p", {
    style: heroStyles.risk
  }, "Diagn\xF3stico inicial para entender seus processos, sistemas e oportunidades de melhoria.")), /*#__PURE__*/React.createElement("div", {
    style: heroStyles.panel
  }, NODES.map(([label, color], i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: label
  }, /*#__PURE__*/React.createElement("div", {
    style: heroStyles.node
  }, /*#__PURE__*/React.createElement("span", {
    style: heroStyles.dot(color)
  }), /*#__PURE__*/React.createElement("span", {
    style: heroStyles.nodeLabel
  }, label)), i < NODES.length - 1 && /*#__PURE__*/React.createElement("div", {
    style: heroStyles.flowLine
  }))))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Journey.jsx
try { (() => {
const jStyles = {
  section: {
    padding: '128px 24px',
    background: 'var(--surface-canvas-light)'
  },
  inner: {
    maxWidth: 'var(--container-max)',
    margin: '0 auto'
  },
  h2: {
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: 'var(--text-display-lg)',
    color: 'var(--text-primary-light)',
    margin: '0 0 56px',
    letterSpacing: '-0.02em',
    maxWidth: 640
  },
  row: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5,1fr)',
    gap: 24,
    position: 'relative'
  },
  line: {
    position: 'absolute',
    top: 19,
    left: '10%',
    right: '10%',
    height: 2,
    background: 'var(--border-light)'
  },
  step: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: 14
  },
  dot: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    background: 'var(--accent-500)',
    color: 'var(--graphite-950)',
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 15,
    zIndex: 1
  },
  title: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 17,
    color: 'var(--text-primary-light)',
    margin: 0
  },
  desc: {
    fontFamily: 'var(--font-body)',
    fontSize: 14,
    lineHeight: 1.55,
    color: 'var(--text-secondary-light)',
    margin: 0
  },
  footer: {
    marginTop: 48,
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 20,
    color: 'var(--accent-600)',
    maxWidth: 640
  }
};
const STEPS = [['Descoberta', 'Conversamos com sua equipe para entender o negócio, os objetivos e os principais desafios.'], ['Mapeamento', 'Analisamos processos, sistemas, dados, gargalos e tarefas manuais.'], ['Priorização', 'Identificamos as oportunidades com maior impacto e melhor relação entre esforço, custo e resultado.'], ['Desenvolvimento e integração', 'Construímos a automação, agente ou sistema e conectamos a solução às ferramentas utilizadas.'], ['Implantação e evolução', 'Validamos o funcionamento, acompanhamos a adoção e evoluímos conforme a operação amadurece.']];
function Journey() {
  return /*#__PURE__*/React.createElement("section", {
    id: "jornada",
    style: jStyles.section,
    "data-screen-label": "Jornada do cliente"
  }, /*#__PURE__*/React.createElement("div", {
    style: jStyles.inner
  }, /*#__PURE__*/React.createElement("h2", {
    style: jStyles.h2
  }, "Da identifica\xE7\xE3o do problema \xE0 solu\xE7\xE3o em opera\xE7\xE3o."), /*#__PURE__*/React.createElement("div", {
    style: jStyles.row
  }, /*#__PURE__*/React.createElement("div", {
    style: jStyles.line
  }), STEPS.map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: jStyles.step
  }, /*#__PURE__*/React.createElement("span", {
    style: jStyles.dot
  }, i + 1), /*#__PURE__*/React.createElement("h3", {
    style: jStyles.title
  }, t), /*#__PURE__*/React.createElement("p", {
    style: jStyles.desc
  }, d)))), /*#__PURE__*/React.createElement("p", {
    style: jStyles.footer
  }, "Come\xE7amos com um problema bem definido, validamos a solu\xE7\xE3o e ampliamos conforme os resultados aparecem.")));
}
window.Journey = Journey;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Journey.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Pricing.jsx
try { (() => {
const priceStyles = {
  section: {
    padding: '128px 24px',
    background: 'var(--surface-canvas-light)'
  },
  inner: {
    maxWidth: 'var(--container-max)',
    margin: '0 auto'
  },
  h2: {
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: 'var(--text-display-lg)',
    color: 'var(--text-primary-light)',
    margin: '0 0 48px',
    letterSpacing: '-0.02em',
    maxWidth: 640
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gap: 20
  },
  card: {
    background: 'var(--surface-card-light)',
    border: '1px solid var(--border-light)',
    borderRadius: 'var(--radius-lg)',
    padding: 32,
    display: 'flex',
    flexDirection: 'column',
    gap: 18
  },
  cardFeat: {
    background: 'var(--graphite-950)',
    border: '1px solid var(--accent-500)',
    boxShadow: 'var(--shadow-glow-accent)'
  },
  title: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 20
  },
  desc: {
    fontFamily: 'var(--font-body)',
    fontSize: 14.5,
    lineHeight: 1.6,
    margin: 0
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    margin: 0,
    padding: 0,
    listStyle: 'none',
    fontFamily: 'var(--font-body)',
    fontSize: 14
  },
  note: {
    fontFamily: 'var(--font-body)',
    fontSize: 13.5,
    color: 'var(--text-secondary-light)',
    textAlign: 'center',
    marginTop: 32
  }
};
const PLANS = [['Diagnóstico e planejamento', 'Para empresas que precisam identificar e priorizar oportunidades de IA e automação.', ['Levantamento inicial', 'Mapeamento de processos', 'Análise de viabilidade', 'Priorização', 'Proposta de arquitetura', 'Roadmap de implementação'], 'Solicitar diagnóstico', false], ['Projeto personalizado', 'Para desenvolvimento de automações, agentes, integrações ou sistemas específicos.', ['Definição do escopo', 'Desenho da solução', 'Desenvolvimento', 'Testes', 'Implantação', 'Documentação'], 'Falar sobre um projeto', true], ['Evolução contínua', 'Para empresas que desejam manter e expandir um ecossistema de automação e IA.', ['Acompanhamento', 'Suporte', 'Melhorias', 'Novas automações', 'Monitoramento', 'Evolução dos agentes'], 'Construir uma parceria', false]];
function Pricing({
  Button
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "modelos",
    style: priceStyles.section,
    "data-screen-label": "Modelos de trabalho"
  }, /*#__PURE__*/React.createElement("div", {
    style: priceStyles.inner
  }, /*#__PURE__*/React.createElement("h2", {
    style: priceStyles.h2
  }, "Cada projeto \xE9 dimensionado para a sua opera\xE7\xE3o."), /*#__PURE__*/React.createElement("div", {
    style: priceStyles.grid
  }, PLANS.map(([t, d, items, cta, feat]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      ...priceStyles.card,
      ...(feat ? priceStyles.cardFeat : {})
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      ...priceStyles.title,
      color: feat ? 'var(--white-soft)' : 'var(--text-primary-light)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      ...priceStyles.desc,
      color: feat ? 'var(--text-secondary-dark)' : 'var(--text-secondary-light)'
    }
  }, d), /*#__PURE__*/React.createElement("ul", {
    style: {
      ...priceStyles.list,
      color: feat ? 'var(--text-secondary-dark)' : 'var(--text-secondary-light)'
    }
  }, items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it
  }, "\u2014 ", it))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: feat ? 'primary' : 'ghostLight'
  }, cta))))), /*#__PURE__*/React.createElement("p", {
    style: priceStyles.note
  }, "Cada projeto \xE9 dimensionado de acordo com a complexidade, integra\xE7\xF5es, volume de informa\xE7\xF5es e objetivos da empresa.")));
}
window.Pricing = Pricing;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Pricing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Problem.jsx
try { (() => {
const problemStyles = {
  section: {
    padding: '128px 24px',
    background: 'var(--graphite-950)'
  },
  inner: {
    maxWidth: 'var(--container-max)',
    margin: '0 auto'
  },
  head: {
    maxWidth: 640,
    marginBottom: 56
  },
  h2: {
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: 'var(--text-display-lg)',
    color: 'var(--white-soft)',
    margin: '0 0 16px',
    letterSpacing: '-0.02em'
  },
  p: {
    fontFamily: 'var(--font-body)',
    fontSize: 17,
    lineHeight: 1.65,
    color: 'var(--text-secondary-dark)',
    margin: 0
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gap: 20
  },
  transition: {
    marginTop: 48,
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 22,
    color: 'var(--accent-400)',
    maxWidth: 720
  }
};
const ITEMS = [['Tarefas repetitivas', 'Sua equipe perde horas copiando informações, atualizando planilhas e executando atividades que poderiam ser automatizadas.'], ['Sistemas desconectados', 'ERP, CRM, WhatsApp, e-mail e outros sistemas funcionam separadamente, obrigando pessoas a transferirem dados manualmente.'], ['Informação dispersa', 'Documentos, históricos, cadastros e decisões ficam distribuídos em diferentes plataformas, dificultando o acesso.'], ['Atendimento lento', 'Clientes aguardam respostas enquanto a equipe procura informações ou depende de outras áreas.'], ['Decisões sem visibilidade', 'Gestores recebem informações atrasadas, incompletas ou difíceis de interpretar.'], ['Crescimento operacional caro', 'Para aumentar a capacidade de atendimento, a empresa precisa ampliar constantemente a equipe.']];
function Problem({
  Card
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: problemStyles.section,
    "data-screen-label": "Problema"
  }, /*#__PURE__*/React.createElement("div", {
    style: problemStyles.inner
  }, /*#__PURE__*/React.createElement("div", {
    style: problemStyles.head
  }, /*#__PURE__*/React.createElement("h2", {
    style: problemStyles.h2
  }, "Processos desconectados limitam o crescimento."), /*#__PURE__*/React.createElement("p", {
    style: problemStyles.p
  }, "Muitas empresas crescem acumulando tarefas manuais, planilhas, sistemas isolados e processos que dependem do conhecimento de poucas pessoas. Isso gera retrabalho, erros, demora no atendimento e custos operacionais cada vez maiores.")), /*#__PURE__*/React.createElement("div", {
    style: problemStyles.grid
  }, ITEMS.map(([t, d]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    hover: true
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 18,
      color: 'var(--white-soft)',
      margin: '0 0 10px'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      lineHeight: 1.6,
      color: 'var(--text-secondary-dark)',
      margin: 0
    }
  }, d)))), /*#__PURE__*/React.createElement("p", {
    style: problemStyles.transition
  }, "A MamboLabs transforma esses processos em opera\xE7\xF5es conectadas, automatizadas e orientadas por intelig\xEAncia.")));
}
window.Problem = Problem;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Problem.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/ProofAbout.jsx
try { (() => {
const proofStyles = {
  section: {
    padding: '128px 24px',
    background: 'var(--graphite-950)'
  },
  inner: {
    maxWidth: 'var(--container-max)',
    margin: '0 auto',
    maxWidth: 720
  },
  h2: {
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: 'var(--text-display-lg)',
    color: 'var(--white-soft)',
    margin: '0 0 20px',
    letterSpacing: '-0.02em'
  },
  p: {
    fontFamily: 'var(--font-body)',
    fontSize: 17,
    lineHeight: 1.65,
    color: 'var(--text-secondary-dark)',
    margin: '0 0 20px'
  },
  note: {
    fontFamily: 'var(--font-body)',
    fontSize: 14,
    color: 'var(--text-tertiary-dark)',
    fontStyle: 'italic',
    margin: 0
  }
};
function Proof() {
  return /*#__PURE__*/React.createElement("section", {
    style: proofStyles.section,
    "data-screen-label": "Prova e credibilidade"
  }, /*#__PURE__*/React.createElement("div", {
    style: proofStyles.inner
  }, /*#__PURE__*/React.createElement("h2", {
    style: proofStyles.h2
  }, "Solu\xE7\xF5es desenvolvidas para funcionar no mundo real."), /*#__PURE__*/React.createElement("p", {
    style: proofStyles.p
  }, "Cada projeto nasce de um problema concreto e \xE9 constru\xEDdo para se integrar \xE0 rotina, aos dados e aos sistemas da empresa."), /*#__PURE__*/React.createElement("p", {
    style: proofStyles.note
  }, "Estudos de caso e depoimentos de clientes ser\xE3o publicados aqui \xE0 medida que forem conclu\xEDdos.")));
}
function About() {
  const s = {
    section: {
      padding: '128px 24px',
      background: 'var(--surface-canvas-light)'
    },
    inner: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 64
    },
    h2: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--text-display-lg)',
      color: 'var(--text-primary-light)',
      margin: '0 0 20px',
      letterSpacing: '-0.02em'
    },
    p: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      lineHeight: 1.65,
      color: 'var(--text-secondary-light)',
      margin: '0 0 16px'
    },
    manifesto: {
      background: 'var(--graphite-950)',
      borderRadius: 'var(--radius-lg)',
      padding: 36,
      color: 'var(--white-soft)',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 20,
      lineHeight: 1.5
    }
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "sobre",
    style: s.section,
    "data-screen-label": "Sobre"
  }, /*#__PURE__*/React.createElement("div", {
    style: s.inner
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: s.h2
  }, "Tecnologia deve simplificar a opera\xE7\xE3o, n\xE3o criar mais complexidade."), /*#__PURE__*/React.createElement("p", {
    style: s.p
  }, "A MamboLabs nasceu para aproximar empresas das possibilidades reais da intelig\xEAncia artificial e da automa\xE7\xE3o. Unimos experi\xEAncia em desenvolvimento de software, integra\xE7\xE3o de sistemas, processos empresariais e IA."), /*#__PURE__*/React.createElement("p", {
    style: s.p
  }, "Nosso trabalho come\xE7a pelo entendimento do neg\xF3cio. A tecnologia vem depois, como instrumento para reduzir fric\xE7\xE3o, organizar informa\xE7\xF5es e criar novas possibilidades de crescimento.")), /*#__PURE__*/React.createElement("div", {
    style: s.manifesto
  }, "N\xE3o acreditamos em IA aplicada apenas para acompanhar tend\xEAncias. Acreditamos em tecnologia conectada a processos, dados e objetivos reais.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "Menos tarefas manuais. Menos sistemas isolados. Mais intelig\xEAncia em opera\xE7\xE3o.")));
}
window.Proof = Proof;
window.About = About;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/ProofAbout.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Solutions.jsx
try { (() => {
const solStyles = {
  section: {
    padding: '128px 24px',
    background: 'var(--graphite-950)'
  },
  inner: {
    maxWidth: 'var(--container-max)',
    margin: '0 auto'
  },
  h2: {
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: 'var(--text-display-lg)',
    color: 'var(--white-soft)',
    margin: '0 0 48px',
    letterSpacing: '-0.02em',
    maxWidth: 640
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gap: 20
  },
  title: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 19,
    color: 'var(--white-soft)',
    margin: '14px 0 10px'
  },
  desc: {
    fontFamily: 'var(--font-body)',
    fontSize: 14.5,
    lineHeight: 1.6,
    color: 'var(--text-secondary-dark)',
    margin: '0 0 14px'
  },
  benefit: {
    fontFamily: 'var(--font-body)',
    fontSize: 13.5,
    lineHeight: 1.5,
    color: 'var(--accent-400)',
    margin: 0,
    fontWeight: 600
  },
  tags: {
    display: 'flex',
    gap: 6,
    flexWrap: 'wrap',
    marginBottom: 14
  }
};
const SOLUTIONS = [['Agentes de Inteligência Artificial', 'Criamos agentes capazes de consultar informações, interpretar documentos, responder perguntas e interagir com os sistemas da empresa.', ['Atendimento', 'Documentos', 'Relatórios'], 'Transforme conhecimento e dados da empresa em ações rápidas e acessíveis.'], ['Automação de processos', 'Automatizamos tarefas repetitivas e fluxos que hoje dependem de atividades manuais.', ['Cadastros', 'Notificações', 'Aprovações'], 'Reduza retrabalho, erros operacionais e tempo gasto em atividades administrativas.'], ['Integração de sistemas', 'Conectamos sistemas que precisam trocar informações de maneira automática e segura.', ['ERP', 'CRM', 'APIs'], 'Faça os dados circularem entre os sistemas sem depender de lançamentos manuais.'], ['IA conectada aos dados da empresa', 'Criamos soluções de IA capazes de utilizar documentos, manuais e bancos de dados como fonte de conhecimento.', ['Contratos', 'Catálogos', 'Históricos'], 'Permita que equipes e clientes encontrem respostas com rapidez, contexto e segurança.'], ['Sistemas e aplicações personalizadas', 'Desenvolvemos aplicações web, portais, painéis e ferramentas específicas para a operação do cliente.', ['Portais', 'Dashboards', 'MVPs'], 'Quando uma ferramenta pronta não resolve, construímos a solução adequada ao processo.'], ['Automação de atendimento', 'Estruturamos atendimentos inteligentes conectados aos dados e processos da empresa.', ['WhatsApp', 'Sites', 'Agendamentos'], 'Atenda mais rápido sem perder contexto e sem sobrecarregar sua equipe.'], ['Dados, dashboards e inteligência operacional', 'Organizamos dados de diferentes fontes em indicadores úteis para a tomada de decisão.', ['Relatórios', 'Alertas', 'Metas'], 'Tome decisões com informações atualizadas e acessíveis.'], ['Consultoria e diagnóstico de IA', 'Ajudamos empresas que desejam aplicar inteligência artificial, mas ainda não possuem uma estratégia definida.', ['Roadmap', 'Priorização', 'Riscos'], 'Comece pela oportunidade certa, em vez de investir em tecnologia sem direção.']];
function Solutions({
  Card,
  Tag
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "solucoes",
    style: solStyles.section,
    "data-screen-label": "Solu\xE7\xF5es"
  }, /*#__PURE__*/React.createElement("div", {
    style: solStyles.inner
  }, /*#__PURE__*/React.createElement("h2", {
    style: solStyles.h2
  }, "Tecnologia aplicada aos desafios reais da sua empresa."), /*#__PURE__*/React.createElement("div", {
    style: solStyles.grid
  }, SOLUTIONS.map(([t, d, tags, b]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    hover: true
  }, /*#__PURE__*/React.createElement("h3", {
    style: solStyles.title
  }, t), /*#__PURE__*/React.createElement("p", {
    style: solStyles.desc
  }, d), /*#__PURE__*/React.createElement("div", {
    style: solStyles.tags
  }, tags.map(tg => /*#__PURE__*/React.createElement(Tag, {
    key: tg
  }, tg))), /*#__PURE__*/React.createElement("p", {
    style: solStyles.benefit
  }, b))))));
}
window.Solutions = Solutions;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Solutions.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/ValueProp.jsx
try { (() => {
const valueStyles = {
  section: {
    padding: '128px 24px',
    background: 'var(--surface-canvas-light)'
  },
  inner: {
    maxWidth: 'var(--container-max)',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 64,
    alignItems: 'start'
  },
  h2: {
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: 'var(--text-display-lg)',
    color: 'var(--text-primary-light)',
    margin: '0 0 20px',
    letterSpacing: '-0.02em'
  },
  p: {
    fontFamily: 'var(--font-body)',
    fontSize: 17,
    lineHeight: 1.65,
    color: 'var(--text-secondary-light)',
    margin: 0
  },
  pillars: {
    display: 'flex',
    flexDirection: 'column',
    gap: 28
  },
  pillar: {
    display: 'flex',
    gap: 20,
    alignItems: 'flex-start'
  },
  num: {
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: 28,
    color: 'var(--accent-500)',
    lineHeight: 1
  },
  pillarTitle: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 18,
    color: 'var(--text-primary-light)',
    margin: '0 0 6px'
  },
  pillarText: {
    fontFamily: 'var(--font-body)',
    fontSize: 15,
    lineHeight: 1.6,
    color: 'var(--text-secondary-light)',
    margin: 0
  }
};
const PILLARS = [['01', 'Estratégia', 'Identificamos os processos em que tecnologia e IA podem gerar resultados concretos.'], ['02', 'Tecnologia', 'Selecionamos e desenvolvemos as ferramentas, integrações e modelos adequados para cada necessidade.'], ['03', 'Implementação', 'Colocamos a solução para funcionar dentro da operação, com validação, acompanhamento e melhoria contínua.']];
function ValueProp() {
  return /*#__PURE__*/React.createElement("section", {
    style: valueStyles.section,
    "data-screen-label": "Proposta de valor"
  }, /*#__PURE__*/React.createElement("div", {
    style: valueStyles.inner
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: valueStyles.h2
  }, "N\xE3o instalamos apenas ferramentas.", /*#__PURE__*/React.createElement("br", null), "Constru\xEDmos solu\xE7\xF5es para a sua opera\xE7\xE3o."), /*#__PURE__*/React.createElement("p", {
    style: valueStyles.p
  }, "Cada empresa possui processos, sistemas e objetivos diferentes. Por isso, a MamboLabs come\xE7a entendendo como a opera\xE7\xE3o funciona, onde est\xE3o os gargalos e quais oportunidades podem gerar maior impacto. A partir desse diagn\xF3stico, desenhamos e implementamos solu\xE7\xF5es integradas \xE0 realidade do neg\xF3cio.")), /*#__PURE__*/React.createElement("div", {
    style: valueStyles.pillars
  }, PILLARS.map(([n, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: valueStyles.pillar
  }, /*#__PURE__*/React.createElement("span", {
    style: valueStyles.num
  }, n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: valueStyles.pillarTitle
  }, t), /*#__PURE__*/React.createElement("p", {
    style: valueStyles.pillarText
  }, d)))))));
}
window.ValueProp = ValueProp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/ValueProp.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.FormControls = __ds_scope.FormControls;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Surfaces = __ds_scope.Surfaces;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Tag = __ds_scope.Tag;

})();
