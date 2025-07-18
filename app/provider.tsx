"use client"
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { UserDetailContext } from './context/UserDetailContext'

export type UserDetail = {
  name: string,
  email: string,
  credits: number
}
export function Provider({children}: {children: React.ReactNode}) {

  const {user} = useUser();
  const [userDetail, setUserDetail] = useState();

  useEffect(()=>{
     user && CreateNewUser();
  }, [user])

  const CreateNewUser = async () =>{
    const result = await axios.post("/api/users");
    console.log(result.data.result);
    setUserDetail(result.data.result)
  }
  return (
    <div>
      <UserDetailContext.Provider value={{userDetail, setUserDetail}}>
      {children}
      </UserDetailContext.Provider>
    </div>
  )
}

