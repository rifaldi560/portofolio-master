import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

export const Hero = () => {
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(
      h11.current,
      {
        x: '-100%',
        delay: 0.8,
        opacity: 0,
        duration: 2,
        ease: 'Power3.easeOut',
      },
      '<'
    )
      .from(
        h12.current,
        {
          x: '-100%',
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: 'Power3.easeOut',
        },
        '<'
      )
      .from(
        h13.current,
        {
          x: '-100%',
          delay: 0.1,
          opacity: 0,
          duration: 2,
          ease: 'Power3.easeOut',
        },
        '<'
      )
      .from(
        myimageref.current,
        {
          x: '200%',
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: 'Power3.easeOut',
        },
        '<'
      );
  }, []);

  return (
    <main className="container mx-auto max-width section md:flex justify-between items-center bg-gradient-to-r from-purple-400 to-blue-500 p-8 rounded-lg shadow-lg">
      <div>
        <h1
          ref={h11}
          className="text-3xl text-white md:text-5xl xl:text-6xl xl:leading-tight font-bold"
        >
          Haloo Semuanya <br /> My Name is <br />
        </h1>
        <h1
          ref={h12}
          className="text-3xl text-yellow-300 md:text-5xl xl:text-6xl xl:leading-tight font-bold capitalize"
        >
          Rifaldi Ardiansyah
        </h1>
        <h3
          ref={h13}
          className="w-full text-2xl text-white md:text-4xl xl:text-5xl xl:leading-tight font-bold capitalize"
        >
          Siswa Smkn 21
        </h3>
      </div>
      <div className="mt-5 md:mt-0 w-48">
        <img
          src="https://avatars.githubusercontent.com/u/139869850?s=400&u=15ad248617c982ddfd9ab989ee2ffdcdb7c04af3&v=4"
          alt="Altrawan"
          ref={myimageref}
          className="w-1/2 md:ml-auto w-100 border-8 border-yellow-400 rounded-full bg-gray-500" // Hilangkan filter grayscale
        />
      </div>
    </main>
  );
};
