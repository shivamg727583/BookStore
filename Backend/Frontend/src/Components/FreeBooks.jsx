import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Card from "./Card";
import axios from "../Axios/Axios";

function FreeBooks() {

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


  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  
  const Books = Book.filter((elem, idx)=> elem.type === "free");
 

    return (
      <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 md:mt-0 mt-10 mb-20">
        <div>
          <h1 className="font-semibold text-2xl pb-2">Free Offered Courses</h1>
          <p className="font-normal my-3  w-[80%]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium veritatis alias pariatur ad dolor repudiandae eligendi
            corporis nulla non suscipit, iure neque earum?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, quasi?
          </p>
        </div>


{Book.length>0 ?  

        <div className="self-center">
          <Slider {...settings}>
            {Books.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </Slider>
        </div>
        : <div className="text-center text-lg font-bold py-10">No courses found</div>}
      </div>
    </>
    )
}

export default FreeBooks;
