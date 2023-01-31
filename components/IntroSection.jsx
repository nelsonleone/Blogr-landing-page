import { StyledIntroSec } from "./styled/StyledMainComps"
import { CTABtn } from "./styled/CTABtn"
import Link from "next/link"



export default function IntroSection(){
   return(
      <StyledIntroSec>
         <div>
            <h1>A modern publishing platform</h1>
            <p>
               Grow your audience and build your online brand
            </p>
         </div>
         <div>
            <CTABtn>
               <Link href="/">Start for free</Link>
            </CTABtn>
            <CTABtn transparent={true}>
               <Link href="/">Learn More</Link>
            </CTABtn>
         </div>
      </StyledIntroSec>
   )
}