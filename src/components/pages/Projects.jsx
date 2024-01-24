import Project from "../Project";


const projects = [
  {
    title: 'Weather Dashboard',
    image: "../public/project-weather.png",
    url: 'https://estevan-gonzales.github.io/module-6-challenge-weather-dashboard/',
    repo: 'https://github.com/Estevan-Gonzales/module-6-challenge-weather-dashboard'
  }
];

export default function Projects() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div>
        <Project projects = {projects} />
    </div>
    </div>
  );
}