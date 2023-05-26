import { createContext, useContext, useEffect, useState } from 'react';
import matches from '../data/matches';
import allLeagues from '../data/allLeagues';

const MatchContext = createContext();

export const useMatchContext = () => useContext(MatchContext);

export const MatchProvider = ({ children }) => {
  const storedFavorite = JSON.parse(localStorage.getItem('favoriteMatch'));

  const [searchFilteredMatch, setSearchFilteredMatch] = useState('');
  const [favoriteMatch, setFavoriteMatch] = useState(storedFavorite);
  const [openSnack, setOpenSnack] = useState(false);
  const [openSnackRemove, setOpenSnackRemove] = useState(false);

  useEffect(() => {
    localStorage.setItem('favoriteMatch', JSON.stringify(favoriteMatch));
  }, [favoriteMatch]);

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
      match.home.name
        .toLowerCase()
        .includes(searchFilteredMatch.toLowerCase()) ||
      match.guest.name.toLowerCase().includes(searchFilteredMatch.toLowerCase())
  );

  const onChangeSearchValue = (event) => {
    setSearchFilteredMatch(event.target.value);
  };

  const onFavoriteMatch = (match) => {
    if (favoriteMatch.includes(match)) {
      setFavoriteMatch((prevMatch) =>
        prevMatch.filter((prevMatch) => prevMatch !== match)
      );
      setOpenSnackRemove(true);
    } else {
      setFavoriteMatch((prevMatch) => [...prevMatch, match]);
      setOpenSnack(true);
    }
  };

  return (
    <MatchContext.Provider
      value={{
        matches,
        allLeagues,
        filteredLeagues,
        searchFilteredMatch,
        onChangeSearchValue,
        filteredMatches,
        onFavoriteMatch,
        favoriteMatch,
        badgeValue: favoriteMatch.length,
        handleOpenSnack,
        handleCloseSnack,
        openSnack,
        openSnackRemove,
        handleOpenSnackRemove,
        handleCloseSnackRemove,
      }}
    >
      {children}
    </MatchContext.Provider>
  );
};
