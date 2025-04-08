import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // メニュー項目
  const menuItems = [
    { name: 'トップ', path: '/' },
    { name: '鍼灸', path: '/acupuncture' },
    { name: '自由診療', path: '/private-treatment' },
    { name: '保険診療', path: '/insurance' },
    { name: 'スタッフ紹介', path: '/staff' },
    { name: 'ブログ', path: '/blog' },
    { name: 'お問い合わせ', path: '/contact' },
  ];

  // スクロール検出
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // ページ変更時にメニューを閉じる
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const textShadowStyle = {
    textShadow: '0px 0px 2px rgba(0, 0, 0, 0.8)'
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-black bg-opacity-60'}`}>
      <div className="container mx-auto px-4 pt-16">
        <div className="flex justify-between items-center py-4">
          {/* ロゴ */}
          <Link to="/" className="flex items-center">
            <span 
              className={`text-2xl font-bold ${isScrolled ? 'text-primary-dark' : 'text-white'}`}
              style={!isScrolled ? textShadowStyle : {}}
            >
              サンリットウエスト
            </span>
            <span 
              className={`ml-2 text-sm ${isScrolled ? 'text-primary' : 'text-white'}`}
              style={!isScrolled ? textShadowStyle : {}}
            >
              鍼灸整骨院
            </span>
          </Link>

          {/* デスクトップメニュー */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-primary transition-colors duration-300 font-medium`}
                style={!isScrolled ? textShadowStyle : {}}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:0312345678"
              className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md transition-colors duration-300 font-medium"
            >
              ご予約
            </a>
          </div>

          {/* モバイルメニューボタン */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
            aria-label="メニュー"
          >
            <svg
              className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* モバイルメニュー */}
        <div 
          className={`md:hidden fixed top-[72px] right-0 h-[calc(100vh-72px)] w-[80%] bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
          style={{ overflowY: 'auto' }}
        >
          <div className="flex flex-col space-y-4 py-4 px-4">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-800 hover:text-primary transition-colors duration-300 font-medium py-2"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:0312345678"
              className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md transition-colors duration-300 font-medium text-center mt-4"
            >
              ご予約
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
