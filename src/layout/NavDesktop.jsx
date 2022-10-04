import './NavDesktop.scss';
import { Link } from 'react-scroll';
import { BsFillSunFill as Sol, BsFillMoonFill as Luna } from 'react-icons/Bs';
import logo from '../img/logo.png';
import { contextData } from '../context/Context';
import { toggle } from '../hooks/toggle';
function NavDesktop() {
  const { light, setLight } = contextData();

  const toggleDark = () => {
    setLight(!light);
    toggle(light);
  };

  return (
    <div className="nd_container">
      <section className="nd_left">
        <div className="nd_logo-container">
          <img src={logo} alt="" />
        </div>
        <div className="nd_toggle">
          <Luna className="nd_ico" />
          <Sol className="nd_ico" />
          <div
            className={`nd_box-toggle ${light && 'nd_box-light'}`}
            onClick={toggleDark}
          ></div>
        </div>
      </section>
      <section className="nd_right">
        <ul className="nd_right-links">
          <li>
            <Link
              activeClass="active"
              className="nd_link link1"
              to="me"
              spy={true}
              smooth={true}
              duration={1000}
            >
              SOBRE MI
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              className="nd_link link2"
              to="habilidades"
              spy={true}
              smooth={true}
              duration={1000}
            >
              HABILIDADES
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              className="nd_link link3"
              to="proyectos"
              spy={true}
              smooth={true}
              duration={1000}
            >
              PROYECTOS
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              className="nd_link link4"
              to="contacto"
              spy={true}
              smooth={true}
              duration={1000}
            >
              CONTACTAME
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              className="nd_link link5"
              to="footer"
              spy={true}
              smooth={true}
              duration={1000}
            >
              REDES
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default NavDesktop;
