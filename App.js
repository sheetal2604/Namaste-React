/*
<div id="parent">
 <div id="child1">
  <h1>I am H1 tag</h1>
  //sibliing
  <h2>I am H2 tag>/h2>
 </div>
 <div id="child2">
  <h1>I am H1 tag</h1>
  //sibliing
  <h2>I am H2 tag>/h2>
 </div>
</div>

*/

const parent=React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child1"},[React.createElement("h1",{},"I am H1 tag"),React.createElement("h2",{},"I am H2 tag")]),React.createElement("div",{id:"child2"},[React.createElement("h1",{},"I am H1 tag"),React.createElement("h2",{},"I am H2 tag")])]);
console.log(parent);

//const heading=React.createElement("h1",{id:"heading"},"Hello World from react!");
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);