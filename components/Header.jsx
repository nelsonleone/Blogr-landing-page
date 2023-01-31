import Nav from "./Nav";
import Image from "next/image";
import { StyledHeader } from "./styled/StyledHeaderComps";
import { useEffect, useState } from "react";
import Hamburger from 'hamburger-react';

export default function Header(){
   const [openNav,setOpenNav] = useState(false)


   useEffect(()  => {
      function checkResize(){
         window.addEventListener('resize',() =>  {
            window.innerWidth >= 864 ? setOpenNav(true) : setOpenNav(false)
         })
      }
      checkResize()
   })

   useEffect(() => {
      window.innerWidth >= 864 ? setOpenNav(true) : setOpenNav(false)
   },[])

   return(
      <StyledHeader>
         <Image src="/images/logo.svg" priority alt="Page Logo" width={80} height={32} />
         <button 
           onClick={() => setOpenNav(!openNav)}
           aria-controls="nav"
           aria-expanded={openNav}
           aria-haspopup="true"
           >
            <Hamburger  
               alt="Open Navigation Menu" 
               isOpen={openNav}
               color="white"
            />
         </button>
         <Nav openNav={openNav} id="nav"/>
      </StyledHeader>
   )
}