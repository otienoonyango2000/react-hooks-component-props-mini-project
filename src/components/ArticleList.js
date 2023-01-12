import React from "react"
import blogData from "../data/blog"
import Article from "./Article"


function ArtcleList(){
    const articles = blogData.posts.map((post)=>{
        return (<Article title = {post.title} 
        date = {post.date} preview = {post.preview}/>)
    })
    return(
        
        <main>
            {articles}
        </main>
    )
}

export default ArtcleList