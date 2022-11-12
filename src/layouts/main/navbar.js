export const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-sm navbar-light bg-light"
      data-toggle="affix"
    >
      <div className="mx-auto d-sm-flex d-block flex-sm-nowrap">
        <a className="nav-link" href="/">
          La Magia del Saber
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample11"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse text-center"
          id="navbarsExample11"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/nosotros#inicio">
                Nosotros
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/simbolos">
                Simbolos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contacto#inicio">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
