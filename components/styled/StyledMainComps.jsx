import styled from "styled-components";

export const StyledIntroSec = styled.section`
  background: var(--Intro-CTA-gradient2);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top:9.5em;
  text-align:center;
  height:100vh;
  border-bottom-left-radius: 6em;
  position:relative;
  z-index: 1;
  overflow: hidden;
  color:var(--nl-White);


  & > div{
   max-width:89%;
   margin:auto;

   p{
    padding-inline:1em;
   }
  }

  & > div:last-of-type{
    margin-top:2em;
    display:flex;
    align-items: center;
    justify-content: space-around;
  }

  &::after{
   content:"";
   width:69rem;
   height:100%;
   position:absolute;
   z-index:100;
   display:block;
   left:-6em;
   bottom:0;
   z-index: -1;
   background-image: url('/images/bg-pattern-intro-mobile.svg');
   background-position: center;
   background-position-x:-10em;
   background-position-y:-14em;
   background-size:cover;
   background-repeat: no-repeat;
  }

  h1{
   margin-block:.5em;
  }


  @media (min-width:54rem){
    padding-top:12.3em;
    &::after{
      background-image: url('/images/bg-pattern-intro-desktop.svg')
    }

    & > div:last-of-type{
      justify-content: center;
    }
  }
`


export const StyledBlogSection = styled.div`
  text-align:center;
  position:relative;
  margin-top:3em;
  
  img{
    display:block;
  }
  
 p{
  color:var(--nl-veryDark-grayish-Blue-BODY-COPY);
  line-height: 25px;
 }

  h2:first-of-type{
    font-size:1.4rem;
    margin-block:1.3em;
  }

 h3{
    font-size:1.5rem;
    margin-block:1.2em .6em;
  }

 h2,
 h3{
    color:var(--py-veryDark-Blue-HEADINGS);
    font-weight: 500;
 }


 @media (min-width:54rem){
    h2:first-of-type{
      font-size:2.2rem;
      margin-block:4em -1.5em;
    }  
 }
  
`

export const FlexContainer = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content:center ;
  max-width:90%;
  margin-inline:auto;

  article{
    padding-inline:1.7em;
    margin-block:1em;
  }


  @media (min-width:54rem) {
    &{
      flex-direction: ${({reverse}) =>  reverse ? "row-reverse" : "row"};
      align-items: flex-start;
    }
     
    article{
      text-align: left;
      width:100%;
    }

    img{
      width: ${({reverse}) =>  !reverse ? "51em" : "45em"};
      height:auto;
      right: ${({reverse}) =>  reverse && "-10em"};
      left: ${({reverse}) =>  !reverse && "-19em"};
      position:relative;
    }

    div{
      width:50%;
    }
  }
  
`

export const StyledArticleContainer = styled.div`
  @media (min-width:54rem) {
    &{
      margin-top:10%;
    }
  }
`

export const BackgroundDesignedContainer = styled.div`
  background:var(--Body-BG-gradient);
  background-size:cover;
  background-position: center;
  border-bottom-left-radius: 5.5rem;
  border-top-right-radius:5.5rem;
  padding-block:14em 3.5em;
  margin-top:14em;
  position: relative;
  margin-bottom:3em;
  z-index:1;

  article{
    padding-inline:1.7em;
    margin-block:1.5em;

    h4,
    p{
      color:var(--nl-White);
    }
    h4{
      font-size: clamp(2rem, 0.588vw + 1.882rem, 2.5rem);
      font-weight: 400;
      margin-block:1em .7em;
    }
  }
  
  img{
    position: absolute;
    top:-11em;
    left:-50%;
    right:-50%;
    margin-inline:auto;
  }


  &::before{
    content:"";
    width:100%;
    height:100%;
    z-index:-1;
    background:url('/images/bg-pattern-circles.svg');
    background-position: center;
    background-position-y: -14em;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top:0em;
    left:0;
  }




  @media (min-width:54rem) {

    &{
      display:flex;
      padding-block:6em;
      align-items: center;
      justify-content: center;
    }
    article{
      width:45%;
      text-align:left;
    }

    & > div{
      width:45%;
    }

    &::before{
      background-position-x: -10rem;
      background-position-y: -26rem;
      width:70%;
    }

    img{
      width:34rem;
      height:auto;
      top:0;
      bottom:0;
      margin:auto;
      right:-2em;
    }
  }

`