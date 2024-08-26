import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

function Logout() {
  const navigate = useNavigate();

  const [authUser,setAuthUser]= useAuth();
  const handleLogout = () => {
    setAuthUser(
        {
            ...authUser,users:null
        }
    )
    localStorage.removeItem('token');
    localStorage.removeItem('users');
    window.location.reload();
    navigate('/');
    }


  return (
    <button
      onClick={handleLogout} // Corrected this line
      className='px-3 py-3 font-medium rounded-xl text-white bg-red-500 hover:bg-red-700'
    >
      Logout
    </button>
  );
}

export default Logout;
