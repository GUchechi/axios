import './App.css';
import Axios from 'axios';
import { useEffect, useState } from 'react';


function App() {
  const [url, SetUrl] = useState("");

  useEffect(() => {
    Axios.get("http://aws.random.cat/meow").then((value) => {
      SetUrl(value.data["file"]);
    })
  }, [])
   
  return (
    <div className="App">
      {
        url !== "" && (
          <img src={url} alt="cat" />
        )
      }
    </div>
  );
}

export default App;
