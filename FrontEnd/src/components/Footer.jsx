import React from 'react'
import FooterList from '../UI/FooterList'
import {Monday} from '../constants/index.jsx'

export default function Footer() {
    
  return (
    <div>
      <footer>
        <ul className='hidden lg:flex ml-14 space-x-12'>
                     {Monday.map((item, index) => (
                         <li key={index}>
                             <a href={item.href}>{item.text}</a>
                         </li>
                         
                     ))
                     }
                     
                 </ul>
      </footer>
    </div>
  )
}
