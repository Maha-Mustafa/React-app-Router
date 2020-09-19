import React from "react";
import Navbar from "./Navbar";
import sampleimg from "./images/sampleimg.png";
function Blog() {
  return (
    <>
    <h2 className="blog-title">Blog</h2>
    <div className="showcase">
        <div className="showcase-inner-a">
          <h2>A Simple Component</h2>
          <p>
            React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props.
          </p>
          <p><bold>JSX is optional and not required to use React. </bold>Try the Babel REPL to see the raw JavaScript code produced by the JSX compilation step.</p>
        </div>
        <div showcase-inner-b>
          <img src={sampleimg} alt="sample-image"/>
        </div>
      </div>
    </>
  );
}
export default Blog;
