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

// ui_kits/marketing-site removido: registrava window.Header/Hero/... e sobrescrevia as seções do site (sections/*.jsx).


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
