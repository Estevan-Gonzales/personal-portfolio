

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function Project(props) {
    return (
      <ul className="single-project-box">
        {/* Here we map over each grocery item and return a new array of `li` elements that contains the grocery name */}
        {/* When using map you must provide a unique key attribute to each item. Ours is `item.id` */}
        {props.projects.map(item => (
          <div className="single-project" key={item.title}>
            <a href={item.repo}><div>{item.title}</div></a>
            <a href={item.url}><img className="project-image" src={item.image}></img></a>
          </div>
        ))}
      </ul>
    );
  }
  
  export default Project;
  