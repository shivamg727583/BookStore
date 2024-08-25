import React from 'react';
import Header from '../Components/Header';

const About = () => {
  return (
   <div className='w-full min-h-screen pt-24'>
    <Header />
     <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
      
      <p className="text-lg mb-4">
        Welcome to our bookstore! We are passionate about bringing you the best selection of books from all genres. 
        Whether you are looking for the latest bestseller, a timeless classic, or a hidden gem, we have something for everyone.
      </p>

      <p className="text-lg mb-4">
        Our mission is to foster a love of reading in our community. We believe that books have the power to educate, 
        entertain, and inspire. Our team is dedicated to providing excellent customer service and a friendly, welcoming atmosphere 
        for all book lovers.
      </p>

      <p className="text-lg mb-4">
        At our bookstore, we not only offer a diverse selection of books but also host various events, such as book signings, 
        author talks, and reading groups. We aim to be more than just a bookstore—we want to be a community hub where readers 
        can come together and share their passion for literature.
      </p>

      <p className="text-lg">
        Thank you for choosing us as your go-to bookstore. We look forward to serving you and being a part of your reading journey.
      </p>
    </div>
   </div>
  );
};

export default About;
