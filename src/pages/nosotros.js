import { Link } from "react-router-dom";

export const Nosotros = () => {
  return (
    <>
      <div id="main" class="offset-sm-2 col-md-10">
        <h2>Equipo Docente</h2>
      </div>
      <div class="offset-lg-2 col-lg-8">
        <div id="teacher" class="card">
          <div class="row">
            <div class="col-4">
              <img
                src="https://s3.us-east-2.amazonaws.com/lamagiadelsaber.edu.co/0c413adb6834baf52df3e12ee7266921_110x120.jpg"
                width="140"
                height="140"
                alt="Card cap"
              />
            </div>
            <div class="col-8">
              <h3>Diana Maria Gomez</h3>
              <p>Directora y Docente</p>
              <p>Licenciada en Ed. Preescolar</p>
              <p>dianagomez@lamagiadelsaber.edu.co</p>
            </div>
          </div>
        </div>
      </div>

      <div class="offset-lg-2 col-lg-8">
        <div id="nostrosmission" class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-md-4">
                <img
                  src="https://s3.us-east-2.amazonaws.com/lamagiadelsaber.edu.co/f0bc1417233bdc4a1e51d654d715e7c0_200x260.png"
                  width="192"
                  height="240"
                  alt="Card cap"
                />
              </div>
              <div class="col-md-8">
                <h2>Nuestra misión</h2>
                <p>
                  El Centro Integral Educativo “LA MAGIA DEL SABER” es una
                  institución de carácter privado que presta el servicio Público
                  Educativo a la población infantil desde el nivel preescolar en
                  los grados de pre-jardín, jardín y transición.{" "}
                </p>
                <p>
                  La función pedagógica procura el desarrollo integral humano
                  con énfasis en los aspectos socio-afectivo, cognitivo,
                  creativo, corporal y en valores cristianos, con el fin de
                  garantizar el crecimiento espiritual y el normal desarrollo de
                  los ciudadanos del futuro.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="offset-lg-2 col-lg-8">
        <div id="nostrosfilosofia" class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-md-4">
                <img
                  src="https://s3.us-east-2.amazonaws.com/lamagiadelsaber.edu.co/f94136a2ee2b441418f333ce7753e1a8_200x270.png"
                  width="192"
                  height="240"
                  alt="Card cap"
                />
              </div>
              <div class="col-md-8">
                <h2>Nuestra Filosofia</h2>
                <p>
                  Nuestra filosofia se basa en el desarrollo humano integral
                  basado en valores Cristianos, a fin de iniciar personas
                  íntegras, autónomas, responsables y honestas, capaces de
                  enfrentar con madurez y amor la realidad de sus vidas.
                </p>
                <p>
                  Nuestra filosofía es el tema central de toda nuestra gestión
                  pedagógica, porque toda la vida del Centro Educativo se
                  realiza en función de la formación integral, que por su
                  calidad ayuda a crecer a los niños y niñas para que valoren a
                  las demás personas, al medio ambiente, a la ciudad, al país y
                  a las formas de organización social e instituciones
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="offset-sm-2 col-md-8">
        <div id="infocard" class="card">
          <Link to="/simbolos#inicio">
            <div class="card-body">
              <h2>
                Simbolos de Nuestra Institución
                <img
                  class="mouse"
                  src="https://s3.us-east-2.amazonaws.com/lamagiadelsaber.edu.co/mouseclick.png"
                  width="60"
                  heigth="60"
                  alt=""
                />
              </h2>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
