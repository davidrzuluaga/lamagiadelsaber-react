import { Levels } from "./home/levels";

export const Home = () => {
  return (
    <>
      <Levels />
      <div className="main">
        <div className="dropsrevertedgrades"></div>
        <div className="row">
          <div className="offset-lg-2 col col-lg-8">
            <div id="infocard" className="card">
              <a href="https://www.facebook.com/centrolamagiadelsaber/">
                <div className="card-body">
                  <h2>
                    Informacion para Padres y Boletines
                    <img
                      className="mouse"
                      src="https://s3.us-east-2.amazonaws.com/lamagiadelsaber.edu.co/mouseclick.png"
                      width="60"
                      heigth="60"
                      alt=""
                    />
                  </h2>
                </div>
              </a>
            </div>
          </div>
          <div id="main" className="mission offset-lg-2 col-lg-6">
            <div className="card">
              <div className="card-body">
                <h2>Nuestro Centro Integral Educativo</h2>
                <p>
                  El Centro Integral Educativo “LA MAGIA DEL SABER” es una
                  institución de carácter privado que presta el servicio Público
                  Educativo a la población infantil desde el nivel preescolar en
                  los grados de pre-jardín, jardín y transición.{" "}
                </p>
                <a
                  href="/nosotros#mision"
                  className="btn btn-primary float-right"
                  role="button"
                >
                  Ver Mas
                </a>
              </div>
            </div>
          </div>
          <div id="main" className="col-md-2 d-md-none d-lg-block">
            <div className="card" style={{ width: "15rem" }}>
              <img
                className="card-img-top"
                src="https://s3.us-east-2.amazonaws.com/lamagiadelsaber.edu.co/d79e224d7085aa5b11b81bb4f0dbe5e6_200x220.png"
                alt="Card cap"
              />
            </div>
          </div>
          <div className="offset-lg-2 col-lg-8">
            <div id="lema" className="card">
              <a href="/nosotros">
                <div className="card-body">
                  <h2>Virtud, Ciencia y Poder</h2>
                  <a
                    href="/simbolos#inicio"
                    className="btn btn-primary float-center"
                    role="button"
                  >
                    Nuestro Lema
                  </a>
                </div>
              </a>
            </div>
          </div>
          <div className="offset-lg-2 col-md-6 col-lg-4">
            <div id="docente" className="card">
              <img
                className="card-img-top"
                src="https://s3.us-east-2.amazonaws.com/lamagiadelsaber.edu.co/d8e4c19999ccf4b7f8ca03c9d77d340d_230x167.27272727273.jpg"
                width="160"
                height="280"
                alt="Card cap"
              />
              <div className="card-body">
                <h2>Nuestro Equipo Docente</h2>
                <p>
                  En la Magia del Saber contamos con un equipo docente altamente
                  calificado.
                </p>
                <a
                  href="/nosotros#docentes"
                  className="btn btn-primary float-right"
                  role="button"
                >
                  Ver Mas
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div id="programas" className="card">
              <div className="card-body">
                <h3 className="card-title">Programas</h3>
                <p className="card-text">
                  En la Magia del Saber nuestra prioridad es la educación de
                  calidad.
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Devocional Biblico</li>
                <li className="list-group-item">Inglés</li>
                <li className="list-group-item">Extraclases</li>
                <li className="list-group-item">Modulos Educativos</li>
                <li className="list-group-item">Salidas Pedagógicas</li>
              </ul>
              <div className="card-body">
                <a
                  href="/nosotros"
                  className="btn btn-primary float-right"
                  role="button"
                >
                  Lee Mas
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
