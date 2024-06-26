// import CV  from "./cv/CV_Moussa Junior_FOFANA.pdf";


// import rapide from "../image/avantages/rapide.png"
// import time from "../image/avantages/time.png"

function Propos() {
    return (
        <section id="propos" className="wrap">
        <h2 className="d-flex center">Ce que vous gagnez avec Moi </h2>
        <div className="cards-avantage d-flex space-around">

          <div  className="card-avantage">
            <img src="./image/avantages/rapide.png"/>
            <div className="avantage-text">
            <p>
             Ma capacité à m&apos;adapter me permet d&apos;être rapidement opérationnel.
            </p>
            </div>
          </div>
          <div id="conseil-adapter" className="card-avantage">
            <img
              src="./image/avantages/polyvalence.png"
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