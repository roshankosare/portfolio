import { ReactNode, useEffect, useState } from "react";
import LinkedInIcon from "./icons/linkedin";
import GitHubIcon from "./icons/github";

type SocialLinkInterface = {
  name: string;
  socialAppLink: string;
  icon: ReactNode;
};

const SocialLinks: SocialLinkInterface[] = [
  {
    name: "Linkedin",
    socialAppLink:
      "https://www.linkedin.com/in/roshan-kosare-11a3a2259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    icon: (
      <LinkedInIcon className="h-5 w-5 " fill="currentColor"></LinkedInIcon>
    ),
  },
  {
    name: "Github",
    socialAppLink: "https://github.com/roshankosare",
    icon: (
      <GitHubIcon
        className="h-4 w-4 text-white "
        fill="currentColor"
      ></GitHubIcon>
    ),
  },
];

const Navbar = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const handleMobileView = () => {
    if (window.screen.width < 400) {
      setIsMobile(true);
      return;
    }
    setIsMobile(false);
  };
  useEffect(() => {
    if (window.screen.width < 400) {
      setIsMobile(true);
    }
    window.addEventListener("resize", handleMobileView);

    return () => {
      window.removeEventListener("resize", handleMobileView);
    };
  }, []);
  return (
    <div className="flex justify-between px-2 sm:px-5 bg-transparent text-white  py-2 sm:py-8 w-full sm:max-w-[1400px] mx-auto font-[kanit]">
      <div className="py-auto text-2xl sm:text-4xl font-bold text-gray-200  ">
        Roshan Kosare
      </div>

      {!isMobile && (
        <div className="flex flex-row gap-x-5 text-white">
          {SocialLinks.map((socialLink, index) => (
            <a
              href={socialLink.socialAppLink}
              key={index}
              className="flex flex-row gap-x-2 justify-center items-center text-gray-200"
            >
              {socialLink.icon}
              <p className="">{socialLink.name}</p>
            </a>
          ))}
        </div>
      )}

      {isMobile && (
        <div className="flex flex-row gap-x-6">
          {SocialLinks.map((socialLink, i) => (
            <a
              href={socialLink.socialAppLink}
              key={i}
              className="flex flex-row gap-x-2 justify-center items-center text-gray-200"
            >
              {socialLink.icon}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
