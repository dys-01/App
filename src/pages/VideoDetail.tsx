import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getVideoById } from '@/data/mockData';
import VideoCard from '@/components/VideoCard';

function VideoDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const video = getVideoById(id || '');

  if (!video) {
    return (
      <div className="h-screen bg-darker flex items-center justify-center">
        <span className="text-gray-500">视频不存在</span>
      </div>
    );
  }

  const formatNumber = (num: number): string => {
    if (num >= 10000) {
      return (num / 10000).toFixed(1) + 'w';
    }
    return num.toString();
  };

  return (
    <div className="h-screen bg-darker relative">
      <div className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 py-3 bg-gradient-to-b from-darker to-transparent">
        <button
          onClick={() => navigate(-1)}
          className="p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5m0 0l7-7m-7 7l7 7"/>
          </svg>
        </button>
        <span className="font-medium">{video.title}</span>
        <button className="p-2 text-white">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
            <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
          </svg>
        </button>
      </div>

      <div className="pt-14">
        <VideoCard video={video} />
      </div>

      <div className="fixed right-4 bottom-32 flex flex-col items-center gap-5">
        <div className="relative">
          <button
            onClick={() => navigate(`/user/${video.author.id}`)}
            className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary"
          >
            <img
              src={video.author.avatar}
              alt={video.author.name}
              className="w-full h-full object-cover"
            />
          </button>
          <button className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 4v16l8-8z"/>
            </svg>
          </button>
        </div>

        <button
          onClick={() => setLiked(!liked)}
          className={`flex flex-col items-center gap-1 transition-transform active:scale-90 ${liked ? 'text-secondary' : 'text-white'}`}
        >
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill={liked ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          <span className="text-xs">{formatNumber(liked ? video.likes + 1 : video.likes)}</span>
        </button>

        <button className="flex flex-col items-center gap-1 text-white transition-transform active:scale-90">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
          </svg>
          <span className="text-xs">{formatNumber(video.comments)}</span>
        </button>

        <button
          onClick={() => setBookmarked(!bookmarked)}
          className={`flex flex-col items-center gap-1 transition-transform active:scale-90 ${bookmarked ? 'text-primary' : 'text-white'}`}
        >
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill={bookmarked ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>
          </svg>
          <span className="text-xs">{formatNumber(video.shares)}</span>
        </button>

        <button className="flex flex-col items-center gap-1 text-white transition-transform active:scale-90">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
          </svg>
          <span className="text-xs">分享</span>
        </button>
      </div>

      <div className="fixed bottom-20 left-4 right-4">
        <div className="flex items-center gap-2 bg-black/30 rounded-full px-4 py-2">
          <svg className="w-5 h-5 text-white animate-pulse" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z"/>
          </svg>
          <div className="flex-1 overflow-hidden">
            <span className="text-white text-sm truncate">{video.music}</span>
          </div>
          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-darker" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </button>
        </div>

        <div className="mt-3 flex items-center gap-3">
          <div className="flex items-center gap-2 flex-1">
            <button
              onClick={() => navigate(`/user/${video.author.id}`)}
              className="w-10 h-10 rounded-full overflow-hidden"
            >
              <img
                src={video.author.avatar}
                alt={video.author.name}
                className="w-full h-full object-cover"
              />
            </button>
            <div className="flex-1">
              <button
                onClick={() => navigate(`/user/${video.author.id}`)}
                className="text-white text-sm font-medium"
              >
                {video.author.name}
              </button>
              <p className="text-gray-400 text-xs truncate">{video.description}</p>
            </div>
            <button className="px-4 py-1.5 bg-secondary text-white text-xs rounded-full">
              关注
            </button>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-2 bg-gray-800/50 rounded-full px-4 py-2">
          <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
          </svg>
          <input
            type="text"
            placeholder="留下你的精彩评论..."
            className="flex-1 bg-transparent text-white text-sm placeholder-gray-500 focus:outline-none"
          />
          <button className="text-primary">发送</button>
        </div>
      </div>
    </div>
  );
}

export default VideoDetail;
