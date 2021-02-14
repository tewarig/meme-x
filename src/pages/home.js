import react from 'react' ;
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Posts from '../comp/post';
import Pagination from '../comp/pagination';
import NavBar from '../comp/navbar';


const Home = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);
  
    useEffect(() => {
      const fetchPosts = async () => {
        setLoading(true);
        const res = await axios.get('http://meme-x.herokuapp.com/memes');
        setPosts(res.data);
        setLoading(false);
      };
  
      fetchPosts();
    }, []);
  
     // Get current posts
     const indexOfLastPost = currentPage * postsPerPage;
     const indexOfFirstPost = indexOfLastPost - postsPerPage;
     const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  
     const paginate = pageNumber => setCurrentPage(pageNumber);


 return(
  <>
  <NavBar>
     
     </NavBar>
  
     <div className='container mt-5  '>
        <Posts posts={currentPosts} loading={loading} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
            </div>
  
    


 </>

 );
}


export default Home ;