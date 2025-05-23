import React, { useState } from 'react';

const Contact = () => {
  // 問い合わせフォームの状態管理
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  // OpenAIチャットボット用の状態管理
  const [chatInput, setChatInput] = useState('');
  const [chatResponse, setChatResponse] = useState('');
  const [isChatLoading, setIsChatLoading] = useState(false);

  // フォーム入力変更ハンドラ
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // フォーム送信ハンドラ
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('お問い合わせありがとうございます。内容を確認の上、折り返しご連絡いたします。');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  // OpenAIチャットボット送信ハンドラ
  const handleChatSubmit = async () => {
    if (!chatInput.trim()) return;
    setIsChatLoading(true);
    try {
      const response = await fetch('/api/openai-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: chatInput })
      });
      const data = await response.json();
      if (response.ok) {
        setChatResponse(data.choices?.[0]?.message?.content || '回答が取得できませんでした');
      } else {
        setChatResponse('エラーが発生しました: ' + (data.error?.message || '不明なエラー'));
      }
    } catch (error) {
      setChatResponse('ネットワークエラーが発生しました');
    } finally {
      setIsChatLoading(false);
      setChatInput('');
    }
  };

  return (
    <div className="page-container">
      {/* ヒーローセクション - インラインスタイル実装 */}
      <div style={{ position: 'relative', height: '320px' }}>
        <img src="/images/test.jpg" width="100%" height="320" alt="お問い合わせ" style={{ objectFit: 'cover' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h1 style={{ color: 'white', fontSize: '2rem', fontWeight: 'bold', textAlign: 'center' }}>お問い合わせ</h1>
        </div>
      </div>
      
      <div className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-secondary-dark">お問い合わせ</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-center mb-8">
              サンリットウエスト鍼灸整骨院へのお問い合わせは、下記の方法で受け付けております。<br />
              まずはチャットボットやFAQでご確認いただくと、よりスムーズにご案内できます。
            </p>
            
            {/* AIチャットボットセクション */}
            <div id="ai-chat-section-wrapper" className="bg-white p-8 rounded-lg shadow-md mb-12">
              <div className="custom-question-area-container mb-6">
                {/* 左カラム：画像 */}
                <div className="custom-image-column">
                  <img
                    src="/images/botimage.png"
                    alt="院長イラスト"
                    className="rounded-lg object-contain"
                    style={{
                      maxWidth: '100%',
                      maxHeight: '220px', // 適宜調整
                      width: 'auto',
                      height: 'auto',
                    }}
                  />
                </div>
                {/* 右カラム：タイトル・入力・ボタン */}
                <div className="custom-form-column">
                  <h3 className="text-2xl font-bold mb-4 text-center sm:text-left text-secondary-dark">AIチャットボットにご質問ください</h3>
                  <div className="mb-4">
                    <textarea 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      rows={3}
                      placeholder="例：予約は必要ですか？"
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <button 
                      className="bg-primary hover:bg-primary-dark text-white font-medium py-2 px-6 rounded-md transition-colors duration-300 disabled:bg-gray-400"
                      onClick={handleChatSubmit}
                      disabled={isChatLoading || !chatInput.trim()}
                    >
                      {isChatLoading ? '送信中...' : '質問する'}
                    </button>
                  </div>
                </div>
              </div>

              {/* 回答エリア（画像なし） - 質問エリアの下に配置 */}
              {chatResponse && (
                <div id="custom-response-area" className="mt-8 bg-accent bg-opacity-10 p-4 rounded-lg border-l-4 border-primary">
                  <h4 className="font-bold text-secondary-dark mb-2">AIからの回答：</h4>
                  <p className="text-gray-700 whitespace-pre-wrap">{chatResponse}</p>
                </div>
              )}
            </div>
            
            {/* FAQセクション */}
            <div className="bg-white p-8 rounded-lg shadow-md mb-12">
              <h3 className="text-2xl font-bold mb-4 text-center text-secondary-dark">よくある質問</h3>
              <p className="text-left mb-6">
                よくいただく質問と回答をまとめました。
                ご不明点の解決にお役立てください。
              </p>
              
              {/* アコーディオンFAQ - 以下はサンプルです */}
              <div className="space-y-4">
                {/* FAQ項目1 */}
                <details className="bg-gray-50 py-4 rounded-lg cursor-pointer">
                  <summary className="font-medium text-secondary-dark text-lg">初めての来院の流れを教えてください</summary>
                  <div className="mt-4 pl-4 text-gray-700">
                    <p>初めてのご来院は以下の流れです。</p>
                    <ol className="list-decimal pl-5 mt-2 space-y-1">
                      <li>お電話またはウェブサイトからご予約ください</li>
                      <li>来院日に受付で問診票に必要事項をご記入ください</li>
                      <li>現在のお怪我や既往歴をお伝えください</li>
                      <li>診察・検査を行います</li>
                      <li>医師から診断結果と治療方針の説明を受けます</li>
                      <li>治療を行います</li>
                    </ol>
                  </div>
                </details>
                
                {/* FAQ項目2 */}
                <details className="bg-gray-50 py-4 rounded-lg cursor-pointer">
                  <summary className="font-medium text-secondary-dark text-lg">保険は使えますか？</summary>
                  <div className="mt-4 pl-4 text-gray-700">
                    <p>はい、当院では健康保険を使用した治療も行っております。交通事故や労災の場合は各種保険が適用されることがあります。詳しくは受付にてお尋ねください。</p>
                  </div>
                </details>
                
                {/* FAQ項目3 */}
                <details className="bg-gray-50 py-4 rounded-lg cursor-pointer">
                  <summary className="font-medium text-secondary-dark text-lg">予約は必要ですか？</summary>
                  <div className="mt-4 pl-4 text-gray-700">
                    <p>予約の上ご来院いただくとお待ち時間が少なくて済みますが、飛び込みでのご来院も可能です。ただし、混雑状況によってはお待ちいただく場合がありますので、可能な限り事前のご予約をお勧めしております。</p>
                  </div>
                </details>
                
                {/* FAQ項目4 */}
                <details className="bg-gray-50 py-4 rounded-lg cursor-pointer">
                  <summary className="font-medium text-secondary-dark text-lg">金額は事前にわかりますか？</summary>
                  <div className="mt-4 pl-4 text-gray-700">
                    <p>保険診療の場合は保険診療の自己負担分、自由診療の場合は施術内容によって料金が異なります。診察後にご提案する治療方針と合わせて、ご来院時に詳しくご説明いたします。</p>
                  </div>
                </details>
                
                {/* FAQ項目5 */}
                <details className="bg-gray-50 py-4 rounded-lg cursor-pointer">
                  <summary className="font-medium text-secondary-dark text-lg">駅からのアクセス方法を教えてください</summary>
                  <div className="mt-4 pl-4 text-gray-700">
                    <p>最寄駅からのアクセス方法については、当院までの約のルートについてお電話でお尋ねいただくか、Googleマップで「サンリットウエスト鍼灸整骨院」と検索いただくと詳しいルートが表示されます。</p>
                  </div>
                </details>
              </div>
            </div>
            
            {/* 問い合わせフォームセクション */}
            <div className="bg-white p-8 rounded-lg shadow-md mb-12">
              <h3 className="text-2xl font-bold mb-4 text-center text-secondary-dark">お問い合わせフォーム</h3>
              <p className="text-center mb-8">
                上記で解決しないご質問やご予約などは、以下のフォームまたはお電話にてお問い合わせください。
              </p>
              
              <div className="mb-8 text-center">
                <h3 className="text-xl font-bold mb-2 text-secondary-dark">お電話でのお問い合わせ</h3>
                <p className="text-2xl font-bold text-primary">046-204-7870</p>
                <p className="text-gray-600">受付時間: 平日 10:00〜19:30 / 土曜 10:00〜17:00（日曜・祝日定休）</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">お名前 <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">メールアドレス <span className="text-red-500">*</span></label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">電話番号</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">お問い合わせ項目 <span className="text-red-500">*</span></label>
                    <select 
                      id="subject" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    >
                      <option value="">選択してください</option>
                      <option value="reservation">予約について</option>
                      <option value="treatment">治療内容について</option>
                      <option value="price">料金について</option>
                      <option value="other">その他</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">お問い合わせ内容 <span className="text-red-500">*</span></label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  ></textarea>
                </div>
                
                <div className="flex items-start">
                  <input 
                    type="checkbox" 
                    id="privacy" 
                    className="mt-1 mr-2"
                    required
                  />
                  <label htmlFor="privacy" className="text-gray-700">
                    <a href="./privacy-policy" className="text-primary hover:underline">プライバシーポリシー</a>に同意します
                  </label>
                </div>
                
                <div className="text-center">
                  <button 
                    type="submit" 
                    className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-8 rounded-md transition-colors duration-300"
                  >
                    送信する
                  </button>
                </div>
              </form>
            </div>
            
            <div className="bg-accent p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-secondary-dark">アクセス</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="mb-4">
                    <strong>住所：</strong><br />
                    神奈川県海老名市中野2-19-7<br />
                    サンリットウエストH
                  </p>
                  <p className="mb-4">
                    <strong>電話番号：</strong><br />
                    046-204-7870
                  </p>
                  <p>
                    <strong>受付時間：</strong><br />
                    平日：10:00〜19:30<br />
                    土曜日：10:00〜17:00<br />
                    <span className="text-gray-600">※ 定休日：日曜・祝日</span>
                  </p>
                </div>
                <div className="h-64 md:h-auto">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3251.73134423394!2d139.37269607533497!3d35.41190917267532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185533352d2663%3A0x8aaf62a1b1e27869!2z44K144Oz44Oq44OD44OI44Km44Ko44K544OI6Y2854G45pW06aqo6Zmi!5e0!3m2!1sja!2sjp!4v1746880794608!5m2!1sja!2sjp" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, borderRadius: '0.375rem' }} 
                    allowFullScreen={true} 
                    loading="lazy"
                    title="サンリットウエスト鍼灸整骨院 Google Map"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
