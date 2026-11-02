const day05Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-amber-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-amber-950/50 px-3 py-1 rounded-full border border-amber-900/50">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
            <span>Day 5 Comprehensive Masterclass</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 05: カフェでの注文・好みの表現 ＆ 逆構造動詞 gustar の秘密
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-amber-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-amber-300 font-semibold">From A1 Basics to B2 Nuances:</strong>
              <span class="ml-1 text-neutral-300">
                注文の必須フレーズ (por favor / querer) から、"Me gusta"（〜が好き＝〜が私を喜ばせる）というB2重要構文の仕組みまで徹底解説します。
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- Main Content -->
      <main class="max-w-4xl mx-auto px-4 py-10 space-y-12">

        <!-- Speed Controller -->
        <div class="bg-white border border-neutral-200/80 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm">
          <div class="flex items-center space-x-2 text-neutral-800">
            <i data-lucide="volume-2" class="w-5 h-5 shrink-0 text-amber-600"></i>
            <span class="text-sm font-semibold">発音スピード調整（Audio Speed Controller）:</span>
          </div>
          <div class="flex items-center space-x-2">
            <button onclick="setSpeed(0.85)" id="speed-085" class="px-3.5 py-1.5 text-xs rounded-lg border border-neutral-900 bg-neutral-900 text-white font-medium transition cursor-pointer">0.85x (Slow)</button>
            <button onclick="setSpeed(1.0)" id="speed-100" class="px-3.5 py-1.5 text-xs rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-700 hover:border-neutral-900 font-medium transition cursor-pointer">1.0x (Normal)</button>
          </div>
        </div>

        <!-- Section 1: Detailed Explanations & Culture -->
        <section class="space-y-6">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="book-open" class="w-5 h-5 text-amber-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">1. 深掘り解説：注文フレーズ ＆ 動詞 gustar の構造</h3>
          </div>

          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-neutral-800">
            <div class="space-y-2 border-l-2 border-amber-500 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">① カフェでの注文フレーズ（A1基礎）</h4>
              <p class="text-neutral-600">
                ・<code class="bg-neutral-100 px-1 rounded">Un café, por favor.</code>（コーヒーを1つお願いします）<br>
                ・<code class="bg-neutral-100 px-1 rounded">Quiero un té con leche.</code>（ミルクティーが欲しいです）<br>
                ・<code class="bg-neutral-100 px-1 rounded">¿Cuánto es?</code>（お会計はいくらですか？）<br>
                ※ <code class="bg-neutral-100 px-1 rounded">por favor</code>（お願いします）をつけるだけで、一気に丁寧でスムーズな印象になります。
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-neutral-900 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">② B2応用：「好き」を表す動詞 gustar の逆構造（Me gusta...）</h4>
              <p class="text-neutral-600">
                <code class="bg-neutral-100 px-1 rounded">Me gusta el café.</code> は、直訳すると「コーヒー（主語）が私（間接目的語 me）に気に入られる（動詞 gusta）」という構造です！<br>
                ・後ろに来るものが単数名詞/動詞原形の場合 ➔ <code class="bg-neutral-100 px-1 rounded">Me gusta</code>（例：Me gusta el café / Me gusta beber）<br>
                ・後ろに来るものが複数名詞の場合 ➔ <code class="bg-neutral-100 px-1 rounded">Me gustan</code>（例：Me gustan los churros ＝ チュロスが好き）<br>
                さらに過去可能形（可能法）を使って <code class="bg-neutral-100 px-1 rounded">Me gustaría un café.</code> と言うと、「〜をいただけたら嬉しいのですが」という最高にエレガントな注文表現になります。
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-amber-600 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">💡 豆知識：スペインの「Bar（バル）」文化とカフェの種類</h4>
              <p class="text-neutral-600">
                スペインの「Bar」は、朝はエスプレッソやチュロスを楽しむカフェ、昼や夜はタパスとお酒を楽しむ社交場として1日中賑わいます。<br>
                ・<code class="bg-neutral-100 px-1 rounded">Café solo</code>（エスプレッソ）<br>
                ・<code class="bg-neutral-100 px-1 rounded">Café con leche</code>（カフェオレ／コーヒーとミルク半々）<br>
                ・<code class="bg-neutral-100 px-1 rounded">Café cortado</code>（少量のミルク入りエスプレッソ）
              </p>
            </div>
          </div>
        </section>

        <!-- Section 2: Dialogues -->
        <section class="space-y-4">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="message-square" class="w-5 h-5 text-amber-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">2. 実践会話（クリックで発音再生）</h3>
          </div>
          <div class="bg-white border border-neutral-200/80 rounded-xl overflow-hidden shadow-sm divide-y divide-neutral-100">
            
            <div onclick="speak('¡Hola! Un café con leche y un croissant, por favor.')" class="p-5 hover:bg-amber-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">¡Hola! Un café con leche y un croissant, por favor.</span>
                <p class="text-xs text-neutral-500 mt-1">こんにちは！カフェオレとクロワッサンを1つお願いします。</p>
              </div>
            </div>

            <div onclick="speak('Me gustaría pedir la cuenta, por favor.')" class="p-5 hover:bg-amber-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Me gustaría pedir la cuenta, por favor.</span>
                <p class="text-xs text-neutral-500 mt-1">お会計をお願いしたいのですが。（丁寧な表現）</p>
              </div>
            </div>

            <div onclick="speak('A mí me gustan mucho los churros con chocolate.')" class="p-5 hover:bg-amber-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">A mí me gustan mucho los churros con chocolate.</span>
                <p class="text-xs text-neutral-500 mt-1">私はチョコレート付きのチュロスが大好きです。</p>
              </div>
            </div>

          </div>
        </section>

        <!-- Section 3: Quizzes -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-amber-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">3. Day 05 実践クイズ（全5問）</h3>
            </div>
            <span class="text-xs text-amber-600 font-semibold bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">5 Questions</span>
          </div>

          <!-- Q1 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. 選択問題：〜をお願いします</span>
            <p class="font-medium text-neutral-900">「〜をお願いします」を意味する丁寧な添え言葉は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, '¡Correcto! por favor です。', '不正解！ de nada は「どういたしまして」です。', 'por favor')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. por favor</button>
              <button onclick="checkQuiz(1, 1, 0, '¡Correcto! por favor です。', '不正解！ de nada は「どういたしまして」です。', 'por favor')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. de nada</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. 穴埋め問題：複数名詞と gustar</span>
            <p class="font-medium text-neutral-900">「私はチュロスが好きです（Me [ ] los churros）」の空欄に入る動詞形は？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>Me</span>
              <span onclick="revealAnswer(2, 'gustan (gustan)', 'gustan')" id="q2-slot" class="cursor-pointer border-b-2 border-dashed border-amber-500 px-3 py-0.5 text-amber-600 font-bold hover:bg-amber-50 transition">[ クリックして答えを表示 ]</span>
              <span>los churros.</span>
            </div>
          </div>

          <!-- Q3 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q3. タイピングテスト：お会計</span>
            <p class="font-medium text-neutral-900">「お会計・勘定（la cuenta）」を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q3-input" placeholder="入力してください..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-amber-600 w-64 bg-white">
              <button onclick="checkInput(3, ['la cuenta', 'cuenta'], 'la cuenta')" class="bg-neutral-900 hover:bg-amber-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q3-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q4 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q4. B2応用：丁寧な注文</span>
            <p class="font-medium text-neutral-900">「〜をいただけたら嬉しいのですが」と最も丁寧に頼む表現は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(4, 0, 0, '¡Correcto! Me gustaría... が一番エレガントです。', '不正解！ Quiero... も通じますが少し直接的です。', 'Me gustaría')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. Me gustaría...</button>
              <button onclick="checkQuiz(4, 1, 0, '¡Correcto! Me gustaría... が一番エレガントです。', '不正解！ Quiero... も通じますが少し直接的です。', 'Me gustaría')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. Quiero...</button>
            </div>
            <div id="q4-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q5 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q5. 総合フレーズ</span>
            <p class="font-medium text-neutral-900">「カフェオレとクロワッサンを1つお願いします」のフルフレーズは？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(5, 'Un café con leche y un croissant, por favor. (Un café con leche y un croissant, por favor.)', 'Un café con leche y un croissant, por favor.')" id="q5-slot" class="cursor-pointer border-b-2 border-dashed border-amber-500 px-3 py-0.5 text-amber-600 font-bold hover:bg-amber-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>
        </section>

        <!-- 🎵 Section 4: Latin Music Special ＆ 歌で学ぶスペイン語 -->
        <section class="space-y-6 pt-6 border-t-2 border-neutral-200">
          <div class="border-b border-neutral-200 pb-3">
            <div class="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full mb-2">
              Day 5 Special • Café Culture & Songs
            </div>
            <h3 class="text-2xl font-bold text-neutral-900">
              4. 音楽で楽しむ『Ojalá que llueva café』と願望表現
            </h3>
            <p class="text-xs sm:text-sm text-neutral-600 mt-1">
              ドミニカ共和国の巨匠 Juan Luis Guerra の名曲から、ラテンの豊かな食文化と詩的なフレーズを学びましょう！
            </p>
          </div>

          <!-- 曲紹介カード -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold shrink-0">
                <i data-lucide="music" class="w-5 h-5"></i>
              </div>
              <div>
                <h4 class="text-lg font-bold text-neutral-900">Ojalá que llueva café (Juan Luis Guerra)</h4>
                <p class="text-xs text-neutral-500">Merengue / Latin Rhythm</p>
              </div>
            </div>
            <p class="text-xs text-neutral-700 leading-relaxed bg-neutral-50 p-3.5 rounded-xl border border-neutral-100">
              <strong>【音楽文化コラム】</strong><br>
              「空からコーヒーが降ってくればいいのに！」というユニークな歌詞で知られるメレンゲの名曲。農村の豊作と人々の幸せを祈った、温かく陽気な旋律が世界中で愛されています。
            </p>
          </div>

          <!-- 歌詞フレーズセクション -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-6">
            <div class="flex justify-between items-center border-b border-neutral-200 pb-3">
              <h4 class="text-md font-bold text-neutral-900 flex items-center space-x-2">
                <i data-lucide="mic" class="w-4 h-4 text-amber-600"></i>
                <span>名フレーズを聴いてみよう</span>
              </h4>
            </div>

            <div class="space-y-4 text-xs sm:text-sm">
              <div class="p-4 rounded-xl border-2 border-amber-200 bg-amber-50/30 hover-lift transition space-y-1">
                <div class="flex justify-between items-start">
                  <span class="font-bold text-lg text-amber-950">Ojalá que llueva café en el campo</span>
                  <button onclick="speak('Ojalá que llueva café en el campo')" class="text-amber-600 hover:text-amber-700 p-1 cursor-pointer">
                    <i data-lucide="volume-2" class="w-4 h-4"></i>
                  </button>
                </div>
                <p class="text-neutral-700 font-medium">畑にコーヒーの雨が降りますように（願望を表す Ojalá）</p>
              </div>
            </div>
          </div>

          <!-- 文法解説 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-5">
            <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
              <i data-lucide="sparkles" class="w-5 h-5 text-amber-600"></i>
              <h4 class="text-lg font-bold text-neutral-900">歌から学べる！重要表現解説</h4>
            </div>

            <div class="grid gap-4 text-xs sm:text-sm">
              <div class="p-4 rounded-xl bg-neutral-50 border border-neutral-200/60 space-y-1.5">
                <div class="flex items-center space-x-2">
                  <span class="bg-amber-600 text-white font-bold px-2 py-0.5 rounded text-xs">ポイント 1</span>
                  <span class="font-bold text-neutral-900">アラビア語由来の「Ojalá (〜だといいなぁ)」</span>
                </div>
                <p class="text-neutral-700 leading-relaxed">
                  <code class="bg-neutral-200 px-1 rounded">Ojalá</code> はアラビア語の「Inshallah（神のお望みなら）」に由来し、スペイン語で「〜でありますように！」という切実な願いを表現する非常に文化的な単語です。
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    `;
  }
};
