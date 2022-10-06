import SkillBox from '../components/SkillBox';
import Skills from '../components/Skills';
import { contextData } from '../context/Context';
import './Habilidades.scss';
import { motion } from 'framer-motion';

function Habilidades() {
  const { data } = contextData();

  const transition = { duration: 3, type: 'spring' };

  return (
    <div
      name="habilidades"
      id="habilidades"
      className="skill_container"
    >
      <h2 className="sk_left-title">HABILIDADES</h2>
      <div className="sk_containerlr">
        <motion.div className="sk_left"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={transition}>
          <Skills skills={data} />
          <p className="sk_left-subtitle">
            *grafica en referencia a mi manejo de estas herramientas*
          </p>
        </motion.div>
        <div className="sk_right">
          {data.map(e => (
            <SkillBox key={e.id} value={e} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Habilidades;
