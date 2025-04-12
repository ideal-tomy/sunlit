import { Link } from 'react-router-dom';
import InfoCardGrid from '../components/InfoCardGrid';

const PrivateTreatment = () => {
  return (
    <div className="page-container">
      {/* ヒーローセクション */}
      <div style={{ position: 'relative', height: '320px' }}>
        <img src="/images/01.png" width="100%" height="320" alt="自由診療" style={{ objectFit: 'cover' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h1 style={{ color: 'white', fontSize: '2rem', fontWeight: 'bold', textAlign: 'center' }}>自由診療</h1>
        </div>
      </div>
      
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-sm mb-12">
            <h2 className="text-2xl font-bold mb-6 text-secondary-dark text-center">サンリットウエストの自由診療</h2>
            
            <div className="bg-accent bg-opacity-10 p-4 rounded-lg mb-6 border-l-4 border-primary">
              <p className="text-lg text-gray-700">
                日常的な疲れ慢性的な不調など多くの症状に対応するメニューを用意しております。
                症状に合わせた部分集中コースや全体をまんべんなく施術する全身コースなど豊富なメニュー
                で辛い症状にアプローチをいたします。
              </p>
            </div>
            
            <p className="text-lg mb-4 text-gray-700">
              当院では女性施術者も常勤しておりますので
              女性施術者をご希望の際は気兼ねなくお申し付けください。
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-secondary-dark">自由診療メニュー</h2>
          <p className="text-center text-lg mb-6 text-gray-700">お客様一人ひとりの症状に合わせたオーダーメイドの施術をご提供します</p>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

          {/* 整体メニュー（2カラム横並び） */}
          <InfoCardGrid
            menuGroups={[
              {
                title: '全身整体メニュー',
                icon: 'menu_book',
                items: [
                  {
                    icon: 'spa',
                    title: '全身整体',
                    price: '¥6,200',
                    initialPrice: '¥5,200',
                    duration: '60分',
                    description: '全身の調整を行い、身体全体のバランスを整えます。慢性的な疲れや不調にお悩みの方におすすめです。',
                    imageSrc: '/images/hero02.jpg',
                    imageAlt: '全身整体'
                  }
                ]
              },
              {
                title: 'メンテナンス整体メニュー',
                icon: 'menu_book',
                items: [
                  {
                    icon: 'spa',
                    title: 'メンテナンス整体',
                    price: '¥3,600',
                    initialPrice: '¥3,100',
                    duration: '30分',
                    description: '定期的なメンテナンスとして、気になる部分を重点的に施術します。忙しい方や部分的な不調にお悩みの方に最適です。',
                    imageSrc: '/images/IMG_0031.png',
                    imageAlt: 'メンテナンス整体'
                  }
                ]
              }
            ]}
            columns={2}
            gap="gap-8 md:gap-16"
            marginBottom="mb-12"
          />

          {/* 特別整体メニュー */}
          <InfoCardGrid
            menuGroups={[
              {
                title: '特別整体メニュー',
                icon: 'stars',
                items: [
                  {
                    icon: 'attach_money',
                    title: '料金・所要時間',
                    price: '¥8,800',
                    initialPrice: '¥7,800',
                    duration: '90分',
                    description: '全身の調整に加え、特に気になる部分に時間をかけて丁寧に施術します。長期的な不調や複合的な症状にお悩みの方におすすめです。',
                    bgColor: 'bg-primary bg-opacity-10'
                  }
                ]
              }
            ]}
            columns={1}
            gap="gap-8"
            marginBottom="mb-12"
          />
          
          {/* 画像セクション */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="flex items-center justify-center">
              <img src="/images/IMG_0158.jpg" alt="特別整体" className="rounded-lg shadow-md max-w-full h-auto" style={{ maxWidth: '300px', maxHeight: '200px' }} />
            </div>
            <div className="flex items-center justify-center">
              <img src="/images/IMG_0158.jpg" alt="特別整体" className="rounded-lg shadow-md max-w-full h-auto" style={{ maxWidth: '300px', maxHeight: '200px' }} />
            </div>
          </div>

          {/* その他のケアメニュー */}
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-secondary-dark">その他のケアメニュー</h2>
          <p className="text-center text-lg mb-6 text-gray-700">お客様のお悩みに合わせたケアメニューをご用意しております</p>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
          
          <InfoCardGrid
            menuGroups={[
              {
                title: '足裏ケア',
                icon: 'spa',
                items: [
                  {
                    icon: 'spa',
                    title: '足裏ケア',
                    price: '¥3,600',
                    duration: '30分',
                    description: '足裏の反射区を刺激し、全身の血行促進や疲労回復を促します。むくみや冷え性の改善にも効果的です。',
                    imageSrc: '/images/IMG_0042.jpg',
                    imageAlt: '足裏ケア'
                  }
                ]
              }
            ]}
            columns={1}
            gap="gap-8"
            marginBottom="mb-8"
          />
          
          {/* 足裏ケアの画像 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="flex items-center justify-center">
              <img src="/images/IMG_0042.jpg" alt="足裏ケア" className="rounded-lg shadow-md max-w-full h-auto" style={{ maxWidth: '300px', maxHeight: '200px' }} />
            </div>
            <div className="flex items-center justify-center">
              <img src="/images/IMG_0042.jpg" alt="足裏ケア" className="rounded-lg shadow-md max-w-full h-auto" style={{ maxWidth: '300px', maxHeight: '200px' }} />
            </div>
          </div>

          <InfoCardGrid
            menuGroups={[
              {
                title: '眼精疲労ケア',
                icon: 'visibility',
                items: [
                  {
                    icon: 'visibility',
                    title: '眼精疲労ケア',
                    price: '¥3,600',
                    duration: '30分',
                    description: '目の周りや頭部の締張をほぐし、眼精疲労や頭痛の緩和を目指します。デスクワークやスマホ使用が多い方におすすめです。',
                    imageSrc: '/images/IMG_0044.jpg',
                    imageAlt: '眼精疲労ケア'
                  }
                ]
              }
            ]}
            columns={1}
            gap="gap-8"
            marginBottom="mb-8"
          />
          
          {/* 眼精疲労ケアの画像 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="flex items-center justify-center">
              <img src="/images/IMG_0044.jpg" alt="眼精疲労ケア" className="rounded-lg shadow-md max-w-full h-auto" style={{ maxWidth: '300px', maxHeight: '200px' }} />
            </div>
            <div className="flex items-center justify-center">
              <img src="/images/IMG_0044.jpg" alt="眼精疲労ケア" className="rounded-lg shadow-md max-w-full h-auto" style={{ maxWidth: '300px', maxHeight: '200px' }} />
            </div>
          </div>

          <InfoCardGrid
            menuGroups={[
              {
                title: 'ファンクショナルカッピング',
                icon: 'fitness_center',
                items: [
                  {
                    icon: 'fitness_center',
                    title: 'ファンクショナルカッピング',
                    price: '¥2,500',
                    duration: '20分',
                    description: '吸引カップを使用して筋肉の締張をほぐし、血行を促進します。肩こりや筋肉の凝りに効果的です。',
                    imageSrc: '/images/IMG_0116.jpg',
                    imageAlt: 'ファンクショナルカッピング'
                  }
                ]
              }
            ]}
            columns={1}
            gap="gap-8"
            marginBottom="mb-8"
          />
          
          {/* ファンクショナルカッピングの画像 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-12">
            <div className="flex items-center justify-center">
              <img src="/images/IMG_0116.jpg" alt="ファンクショナルカッピング" className="rounded-lg shadow-md max-w-full h-auto" style={{ maxWidth: '300px', maxHeight: '200px' }} />
            </div>
            <div className="flex items-center justify-center">
              <img src="/images/IMG_0116.jpg" alt="ファンクショナルカッピング" className="rounded-lg shadow-md max-w-full h-auto" style={{ maxWidth: '300px', maxHeight: '200px' }} />
            </div>
          </div>

          <InfoCardGrid
            menuGroups={[
              {
                title: '極上ハンドケア',
                icon: 'pan_tool',
                items: [
                  {
                    icon: 'pan_tool',
                    title: '極上ハンドケア',
                    price: '¥1,900',
                    duration: '15分',
                    description: '手や腕の疲れをほぐし、血行を促進します。スマホやパソコン操作で手や腕に疲れを感じる方におすすめです。',
                    bgColor: 'bg-primary bg-opacity-10'
                  }
                ]
              }
            ]}
            columns={1}
            gap="gap-8"
            marginBottom="mb-12"
          />

          <div className="max-w-4xl mx-auto bg-accent p-6 rounded-lg shadow-md mb-12">
            <h3 className="text-xl font-bold mb-4 text-secondary-dark">注意事項</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>保険診療・各オプションも対応可能です。詳しくはスタッフにお尋ねください。</li>
              <li>状態や症状により、施術時間や内容が変更になる場合があります。</li>
              <li>ご予約の変更・キャンセルは、前日までにご連絡ください。</li>
            </ul>
          </div>

          <div className="text-center mb-12">
            <Link to="/contact" className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-md">
              ご予約・お問い合わせはこちら
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateTreatment;
