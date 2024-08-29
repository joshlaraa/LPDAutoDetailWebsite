"use client";
import { TypewriterEffect } from '@/components/typewriter-effect';
import Link from 'next/link';
import React from 'react';

export default function Home() {
  const words = [
    {
      text: "Experience",
    },
    {
      text: "the",
    },
    {
      text: "Art",
      className: "text-[#219ebc]",
    },
    {
      text: "of",
    },
    {
      text: "Auto",
    },
    {
      text: "Detailing.",
    },
  ];
  return (
    <div className='text-black'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#219ebc] font-bold p-2'>
          San Diego's Finest Detailers
        </p>
        <div className='flex justify-center items-center'>
          <TypewriterEffect words={words} />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500 mt-2'>Let's Start Your Car Transformation.</p>
        <Link href="/book" className='bg-[rgb(33,157,188)] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-[rgba(33,157,188,0.7)]'>Book Now</Link>
      </div>
    </div>
  );
}