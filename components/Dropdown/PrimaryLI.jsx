import { StyledPrimaryListItem } from "../styled/StyledHeaderComps"
import { LinksData } from "../LinksData"
import Subnav from "./SubNav"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"



export default function PrimaryLI(props){
   const {listItem,subNavs,showSubMenu,handleSubMenuSingleDisplay} = props;
   const [rotateImg,setRotate] = useState(false)

   setTimeout(() => {
      setRotate(showSubMenu)
   }, 30);

   function handleClick(){
      handleSubMenuSingleDisplay(listItem)
   }

   return(
      <StyledPrimaryListItem rotateImg={rotateImg} onClick={handleClick}>
         {listItem}
         <picture>
            <source media="(min-width:700px)" srcSet="/images/icon-arrow-light.svg" />
            <Image 
               src="/images/icon-arrow-dark.svg" 
               width={11} 
               height={9} 
               alt="" 
               aria-hidden="true"
            />
         </picture>
         <Subnav subNavs={subNavs} showSubMenu={showSubMenu}/>
      </StyledPrimaryListItem>
   )
}