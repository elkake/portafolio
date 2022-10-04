import './styles/PrModal.scss';
import { contextData } from '../context/Context';
import './styles/MeModal.scss';
import elkake1 from '../img/me/elkake1.jpg';
import elkake2 from '../img/me/elkake2.png';
function MeModal({ setMeModal }) {
  const { light } = contextData();

  const cerrar = () => {
    setMeModal(false);
    document.body.style.overflow = 'inherit';
  };
  return (
    <div className="mem_back-container">
      <div className={`mem_container ${light && 'bgwhite textwhite'}`}>
        <div className="mem_primer">
          <h2>¿Quien soy?</h2>
          <p>
            Como se menciona en la parte superior, mi nombre es Gianfranco
            Márquez Ruiz, actualmente desde hace 6 meses resido en Argentina
            pero provengo de Perú, muchas cosas pasaron para estar aquí,
            actualmente tengo 26 años y busco ansiosamente tener un espacio en
            este mundo de la programación y del desarrollo web.
            <div className='mem_img'>
              <img src={elkake2} alt="" />
            </div>
          </p>
        </div>
        <div className="mem_segundo">
          <h2>Mis estudios</h2>
          <ul>
            <li>
              Todos mis conocimientos han sido adquiridos de manera autodidacta,
              entre ellos están: Videos de Youtube, posts en blogs de
              programadores en internet, documentación oficial, streams, etc.
            </li>
            <li>
              Esto se debe a que en mi país la educación no es gratis y si no
              tienes los recursos suficientes no puedes estudiar.
            </li>
            <li>
              Por otro lado, aunque no tengo una educación dada por una
              universidad, eso no significa que no voy a seguir absorbiendo
              conocimiento de donde sea.
            </li>
          </ul>
        </div>
        <div className="mem_tercer">
          <h2>Mis metas</h2>
          <p>
            Principalmente mi meta es ser el mejor programador que puedo ser y
            absorber todo los conocimientos que pueda.Por otro lado, quiero
            formar parte de un equipo que se dedique a lo mismo que yo y ganarme
            la vida de esto que me gusta.
            <div className='mem_img'><img src={elkake1} alt="" /></div>
          </p>
        </div>
        <button className="button mem_button" onClick={cerrar}>
          CERRAR
        </button>
      </div>
    </div>
  );
}

export default MeModal;
