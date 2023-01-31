import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

   :root{
      --py-light-Red:hsl(356, 100%, 66%);
      --py-veryLight-Red-CTA-HOVER:  hsl(355, 100%, 74%);
      --py-veryDark-Blue-HEADINGS: hsl(208, 49%, 24%);

      --nl-White: hsl(0, 0%, 100%);
      --nl-grayish-Blue-FOOTER-TEXT:hsl(240, 2%, 79%);
      --nl-veryDark-grayish-Blue-BODY-COPY:hsl(207, 13%, 34%);
      --nl-veryDark-black-Blue-FOOTER-BG:hsl(240, 10%, 16%);

      --Body-BG-gradient:linear-gradient(hsl(237, 17%, 21%), hsl(237, 23%, 32%));
      --Intro-CTA-gradient:linear-gradient(to right ,hsl(13, 100%, 72%),hsl(353, 100%, 62%));
      --Intro-CTA-gradient2:linear-gradient(to bottom right ,hsl(13, 100%, 72%),hsl(353, 100%, 62%));
   }

   *,
   *::after,
   *::before{
      box-sizing:border-box;
      padding:0;
      margin:0;
   }
   body{
      font-family: 'Ubuntu', sans-serif;
   }
   body,
   html{
      overflow-x:hidden;
   }

   button{
      font-family:inherit;
      font-size:inherit;
      border:none;
      background:none;
      cursor: pointer;
   }
   button:focus{
      border:none;
      outline:none !important;
   }
   li,
   a{
      text-decoration: none;
      list-style-type:none;
   }

   p{
      font-family: 'Overpass',sans-serif;
      font-weight: 300;
   }
   h1{
      font-size: clamp(2rem, 1.471vw + 1.706rem, 3.25rem);
      font-weight: 500;
   }
`