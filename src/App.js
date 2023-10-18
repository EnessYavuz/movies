import CartList from "./components/CartList";
import InputMovie from "./components/InputMovie";
import { useEffect, useState } from "react";
// import * as images from "./components/Images";
import MesajBox from "./components/MesajBox";
import axios from "axios";


const commentList =[
  {id:1,
  name:"Enes",
  email:"aaaaa@gmail.com",
  description:"very beautiful"
  },

]

function App() {
  const [search, setSearch] = useState("");
  const [comments, setComments] = useState(commentList)
  const [movies, setMovies] = useState([])

  const onChangeInput = (event) => {
    setSearch(event.target.value);
  };

  const gelenVeriler = async () => {
    
      const getResponse = await axios.get("http://localhost:3004/Movies");
      setMovies(getResponse.data);

  };

  
  useEffect(()=>{

    gelenVeriler();

  },[])

  const filteredMovies = movies.filter((movie) => {
    return movie.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });


const handleMessage =(name,email,description)=>{

const comeData= [
  ...comments,
  {
    id:Math.floor(Math.random() * 99999),
    name:name,
    email:email,
    description:description,
  }
]
setComments(comeData)
}



  return (
    <div className="App">


      <div className="inputContainer">
        <InputMovie handleInput={onChangeInput} />
      </div>
      <div className="Container">
        <div className="space">Boşluk</div>

        <CartList movies={filteredMovies} />

        <div className="space">Boşluk</div>
      </div>

      <div className="MesajContainer">
        <div className="MjTitle" >
        <h1> Yorum Atın Amk</h1>
        </div>
        <div className="MainMj">
        <MesajBox onCreateMessage={handleMessage} comments={comments} /> 
        </div>
        
      </div>
    </div>
  );
}

export default App;
