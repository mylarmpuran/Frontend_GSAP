import React from 'react'

export default function FooterList(props) {
    let pricing = props;
    return (
    <div>
     <ul className='hidden lg:flex ml-14 space-x-12'>
                     {pricing.map((item, index) => (
                         <li key={index}>
                             <a href={item.href}>{item.label}</a>
                         </li>
                         
                     ))
                     }
                     
                 </ul>
    </div>
  )
}
