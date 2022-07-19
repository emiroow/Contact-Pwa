import React from 'react'
import { Icon } from '@iconify/react'
function Contact() {
  return (
    <div className=' mt-2 md:mt-7 w-[100%] md:w-[49%] p-2 md:p-4 flex flex-row items-center  relative justify-between bg-slate-900 rounded-xl'>
      
      <div className='border-2 w-[37.25%] rounded-lg border-accentDark'><img className='rounded-lg bg-cover w-full h-full' src="https://via.placeholder.com/200" alt="" /></div>
      
      <div className='  bg-slate-300 font-vazir text-slate-800 rounded-xl items-center justify-center  flex flex-col w-[49.25%] h-max justify-centers'>

        <div className='p-2 md:p-2.5 w-full text-center flex flex-row md:flex-col flex-wrap justify-start md:justify-center'>
          <p className='font-bold text-[11px] md:text-[15px]'>نام و خانوادگی :</p>
          <p className=' text-[10px] md:text-[17px] mt-0 md:mt-1'>توضیحات</p>
        </div>

        <hr className=' border-2 bg-slate-400 rounded-full border-slate-400 w-full' />

        <div className='p-2 md:p-2.5 2xl:4 w-full text-center flex flex-row md:flex-col flex-wrap justify-start md:justify-center'>
          <p className='font-bold text-[11px] md:text-[15px]'>شماره تماس :</p>
          <p className=' text-[10px] md:text-[17px] mt-0 md:mt-1'>توضیحات</p>
        </div>

        <hr className=' border-2 bg-slate-400 rounded-full border-slate-400  w-full' />

        <div className='p-2 md:p-2.5 2xl:4 w-full text-center flex flex-row md:flex-col flex-wrap justify-start md:justify-center'>
          <p className='font-bold text-[11px] md:text-[15px]'>آدرس ایمیل :</p>
          <p className=' text-[10px] md:text-[17px] mt-0 md:mt-1'>توضیحات</p>
        </div>

      </div>
      <div className='w-[9.25%] flex flex-col h-full justify-evenly items-center'>
        <button className=' bg-ORENG p-[7px] md:p-4 rounded-xl' ><Icon className='text-xl md:text-3xl' icon="noto-v1:eye-in-speech-bubble"></Icon></button>
        <button className=' bg-BLUE p-[7px] md:p-4 rounded-xl' ><Icon className='text-xl md:text-3xl' icon="noto:pen"></Icon></button>
        <button className=' bg-RED p-[7px] md:p-4 rounded-xl' ><Icon className='text-xl md:text-3xl' icon="flat-color-icons:full-trash"></Icon></button>
      </div>
    </div>
  )
}

export default Contact