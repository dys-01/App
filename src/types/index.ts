export interface User {
  id: string;
  name: string;
  avatar: string;
  followers: number;
  following: number;
  likes: number;
  bio: string;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  cover: string;
  duration: string;
  likes: number;
  comments: number;
  shares: number;
  author: User;
  music: string;
  hashtags: string[];
}

export interface HotSearch {
  id: string;
  rank: number;
  title: string;
  hot: string;
}
