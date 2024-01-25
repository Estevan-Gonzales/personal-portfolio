// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className='row'>
        <div className = 'col-12'>
            <nav className="nav nav-pills justify-content-end p-2 bg-dark">
                <li className="nav-item">
                  <a href="#About" onClick={() => handlePageChange('About')}className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
                    About Me
                  </a>
                </li>

                <li className="nav-item">
                  <a href="#Projects" onClick={() => handlePageChange('Projects')}className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}>
                    Projects
                  </a>
                </li>

                <li className="nav-item">
                  <a href="#Contact" onClick={() => handlePageChange('Contact')}className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                    Contact
                  </a>
                </li>

            </nav>   
        </div> 
    </div>
)
}

export default NavTabs;