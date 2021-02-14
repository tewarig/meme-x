import react , {useState} from 'react';
import NavBar from '../comp/navbar';
import './add.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import {Link } from 'react-router-dom';



var Add = () => {
    const [name,setName] = useState('');
    const [caption,setCaption] = useState('');
    const [url,setUrl] = useState('');
    const [preview,setPreview] = useState(false);

   var Submit = () => {
       if(name.length>0 && caption.length>0)
       {


       
       if(!isValidHttpUrl(url)){
        toast.warn('please enter url');

       }else{
         var check2 = caption.length;
         if(check2>50)
         {
            toast.warn('Caption should be small then 50 words');

         }else{
           var check1 = name.length;
           if(check1>25)
           {
               toast.warn("Enter a small name");
           }else{
                
               setPreview(true);
           }

         }
       }
    }else{
        toast.error("Please enter all feilds");
    }
       

   }
   var Reload = () => {
       setPreview(!preview);
   }
   function isValidHttpUrl(string) {
    let url;
    
    try {
      url = new URL(string);
    } catch (_) {
      return false;  
    }
  
    return url.protocol === "http:" || url.protocol === "https:";
  }

 const postData = () => {
  axios.post('http://meme-x.herokuapp.com/memes', {
    name : name,
    caption : caption,
    url : url    
  })
  .then(function (response) {
    toast.success("Meme is posted");
  })
  .catch(function (error) {
    toast.warn("Unable to post the meme")
  });

 }
  
    return(
        <>
       <NavBar/>
        <div class="jumbotron">
        { !preview && <>

       <form>

  <label  className="from-width ">
    Name <input type="text" onChange={ event => setName(event.target.value)} class="form-control from-width" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" />
  </label>
  <div class="form-group">


  <label>
    Image Url
    <input type="url"  onChange={ e => setUrl(e.target.value)} class="form-control from-width" id="exampleInputEmail1" name="url" />
  </label>
  </div>
  <div class="form-group">

  <label className="form-width">
    Caption
    <textarea type="text"  onChange={v => setCaption(v.target.value)} class="form-control from-width" id="exampleInputEmail1" name="caption" placeholder="Caption" />
  </label>
  </div>
  <button   class="btn btn-primary"  onClick={ () => (Submit())} > Submit </button>
</form>
       </> }


       {
           preview && <> 
            <h3>Preview </h3>
           <div className="card card-meme">
           <img src={url} className="card-img-top"/>
           <div class="card-body">
     <p class="card-text">{caption}</p>
     <h5 class="card-title">-{name}</h5>
     <button className="btn btn-primary" onClick={()=>{postData()}}>Post this</button>  <button className="btn btn-secondary" onClick={()=> (Reload())}> Let me change</button>  
   </div>
 
         </div> </>
       }
</div>
<ToastContainer />
</>


       
    );
}


export default  Add ;