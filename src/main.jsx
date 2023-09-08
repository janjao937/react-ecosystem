import React, { useEffect,useState } from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Link,useNavigate,useParams,Navigate } from "react-router-dom";
import axios from "axios";
import './index.css'

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

const HomePage =()=>{

  const [friends,setFriend] = useState([]);

 const navigate = useNavigate();

 const OnNavigateHandler=(id)=>{
  if(id===1) navigate("/profile");
  else navigate(`/friends/${id}`);

 }

  const fetchFriend = async ()=>{
    try{
      const res = await axios.get("/users");
      setFriend(res.data);
     
    }catch(err){
      console.log(err);
    }
  };

  useEffect(()=>{
    fetchFriend();
  },[])

  return (
    <div className='App'>
      <h1>Banana Home</h1>
      {friends.map((f)=>(
        <div onClick={()=>OnNavigateHandler(f.id)} className='friends' key = {f.id}>
          <h3>{f.name}</h3>
          <h3>{f.email},{f.phone}</h3>
        </div>)
      )}
    
   </div>
    );
  }
const Feed = ()=>{
  return  (
    <div className='App'>
      <h1>Banana Feed</h1>
    </div>
    );
}
const Profile = ()=>{
  return (
    <div className='App'>
    <h1>Banana Profile</h1>
  </div>
  );
}

const FriendsPage = ()=>{
  const [friendData,setFriendData] = useState(null);
  const {id} = useParams();

  const fetchFriendsDetail = async() =>{
     try{
      const {data} = await axios.get(`/users/${id}`);
      setFriendData(data);
     }
     catch(err){
      console.log(err);
     }
  };

  useEffect(()=>{
    fetchFriendsDetail();
  },[]);

  return(
    <div className='App'>
       <h1>Friends</h1>
      {friendData && (
      <div className='friends'>
        <h3>{friendData.name}</h3>
      </div>
        )
      }
    
    </div>
  )
}

const NotFound = ()=>{
  return<div>
    <h1>404:Not Found</h1>
  </div>
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Link to ="/">Home</Link>
  <Link to ="/profile">Profile</Link>
  <Link to ="/feed">Feed</Link>
  <Link to ="/friends/:id">Friends</Link>
  <Routes>
  <Route path='/' element={<HomePage/>}/>
  <Route path='/feed' element={<Feed/>}/>
  <Route path='/profile' element={<Profile/>}/>
  <Route path='/friends/:id' element={<FriendsPage/>}/>
  
  {/* <Route path ="*" element={<NotFound/>}/> */}

  <Route path ="*" element={<Navigate to = "/" />}/>
  
  </Routes>
  </BrowserRouter>
);
