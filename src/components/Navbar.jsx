const links = [
  ["sobre-mi", "Sobre mí"],
  ["proyectos", "Proyectos"],
  ["habilidades", "Habilidades"],
  ["experiencia", "Experiencia"],
  ["formacion", "Formación"],
  ["contacto", "Contacto"],
];

export default function Navbar({ name }) {
  return (
    <nav className="navbar navbar-expand-md sticky-top bg-body border-bottom">
      <div className="container" style={{ maxWidth: 860 }}>
        <a className="navbar-brand fw-semibold" href="#">{name}</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="menu"
          aria-expanded="false"
          aria-label="Abrir menú"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto">
            {links.map(([id, label]) => (
              <li className="nav-item" key={id}>
                <a className="nav-link" href={`#${id}`}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
