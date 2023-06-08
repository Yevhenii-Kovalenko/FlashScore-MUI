import React from 'react';

import MenuIcon from '@mui/icons-material/Menu';

import { AppBar, Box, IconButton, TextField, Toolbar, Typography } from '@mui/material';

import { useDataContext } from '../context/DataContext';
import { useSidebarContext } from '../context/SidebarContext';

function Header() {
  const { openDrawer } = useSidebarContext();
  const { searchFilteredMatch, onChangeSearchValue } = useDataContext();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={openDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            FlashGoooal
          </Typography>
          <TextField
            color="secondary"
            size="small"
            margin="none"
            id="outlined-search"
            label="Search"
            placeholder="Search league or match"
            type="search"
            value={searchFilteredMatch}
            onChange={onChangeSearchValue}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
