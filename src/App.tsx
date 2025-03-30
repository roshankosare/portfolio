import "./App.css";
import Profile from "./components/profile";
import { Projects } from "./components/projects";
import { BASE_URL } from "./constants";

function App() {
  return (
    <div className="w-full min-h-screen h-auto overflow-scroll bg-black text-white flex flex-col ">
      <div className="flex flex-col sm:max-w-[1200px] mx-auto py-10 px-4 gap-y-10">
        <div className="flex sm:flex-row flex-col-reverse justify-center w-full ">
          <Profile />
          <img
            src={`${BASE_URL}profile.jpeg`}
            className="sm:w-[300px] sm:h-[300px] w-[250px] h-[250px] rounded-full mx-auto"
          />
        </div>
        <Projects />
      </div>
    </div>
  );
}

export default App;
