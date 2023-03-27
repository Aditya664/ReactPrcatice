import React from 'react'
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../utils/constants';
import SearcBar from './SearcBar';

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between' }}>
    <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <Link to="/video/3" style={{ display: 'flex', color: 'white', alignItems: 'center' }}>
      <p>Video</p>
    </Link>
    <SearcBar />
  </Stack>
)

export default Navbar