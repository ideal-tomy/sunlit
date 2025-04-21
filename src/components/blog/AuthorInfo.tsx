import React from 'react';

export type AuthorInfoProps = {
  name: string;
  role?: string;
  profile?: string;
  image?: {
    url: string;
    alt?: string;
  };
  variant?: 'simple' | 'detailed';
};

/**
 * u8457u8005u60c5u5831u8868u793au30b3u30f3u30ddu30fcu30cdu30f3u30c8
 * variant:
 * - simple: u540du524du3068u5c0fu3055u3044u753bu50cfu306eu307fu306eu30b7u30f3u30d7u30ebu8868u793a
 * - detailed: u8a73u7d30u306au30d7u30edu30d5u30a3u30fcu30ebu3092u542bu3080u8868u793a
 */
const AuthorInfo: React.FC<AuthorInfoProps> = ({
  name,
  role,
  profile,
  image,
  variant = 'detailed'
}) => {
  // u30b7u30f3u30d7u30ebu8868u793au306eu5834u5408
  if (variant === 'simple') {
    return (
      <div className="flex items-center">
        {image && (
          <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
            <img 
              src={image.url} 
              alt={image.alt || `${name}u306eu30d7u30edu30d5u30a3u30fcu30ebu753bu50cf`} 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <span className="text-sm font-medium text-gray-700">{name}</span>
        {role && <span className="text-xs text-gray-500 ml-1">({role})</span>}
      </div>
    );
  }

  // u8a73u7d30u8868u793au306eu5834u5408
  return (
    <div className="flex items-start p-4 bg-gray-50 rounded-lg">
      {image && (
        <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 mr-4">
          <img 
            src={image.url} 
            alt={image.alt || `${name}u306eu30d7u30edu30d5u30a3u30fcu30ebu753bu50cf`} 
            className="w-full h-full object-cover border-2 border-white"
          />
        </div>
      )}
      <div>
        <div className="flex items-center mb-1">
          <h4 className="font-bold text-secondary-dark">{name}</h4>
          {role && <span className="text-sm text-gray-600 ml-2">{role}</span>}
        </div>
        {profile && <p className="text-sm text-gray-700">{profile}</p>}
      </div>
    </div>
  );
};

export default AuthorInfo;
