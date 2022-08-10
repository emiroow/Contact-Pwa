import React from 'react'
import { Icon } from '@iconify/react';
import {Searchbar} from '../Components/index'
function Navbar() {
  return (
    <nav className='w-full font-bold text-white shadow-2xl shadow-accentDark/40 p-5 flex justify-evenly  bg-JACARTA'>
      <div className='flex flex-row items-center '>
        <Icon icon="flat-color-icons:business-contact" className='text-5xl ml-2' />
        <h4 className='text-xl font-vazir'>وب اپلیکیشن مدریت مخاطبین</h4>
      </div>
      <Searchbar />
    </nav>
  )
}

export default Navbar