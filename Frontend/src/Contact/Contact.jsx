import React from 'react';
import { useForm } from 'react-hook-form';
import Header from '../Components/Header';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    // Here you can handle the form submission logic, such as sending the data to a backend server
  };

  return (
   <div className='dark:bg-slate-900 dark:text-white w-full min-h-screen pt-28'>
    <Header />
    <div className="max-w-md mx-auto p-4  bg-gray-100 rounded-xl dark:bg-slate-800 dark:text-white">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-gray-700 dark:text-white">Name</label>
          <input
            type="text"
            {...register('name', { required: 'Name is required' })}
            className={`w-full px-4 py-2 border rounded-md dark:bg-slate-700 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.name && <span className="text-red-500">{errors.name.message}</span>}
        </div>
        
        <div>
          <label className="block text-gray-700 dark:text-white">Email</label>
          <input
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: 'Invalid email address'
              }
            })}
            className={`w-full px-4 py-2 border rounded-md dark:bg-slate-700   ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.email && <span className="text-red-500">{errors.email.message}</span>}
        </div>
        
        <div>
          <label className="block text-gray-700 dark:text-white">Message</label>
          <textarea
            {...register('message', { required: 'Message is required' })}
            className={`w-full px-4 py-2 border rounded-md resize-none dark:bg-slate-700  ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.message && <span className="text-red-500">{errors.message.message}</span>}
        </div>
        
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Submit
        </button>
      </form>
    </div>
   
   </div>
  );
};

export default ContactForm;
