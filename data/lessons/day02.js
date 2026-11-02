const day02Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-amber-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-amber-950/50 px-3 py-1 rounded-full border border-amber-900/50">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
            <span>Day 2 Comprehensive Masterclass</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 02: 数字と年齢の表し方 ＆ 動詞 tener の本質とラテンポップ
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-amber-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-amber-300 font-semibold">From A1 Basics to B2 Nuances:</strong>
              <span class="ml-1 text-neutral-300">
                基数詞 (1-10) と動詞 "tener" による年齢表現、さらに身体・精神状態を表す "tener + 名詞" 構文の奥深さを学びます。
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
            <h3 class="text-xl font-bold text-neutral-900">1. 深掘り解説：数字の仕組みと動詞 tener の変幻自在な用法</h3>
          </div>

          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-neutral-800">
            <div class="space-y-2 border-l-2 border-amber-500 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">① スペイン語の基本数字 (1〜10) と「1 (uno)」の変化規則</h4>
              <p class="text-neutral-600">
                ・1: <code class="bg-neutral-100 px-1 rounded">uno</code>, 2: <code class="bg-neutral-100 px-1 rounded">dos</code>, 3: <code class="bg-neutral-100 px-1 rounded">tres</code>, 4: <code class="bg-neutral-100 px-1 rounded">cuatro</code>, 5: <code class="bg-neutral-100 px-1 rounded">cinco</code><br>
                ・6: <code class="bg-neutral-100 px-1 rounded">seis</code>, 7: <code class="bg-neutral-100 px-1 rounded">siete</code>, 8: <code class="bg-neutral-100 px-1 rounded">ocho</code>, 9: <code class="bg-neutral-100 px-1 rounded">nueve</code>, 10: <code class="bg-neutral-100 px-1 rounded">diez</code><br>
                ※ <strong>A1〜B2共通の重要ルール：</strong>「1」は男性名詞の前で <code class="bg-neutral-100 px-1 rounded">un</code>（例：un año）、女性名詞の前で <code class="bg-neutral-100 px-1 rounded">una</code>（例：una persona）に形が変わります。
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-neutral-900 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">② 年齢だけじゃない！動詞 tener（持つ）のB2応用構文</h4>
              <p class="text-neutral-600">
                スペイン語では年齢を「〜歳の年を所有している」と考えて <code class="bg-neutral-100 px-1 rounded">Tengo 20 años.</code> と表現します。<br>
                さらに、英語で "be hungry" や "be afraid" と形容詞で表す感覚を、スペイン語では <strong>tener + 抽象名詞</strong> で表す特徴があります。<br>
                ・<code class="bg-neutral-100 px-1 rounded">tener hambre</code>（空腹を持つ＝お腹が空いている）<br>
                ・<code class="bg-neutral-100 px-1 rounded">tener frío / calor</code>（寒さ/暑さを持つ＝寒い/暑い）<br>
                ・<code class="bg-neutral-100 px-1 rounded">tener prisa</code>（急ぎを持つ＝急いでいる）
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-amber-600 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">💡 豆知識：ラテンアメリカにおける「年齢」と敬意の文化</h4>
              <p class="text-neutral-600">
                中南米文化では、年齢を聞くこと自体は失礼にあたらないことが多いですが、敬意を払うべき年配者に対しては <code class="bg-neutral-100 px-1 rounded">¿Cuántos años tiene (usted)?</code> と三人称敬称を使うのがマナーです。また、15歳の誕生日（Quinceañera）は少女から大人への一歩として、結婚式並みに盛大に祝われる文化的な節目となっています。
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
            
            <div onclick="speak('¿Cuántos años tienes?')" class="p-5 hover:bg-amber-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">¿Cuántos años tienes?</span>
                <p class="text-xs text-neutral-500 mt-1">君は何歳ですか？</p>
              </div>
            </div>

            <div onclick="speak('Tengo veinticinco años. ¿Y tú?')" class="p-5 hover:bg-amber-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Tengo veinticinco años. ¿Y tú?</span>
                <p class="text-xs text-neutral-500 mt-1">私は25歳です。君は？（veinticinco = 25）</p>
              </div>
            </div>

            <div onclick="speak('Tengo mucho hambre, ¿vamos a comer?')" class="p-5 hover:bg-amber-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Tengo mucho hambre, ¿vamos a comer?</span>
                <p class="text-xs text-neutral-500 mt-1">すごくお腹が空いたな、ご飯食べに行こうか？</p>
              </div>
            </div>

          </div>
        </section>

        <!-- Section 3: Quizzes -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-amber-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">3. Day 02 実践クイズ（全5問）</h3>
            </div>
            <span class="text-xs text-amber-600 font-semibold bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">5 Questions</span>
          </div>

          <!-- Q1 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. 選択問題：数字の「5」</span>
            <p class="font-medium text-neutral-900">スペイン語で数字の「5」を表す単語は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, '¡Correcto! cinco が5です。', '不正解！ cuatro は4です。', 'cinco')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. cinco</button>
              <button onclick="checkQuiz(1, 1, 0, '¡Correcto! cinco が5です。', '不正解！ cuatro は4です。', 'cinco')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. cuatro</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. 穴埋め問題：年齢を答える</span>
            <p class="font-medium text-neutral-900">「私は30歳です（[ ] treinta años）」の空欄に入る tener 動詞の1人称形は？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(2, 'Tengo (tengo)', 'tengo')" id="q2-slot" class="cursor-pointer border-b-2 border-dashed border-amber-500 px-3 py-0.5 text-amber-600 font-bold hover:bg-amber-50 transition">[ クリックして答えを表示 ]</span>
              <span>treinta años.</span>
            </div>
          </div>

          <!-- Q3 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q3. タイピングテスト：何歳ですか？</span>
            <p class="font-medium text-neutral-900">「何歳ですか？（cuantos anos tienes ※記号省略可）」を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q3-input" placeholder="入力してください..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-amber-600 w-64 bg-white">
              <button onclick="checkInput(3, ['¿Cuántos años tienes?', 'cuantos anos tienes', 'cuántos años tienes'], '¿Cuántos años tienes?')" class="bg-neutral-900 hover:bg-amber-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q3-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q4 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q4. B2応用：お腹が空いている</span>
            <p class="font-medium text-neutral-900">「お腹が空いている」を表す正しいフレーズは？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(4, 0, 0, '¡Correcto! tener hambre です。', '不正解！ estar hambriento も可能ですが、日常会話では tener hambre が最も一般的です。', 'tener hambre')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. tener hambre</button>
              <button onclick="checkQuiz(4, 1, 0, '¡Correcto! tener hambre です。', '不正解！ estar hambriento も可能ですが、日常会話では tener hambre が最も一般的です。', 'tener hambre')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. ser hambre</button>
            </div>
            <div id="q4-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q5 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q5. 総合フレーズ</span>
            <p class="font-medium text-neutral-900">「すごくお腹が空いたな、ご飯食べに行こうか？」のフルフレーズは？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(5, 'Tengo mucho hambre, ¿vamos a comer? (Tengo mucho hambre, ¿vamos a comer?)', 'Tengo mucho hambre, ¿vamos a comer?')" id="q5-slot" class="cursor-pointer border-b-2 border-dashed border-amber-500 px-3 py-0.5 text-amber-600 font-bold hover:bg-amber-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>
        </section>

        <!-- 🎵 Section 4: Latin Pop Special ＆ 歌で学ぶスペイン語 -->
        <section class="space-y-6 pt-6 border-t-2 border-neutral-200">
          <div class="border-b border-neutral-200 pb-3">
            <div class="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full mb-2">
              Day 2 Special • Latin Anthem & Rhythm
            </div>
            <h3 class="text-2xl font-bold text-neutral-900">
              4. アンセム曲『La Gozadera』で覚える tener と躍動感
            </h3>
            <p class="text-xs sm:text-sm text-neutral-600 mt-1">
              キューバ出身の Gente de Zona とマーク・アンソニーによる超ヒット曲から、ラテン諸国の繋がりと「tener」の使い方を歌で学ぼう！
            </p>
          </div>

          <!-- 曲紹介カード -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold shrink-0">
                <i data-lucide="music" class="w-5 h-5"></i>
              </div>
              <div>
                <h4 class="text-lg font-bold text-neutral-900">La Gozadera (Gente de Zona ft. Marc Anthony)</h4>
                <p class="text-xs text-neutral-500">Salsa / Reggaeton Fusion</p>
              </div>
            </div>
            <p class="text-xs text-neutral-700 leading-relaxed bg-neutral-50 p-3.5 rounded-xl border border-neutral-100">
              <strong>【音楽文化コラム】</strong><br>
              「Gozadera」とは「最高のお祭り騒ぎ・大楽しみ」という意味！歌詞の中では中南米各国の名前が次々とコールされ、ラテンアメリカ全体の強い絆と情熱が歌われています。
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
                  <span class="font-bold text-lg text-amber-950">Y el ritmo me manda a llamar</span>
                  <button onclick="speak('Y el ritmo me manda a llamar')" class="text-amber-600 hover:text-amber-700 p-1 cursor-pointer">
                    <i data-lucide="volume-2" class="w-4 h-4"></i>
                  </button>
                </div>
                <p class="text-neutral-700 font-medium">そしてこのリズムが私を呼び寄せるんだ（Day 1の動詞 llamar も登場！）</p>
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
                  <span class="font-bold text-neutral-900">「tener + 理由・根拠」のニュアンス</span>
                </div>
                <p class="text-neutral-700 leading-relaxed">
                  歌詞で使われる <code class="bg-neutral-200 px-1 rounded">Tiene la razón</code>（彼女/それは正解だ・一理ある）のように、<code class="bg-neutral-200 px-1 rounded">tener</code> は「属性や権利・正しさを保持している」という場面で広く活躍します。
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    `;
  }
};
