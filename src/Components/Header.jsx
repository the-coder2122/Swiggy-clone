import React, { useState } from 'react';
import { RxCaretDown } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { RiDiscountPercentLine } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  const showSideMenu = () => {
    console.log('hii');
    setToggle(true);
  };

  const hideSideMenu = () => {
    setToggle(false);
  };

  const links =[
    {
      icon: <IoSearchOutline/>,
      name: "Search"
    },
    {
      icon: <RiDiscountPercentLine/>,
      name: "Offers",
      sup: "new"
    },
    {
      icon: " ",
      name: "Help"
    },
    {
      icon: " ",
      name: "Sign In"
    },
    {
      icon: <IoCartOutline/>,
      name: "Cart"
    },
  ]

  return (
    <>
      <div
        className='black-overlay w-full h-full fixed top-0 left-0 bg-black/50 duration-500 z-[100]' onClick={hideSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div onClick={(e) =>{
          e.stopPropagation();
        }} className='bg-white w-[450px] h-full absolute duration-[400ms]' style={{
          left: toggle ? '0%' : '-100%'
        }}>
          
        </div>
      </div>

      {/* Header stays always visible */}
      <header className='p-3 shadow-xl z-10 sticky top-0 bg-white'>
        <div className='max-w-[1000px] mx-auto flex items-center'>
          <div className='w-[60px] border'>
            <img src="images/logo.png" className='w-full' alt="" />
          </div>
          <div>
            <span className='font-bold border-b-[3px] border-[black]'>Burnpur </span> Asansol,
            West Bengal, India
            <RxCaretDown
              onClick={showSideMenu}
              fontSize={22}
              className='font-bold inline text-[#f77002] cursor-pointer'
            />
          </div>
          <nav className='hidden md:flex list-none gap-10 ml-auto border-black font-mono text-[19px]'>
            {
              links.map(
                (link,index) =>{
                  return <li key={index} className='flex hover:text-[#f77002] items-center gap-2 cursor-pointer'>
                    {link.icon}
                    {link.name}
                    <sup>{link.sup}</sup>
                  </li>
                }
              )
            }
          </nav>
        </div>
      </header>
    </>
  );
}

