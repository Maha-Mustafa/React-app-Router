import React from "react";
import sampleimg from "./images/sampleimg.png";
// import Navbar from "./Navbar";
function Home() {
  return (
    <>
      <div className="banner">
        <h1>React</h1>
        <p>A Javascript Library for building user interfaces</p>
        <button className="banner-btn">Get Started</button><a href="/">Take the Tutorial <i class="fas fa-chevron-right"></i></a>
      </div>
      <div className="grid-box">
        <div className="grid-box-style">
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
          </p>
          <p>Declarative views make your code more predictable and easier to debug.</p>
        </div>
        <div className="grid-box-style">
          <h3>Component-Based</h3>
          <p>Build encapsulated components that manage their own state, then compose them to make complex UIs.</p>
          <p>Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.</p>
        </div>
        <div className="grid-box-style">
          <h3>Learn Once, Write Anywhere</h3>
          <p>We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code</p>
          <p>React can also render on the server using Node and power mobile apps using<a href="/">React Native</a></p>
        </div>
      </div>
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
      <div className="banner-down">
      <button className="banner-btn">Get Started</button><a href="/">Take the Tutorial <i class="fas fa-chevron-right"></i></a>
      </div>
    </>
  );
}
export default Home;
