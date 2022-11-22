import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { Searchbar } from '../Components/index'
function Navbar({ search, query }) {
  const location = useLocation()
  const [pass, setpass] = useState(["edit" , "show"])
  return (
    <nav className='w-full font-bold text-white shadow-2xl shadow-accentDark/40 p-5 flex justify-evenly  bg-JACARTA'>
      <div className='flex flex-row items-center '>
        <Icon icon="flat-color-icons:business-contact" className='text-5xl ml-2' />
        <h4 className='text-xl font-vazir'>وب اپلیکیشن مدریت مخاطبین</h4>
      </div>
      {
        console.log(location.pathname.split("/")[2])
      }
      {
        pass.includes(location.pathname.split("/")[2])  ? null : (<Searchbar search={search} query={query} />)
      }
    </nav>
  )
}

export default Navbar