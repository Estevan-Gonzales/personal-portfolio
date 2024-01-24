
function Header() {
    return (
        <div className='row'>
            <div className = 'col-12'>
                <nav className="nav nav-pills justify-content-end p-2 bg-light">
                    <li className="nav-item">
                        <a className="nav-link" href="index.html">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="projects.html">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="contact.html">Contact Me</a>
                    </li>
                </nav>   
            </div> 
        </div>
    )
}

export default Header;

  