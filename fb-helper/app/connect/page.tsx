"use client";

import ProfileCard from '@/components/profile-card';
import React, { useEffect, useState } from 'react'
import ReactFacebookLogin from 'react-facebook-login';

// Protected routes

const ConnectPage = () => {

  const [user, setUser] = useState<any>(undefined);
  
  const responseFacebook = async (resp: any) => {
    console.log(resp);
    setUser(resp);
  }

  return (
    <>
    {user ?
      <div className='flex'><ProfileCard name={user.name} userId={user.userId} photoUrl={user.picture.data.url}/></div>
    : 
      <div className='w-full flex'>
        <span className=' mt-8 mx-auto px-4 py-2 font-semibold hover:bg-blue-600 bg-blue-400 text-slate-50 rounded-xl'>
          <ReactFacebookLogin
            appId="1596072987830217"
            autoLoad={true}
            fields="name,email,picture"
            callback={responseFacebook}
            cssClass="text-center"
          />
        </span>
      </div>
    }
    </>

  )
}

export default ConnectPage