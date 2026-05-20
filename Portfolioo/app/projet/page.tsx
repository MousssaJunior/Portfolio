'use client'

import styles from "./projet.module.css"
import useEmblaCarousel from 'embla-carousel-react'
import { useEffect, useState } from "react"

export default function Projet() {

  const [emblaRef, emblaApi] = useEmblaCarousel()

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

            <a href="#">
              <div className={styles.embla__slide}>
                <img src="Sillage_img.png" alt="sillage" />
                <h3>Sillage</h3>
              </div>
            </a>

            <a href="https://www.figma.com/proto/wBHVDbr8zGUmUZTSsRHumj/Mockup">
              <div className={styles.embla__slide}>
                <img src="trisperr_img.png" alt="image de ma maquette" />
                <h3>Trisper</h3>
              </div>
            </a>

            <a href="https://lb-conciergerie.vercel.app/">
              <div className={styles.embla__slide}>
                <img src="lbb_img.png" alt="image projet" />
                <h3>lb conciergerie</h3>
              </div>
            </a>

          </div>

        </div>

        {/* Pagination */}
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