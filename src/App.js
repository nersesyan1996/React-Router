import './App.css';
import { Layout } from "./Layout";

import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import { AbouteUs } from "./components/AbouteUs";
import { Empty } from "./components/Empty";
import { Post } from "./components/Post";

function App() {
  return (
    <div className="App">

      <Routes>
        
                <Route path="/" element={<Layout />} >

                <Route path="/" element={<Home />}/>
                <Route path="/Contact" element={<Contact />} />
                <Route path="/AbouteUs" element={<AbouteUs />} />
                <Route path="/Post" element={<Post />} />
                <Route path="*" element={<Empty />} />

                </Route > 
                
      </Routes>

    </div>
  );
}

export default App;
