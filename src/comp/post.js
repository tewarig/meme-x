
import React from 'react';
import Funnies from 'funnies';

import './post.css';


const Posts = ({ posts, loading }) => {
  let funnies = new Funnies();

  if (loading) {
    return <> 
    <h2>  {funnies.message()} </h2>
     <div class="spinner-border loader-me" role="status">
  <span class="sr-only"> Loading...</span>
</div>
    </>;
  }

  return (
    <ul className=''>
      {posts.map(post => (
          <>
        <li key={post.id} >
           <div className="card card-meme">
          <img src={post.url} className="card-img-top"/>
          <div class="card-body">
    <p class="card-text">{post.caption}</p>
    <h5 class="card-title">-{post.name}</h5>
  </div>

        </div>
        
         </li>
         <br/>
         </>
        
      ))}
    </ul>
   


     
  );
};

export default Posts;