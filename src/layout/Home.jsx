import './Home.scss';
import MeModal from '../modules/MeModal';
import flotar from '../img/me/balls.svg';
import elkake from '../img/me/me.png';
import { useState } from 'react';
import vector1 from '../img/me/vectorme.svg';
import { motion } from 'framer-motion';
function Home() {
  const [meModal, setMeModal] = useState(false);

  const transition = { duration: 2, type: 'spring' };

  const abrir = () => {
    setMeModal(true);
    document.body.style.overflow = 'hidden';
  };
  return (
    <div name="me" id="me" className="body_container">
      <section className="me_container">
        <p className="me_container_back">FRONTEND DEVELOPER</p>
        <div className="me_left">
          <div className="me_left-name">
            <p>GIANFRANCO</p>
            <p>MARQUEZ</p>
            <p>RUIZ</p>
          </div>
          <div className="me_left-resume">
            <p>
              "Un estudiante autodidacta que quiere encontrar su lugar en este
              mundo de la programación y poder seguir aprendiendo sin parar
              mientras hago lo que me gusta."
            </p>
          </div>
          <button className="button me_button" onClick={abrir}>
            MAS SOBRE MI
          </button>
          {meModal && <MeModal setMeModal={setMeModal} />}
        </div>
        <div className="me_right">
          <div className="vector1">
            <img src={vector1} alt="vector1" />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={transition}
              className="me_right-persona"
            >
              <img src={elkake} alt="elkake" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0.3, x: '-10%' }}
              whileInView={{ opacity: 1, x: '0%' }}
              transition={transition}
              className="body_flotar body_flotar1"
            >
              <img src={flotar} alt="flotar bolas" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
