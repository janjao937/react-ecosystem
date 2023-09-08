import React, { useState,useEffect,useContext } from 'react'
import ReactDOM from 'react-dom/client'
import axios from "axios";
import './index.css'

const AuthCtx = React.createContext();

const AuthContexProvider =(p)=>{
  const [isAuth,setIsAuth] = useState(false);
  const [isLoading,setIsLoading] = useState(false);
  const [user,setUser] = useState({user:"guest"});
  //delay loading
  useEffect(()=>{
    if(isLoading)
    {
      setTimeout(()=>setIsLoading(false),1000);
    }
  },[isLoading]);

  const OnAuthHandler = async()=>{
    if(isAuth){
      setIsAuth(false);
      setUser({user:"guest"});
      return;
    }
    
    try{
      setIsLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/users/1");
      setUser(res.data);
      setIsAuth(true);

    }catch(err){
      console.log(err);
    }finally{
      setTimeout(()=>{
        setIsLoading(false);
      },1000);
    }
  }
  const share ={isAuth,OnAuthHandler,isLoading,user};
  return (
  <AuthCtx.Provider value={share}>
    {p.children}
  </AuthCtx.Provider>
  );
}

const App=()=>{

  const {isAuth,OnAuthHandler,isLoading,user} = useContext(AuthCtx);
  
  return(
    <div className='App'>
      {isLoading?<h1>Loading...</h1>:<h1>Welcome:{!isAuth?"Guest":user.name}</h1>}
      <button onClick={OnAuthHandler}>{!isAuth?"Login":"Logout"}</button>
      
    </div>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(
<AuthContexProvider>

  <App/>
</AuthContexProvider>
)
