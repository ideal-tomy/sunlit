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
      
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-sm mb-12">
            <h2 className="text-2xl font-bold mb-6 text-secondary-dark text-center">サンリットウエストの鍼灸治療</h2>
            
            <div className="bg-accent bg-opacity-10 p-4 rounded-lg mb-6 border-l-4 border-primary">
              <p className="text-lg text-gray-700">
                <span className="font-bold text-primary">症状に合わせた完全オーダーメイド</span>の鍼灸治療で皆様のお悩みを改善致します。
                慢性的な肩コリや、腰痛、自律神経失調、女性特有の悩み・更年期障害など、
                様々な症状でお困りの方に対応いたします。
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="bg-white p-3 flex items-center">
                  <span className="material-icons text-2xl text-primary mr-2">person</span>
                  <h3 className="text-xl font-bold text-secondary-dark">
                    一人ひとりに合わせたアプローチ
                  </h3>
                </div>
                <div className="p-5">
                  <p className="text-gray-700 leading-relaxed">
                    当院の鍼灸治療は様々な症状でお困りの方に一人一人違った形でアプローチをすることを心がけています。
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="bg-secondary-light bg-opacity-10 p-3 flex items-center">
                  <span className="material-icons text-2xl text-primary mr-2">healing</span>
                  <h3 className="text-xl font-bold text-secondary-dark">
                    局所治療と全身治療
                  </h3>
                </div>
                <div className="p-5">
                  <p className="text-gray-700 leading-relaxed">
                    当院の鍼灸治療はコリや疲れに対する局所治療は勿論ですが、気・血の滞りを改善する為の全身への経絡治療も行います。
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-secondary-light bg-opacity-10 p-4 rounded-lg border-l-4 border-secondary">
              <h3 className="text-xl font-bold mb-2 text-secondary-dark">東洋医学の知恵</h3>
              <p className="text-gray-700">
                気・血は身体の中を絶えず巡っていますが、疲労や精神的なトラブルで巡りが悪くなることが多いです。
                巡りが悪くなることで肩コリや頭痛、強い生理痛などを起こしてしまいます。
                当院では<span className="font-bold text-secondary">気・血の流れを改善し根本的な不調を改善する</span>ことを心がけております。
              </p>
            </div>
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
                    imageAlt: '全身鍼灸',
                    hideTitle: true
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
                    imageAlt: 'メンテナンス鍼灸',
                    hideTitle: true
                  }
                ]
              }}
            />

            {/* 部分鍼灸・マッサージ */}
            <div className="mb-12 bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-secondary-dark border-b-2 border-primary pb-2">部分鍼灸・マッサージ</h2>
              <div className="mb-6">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="bg-primary bg-opacity-10 p-3 flex items-center">
                    <span className="material-icons text-2xl text-primary mr-2">attach_money</span>
                    <h3 className="text-xl font-bold text-secondary-dark">料金・所要時間</h3>
                  </div>
                  <div className="p-5">
                    <p className="text-3xl font-bold text-primary mb-2">¥700〜<span className="text-sm text-gray-600">(税込)</span></p>
                    <p className="text-gray-700 mb-4">所要時間：症状に応じて</p>
                    <p className="text-gray-700">症状に合わせた治療法を提供します。肩こり、腰痛、頭痛など特定の部位の不調に効果的です。</p>
                  </div>
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
              <h2 className="text-2xl font-bold mb-4 text-secondary-dark border-b-2 border-primary pb-2 flex items-center">
                <span className="material-icons mr-2 text-primary">spa</span>
                美容鍼
              </h2>
              
              <div className="mb-6">
                <div className="bg-white p-4 rounded-lg mb-6 shadow-sm">
                  <p className="text-lg text-gray-700">
                    今話題の美容鍼メニューも御座います。
                    美容鍼で大きく得られる効果は以下の3つです：
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div className="relative overflow-hidden rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-64">
                      <div className="h-full w-full" style={{ backgroundImage: 'url(/images/IMG_0116.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.7)' }}></div>
                      <div className="absolute inset-0 flex flex-col justify-center items-center p-4">
                        <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">リフトアップ効果</h3>
                        <p className="text-xl text-white font-medium drop-shadow-md">たるみやシワの改善</p>
                      </div>
                    </div>
                    <div className="relative overflow-hidden rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-64">
                      <div className="h-full w-full" style={{ backgroundImage: 'url(/images/IMG_0116.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.7)' }}></div>
                      <div className="absolute inset-0 flex flex-col justify-center items-center p-4">
                        <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">肌質改善</h3>
                        <p className="text-xl text-white font-medium drop-shadow-md">ハリや強度の向上</p>
                      </div>
                    </div>
                    <div className="relative overflow-hidden rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-64">
                      <div className="h-full w-full" style={{ backgroundImage: 'url(/images/IMG_0158.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.7)' }}></div>
                      <div className="absolute inset-0 flex flex-col justify-center items-center p-4">
                        <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">小顔効果</h3>
                        <p className="text-xl text-white font-medium drop-shadow-md">顔の輪郭が引き締まり</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-8">
                  <div className="flex-1 bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="bg-white p-3 flex items-center">
                      <span className="material-icons text-2xl text-primary mr-2">science</span>
                      <h3 className="text-xl font-bold text-secondary-dark">
                        美容鍼の仕組み
                      </h3>
                    </div>
                    <div className="p-5">
                      <p className="text-gray-700 leading-relaxed">
                        鍼を打つことでお顔に小さな傷が出来ます。傷がつくことで<span className="font-bold text-primary">【線維芽細胞】</span>が働き傷を修復します。傷を修復する時に自身の肌細胞が新しくなるため肌質の改善に繋がります。
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex-1 bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="bg-secondary-light bg-opacity-10 p-3 flex items-center">
                      <span className="material-icons text-2xl text-primary mr-2">favorite</span>
                      <h3 className="text-xl font-bold text-secondary-dark">
                        血流改善の効果
                      </h3>
                    </div>
                    <div className="p-5">
                      <p className="text-gray-700 leading-relaxed">
                        鍼を打つことで血流の改善がみられ固まった表情筋が柔らかくなり、重たい老廃物も流れるため<span className="font-bold text-primary">術後すぐに引きあがった実感</span>を得られます。
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-accent bg-opacity-10 p-4 rounded-lg border-l-4 border-accent">
                  <h3 className="flex items-center text-xl font-bold mb-2 text-secondary-dark">
                    <span className="material-icons mr-2 text-accent">info</span>
                    安心して受けていただけます
                  </h3>
                  <p className="text-gray-700">
                    お顔に鍼を打つことの恐怖心もあると思いますが、鍼はとても細く柔らかい鍼を使用するので心配はいりません。心地よい刺激で眠ってしまう方も多いので安心して受けてください。
                    施術前にお肌の状態や体調面などもカウンセリングいたしますのでご安心ください。
                  </p>
                </div>
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
                    imageAlt: '美容鍼',
                    hideTitle: true
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
                    description: '標準コースに加え、首・肩・デコルテのケアや特殊マッサージを含む超贐沢コース。',
                    imageSrc: '/images/05.png',
                    imageAlt: 'プラチナ美容鍼',
                    hideTitle: true
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
