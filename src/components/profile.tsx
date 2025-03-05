import { BASE_URL } from "../constants";

const Profile = () => {
  return (
    <div className="flex flex-col mx-auto text-white w-full sm:max-w-[600px] font-[kanit]">
      <div className="flex flex-row justify-between py-5">
        <h1 className="font-extrabold sm:text-6xl text-3xl my-auto">
          Roshan Kosare
        </h1>
        <div className="flex flex-row sm:gap-x-5 gap-x-2">
          <a
            className="flex"
            href="https://www.linkedin.com/in/roshan-kosare-11a3a2259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          >
            <img
              src={`${BASE_URL}linkedin.svg`}
              className="sm:w-12 sm:h-12 h-8 w-8 my-auto"
            />
          </a>
          <a
            className="flex"
            href="https://www.linkedin.com/in/roshan-kosare-11a3a2259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          >
            <img
              src={`${BASE_URL}github.svg`}
              className="sm:w-12 sm:h-12 h-8 w-8 my-auto"
            />
          </a>
        </div>
      </div>
      <p className="text-lg sm:text-2xl font-light prose">
        I am a software engineer with a degree in computer science and
        engineering. I specialize in full-stack software development, focusing
        on web development and machine learning. I'm passionate about
        collaborating with people who have innovative business ideas to bring
        their visions to life through technology.
      </p>
    </div>
  );
};
export default Profile;
