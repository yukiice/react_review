import React from 'react'
import  useUserContext  from './hooks'
export default function Context() {
   const [user,token ]  =useUserContext()
    console.log(user,token)
    return (
        <div>
            
        </div>
    )
}
