import project_betterverse from "../../assets/img/project_betterverse.png";
import project_truealtitude from "../../assets/img/project_investmentportal.png";
import project_simplicity from "../../assets/img/project_simplicity.png";

export default [
  {
    img: project_betterverse,
    projectName: "Betterverse",
    projectSummary:
      "A virtual world to save our own. At Betterverse the team and I have created a web3 donation app where users can donate to charitable causes they care about with stable coins and recieve a digital collectables (NFTs) that is represenation of their donation, with all the impact data connected. Release date TBD. ",
    tech: [
      { name: "VueJS" },
      { name: "Alchemy" },
      { name: "Firebase" },
      { name: "web3.js" },
      { name: "Solidity" },
    ],
    mainURL: "https://www.betterverse.app/",
    githubURL: "",
  },
  {
    img: project_truealtitude,
    projectName: "Investment Portal",
    projectSummary:
      "The True Altitude Investment Portal was a web app created to faciliate meaninful and productive connections between mentors, investors and companies/start-ups within a closed network. The main purpose was to provide better reporting and transparency of the journey of start-ups through a government funded accelerator.",
    tech: [
      { name: "VueJS" },
      { name: "SendGrid" },
      { name: "Firebase" },
      { name: "Bootstrap" },
    ],
    mainURL: "https://www.truealtitude.com/",
    githubURL: "",
  },
  {
    img: project_simplicity,
    projectName: "Simplicity Research",
    projectSummary:
      "Simplicity Research web-app developed to provide Simplicity Consultancy with a platform to present their detailed reports of web3 projects/startups. Reports and requests are displayed to the users of the closed platform (VCs & investors).  ",
    tech: [
      { name: "React" },
      { name: "NextJS" },
      { name: "Firebase" },
      { name: "SendGrid" },
      { name: "TailwindCSS" },
    ],
    mainURL: "https://www.simplicityconsultancy.net/",
    githubURL: "https://github.com/simplicity-group/simplicity-research-app",
  },
];
