import styles from "./propos.module.css"

export default function Propos() {
  return (
    <section className={styles.Qui}>

      
        <div className={styles.Propos}>
          <h3>Qui je suis </h3>
          <p>Je suis un développeur spécialisé dans la création de solutions , efficaces et élégantes.
Mon approche consiste à concevoir des expériences intuitives qui guident naturellement l’utilisateur</p>

        </div>

        <div className={styles.Carte}>
        <img src="/araragi.png" alt="Araragi" />
          <p>Ça fait 3 ans que je code. J'ai commencé grâce à ma passion pour les jeux vidéo. Ce que j'aime, c'est que chaque projet est différent et me permet d'explorer des styles variés, du minimaliste au futuriste.</p>

        </div>

   

     

    </section>
  )
}