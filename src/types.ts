export type ProjectType = {
  id: number;
  name: string;
  description: string;
  githubLink: string;
  images: {
    desktop: string[];
    mobile: string[];
  };
  bannerImage: string;
  liveDemo:string;
};
