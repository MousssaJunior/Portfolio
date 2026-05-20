'use client'

import styles from "./projet.module.css"
import useEmblaCarousel from 'embla-carousel-react'
export default function Projet() {

   const [emblaRef] = useEmblaCarousel()
  return (
   
  <section className={styles.projet}>
<div>
 <h2>Une sélection de projets sur lesquels j'ai travaillé, de la conception de maquettes à des expériences interactives  .</h2>
</div>
   

    <div className={styles.embla}>

      <div className={styles.embla__viewport} ref={emblaRef}>
      
        <div  className={styles.embla__container}>
             <a href="#">
             <div  className={styles.embla__slide}>
       
               <img src="Sillage_img.png" alt="sillage" />
          
              <h3> Sillage</h3>
           
            </div>
         </a>

       
          <a href="https://www.figma.com/proto/wBHVDbr8zGUmUZTSsRHumj/Mockup?node-id=1650-2435&p=f&viewport=70%2C447%2C0.06&t=R15eN1RZccOdXi8Y-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1650%3A2435&page-id=1410%3A485">
  <div  className={styles.embla__slide}>
               <img src="trisperr_img.png" alt="image de ma maquette" />
              <h3> Trisper</h3>
          </div>
          </a>
        


          <a href="https://lb-conciergerie.vercel.app/
          ">

   <div className={styles.embla__slide}>
            
               <img src="lbb_img.png" alt="image projet" />
          
              <h3> lb conciergerie</h3>
          </div>
          </a>

       

        </div>
      </div>

    </div>
 
 
  </section>
  );
}