import React, { createContext, useContext, useState } from 'react'


export const AuthProvider = createContext();
export default  function AuthContext({children}) {

    const initialAuthUser = localStorage.getItem('users') || localStorage.getItem('token');
    const [authUser, setAuthUser] = useState(initialAuthUser ? JSON.parse(initialAuthUser):undefined);



  return (
    <AuthProvider.Provider value={[authUser,setAuthUser]}>{children}</AuthProvider.Provider>
  )
}

 export const useAuth = ()=> useContext(AuthProvider);