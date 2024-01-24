import Project from "../Project";


const projects = [
  {
    title: 'Watchtogethr',
    image: '/project-watchtogethr.png',
    url: 'https://watchtogethr-aeeae66b60e6.herokuapp.com/Login',
    repo: 'https://github.com/MikeTritsch/watchtogethr'
  },
  {
    title: 'Dishr & Drinkr',
    image: '/project-dishranddrinkr.png',
    url: 'https://estevan-gonzales.github.io/project-1-dishr-and-drinkr/',
    repo: 'https://github.com/Estevan-Gonzales/project-1-dishr-and-drinkr'
  },
  {
    title: 'Weather Dashboard',
    image: "/project-weather.png",
    url: 'https://estevan-gonzales.github.io/module-6-challenge-weather-dashboard/',
    repo: 'https://github.com/Estevan-Gonzales/module-6-challenge-weather-dashboard'
  }
];

export default function Projects() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className="container">
        <Project projects = {projects} />
      </div>
    </div>
  );
}