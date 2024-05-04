import { Routes,Route } from "react-router-dom";
import Home from "../homePage/Home";

const PageRouter = () => {
  return (
   
    <Routes>
     <Route path="/" element={<Home />} />
    </Routes>
   
  );
}

export default PageRouter