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
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={transition}
            className="pr_vector-gif pr_vector-gif-img"
          >
            <img src={sombras} alt="" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={transition}
            className="pr_vector-gif pr_vector-gif-img  gifi"
          >
            <img
              src="https://media1.giphy.com/media/Knd43A4FLo11MjRZJ5/giphy.gif?cid=790b76118ff7c75c20cb681cb3ec346acdb39d8294fa77b7&rid=giphy.gif&ct=s"
              alt="rick and morty gif"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0.5, x: '-15%' }}
            whileInView={{ opacity: 1, x: '0%' }}
            transition={{ duration: 2, type: 'spring' }}
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
