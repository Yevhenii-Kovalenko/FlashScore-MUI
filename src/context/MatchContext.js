import { React, createContext, useContext, useMemo, useState } from 'react';

import allLeagues from '../data/allLeagues';
import matches from '../data/matches';

const MatchContext = createContext();

export const useMatchContext = () => useContext(MatchContext);

export function MatchProvider({ children }) {
  const [searchFilteredMatch, setSearchFilteredMatch] = useState('');
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

  const filteredLeagues = allLeagues.filter((league) =>
    league.name.toLowerCase().includes(searchFilteredMatch.toLowerCase())
  );

  const filteredMatches = matches.filter(
    (match) =>
      match.home.name.toLowerCase().includes(searchFilteredMatch.toLowerCase()) ||
      match.guest.name.toLowerCase().includes(searchFilteredMatch.toLowerCase())
  );

  const onChangeSearchValue = (event) => {
    setSearchFilteredMatch(event.target.value);
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
      filteredLeagues,
      searchFilteredMatch,
      onChangeSearchValue,
      filteredMatches,
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
    [filteredLeagues, searchFilteredMatch, filteredMatches, onFavoriteMatch, badgeValue, favoriteMatch, openSnack, openSnackRemove, openModal, selectedMatchInfo]
  );

  return useMemo(
    () => <MatchContext.Provider value={contextValue}>{children}</MatchContext.Provider>,
    [children, contextValue]
  );
}
