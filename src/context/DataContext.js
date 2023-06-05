import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

const DataContext = createContext();

export const useDataContext = () => useContext(DataContext);

export default function DataProvider({ children }) {
  const [matches, setMatches] = useState([]);
  const [leagues, setLeagues] = useState([]);
  const [searchFilteredMatch, setSearchFilteredMatch] = useState('');
  useEffect(() => {
    axios
      .get('http://localhost:3001/matches')
      .then((response) => {
        setMatches(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get('http://localhost:3001/leagues')
      .then((response) => {
        setLeagues(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(matches);
  const onChangeSearchValue = (event) => {
    setSearchFilteredMatch(event.target.value);
  };
  const filteredMatches = matches.filter(
    (match) =>
      match.home.name.toLowerCase().includes(searchFilteredMatch.toLowerCase()) ||
      match.guest.name.toLowerCase().includes(searchFilteredMatch.toLowerCase())
  );
  const filteredLeagues = leagues.filter((league) =>
    league.name.toLowerCase().includes(searchFilteredMatch.toLowerCase())
  );
  return useMemo(() => (
    <DataContext.Provider
      value={{
        matches,
        filteredMatches,
        onChangeSearchValue,
        filteredLeagues,
        searchFilteredMatch,
      }}
    >
      {children}
    </DataContext.Provider>
  ));
}
