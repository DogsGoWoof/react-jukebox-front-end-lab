import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import * as trackService from './services/trackService';

import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';

const App = () => {

  const [trackList, setTrackList] = useState([]);



  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const tracks = await trackService.index();
        if (tracks.error) {
          throw new Error(tracks.error);
        }

        setTrackList(tracks);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTracks();
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home trackList={trackList} />} />
        <Route path="*" element={<h2>Whoops, nothing here!</h2>} />
      </Routes>
    </>
  );

};

export default App;
