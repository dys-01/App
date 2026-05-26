import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { hotSearches, discoverVideos } from '@/data/mockData';

function Discover() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const formatNumber = (num: number): string => {
    if (num >= 10000) {
      return (num / 10000).toFixed(1) + 'w';
    }
    return num.toString();
  };

  return (
    <div className="min-h-screen bg-darker pb-20">
      <div className="sticky top-0 z-40 bg-darker px-4 py-3 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <div className="flex-1 relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              type="text"
              placeholder="搜索感兴趣的话题或视频"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-gray-800 rounded-full text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <button className="text-primary text-sm font-medium">搜索</button>
        </div>

        <div className="flex items-center gap-2 mt-3 overflow-x-auto pb-1">
          <span className="text-gray-500 text-xs whitespace-nowrap">搜索历史</span>
          <div className="flex gap-2 flex-nowrap">
            {['蓝调摄影', 'Vlog探店', 'UI设计趋势', '极简穿搭'].map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-400 whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="text-gray-500 text-xs whitespace-nowrap flex-shrink-0">清除</span>
        </div>
      </div>

      <div className="px-4 py-4">
        <div className="flex items-center justify-between mb-3">
          <span className="font-medium flex items-center gap-2">
            <svg className="w-4 h-4 text-secondary" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            热搜榜单
          </span>
          <button className="text-xs text-gray-500">查看完整榜单</button>
        </div>

        <div className="bg-gray-800/50 rounded-2xl p-3">
          {hotSearches.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between py-2.5 border-b border-gray-700/50 last:border-b-0"
            >
              <div className="flex items-center gap-3">
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  item.rank <= 3 ? 'bg-secondary text-white' : 'bg-gray-700 text-gray-400'
                }`}>
                  {item.rank}
                </span>
                <span className="text-sm">{item.title}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-500">{item.hot}</span>
                <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4">
        <div className="flex items-center justify-between mb-3">
          <span className="font-medium">猜你喜欢</span>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <button className="text-primary">视频</button>
            <button>作者</button>
            <button>话题</button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {discoverVideos.map((video) => (
            <div
              key={video.id}
              className="relative rounded-xl overflow-hidden cursor-pointer group"
              onClick={() => navigate(`/video/${video.id}`)}
            >
              <img
                src={video.cover}
                alt={video.title}
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                <span className="text-white text-xs">{video.duration}</span>
              </div>
              <div className="absolute bottom-2 right-2 flex items-center gap-1 text-white text-xs">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
                <span>{formatNumber(video.likes)}</span>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full mt-6 py-3 bg-gray-800 rounded-full text-gray-400 text-sm hover:bg-gray-700 transition-colors">
          加载更多精彩内容...
        </button>
      </div>
    </div>
  );
}

export default Discover;
