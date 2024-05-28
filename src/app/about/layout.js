import React from 'react'
import styles from "./about.module.css";

export default function AboutLayout({children}) {
  return (
    <div>
      <section className={styles.aboutus}>
        {children}
        </section>
    </div>
  )
}
