import styles from "./Header.module.css"

export default function header() {
  return (
   
    <header className={styles.center} >
        <div className={styles.text_center}>
           <h1>Moussa junior <br /> Developper fulltstack </h1>
           <h2>Vos idées méritent d'exister</h2>
        </div>
     
    </header>
   
  );
}