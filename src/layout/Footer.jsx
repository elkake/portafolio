import { GiHouse as Casa } from 'react-icons/gi';
import { SiMinutemailer as Email } from 'react-icons/si';
import {
  AiFillLinkedin as Linke,
  AiFillInstagram as Insta,
} from 'react-icons/ai';
import { FaGithubAlt as Gh } from 'react-icons/fa';
import './Footer.scss';
function Footer() {
  return (
    <div name="footer" className="footer" id='footer'>
      <div className="ft_vector" style={{ height: '70px', overflow: 'hidden' }}>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: '100%', width: '100%' }}
        >
          <path
            d="M-27.36,56.75 C147.01,224.52 345.08,-21.19 535.83,138.66 L500.00,150.00 L0.00,150.00 Z"
            style={{ stroke: 'none', fill: '#32e0c4' }}
          ></path>
        </svg>
      </div>
      <div className="ft_container">
        <div className="ft_data">
          <p>
            <Email /> gianco.marquez@gmail.com{' '}
          </p>
          <p>
            <Casa /> Argentina, La Plata{' '}
          </p>
        </div>
        <div className="ft_button">
          <a
            className="ft_link"
            href="https://www.linkedin.com/in/gianfranco-marquez/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linke className="ft_ico" />
          </a>
          <a
            className="ft_link"
            href="https://github.com/elkake"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Gh className="ft_ico" />
          </a>
          <a
            className="ft_link"
            href="https://www.instagram.com/g1akeruz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Insta className="ft_ico" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
