import { ProjectType } from "./types";

export const BASE_URL = import.meta.env.VITE_ENV ? "/portfolio/" : "./";

export const ProjectsJson: ProjectType[] = [
  {
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
  },
];
