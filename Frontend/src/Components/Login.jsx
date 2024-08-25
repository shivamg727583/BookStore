import React from 'react';
import { useForm } from 'react-hook-form';
import api from '../Axios/Axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const { handleSubmit, reset, register, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const dataInfo = {
        email: data.email,
        password: data.password,
      };

      const response = await api.post('/user/login', dataInfo);

      console.log(response.data)
    
      if (response.data) {
        let users = JSON.stringify(response.data.user);
        localStorage.setItem('users', users);
        toast.success('Successfully Logged In!');
        reset(); // Reset the form after a successful login
        document.getElementById('my_modal_3').close();
        window.location.reload();
        navigate('/'); // Redirect to the home page

      } else {
        toast.error('Login Failed');
      }
    } catch (err) {
      toast.error('Email or password are wrong');
    }
  };

  return (
    <div>
      {/* You can open the modal using document.getElementById('my_modal_3').showModal() method */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-700 dark:text-white">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById('my_modal_3').close()}>✕</button>
          <h3 className="font-bold text-lg">Login</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mt-6'>
              <label className="label">
                <span className="label-text dark:text-white">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your Email"
                className="input input-bordered rounded-lg dark:bg-slate-800 dark:text-white dark:border-white dark:outline-white"
                {...register("email", { required: true })}
              />
              {errors.email && <span className='text-sm text-red-500'>Email field is required</span>}
            </div>
            <div className='mt-8'>
              <label className="label">
                <span className="label-text dark:text-white">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered rounded-xl dark:bg-slate-800 dark:text-white dark:border-white dark:outline-white"
                {...register('password', { required: true })}
              />
              {errors.password && <span className='text-sm text-red-500'>Password field is required</span>}
            </div>
            <div className='flex justify-between items-center mt-4'>
              <input type="submit" value="Login" className='btn btn-primary' />
              <h5 className='text-sm'>Not registered? <a href="/signup" className='text-blue-500'>Sign up</a></h5>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
