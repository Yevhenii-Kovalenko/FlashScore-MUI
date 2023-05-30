import { React, useState } from 'react';

import StarIcon from '@mui/icons-material/Star';

import { Badge, Box, Link, Tab, Tabs } from '@mui/material';

import Leagues from './Leagues';
// import ModalMatchInfo from './ModalMatchInfo';
import { useMatchContext } from '../context/MatchContext';
import Favorites from '../pages/Favorites';
import Finished from '../pages/Finished';
import Live from '../pages/Live';
import Scheduled from '../pages/Scheduled';

function LinkTab(props) {
  return (
    <Tab
      component={Link}
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

function TabContent({ value }) {
  if (value === 0) {
    return <Leagues />;
  }
  if (value === 1) {
    return <Live />;
  }
  if (value === 2) {
    return <Finished />;
  }
  if (value === 3) {
    return <Scheduled />;
  }
  if (value === 4) {
    return <Favorites />;
  }
  return null;
}

function NavTabs() {
  const { badgeValue } = useMatchContext();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box maxWidth="md">
      <Tabs textColor="primary" value={value} onChange={handleChange} aria-label="nav menu">
        <LinkTab label="All leagues" />
        <LinkTab label="Live" />
        <LinkTab label="Finished" />
        <LinkTab label="Scheduled" />
        <LinkTab
          icon={
            <Badge badgeContent={badgeValue} color="primary">
              <StarIcon fontSize="large" sx={{ color: 'yellow' }} />
            </Badge>
          }
          aria-label="Favorites"
        />
      </Tabs>
      <TabContent value={value} />
      {/* <ModalMatchInfo /> */}
    </Box>
  );
}

export default NavTabs;
