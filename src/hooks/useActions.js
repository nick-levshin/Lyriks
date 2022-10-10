import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { setActiveSong, nextSong, prevSong, playPause, selectGenreListId } from '../redux/features/playerSlice';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators({ setActiveSong, nextSong, prevSong, playPause, selectGenreListId }, dispatch);
};
