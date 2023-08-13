import React from "react";
import TextGradient from "../Components/TextGradient";

function Statement() {
    return (
        <section className="section legal-content">
            <div id="accessibility-statement" className="section__anchor"></div>
            <article className="legal-content__inner">
                <TextGradient activeness text={'Accessibility Statement'} modifiedAt={'Last updated: February 07, 2023'}/>
                <div className="legal-content__content">
                    <p className="rich-text-paragraph">Figure is committed to providing a website that is accessible to the widest possible audience, regardless of technology or ability.</p>
                    <p className="rich-text-paragraph">We aim to comply with all applicable standards including WCAG 2.1 accessibility standards, to level AA.</p>
                    <p className="rich-text-paragraph">If you experience any difficulty in accessing any part of this website, please contact us by emailing <a className="rich-text-link" href="mailto:privacy@figure.ai"><u>privacy@figure.ai</u></a>. </p>
                </div>
            </article>
        </section>
    )
}
export default Statement