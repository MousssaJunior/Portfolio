"use client"

import styles from "./Contact.module.css"
import contactAnimation from "./ContactAnimation"
import { useEffect, useRef } from "react"
import emailjs from "@emailjs/browser"

export default function ContactPage() {

  const form = useRef<HTMLFormElement>(null)

  useEffect(() => {
    contactAnimation()
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!form.current) return

  emailjs.sendForm(
  "service_3wa1wgl",
  "template_gij4y5l",
  form.current,
  "GEKC1P-7W334IJVBb"
  
)
      .then(
        () => {
          alert("Message envoyé 🚀")
        },
        (error) => {
          console.log(error.text)
          alert("Erreur lors de l'envoi")
        }
      )
  }

  return (
    <section id="contact" className={styles.contact}>

      <div className={styles.contact_box}>

        <h2 className={styles.contact_title}>Contact</h2>

        <p className={styles.contact_lead}>
          Vous avez un projet ?
        </p>

        <p className={styles.contact_text}>
          Écrivez-moi directement, j’ai hâte de découvrir vos idées passionnantes !
        </p>

        <form
          ref={form}
          onSubmit={handleSubmit}
          className={styles.contact_form}
          id="contactForm"
        >

          <div className={styles.form_item}>
            <label htmlFor="contact-name">Nom</label>
            <input id="contact-name" name="name" type="text" required />
          </div>

          <div className={styles.form_item}>
            <label htmlFor="contact-email">Email</label>
            <input id="contact-email" name="email" type="email" required />
          </div>

          <div className={styles.form_item}>
            <label htmlFor="contact-subject">Projet</label>
            <input id="contact-subject" name="subject" type="text" required />
          </div>

          <div className={styles.form_item}>
            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" name="message" rows={5} required />
          </div>

          <button className={styles.form_button} type="submit">
            Send Message
          </button>

        </form>

      </div>
    </section>
  )
}