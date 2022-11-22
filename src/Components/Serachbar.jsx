import React from 'react'
import { Icon } from "@iconify/react"
function Serachbar({ query, search }) {
  return (
    <div className=' rounded-sm  hidden md:flex items-center font-vazir'>
      <div className='border-2 border-RED flex rounded-md'>
        <input onChange={search} value={query.text} type="text" placeholder='مخاطب خود را جستجو کنید' className='text-center rounded-md pr-1 w-[350px] h-10 flex items-center border-none outline-none text-JACARTA' />
      </div>
    </div>
  )
}

export default Serachbar