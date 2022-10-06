import './Proyectos.scss';
// import { useState } from 'react';
import ProyectoItem from '../modules/ProyectoItem';
import ProyectoGrid from '../components/ProyectoGrid';
import { contextData } from '../context/Context';
import PrModal from '../modules/PrModal';
import llamarPrModal from '../hooks/llamarPrModal';

function Proyectos() {
  const { prData } = contextData();
  const { desplegarModal, setDesplegarModal } = llamarPrModal();

  

  return (
    <div name="proyectos" className="pr_container" id="proyectos">
      <h2 className="sk_left-title pr_title">PROYECTOS</h2>
      <div className="pr_flexcontainer">
        <section className="pr_container-left">
          <ProyectoItem />
        </section>
        <section className="pr_container-right">
          <div className="pr_container-right-grid">
            {prData.map(e => (
              <ProyectoGrid
                key={e.id}
                value={e}
                desplegar={setDesplegarModal}
              />
            ))}
          </div>
        </section>
      </div>

      {desplegarModal && <PrModal des={setDesplegarModal} />}
    </div>
  );
}

export default Proyectos;
