import { ContextProvider } from './context/Context';
import Home from './layout/Home';
import Habilidades from './layout/Habilidades';
import './App.scss';
import Proyectos from './layout/Proyectos';
import ContactMe from './layout/ContactMe';
import Footer from './layout/Footer';
import Nav from './layout/NavContainer';
import NavDesktop from './layout/NavDesktop';
function App() {
  return (
    <ContextProvider>
      <NavDesktop />
      <Nav />
      <Home />
      <Habilidades />
      <Proyectos />
      <ContactMe />
      <Footer />
    </ContextProvider>
  );
}

export default App;
