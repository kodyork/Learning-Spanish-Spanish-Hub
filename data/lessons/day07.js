const day07Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-amber-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-amber-950/50 px-3 py-1 rounded-full border border-amber-900/50">
            <i data-lucide="trophy" class="w-3.5 h-3.5"></i>
            <span>Day 7 Masterclass: Semana 1 Review</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 07: 第1週 総復習 ＆ ラテンの人生讃歌 『Vivir Mi Vida』
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-amber-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-amber-300 font-semibold">Semana 1 Complete Integration:</strong>
              <span class="ml-1 text-neutral-300">
                1週間の重要フレーズと、ser / estar / haber / tener / gustar の動詞の使い分けを完全に整理し、マスターします。
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

        <!-- Section 1: Detailed Explanations & Verb Matrix -->
        <section class="space-y-6">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="book-open" class="w-5 h-5 text-amber-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">1. 深掘り解説：Semana 1 核心動詞のマトリックス比較</h3>
          </div>

          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-neutral-800">
            <p class="text-neutral-700">
              第1週で学んだ最も重要で、日本語話者が最も迷いやすい5大動詞の役割をすっきり整理しましょう！
            </p>

            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse border border-neutral-200 text-xs sm:text-sm">
                <thead>
                  <tr class="bg-neutral-900 text-amber-400">
                    <th class="p-3 border border-neutral-700">動詞</th>
                    <th class="p-3 border border-neutral-700">コア概念</th>
                    <th class="p-3 border border-neutral-700">代表的な用例</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-neutral-200">
                  <tr>
                    <td class="p-3 font-bold border border-neutral-200">ser</td>
                    <td class="p-3 border border-neutral-200">本質・属性・アイデンティティ</td>
                    <td class="p-3 border border-neutral-200"><code class="bg-neutral-100 px-1 rounded">Soy japonés. / Es profesor.</code></td>
                  </tr>
                  <tr class="bg-neutral-50/50">
                    <td class="p-3 font-bold border border-neutral-200">estar</td>
                    <td class="p-3 border border-neutral-200">一時的状態・特定物の所在地</td>
                    <td class="p-3 border border-neutral-200"><code class="bg-neutral-100 px-1 rounded">Estoy bien. / El baño está aquí.</code></td>
                  </tr>
                  <tr>
                    <td class="p-3 font-bold border border-neutral-200">haber (hay)</td>
                    <td class="p-3 border border-neutral-200">不特定物の存在（〜がある）</td>
                    <td class="p-3 border border-neutral-200"><code class="bg-neutral-100 px-1 rounded">Hay un hotel cerca.</code></td>
                  </tr>
                  <tr class="bg-neutral-50/50">
                    <td class="p-3 font-bold border border-neutral-200">tener</td>
                    <td class="p-3 border border-neutral-200">所有・年齢・身体精神感覚</td>
                    <td class="p-3 border border-neutral-200"><code class="bg-neutral-100 px-1 rounded">Tengo 20 años. / Tengo hambre.</code></td>
                  </tr>
                  <tr>
                    <td class="p-3 font-bold border border-neutral-200">gustar</td>
                    <td class="p-3 border border-neutral-200">好む（主語が私を喜ばせる）</td>
                    <td class="p-3 border border-neutral-200"><code class="bg-neutral-100 px-1 rounded">Me gusta el café. / Me gustan.</code></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="space-y-2 border-l-2 border-amber-600 pl-4 mt-4">
              <h4 class="font-bold text-neutral-900 text-base">💡 Semana 1 達成のポイント</h4>
              <p class="text-neutral-600">
                この5つの動詞の感覚が掴めれば、日常会話の約半分以上の骨組みが完成したことになります。間違いを恐れず、情熱を持って音読を繰り返していきましょう！
              </p>
            </div>
          </div>
        </section>

        <!-- Section 2: Comprehensive Dialogues -->
        <section class="space-y-4">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="message-square" class="w-5 h-5 text-amber-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">2. 実践統合会話（1週間の学びを凝縮）</h3>
          </div>
          <div class="bg-white border border-neutral-200/80 rounded-xl overflow-hidden shadow-sm divide-y divide-neutral-100">
            
            <div onclick="speak('¡Hola! Buenos días. Me llamo Taro, soy de Japón y tengo 25 años.')" class="p-5 hover:bg-amber-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">¡Hola! Buenos días. Me llamo Taro, soy de Japón y tengo 25 años.</span>
                <p class="text-xs text-neutral-500 mt-1">こんにちは！私の名前はタロウです。日本出身で25歳です。</p>
              </div>
            </div>

            <div onclick="speak('Esta es mi amiga María. Es española y trabaja en un café cerca de la plaza.')" class="p-5 hover:bg-amber-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Esta es mi amiga María. Es española y trabaja en un café cerca de la plaza.</span>
                <p class="text-xs text-neutral-500 mt-1">こちらは私の友人のマリアです。スペイン人で、広場の近くのカフェで働いています。</p>
              </div>
            </div>

            <div onclick="speak('A mí me gusta mucho la música latina, ¿y a ti?')" class="p-5 hover:bg-amber-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">A mí me gusta mucho la música latina, ¿y a ti?</span>
                <p class="text-xs text-neutral-500 mt-1">私はラテン音楽が大好きです。君は？</p>
              </div>
            </div>

          </div>
        </section>

        <!-- Section 3: Quizzes -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-amber-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">3. Semana 1 総復習クイズ（全5問）</h3>
            </div>
            <span class="text-xs text-amber-600 font-semibold bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">5 Questions</span>
          </div>

          <!-- Q1 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. 年齢の表現</span>
            <p class="font-medium text-neutral-900">「私は20歳です」を表す正しい動詞は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, '¡Correcto! 年齢には tengo (tener) を使います。', '不正解！ soy (ser) は年齢には使いません。', 'Tengo 20 años')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. Tengo 20 años.</button>
              <button onclick="checkQuiz(1, 1, 0, '¡Correcto! 年齢には tengo (tener) を使います。', '不正解！ soy (ser) は年齢には使いません。', 'Tengo 20 años')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. Soy 20 años.</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. 不特定物の存在</span>
            <p class="font-medium text-neutral-900">「この近くにトイレはありますか？（¿[ ] un baño por aquí?）」に入る動詞は？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>¿</span>
              <span onclick="revealAnswer(2, 'Hay (hay)', 'hay')" id="q2-slot" class="cursor-pointer border-b-2 border-dashed border-amber-500 px-3 py-0.5 text-amber-600 font-bold hover:bg-amber-50 transition">[ クリックして答えを表示 ]</span>
              <span>un baño por aquí?</span>
            </div>
          </div>

          <!-- Q3 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q3. タイピングテスト：私と一緒に</span>
            <p class="font-medium text-neutral-900">「私と一緒に（conmigo）」を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q3-input" placeholder="入力してください..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-amber-600 w-64 bg-white">
              <button onclick="checkInput(3, ['conmigo'], 'conmigo')" class="bg-neutral-900 hover:bg-amber-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q3-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q4 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q4. gustar の複数形一致</span>
            <p class="font-medium text-neutral-900">「私はタパスが好きです（Me [ ] las tapas）」の空欄に入る動詞形は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(4, 0, 0, '¡Correcto! 主語 (las tapas) が複数なので gustan です。', '不正解！ 単数名詞なら gusta ですが、ここでは las tapas が複数です。', 'gustan')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. gustan</button>
              <button onclick="checkQuiz(4, 1, 0, '¡Correcto! 主語 (las tapas) が複数なので gustan です。', '不正解！ 単数名詞なら gusta ですが、ここでは las tapas が複数です。', 'gustan')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. gusta</button>
            </div>
            <div id="q4-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q5 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q5. 総合自己紹介</span>
            <p class="font-medium text-neutral-900">「私の名前はタロウです。日本出身で25歳です」のフルフレーズは？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(5, 'Me llamo Taro, soy de Japón y tengo 25 años. (Me llamo Taro, soy de Japón y tengo 25 años.)', 'Me llamo Taro, soy de Japón y tengo 25 años.')" id="q5-slot" class="cursor-pointer border-b-2 border-dashed border-amber-500 px-3 py-0.5 text-amber-600 font-bold hover:bg-amber-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>
        </section>

        <!-- 🎵 Section 4: Latin Music Special ＆ 歌で学ぶスペイン語 -->
        <section class="space-y-6 pt-6 border-t-2 border-neutral-200">
          <div class="border-b border-neutral-200 pb-3">
            <div class="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full mb-2">
              Day 7 Special • Week 1 Grand Finale Anthem
            </div>
            <h3 class="text-2xl font-bold text-neutral-900">
              4. アンセム『Vivir Mi Vida』で叫ぶ！人生と自由
            </h3>
            <p class="text-xs sm:text-sm text-neutral-600 mt-1">
              サルサの皇帝 Marc Anthony の超世界的大ヒット曲で第1週を熱く締めくくりましょう！
            </p>
          </div>

          <!-- 曲紹介カード -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold shrink-0">
                <i data-lucide="music" class="w-5 h-5"></i>
              </div>
              <div>
                <h4 class="text-lg font-bold text-neutral-900">Vivir Mi Vida (Marc Anthony)</h4>
                <p class="text-xs text-neutral-500">Salsa / Global Latin Anthem</p>
              </div>
            </div>
            <p class="text-xs text-neutral-700 leading-relaxed bg-neutral-50 p-3.5 rounded-xl border border-neutral-100">
              <strong>【音楽文化コラム】</strong><br>
              YouTube再生回数11億回超！「泣かないで、笑って自分の人生を生きるんだ！」というラテン魂の真骨頂。<code class="bg-neutral-200 px-1 rounded">Voy a reír, voy a bailar</code>（私は笑うぞ、踊るぞ！）という未来表現（ir a + 原形）も学べる一生もののアンセムです。
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
                  <span class="font-bold text-lg text-amber-950">¡Voy a reír, voy a bailar, vivir mi vida, lalalalá!</span>
                  <button onclick="speak('Voy a reír, voy a bailar, vivir mi vida')" class="text-amber-600 hover:text-amber-700 p-1 cursor-pointer">
                    <i data-lucide="volume-2" class="w-4 h-4"></i>
                  </button>
                </div>
                <p class="text-neutral-700 font-medium">笑うんだ、踊るんだ、自分の人生を全力で生きるんだ！</p>
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
                  <span class="font-bold text-neutral-900">近接未来「ir a + 動詞の原形 (〜するつもりだ / 〜するぞ)」</span>
                </div>
                <p class="text-neutral-700 leading-relaxed">
                  <code class="bg-neutral-200 px-1 rounded">Voy a + 原形</code>（ir の 1 人称形 + a + 動詞）は、英語の "be going to" にあたる決意や未来を表す必須構文。Semana 2 で詳しく学んでいきます！
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    `;
  }
};
