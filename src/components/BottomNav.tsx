import { useNavigate, useLocation } from 'react-router-dom';

function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path === '/discover' && location.pathname === '/discover') return true;
    if (path === '/publish' && location.pathname === '/publish') return true;
    if ((path === '/profile' && location.pathname === '/profile') || 
        (path === '/profile' && location.pathname.startsWith('/user/'))) return true;
    return false;
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-darker border-t border-gray-800 z-50 px-4 pb-safe">
      <div className="flex items-center justify-around py-2">
        <button
          onClick={() => navigate('/')}
          className={`flex flex-col items-center py-1 px-4 rounded-lg transition-colors ${
            isActive('/') ? 'text-primary' : 'text-gray-500 hover:text-white'
          }`}
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 20V10l8 5-8 5z"/>
          </svg>
          <span className="text-xs mt-0.5">首页</span>
        </button>

        <button
          onClick={() => navigate('/discover')}
          className={`flex flex-col items-center py-1 px-4 rounded-lg transition-colors ${
            isActive('/discover') ? 'text-primary' : 'text-gray-500 hover:text-white'
          }`}
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </svg>
          <span className="text-xs mt-0.5">发现</span>
        </button>

        <button
          onClick={() => navigate('/publish')}
          className="flex items-center justify-center w-12 h-12 bg-primary rounded-full shadow-lg hover:bg-primary/80 transition-transform hover:scale-110"
        >
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
          </svg>
        </button>

        <button
          onClick={() => navigate('/profile')}
          className={`flex flex-col items-center py-1 px-4 rounded-lg transition-colors ${
            isActive('/profile') ? 'text-primary' : 'text-gray-500 hover:text-white'
          }`}
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
          <span className="text-xs mt-0.5">我的</span>
        </button>
      </div>
    </nav>
  );
}

export default BottomNav;
