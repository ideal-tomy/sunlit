// 画像をpublicディレクトリから直接参照

const Insurance = () => {
  return (
    <div className="page-container">
      {/* ヒーローセクション */}
      <div style={{ position: 'relative', height: '320px' }}>
        <img src="/images/01.png" width="100%" height="320" alt="保険診療" style={{ objectFit: 'cover' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h1 style={{ color: 'white', fontSize: '2rem', fontWeight: 'bold', textAlign: 'center' }}>保険診療</h1>
        </div>
      </div>
      
      <div className="py-12 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-sm mb-12">
            <p className="text-lg mb-4 text-gray-700">
              突然の怪我やスポーツ障害，強い痛みでお困りの方には保険診療もご案内しております。
              怪我を１度で治すのは中々難しいですので、継続反復の治療が必要になります。
              当院では保険診療と併用して更に早く完治できるように特別な電気治療や部分鍼治療を推奨しております。
            </p>
            <p className="text-lg mb-4 text-gray-700">
              学生さんの怪我に対する治療も手厚く対応しております。
              高校生までは医療証を使えますのでご持参ください。
            </p>
            <p className="text-lg mb-6 text-gray-700">
              経験豊富な施術者が怪我・痛みに対し的確なアプローチで出来るだけ早く現場復帰が出来るよう心がけておりますので安心してご相談下さい
            </p>
            
            <h2 className="text-2xl font-bold mb-4 text-secondary-dark">自賠責治療</h2>
            <p className="text-lg mb-4 text-gray-700">
              突然の交通事故でお悩みの方は当院まで一報ご相談ください。
              交通事故は日常生活受ける衝撃の数倍のエネルギーの衝撃が身体に与えられます。
              その大きな衝撃により後遺症を残してしまう方々が多くいらっしゃいます。
              交通事故治療は限られた治療期間でいかに回数をこなすかが大事になります。
              当院の施術者は交通事故治療も対応しておりますので、事故に遭われてしまった際にはご相談だけでも大丈夫ですので一度お電話ください。
            </p>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-secondary-dark">保険診療</h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
          
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <img 
                src="/images/02.png" 
                alt="保険診療" 
                className="w-full h-auto rounded-lg shadow-lg mb-8"
              />
              <h2 className="text-2xl font-bold mb-4 text-secondary-dark">保険診療の特徴</h2>
              <p className="text-lg mb-6 text-gray-700">
                保険診療とは、保険適用の治療を指します。当院では保険診療と併用して更に早く完治できるように特別な電気治療や部分鍼治療を推奨しております。
                そのため、保険診療を受ける際には、事前に当院までご相談ください。
              </p>
              <p className="text-lg mb-6 text-gray-700">
                保険診療には、以下のような特徴があります。
                保険診療は、保険適用の治療を指します。当院では保険診療と併用して更に早く完治できるように特別な電気治療や部分鍼治療を推奨しております。
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-secondary-dark">保険診療の種類</h2>
              <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                <li>整形外科</li>
                <li>リハビリテーション</li>
                <li>鍼灸治療</li>
                <li>マッサージ治療</li>
                <li>理学療法</li>
              </ul>
              <p className="text-lg mt-4 text-gray-700">
                以上のような保険診療の種類があります。当院では、保険診療と併用して更に早く完治できるように特別な電気治療や部分鍼治療を推奨しております。
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-secondary-dark">保険診療の流れ</h2>
              <ol className="list-decimal pl-6 space-y-4 text-lg text-gray-700">
                <li>
                  <strong>初診</strong><br />
                  保険診療を受ける際には、事前に当院までご相談ください。当院では、保険診療と併用して更に早く完治できるように特別な電気治療や部分鍼治療を推奨しております。
                </li>
                <li>
                  <strong>治療</strong><br />
                  保険診療を受ける際には、事前に当院までご相談ください。当院では、保険診療と併用して更に早く完治できるように特別な電気治療や部分鍼治療を推奨しております。
                </li>
                <li>
                  <strong>経過観察</strong><br />
                  保険診療を受ける際には、事前に当院までご相談ください。当院では、保険診療と併用して更に早く完治できるように特別な電気治療や部分鍼治療を推奨しております。
                </li>
                <li>
                  <strong>治療終了</strong><br />
                  保険診療を受ける際には、事前に当院までご相談ください。当院では、保険診療と併用して更に早く完治できるように特別な電気治療や部分鍼治療を推奨しております。
                </li>
              </ol>
            </div>

            <div className="bg-accent p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-center text-secondary-dark">保険診療の料金</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <h3 className="text-xl font-bold mb-4 text-secondary-dark">保険診療の料金表</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-4 py-2">項目</th>
                        <th className="px-4 py-2">料金</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2">初診</td>
                        <td className="border px-4 py-2">900円</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">再診</td>
                        <td className="border px-4 py-2">300円</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">治療料金</td>
                        <td className="border px-4 py-2">150円</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">薬剤料金</td>
                        <td className="border px-4 py-2">150円</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-600 mt-4">※料金は税抜きです。保険診療の料金は、保険適用の治療を指します。当院では、保険診療と併用して更に早く完治できるように特別な電気治療や部分鍼治療を推奨しております。</p>
              </div>
              <p className="text-center text-lg text-gray-700">
                保険診療の料金については、当院までご相談ください。当院では、保険診療と併用して更に早く完治できるように特別な電気治療や部分鍼治療を推奨しております。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insurance;
