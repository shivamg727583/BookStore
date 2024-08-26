import React from 'react'
import Home from '../src/Home/home'
import Routing from './Routing/Routing';
import  { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <div className=' '>
     <Routing />
     <Toaster />
    </div>
  )
}
