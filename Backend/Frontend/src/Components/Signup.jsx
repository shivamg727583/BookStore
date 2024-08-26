import React from 'react';
import Header from './Header';
import { useForm } from 'react-hook-form';
import api from '../Axios/Axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
function Signup() {
 const navigate =  useNavigate();
    const { register, reset,handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = async (data) => {
     
      try {
const dataInfo = {
  name: data.name,
  email: data.email,
  password: data.password,
  mobile:data.number
}

        const response = await api.post('/user/signup', dataInfo);
        if(response.data){
          toast.success('Successfully Register!');
          reset();
         setTimeout(()=>{
          navigate('/');
         },1000)
        }
        else {
          toast.error('Registration failed');
        }

      

    }
    catch(err){
      toast.error('Error:Invernal serval error');
    }
  }


        

  return (
   <>
    <Header />
    <div className='flex items-center justify-center flex-col gap-3 max-w-screen-2xl mx-auto h-screen '>
       
        <form className='border rounded-xl shadow-md md:mt-10 p-2 md:py-6 md:px-6 dark:shadow-slate-600 bg-gray-100 dark:bg-slate-700' onSubmit={handleSubmit(onSubmit)}>
        <h1 className='text-3xl font-semibold text-center mb-3'>Signup</h1>
           <div className='my-2 w-80 flex items-start gap-1 flex-col  '>
           <label className='text-medium font-medium'>Username:</label>
           <input type="text" name="username" placeholder='Enter username' className='input input-bordered dark:bg-slate-700 dark:text-white dark:border-white dark:outline-gray-200 w-full'
           
           {...register('username',{required:true})}
           />
          
           {errors.username && <span className='text-sm text-red-500'>username field is required</span>}
           </div>
            
           <div className='my-2 w-80 flex items-start gap-1 flex-col  '>
           <label htmlFor="email" className='text-medium font-medium'>
                Email:</label>
                <input type="email" name="email" placeholder='Enter your email' className='input input-bordered dark:bg-slate-700 dark:text-white dark:border-white dark:outline-gray-200 w-full' 
                 
           {...register('email',{required:true})}/>
          
           {errors.email && <span className='text-sm text-red-500'>Email field is required</span>}
           </div>
                
                <div className='my-2 w-80 flex items-start gap-1 flex-col  '>
                <label htmlFor="mobile" className='text-medium font-medium'>Mobile :</label>
                <input type="number" name="mobile" placeholder='Enter mobile number'  className='input input-bordered dark:bg-slate-700 dark:text-white dark:border-white dark:outline-gray-200 w-full'
                 
           {...register('number',{required:true})}/>
          
           {errors.mobile && <span className='text-sm text-red-500'>Mobile field is required</span>}

                </div>
                    <div className='my-2 w-80 flex items-start gap-1 flex-col  '>
                    <label className='text-medium font-medium'>Password:</label>
            <input type="password" name="password" placeholder='Enter password' className='input input-bordered dark:bg-slate-700 dark:text-white dark:border-white dark:outline-gray-200 w-full' 
             
           {...register('password',{required:true})}
            />
           
            {errors.password && <span className='text-sm text-red-500'>Password field is required</span>}
  
                    </div>
           
<div>
<input type="submit" value="Signup" className='btn btn-primary mt-3'/>

<h5 className='mt-2 text-center'>If you have already account then <a href="/" className='text-blue-500 hover:text-blue-700'>Login</a></h5>
    
    </div>            
            
        </form>
    </div></>
  )
}

export default Signup