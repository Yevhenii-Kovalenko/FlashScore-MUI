import React from 'react';

import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import NotFound from './NotFound';
import { standings_data } from '../data/api-mock';

function DefaultStandings({ league }) {
  const standings = standings_data[league];

  if (!standings) {
    return <NotFound />;
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="left">Team</TableCell>
            <TableCell align="right">MP</TableCell>
            <TableCell align="right">W</TableCell>
            <TableCell align="right">D</TableCell>
            <TableCell align="right">L</TableCell>
            <TableCell align="center">G</TableCell>
            <TableCell align="right">PTS</TableCell>
            <TableCell align="center">Form</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {standings.standings[0].table.map((team) => (
            <TableRow
              key={team.team.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {team.position}
              </TableCell>
              <TableCell component="th" scope="row">
                <Box component="img" width="20px" height="20px" mr="5px" src={team.team.crest} />
                {team.team.name}
              </TableCell>
              <TableCell align="right">{team.playedGames}</TableCell>
              <TableCell align="right">{team.won}</TableCell>
              <TableCell align="right">{team.draw}</TableCell>
              <TableCell align="right">{team.lost}</TableCell>
              <TableCell align="right">
                {team.goalsFor}:{team.goalsAgainst}
              </TableCell>
              <TableCell align="right">{team.points}</TableCell>
              <TableCell align="right">{team.form}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DefaultStandings;
