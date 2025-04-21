import React from 'react';
import { Link } from 'react-router-dom';

export type CategoryBadgeProps = {
  name: string;
  slug?: string;
  size?: 'sm' | 'md' | 'lg';
  withLink?: boolean;
};

/**
 * u30abu30c6u30b4u30eau30fcu8868u793au7528u30d0u30c3u30b8u30b3u30f3u30ddu30fcu30cdu30f3u30c8
 */
const CategoryBadge: React.FC<CategoryBadgeProps> = ({ 
  name, 
  slug, 
  size = 'md',
  withLink = true 
}) => {
  // u30b5u30a4u30bau306bu3088u3063u3066u30b9u30bfu30a4u30ebu3092u5909u66f4
  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-3 py-1',
    lg: 'text-base px-4 py-1.5'
  };

  const badgeContent = (
    <span className={`bg-accent text-secondary-dark ${sizeClasses[size]} rounded-full inline-block`}>
      {name}
    </span>
  );

  // u30eau30f3u30afu3092u4ed8u3051u308bu5834u5408
  if (withLink && slug) {
    return (
      <Link to={`/blog/category/${slug}`}>
        {badgeContent}
      </Link>
    );
  }

  // u30eau30f3u30afu306au3057u306eu5834u5408
  return badgeContent;
};

export default CategoryBadge;
