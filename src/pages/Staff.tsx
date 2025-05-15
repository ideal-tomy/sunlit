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
      
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-sm mb-12">
            <h2 className="text-2xl font-bold mb-6 text-secondary-dark text-center">サンリットウエストのスタッフ</h2>
            
            <div className="bg-accent bg-opacity-10 p-4 rounded-lg mb-6 border-l-4 border-primary">
              <p className="text-lg text-gray-700">
                当院のスタッフは、<span className="font-bold text-primary">豊富な経験と専門知識</span>を持ったプロフェッショナルが揃っています。
                一人ひとりのお客様に対して、最適な施術とケアを提供します。
              </p>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-secondary-dark">スタッフ紹介</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 gap-12 mb-16">
              {/* 院長 落合竹一 - 左に画像、右にテキスト */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1 mb-12 flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <img 
                    src="/images/staff01.jpeg" 
                    alt="院長 落合竹一" 
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
                <div className="md:w-1/2">
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="material-icons text-3xl text-primary mr-3">person</span>
                      <h3 className="text-2xl font-bold text-secondary-dark">院長 落合 竹一</h3>
                    </div>
                    <p className="text-lg text-gray-600 mb-4">柔道整復師・鍼灸師</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-accent bg-opacity-10 p-3 rounded-lg border-l-4 border-primary">
                        <div className="flex items-center mb-2">
                          <span className="material-icons text-xl text-primary mr-2">favorite</span>
                          <h4 className="font-bold text-secondary-dark">趣味</h4>
                        </div>
                        <p className="text-lg">ゴルフ・お酒を飲むこと</p>
                      </div>
                      
                      <div className="bg-accent bg-opacity-10 p-3 rounded-lg border-l-4 border-primary">
                        <div className="flex items-center mb-2">
                          <span className="material-icons text-xl text-primary mr-2">format_quote</span>
                          <h4 className="font-bold text-secondary-dark">座右の銘</h4>
                        </div>
                        <p className="text-lg">一生感動一生青春</p>
                      </div>
                    </div>
                    
                    <div className="bg-primary bg-opacity-5 px-6 py-5 rounded-lg mb-4">
                      <div className="flex items-center mb-3">
                        <span className="material-icons text-2xl text-secondary mr-3">chat</span>
                        <h4 className="text-xl font-bold text-secondary-dark">ひとこと</h4>
                      </div>
                      <p className="text-lg text-gray-700 py-2">
                        疲労や痛みは一人で悩まずにご相談ください。快適な毎日を過ごすお手伝いをさせて下さい。
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 高橋翔太 - 右に画像、左にテキスト */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1 mb-12 flex flex-col md:flex-row-reverse">
                <div className="md:w-1/2">
                  <img 
                    src="/images/staff02.jpeg" 
                    alt="高橋翔太" 
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
                <div className="md:w-1/2">
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="material-icons text-3xl text-primary mr-3">person</span>
                      <h3 className="text-2xl font-bold text-secondary-dark">高橋翔太</h3>
                    </div>
                    <p className="text-lg text-gray-600 mb-4">柔道整復師</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-accent bg-opacity-10 p-3 rounded-lg border-l-4 border-primary">
                        <div className="flex items-center mb-2">
                          <span className="material-icons text-xl text-primary mr-2">favorite</span>
                          <h4 className="font-bold text-secondary-dark">趣味</h4>
                        </div>
                        <p className="text-lg">サッカー観戦　キャンプ</p>
                      </div>
                      
                      <div className="bg-accent bg-opacity-10 p-3 rounded-lg border-l-4 border-primary">
                        <div className="flex items-center mb-2">
                          <span className="material-icons text-xl text-primary mr-2">format_quote</span>
                          <h4 className="font-bold text-secondary-dark">座右の銘</h4>
                        </div>
                        <p className="text-lg">一期一会</p>
                      </div>
                    </div>
                    
                    <div className="bg-primary bg-opacity-5 px-6 py-5 rounded-lg mb-4">
                      <div className="flex items-center mb-3">
                        <span className="material-icons text-2xl text-secondary mr-3">chat</span>
                        <h4 className="text-xl font-bold text-secondary-dark">ひとこと</h4>
                      </div>
                      <p className="text-lg text-gray-700 py-2">
                        明日を明るく笑顔で過ごせるように施術していきます！<br /><br />
                        治療の形だけにこだわらず、一人一人に合う治療法を見つけていきます。<br /><br />自分自身腰を痛めた経験があるのでその経験をバネに腰痛に対して治療や予防などを積極的にアドバイスしていきます。<br /><br />慢性的な腰痛に対しても様々な角度から治療をしていきます。
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 坂口舞 - 左に画像、右にテキスト */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1 mb-12 flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <img 
                    src="/images/staff03.jpeg" 
                    alt="坂口舞" 
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
                <div className="md:w-1/2">
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="material-icons text-3xl text-primary mr-3">person</span>
                      <h3 className="text-2xl font-bold text-secondary-dark">坂口舞</h3>
                    </div>
                    <p className="text-lg text-gray-600 mb-4">柔道整復師</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-accent bg-opacity-10 p-3 rounded-lg border-l-4 border-primary">
                        <div className="flex items-center mb-2">
                          <span className="material-icons text-xl text-primary mr-2">favorite</span>
                          <h4 className="font-bold text-secondary-dark">趣味</h4>
                        </div>
                        <p className="text-lg">ディズニー・飛行機（旅客機）</p>
                      </div>
                      
                      <div className="bg-accent bg-opacity-10 p-3 rounded-lg border-l-4 border-primary">
                        <div className="flex items-center mb-2">
                          <span className="material-icons text-xl text-primary mr-2">format_quote</span>
                          <h4 className="font-bold text-secondary-dark">座右の銘</h4>
                        </div>
                        <p className="text-lg">一日一笑</p>
                      </div>
                    </div>
                    
                    <div className="bg-primary bg-opacity-5 px-6 py-5 rounded-lg mb-4">
                      <div className="flex items-center mb-3">
                        <span className="material-icons text-2xl text-secondary mr-3">chat</span>
                        <h4 className="text-xl font-bold text-secondary-dark">ひとこと</h4>
                      </div>
                      <p className="text-lg text-gray-700 py-2">
                        患者様が日々を笑顔で過ごせるよう、みなさま一人一人と真摯に向き合い、施術を行っていきます！<br /><br />高校時代の部活動で怪我をした際に応急措置の大切さを学びました！<br />その経験から、スポーツ外傷では、応急措置～競技復帰までしっかりサポートしていくこと、また復帰後のメンテナンスをしていく大切さを伝えながら施術を行っています。<br />
                        もちろんスポーツ外傷のみならず、日常生活における痛みや辛いことは、一人ひとり症状が違うので、一緒に最善策を考えながら患者さまが少しでも笑顔で日々を過ごせるように施術を行っていきたいと思います。
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 落合桃子 - 右に画像、左にテキスト */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1 mb-12 flex flex-col md:flex-row-reverse">
                <div className="md:w-1/2">
                  <img 
                    src="/images/staff04.jpeg" 
                    alt="落合桃子" 
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
                <div className="md:w-1/2">
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="material-icons text-3xl text-primary mr-3">person</span>
                      <h3 className="text-2xl font-bold text-secondary-dark">落合桃子</h3>
                    </div>
                    <p className="text-lg text-gray-600 mb-4">セラピスト</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-accent bg-opacity-10 p-3 rounded-lg border-l-4 border-primary">
                        <div className="flex items-center mb-2">
                          <span className="material-icons text-xl text-primary mr-2">favorite</span>
                          <h4 className="font-bold text-secondary-dark">趣味</h4>
                        </div>
                        <p className="text-lg">旅行　食べ歩き</p>
                      </div>
                      
                      <div className="bg-accent bg-opacity-10 p-3 rounded-lg border-l-4 border-primary">
                        <div className="flex items-center mb-2">
                          <span className="material-icons text-xl text-primary mr-2">format_quote</span>
                          <h4 className="font-bold text-secondary-dark">座右の銘</h4>
                        </div>
                        <p className="text-lg">継続は力なり</p>
                      </div>
                    </div>
                    
                    <div className="bg-primary bg-opacity-5 px-6 py-5 rounded-lg mb-4">
                      <div className="flex items-center mb-3">
                        <span className="material-icons text-2xl text-secondary mr-3">chat</span>
                        <h4 className="text-xl font-bold text-secondary-dark">ひとこと</h4>
                      </div>
                      <p className="text-lg text-gray-700 py-2">
                        院内個室でオイルリンパドレナージュを行っています。
                        自己免疫アップで健康維持・向上をサポートします！
                      </p>
                    </div>
                  </div>
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
