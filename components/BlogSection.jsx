import {
    StyledBlogSection, 
    FlexContainer, 
    StyledArticleContainer,
    BackgroundDesignedContainer
 } from "./styled/StyledMainComps"
import Image from "next/image"

export default function BlogSection(){
   return(
      <StyledBlogSection>
         <section>
            <h2>Designed for the future</h2>
            <FlexContainer reverse>
               <div>
                  <picture>
                     <source srcSet="/images/illustration-editor-mobile.svg" media="(max-width:700px)" />
                     <Image 
                        src="/images/illustration-editor-desktop.svg" 
                        alt="" 
                        aria-hidden="true" 
                        width={370}
                        height={300}
                     />
                  </picture>
               </div>

               <StyledArticleContainer>
                  <article>
                     <h3>Introducing an extensible editor</h3>
                     <p>
                        Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
                        The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
                        videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
                        change the looks of a blog.
                     </p>
                  </article>
                  <article>
                  <h3>Robust content management</h3>
                  <p>
                     Flexible content management enables users to easily move through posts. Increase the usability of your blog 
                     by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
                  </p>
                  </article>
               </StyledArticleContainer>
            </FlexContainer>

            <BackgroundDesignedContainer>
               <div>
                  <Image 
                     src="/images/illustration-phones.svg" 
                     alt="" 
                     aria-hidden="true" 
                     width={370}
                     height={390}
                  />
               </div>

               <article>
                  <h4>State of the art infrastructure</h4>
                  <p>
                     With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
                     This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
                  </p>
               </article>
            </BackgroundDesignedContainer>

            <FlexContainer>
               <div>
                  <picture>
                     <source srcSet="/images/illustration-laptop-mobile.svg" media="(max-width:700px)" />
                     <Image 
                        src="/images/illustration-laptop-desktop.svg" 
                        alt="" 
                        aria-hidden="true" 
                        width={440}
                        height={310}
                     />
                  </picture>
               </div>

               <StyledArticleContainer>
                  <article>
                     <h3>Free, open , simple</h3>
                     <p>   
                        Blogr is a free and open source application backed by a large community of helpful developers. It supports 
                        features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
                        and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
                     </p>
                  </article>
                  <article>
                  <h3>Powerful tooling</h3>
                  <p>
                     Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
                     capable of producing even the most complicated sites.
                  </p>
                  </article>
               </StyledArticleContainer>
            </FlexContainer>
         </section>
      </StyledBlogSection>
   )
}