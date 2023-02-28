import './ContactMe.scss';
import avion from '../img/contact/mail.svg';
import mont from '../img/contact/motañas.svg';
import { contextData } from '../context/Context';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

function ContactMe() {
  const { light } = contextData();
  const [visible, setVisible] = useState(false)
  const transition = { duration: 2, type: 'spring' };
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    const nombre = document.getElementById('nombre')
    const correo = document.getElementById('correo')
    const mensaje = document.getElementById('mensaje')

    if (!nombre.value || !correo.value || !mensaje.value) {
      setVisible(true)
      return
    }

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

    nombre.value = ''
    correo.value = ''
    mensaje.value = ''
    alert('Mensaje enviado Correctamente')
    setVisible(false)
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
          <span className={`spanForm ${visible && 'visible'} `}>*Porfavor ingresar un nombre</span>
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
          <span className={`spanForm ${visible && 'visible'} `}>*Porfavor ingresar un correo</span>
          </div>
          <div className="cm_input-cotainer"><textarea
            id="mensaje"
            name="message"
            placeholder="Escribeme algo"
            className={`cm_input textarea ${light && 'bgwhite-input'}`}
            rows="10"
          ></textarea>
          <span className={`spanForm ${visible && 'visible'} `}>*Porfavor ingresar un mensaje</span></div>

          <input type="submit" value="ENVIAR" className="button cm_button" />
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
