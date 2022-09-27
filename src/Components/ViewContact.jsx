import React from 'react'
import { useEffect, useState } from 'react'
import { getContact, GetGroup } from "../Service/ContactService"
import {Link , useParams } from "react-router-dom"
import { Icon } from "@iconify/react"
import Spinner from './Spinner'

function ViewContact() {
  const [state, setstate] = useState({
    loading: true,
    contactinfo: {},
    contactGroup: {}
  })
  const { contactId } = useParams();
  useEffect(() => {
    const FetchData = async () => {
      try {
        const { data: ContactData } = await getContact(contactId)
        const { data: contactgroup } = await GetGroup(ContactData.Group)
        setstate({ ...state, loading: false, contactinfo: ContactData, contactGroup: contactgroup })
      } catch (err) {
        console.log(err);
      }
    }
    FetchData()
  }, [])

  return (
    <>
      {state.loading === true ? <Spinner /> :
        <div className=' mt-14 md:mt-10  m-auto w-[98%] md:w-[30%] p-2 md:p-4 flex flex-col items-center  relative justify-between bg-slate-900 rounded-xl'>

          <div className='border-2 w-[50%]  md:w-[40%] rounded-lg border-accentDark'><img className='rounded-lg bg-cover w-full h-full' src={state.contactinfo.Photo} alt="" /></div>

          <div className='  bg-slate-300 mt-5 font-vazir text-slate-800 rounded-xl items-center justify-center  flex flex-col w-[100%] h-max justify-centers'>

            <div className='p-2 md:p-2.5 2xl:4 w-full text-center flex flex-row md:flex-col flex-wrap justify-center items-center'>
              <p className='font-bold text-[11px] md:text-[15px]'>نام و خانوادگی :  </p>
              <input type="text" className=' w-full mt-1 mb-1 rounded-lg bg-accentDark text-white text-sm md:text-md h-10 text-center' value={state.contactinfo.FullName} />
            </div>

            <hr className=' border-2 bg-slate-400 rounded-full border-slate-400 w-full' />

            <div className='p-2 md:p-2.5 2xl:4 w-full text-center flex flex-row md:flex-col flex-wrap justify-center items-center'>
              <p className='font-bold text-[11px] md:text-[15px]'>شماره تماس :  </p>
              <input type="text" className=' w-full mt-1 mb-1 rounded-lg bg-accentDark text-white text-sm md:text-md h-10 text-center' value={state.contactinfo.Mobile} />
            </div>

            <hr className=' border-2 bg-slate-400 rounded-full border-slate-400  w-full' />

            <div className='p-2 md:p-2.5 2xl:4 w-full text-center flex flex-row md:flex-col flex-wrap justify-center items-center'>
              <p className='font-bold text-[11px] md:text-[15px]'>آدرس ایمیل : </p>
              <input type="text" className=' w-full mt-1 mb-1 rounded-lg bg-accentDark text-white text-sm md:text-md h-10 text-center' value={state.contactinfo.Email} />
            </div>
            <hr className=' border-2 bg-slate-400 rounded-full border-slate-400 w-full' />

            <div className='p-2 md:p-2.5 2xl:4 w-full text-center flex flex-row md:flex-col flex-wrap justify-center items-center'>
              <p className='font-bold text-[11px] md:text-[15px]'> گروه : </p>
              <input type="text" className=' w-full mt-1 mb-1 rounded-lg bg-accentDark text-white text-sm md:text-md h-10 text-center' value={state.contactGroup.name} />
            </div>

          </div>
          <div className='w-full d-flex justify-center items-center text-center mt-5 mb-2'>
            <Link className=' bg-accentDark p-2 rounded-md text-slate-50 font-medium text-lg' to={"/"} >بازگشت</Link>
          </div>
        </div>
      }

    </>
  )
}

export default ViewContact