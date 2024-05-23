import React from 'react'
import Sidebar from '../../../components/Sidebar/Sidebar'

export default function AuthLayout({ children }) {
    return (
      <div className='mainsoe'>
        <section className="ma">
          {children}
          </section>
      </div>
    )
  }
