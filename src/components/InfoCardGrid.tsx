import React from 'react';

// 基本的なカード項目のインターフェース
interface BaseCardItem {
  icon: string;
  title: string;
  bgColor?: string;
  hideTitle?: boolean;
  hideIcon?: boolean;
}

// 情報カード項目のインターフェース
interface InfoCardItem extends BaseCardItem {
  description: string;
}

// メニューカード項目のインターフェース
interface MenuCardItem extends BaseCardItem {
  price: string;
  initialPrice?: string;
  duration: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
}

// メニューグループのインターフェース
interface MenuGroup {
  title: string;
  items: MenuCardItem[];
  hideTitle?: boolean;
  icon?: string;
  titleStyle?: React.CSSProperties;
  iconStyle?: React.CSSProperties;
}

// 共通のカードグリッドのプロパティ
interface InfoCardGridProps {
  // 情報カードの配列（通常のカード表示用）
  items?: InfoCardItem[];
  // メニューグループの配列（メニュー表示用）
  menuGroups?: MenuGroup[];
  columns?: 1 | 2 | 3;
  gap?: string;
  marginBottom?: string;
}

const InfoCardGrid: React.FC<InfoCardGridProps> = ({
  items = [],
  menuGroups = [],
  columns = 2,
  gap = 'gap-8 md:gap-16',
  marginBottom = 'mb-8'
}) => {
  // カラム数に応じたグリッドクラスを設定
  const gridClass = columns === 1 
    ? 'grid-cols-1' 
    : columns === 3 
      ? 'grid-cols-1 md:grid-cols-3' 
      : 'grid-cols-1 md:grid-cols-2';

  // 単一の情報カードをレンダリングする関数
  const renderInfoCard = (item: InfoCardItem, index: number) => (
    <div 
      key={index} 
      className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      <div className="px-6 pt-5">
        <div className="flex items-center mb-4">
          <span className="material-icons text-2xl text-primary mr-3">{item.icon}</span>
          {!item.hideTitle && (
            <h3 className="text-xl font-bold text-secondary-dark">
              {item.title}
            </h3>
          )}
        </div>
        <p className="text-gray-700 leading-relaxed pb-5">
          {item.description}
        </p>
      </div>
    </div>
  );

  // 単一のメニュー項目をレンダリングする関数
  const renderMenuItem = (item: MenuCardItem, index: number | string) => (
    <div 
      key={index} 
      className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:shadow-lg hover:-translate-y-1 mb-4"
    >
      <div className="px-6 pt-5">
        <div className="flex items-center justify-center mb-4">
          {!item.hideIcon && (
            <span className="material-icons text-2xl mr-3" style={{ color: '#3377f9' }}>{item.icon || 'spa'}</span>
          )}
          {!item.hideTitle && (
            <h3 className="text-xl font-bold text-secondary-dark">{item.title}</h3>
          )}
        </div>
        <div className="mb-3 text-center">
          <p className="text-2xl font-bold text-primary">{item.price}</p>
          {item.initialPrice && (
            <p className="text-lg font-medium text-accent mt-1">初回 {item.initialPrice}</p>
          )}
        </div>
        <p className="text-gray-700 mb-3 text-center">所要時間：{item.duration}</p>
        <p className="text-gray-700 leading-relaxed pb-4 text-center">{item.description}</p>
        {item.imageSrc && (
          <div className="flex justify-center mt-3 mb-2">
            <img 
              src={item.imageSrc} 
              alt={item.imageAlt || item.title} 
              className="rounded-lg shadow-sm max-w-full h-auto" 
              style={{ maxWidth: '400px', maxHeight: '280px' }} 
            />
          </div>
        )}
      </div>
    </div>
  );

  // メニューグループをレンダリングする関数
  const renderMenuGroup = (group: MenuGroup, index: number) => (
    <div 
      key={index} 
      className="bg-white p-6 rounded-xl shadow-md h-full transform transition duration-300 hover:shadow-lg"
    >
      {!group.hideTitle && (
        <div className="flex items-center justify-center mb-5 pb-3 border-b border-primary rounded-lg p-2" style={group.titleStyle || {}}>
          <span className="material-icons text-2xl mr-3" style={group.iconStyle || {}}>{group.icon || 'menu_book'}</span>
          <h2 className="text-2xl font-bold text-secondary-dark">{group.title}</h2>
        </div>
      )}
      <div className="flex flex-col h-full">
        {group.items.map((item, idx) => renderMenuItem(item, index + "-" + idx))}
      </div>
    </div>
  );

  // 情報カードのレンダリング
  if (items.length > 0) {
    return (
      <div className={`grid ${gridClass} ${gap} ${marginBottom}`}>
        {items.map((item, index) => renderInfoCard(item, index))}
      </div>
    );
  }

  // メニューグループのレンダリング
  if (menuGroups.length > 0) {
    return (
      <div className={`grid ${gridClass} ${gap} ${marginBottom}`}>
        {menuGroups.map((group, index) => renderMenuGroup(group, index))}
      </div>
    );
  }

  return null;
};

export default InfoCardGrid;
