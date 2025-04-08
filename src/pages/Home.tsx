import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionRefs.current.forEach((section) => {
      if (section) {
        section.classList.add('section');
        observer.observe(section);
      }
    });

    setTimeout(() => {
      sectionRefs.current.forEach((section) => {
        if (section && isElementInViewport(section)) {
          section.classList.add('visible');
        }
      });
    }, 100);

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const isElementInViewport = (el: HTMLElement) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  };

  const setRef = (index: number) => (el: HTMLDivElement | null) => {
    sectionRefs.current[index] = el;
  };

  return (
    <div className="home-page">
      <div style={{ position: 'relative', height: '100vh', minHeight: '600px' }}>
        <img src="/images/01.png" width="100%" height="100%" alt="ヒーロー画像" style={{ objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.3)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 1rem' }}>
          <h1 style={{ color: 'white', fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '1rem' }}>サンリットウエスト鍼灸整骨院<br />100年使う大切な身体だからこそ</h1>
          <p style={{ color: 'white', fontSize: '1.2rem', textAlign: 'center', maxWidth: '36rem', marginBottom: '2rem' }}>— 100年使う大切な身体だからこそ、定期的なメンテナンスで痛みの少ない毎日を過ごしませんか。 —</p>
          <Link 
            to="#contact" 
            className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-md transition-colors duration-300 font-medium inline-block"
          >
            ご予約はこちら
          </Link>
        </div>
      </div>

      <section className="py-16 bg-accent section" ref={setRef(1)}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary-dark">私たちのコンセプト</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg mb-6 text-gray-700">
              サンリットウエスト鍼灸整骨院では、「痛みのない健康的な毎日」をモットーに、
              お一人お一人に合わせた最適な治療プランをご提案しています。
            </p>
            <p className="text-lg mb-6 text-gray-700">
              東洋医学と西洋医学の知識を融合させた独自のアプローチで、
              根本的な原因から改善し、再発を防ぐための治療を行います。
            </p>
            <p className="text-lg text-gray-700">
              日々の生活の質を向上させるためのサポートを、私たちにお任せください。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white section" ref={setRef(2)}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-secondary-dark">診療内容</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="treatment-card">
              <Link to="/acupuncture" className="block h-full">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="/images/IMG_0352.jpg" 
                    alt="鍼灸治療" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <h3 className="text-white text-2xl font-bold">鍼灸</h3>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <p className="text-gray-700 mb-4">
                    東洋医学の考えに基づいた鍼灸治療で、身体の自然治癒力を高め、様々な症状の改善を目指します。
                  </p>
                  <div className="text-primary text-xs font-medium flex items-center">
                    詳しく見る
                    <span className="ml-1">›</span>
                  </div>
                </div>
              </Link>
            </div>

            <div className="treatment-card">
              <Link to="/private-treatment" className="block h-full">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="/images/2.png" 
                    alt="自由診療" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <h3 className="text-white text-2xl font-bold">自由診療</h3>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <p className="text-gray-700 mb-4">
                    保険適用外の特別なケアで、より専門的かつ集中的な治療を提供します。慢性的な痛みや不調に効果的です。
                  </p>
                  <div className="text-primary text-xs font-medium flex items-center">
                    詳しく見る
                    <span className="ml-1">›</span>
                  </div>
                </div>
              </Link>
            </div>

            <div className="treatment-card">
              <Link to="/insurance" className="block h-full">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="/images/02.png" 
                    alt="保険診療" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <h3 className="text-white text-2xl font-bold">保険診療</h3>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <p className="text-gray-700 mb-4">
                    健康保険が適用される治療で、日常的な痛みやケガの治療を手頃な価格で受けることができます。
                  </p>
                  <div className="text-primary text-xs font-medium flex items-center">
                    詳しく見る
                    <span className="ml-1">›</span>
                  </div>
                </div>
              </Link>
            </div>

            <div className="treatment-card">
              <Link to="/staff" className="block h-full">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="/images/staff04.jpg" 
                    alt="スタッフ紹介" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <h3 className="text-white text-2xl font-bold">スタッフ紹介</h3>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <p className="text-gray-700 mb-4">
                    経験豊富な専門スタッフが、あなたの健康をサポートします。一人ひとりの症状に合わせた最適な治療を提供します。
                  </p>
                  <div className="text-primary text-xs font-medium flex items-center">
                    詳しく見る
                    <span className="ml-1">›</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-accent section" ref={setRef(3)}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <img 
                src="/images/02-01.png" 
                alt="治療理念" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary-dark">治療理念</h2>
              <div className="w-24 h-1 bg-primary mb-8"></div>
              <p className="text-lg mb-6 text-gray-700">
                私たちは「治療」だけでなく「予防」も重視しています。痛みが出てから対処するのではなく、
                日常生活の中で痛みを予防するための生活習慣や姿勢の改善もサポートします。
              </p>
              <p className="text-lg mb-6 text-gray-700">
                また、患者様一人ひとりの生活環境や仕事内容を考慮した、オーダーメイドの治療プランを提案。
                短期的な痛みの緩和だけでなく、長期的な健康維持を目指します。
              </p>
              <p className="text-lg text-gray-700">
                「患者様が自分の体を理解し、自ら健康を管理できるようになること」
                これが私たちの最終的な目標です。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white section" ref={setRef(4)}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pl-8">
              <img 
                src="/images/02.png" 
                alt="お子様連れの方へ" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary-dark">お子様連れの方へ</h2>
              <div className="w-24 h-1 bg-primary mb-8"></div>
              <p className="text-lg mb-6 text-gray-700">
                当院では、お子様連れの患者様も安心して治療を受けていただけるよう、キッズスペースを完備しています。
                お子様が退屈せずに過ごせるよう、絵本やおもちゃもご用意しております。
              </p>
              <p className="text-lg mb-6 text-gray-700">
                また、ベビーカーでのご来院も可能です。段差の少ない設計になっており、
                スタッフがお手伝いいたしますので、お気軽にお声がけください。
              </p>
              <p className="text-lg text-gray-700">
                「子育て中だから通院できない」とお悩みの方も、ぜひ一度ご相談ください。
                お子様と一緒に、健康な毎日を取り戻しましょう。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-accent section" ref={setRef(5)}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-secondary-dark">アクセス</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
          
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-secondary-dark">サンリットウエスト鍼灸整骨院</h3>
                <p className="mb-2"><strong>住所：</strong> 〒123-4567 東京都○○区○○町1-2-3</p>
                <p className="mb-2"><strong>電話：</strong> 03-1234-5678</p>
                <p className="mb-2"><strong>診療時間：</strong> 9:00〜20:00</p>
                <p className="mb-2"><strong>定休日：</strong> 日曜・祝日</p>
                <p className="mb-6"><strong>最寄駅：</strong> ○○線 ○○駅 徒歩5分</p>
                <a 
                  href="https://maps.app.goo.gl/mhwVjNXeNz8fENs68" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md transition-colors duration-300 font-medium inline-block"
                >
                  Googleマップで見る
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3251.731343131381!2d139.375271!3d35.4119092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185533352d2663%3A0x8aaf62a1b1e27869!2z44K144Oz44Oq44OD44OI44Km44Ko44K544OI6Y2854G45pW06aqo6Zmi!5e0!3m2!1sja!2sjp!4v1742230296054!5m2!1sja!2sjp" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white section" ref={setRef(6)}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-accent p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold mb-4 text-secondary-dark">お問い合わせ</h3>
              <p className="text-lg mb-6 text-gray-700">
                ご質問やご予約は、お電話またはお問い合わせフォームからお気軽にどうぞ。
              </p>
              <Link 
                to="/contact" 
                className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-md transition-colors duration-300 font-medium inline-block"
              >
                お問い合わせはこちら
              </Link>
            </div>
            
            <div className="bg-accent p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold mb-4 text-secondary-dark">ブログ</h3>
              <p className="text-lg mb-6 text-gray-700">
                健康に関する情報や、当院からのお知らせを定期的に更新しています。
              </p>
              <Link 
                to="/blog" 
                className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-md transition-colors duration-300 font-medium inline-block"
              >
                ブログを読む
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
