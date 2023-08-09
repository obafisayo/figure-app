import React, { useRef, useEffect } from "react";

function EnteredDiv ({element, threshold, whenDivIsentered, whenYouLeaveDiv, showLeaveFunction}) { 
    const enteredDivRef = useRef(null)

    useEffect(() => {
        const options = {
        root: null,
        rootMargin: '0px',
        threshold: `${threshold}`, // Adjust as needed
        };
        
        const enteredDivRefel = enteredDivRef.current;
        function callback(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    whenDivIsentered()
                } else {
                    showLeaveFunction && whenYouLeaveDiv()
                }
            });
        }
    
        const observer = new IntersectionObserver(callback, options);
    
        if (enteredDivRef.current) {
        observer.observe(enteredDivRef.current);
        }
    
        return () => {
        if (enteredDivRefel) {
            observer.unobserve(enteredDivRefel);
        }
        };
    }, [threshold, whenDivIsentered, whenYouLeaveDiv, showLeaveFunction]);

    return (
        <div ref={enteredDivRef}>
            {element}
        </div>
    )
}
export default EnteredDiv;