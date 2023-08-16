import React from "react";
import styled from "styled-components";
const StyledDiv = styled.div`
    display: grid;
    grid-template-columns: minmax(0,11.5rem) 1fr;
    grid-gap: 2rem;
    gap: 2rem;
    align-items: center;
    margin-top: 3rem;

    .author__image-container {
        width: 100%;
    }
    .author__image {
        width: 100%;
        height: auto;
    }
    .author__about-content {
        margin-top: -0.5rem;
    }
    .author__signature {
        width: 17rem;
        height: auto;
    }
    .author__name-title {
        line-height: 1.2;
        font-family: neue-haas-grot-text,sans-serif;
        font-size: 1.4rem;
        font-weight: 500;
        letter-spacing: 0;
        font-style: normal;
        margin-top: 0.5rem;
    }
    .author__name, .author__title {
        display: block;
    }
    .author__title {
        font-weight: 400;
        color: hsla(0,0%,5%,.6);
    }
`;

function Author() {
    return(
        <StyledDiv className="author">
            <div className="author__image-container">
                <img alt="" sizes="230w" 
                    srcSet="https://images.ctfassets.net/qx5k8y1u9drj/1IoF22EjstGpW791ynMrkI/b62bcf99af4a2513ead48b0f1c3de486/author_image.png?fm=webp&amp;w=16&amp;q=70 16w, 
                    https://images.ctfassets.net/qx5k8y1u9drj/1IoF22EjstGpW791ynMrkI/b62bcf99af4a2513ead48b0f1c3de486/author_image.png?fm=webp&amp;w=32&amp;q=70 32w, 
                    https://images.ctfassets.net/qx5k8y1u9drj/1IoF22EjstGpW791ynMrkI/b62bcf99af4a2513ead48b0f1c3de486/author_image.png?fm=webp&amp;w=48&amp;q=70 48w, 
                    https://images.ctfassets.net/qx5k8y1u9drj/1IoF22EjstGpW791ynMrkI/b62bcf99af4a2513ead48b0f1c3de486/author_image.png?fm=webp&amp;w=64&amp;q=70 64w, 
                    https://images.ctfassets.net/qx5k8y1u9drj/1IoF22EjstGpW791ynMrkI/b62bcf99af4a2513ead48b0f1c3de486/author_image.png?fm=webp&amp;w=96&amp;q=70 96w, 
                    https://images.ctfassets.net/qx5k8y1u9drj/1IoF22EjstGpW791ynMrkI/b62bcf99af4a2513ead48b0f1c3de486/author_image.png?fm=webp&amp;w=128&amp;q=70 128w, 
                    https://images.ctfassets.net/qx5k8y1u9drj/1IoF22EjstGpW791ynMrkI/b62bcf99af4a2513ead48b0f1c3de486/author_image.png?fm=webp&amp;w=256&amp;q=70 256w, 
                    https://images.ctfassets.net/qx5k8y1u9drj/1IoF22EjstGpW791ynMrkI/b62bcf99af4a2513ead48b0f1c3de486/author_image.png?fm=webp&amp;w=384&amp;q=70 384w, 
                    https://images.ctfassets.net/qx5k8y1u9drj/1IoF22EjstGpW791ynMrkI/b62bcf99af4a2513ead48b0f1c3de486/author_image.png?fm=webp&amp;w=640&amp;q=70 640w, 
                    https://images.ctfassets.net/qx5k8y1u9drj/1IoF22EjstGpW791ynMrkI/b62bcf99af4a2513ead48b0f1c3de486/author_image.png?fm=webp&amp;w=750&amp;q=70 750w, 
                    https://images.ctfassets.net/qx5k8y1u9drj/1IoF22EjstGpW791ynMrkI/b62bcf99af4a2513ead48b0f1c3de486/author_image.png?fm=webp&amp;w=828&amp;q=70 828w, 
                    https://images.ctfassets.net/qx5k8y1u9drj/1IoF22EjstGpW791ynMrkI/b62bcf99af4a2513ead48b0f1c3de486/author_image.png?fm=webp&amp;w=1080&amp;q=70 1080w, 
                    https://images.ctfassets.net/qx5k8y1u9drj/1IoF22EjstGpW791ynMrkI/b62bcf99af4a2513ead48b0f1c3de486/author_image.png?fm=webp&amp;w=1200&amp;q=70 1200w, 
                    https://images.ctfassets.net/qx5k8y1u9drj/1IoF22EjstGpW791ynMrkI/b62bcf99af4a2513ead48b0f1c3de486/author_image.png?fm=webp&amp;w=1920&amp;q=70 1920w, 
                    https://images.ctfassets.net/qx5k8y1u9drj/1IoF22EjstGpW791ynMrkI/b62bcf99af4a2513ead48b0f1c3de486/author_image.png?fm=webp&amp;w=2048&amp;q=70 2048w, 
                    https://images.ctfassets.net/qx5k8y1u9drj/1IoF22EjstGpW791ynMrkI/b62bcf99af4a2513ead48b0f1c3de486/author_image.png?fm=webp&amp;w=3840&amp;q=70 3840w" 
                    src="https://images.ctfassets.net/qx5k8y1u9drj/1IoF22EjstGpW791ynMrkI/b62bcf99af4a2513ead48b0f1c3de486/author_image.png?fm=webp&amp;w=3840&amp;q=70" 
                    width="230" height="230" decoding="async" data-nimg="1" className="author__image" loading="lazy" style={{color: 'transparent'}}
                />
            </div>
            <div className="author__about-content">
                <img alt="" sizes="240w" 
                    srcSet="https://images.ctfassets.net/qx5k8y1u9drj/6R2duzNEwr83kefvU7O96O/c2f3cd94cb01da47ba852378325ad72f/author-sig.png?fm=webp&amp;w=16&amp;q=70 16w, 
                    https://images.ctfassets.net/qx5k8y1u9drj/6R2duzNEwr83kefvU7O96O/c2f3cd94cb01da47ba852378325ad72f/author-sig.png?fm=webp&amp;w=32&amp;q=70 32w, 
                    https://images.ctfassets.net/qx5k8y1u9drj/6R2duzNEwr83kefvU7O96O/c2f3cd94cb01da47ba852378325ad72f/author-sig.png?fm=webp&amp;w=48&amp;q=70 48w, 
                    https://images.ctfassets.net/qx5k8y1u9drj/6R2duzNEwr83kefvU7O96O/c2f3cd94cb01da47ba852378325ad72f/author-sig.png?fm=webp&amp;w=64&amp;q=70 64w, 
                    https://images.ctfassets.net/qx5k8y1u9drj/6R2duzNEwr83kefvU7O96O/c2f3cd94cb01da47ba852378325ad72f/author-sig.png?fm=webp&amp;w=96&amp;q=70 96w, 
                    https://images.ctfassets.net/qx5k8y1u9drj/6R2duzNEwr83kefvU7O96O/c2f3cd94cb01da47ba852378325ad72f/author-sig.png?fm=webp&amp;w=128&amp;q=70 128w, 
                    https://images.ctfassets.net/qx5k8y1u9drj/6R2duzNEwr83kefvU7O96O/c2f3cd94cb01da47ba852378325ad72f/author-sig.png?fm=webp&amp;w=256&amp;q=70 256w, 
                    https://images.ctfassets.net/qx5k8y1u9drj/6R2duzNEwr83kefvU7O96O/c2f3cd94cb01da47ba852378325ad72f/author-sig.png?fm=webp&amp;w=384&amp;q=70 384w, 
                    https://images.ctfassets.net/qx5k8y1u9drj/6R2duzNEwr83kefvU7O96O/c2f3cd94cb01da47ba852378325ad72f/author-sig.png?fm=webp&amp;w=640&amp;q=70 640w, 
                    https://images.ctfassets.net/qx5k8y1u9drj/6R2duzNEwr83kefvU7O96O/c2f3cd94cb01da47ba852378325ad72f/author-sig.png?fm=webp&amp;w=750&amp;q=70 750w, 
                    https://images.ctfassets.net/qx5k8y1u9drj/6R2duzNEwr83kefvU7O96O/c2f3cd94cb01da47ba852378325ad72f/author-sig.png?fm=webp&amp;w=828&amp;q=70 828w, 
                    https://images.ctfassets.net/qx5k8y1u9drj/6R2duzNEwr83kefvU7O96O/c2f3cd94cb01da47ba852378325ad72f/author-sig.png?fm=webp&amp;w=1080&amp;q=70 1080w, 
                    https://images.ctfassets.net/qx5k8y1u9drj/6R2duzNEwr83kefvU7O96O/c2f3cd94cb01da47ba852378325ad72f/author-sig.png?fm=webp&amp;w=1200&amp;q=70 1200w, 
                    https://images.ctfassets.net/qx5k8y1u9drj/6R2duzNEwr83kefvU7O96O/c2f3cd94cb01da47ba852378325ad72f/author-sig.png?fm=webp&amp;w=1920&amp;q=70 1920w, 
                    https://images.ctfassets.net/qx5k8y1u9drj/6R2duzNEwr83kefvU7O96O/c2f3cd94cb01da47ba852378325ad72f/author-sig.png?fm=webp&amp;w=2048&amp;q=70 2048w, 
                    https://images.ctfassets.net/qx5k8y1u9drj/6R2duzNEwr83kefvU7O96O/c2f3cd94cb01da47ba852378325ad72f/author-sig.png?fm=webp&amp;w=3840&amp;q=70 3840w" 
                    src="https://images.ctfassets.net/qx5k8y1u9drj/6R2duzNEwr83kefvU7O96O/c2f3cd94cb01da47ba852378325ad72f/author-sig.png?fm=webp&amp;w=3840&amp;q=70" 
                    width="240" height="53" decoding="async" data-nimg="1" className="author__signature" loading="lazy" style={{color: 'transparent'}}
                />
                <address className="author__name-title">
                    <span className="author__name">Brett Adcock</span>
                    <span className="author__title">Founder & CEO</span>
                </address>
            </div>
        </StyledDiv>
    )
}
export default Author;