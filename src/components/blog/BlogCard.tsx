import React from 'react';
import { Link } from 'react-router-dom';

export type BlogCardProps = {
  id: string;
  slug?: string;
  title: string;
  publishedAt: string;
  eyecatch: {
    url: string;
    alt?: string;
  };
  excerpt: string;
  category: {
    name: string;
    slug?: string;
  };
  variant?: 'normal' | 'featured' | 'compact';
};

/**
 * ブログ記事のカードコンポーネント
 * variant: 
 * - normal: 通常のカード表示（デフォルト）
 * - featured: 特集記事用の大きめ表示
 * - compact: コンパクトな表示（サイドバーなど）
 */
const BlogCard: React.FC<BlogCardProps> = ({
  id,
  slug,
  title,
  publishedAt,
  eyecatch,
  excerpt,
  category,
  variant = 'normal'
}) => {
  // 日付フォーマット
  const formattedDate = new Date(publishedAt).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });

  // リンク先の設定
  const linkUrl = `/blog/${slug || id}`;

  // バリアントによる条件付きレンダリング
  if (variant === 'featured') {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
        <div className="md:flex">
          <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
            <img 
              src={eyecatch.url} 
              alt={eyecatch.alt || title} 
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="md:w-1/2 p-6 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="bg-accent text-secondary-dark text-sm px-3 py-1 rounded-full">{category.name}</span>
                <span className="text-gray-500 text-sm">{formattedDate}</span>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-secondary-dark hover:text-primary transition-colors duration-300">
                <Link to={linkUrl}>{title}</Link>
              </h2>
              <p className="text-gray-700 mb-4">{excerpt}</p>
            </div>
            <Link 
              to={linkUrl}
              className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md transition-colors duration-300 inline-flex items-center self-start"
            >
              詳細を読む
              <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '10px', height: '10px' }} className="ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 flex items-center h-24">
        <div className="w-24 h-24 flex-shrink-0 overflow-hidden">
          <img 
            src={eyecatch.url} 
            alt={eyecatch.alt || title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-3 flex-grow">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-primary font-medium">{category.name}</span>
            <span className="text-xs text-gray-500">{formattedDate}</span>
          </div>
          <h3 className="text-sm font-medium text-secondary-dark line-clamp-2 hover:text-primary transition-colors duration-300">
            <Link to={linkUrl}>{title}</Link>
          </h3>
        </div>
      </div>
    );
  }

  // デフォルト: normalバリアント
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
      <div className="h-48 overflow-hidden">
        <img 
          src={eyecatch.url} 
          alt={eyecatch.alt || title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className="bg-accent text-secondary-dark text-sm px-3 py-1 rounded-full">{category.name}</span>
          <span className="text-gray-500 text-sm">{formattedDate}</span>
        </div>
        <h2 className="text-xl font-bold mb-3 text-secondary-dark hover:text-primary transition-colors duration-300">
          <Link to={linkUrl}>{title}</Link>
        </h2>
        <p className="text-gray-700 mb-4 line-clamp-3">{excerpt}</p>
        <Link 
          to={linkUrl}
          className="text-primary font-medium hover:text-primary-dark transition-colors duration-300 flex items-center"
        >
          続きを読む
          <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '10px', height: '10px' }} className="ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
