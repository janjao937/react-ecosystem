import React,{useState,useContext} from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

//create context
const ThemeCtx = React.createContext();

//Create HOC:Higher Order Component Provider
const ThemeContextProvider =(p)=>{
  const [isDatkMode,ediMode] = useState(false);
  const styleObj = {
    backgroundColor : isDatkMode?"black":"white",
    color:isDatkMode?"white":"black",
  }

  const btnStyleObj = {
    backgroundColor : isDatkMode?"white":"black",
    color:isDatkMode?"black":"white",

  }

  const OnChangeThemeHandler =()=>{
    ediMode(!isDatkMode);
  }

  const sharedObj ={fruit:"Banana", theme:styleObj, btnTheme:btnStyleObj, toggleTheme:OnChangeThemeHandler}

  return <ThemeCtx.Provider value={sharedObj}>{p.children}</ThemeCtx.Provider>
}

const App =()=>{
  const {fruit,theme,btnTheme,toggleTheme} = useContext(ThemeCtx);

  // const [isDatkMode,ediMode] = useState(false);

  // const OnChangeModeHandler =()=>{
  //   ediMode(!isDatkMode);
  // }
  // const styleObj = {
  //   backgroundColor : isDatkMode?"black":"white",
  //   color:isDatkMode?"white":"black",

  // }
  // const btnObj = {
  //   backgroundColor : isDatkMode?"white":"black",
  //   color:isDatkMode?"black":"white",

  //}
  return(
    
    <div className='App' style={theme}>
      <h1>{fruit}</h1>
      <button style={btnTheme} onClick={toggleTheme}>Change Theme</button>
    </div>
   
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
<ThemeContextProvider>

<App/>
</ThemeContextProvider>


);
