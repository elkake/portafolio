import { Link } from 'react-scroll';
import logo from '../img/nav/logo.svg';
import './styles/Nav.scss';
import { BsFillSunFill as Sol, BsFillMoonFill as Luna } from 'react-icons/Bs';
import { contextData } from '../context/Context';
import { toggle } from '../hooks/toggle';
import { motion } from 'framer-motion';

function Nav({ menu, setMenu, light }) {
  const { setLight } = contextData();

  const closeMenu = () => {
    setMenu(false);
  };

  const toggleDark = () => {
    setLight(!light);
    toggle(light);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: '-50%' }}
      whileInView={{ opacity: 1, y: '0%' }}
      transition={{ duration: 1, type: 'spring' }}
      className="nav_container"
    >
      <button
        className={`nav_close-button ${light && 'bgwhite'}`}
        onClick={closeMenu}
      >
        X
      </button>
      <section className={` ${light && 'bgwhite'} nav_left `}>
        <div className="nav_left-logo">
          <img src={logo} alt="" />
        </div>
        <div className="nav_left-toggle-container">
          <Luna className="nav_ico" />
          <div className="nav_left-toggle" onClick={toggleDark}>
            <div className={light ? 'toggle_light' : ''}></div>
          </div>
          <Sol className="nav_ico" />
        </div>
      </section>
      <section className={`nav_right ${menu && 'black'}`}>
        <ul className={`nav_right-container ${light && 'bgwhite'}`}>
          <Link spy={true} to="me" smooth={true} activeClass="activeClass">
            <li className="nav_right-link">SOBRE MI</li>
          </Link>
          <Link spy={true} to={'habilidades'} smooth={true}>
            <li className="nav_right-link">HABILIDADES</li>
          </Link>
          <Link spy={true} to={'proyectos'} smooth={true}>
            <li className="nav_right-link">PROYECTOS</li>
          </Link>
          <Link spy={true} to={'contacto'} smooth={true}>
            <li className="nav_right-link">CONTACTAME</li>
          </Link>
          <Link spy={true} to={'footer'} smooth={true}>
            <li className="nav_right-link">REDES</li>
          </Link>
        </ul>
      </section>
    </motion.div>
  );
}

export default Nav;
