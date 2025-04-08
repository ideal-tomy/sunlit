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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-accent p-4 rounded-md">
                <h3 className="text-xl font-bold mb-2 text-secondary-dark">全身鍼灸</h3>
              </div>
              <div className="bg-accent p-4 rounded-md">
                <h3 className="text-xl font-bold mb-2 text-secondary-dark">メンテナンス鍼灸</h3>
              </div>
              <div className="bg-accent p-4 rounded-md">
                <h3 className="text-xl font-bold mb-2 text-secondary-dark">部分鍼・灸</h3>
              </div>
              <div className="bg-accent p-4 rounded-md">
                <h3 className="text-xl font-bold mb-2 text-secondary-dark">吸玉療法</h3>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-4 text-secondary-dark">美容鍼</h2>
            <p className="text-lg mb-4 text-gray-700">
              今話題の美容鍼メニューも御座います。
              美容鍼で大きく得られる効果は
            </p>
            <p className="text-lg mb-6 text-gray-700 font-medium">
              リフトアップ効果・肌質改善・浮腫み改善（小顔効果）になります。
            </p>
            <p className="text-lg mb-4 text-gray-700">
              鍼を打つことでお顔に小さな傷が出来ます。傷がつくことで【線維芽細胞】が働き傷を修復し
              ます。傷を修復する時に自身の肌細胞が新しくなるため肌質の改善に繋がります。
              鍼を打つことで血流の改善がみられ固まった表情筋が柔らかくなり、重たい老廃物も流れるた
              め術後すぐに引きあがった実感を得られます。
            </p>
            <p className="text-lg mb-4 text-gray-700">
              お顔に鍼を打つことの恐怖心もあると思いますが、鍼はとても細く柔らかい鍼を使用するので
              心配はいりません。心地よい刺激で眠ってしまう方も多いので安心して受けてください。
              施術前にお肌の状態や体調面などもカウンセリングいたしますのでご安心ください。
            </p>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-secondary-dark">鍼灸</h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
          
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <img 
                src="/images/IMG_0352.jpg" 
                alt="鍼灸治療" 
                className="w-full h-auto rounded-lg shadow-lg mb-8"
              />
              <h2 className="text-2xl font-bold mb-4 text-secondary-dark">東洋医学の知恵を活かした施術</h2>
              <p className="text-lg mb-6 text-gray-700">
                鍼灸治療は、東洋医学の考え方に基づいた伝統的な治療法です。体内のエネルギーの流れ（気・血・水）のバランスを整え、
                自然治癒力を高めることで、様々な症状の改善を目指します。
              </p>
              <p className="text-lg mb-6 text-gray-700">
                当院では、一人ひとりの体質や症状に合わせたオーダーメイドの鍼灸治療を提供しています。
                痛みを最小限に抑えた優しい施術で、鍼が初めての方でも安心して受けていただけます。
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-secondary-dark">こんな症状に効果的です</h2>
              <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                <li>肩こり・腰痛・膝の痛み</li>
                <li>頭痛・偏頭痛</li>
                <li>自律神経の乱れ</li>
                <li>不眠症・睡眠障害</li>
                <li>めまい・耳鳴り</li>
                <li>胃腸の不調</li>
                <li>冷え性・むくみ</li>
                <li>生理痛・PMS</li>
                <li>ストレス・疲労</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-secondary-dark">施術の流れ</h2>
              <ol className="list-decimal pl-6 space-y-4 text-lg text-gray-700">
                <li>
                  <strong>カウンセリング</strong><br />
                  症状や生活習慣、体質などを詳しくお伺いします。
                </li>
                <li>
                  <strong>診察・検査</strong><br />
                  東洋医学的な診断（脈診・舌診など）と西洋医学的な検査を組み合わせて状態を把握します。
                </li>
                <li>
                  <strong>施術</strong><br />
                  診断結果に基づいて、最適なツボを選択し施術を行います。必要に応じて灸やマッサージも組み合わせます。
                </li>
                <li>
                  <strong>アフターケア</strong><br />
                  施術後のアドバイスや、自宅でできるセルフケアについてお伝えします。
                </li>
              </ol>
            </div>

            <div className="bg-accent p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-center text-secondary-dark">料金案内</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-secondary-dark">一般鍼灸治療</h3>
                  <p className="text-3xl font-bold text-primary mb-2">¥5,500<span className="text-sm text-gray-600">（税込）</span></p>
                  <p className="text-gray-700">所要時間：約60分</p>
                  <p className="text-gray-700 mt-4">全身の調整を行う基本的な鍼灸治療です。</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-secondary-dark">美容鍼</h3>
                  <p className="text-3xl font-bold text-primary mb-2">¥8,800<span className="text-sm text-gray-600">（税込）</span></p>
                  <p className="text-gray-700">所要時間：約90分</p>
                  <p className="text-gray-700 mt-4">お顔のたるみやシワ、くすみなどにアプローチする美容鍼です。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Acupuncture;
