import { React, useState } from 'react';

import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

import { Box, Checkbox, IconButton, Typography } from '@mui/material';

import ModalMatchInfo from './ModalMatchInfo';
import { useMatchContext } from '../context/MatchContext';

function Match({ match, home, guest, goals, status, isFavorites, id }) {
  const { onFavoriteMatch, handleOpenModal, selectedMatchInfo } = useMatchContext();
  const [toggleFavorite, setToggleFavorite] = useState(isFavorites);

  // eslint-disable-next-line no-shadow
  const onClickFavorite = (match) => {
    setToggleFavorite(!toggleFavorite);
    onFavoriteMatch(match);
  };
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '15px',
        textAlign: 'center',
        borderRadius: '20px',
        margin: '20px',
        border: '1px solid black',
      }}
      component="div"
      maxWidth="100%"
    >
      <IconButton onClick={() => onClickFavorite(match)} aria-label="favorite">
        <Checkbox
          icon={<StarBorderIcon sx={{ color: '#e65100' }} />}
          checkedIcon={<StarIcon sx={{ color: '#ffd600' }} />}
        />
      </IconButton>
      <Typography sx={{ width: ' 20% ' }}>{status}</Typography>

      <Box
        sx={{
          width: ' 50% ',
          display: 'flex',
          justifyContent: 'space-between',
          textAlign: 'left',
        }}
      >
        <Box component="div">
          <Box sx={{ display: 'flex' }} component="div">
            <Typography
              component="img"
              sx={{ width: '20px', height: '20px', mr: '5px' }}
              src={home.img}
            />
            <Typography>{home.name}</Typography>
          </Box>
          <Box sx={{ display: 'flex' }} component="div">
            <Typography
              component="img"
              sx={{ width: '20px', height: '20px', mr: '5px' }}
              src={guest.img}
            />
            <Typography>{guest.name}</Typography>
          </Box>
        </Box>
        <Box component="div">
          <Typography>{goals.filter((goal) => goal.team === home.id).length}</Typography>
          <Typography>{goals.filter((goal) => goal.team === guest.id).length}</Typography>
        </Box>
      </Box>

      <Typography
        onClick={() => handleOpenModal(match)}
        sx={{ width: ' 20% ', cursor: 'pointer', textDecoration: 'underline' }}
      >
        Show more
      </Typography>

      {selectedMatchInfo.map((matchInf) => matchInf.id)[0] === id ? <ModalMatchInfo /> : ''}
    </Box>
  );
}

export default Match;
