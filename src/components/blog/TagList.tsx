import React from 'react';
import { Link } from 'react-router-dom';

type Tag = {
  id: string;
  name: string;
  slug?: string;
};

export type TagListProps = {
  tags: Tag[];
  variant?: 'default' | 'compact';
};

/**
 * タグ一覧表示コンポーネント
 */
const TagList: React.FC<TagListProps> = ({ 
  tags, 
  variant = 'default' 
}) => {
  if (!tags || tags.length === 0) {
    return null;
  }

  const variantClasses = {
    default: 'px-3 py-1 bg-gray-100 text-gray-700 hover:bg-gray-200',
    compact: 'px-2 py-0.5 bg-gray-50 text-gray-600 hover:bg-gray-100 text-sm'
  };

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map(tag => (
        <Link 
          key={tag.id} 
          to={`/blog/tag/${tag.slug || tag.id}`}
          className={`${variantClasses[variant]} rounded-md transition-colors duration-300`}
        >
          #{tag.name}
        </Link>
      ))}
    </div>
  );
};

export default TagList;
