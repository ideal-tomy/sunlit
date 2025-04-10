import TwoColumnMenu from '../components/TwoColumnMenu';

const Acupuncture = () => {
  return (
    <div className="page-container">
      {/* ヒーローセクション - imgタグで実装 */}
      <div style={{ position: 'relative', height: '320px' }}>
        <img src="/images/test.jpg" width="100%" height="320" alt="鍼灸治療" style={{ objectFit: 'cover' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h1 style={{ color: 'white', fontSize: '2rem', fontWeight: 'bold', textAlign: 'center' }}>鍼灸治療</h1>
        </div>
      </div>
      
      <div className="py-12 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-sm mb-12">
            <p className="text-lg mb-4 text-gray-700">
              症状に合わせた完全オーダーメイドの鍼灸治療で皆様のお悩みを改善致します。
              慢性的な肩コリや、腰痛、自律神経失調、女性特有の悩み・更年期障害、
              昨今多くの症状や疾患で悩んでいる方が多くいらっしゃると思います。
            </p>
            <p className="text-lg mb-4 text-gray-700">
              当院の鍼灸治療はそんな様々な症状でお困りの方に一人一人違った形でアプローチをすること
              を心がけています。
            </p>
            <p className="text-lg mb-4 text-gray-700">
              当院の鍼灸治療はコリや疲れに対する局所治療は勿論ですが、
              気・血の滞りを改善する為の全身への経絡治療も行います。
            </p>
            <p className="text-lg mb-6 text-gray-700">
              気・血は身体の中を絶えず巡っていますが、疲労や精神的なトラブルで巡りが悪くなることが
              多いです。巡りが悪くなることで肩コリや頭痛、強い生理痛などを起こしてしまいます。
              当院では気・血の流れを改善し根本的な不調を改善することを心がけております。
            </p>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-secondary-dark">鍼灸メニュー</h1>
          <p className="text-center text-lg mb-6 text-gray-700">東洋医学の知恵を取り入れた完全オーダーメイドの施術で症状を改善します</p>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
          
          <div className="max-w-4xl mx-auto">
            {/* 鍼灸メニュー（2カラム横並び） */}
            <TwoColumnMenu
              leftMenu={{
                title: '全身鍼灸メニュー',
                items: [
                  {
                    title: '全身鍼灸',
                    price: '¥6,900',
                    initialPrice: '¥5,900',
                    duration: '60分',
                    description: '全身の経絡に沿って鍼灸治療を行い、身体全体のバランスを整えます。慢性的な疲れや様々な不調にお悩みの方におすすめです。',
                    imageSrc: '/images/acupuncture01.jpg',
                    imageAlt: '全身鍼灸'
                  }
                ]
              }}
              rightMenu={{
                title: 'メンテナンス鍼灸メニュー',
                items: [
                  {
                    title: 'メンテナンス鍼灸',
                    price: '¥4,600',
                    initialPrice: '¥4,100',
                    duration: '30分',
                    description: '定期的なメンテナンスとして、気になる部分を重点的に施術します。忙しい方や部分的な不調にお悩みの方に最適です。',
                    imageSrc: '/images/IMG_0042.jpg',
                    imageAlt: 'メンテナンス鍼灸'
                  }
                ]
              }}
            />

            {/* 部分鍼灸・マッサージ */}
            <div className="mb-12 bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-secondary-dark border-b-2 border-primary pb-2">部分鍼灸・マッサージ</h2>
              <div className="mb-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-2 text-secondary-dark">部分鍼灸・マッサージ</h3>
                  <p className="text-3xl font-bold text-primary mb-2">¥700〜<span className="text-sm text-gray-600">(税込)</span></p>
                  <p className="text-gray-700 mb-4">所要時間：症状に応じて</p>
                  <p className="text-gray-700">症状に合わせた治療法を提供します。肩こり、腰痛、頭痛など特定の部位の不調に効果的です。</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center justify-center">
                  <img src="/images/IMG_0031.png" alt="部分鍼灸・マッサージ" className="rounded-lg shadow-md max-w-full h-auto" style={{ maxWidth: '300px', maxHeight: '200px' }} />
                </div>
                <div className="flex items-center justify-center">
                  <img src="/images/03.png" alt="部分鍼灸・マッサージ" className="rounded-lg shadow-md max-w-full h-auto" style={{ maxWidth: '300px', maxHeight: '200px' }} />
                </div>
              </div>
            </div>

            <div className="mb-12 bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-secondary-dark border-b-2 border-primary pb-2">美容鍼</h2>
              <div className="mb-6">
                <p className="text-lg mb-4 text-gray-700">
                  今話題の美容鍼メニューも御座います。
                  美容鍼で大きく得られる効果はリフトアップ効果・肌質改善・浮腕み改善（小顔効果）になります。
                </p>
                <p className="text-lg mb-4 text-gray-700">
                  鍼を打つことでお顔に小さな傷が出来ます。傷がつくことで【線維芽細胞】が働き傷を修復します。傷を修復する時に自身の肌細胞が新しくなるため肌質の改善に繋がります。
                  鍼を打つことで血流の改善がみられ固まった表情筋が柔らかくなり、重たい老廃物も流れるため術後すぐに引きあがった実感を得られます。
                </p>
                <p className="text-lg mb-6 text-gray-700">
                  お顔に鍼を打つことの恐怖心もあると思いますが、鍼はとても細く柔らかい鍼を使用するので心配はいりません。心地よい刺激で眠ってしまう方も多いので安心して受けてください。
                  施術前にお肌の状態や体調面などもカウンセリングいたしますのでご安心ください。
                </p>
              </div>
            </div>

            <TwoColumnMenu
              leftMenu={{
                title: '美容鍼（40分）',
                items: [
                  {
                    title: '美容鍼',
                    price: '¥5,700',
                    initialPrice: '¥5,200',
                    duration: '40分',
                    description: 'お顔のたるみやシワ、くすみなどにアプローチ。リフトアップ効果と磁気改善が期待できます。',
                    imageSrc: '/images/IMG_0116.jpg',
                    imageAlt: '美容鍼'
                  }
                ]
              }}
              rightMenu={{
                title: 'プラチナ美容鍼（60分）',
                items: [
                  {
                    title: 'プラチナ美容鍼',
                    price: '¥7,800',
                    initialPrice: '¥6,800',
                    duration: '60分',
                    description: '標準コースに加え、首・肩・デコルテのケアや特殊マッサージを含む超贰沢コース。',
                    imageSrc: '/images/05.png',
                    imageAlt: 'プラチナ美容鍼'
                  }
                ]
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Acupuncture;
