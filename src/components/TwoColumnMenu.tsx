import React from 'react';

interface MenuItemProps {
  title: string;
  price: string;
  initialPrice?: string;
  duration: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  hideTitle?: boolean;
}

interface TwoColumnMenuProps {
  leftMenu: {
    title: string;
    items: MenuItemProps[];
    hideTitle?: boolean;
  };
  rightMenu: {
    title: string;
    items: MenuItemProps[];
    hideTitle?: boolean;
  };
}

const TwoColumnMenu: React.FC<TwoColumnMenuProps> = ({ leftMenu, rightMenu }) => {
  // 単一メニュー項目のレンダリング関数
  const renderMenuItem = (item: MenuItemProps) => (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      {!item.hideTitle && <h3 className="text-xl font-bold mb-2 text-secondary-dark">{item.title}</h3>}
      <div className="flex justify-between items-center mb-2">
        <p className="text-3xl font-bold text-primary">{item.price}<span className="text-sm text-gray-600">(税込)</span></p>
        {item.initialPrice && (
          <p className="text-lg font-medium text-accent">初回 {item.initialPrice}</p>
        )}
      </div>
      <p className="text-gray-700 mb-4">所要時間：{item.duration}</p>
      <p className="text-gray-700">{item.description}</p>
    </div>
  );

  // メニューカラムのレンダリング関数
  const renderMenuColumn = (menu: { title: string; items: MenuItemProps[], hideTitle?: boolean }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg h-full">
      {!menu.hideTitle && <h2 className="text-2xl font-bold mb-4 text-secondary-dark border-b-2 border-primary pb-2">{menu.title}</h2>}
      <div className="flex flex-col h-full">
        {menu.items.map((item, index) => (
          <React.Fragment key={index}>
            {renderMenuItem(item)}
          </React.Fragment>
        ))}
        {menu.items.length > 0 && menu.items[0].imageSrc && (
          <div className="flex items-center justify-center mt-auto">
            <img 
              src={menu.items[0].imageSrc} 
              alt={menu.items[0].imageAlt} 
              className="rounded-lg shadow-md max-w-full h-auto" 
              style={{ maxWidth: '300px', maxHeight: '200px' }} 
            />
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      {renderMenuColumn(leftMenu)}
      {renderMenuColumn(rightMenu)}
    </div>
  );
};

export default TwoColumnMenu;
