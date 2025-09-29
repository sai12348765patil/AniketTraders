import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFab from './components/WhatsAppFab'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'


// Minimal client-side router (no backend needed)
function App() {
  const [route, setRoute] = React.useState(window.location.pathname)


  React.useEffect(() => {
    const onPop = () => setRoute(window.location.pathname)
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])


  const navigate = (to) => {
    window.history.pushState({}, '', to)
    setRoute(to)
  }


  let Page = null
  if (route === '/' || route === '/home') Page = <Home />
  else if (route === '/products') Page = <Products />
  else if (route === '/about') Page = <About />
  else if (route === '/contact') Page = <Contact />
  else Page = <Home />


  return (
    <div className="app-root">
      <Navbar navigate={navigate} current={route} />
      <main className="main-content">{Page}</main>
      <Footer />
      <WhatsAppFab phoneNumber="+911234567890" />
    </div>
  )
}


export default App