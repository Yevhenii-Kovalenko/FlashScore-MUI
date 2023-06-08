import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

const DataContext = createContext();

export const useDataContext = () => useContext(DataContext);

export default function DataProvider({ children }) {
  const [matches, setMatches] = useState([]);
  const [leagues, setLeagues] = useState([]);
  const [standings, setStandings] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchFilteredMatch, setSearchFilteredMatch] = useState('');
  useEffect(() => {
    axios
      .get('http://localhost:3001/matches')
      .then((response) => {
        setMatches(response.data);
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setLoading(false)
      });
    axios
      .get('http://localhost:3001/leagues')
      .then((response) => {
        setLeagues(response.data);
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setLoading(false)
      });
    axios
      .get('http://localhost:3001/standings')
      .then((response) => {
        setStandings(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

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
        loading,
        standings,
        leagues,
      }}
    >
      {children}
    </DataContext.Provider>
  ));
}
