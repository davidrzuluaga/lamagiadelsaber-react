export const Footer = () => {
return (
    <>
      <div className="col-12">
        <div className="dropsgrades"></div>
        <div className="row" id="footer">
          <div className="offset-sm-1 col-md-3">
            <div className="location">
              <h2>Ubicación</h2>
              <p>
                <strong>Dirección: </strong>Calle 111 F No. 64 A – 46
              </p>
              <p>
                <strong>Medellin, Colombia </strong>
              </p>
              <p>
                <strong>Teléfono: </strong>(604) 273 06 94
              </p>
              <p>
                <strong>Email: </strong>contacto@lamagiadelsaber.edu.co
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="schedule">
              <h2>Horarios</h2>
              <h3>Lunes a Viernes</h3>
              <p>
                <strong>Jornada de la Mañana: </strong>
              </p>
              <p>8:00</p>
              <p>
                <strong>Jornada de la Tarde: </strong>
              </p>
              <p>12:00</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="social">
              <div
                className="fb-page"
                data-href="https://www.facebook.com/centrolamagiadelsaber/"
                data-width="300"
                data-height="400"
                data-small-header="true"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true"
              >
                <blockquote
                  cite="https://www.facebook.com/centrolamagiadelsaber/"
                  className="fb-xfbml-parse-ignore"
                >
                  <a href="https://www.facebook.com/centrolamagiadelsaber/">
                    La Magia del Saber
                  </a>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="dropsfooterinfo"></div>
        <div className="row" id="footerinfo">
          <div className="col align-self-start" id="info">
            ©{(new Date().getFullYear())} LaMagiadelSaber.edu.co
          </div>
          <div className="col align-self-end" id="creator">
            <a href="http://davidrzuluaga.com" target="_blank" rel="noreferrer">
              davidrzuluaga.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
