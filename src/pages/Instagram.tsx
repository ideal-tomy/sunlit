import React, { useEffect } from 'react';

const Instagram: React.FC = () => {
  // SnapWidgetのスクリプトを読み込む
  useEffect(() => {
    // 既存のスクリプトがあれば削除（再レンダリング時の重複防止）
    const existingScript = document.getElementById('snapwidget-script');
    if (existingScript) {
      existingScript.remove();
    }

    // スクリプトの作成と追加
    const script = document.createElement('script');
    script.src = 'https://snapwidget.com/js/snapwidget.js';
    script.id = 'snapwidget-script';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // クリーンアップ関数
    return () => {
      const scriptToRemove = document.getElementById('snapwidget-script');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return (
    <div className="page-container">
      {/* ヒーローセクション */}
      <div style={{ position: 'relative', height: '320px' }}>
        <img src="/images/test.jpg" width="100%" height="320" alt="インスタグラム" style={{ objectFit: 'cover' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h1 style={{ color: 'white', fontSize: '2rem', fontWeight: 'bold', textAlign: 'center' }}>インスタグラム</h1>
        </div>
      </div>
      
      <div className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-secondary-dark">インスタグラム</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
          
          <div className="max-w-6xl mx-auto">
            <p className="text-center text-gray-700 mb-12">
              サンリットウエスト鍼灸整骨院の日常や施術の様子、
              健康情報などをインスタグラムでご覧いただけます。
              最新の投稿をチェックして、当院の雰囲気をお感じください。
            </p>
            
            {/* SnapWidget インスタグラム埋め込み */}
            <div className="instagram-container mx-auto mb-12 text-center">
              {/* 埋め込みiframe - SnapWidgetから生成されるコード */}
              <iframe 
                src="https://snapwidget.com/embed/1023495" 
                className="snapwidget-widget" 
                allowTransparency={true} 
                frameBorder="0" 
                scrolling="no" 
                style={{ 
                  border: 'none', 
                  overflow: 'hidden',
                  width: '100%',
                }}
                height="600"
                title="サンリットウエスト鍼灸整骨院のインスタグラム"
              ></iframe>
            </div>
            
            <div className="text-center mt-8">
              <a 
                href="https://www.instagram.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity duration-300"
              >
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  公式インスタグラムをフォロー
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instagram;
