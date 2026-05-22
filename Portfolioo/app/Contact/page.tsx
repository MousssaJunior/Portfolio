"use client"

import styles from "./Contact.module.css"
import contactAnimation from "./ContactAnimation"
import { useEffect } from "react"


export default function ContactPage() {
  useEffect(() => {
    contactAnimation()
  }, [])


  return (
    <section id="contact" className={styles.contact}>

      <div className={styles.contact_box}>

        <h2 className={styles.contact_title}>Contact</h2>

        <p className={styles.contact_lead}>
        Vous  avez un  projet  ?
        </p>

        <p className={styles.contact_text}>
Écrivez-moi directement, j’ai hâte de découvrir vos idées passionnantes !
        </p>

        <form
          className={styles.contact_form}
          method="POST"
          action="#contact"
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

          <input
            type="hidden"
            name="g-recaptcha-response"
            id="g-recaptcha-response"
          />

          <button className={styles.form_button} type="submit">
            Send Message
          </button>

        </form>

      </div>
    </section>
  )
}