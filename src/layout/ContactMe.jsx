import './ContactMe.scss';
import avion from '../img/contact/mail.svg';
import mont from '../img/contact/motañas.svg';
import { contextData } from '../context/Context';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

function ContactMe() {
  const { light } = contextData();

  const transition = { duration: 2, type: 'spring' };
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_9ti7lzx',
        'template_uds144o',
        form.current,
        'KnqET3qU4de95GyIA'
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
  };

  return (
    <div name="contacto" id="cm_all-container" className="cm_all-container">
      <h2 className="cm_title">CONTACTAME</h2>
      <div id="form" className="cm_container">
        <div className="cm_right">
          <div className="cm_right-img cm_right-img1">
            <img src={mont} alt="montaña_svg" />
            <motion.div
              initial={{ opacity: 0, left: '-20%' }}
              whileInView={{ opacity: 1, left: '-0%' }}
              transition={transition}
              className="cm_right-img cm_right-img2"
            >
              <img className="avion" src={avion} alt="avion_papel_svg" />
            </motion.div>
          </div>
        </div>
        <form ref={form} className="cm_left" onSubmit={sendEmail}>
          <div className="cm_input-cotainer">
            <label htmlFor="">Nombre:</label>
            <input
              id="nombre"
              name="user_name"
              className={`cm_input ${light && 'bgwhite-input'}`}
              type="text"
              placeholder="Ingresa tu nombre"
            />
          </div>
          <div className="cm_input-cotainer">
            <label htmlFor="">Correo:</label>
            <input
              id="correo"
              name="user_email"
              className={`cm_input ${light && 'bgwhite-input'}`}
              type="email"
              placeholder="ejemplo@email.xyz"
            />
          </div>

          <textarea
            id="mensaje"
            name="message"
            placeholder="Escribeme algo"
            className={`cm_input textarea ${light && 'bgwhite-input'}`}
            rows="10"
          ></textarea>
          <input type="submit" value="ENVIAR" className="button cm_button" />
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
