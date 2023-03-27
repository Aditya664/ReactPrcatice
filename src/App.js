import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed, Home, Props, Message, Counter, Distruct, Welcome, FunctionClick, ClassClick, NewProj } from './components';

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#fff' }}>
      <Navbar />
      <Home name='Aditya' />
      <Props name='Aditya'>
        <h4>JSE</h4>
      </Props>
      <Props name='Rumin'>
        <button>Click me!!!!!</button>
      </Props>
      <Message />
      <Counter />
      <Distruct name='Aditya' heroname='Coder' />
      <Welcome name='Aditya' heroname='Coder' />
      <FunctionClick name='Aditya' heroname='Coder' />
      {/* <ClassClick /> */}
      <NewProj />
      <ClassClick />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;