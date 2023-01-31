import { StyledSecondaryUL } from "../styled/StyledHeaderComps"
import { LinksData } from "../LinksData"
import Link from "next/link"
import { nanoid } from "nanoid"


export default function SecondaryUL(){
   return(
      <StyledSecondaryUL>
        {
            LinksData[0].secondaryNavLinks.map(navLink => {
               return(
                  <li key={nanoid()}>
                     <Link href={navLink.link}>
                        {navLink.listItem}
                     </Link>
                  </li>
               )
            })
         }
      </StyledSecondaryUL>
   )
}