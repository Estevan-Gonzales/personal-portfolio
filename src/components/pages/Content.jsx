
import Header from '../Header'
import About from './About'
import Contact from './Contact'

import { useState } from 'react';


function Content() {
    
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
          }
        if (currentPage === 'Contact') {
            return <Contact />;
          }
    }

    return(
        <div>
            <main className="mx-3">{renderPage()}</main>
        </div>
    )

}

export default Content;