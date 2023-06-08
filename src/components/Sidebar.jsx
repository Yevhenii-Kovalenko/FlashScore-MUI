import React from 'react';
import { Link } from 'react-router-dom';

import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import EighteenUpRatingIcon from '@mui/icons-material/EighteenUpRating';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import HomeIcon from '@mui/icons-material/Home';

import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

import { useSidebarContext } from '../context/SidebarContext';
import { theme } from '../theme';

function Sidebar() {
  const { open, closeDrawer } = useSidebarContext();

  const iconIndex = (index) => {
    if (index === 0) {
      return <HomeIcon />;
    }
    if (index === 1) {
      return <FormatListNumberedIcon />;
    }
    if (index === 2) {
      return <DirectionsRunIcon />;
    }
    if (index === 3) {
      return <EighteenUpRatingIcon />;
    }
    return null;
  };

  return (
    <Drawer open={open} onClose={closeDrawer} anchor="left">
      <Box height="100vh" role="presentation" sx={{ backgroundColor: theme.palette.primary.main }}>
        <List>
          {['Home', 'Standings', 'Players', 'Top-10'].map((text, index) => (
            <ListItem disablePadding key={index}>
              <Link to={`/${text}`}>
                <ListItemButton>
                  <ListItemIcon>{iconIndex(index)}</ListItemIcon>
                  <ListItemText sx={{textDecoration: 'none'}} primary={text} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

export default Sidebar;
