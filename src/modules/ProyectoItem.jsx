import vector4 from '../img/gif/vectorgif.svg';
import gif from '../img/gif/rymportafolio.gif';
import sombras from '../img/gif/sombras.png';
import ballgif from '../img/gif/ballsgif.svg';
import './styles/ProyectoItem.scss';
function ProyectoItem() {
  return (
    <>
      <div className="pr_vector-container">
        <div className="pr_vector-vector">
          <div className="pr_vector">
            <img src={vector4} alt="elkake vector" />
          </div>
          <div className="pr_vector-gif">
            <img src={sombras} alt="" />
          </div>
          <div className="pr_vector-gif">
            <img src={gif} alt="rick and morty gif" />
          </div>
          <div className="pr_vector-balls">
            <img src={ballgif} alt="elkake balls" />
          </div>
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
