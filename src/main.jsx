import React, { useState,useEffect,useContext } from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

const AuthCtx = React.createContext();

const AuthContexProvider =(p)=>{
  const [isAuth,setIsAuth] = useState(false);
  const [isLoading,setIsLoading] = useState(false);

  //delay loading
  useEffect(()=>{
    if(isLoading)
    {
      setTimeout(()=>setIsLoading(false),1000);
    }
  },[isLoading]);

  const OnAuthHandler =()=>{
    let auth = isAuth;
    if(!auth)
    {
      setIsLoading(true);
      setIsAuth(true);
    }
    else{
      setIsAuth(false);
    }
    
    // setIsAuth(!isAuth);
  }
  const share ={isAuth,OnAuthHandler,isLoading};
  return (
  <AuthCtx.Provider value={share}>
    {p.children}
  </AuthCtx.Provider>
  );
}

const App=()=>{

  const {isAuth,OnAuthHandler,isLoading} = useContext(AuthCtx);
  
  return(
    <div className='App'>
      {isLoading?<h1>Loading...</h1>:<h1>Welcome:{!isAuth?"Guest":"User"}</h1>}
      <button onClick={OnAuthHandler}>{!isAuth?"Login":"Logout"}</button>
      
    </div>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(
<AuthContexProvider>

  <App/>
</AuthContexProvider>
)
