
import { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios';

function App() {
const [url, SetUrl] = useState("")

useEffect(() => {
  Axios.get("https://aws.random.cat/meow").then((url) => {
    SetUrl(url.data["file"])
  })
},[])

  return (
    <div className="App">
    {
      url !== ""  &&(
        <img src ={ url} alt="cat"/> 
      )
    }
      
    </div>
  );
}

export default App;
