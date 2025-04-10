import { Link } from 'react-router-dom';
import TwoColumnMenu from '../components/TwoColumnMenu';

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
      
      <div className="py-12 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-sm mb-12">
            <p className="text-lg mb-4 text-gray-700">
              日常的な疲れ慢性的な不調など多くの症状に対応するメニューを用意しております。
              症状に合わせた部分集中コースや全体をまんべんなく施術する全身コースなど豊富なメニュー
              で辛い症状にアプローチをいたします。
            </p>
            <p className="text-lg mb-4 text-gray-700">
              当院では女性施術者も常勤しておりますので
              女性施術者をご希望の際は気兼ねなくお申し付けください。
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-secondary-dark">自由診療メニュー</h2>
          <p className="text-center text-lg mb-6 text-gray-700">お客様一人ひとりの症状に合わせたオーダーメイドの施術をご提供します</p>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

          {/* 整体メニュー（2カラム横並び） */}
          <TwoColumnMenu
            leftMenu={{
              title: '全身整体メニュー',
              items: [
                {
                  title: '全身整体',
                  price: '¥6,200',
                  initialPrice: '¥5,200',
                  duration: '60分',
                  description: '全身の調整を行い、身体全体のバランスを整えます。慢性的な疲れや不調にお悩みの方におすすめです。',
                  imageSrc: '/images/hero02.jpg',
                  imageAlt: '全身整体'
                }
              ]
            }}
            rightMenu={{
              title: 'メンテナンス整体メニュー',
              items: [
                {
                  title: 'メンテナンス整体',
                  price: '¥3,600',
                  initialPrice: '¥3,100',
                  duration: '30分',
                  description: '定期的なメンテナンスとして、気になる部分を重点的に施術します。忙しい方や部分的な不調にお悩みの方に最適です。',
                  imageSrc: '/images/IMG_0031.png',
                  imageAlt: 'メンテナンス整体'
                }
              ]
            }}
          />

          {/* 特別整体メニュー */}
          <div className="mb-12 bg-accent p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-secondary-dark">特別整体メニュー</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-secondary-dark">特別整体</h3>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-3xl font-bold text-primary">¥8,800<span className="text-sm text-gray-600">(税込)</span></p>
                  <p className="text-lg font-medium text-accent">初回 ¥7,800</p>
                </div>
                <p className="text-gray-700 mb-4">所要時間：90分</p>
                <p className="text-gray-700">全身の調整に加え、特に気になる部分に時間をかけて丁寧に施術します。長期的な不調や複合的な症状にお悩みの方におすすめです。</p>
              </div>
              <div className="flex items-center justify-center">
                <img src="/images/IMG_0158.jpg" alt="特別整体" className="rounded-lg shadow-md max-w-full h-auto" style={{ maxWidth: '300px', maxHeight: '200px' }} />
              </div>
            </div>
          </div>

          {/* その他のケアメニュー */}
          <div className="mb-12 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-secondary-dark border-b-2 border-primary pb-2">その他のケアメニュー</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-secondary-dark">足裏ケア</h3>
                <p className="text-3xl font-bold text-primary mb-2">¥3,600<span className="text-sm text-gray-600">(税込)</span></p>
                <p className="text-gray-700 mb-4">所要時間：30分</p>
                <p className="text-gray-700">足裏の反射区を刺激し、全身の血行促進や疲労回復を促します。むくみや冷え性の改善にも効果的です。</p>
              </div>
              <div className="flex items-center justify-center">
                <img src="/images/IMG_0042.jpg" alt="足裏ケア" className="rounded-lg shadow-md max-w-full h-auto" style={{ maxWidth: '300px', maxHeight: '200px' }} />
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-secondary-dark">眼精疲労ケア</h3>
                <p className="text-3xl font-bold text-primary mb-2">¥3,600<span className="text-sm text-gray-600">(税込)</span></p>
                <p className="text-gray-700 mb-4">所要時間：30分</p>
                <p className="text-gray-700">目の周りや頭部の緊張をほぐし、眼精疲労や頭痛の緩和を目指します。デスクワークやスマホ使用が多い方におすすめです。</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-secondary-dark">ファンクショナルカッピング</h3>
                <p className="text-3xl font-bold text-primary mb-2">¥2,500<span className="text-sm text-gray-600">(税込)</span></p>
                <p className="text-gray-700 mb-4">所要時間：20分</p>
                <p className="text-gray-700">吸引カップを使用して筋肉の緊張をほぐし、血行を促進します。肩こりや筋肉の凝りに効果的です。</p>
              </div>
              <div className="flex items-center justify-center">
                <img src="/images/IMG_0116.jpg" alt="ファンクショナルカッピング" className="rounded-lg shadow-md max-w-full h-auto" style={{ maxWidth: '300px', maxHeight: '200px' }} />
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-secondary-dark">極上ハンドケア</h3>
                <p className="text-3xl font-bold text-primary mb-2">¥1,900<span className="text-sm text-gray-600">(税込)</span></p>
                <p className="text-gray-700 mb-4">所要時間：15分</p>
                <p className="text-gray-700">手や腕の疲れをほぐし、血行を促進します。スマホやパソコン操作で手や腕に疲れを感じる方におすすめです。</p>
              </div>
            </div>
          </div>

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
