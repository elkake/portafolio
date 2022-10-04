import { createContext, useContext, useState, useEffect } from 'react';
import Skills from '../data/skills';
import Proyectos from '../data/Proyectos';
const Context = createContext();

export function contextData() {
  const data = useContext(Context);
  return data;
}

export function ContextProvider({ children }) {
  // cambio de fondo
  const [light, setLight] = useState(false);

  const [menu, setMenu] = useState(false);
  // data de mis habilidades
  const [data, setData] = useState([]);
  // data de los proyectos
  const [prData, setPrData] = useState([]);
  // datos del proyecto que se presione
  const [id, setId] = useState({});

  const [desplegarModal, setDesplegarModal] = useState(false);

  useEffect(() => {
    setData(Skills);
    setPrData(Proyectos);
  }, []);

  return (
    <Context.Provider
      value={{
        prData,
        menu,
        setMenu,
        data,
        id,
        setId,
        desplegarModal,
        setDesplegarModal,
        light,
        setLight,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
