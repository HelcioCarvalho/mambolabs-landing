const diffStyles = {
  section: { padding: '128px 24px', background: 'var(--surface-atmosphere-dark)' },
  inner: { maxWidth: 'var(--container-max)', margin: '0 auto' },
  h2: { fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-display-lg)', color: 'var(--white-soft)', margin: '0 0 48px', letterSpacing: '-0.02em', maxWidth: 640 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1px', background: 'var(--border-dark)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' },
  cell: { background: 'var(--surface-card-dark)', padding: 32 },
  title: { fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'var(--white-soft)', margin: '0 0 8px' },
  desc: { fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.6, color: 'var(--text-secondary-dark)', margin: 0 },
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
        <div style={diffStyles.grid}>
          {DIFFS.map(([t, d]) => <div key={t} style={diffStyles.cell}><h3 style={diffStyles.title}>{t}</h3><p style={diffStyles.desc}>{d}</p></div>)}
        </div>
      </div>
    </section>
  );
}
window.Differentiators = Differentiators;
