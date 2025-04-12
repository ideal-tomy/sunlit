import React from 'react';

// 基本的なカード項目のインターフェース
interface BaseCardItem {
  icon: string;
  title: string;
  bgColor?: string;
  hideTitle?: boolean;
}

// メニューカード項目のインターフェース
interface MenuCardItem extends BaseCardItem {
  price: string;
  initialPrice?: string;
  duration: string;
  description: string;
}

// メニューグループのインターフェース
interface MenuGroup {
  title: string;
  items: MenuCardItem[];
  hideTitle?: boolean;
  icon?: string;
}

// 1カラムカードのプロパティ
interface OneColumnCardProps {
  // メニューグループの配列（メニュー表示用）
  menuGroups?: MenuGroup[];
  gap?: string;
  marginBottom?: string;
}

const OneColumnCard: React.FC<OneColumnCardProps> = ({
  menuGroups = [],
  gap = 'gap-8',
  marginBottom = 'mb-8'
}) => {
  // 単一のメニュー項目をレンダリングする関数
  const renderMenuItem = (item: MenuCardItem, index: number | string) => (
    <div 
      key={index} 
      className="bg-white rounded-xl overflow-hidden transform transition duration-300 hover:-translate-y-1 mb-8"
    >
      <div className="p-6">
        <div className="flex items-center justify-center mb-5">
          <span className="material-icons text-3xl text-primary mr-3">{item.icon || 'spa'}</span>
          {!item.hideTitle && (
            <h3 className="text-2xl font-bold text-secondary-dark">{item.title}</h3>
          )}
        </div>
        
        <div className="mb-4 text-center bg-gradient-to-r from-primary-light to-primary-light bg-opacity-10 py-3 px-4 rounded-lg">
          <p className="text-3xl font-bold text-primary">{item.price}<span className="text-sm text-gray-600 ml-1">(税込)</span></p>
          {item.initialPrice && (
            <p className="text-lg font-medium text-accent mt-2">初回 {item.initialPrice}</p>
          )}
          <p className="text-gray-700 mt-2 font-medium">所要時間：{item.duration}</p>
        </div>
        
        <p className="text-gray-700 leading-relaxed mb-6 text-center text-lg">{item.description}</p>
      </div>
    </div>
  );

  // メニューグループをレンダリングする関数
  const renderMenuGroup = (group: MenuGroup, index: number) => (
    <div 
      key={index} 
      className="bg-white p-6 rounded-xl h-full transform transition duration-300"
    >
      {!group.hideTitle && (
        <div className="flex items-center justify-center mb-6 pb-3 border-b-2 border-primary">
          <span className="material-icons text-3xl text-primary mr-3">{group.icon || 'menu_book'}</span>
          <h2 className="text-2xl font-bold text-secondary-dark">{group.title}</h2>
        </div>
      )}
      <div className="flex flex-col h-full">
        {group.items.map((item, idx) => renderMenuItem(item, index + "-" + idx))}
      </div>
    </div>
  );

  // メニューグループのレンダリング
  if (menuGroups.length > 0) {
    return (
      <div className={`grid grid-cols-1 ${gap} ${marginBottom}`}>
        {menuGroups.map((group, index) => renderMenuGroup(group, index))}
      </div>
    );
  }

  return null;
};

export default OneColumnCard;
