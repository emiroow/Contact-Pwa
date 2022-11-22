import React from 'react'
import { Icon } from "@iconify/react"
import { Link } from 'react-router-dom'
import Contact from './Contact'
import Spinner from "./Spinner"
import { confirmAlert } from 'react-confirm-alert';

function Contacts({ contacts, loading, deletcontact }) {

    const DeletContacts = (ContactID) => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className="bg-slate-800 shadow-2xl shadow-accentDark bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
                        <div className="bg-JACARTA px-16 py-14 rounded-md text-center">
                            <h1 className="text-xl mb-4 font-bold text-white">آیا از پاک کردن مخاطب  مطمئن هستید ؟</h1>
                            <div className=' w-full mt-6 flex justify-around flex-row '>
                                <button onClick={() => { onClose(); }} className="bg-red-500 px-4 py-2 rounded-md text-md text-white">لفو</button>
                                <button
                                    onClick={() => {
                                        deletcontact(ContactID.target.id);
                                        onClose();
                                    }
                                    }
                                    className="bg-indigo-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold">بله</button>
                            </div>
                        </div>
                    </div>
                );
            },
        });
    }

    return (
        <div className='w-full relative'>
            <div className='w-[95%] md:w-[80%] flex justify-starts  m-auto mt-5 md:mt-10'>
                <Link to={'/AddContact'} className=' flex items-center bg-accentDark text-white font-vazir rounded-lg px-5 py-4'><Icon className='text-2xl' icon="ant-design:plus-circle-outlined"></Icon><span className='mr-2'>افزودن مخاطب جدید</span></Link>
            </div>
            {loading ? <Spinner /> : (
                <div className='w-full xl:w-[90%] 2xl:w-[85%]  mt-4 md:mt-0 flex justify-between flex-wrap h-full p-1 md:p-5 text-white font-vazir m-auto'>
                    {contacts.length > 0 ? contacts.map((contact) => {
                        return (
                            <Contact subdeletcontact={DeletContacts} key={contact.id} contact={contact} />
                        )
                    }) : (
                        <div className=' bg-accentDark py-5 md:py-10 px-14 md:px-28 flex items-center rounded-3xl justify-center flex-col  mt-5 m-auto '>
                            <p className='mt-10 mb-10 text-xl text-center'>مخاطبی یافت نشد...</p>
                            <img className=' mb-10 rounded-2xl' src={require("../Assets/images/notfound.gif")} alt="" />
                        </div>
                    )}
                </div>
            )}

        </div>
    )
}

export default Contacts