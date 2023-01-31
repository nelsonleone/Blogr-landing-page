import { StyledFooterSection } from "./styled/StyledFooterComps";
import Image from "next/image";
import Link from "next/link";


export default function Footer(){
   return(
      <StyledFooterSection>
         <div>
            <Image 
            src="/images/logo.svg"
            alt="Page Logo"
            width={83}
            height={35}
            />
         </div>

         <nav>
           <ul aria-label="View Pricing and Products">
              <li>Product</li>
              <li><Link href="/">Overview</Link></li>
              <li><Link href="/">Pricing</Link></li>
              <li><Link href="/">Marketplace</Link></li>
              <li><Link href="/">Integrations</Link></li>
           </ul>

           <ul aria-label="Explore our company">
               <li>Company</li>
               <li><Link href="/">About</Link></li>
               <li><Link href="/">Team</Link></li>
               <li><Link href="/">Blog</Link></li>
               <li><Link href="/">Careers</Link></li>
           </ul>

           <ul aria-label="Connect with us">
               <li>Connect</li>
               <li><Link href="/">Contact</Link></li>
               <li><Link href="/">Newsletter</Link></li>
               <li><Link href="/">LinkedIn</Link></li>
           </ul>
         </nav>
      </StyledFooterSection>
   )
}