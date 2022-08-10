import React from 'react'
import { Link } from "react-router-dom"
import { Spinner } from "./index"
function AddContact({ Loder, getcontactinfo, setcontactinfo, Groups , AddNewContactForm }) {
  return (
    <>
      {Loder ? <Spinner /> : (
        <div className='w-full flex-col flex mt-8 m-auto justify-center items-center' >
          <h4 className='font-vazir text-2xl font-bold text-white'>افزودن مخاطب</h4>
          <div className='w-[95%] md:w-[40%] lg:w-[35%] xl:w-[30%] 2xl:w-[25%] rounded-2xl mt-5 p-4 bg-accentDark/40'>
            <form className='w-full space-y-3' onSubmit={AddNewContactForm}>
              <input name='FullName' value={getcontactinfo.FullName} onChange={setcontactinfo} type="text" id='' className=' outline-none border-2 border-accentLight rounded-md h-10 w-full pr-2 font-vazir' placeholder='نام و نام خانوادگی ' />
              <input name='Photo' value={getcontactinfo.Photo} onChange={setcontactinfo} type="text" id='' className=' outline-none border-2 border-accentLight rounded-md h-10 w-full pr-2 font-vazir' placeholder='آدرس تصویر' />
              <input name='Mobile' value={getcontactinfo.Mobile} onChange={setcontactinfo} type="text" id='' className=' outline-none border-2 border-accentLight rounded-md h-10 w-full pr-2 font-vazir' placeholder='شماره موبایل' />
              <input name='Email' value={getcontactinfo.Email} onChange={setcontactinfo} type="text" id='' className=' outline-none border-2 border-accentLight rounded-md h-10 w-full pr-2 font-vazir' placeholder='آدرس ایمیل' />
              <input name='Job' value={getcontactinfo.Job} onChange={setcontactinfo} type="text" id='' className=' outline-none border-2 border-accentLight rounded-md h-10 w-full pr-2 font-vazir' placeholder='شغل' />
              <select value={getcontactinfo.group} onChange={setcontactinfo} className='w-full h-10 border-2 border-accentLight rounded-md pr-2 font-vazir' name="Group" id="">
                <option value="null">انتخواب گروه</option>
                {Groups.length > 0 ? Groups.map((item) => (
                  <option key={item.id} value={item.id}>{item.name}</option>
                )) : (
                  <option value="null">سرور پاسخگو نیست :\</option>
                )}
              </select>
              <div className='w-full flex justify-center items-center '>
                <button className='bg-red-600 p-2 rounded-lg mr-1 ml-1 font-vazir font-bold text-white' >ساخت مخاطب</button>
                <Link className=' bg-purple-500 p-2 rounded-lg mr-1 ml-1 font-vazir font-bold text-white' to={'/contacts'}>انصراف</Link>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default AddContact