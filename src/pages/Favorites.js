import { Box, Typography } from '@mui/material';
import React from 'react';
import Match from '../components/Match';
import { useMatchContext } from '../context/MatchContext';

function Favorites() {
  const { favoriteMatch, onFavoriteMatch } = useMatchContext();

  return (
    <Box height="100vh" sx={{}}>
      {favoriteMatch.length === 0 ? (
        <Typography mt="20%" fontSize="33px" align="center" component="h5">
          Favorites list is empty!
        </Typography>
      ) : (
        <div>
          {favoriteMatch.map((match) => (
            <Match
              key={match.id}
              id={match.id}
              home={match.home}
              guest={match.guest}
              goals={match.goals}
              status={match.status}
              score={match.score}
              isFavorites
              onFavoriteMatch={() => onFavoriteMatch(match)}
              match={match}
            />
          ))}
        </div>
      )}
    </Box>
  );
}

export default Favorites;
