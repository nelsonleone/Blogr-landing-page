import styled from "styled-components";

export const StyledFooterSection = styled.footer`
   background-color: var(--nl-veryDark-black-Blue-FOOTER-BG);
   border-top-right-radius: 5rem;
   padding:3em 1em;
   text-align: center;
   margin-top:3em;

   img{
      margin-block:.5em 3em;
   }

   li{
      color:var(--nl-White);
      font-weight: 600;
      margin-block:.4em;
   }
   li:first-of-type{
      margin-bottom:1.2em;
      position:relative;
   }
   li:first-of-type::after{
      display:none !important;
   }
   a{
      color:var(--nl-grayish-Blue-FOOTER-TEXT);
      font-weight:400;
      font-family: 'Overpass',sans-serif;
   }

   ul{
      margin-bottom:2.1em;
   }


   

   /* ACTIVE STATES */

   li:hover{
      text-decoration: underline;
      text-decoration-color: var(--nl-White);
   }


   @media (min-width:54rem) { 
      li:first-of-type{
        margin-bottom:1.7em;
      }
      li{
         margin-bottom:1.3em;
      }
      &,
      nav{
         display:flex;
         justify-content: space-around;
         text-align: left;
      }
      nav{
         width:70%;
      }

      div{
         width:10%;
      }
   }
`