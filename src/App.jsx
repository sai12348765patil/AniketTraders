import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFab from './components/WhatsAppFab';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';

// 🌐 Minimal client-side router (no backend or React Router needed)
function App() {
  const [route, setRoute] = React.useState(window.location.pathname);

  React.useEffect(() => {
    const onPop = () => setRoute(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  // 🔁 Navigate function to simulate routing
  const navigate = (to) => {
    window.history.pushState({}, '', to);
    setRoute(to);
  };

  // 📄 Page selection
  let Page = null;
  if (route === '/' || route === '/home') {
    Page = <Home navigate={navigate} current={route} />;
  } else if (route === '/products') {
    Page = <Products navigate={navigate} current={route} />;
  } else if (route === '/about') {
    Page = <About navigate={navigate} current={route} />;
  } else if (route === '/contact') {
    Page = <Contact navigate={navigate} current={route} />;
  } else {
    Page = <Home navigate={navigate} current={route} />;
  }

  // 🌟 Render layout
  return (
    <div className="app-root">
      <Navbar navigate={navigate} current={route} />
      <main className="main-content">{Page}</main>
      <Footer />
      <WhatsAppFab phoneNumber="+919579781438" />
    </div>
  );
}

export default App;
