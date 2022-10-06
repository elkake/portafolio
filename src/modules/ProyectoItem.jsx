import vector4 from '../img/gif/vectorgif.svg';
import gif from '../img/gif/rymportafolio.gif';
import sombras from '../img/gif/sombras.png';
import ballgif from '../img/gif/ballsgif.svg';
import './styles/ProyectoItem.scss';
import { motion } from 'framer-motion';

function ProyectoItem() {
  const transition = { duration: 2, type: 'spring' };

  return (
    <>
      <div className="pr_vector-container">
        <div className="pr_vector">
          <img className="vector4" src={vector4} alt="elkake vector" />
          <motion.div
            initial={{ opacity: 0, x: '-10%' }}
            whileInView={{ opacity: 1, x: '0%' }}
            transition={transition}
            className="pr_vector-gif pr_vector-gif-img"
          >
            <img src={sombras} alt="" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: '-20%' }}
            whileInView={{ opacity: 1, x: '0%' }}
            transition={transition}
            className="pr_vector-gif pr_vector-gif-img"
          >
            <img src={gif} alt="rick and morty gif" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, right: '12%' }}
            whileInView={{ opacity: 1, right: '0%' }}
            transition={{ duration: 4, type: 'spring' }}
            className="pr_vector-gif"
          >
            <img src={ballgif} alt="elkake balls" />
          </motion.div>
        </div>
        <a
          className="button pr_button"
          href="https://elkake.github.io/routerdom/#/home"
          target="_blank"
          rel="noreferrer"
        >
          VER PROYECTO
        </a>
      </div>
    </>
  );
}

export default ProyectoItem;
