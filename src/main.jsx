import React,{useState} from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

const App =()=>{
  const [isDatkMode,ediMode] = useState(false);

  const OnChangeModeHandler =()=>{
    ediMode(!isDatkMode);
  }
  const styleObj = {
    backgroundColor : isDatkMode?"black":"white",
    color:isDatkMode?"white":"black",

  }
  const btnObj = {
    backgroundColor : isDatkMode?"white":"black",
    color:isDatkMode?"black":"white",

  }
  return(
    <div className='App' style={styleObj}>
      <h1>Banana</h1>
      <button style={btnObj} onClick={OnChangeModeHandler}>Change Theme</button>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
