// import CV  from "./cv/CV_Moussa Junior_FOFANA.pdf";

import poly from "./image/avantages/polyvalence.png"
import rapide from "./image/avantages/rapide.png"
// import time from "./image/avantages/time.png"

function Propos() {
    return (
        <section id="propos" className="wrap">
        <h2 class="d-flex center">Ce que vous gagnez avec Moi </h2>
        <div class="cards-avantage d-flex space-around">

          {/* <div id="gain-de-temps" class="card-avantage">
            <img  src={time}
            />
            <div className="avantage-text">
              <p>
              </p>
            </div>
            
          </div> */}

          <div  className="card-avantage">
            <img src={rapide}/>
            <div class="avantage-text">
            <p>
             Ma capacité à m'adapter me permet d'être rapidement opérationnel.
            </p>
            </div>
          </div>
          <div id="conseil-adapter" className="card-avantage">
            <img
              src={poly}
            />
            <div className="avantage-text">
            <p>Maîtrisant le front-end et le back-end, je peux  contribuer à votre projet </p>
            </div>
          </div>
        </div>

  </section>
    );
}

export default Propos;