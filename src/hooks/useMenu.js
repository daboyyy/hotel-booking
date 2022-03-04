import { createContext, useContext, useState } from 'react';

const MenuContext = createContext();

const useMenu = () => useContext(MenuContext);

const MenuProvider = (props) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const onClickMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const value = {
    onClickMenu,
    toggleMenu,
  };

  return <MenuContext.Provider value={value} {...props} />;
};

export { useMenu, MenuProvider };
