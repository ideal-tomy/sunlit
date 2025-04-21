import React from 'react';
import { Link, useParams } from 'react-router-dom';
import AuthorInfo from '../components/blog/AuthorInfo';
import CategoryBadge from '../components/blog/CategoryBadge';
import TagList from '../components/blog/TagList';
import RelatedPosts from '../components/blog/RelatedPosts';

// ブログ記事のインターフェース定義（microCMS用のフィールド構造）
interface BlogPost {
  id: string;
  title: string;
  publishedAt: string;
  updatedAt: string;
  category: {
    id: string;
    name: string;
  };
  eyecatch: {
    url: string;
    height: number;
    width: number;
  };
  content: string;
  author: {
    name: string;
    profile: string;
    image: {
      url: string;
    };
  };
  relatedPosts?: {
    id: string;
    title: string;
    eyecatch: {
      url: string;
    };
  }[];
  tags?: {
    id: string;
    name: string;
  }[];
}

// サンプルデータ（静的データ）
const sampleBlogPost: BlogPost = {
  id: "sample-post-1",
  title: "肩こりの原因と日常でできる簡単なケア方法",
  publishedAt: "2023-10-15",
  updatedAt: "2023-10-15",
  category: {
    id: "health-column",
    name: "健康コラム"
  },
  eyecatch: {
    url: "/03-01.png",
    height: 600,
    width: 1200
  },
  content: `
    <h2>肩こりに悩む現代人</h2>
    <p>
      デスクワークやスマートフォンの長時間使用など、現代の生活習慣は肩こりを引き起こす要因がたくさんあります。
      厚生労働省の調査によると、日本人の約70%が肩こりの症状を経験したことがあるとされています。
    </p>
    <p>
      肩こりは単なる不快感だけでなく、頭痛や吐き気、めまいなどの二次的な症状を引き起こすこともあり、日常生活に大きな影響を与えることがあります。
    </p>
    
    <h2>肩こりの主な原因</h2>
    <ol>
      <li>
        <strong>長時間同じ姿勢での作業</strong>
        <p>デスクワークやスマートフォンの使用など、同じ姿勢を長時間続けることで、筋肉が緊張し血行不良を起こします。</p>
      </li>
      <li>
        <strong>姿勢の悪さ</strong>
        <p>猫背や前傾姿勢は首や肩の筋肉に余計な負担をかけます。</p>
      </li>
      <li>
        <strong>ストレス</strong>
        <p>精神的なストレスは無意識のうちに筋肉を緊張させ、肩こりを悪化させます。</p>
      </li>
      <li>
        <strong>睡眠環境</strong>
        <p>枕の高さや硬さが合わない、寝姿勢が不適切な場合も肩こりの原因となります。</p>
      </li>
    </ol>
    
    <h2>日常でできる肩こり改善策</h2>
    <h3>1. 定期的なストレッチ</h3>
    <p>
      デスクワーク中でも簡単にできるストレッチを紹介します。これらは1時間に1回程度行うと効果的です。
    </p>
    <ul>
      <li>首を左右にゆっくり傾ける（各側15秒キープ）</li>
      <li>肩を大きく回す（前回し10回、後ろ回し10回）</li>
      <li>両手を組んで頭の上で伸ばす（10秒キープ）</li>
    </ul>
    
    <h3>2. 正しい姿勢の保持</h3>
    <p>
      デスクワークでは以下の点に注意しましょう：
    </p>
    <ul>
      <li>椅子に深く腰掛け、背筋を伸ばす</li>
      <li>パソコンの画面は目の高さかやや下に設置</li>
      <li>キーボードを打つときは肘が90度になるように調整</li>
    </ul>
    
    <h3>3. 適度な運動</h3>
    <p>
      ウォーキングや水泳など、全身を使う有酸素運動は血行を促進し、肩こりの改善に効果的です。
      週に2〜3回、30分程度の運動を習慣にすることをお勧めします。
    </p>
    
    <h3>4. 温冷療法</h3>
    <p>
      入浴やホットタオルで肩の筋肉を温めることで血行が良くなります。
      また、慢性的な痛みには氷のうなどで冷やすことも効果的です。
    </p>
    
    <h2>鍼灸整骨院での肩こり治療</h2>
    <p>
      自己ケアでは改善が見られない場合、専門的な治療を受けることをお勧めします。
      サンリットウエスト鍼灸整骨院では、以下のような肩こり治療を提供しています：
    </p>
    <ul>
      <li>筋肉の緊張をほぐす鍼治療</li>
      <li>血行を促進する灸治療</li>
      <li>筋膜リリースによる深層筋へのアプローチ</li>
      <li>日常生活での姿勢改善アドバイス</li>
    </ul>
    
    <p>
      肩こりは放置すると慢性化し、改善が難しくなります。
      早めの対処で快適な毎日を取り戻しましょう。症状でお悩みの方は、お気軽に当院までご相談ください。
    </p>
  `,
  author: {
    name: "落合 竹一",
    profile: "サンリットウエスト鍼灸整骨院 院長。柔道整復師・鍼灸師の資格を持ち、20年以上の臨床経験を活かした施術を提供。",
    image: {
      url: "/03-01.png"
    }
  },
  relatedPosts: [
    {
      id: "sample-post-2",
      title: "腰痛予防のための正しい姿勢と運動法",
      eyecatch: {
        url: "/03-01.png"
      }
    },
    {
      id: "sample-post-3",
      title: "鍼灸治療で改善する自律神経の乱れ",
      eyecatch: {
        url: "/03-01.png"
      }
    }
  ],
  tags: [
    {
      id: "shoulder-pain",
      name: "肩こり"
    },
    {
      id: "self-care",
      name: "セルフケア"
    },
    {
      id: "stretching",
      name: "ストレッチ"
    }
  ]
};

