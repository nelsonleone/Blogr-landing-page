import styled from "styled-components";

export const CTABtn = styled.button`
   font-weight: 700;
   width:42%;
   background-color: ${({transparent}) => !transparent ? "white" : "transparent"};
   border-radius: 30px;
   padding:.8em;
   border: ${({transparent}) => transparent ? "1px solid var(--nl-White)" : ""};
   transition: all.3s ease-in-out;
   
   a{
      color: ${({transparent}) => transparent ? "var(--nl-White)" : "var(--py-light-Red)"};
   }


   /* ACTIVE STATES */
   &:hover{
      background-color: ${({transparent}) => !transparent ? "var(--py-veryLight-Red-CTA-HOVER)" : "var(--nl-White)"};
      
      a{
         color: ${({transparent}) => transparent ? "var(--py-light-Red)" : "var(--nl-White)"};
      }
   }

   @media (min-width:54rem){
      width:9rem;
      margin-inline: .5em;
   }
`
