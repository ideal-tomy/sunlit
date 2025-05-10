import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ここに実際のフォーム送信処理を実装
    console.log('フォームデータ:', formData);
    alert('お問い合わせありがとうございます。内容を確認の上、折り返しご連絡いたします。');
    // フォームをリセット
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
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
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md mb-12">
              <p className="text-lg text-center mb-8">
                サンリットウエスト鍼灸整骨院へのお問い合わせは、以下のフォームまたはお電話にてお願いいたします。<br />
                ご予約・ご質問など、お気軽にお問い合わせください。
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
