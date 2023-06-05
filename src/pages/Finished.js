import React from 'react';

import { Box, Typography } from '@mui/material';

import Match from '../components/Match';
import { useMatchContext } from '../context/MatchContext';

function Finished() {
  const { filteredMatches, searchFilteredMatch } = useMatchContext();

  const finishedMatch = filteredMatches.filter((match) => match.status === 'finished');

  return (
    <Box height="100vh">
      {filteredMatches.length === 0 ? (
        <Typography variant="h2">По запиту:${searchFilteredMatch} нічого не знайдено</Typography>
      ) : (
        <div>
          {finishedMatch.map((match) => (
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
    </Box>
  );
}

export default Finished;
