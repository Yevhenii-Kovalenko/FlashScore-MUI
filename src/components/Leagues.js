import React from 'react';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';

import Match from './Match';
import { useDataContext } from '../context/DataContext';
import { useMatchContext } from '../context/MatchContext';

function Leagues() {
  const { onFavoriteMatch } = useMatchContext();
  const { matches, filteredLeagues, searchFilteredMatch } = useDataContext();
  return (
    <Box sx={{ marginTop: '20px' }}>
      {filteredLeagues.length === 0 ? (
        <Typography>По запиту :{searchFilteredMatch} нічого не знайдено</Typography>
      ) : (
        <div>
          {filteredLeagues.map((league) => (
            <Accordion defaultExpanded key={league.id}>
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
                expandIcon={<ExpandMoreIcon />}
              >
                <Box sx={{ display: 'flex', textAlign: 'center' }} component="div">
                  <Typography
                    sx={{ width: '25px', height: '20px', marginRight: '10px' }}
                    component="img"
                    src={league.url}
                  />
                  <Typography>{league.name}</Typography>
                </Box>
              </AccordionSummary>
              {matches
                .filter((match) => match.league.id === league.id)
                .map((match) => (
                  <AccordionDetails sx={{ padding: '0px' }} key={match.id}>
                    <Match
                      id={match.id}
                      home={match.home}
                      guest={match.guest}
                      goals={match.goals}
                      status={match.status}
                      score={match.score}
                      onFavoriteMatch={() => onFavoriteMatch(match)}
                      match={match}
                      isFavorites={false}
                    />
                  </AccordionDetails>
                ))}
            </Accordion>
          ))}
        </div>
      )}
    </Box>
  );
}

export default Leagues;
