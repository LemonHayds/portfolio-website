import project_betterverse from "../../assets/img/project_betterverse.png";
import project_truealtitude from "../../assets/img/project_investmentportal.png";
import project_simplicity from "../../assets/img/project_simplicity.png";
import project_novelgenie from "../../assets/img/project_novelgenie.png";
import project_said from "../../assets/img/project_said.png";

export default [
  {
    img: project_betterverse,
    projectName: "Betterverse",
    projectSummary:
      "At Betterverse the team and I have created a web3 donation app where users can donate to charitable causes they care about with stable coins and recieve a digital collectables (NFTs) that is represenation of their donation, with all the meaningful impact data connected. Currently in Closed Beta. ",
    tech: [
      { name: "Vue.js" },
      { name: "Alchemy" },
      { name: "Firebase" },
      { name: "web3.js" },
      { name: "Solidity" },
    ],
    mainURL: "https://www.betterverse.app/",
    githubURL: "https://github.com/TheBetterverse/betterverse_app/tree/dev",
    videoURL: "https://youtu.be/QgTKOCpItFg",
  },
  {
    img: project_truealtitude,
    projectName: "Investment Portal",
    projectSummary:
      "The True Altitude Investment Portal was a web app created to faciliate meaninful and productive connections between mentors, investors and companies/start-ups within a closed network. The main purpose was to provide better reporting and transparency of the journey of start-ups through a government funded accelerator.",
    tech: [
      { name: "Vue.js" },
      { name: "SendGrid" },
      { name: "Firebase" },
      { name: "Bootstrap" },
    ],
    mainURL: "https://www.truealtitude.com/",
    githubURL: "",
    videoURL: "https://youtu.be/JkE1AdwZ5gA",
  },
  {
    img: project_simplicity,
    projectName: "Simplicity Research",
    projectSummary:
      "Simplicity Research web-app developed to provide Simplicity Group with a closed platform to present their detailed reports of web3 projects/startups. Reports and requests are displayed to the users of the closed platform (VCs & investors).  ",
    tech: [
      { name: "React" },
      { name: "Firebase" },
      { name: "SendGrid" },
      { name: "TailwindCSS" },
    ],
    mainURL: "https://www.simplicitygroup.xyz/",
    githubURL: "https://github.com/simplicity-group/simplicity-research-app",
    videoURL: "https://youtu.be/J0zjQEtSTNc",
  },
  {
    img: project_novelgenie,
    projectName: "NovelGenie",
    projectSummary:
      "NovelGenie allows anyone to create and own authentic digital novels that are generated using state-of-the-art AI technology (OpenAI - Davinci and DALE-E APIs).  ",
    tech: [
      { name: "React" },
      { name: "ethers.js" },
      { name: "Solidity" },
      { name: "Hardhat" },
      { name: "TailwindCSS" },
    ],
    mainURL: "https://www.novelgenie.xyz/",
    githubURL: "https://github.com/LemonHayds/novelgenie",
    videoURL: "https://youtu.be/8UhsM4DlHxY",
  },
  {
    img: project_said,
    projectName: "sAId.fyi",
    projectSummary:
      "sAId.fyi (fullstack application) is a unique AI focused social platform with the purpose of allowing anyone to speak to OpenAI's 3.5 model, generate responses, make comments and share them with the world.",
    tech: [
      { name: "Next.js" },
      { name: "Prisma" },
      { name: "Postgres" },
      { name: "Tanstack Query" },
      { name: "TailwindCSS" },
    ],
    mainURL: "https://said.fyi/",
    githubURL: "https://github.com/LemonHayds/sAId.fyi",
    videoURL: "https://youtu.be/-662sAIh578",
  },
];
