export interface YoutubeResponse {
  category: string;
  resultType: string;
  videoId: string;
  videoType: string;
  title: string;
  artists: 
    {
      name: string;
      id: string;
    }[];
  album: {
    name: string;
    id: string;
  };
  duration: string;
  duration_seconds: number;
  thumbnails: 
    {
      url: string;
      width: number;
      height: number;
    }[];
}