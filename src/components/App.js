import React from "react";
import blogData from "../data/blog";
import About from "./About";
import ArtcleList from "./ArticleList";
import Header from "./Header";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name = {blogData.name}/>
      <About image = {blogData.image} about = {blogData.about}/>
      <ArtcleList/>
    </div>
  );
}

export default App;
