import React, { useState, useEffect } from 'react'
import Spinner from "../Components/Spinner"
import { getContact, UpdateContact, GetAllGroups } from '../Service/ContactService'
import { Link, useParams, useNavigate } from "react-router-dom"
function EditContact({ setForseRender, ForseRender }) {
  const navigate = useNavigate();
  const { contactId } = useParams()
  const [state, SetState] = useState(
    {
      loading: false,
      contact: {
        FullName: "",
        Photo: "",
        Mobile: "",
        Email: "",
        Job: "",
        Group: "",
        id : ""
      },
      groups: [],
    }
  )

  useEffect(() => {
    const FetchData = async () => {
      try {
        SetState({ ...state, loading: true });
        const { data: DataContac } = await getContact(contactId)
        const { data: DataAllGroups } = await GetAllGroups()
        SetState({
          ...state,
          loading: false,
          contact: DataContac,
          groups: DataAllGroups
        })
      } catch (error) {
        console.log(error);
        SetState({ ...state, loading: false });
      }
    }
    FetchData()
  }, [])

  const SetContactInfo = (event) => {
    SetState({
      ...state,
      contact: {
        ...state.contact,
        [event.target.name]: [event.target.value],
      }
    });
  }

  const UpdateContactForm = async () => {
    try {
      SetState({ ...state, loading: true });
      const { data } = await UpdateContact(contactId, state.contact)
      if (data) {
        SetState({ ...state, loading: false });
        navigate("/")
        setForseRender(!ForseRender)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const { loading, contact, groups } = state
  
  return (
    <>
      {loading ? (<Spinner />) :
        (<>
          <div className=' mt-14 md:mt-10  m-auto w-[98%] md:w-[40%] p-2 md:p-4 flex flex-col items-center  relative justify-between bg-slate-900 rounded-xl'>

            <div className='border-2 w-[50%]  md:w-[40%] rounded-lg border-accentDark'><img className='rounded-lg bg-cover w-full h-full' src={contact.Photo} alt="" /></div>

            <div className='  bg-slate-300 mt-5 font-vazir text-slate-800 rounded-xl items-center justify-center  flex flex-col w-[100%] h-max justify-centers'>

              <div className='p-2 md:p-2.5 2xl:4 w-full text-center flex flex-row md:flex-col flex-wrap justify-center items-center'>
                <p className='font-bold text-[11px] md:text-[15px]'>نام و خانوادگی :  </p>
                <input name='FullName' onChange={SetContactInfo} type="text" defaultValue={contact.FullName} className=' w-full mt-1 mb-1 rounded-lg bg-accentDark text-white text-sm md:text-md h-10 text-center' />
              </div>

              <hr className=' border-2 bg-slate-400 rounded-full border-slate-400 w-full' />

              <div className='p-2 md:p-2.5 2xl:4 w-full text-center flex flex-row md:flex-col flex-wrap justify-center items-center'>
                <p className='font-bold text-[11px] md:text-[15px]'>شماره تماس :  </p>
                <input name='Mobile' onChange={SetContactInfo} type="text" defaultValue={contact.Mobile} className=' w-full mt-1 mb-1 rounded-lg bg-accentDark text-white text-sm md:text-md h-10 text-center' />
              </div>

              <hr className=' border-2 bg-slate-400 rounded-full border-slate-400 w-full' />

              <div className='p-2 md:p-2.5 2xl:4 w-full text-center flex flex-row md:flex-col flex-wrap justify-center items-center'>
                <p className='font-bold text-[11px] md:text-[15px]'> تصویر :  </p>
                <input name='Mobile' onChange={SetContactInfo} type="text" defaultValue={contact.Photo} className=' w-full mt-1 mb-1 rounded-lg bg-accentDark text-white text-sm md:text-md h-10 text-center' />
              </div>

              <hr className=' border-2 bg-slate-400 rounded-full border-slate-400  w-full' />

              <div className='p-2 md:p-2.5 2xl:4 w-full text-center flex flex-row md:flex-col flex-wrap justify-center items-center'>
                <p className='font-bold text-[11px] md:text-[15px]'>آدرس ایمیل : </p>
                <input name='Email' onChange={SetContactInfo} type="text" defaultValue={contact.Email} className=' w-full mt-1 mb-1 rounded-lg bg-accentDark text-white text-sm md:text-md h-10 text-center' />
              </div>
              <hr className=' border-2 bg-slate-400 rounded-full border-slate-400 w-full' />

              <div className='p-2 md:p-2.5 2xl:4 w-full text-center flex flex-row md:flex-col flex-wrap justify-center items-center'>
                <p className='font-bold text-[11px] md:text-[15px]'>شغل  : </p>
                <input name='Job' onChange={SetContactInfo} type="text" defaultValue={contact.Job} className=' w-full mt-1 mb-1 rounded-lg bg-accentDark text-white text-sm md:text-md h-10 text-center' />
              </div>
              <hr className=' border-2 bg-slate-400 rounded-full border-slate-400 w-full' />

              <div className='p-2 md:p-2.5 2xl:4 w-full text-center flex flex-row md:flex-col flex-wrap justify-center items-center'>
                <p className='font-bold text-[11px] md:text-[15px]'> گروه : </p>
                <select name="Group" id="Group" onChange={SetContactInfo} className='text-white text-center bg-accentDark w-full h-10 border-2 border-accentLight rounded-md pr-2 font-vazir'>
                  <option  disabled>انتخواب گروه جدید</option>
                  {
                    groups.map((item) => {
                      return <option selected={contact.Group === item.id ? "selected" : null}  key={item.id} value={item.id}>{item.name}</option>
                    })
                  }
                </select>
              </div>

            </div>
            <div className='w-full  d-flex justify-center items-center text-center mt-5 mb-2'>
              <button className='bg-red-600 p-2 rounded-lg mr-1 ml-1 font-vazir font-bold text-white' onClick={UpdateContactForm} >ذخیر مخاطب</button>
              <Link className=' bg-purple-500 p-2 rounded-lg mr-1 ml-1 font-vazir font-bold text-white' to={'/contacts'}>انصراف</Link>
            </div>
          </div>
        </>)
      }
    </>
  )
}

export default EditContact