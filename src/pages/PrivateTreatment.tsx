import { Link } from 'react-router-dom';

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
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-secondary-dark">自由診療</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

          <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-secondary-dark">自由診療の料金</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-2 text-secondary-dark">治療コース</h3>
                  <p className="text-3xl font-bold text-primary mb-2">¥8,800<span className="text-sm text-gray-600">(税込)</span></p>
                  <p className="text-gray-700">必要時間：60分</p>
                  <p className="text-gray-700 mt-4">痛みの緩和や全身のリラックスなど、様々な症状に対応する治療方法をご用意しております。</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-2 text-secondary-dark">集中コース</h3>
                  <p className="text-3xl font-bold text-primary mb-2">¥7,700<span className="text-sm text-gray-600">(税込)</span></p>
                  <p className="text-gray-700">必要時間：50分</p>
                  <p className="text-gray-700 mt-4">痛みの緩和や全身のリラックスなど、様々な症状に対応する治療方法をご用意しております。</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-2 text-secondary-dark">美容コース</h3>
                  <p className="text-3xl font-bold text-primary mb-2">¥7,700<span className="text-sm text-gray-600">(税込)</span></p>
                  <p className="text-gray-700">必要時間：50分</p>
                  <p className="text-gray-700 mt-4">美容効果の高い治療方法をご用意しております。</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-2 text-secondary-dark">スモールケアコース</h3>
                  <p className="text-3xl font-bold text-primary mb-2">¥8,800<span className="text-sm text-gray-600">(税込)</span></p>
                  <p className="text-gray-700">必要時間：60分</p>
                  <p className="text-gray-700 mt-4">スモールケア効果の高い治療方法をご用意しております。</p>
                </div>
              </div>
            </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <img 
                src="/images/2.png" 
                alt="自由診療" 
                className="w-full h-auto rounded-lg shadow-lg mb-8"
              />
              <h2 className="text-2xl font-bold mb-4 text-secondary-dark">効果的な治療方法</h2>
              <p className="text-lg mb-6 text-gray-700">
                自由診療では、効果的な治療方法を提供しております。痛みの緩和や全身のリラックスなど、様々な症状に対応する治療方法をご用意しております。
              </p>
              <p className="text-lg mb-6 text-gray-700">
                当院では、最新の治療技術や機器を使用しております。痛みの緩和や全身のリラックスなど、様々な症状に対応する治療方法をご用意しております。
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-secondary-dark">自由診療の特徴</h2>
              <ul className="list-disc pl-6 space-y-4 text-lg text-gray-700">
                <li>
                  <strong>時間を選ばずに治療を受けることができます</strong><br />
                  痛みの緩和や全身のリラックスなど、様々な症状に対応する治療方法をご用意しております。
                </li>
                <li>
                  <strong>最新の治療技術や機器を使用しています</strong><br />
                  痛みの緩和や全身のリラックスなど、様々な症状に対応する治療方法をご用意しております。
                </li>
                <li>
                  <strong>個別の治療計画を立てることができます</strong><br />
                  痛みの緩和や全身のリラックスなど、様々な症状に対応する治療方法をご用意しております。
                </li>
                <li>
                  <strong>女性施術者も常勤しております</strong><br />
                  女性施術者をご希望の際は気兼ねなくお申し付けください。
                </li>
              </ul>
            </div>        

            <div className="bg-accent p-8 rounded-lg shadow-md text-center">
              <h2 className="text-2xl font-bold mb-4 text-secondary-dark">自由診療のご予約</h2>
              <p className="text-lg mb-6 text-gray-700">
                自由診療のご予約はこちらからお申し付けください。
              </p>
              <Link 
                to="/contact" 
                className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-md transition-colors duration-300 font-medium inline-block"
              >
                ご予約はこちら
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateTreatment;
