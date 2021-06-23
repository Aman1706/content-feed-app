import axios from 'axios';

export const fetchContents = axios.get(
  'https://cw-tech.herokuapp.com/feed.json',
);
