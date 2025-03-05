export type ProjectType = {
  name: string;
  description: string;
  githubLink: string;
  images: {
    desktop: string[];
    mobile: string[];
  };
  bannerImage: string;
};
