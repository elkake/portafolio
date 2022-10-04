import './styles/PrModal.scss';
import { contextData } from '../context/Context';
import { BsGithub } from 'react-icons/Bs';
import { FiExternalLink } from 'react-icons/fi';

function PrModal({ des }) {
  const { id, light } = contextData();

  const cerrar = () => {
    des(false);
    document.body.style.overflow = 'inherit';
  };
  return (
    <div className="prm_back-container">
      <div className={`prm_container ${light && 'bgwhite textwhite'}`}>
        <div className="prm_title">
          <h2>{id.title}</h2>
          <div className="prm_img">
            <img src={id.img} alt="" />
          </div>
        </div>
        <div className="prm_description">
          <p>{id.desc}</p>
          <div className="prm_links">
            <a href={id.gh} target="_blank" rel="noreferrer">
              <BsGithub className={`prm_ico ${light && 'hov'}`} />
            </a>
            <a href={id.page} target="_blank" rel="noreferrer">
              <FiExternalLink className="prm_ico" />
            </a>
          </div>
          <button className="button prm_button" onClick={cerrar}>
            CERRAR
          </button>
        </div>
      </div>
    </div>
  );
}

export default PrModal;
