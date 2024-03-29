import { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

function Display() {

  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div>
      <header>
        <div>
          <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
      </header>
      
      <body>
        {renderPage()}
      </body>
    </div>
  );
}

export default Display;