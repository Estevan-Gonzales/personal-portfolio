

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function Project(props) {
    return (

        <div className="row">
        {/* Here we map over each grocery item and return a new array of `li` elements that contains the grocery name */}
        {/* When using map you must provide a unique key attribute to each item. Ours is `item.id` */}
        {props.projects.map(item => (
          <div className="bg-light border m-2 col-sm-10 col-md-5" key={item.title}>
            <a href={item.repo}><div>{item.title}</div></a>
            <a href={item.url}><img src={item.image}></img></a>
          </div>
        ))}
        </div>

    );
  }
  
  export default Project;
  