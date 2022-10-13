import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';

const CountryTracks = () => {
  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(true);
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  useEffect(() => {
    const request = axios.get('https://geo.ipify.org/api/v2/country?apiKey=at_m8HR9dICgqhy28gcxAnoXdcxlR5f1&ipAddress=8.8.8.8');
    //at_m8HR9dICgqhy28gcxAnoXdcxlR5f1
  }, [country]);

  return (
    <div className=""></div>
  );
};

export default CountryTracks;
