const Staff = () => {
  return (
    <div className="page-container">
      {/* ヒーローセクション */}
      <div style={{ position: 'relative', height: '320px' }}>
        <img src="/images/test.jpg" width="100%" height="320" alt="スタッフ紹介" style={{ objectFit: 'cover' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h1 style={{ color: 'white', fontSize: '2rem', fontWeight: 'bold', textAlign: 'center' }}>スタッフ紹介</h1>
        </div>
      </div>
      
      <div className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-secondary-dark">スタッフ紹介</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
          
          <div className="max-w-5xl mx-auto">
            <div className="mb-16">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
                <div className="w-full md:w-1/3">
                  <img 
                    src="/images/staff04.jpg" 
                    alt="院長" 
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
                <div className="w-full md:w-2/3">
                  <h2 className="text-2xl font-bold mb-2 text-secondary-dark">院長 山田 太郎</h2>
                  <p className="text-gray-600 mb-4">はり師・きゅう師・柔道整復師</p>
                  <div className="bg-accent p-4 rounded-md mb-4">
                    <h3 className="font-bold mb-2 text-secondary-dark">資格</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>国家資格 はり師免許</li>
                      <li>国家資格 きゅう師免許</li>
                      <li>国家資格 柔道整復師免許</li>
                      <li>日本スポーツ協会公認アスレティックトレーナー</li>
                    </ul>
                  </div>
                  <p className="text-lg mb-4">
                    はじめまして、サンリットウエスト鍼灸整骨院の院長を務めております山田太郎です。
                    私は10年以上にわたり、鍼灸と整骨の分野で多くの患者様の痛みや不調の改善をサポートしてきました。
                  </p>
                  <p className="text-lg">
                    当院では、東洋医学と西洋医学の知見を融合させた総合的なアプローチで、
                    一人ひとりの症状や体質に合わせたオーダーメイドの治療を提供しています。
                    皆様の健康と笑顔のために、精一杯サポートさせていただきます。
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="/images/staff01.jpg" 
                  alt="鍼灸師 佐藤 花子" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-secondary-dark">鍼灸師 佐藤 花子</h3>
                  <p className="text-gray-600 mb-4">はり師・きゅう師</p>
                  <div className="bg-accent p-4 rounded-md mb-4">
                    <h4 className="font-bold mb-2 text-secondary-dark">専門分野</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>美容鍼</li>
                      <li>女性特有の症状</li>
                      <li>自律神経調整</li>
                    </ul>
                  </div>
                  <p className="text-gray-700">
                    女性特有の症状や美容鍼を得意としています。心身のバランスを整え、
                    内側からの美しさと健康をサポートします。優しい施術で鍼が初めての方でも安心して受けていただけます。
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="/images/staff02.jpg" 
                  alt="柔道整復師 鈴木 一郎" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-secondary-dark">柔道整復師 鈴木 一郎</h3>
                  <p className="text-gray-600 mb-4">柔道整復師</p>
                  <div className="bg-accent p-4 rounded-md mb-4">
                    <h4 className="font-bold mb-2 text-secondary-dark">専門分野</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>スポーツ障害</li>
                      <li>外傷治療</li>
                      <li>筋膜リリース</li>
                    </ul>
                  </div>
                  <p className="text-gray-700">
                    元スポーツトレーナーとしての経験を活かし、スポーツ障害や外傷の治療を得意としています。
                    適切な施術と運動指導で、早期回復とパフォーマンス向上をサポートします。
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="/images/staff03.jpg" 
                  alt="受付 田中 美咲" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-secondary-dark">受付 田中 美咲</h3>
                  <p className="text-gray-600 mb-4">医療事務</p>
                  <div className="bg-accent p-4 rounded-md mb-4">
                    <h4 className="font-bold mb-2 text-secondary-dark">担当業務</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>受付・会計</li>
                      <li>保険請求</li>
                      <li>予約管理</li>
                    </ul>
                  </div>
                  <p className="text-gray-700">
                    笑顔でお迎えする受付担当です。予約管理から保険請求まで幅広く対応しています。
                    不安なことや分からないことがありましたら、お気軽にお声がけください。
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-accent p-8 rounded-lg shadow-md text-center">
              <h2 className="text-2xl font-bold mb-4 text-secondary-dark">私たちの想い</h2>
              <p className="text-lg mb-6 text-gray-700">
                サンリットウエスト鍼灸整骨院のスタッフ一同、患者様の健康と笑顔のために日々研鑽を重ねています。
                東洋医学と西洋医学の知見を融合させた総合的なアプローチで、一人ひとりに合った最適な治療を提供することをお約束します。
                皆様のご来院を心よりお待ちしております。
              </p>
              <a 
                href="/contact" 
                className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-md transition-colors duration-300 font-medium inline-block"
              >
                お問い合わせはこちら
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staff;