const BlogPost: React.FC = () => {
  // 実際のアプリではURLパラメータからIDを取得し、APIから記事データを取得します
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id } = useParams<{ id: string }>();
  // 本来はIDを使用してAPIから取得するが、サンプルとして静的データを使用
  const post = sampleBlogPost;
  // 注: 将来的な実装では次のようにidを使用します
  // const post = fetchPostById(id);
  console.log(`記事ID: ${id}を表示中（サンプルデータを使用）`);

  // 日付のフォーマット関数
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
  };

  return (
    <div className="page-container">
      {/* ヒーローセクション */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img 
          src={post.eyecatch.url} 
          className="w-full h-full object-cover object-center"
          alt={post.title} 
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-white text-2xl md:text-4xl font-bold text-center max-w-3xl px-4">
            {post.title}
          </h1>
        </div>
      </div>
      
      <div className="py-8 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
            {/* 記事メタ情報 */}
            <div className="flex flex-wrap justify-between items-center mb-6 pb-4 border-b border-gray-200">
              <div className="flex flex-wrap items-center mb-2 md:mb-0">
                <div className="mr-3 mb-2 md:mb-0">
                  <CategoryBadge name={post.category.name} slug={post.category.id} size="md" />
                </div>
                <span className="text-gray-500 text-sm">
                  公開: {formatDate(post.publishedAt)}
                </span>
                {post.updatedAt !== post.publishedAt && (
                  <span className="text-gray-500 text-sm ml-3">
                    更新: {formatDate(post.updatedAt)}
                  </span>
                )}
              </div>
              
              {/* SNSシェアボタン */}
              <div className="flex space-x-2">
                <button className="text-blue-600 hover:text-blue-800 transition-colors p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                  </svg>
                </button>
                <button className="text-blue-400 hover:text-blue-600 transition-colors p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </button>
              </div>
            </div>
            
            {/* 著者情報 */}
            <AuthorInfo
              name={post.author.name}
              role=""
              profile={post.author.profile}
              image={{
                url: post.author.image.url,
                alt: `${post.author.name}のプロフィール画像`
              }}
              variant="detailed"
            />
            
            {/* 記事本文 */}
            <div 
              className="prose prose-lg max-w-none mb-8 prose-headings:text-secondary-dark prose-a:text-primary hover:prose-a:text-primary-dark prose-img:rounded-md"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* タグ */}
            {post.tags && post.tags.length > 0 && (
              <div className="mb-6">
                <TagList tags={post.tags} variant="default" />
              </div>
            )}
            
            {/* 関連記事 */}
            {post.relatedPosts && post.relatedPosts.length > 0 && (
              <RelatedPosts posts={post.relatedPosts} title="関連記事" />
            )}
            
            {/* 戻るボタン */}
            <div className="mt-8 text-center">
              <Link 
                to="/blog"
                className="inline-flex items-center text-white bg-primary hover:bg-primary-dark transition-colors px-4 py-2 rounded-md shadow-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-1" style={{ width: '10px', height: '10px' }} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                ブログ一覧に戻る
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;