import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";
import NotFound from "./components/NotFound";


function App() {
   return (
      <div className="App">
         <Header></Header>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="movies" element={<Home />} />
            <Route path="movies/:movieId" element={<Detail />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
      </div>
   );
}

export default App;
