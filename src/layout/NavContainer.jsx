import { useState } from 'react';
import { contextData } from '../context/Context';
import Nav from '../components/Nav';
import { CgFormatIndentIncrease as Menu } from 'react-icons/cg';
import './NavContainer.scss';

function NavContainer() {
  const [menu, setMenu] = useState(false);
  const { light } = contextData();

  const toogleMenu = () => {
    setMenu(true);
  };
  return (
    <div>
      {menu && <Nav menu={menu} setMenu={setMenu} light={light}/>}
      <button
        className={`menu_button ${light && 'bgwhite'}`}
        onClick={toogleMenu}
      >
        <Menu className="ico_menu" />
      </button>
    </div>
  );
}

export default NavContainer;
