const heading = React.createElement(
"h1",
// react element is a js object
{ id: "heading", xyz: "abc" },  "Hello from react!");
// above line is known as props and "hello from react" is children which will go inside h1 tag 
// id and xyz is known as attributes
// create element belongs from react
const root = ReactDOM.createRoot(document.getElementById("root"));
// create root belongs from react DOM so we have to create root from ReactDOM
root.render(heading);
// render method convert the object into html h1 tag while rendering 
// attach heading into the root


// <div id="parent">
// <div id="child">
// <h1>I'm an h1 tag</h1>
// <h2>I'm an h2 tag</h2>
// </div>
// <div id="child2">
// <h1>I'm an h1 tag</h1>
// <h2>I'm an h2 tag</h2>
// </div>
// </div>
 
// const parent = React.createElement("div",{id:"parent"},
//    [ 
//      React.createElement("div",{id:"child"},
//      [React.createElement("h1",{},"I'm an h1 tag"),React.creteElement("h2",{},"I'm an h2 tag") ])
//      React.createElement("div",{id:"child"},
//      [React.createElement("h1",{},"I'm an h1 tag"),React.creteElement("h2",{},"I'm an h2 tag") ])
//    ])   
// console.log(parent);   // it gives an object at output
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent) 
