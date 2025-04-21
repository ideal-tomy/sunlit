import React from 'react';
import { Link } from 'react-router-dom';

type RelatedPost = {
  id: string;
  slug?: string;
  title: string;
  eyecatch: {
    url: string;
    alt?: string;
  };
};

export type RelatedPostsProps = {
  posts: RelatedPost[];
  title?: string;
};

/**
 * u95a2u9023u8a18u4e8bu8868u793au30b3u30f3u30ddu30fcu30cdu30f3u30c8
 */
const RelatedPosts: React.FC<RelatedPostsProps> = ({ 
  posts,
  title = 'u95a2u9023u8a18u4e8b' 
}) => {
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <div className="mt-10 pt-6 border-t border-gray-200">
      <h3 className="text-xl font-bold mb-4 text-secondary-dark flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '10px', height: '10px' }} className="mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map(post => (
          <Link 
            key={post.id}
            to={`/blog/${post.slug || post.id}`} 
            className="flex bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-all duration-300 hover:translate-y-[-2px]"
          >
            <div className="w-1/3">
              <img 
                src={post.eyecatch.url} 
                alt={post.eyecatch.alt || post.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-2/3 p-3">
              <h4 className="text-secondary-dark font-medium line-clamp-2">{post.title}</h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
