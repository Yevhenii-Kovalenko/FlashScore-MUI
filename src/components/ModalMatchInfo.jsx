import React from 'react';

import CloseIcon from '@mui/icons-material/Close';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

import { Box, IconButton, Modal, Typography } from '@mui/material';

import { useMatchContext } from '../context/MatchContext';

const style = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 9999,
  width: '200vh',
  maxWidth: '100%',
  margin: 'auto',
  padding: '20px',
  background: 'rgba(0, 0, 0, 0.5)',
  color: 'white',
  backdropFilter: 'blur(4px)',
  transition: 'opacity 0.3s ease-in-out',
};

function ModalMatchInfo() {
  const { openModal, handleCloseModal, selectedMatchInfo } = useMatchContext();

  return (
    <Modal
      open={openModal}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <>
        {selectedMatchInfo.map((match) => (
          <Box key={match.id} sx={style}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography
                textAlign="center"
                width="90%"
                id="modal-modal-title"
                variant="h6"
                component="h2"
              >
                {match.league.name}
              </Typography>
              <IconButton
                onClick={() => handleCloseModal(match)}
                color="secondary"
                aria-label="close"
                size="small"
              >
                <CloseIcon fontSize="large" />
              </IconButton>
            </Box>
            <Box mt={20} component="div" height="100vh">
              <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                <Box height="200px">
                  <Typography sx={{ fontSize: '30px' }}>
                    <Typography mr="5px" src={match.home.img} component="img" alt="logo" />
                    {match.home.name}
                  </Typography>
                  <Typography>
                    {match.score
                      .filter((score) => score.team === match.home.id)
                      .map((el, index) => (
                        <Typography
                          sx={{ display: 'flex', alignItems: 'center', gap: '2px' }}
                          key={index}
                        >
                          <SportsSoccerIcon fontSize="small" />
                          {el.name} {el.time}
                        </Typography>
                      ))}
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontSize: '70px' }}>
                    {match.goals.filter((goal) => goal.team === match.home.id).length}
                    <HorizontalRuleIcon fontSize="large" />
                    {match.goals.filter((goal) => goal.team === match.guest.id).length}
                  </Typography>
                </Box>
                <Box height="200px">
                  <Typography sx={{ fontSize: '30px' }}>
                    <Typography mr="5px" src={match.guest.img} component="img" alt="logo" />
                    {match.guest.name}
                  </Typography>
                  <Typography>
                    {match.score
                      .filter((score) => score.team === match.guest.id)
                      .map((el, index) => (
                        <Typography
                          sx={{ display: 'flex', alignItems: 'center', gap: '2px' }}
                          key={index}
                        >
                          <SportsSoccerIcon fontSize="small" />
                          {el.name} {el.time}
                        </Typography>
                      ))}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </>
    </Modal>
  );
}

export default ModalMatchInfo;
