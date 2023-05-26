import { Badge, Box, Link, Tab, Tabs } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { useMatchContext } from '../context/MatchContext';
import { useState } from 'react';
import Leagues from './Leagues';
import Live from '../pages/Live';
import Finished from '../pages/Finished';
import Scheduled from '../pages/Scheduled';
import Favorites from '../pages/Favorites';

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
  } else if (value === 1) {
    return <Live />;
  } else if (value === 2) {
    return <Finished />;
  } else if (value === 3) {
    return <Scheduled />;
  } else if (value === 4) {
    return <Favorites />;
  } else {
    return null;
  }
}

function NavTabs() {
  const { badgeValue } = useMatchContext();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box maxWidth="md">
      <Tabs
        textColor="primary"
        value={value}
        onChange={handleChange}
        aria-label="nav menu"
      >
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
    </Box>
  );
}

export default NavTabs;
