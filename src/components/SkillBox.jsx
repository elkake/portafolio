import './styles/SkillBox.scss';
import { contextData } from '../context/Context';
function SkillBox({ value }) {
  const { light } = contextData();

  const terminal = document.querySelector('.sk_gris');

  if (light) {
    terminal.style.border = '2px solid #000';
    terminal.style.boxShadow = '0 5px 8px 1px #000';
  }

  return (
    <div
      className={`sk_box-container sk_${value.color} ${light && 'fontwhite'}`}
    >
      <div className="sk_box-img">
        <img src={value.img} alt={value.nombre} />
      </div>
      <h2 className="sk_box-title">{value.nombre}</h2>
      <ul className="sk_box-description">
        {value.descripcion.map(e => (
          <li key={e}>{e}</li>
        ))}
      </ul>
    </div>
  );
}

export default SkillBox;
