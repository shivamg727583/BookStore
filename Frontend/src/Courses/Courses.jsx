import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Cards from '../Components/Card';
import axios from '../Axios/Axios';


function Courses() {
  const [Book, setBook] = useState([]);
  useEffect(()=>{
   const getBooks = async ()=>{
    try {
      const response = await axios.get('/book');
    setBook(response.data);

    } catch (error) {
      console.log(error);
    }
   }
   getBooks();

  },[])

  return (
   <div className='flex flex-col w-max-screen-2xl mx-auto'>
   <Header />
<h1 className='md:text-4xl text-2xl font-semibold text-center md:mt-24  mt-28 mb-10'>
  We're delighted to have you <span className='text-pink-600'>Here!:)</span>
</h1>
<p className='text-center px-2 font-medium mb-10 md:w-[70%] self-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, harum quibusdam! Deleniti nulla alias recusandae cum modi placeat cupiditate ipsum magnam nobis et provident deserunt cumque nesciunt illum voluptate, aspernatur dolorum adipisci magni exercitationem amet eaque. Adipisci veritatis quod autem!</p>

<a href="/">
<button  className='w-fit bg-pink-500 hover:bg-pink-600 text-white fixed flex items-center gap-1 z-10 md:top-20 md:left-6 top-20 left-2 text-[10px] md:text-sm capitalize font-medium px-3 py-2 rounded-lg '> <i className="ri-arrow-left-line"></i> <span className='text-md md:block hidden'>Back</span></button>

</a>

<div className=" grid sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 xl:grid-col-4 gap-4 md:gap-8 lg:gap-12 xl:gap-8 p-4 md:p-8 lg:p-12 xl:p-16 p-20 self-center ">
    {Book.map((book, index) => (
        <Cards
        key={index}
item={book}
        />
        ))}
        </div>
        <Footer />
        </div>

  )
}

export default Courses