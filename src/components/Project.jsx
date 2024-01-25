

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function Project(props) {
    return (
      <div className="container">
        <div className="row mt-5">
        {/* Here we map over each grocery item and return a new array of `li` elements that contains the grocery name */}
        {/* When using map you must provide a unique key attribute to each item. Ours is `item.id` */}
        {props.projects.map(item => (
          <div className=" border col-sm-12 col-md-6" key={item.title}>
            <div className="single-project">
              <a href={item.repo}><div>{item.title}</div></a>
              <a href={item.url}><img src={item.image}></img></a>
              </div>
          </div>
        ))}
        </div>
      </div>

    );
  }
  
  export default Project;
  