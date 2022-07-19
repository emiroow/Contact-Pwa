import React from 'react'
import { Icon } from "@iconify/react"

function SearchOnMobile() {
    return (
        <div className=' w-[full] m-auto rounded-sm flex justify-center mt-5  md:hidden items-center font-vazir'>
            <div className='border-2 border-RED flex rounded-l-md rounded-r-md'>
                <input type="text" placeholder='مخاطب خود را جستجو کنید' className=' rounded-r-sm pr-1 w-[300px] h-10 flex items-center border-none outline-none text-JACARTA' />
                <button className='bg-RED px-2 py-2 flex items-center '><Icon icon="flat-color-icons:search" className='text-2xl'></Icon></button>
            </div>
        </div>)
}

export default SearchOnMobile