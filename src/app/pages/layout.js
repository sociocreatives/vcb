import React from 'react'
import Sidebar from '../../../components/Sidebar/Sidebar'

export default function PageLayout({ children }) {
    return (
      <div className='mainsone'>
         
        <section className="mainsidebar">
          {children}
          </section>
      </div>
    )
  }
