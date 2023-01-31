import styled from "styled-components";


export const StyledHeader = styled.header`
  display:flex;
  align-items: center;
  justify-content:space-between;
  position: absolute;
  top:8%;
  width:100%;
  z-index: 500;
  padding-inline:1.2em;

  
  @media (min-width:54rem){
    max-width:90%;
    margin-inline:auto;
    left:0;
    right:0;
    button:first-of-type{
      display:none;
    }
  }
`

export const StyledNav = styled.nav`
  position:absolute;
  background-color: var(--nl-White);
  width:90%;
  margin:auto;
  top:3.4em;
  border-radius: 7px;
  box-shadow: 0 10px 10px hsla(0, 0%, 60%,0.5);
  padding-inline:1em;
  justify-content: center;
  flex-direction: column;
  padding-block:1em .5em;
  left:0;
  right:0;
  text-align: center;
  display: ${({display}) => display };

 @media (min-width:54rem) {
  position:unset;
  flex-direction: row;
  justify-content:space-between;
  background:none;
  width:90%;
  padding:0;
  margin:0;
  height:auto;
  box-shadow:none;
}
`

export const StyledPrimaryListItem = styled.li`
  font-weight: 600;
  cursor: pointer;
  color: var(--py-veryDark-Blue-HEADINGS);
  margin-block:1.5em;
  font-family:'Overpass',sans-serif;

  img{
   position: relative;
   right:-.4em;
   transform: ${({rotateImg}) => rotateImg && "rotate(180deg)"};
   transition: .3s ease-in-out;
  }

 
 @media (min-width:54rem){
    display:inline-block;
    color:var(--nl-White);
    margin-inline:1em;
    position:relative;
  }

`

export const StyledSubNavUL = styled.ul`
  background-color:#ececf1c3;
  width:16rem;
  border-radius: 7px;
  padding:.5em;
  position: relative;
  left:0;
  right:0;
  margin: .6em auto;
  display: ${({display}) => display };


  a{
    color:var(--nl-veryDark-grayish-Blue-BODY-COPY);
  }

  & > li{
    margin-block:.5em;
    font-weight: 500;
    font-family: 'Ubuntu',sans-serif;
    transition:.3s linear;
  }


  /* ACTIVE STATES */
  li:hover{
    font-weight:700;
  }


  @media (min-width:54rem){
    position:absolute;
    background-color:  var(--nl-White);
    top:3em;
  }
`




export const StyledSecondaryUL = styled.ul`
  border-top: 1px solid hsla(240, 18%, 80%, 0.858);
  margin-top:1em;
  padding-top:1.3em;
   
  a{
   color:var(--py-veryDark-Blue-HEADINGS);
  }
  
  li{
    font-weight: 600;
    font-family:'Overpass',sans-serif;
  }

  & > li:last-of-type{
    padding:.7em;
    background:var(--Intro-CTA-gradient);
    max-width:43%;
    margin-inline:auto;
    display:block;
    border-radius:30px;
    margin-top:1em;
    transition: all .3s ease-in ;

    a{
      color:white;
    }
  }


  /* ACTIVE STATES */
  li:last-of-type:hover{
    background:var(--py-veryLight-Red-CTA-HOVER);

    a{
      color:var(--nl-White);
    }
  }


  @media (min-width:54rem){
    border:none;
    margin:0;
    padding:0;
    flex-basis: 25%;

    li{
      display:inline-block !important;
      margin-inline:1em;

      a{
        color:var(--nl-White);
      }
    }

    li:last-of-type{
      width:unset;
      border-radius: none;
      margin:0;
      width:unset;
      padding:.7em 1.2em;
      background:var(--nl-White);

      a{
        color:var(--py-light-Red);
      }
    }
  }
`