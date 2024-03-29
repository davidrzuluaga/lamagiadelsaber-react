export const Contacto = () => {
  return (
    <div className="row">
      <div id="main" class="offset-md-2 col-10">
        <h2>Contacto</h2>
      </div>
      <div id="main" class="offset-lg-2 col-lg-4">
        <div id="infocard" class="direccion card">
          <div class="card-body">
            <h3>Localización:</h3>
            <p>Calle 111 F No. 64 A – 46 </p>
            <p>Medellín, Colombia.</p>
            <p>Teléfono: 273 06 94</p>
            <p>Contacto@lamagiadelsaber.edu.co</p>
          </div>
        </div>
      </div>
      <div id="main" class="col-lg-5">
        <div style={{ textAlign: "right", height: "342px", width: "384px" }}>
          <div
            style={{
              overflow: "hidden",
              background: "none!important",
              height: "342px",
              width: "384px",
            }}
          >
            <iframe
              width="384"
              height="342"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=8C4R%2B64%20Medell%C3%ADn%2C%20Medellin%2C%20Antioquia&t=&z=15&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              title="map"
            ></iframe>
          </div>
        </div>
        <h3 class="separation">Barrio Toscana, Medellin</h3>
      </div>
      </div>
  );
};
