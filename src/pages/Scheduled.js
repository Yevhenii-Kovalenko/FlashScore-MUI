import React from 'react';

import Match from '../components/Match';
import { useDataContext } from '../context/DataContext';

function Scheduled() {

  const { filteredMatches, searchFilteredMatch } = useDataContext();

  const sheduledMatch = filteredMatches.filter((match) => {
    if (match.status === 'live') {
      return false;
    }
    if (match.status !== 'finished') {
      return true;
    }
    return false;
  });

  return (
    <div>
      {filteredMatches.length === 0 ? (
        `По запиту:${searchFilteredMatch} нічого не знайдено `
      ) : (
        <div>
          {sheduledMatch.map((match) => (
            <Match
              key={match.id}
              id={match.id}
              home={match.home}
              guest={match.guest}
              goals={match.goals}
              status={match.status}
              score={match.score}
              match={match}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Scheduled;
