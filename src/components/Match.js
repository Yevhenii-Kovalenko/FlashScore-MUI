import { Box, Checkbox, IconButton, Typography } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { useMatchContext } from '../context/MatchContext';
import { useState } from 'react';

function Match({ match, home, guest, goals, status, isFavorites }) {
  const { onFavoriteMatch } = useMatchContext();
  const [toggleFavorite, setToggleFavorite] = useState(isFavorites);

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
            ></Typography>
            <Typography>{home.name}</Typography>
          </Box>
          <Box sx={{ display: 'flex' }} component="div">
            <Typography
              component="img"
              sx={{ width: '20px', height: '20px', mr: '5px' }}
              src={guest.img}
            ></Typography>
            <Typography>{guest.name}</Typography>
          </Box>
        </Box>
        <Box component="div">
          <Typography>
            {goals.filter((goal) => goal.team === home.id).length}
          </Typography>
          <Typography>
            {goals.filter((goal) => goal.team === guest.id).length}
          </Typography>
        </Box>
      </Box>

      <Typography
        // onClick={() => onOpenModal(match)}
        sx={{ width: ' 20% ', cursor: 'pointer', textDecoration: 'underline' }}
      >
        Show more
      </Typography>
    </Box>
  );
}

export default Match;
