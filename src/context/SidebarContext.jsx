import { React, createContext, useCallback, useContext, useMemo, useState } from 'react';

const SidebarContext = createContext();

export const useSidebarContext = () => useContext(SidebarContext);

export function SidebarProvider({ children }) {
  const [open, setOpen] = useState(false);

  const openDrawer = useCallback(() => {
    setOpen(true);
  }, []);

  const closeDrawer = useCallback(() => {
    setOpen(false);
  }, []);

  // const openDrawer = () => {
  //   setOpen(true);
  // };
  // const closeDrawer = () => {
  //   setOpen(false);
  // };

  const contextValue = useMemo(
    () => ({
      open,
      openDrawer,
      closeDrawer,
    }),
    [open, openDrawer, closeDrawer]
  );

  return <SidebarContext.Provider value={contextValue}>{children}</SidebarContext.Provider>;
}
