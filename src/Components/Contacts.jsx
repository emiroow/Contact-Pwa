import React from 'react'
import { Icon } from "@iconify/react"
import Contact from './Contact'
function Contacts({ contacts }) {
    return (
        <div className='w-full relative'>
            <div className='w-[95%] md:w-[80%] flex justify-starts  m-auto mt-5 md:mt-10'>
                <button className=' flex items-center bg-accentDark text-white font-vazir rounded-lg px-5 py-4'><Icon className='text-2xl' icon="ant-design:plus-circle-outlined"></Icon><span className='mr-2'>افزودن مخاطب جدید</span></button>
            </div>
            <div className='w-full xl:w-[90%] 2xl:w-[85%]  mt-4 md:mt-0 flex justify-between flex-wrap h-full p-1 md:p-5 text-white font-vazir m-auto'>
                {contacts.length > 0 ? contacts.map(item => {
                    <Contact key={item.id} />
                }) : (
                    <div className=' bg-accentDark py-5 md:py-10 px-14 md:px-28 flex items-center rounded-3xl justify-center flex-col  mt-5 m-auto '>
                        <p className='mt-10 mb-10 text-xl text-center'>مخاطبی یافت نشد...</p>
                        <img className=' mb-10 rounded-2xl' src={require("../Assets/images/notfound.gif")} alt="" />
                    </div>
                )}

            </div>
        </div>
    )
}

export default Contacts