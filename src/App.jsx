import { useState } from "react";
import "./App.css";
import Pic from "./component/pic";

function App() {
  const [word, setWord] = useState("");
  const [photo,setPhoto] = useState([])

  function searchImage(e){
    e.preventDefault()
    if(!word){
      alert("Please Input Data")
    }else{
      fetchImageFormAPI()
    }
  }
  
  async function fetchImageFormAPI(){
    const url = `${import.meta.env.VITE_API_URL}?page=1&query=${word}&client_id=${import.meta.env.VITE_API_KEY}&per_page=15`
    const res = await fetch(url);
    const data = await res.json();
    const result = data.results;

    if (result.length==0){
      alert("No image data")
      setWord("")
    }else{
      setPhoto(result)
    }
  }
  return (
    <>
      <h1>Search Picture</h1>
      {/* Input Form */}
      <form onSubmit={searchImage}>
        <input
          type="text"
          placeholder="Input image information"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {/* Result */}
      <div className="search_result">
        {photo.map((data)=>{
          return <Pic {...data} key={data.id}/>
        })}
      </div>
    </>
  );
}
export default App;
