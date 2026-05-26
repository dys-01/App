import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { recommendVideos, followVideos } from '@/data/mockData';
import VideoCard from '@/components/VideoCard';

function Home() {
  const [activeTab, setActiveTab] = useState<'recommend' | 'follow'>('recommend');
  const navigate = useNavigate();

  const videos = activeTab === 'recommend' ? recommendVideos : followVideos;

  return (
    <div className="h-screen bg-darker">
      <div className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 py-3 bg-gradient-to-b from-darker to-transparent">
        <div className="flex items-center gap-6">
          <button
            onClick={() => setActiveTab('follow')}
            className={`text-lg font-medium transition-colors ${
              activeTab === 'follow' ? 'text-white' : 'text-gray-400 hover:text-white'
            }`}
          >
            关注
          </button>
          <button
            onClick={() => setActiveTab('recommend')}
            className={`text-lg font-medium transition-colors ${
              activeTab === 'recommend' ? 'text-white' : 'text-gray-400 hover:text-white'
            }`}
          >
            推荐
          </button>
        </div>
        <button
          onClick={() => navigate('/discover')}
          className="p-2 text-gray-400 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
        </button>
      </div>

      <div className="scroll-container pt-14 pb-20">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}

export default Home;
