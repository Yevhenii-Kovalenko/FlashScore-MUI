import { createContext, useContext, useState } from 'react';

const SidebarContext = createContext();

export const useSidebarContext = () => useContext(SidebarContext);

export const SidebarProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const openDrawer = () => {
    setOpen(true);
  };
  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <SidebarContext.Provider
      value={{
        open,
        openDrawer,
        closeDrawer,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
