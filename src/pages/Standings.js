import { Box, Link, Tab, Tabs } from '@mui/material';
import React, { useEffect, useState } from 'react'
import DefaultStandings from './DefaultStandings';
import { useMatchContext } from '../context/MatchContext';

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



function Standings() {
	const { allLeagues } = useMatchContext();
	const [value, setValue] = useState(0);
	const [currentLeague, setCurrentLeague] = useState(allLeagues[0].country);


	useEffect(() => {
		setCurrentLeague(allLeagues[value].country)
	}, [value, allLeagues])


	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: '100%' }}>
			<Tabs
				value={value}
				onChange={handleChange}
				aria-label="nav menu"
				scrollButtons="auto"
				variant="scrollable"
			>
				{allLeagues.map((league,index) => (
					<LinkTab
						key={index}
						label={league.name}
						to={`Standings/${league.country}`}
					/>
				))}
			</Tabs>
			<DefaultStandings league={currentLeague}/>
		</Box>
	);
}

export default Standings