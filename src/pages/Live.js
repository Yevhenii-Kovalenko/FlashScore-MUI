import React from 'react';

import Match from '../components/Match';
import { useDataContext } from '../context/DataContext';

function Live() {
  const { filteredMatches, searchFilteredMatch } = useDataContext();

  const liveMatch = filteredMatches.filter((match) => match.status === 'live');

  return (
    <div>
      {filteredMatches.length === 0 ? (
        `По запиту:${searchFilteredMatch} нічого не знайдено `
      ) : (
        <div>
          {liveMatch.map((match) => (
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

export default Live;
