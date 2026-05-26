import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getUserById, userVideos, currentUser } from '@/data/mockData';

function Profile() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'works' | 'private' | 'liked'>('works');

  const user = id ? getUserById(id) : currentUser;
  const isOwnProfile = !id || id === currentUser.id;

  if (!user) {
    return (
      <div className="h-screen bg-darker flex items-center justify-center">
        <span className="text-gray-500">用户不存在</span>
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
    <div className="min-h-screen bg-darker pb-20">
      <div className="relative">
        <div className="h-40 bg-gradient-to-br from-primary/30 to-secondary/30"></div>
        
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors z-10"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5m0 0l7-7m-7 7l7 7"/>
          </svg>
        </button>

        {isOwnProfile && (
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <button className="p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>
              </svg>
            </button>
            <button className="p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
              </svg>
            </button>
          </div>
        )}

        <div className="absolute -bottom-16 left-4 right-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-darker">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {isOwnProfile && (
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 4v16l8-8z"/>
                  </svg>
                </div>
              )}
            </div>

            <div className="flex-1 grid grid-cols-3 gap-2">
              <div className="text-center">
                <div className="text-xl font-bold text-white">{formatNumber(userVideos.length)}</div>
                <div className="text-xs text-gray-500">作品</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-white">{formatNumber(user.followers)}</div>
                <div className="text-xs text-gray-500">粉丝</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-white">{formatNumber(user.following)}</div>
                <div className="text-xs text-gray-500">关注</div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="font-bold text-white">{user.name}</div>
            <div className="text-sm text-gray-400">{user.bio}</div>
          </div>

          <div className="mt-4 flex gap-2">
            {isOwnProfile ? (
              <>
                <button className="flex-1 py-2.5 bg-gray-800 rounded-full text-white text-sm hover:bg-gray-700 transition-colors">
                  编辑资料
                </button>
                <button className="flex-1 py-2.5 bg-primary rounded-full text-white text-sm hover:bg-primary/80 transition-colors">
                  + 发布作品
                </button>
              </>
            ) : (
              <>
                <button className="flex-1 py-2.5 bg-primary rounded-full text-white text-sm hover:bg-primary/80 transition-colors">
                  关注
                </button>
                <button className="flex-1 py-2.5 bg-gray-800 rounded-full text-white text-sm hover:bg-gray-700 transition-colors">
                  私信
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="pt-24 px-2">
        <div className="flex border-b border-gray-800">
          <button
            onClick={() => setActiveTab('works')}
            className={`flex-1 py-3 flex items-center justify-center gap-2 transition-colors ${
              activeTab === 'works' ? 'text-white border-b-2 border-white' : 'text-gray-500'
            }`}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
            <span className="text-sm">作品</span>
          </button>
          <button
            onClick={() => setActiveTab('private')}
            className={`flex-1 py-3 flex items-center justify-center gap-2 transition-colors ${
              activeTab === 'private' ? 'text-white border-b-2 border-white' : 'text-gray-500'
            }`}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
            </svg>
            <span className="text-sm">私密</span>
          </button>
          <button
            onClick={() => setActiveTab('liked')}
            className={`flex-1 py-3 flex items-center justify-center gap-2 transition-colors ${
              activeTab === 'liked' ? 'text-white border-b-2 border-white' : 'text-gray-500'
            }`}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <span className="text-sm">喜欢</span>
          </button>
        </div>

        <div className="mt-2 grid grid-cols-3 gap-1">
          {userVideos.map((video) => (
            <div
              key={video.id}
              className="relative aspect-square cursor-pointer group"
              onClick={() => navigate(`/video/${video.id}`)}
            >
              <img
                src={video.cover}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-end p-1">
                <div className="flex items-center gap-1 text-white text-xs bg-black/50 px-1 py-0.5 rounded">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                  <span>{formatNumber(video.likes)}</span>
                </div>
              </div>
              {activeTab === 'private' && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                  <svg className="w-8 h-8 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
