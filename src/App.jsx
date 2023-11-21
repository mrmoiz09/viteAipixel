
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeStock from "./Pages/HomeStock";
import AboutStock from "./Pages/AboutStock";
import WorkStock from "./Pages/WorkStock";

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<HomeStock />} />
        <Route path="aboutus" element={<AboutStock />} />
        <Route  path="ourwork" element={<WorkStock />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
