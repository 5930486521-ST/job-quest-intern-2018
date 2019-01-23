import React from "react";

const BoxComponent = (props) => (
  <article  style={{backgroundColor:props.color}} className="animated bounceInUp  br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw7 shadow-5 center" >
  <main  className="px-2 py-3 black-80" >
    <div  className="center2">
        {props.children}
    </div>
    </main>
   </article>);

export default BoxComponent;