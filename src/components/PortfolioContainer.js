import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Contact from './pages/contact';
import Resume from './pages/Resume';


function Portfolio() {
  const [currentPage, handlePageChange] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About />;
      case 'Works':
        return <Works />;
      case 'Contact':
        return <Contact />;
        case 'Resume':
          return <Resume />
      default:
        return <Home />;
    }
  };

  return (
    <div>
      {}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {}
      <div>{renderPage(currentPage)}</div>
    </div>
  );
}

export default Portfolio;
