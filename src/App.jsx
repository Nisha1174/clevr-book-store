import { Routes, Route } from "react-router-dom";

import HomePage1Layout from "./components/HomePage1/HomePage1Layout";
//import HomePage2Layout from "./components/HomePage2/HomePage2Layout";
import HomePage3Layout from "./components/HomePage3/HomePage3Layout";
import BookGridLayout from "./components/BookGrid/BookGridLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage1Layout />} />
     
      <Route path="/home" element={<HomePage3Layout />} />
      <Route path="/books" element={<BookGridLayout />} />
    </Routes>
  );
}

export default App;
