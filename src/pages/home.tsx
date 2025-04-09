import { BASE_URL } from "../constants";
import { Button } from "@/components/ui/button";
import { Projects } from "@/components/projects";

const Home = () => {
  return (
    <div className="w-full flex flex-col gap-y-12 min-w-full  h-auto sm:h-full  mx-auto font-[kanit] ">
      <div className="flex flex-col-reverse sm:flex-row max-w-[1000px] gap-x-12 h-auto justify-end sm:justify-between bg-transparent sm:bg-neutral-900 rounded-full  sm:px-20 sm:py-16 gap-y-8 min-h-[400px] mx-auto">
        <div className="flex flex-col justify-center gap-y-4">
          <div className="rounded-md px-4 py-2 max-w-[350px] mx-auto  bg-emerald-500 text-gray-900 font-semibold">
            Full Stack Developer
          </div>
          <div className="flex flex-col gap-y-2 justify-center items-center">
            <p className="text-sm  sm:text-lg text-gray-300 prose">
              I am a software engineer with,
            </p>
            <p className="text-sm  sm:text-lg text-gray-300 prose">
              a degree in computer science and engineering.
            </p>

            <p className="text-sm  sm:text-lg text-gray-300 prose">
              I specialize in full-stack software development,
            </p>
          </div>
        </div>
        <img
          src={`${BASE_URL}profile.jpeg`}
          className="sm:w-[300px] sm:h-[300px] w-[250px] h-[250px] rounded-full sm:mx-0 mx-auto shadow-2xl shadow-black"
        />
      </div>
      <div className="flex justify-center gap-x-8">
        <Button className=" min-w-[150px] px-4 py-2 bg-emerald-500 text-gray-900 hover:bg-emerald-500 cursor-pointer">
          Projects
        </Button>
      </div>

      <Projects />
    </div>
  );
};

export default Home;
