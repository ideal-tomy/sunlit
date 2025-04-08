import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* クリニック情報 */}
          <div>
            <h3 className="text-xl font-bold mb-4">サンリットウエスト鍼灸整骨院</h3>
            <p className="mb-2">〒123-4567</p>
            <p className="mb-2">東京都○○区○○町1-2-3</p>
            <p className="mb-2">TEL: 03-1234-5678</p>
            <p className="mb-2">診療時間: 9:00〜20:00</p>
            <p>定休日: 日曜・祝日</p>
          </div>

          {/* ナビゲーション */}
          <div>
            <h3 className="text-xl font-bold mb-4">メニュー</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white hover:text-primary transition-colors duration-300" onClick={() => window.scrollTo(0, 0)}>
                  トップ
                </Link>
              </li>
              <li>
                <Link to="/acupuncture" className="text-white hover:text-primary transition-colors duration-300" onClick={() => window.scrollTo(0, 0)}>
                  鍼灸
                </Link>
              </li>
              <li>
                <Link to="/private-treatment" className="text-white hover:text-primary transition-colors duration-300" onClick={() => window.scrollTo(0, 0)}>
                  自由診療
                </Link>
              </li>
              <li>
                <Link to="/insurance" className="text-white hover:text-primary transition-colors duration-300" onClick={() => window.scrollTo(0, 0)}>
                  保険診療
                </Link>
              </li>
              <li>
                <Link to="/staff" className="text-white hover:text-primary transition-colors duration-300" onClick={() => window.scrollTo(0, 0)}>
                  スタッフ紹介
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white hover:text-primary transition-colors duration-300" onClick={() => window.scrollTo(0, 0)}>
                  ブログ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white hover:text-primary transition-colors duration-300" onClick={() => window.scrollTo(0, 0)}>
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          {/* 診療内容 */}
          <div>
            <h3 className="text-xl font-bold mb-4">診療内容</h3>
            <ul className="space-y-2">
              <li>腰痛・肩こり</li>
              <li>スポーツ障害</li>
              <li>交通事故治療</li>
              <li>美容鍼</li>
              <li>小児はり</li>
              <li>不妊治療</li>
              <li>自律神経調整</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} サンリットウエスト鍼灸整骨院. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
