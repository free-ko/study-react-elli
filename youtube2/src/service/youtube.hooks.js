import { useQuery } from '@tanstack/react-query';

import axios from "axios";
import Youtube from "./youtube";

const httpClient = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: { key: process.env.REACT_APP_YOUTUBE_API_KEY }
})

const youtube = new Youtube(httpClient)

export function useYoutubeQuery() {
  return useQuery(
    useYoutubeQuery.getKeys(),
    useYoutubeQuery.fetcher,
    {
      keepPreviousData: true,
    }
  )
}

useYoutubeQuery.getKeys = () => [
  'mostPopular'
];

useYoutubeQuery.fetcher = () => youtube.mostPopular();