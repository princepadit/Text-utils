
import './App.css';
import React,{useState} from 'react';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [mode, setMode] =useState('light');
 const  [alert,setAlert]=useState(null);

 const showAlert=(message,type)=>{
  setAlert({
  msg:message,
  type: type
})
setTimeout(() => {
  setAlert(null);
}, 3000);
 }
  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.background='#042743';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.background='white';
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <>
<Router>
<Navbar title="Prajapati" aboutText="About" mode= {mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
<Switch>
          <Route path="/about">
            <About/>
          </Route>
          
          <Route path="/">
          <Textform showAlert={showAlert} heading="Enter the text to analyze"mode={mode}/>
            
          </Route>
          
 </Switch>
 </div>
 </Router>       
     


 



  </>  
     

  );
}

export default App;
//Prince