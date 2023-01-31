import { nanoid } from "nanoid"
import Link from "next/link"
import { useState } from "react"
import { StyledSubNavUL } from "../styled/StyledHeaderComps"

export default function Subnav({subNavs,showSubMenu}){

   return(
      <StyledSubNavUL display={showSubMenu ? "block" : "none"}>
         {
            subNavs.map(item => {
               return(
                  <li key={nanoid()}>
                     <Link href={item.link}>
                        {item.subNavItem}
                     </Link>
                  </li>
               )
            })
         }
      </StyledSubNavUL>
   )
}