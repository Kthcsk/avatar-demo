import React, { Component } from "react";

let poleraUno = () => {
  let poleraNegra = document.getElementById("polera1");
  poleraNegra.addEventListener("click", () => {
    document.getElementById("poleras").innerHTML = `
    <h2>soy una polerita</h2>`;
  });
  console.log("ya");
};

/* let poleraUno = () => {
  const boton = document.getElementById("polera1");
  console.log("boton");
}; */

/*  let poleraNegra = document.getElementById("polera1");
 poleraNegra.addEventListener("click", () => {
  document.getElementById("poleras").innerHTML = `
<img style="width:40%" src="../../assets/img/polera/polera-negra.png"/>`;
}); */

/*  let poleraMujer = document.getElementById("polera2");
 poleraMujer.addEventListener("click", () => {
  document.getElementById("poleras").innerHTML = `
<img style="width:40%" src="../../assets/img/polera/polera-mujer.png"/>`;
}); */

export class Barra extends Component {
  render() {
    return (
      <div>
        <div>
          <h5>Selecciona caracteristicas de tu personaje</h5>
        </div>
        <div className="d-flex justify-content-center">
          <div class="table-responsive">
            <table className="table-borderless">
              <thead>
                <tr>
                  <th scope="col">OJOS</th>
                  <th scope="col">NARIZ</th>
                  <th scope="col">BOCA</th>
                  <th scope="col">POLERA</th>
                  <th scope="col">PANTALON</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <button id="ojos1">Ojos1</button>
                  </td>
                  <td>
                    <button id="nariz1">Nariz1</button>
                  </td>
                  <td>
                    <button id="boca1">Boca1</button>
                  </td>
                  <td>
                    <button onClick={poleraUno} id="polera1">
                      Polera1
                    </button>
                  </td>
                  <td>
                    <button id="pantalon1">Pantalon1</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button id="ojos2">Ojos2</button>
                  </td>
                  <td>
                    <button id="nariz2">Nariz2</button>
                  </td>
                  <td>
                    <button id="boca2">Boca2</button>
                  </td>
                  <td>
                    <button id="polera2">Polera2</button>
                  </td>
                  <td>
                    <button id="pantalon2">Pantalon2</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Barra;
