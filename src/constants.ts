import { ProjectType } from "./types";

export const BASE_URL = import.meta.env.VITE_ENV ? "/portfolio/" : "./";

export const ProjectsJson: ProjectType[] = [
  {
    id: 1,
    name: "ChessX",
    description: `ChessX – Play Chess Online
ChessX is a simple and interactive online chess platform where you can enjoy playing chess anytime!

Features:
♟ Play Against AI – Challenge Stockfish at different difficulty levels and test your skills.

🌍 Multiplayer Mode – Play real-time chess matches with other players online.

🚀 Built with Modern Tech – React frontend and NestJS backend for a smooth and responsive`,
    githubLink: "https://github.com/roshankosare/chessx",
    images: {
      mobile: [
        "chessx/mobile/mobile1.png",
        "chessx/mobile/mobile2.png",
        "chessx/mobile/mobile3.png",
        "chessx/mobile/mobile4.png",
        "chessx/mobile/mobile5.png",
        "chessx/mobile/mobile6.png",
      ],
      desktop: [
        "chessx/desktop/desktop1.png",
        "chessx/desktop/desktop2.png",
        "chessx/desktop/desktop3.png",
        "chessx/desktop/desktop4.png",
        "chessx/desktop/desktop5.png",
        "chessx/desktop/desktop6.png",
        "chessx/desktop/desktop6.png",
        "chessx/desktop/desktop7.png",
      ],
    },
    bannerImage: "chessx/chessPreview.png",
    liveDemo: "https://chessx-frontend.netlify.app/",
  },

  {
    id: 2,
    name: "E-commerce",
    description: `E-Commerce App
A simple and clean e-commerce app built with React, Tailwind CSS, and ShadCN UI, using the FakeStore API for product data.`,
    githubLink: "https://github.com/roshankosare/e-com",
    images: {
      mobile: [
        "e-com/mobile/mobile1.png",
        "e-com/mobile/mobile2.png",
        "e-com/mobile/mobile3.png",
        "e-com/mobile/mobile4.png",
        "e-com/mobile/mobile5.png",
      ],
      desktop: [
        "e-com/desktop/desktop1.png",
        "e-com/desktop/desktop2.png",
        "e-com/desktop/desktop3.png",
        "e-com/desktop/desktop4.png",
      ],
    },
    bannerImage: "e-com/e-comPreview.png",
    liveDemo: "roshankosare.github.io/e-com",
  },
];
