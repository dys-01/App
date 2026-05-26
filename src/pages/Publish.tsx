import { useNavigate } from 'react-router-dom';

function Publish() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-darker flex flex-col items-center justify-center">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 p-2 text-gray-400 hover:text-white transition-colors"
      >
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5m0 0l7-7m-7 7l7 7"/>
        </svg>
      </button>

      <div className="text-center">
        <div className="w-24 h-24 mx-auto mb-6 bg-gray-800 rounded-full flex items-center justify-center">
          <svg className="w-12 h-12 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
          </svg>
        </div>
        <h2 className="text-xl font-bold text-white mb-2">发布视频</h2>
        <p className="text-gray-500 text-sm">上传你的精彩内容</p>

        <button className="mt-8 px-8 py-3 bg-primary rounded-full text-white font-medium hover:bg-primary/80 transition-colors">
          选择视频
        </button>

        <div className="mt-8 grid grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors"
            >
              <svg className="w-6 h-6 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 4v16m8-8H4"/>
              </svg>
            </div>
          ))}
        </div>

        <p className="mt-4 text-gray-600 text-xs">支持 MP4、MOV 格式</p>
      </div>
    </div>
  );
}

export default Publish;
