import './styles/ProyectoGrid.scss';
import { contextData } from '../context/Context';

function ProyectoGrid({ value, desplegar }) {
  const { setId } = contextData();

  const desplegarModal = () => {
    setId(value);
    desplegar(true);
    document.body.style.overflow = 'hidden';
  };

  return (
    <div className="pr_grid-container" onClick={desplegarModal}>
      <div className="pr_grid-item">{<img src={value.img} alt="" />}</div>
    </div>
  );
}

export default ProyectoGrid;
