import { StyledNav } from "./styled/StyledHeaderComps"
import PrimaryLI from "./Dropdown/PrimaryLI"
import SecondaryUL from "./Dropdown/SecondaryUL"
import { LinksData } from "./LinksData"
import { nanoid } from "nanoid"
import { useEffect, useRef, useState } from "react"



export default function Nav({openNav}){
   const [primaryNavData,setPrimaryNavData] = useState(LinksData[0].primaryNavLinks)
   const nodeRef = useRef()

   function handleSubMenuSingleDisplay(listItem){
      setPrimaryNavData(prev => {
         return prev.map(item => {
            if(item.listItem === listItem && item.showSubMenu === true){
               return {...item,showSubMenu:false}
            }else if(item.listItem === listItem && item.showSubMenu !== true){
               return {...item,showSubMenu:true}
            }else{
               return {...item,showSubMenu:false}
            }
         })
      })
   }

   function closeAll(e){
      if(nodeRef.current.contains(e.target))return;

      setPrimaryNavData(prev => {
         return prev.map(item => {
            return {...item,showSubMenu:false}
         })
      })
   }

   useEffect(()  => {
      document.addEventListener('mousedown',closeAll)

      return () =>{
         document.removeEventListener("mousedown", closeAll)
      } 
   })

   return(
      <StyledNav display={openNav ? "flex" : "none"} ref={nodeRef}>
         <ul>
            {
               primaryNavData.map((navLink,index) => {
                  return(
                     <PrimaryLI 
                        key={nanoid()} 
                        listItem={navLink.listItem} 
                        subNavs={navLink.subNavs} 
                        showSubMenu={navLink.showSubMenu}
                        handleSubMenuSingleDisplay={handleSubMenuSingleDisplay}
                     />
                     )
                  })
               }
         </ul>
        <SecondaryUL />
      </StyledNav>
   )
}
