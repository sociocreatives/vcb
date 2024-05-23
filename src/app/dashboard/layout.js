import React from 'react'
import styles from './dashboard.module.css'
import Navbar from '../../../components/Navbar/Navbar'
import Sidebar from '../../../components/Sidebar/Sidebar'

export default function DashboardLayout({ children }) {
  return (
    <div className='mainsone'>

      <section className={styles.mainbody}>
        {children}
        </section>
    </div>
  )
}
