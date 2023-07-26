import React from "react";

function Totop({component}) {
    function scrollToTop() {
      window.scrollTo(0, 0);
    };
  
    return (
      <div onClick={scrollToTop}>
        {component}
      </div>
    );
  };
export default Totop;