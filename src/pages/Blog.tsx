import { Link } from 'react-router-dom';

const Blog = () => {
  // ブログ記事のサンプルデータ
  const blogPosts = [
    {
      id: 1,
      title: '肩こりの原因と日常でできるケア方法',
      date: '2023-10-15',
      excerpt: '現代人に多い肩こりの原因と、自宅でできる簡単なストレッチや生活習慣の改善方法についてご紹介します。',
      image: '/images/blog01.jpg',
      category: '健康コラム'
    },
    {
      id: 2,
      title: '腰痛予防のための正しい姿勢と運動法',
      date: '2023-09-28',
      excerpt: '慢性的な腰痛に悩む方へ。正しい座り方や立ち方、効果的な腰痛予防エクササイズをご紹介します。',
      image: '/images/blog02.jpg',
      category: '健康コラム'
    },
    {
      id: 3,
      title: '鍼灸治療で改善する自律神経の乱れ',
      date: '2023-09-10',
      excerpt: '自律神経の乱れによる様々な症状と、鍼灸治療がどのように効果をもたらすのかを解説します。',
      image: '/images/blog03.jpg',
      category: '鍼灸'
    },
    {
      id: 4,
      title: '季節の変わり目に気をつけたい健康管理',
      date: '2023-08-22',
      excerpt: '季節の変わり目は体調を崩しやすい時期です。免疫力を高め、健康を維持するためのポイントをご紹介します。',
      image: '/images/blog04.jpg',
      category: '健康コラム'
    },
    {
      id: 5,
      title: 'スポーツ障害の予防と早期回復のコツ',
      date: '2023-08-05',
      excerpt: 'スポーツ愛好家の方必見！怪我の予防方法とケガをしてしまった場合の早期回復のためのアドバイスをご紹介します。',
      image: '/images/blog05.jpg',
      category: '整骨院'
    },
    {
      id: 6,
      title: '美容鍼の効果とアフターケア',
      date: '2023-07-20',
      excerpt: '注目を集める美容鍼の効果的なメカニズムと、効果を持続させるためのアフターケアについて解説します。',
      image: '/images/blog06.jpg',
      category: '美容鍼'
    }
  ];

  return (
    <div className="page-container">
      {/* ヒーローセクション */}
      {/* ヒーローセクション - インラインスタイル実装 */}
      <div style={{ position: 'relative', height: '320px' }}>
        <img src="/images/test.jpg" width="100%" height="320" alt="ブログ" style={{ objectFit: 'cover' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h1 style={{ color: 'white', fontSize: '2rem', fontWeight: 'bold', textAlign: 'center' }}>ブログ</h1>
        </div>
      </div>
      
      <div className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-secondary-dark">ブログ</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
          
          <div className="max-w-6xl mx-auto">
            {/* カテゴリーフィルター */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-secondary-dark transition-colors duration-300">
                すべて
              </button>
              <button className="bg-white text-secondary px-4 py-2 rounded-md border border-secondary hover:bg-accent transition-colors duration-300">
                健康コラム
              </button>
              <button className="bg-white text-secondary px-4 py-2 rounded-md border border-secondary hover:bg-accent transition-colors duration-300">
                鍼灸
              </button>
              <button className="bg-white text-secondary px-4 py-2 rounded-md border border-secondary hover:bg-accent transition-colors duration-300">
                整骨院
              </button>
              <button className="bg-white text-secondary px-4 py-2 rounded-md border border-secondary hover:bg-accent transition-colors duration-300">
                美容鍼
              </button>
            </div>

            {/* ブログ記事一覧 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map(post => (
                <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="bg-accent text-secondary-dark text-sm px-3 py-1 rounded-full">{post.category}</span>
                      <span className="text-gray-500 text-sm">{post.date}</span>
                    </div>
                    <h2 className="text-xl font-bold mb-3 text-secondary-dark hover:text-primary transition-colors duration-300">
                      <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </h2>
                    <p className="text-gray-700 mb-4">{post.excerpt}</p>
                    <Link 
                      to={`/blog/${post.id}`}
                      className="text-primary font-medium hover:text-primary-dark transition-colors duration-300 flex items-center"
                    >
                      続きを読む
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* ページネーション */}
            <div className="flex justify-center mt-12">
              <div className="flex space-x-2">
                <button className="w-10 h-10 rounded-md bg-secondary text-white flex items-center justify-center hover:bg-secondary-dark transition-colors duration-300">
                  1
                </button>
                <button className="w-10 h-10 rounded-md bg-white text-secondary border border-secondary hover:bg-accent transition-colors duration-300">
                  2
                </button>
                <button className="w-10 h-10 rounded-md bg-white text-secondary border border-secondary hover:bg-accent transition-colors duration-300">
                  3
                </button>
                <button className="w-10 h-10 rounded-md bg-white text-secondary border border-secondary hover:bg-accent transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
