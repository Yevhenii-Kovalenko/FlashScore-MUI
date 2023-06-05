import React, { createContext, useContext, useMemo } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { useQuery } from 'react-query';

const DataContext = createContext();

export const useDataContext = () => useContext(DataContext);

const fetchMatches = async () => {
  const res = await fetch('http://localhost:3001/matches');
  return res.json();
};
// const fetchLeagues = async () => {
//   const res = await fetch('http://localhost:3001/leagues');
//   return res.json();
// };

export default function DataProvider({ children }) {

  const { data, status } = useQuery('matches', fetchMatches);
  // const { leagues } = useQuery('leagues', fetchLeagues);
  console.log(useQuery('matches', fetchMatches));
  
  return useMemo(() => (
    <DataContext.Provider
      value={{ data, status}}
    >
      {children}
    </DataContext.Provider>
  ));
}
