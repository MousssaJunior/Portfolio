'use client'

import styles from "./projet.module.css"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useEffect, useState } from "react"

export default function Projet() {

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: false },
    [Autoplay()]
  )

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  useEffect(() => {
    if (!emblaApi) return

    setScrollSnaps(emblaApi.scrollSnapList())

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    onSelect()
    emblaApi.on("select", onSelect)
  }, [emblaApi])

  return (
    <section className={styles.projet}>

      <div>
        <h2>
          Une sélection de projets sur lesquels j'ai travaillé,
          de la conception de maquettes à des expériences interactives.
        </h2>
      </div>

      <div className={styles.embla}>

        <div className={styles.embla__viewport} ref={emblaRef}>
          <div className={styles.embla__container}>

            <div className={`${styles.embla__slide} ${styles.overlayContainer}`}>
              <a href="https://github.com/Sillage-git/Sillage-">
                <img src="Sillage_img.png" alt="sillage" />
                <div className={styles.overlay}>
                  <p className={styles.text}>
                    Sillage est une plateforme de parfumerie personnalisée...
                  </p>
                </div>
                <h3>Sillage</h3>
              </a>
            </div>

            <div className={`${styles.embla__slide} ${styles.overlayContainer}`}>
              <a href="https://www.figma.com/proto/wBHVDbr8zGUmUZTSsRHumj/Mockup?page-id=1410%3A485&node-id=1650-2435&p=f&viewport=70%2C447%2C0.06&t=LqmvhRjJIzdInHf2-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1650%3A2435">, 
                <img src="trisperr_img.png" alt="trisper" />
                <div className={styles.overlay}>
                  <p className={styles.text}>Trisper maquette figma</p>
                </div>
                <h3>Trisper</h3>
              </a>
            </div>

            <div className={`${styles.embla__slide} ${styles.overlayContainer}`}>
              <a href="https://lb-conciergerie.vercel.app/">
                <img src="lbb_img.png" alt="lb conciergerie" />
                <div className={styles.overlay}>
                  <p className={styles.text}>lb Conciergerie Site internet</p>
                </div>
                <h3>lb conciergerie</h3>
              </a>
            </div>

          </div>
        </div>

        <div className={styles.pagination}>
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`${styles.dot} ${
                index === selectedIndex ? styles.dotActive : ""
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}