import { React, createContext, useContext, useMemo, useState } from 'react';

import allLeagues from '../data/allLeagues';
import matches from '../data/matches';

const MatchContext = createContext();

export const useMatchContext = () => useContext(MatchContext);

export function MatchProvider({ children }) {
  const [favoriteMatch, setFavoriteMatch] = useState([]);
  const [openSnack, setOpenSnack] = useState(false);
  const [openSnackRemove, setOpenSnackRemove] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selectedMatchInfo, setSelectedMatchInfo] = useState([]);

  const handleOpenModal = (match) => {
    setOpenModal(true);
    setSelectedMatchInfo((prevMatch) => [...prevMatch, match]);
  };
  const handleCloseModal = (match) => {
    setOpenModal(false);
    setSelectedMatchInfo((prevMatch) => prevMatch.filter((matchInfo) => matchInfo !== match));
  };
  const handleOpenSnack = () => {
    setOpenSnack(true);
  };

  const handleCloseSnack = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnack(false);
  };

  const handleOpenSnackRemove = () => {
    setOpenSnackRemove(true);
  };

  const handleCloseSnackRemove = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackRemove(false);
  };

  const onFavoriteMatch = (match) => {
    if (favoriteMatch.includes(match)) {
      setFavoriteMatch((prevMatch) => prevMatch.filter((favMatch) => favMatch !== match));
      setOpenSnackRemove(true);
    } else {
      setFavoriteMatch((prevMatch) => [...prevMatch, match]);
      setOpenSnack(true);
    }
  };

  const badgeValue = favoriteMatch.length;

  const contextValue = useMemo(
    () => ({
      matches,
      allLeagues,
      onFavoriteMatch,
      badgeValue,
      favoriteMatch,
      handleOpenSnack,
      handleCloseSnack,
      openSnack,
      openSnackRemove,
      handleOpenSnackRemove,
      handleCloseSnackRemove,
      openModal,
      handleOpenModal,
      handleCloseModal,
      selectedMatchInfo,
    }),
    [
      onFavoriteMatch,
      badgeValue,
      favoriteMatch,
      openSnack,
      openSnackRemove,
      openModal,
      selectedMatchInfo,
    ]
  );

  return useMemo(
    () => <MatchContext.Provider value={contextValue}>{children}</MatchContext.Provider>,
    [children, contextValue]
  );
}
