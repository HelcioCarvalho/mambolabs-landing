const diffStyles = {
  section: { padding: 'var(--section-py-desktop) 24px', background: 'var(--paper)' },
  inner: { maxWidth: 'var(--container-max)', margin: '0 auto' },
  h2: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'var(--text-display-lg)', lineHeight: 'var(--lh-tight)', color: 'var(--ink)', margin: '0 0 48px', letterSpacing: 'var(--tracking-tight)', maxWidth: 720, textWrap: 'balance' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', columnGap: 40, rowGap: 0 },
  cell: { padding: '28px 0', borderTop: '1px solid var(--hairline)' },
  title: { display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 18, color: 'var(--ink)', margin: '0 0 10px', letterSpacing: '-0.01em' },
  mark: { width: 10, height: 10, borderRadius: 3, background: 'var(--lime)', boxShadow: 'inset 0 0 0 1px rgba(42,43,34,.18)', flexShrink: 0 },
  desc: { fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.6, color: 'var(--ink-2)', margin: 0 },
};
const DIFFS = [
  ['Soluções sob medida', 'A tecnologia é adaptada aos processos e objetivos da empresa, e não o contrário.'],
  ['Integração com o ambiente existente', 'Aproveitamos os sistemas e dados que o cliente já utiliza sempre que isso for tecnicamente adequado.'],
  ['Visão de processo', 'Antes de automatizar, analisamos o fluxo completo para evitar apenas acelerar um processo mal estruturado.'],
  ['Entrega progressiva', 'Os projetos podem ser divididos em etapas menores, permitindo validar valor antes de ampliar o investimento.'],
  ['Independência tecnológica', 'Selecionamos as tecnologias de acordo com a necessidade do projeto, sem limitar a solução a uma única plataforma.'],
  ['Segurança e controle', 'As soluções consideram permissões, proteção de dados, rastreabilidade e supervisão humana.'],
];
function Differentiators() {
  return (
    <section style={diffStyles.section} data-screen-label="Diferenciais">
      <div style={diffStyles.inner}>
        <h2 style={diffStyles.h2}>IA com aplicação prática, integração e visão de negócio.</h2>
        <div className="mb-grid-3" style={diffStyles.grid}>
          {DIFFS.map(([t, d]) => <div key={t} className="mb-reveal" style={diffStyles.cell}><h3 style={diffStyles.title}><span style={diffStyles.mark}></span>{t}</h3><p style={diffStyles.desc}>{d}</p></div>)}
        </div>
      </div>
    </section>
  );
}
window.Differentiators = Differentiators;
