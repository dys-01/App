import { useNavigate } from 'react-router-dom';
import type { Video } from '@/types';

interface VideoCardProps {
  video: Video;
}

function VideoCard({ video }: VideoCardProps) {
  const navigate = useNavigate();

  const formatNumber = (num: number): string => {
    if (num >= 10000) {
      return (num / 10000).toFixed(1) + 'w';
    }
    return num.toString();
  };

  return (
    <div
      className="scroll-item relative w-full h-screen bg-black"
      onClick={() => navigate(`/video/${video.id}`)}
    >
      <img
        src={video.cover}
        alt={video.title}
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>

      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="flex items-end justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/user/${video.author.id}`);
                }}
                className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary"
              >
                <img
                  src={video.author.avatar}
                  alt={video.author.name}
                  className="w-full h-full object-cover"
                />
              </button>
              <div className="flex-1">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/user/${video.author.id}`);
                  }}
                  className="text-white font-medium text-sm"
                >
                  {video.author.name}
                </button>
                <p className="text-gray-400 text-xs truncate">
                  {video.description}
                </p>
              </div>
              <button className="px-4 py-1.5 bg-secondary text-white text-xs rounded-full flex-shrink-0">
                关注
              </button>
            </div>

            <div className="flex items-center gap-2 mt-2">
              {video.hashtags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2 mt-3 bg-black/30 rounded-full px-4 py-2 w-fit">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
              <span className="text-white text-sm">{video.music}</span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-5 ml-4">
            <button
              onClick={(e) => e.stopPropagation()}
              className="flex flex-col items-center gap-1 text-white"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
              <span className="text-xs">{formatNumber(video.likes)}</span>
            </button>

            <button
              onClick={(e) => e.stopPropagation()}
              className="flex flex-col items-center gap-1 text-white"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
              <span className="text-xs">{formatNumber(video.comments)}</span>
            </button>

            <button
              onClick={(e) => e.stopPropagation()}
              className="flex flex-col items-center gap-1 text-white"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>
              </svg>
              <span className="text-xs">{formatNumber(video.shares)}</span>
            </button>

            <button
              onClick={(e) => e.stopPropagation()}
              className="flex flex-col items-center gap-1 text-white"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
              <span className="text-xs">分享</span>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute top-4 right-4">
        <span className="text-white text-xs bg-black/50 px-2 py-1 rounded">
          {video.duration}
        </span>
      </div>
    </div>
  );
}

export default VideoCard;
