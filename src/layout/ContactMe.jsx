import './ContactMe.scss';
import avion from '../img/avionpapel.png';
import { contextData } from '../context/Context';
function ContactMe() {
  const { light } = contextData();

  const enviarForm = e => {
    e.preventDefault();
    const nombre = document.getElementById('nombre');
    const correo = document.getElementById('correo');
    const mensaje = document.getElementById('mensaje');
    const url = `mailto:gianco.marquez@gmail.com?subject=FormularioPortafolio${nombre.value}&body=Nombre%3A${nombre.value}%0ACorreo%3A${correo.value}%0AMensaje%3A${mensaje.value}`;
    window.location.href = url;
    document.getElementById('nombre').value = '';
    document.getElementById('correo').value = '';
    document.getElementById('mensaje').value = '';
  };

  return (
    <div name="contacto" id="cm_all-container" className="cm_all-container">
      <h2 className="cm_title">CONTACTAME</h2>
      <div id="form" className="cm_container">
        <div className="cm_right">
          <img src={avion} alt="" />
        </div>
        <form className="cm_left" onSubmit={enviarForm}>
          <div className="cm_input-cotainer">
            <label htmlFor="">Nombre:</label>
            <input
              id="nombre"
              className={`cm_input ${light && 'bgwhite-input'}`}
              type="text"
              placeholder="Ingresa tu nombre"
            />
          </div>
          <div className="cm_input-cotainer">
            <label htmlFor="">Correo:</label>
            <input
              id="correo"
              className={`cm_input ${light && 'bgwhite-input'}`}
              type="email"
              placeholder="ejemplo@email.xyz"
            />
          </div>

          <textarea
            id="mensaje"
            placeholder="Escribeme algo"
            className={`cm_input textarea ${light && 'bgwhite-input'}`}
            rows="10"
          ></textarea>
          <button className="button cm_button">ENVIAR</button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
