import "./App.css";
import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ProjectPage from "./pages/project";

function App() {
  return (
    <div className="w-full min-h-screen h-auto overflow-scroll bg-neutral-800 text-white flex flex-col ">
      <Navbar />
      <div className="flex  flex-col w-full sm:max-w-[1200px] mx-auto py-5  px-4 sm:px-4 gap-y-10">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/project/:id" element={<ProjectPage />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
