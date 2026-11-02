const day02Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-amber-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-amber-950/50 px-3 py-1 rounded-full border border-amber-900/50">
            <i data-lucide="hash" class="w-3.5 h-3.5"></i>
            <span>Day 2 Focus: Numbers & Age</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 02: 数字と年齢の表し方 (Números y edad)
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-amber-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-amber-300 font-semibold">For English Speakers:</strong>
              <span class="ml-1 text-neutral-300">
                Learn numbers from 1 to 10 and how to ask and answer about age using the verb "tener".
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

        <!-- Section 1: Detailed Explanations -->
        <section class="space-y-6">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="book-open" class="w-5 h-5 text-amber-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">1. 深掘り解説：数字と年齢の基本</h3>
          </div>

          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-neutral-800">
            <div class="space-y-2 border-l-2 border-amber-500 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">① スペイン語の数字 (1〜10)</h4>
              <p class="text-neutral-600">
                1: uno, 2: dos, 3: tres, 4: cuatro, 5: cinco<br>
                6: seis, 7: siete, 8: ocho, 9: nueve, 10: diez
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-neutral-900 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">② 年齢を尋ねる・答える</h4>
              <p class="text-neutral-600">
                スペイン語では年齢を言うときに「持つ」という意味の動詞 <strong>tener</strong> を使います。<br>
                ・<code class="bg-neutral-100 px-1 rounded">¿Cuántos años tienes?</code>（何歳ですか？）<br>
                ・<code class="bg-neutral-100 px-1 rounded">Tengo 25 años.</code>（私は25歳です。）
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
                <p class="text-xs text-neutral-500 mt-1">何歳ですか？</p>
              </div>
            </div>

            <div onclick="speak('Tengo treinta años.')" class="p-5 hover:bg-amber-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Tengo treinta años.</span>
                <p class="text-xs text-neutral-500 mt-1">私は30歳です。（treinta = 30）</p>
              </div>
            </div>

            <div onclick="speak('Uno, dos, tres, cuatro, cinco.')" class="p-5 hover:bg-amber-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Uno, dos, tres, cuatro, cinco.</span>
                <p class="text-xs text-neutral-500 mt-1">1, 2, 3, 4, 5</p>
              </div>
            </div>

          </div>
        </section>

        <!-- Section 3: Quizzes -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-amber-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">3. Day 02 実践クイズ（全3問）</h3>
            </div>
            <span class="text-xs text-amber-600 font-semibold bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">3 Questions</span>
          </div>

          <!-- Q1 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. 選択問題：数字の「3」</span>
            <p class="font-medium text-neutral-900">スペイン語で「3」を表す単語は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, '¡Correcto! tres が3です。', '不正解！ dos は2です。', 'tres')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. tres</button>
              <button onclick="checkQuiz(1, 1, 0, '¡Correcto! tres が3です。', '不正解！ dos は2です。', 'tres')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. dos</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. 穴埋め問題：年齢</span>
            <p class="font-medium text-neutral-900">「私は20歳です（Tengo [ ] años）」の空欄に入る数字は？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>Tengo</span>
              <span onclick="revealAnswer(2, 'veinte (20)', 'veinte')" id="q2-slot" class="cursor-pointer border-b-2 border-dashed border-amber-500 px-3 py-0.5 text-amber-600 font-bold hover:bg-amber-50 transition">[ クリックして答えを表示 ]</span>
              <span>años.</span>
            </div>
          </div>

          <!-- Q3 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q3. タイピングテスト：年齢の尋ね方</span>
            <p class="font-medium text-neutral-900">「何歳ですか？（cuantos anos tienes ※アクセント記号省略可）」を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q3-input" placeholder="入力してください..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-amber-600 w-64 bg-white">
              <button onclick="checkInput(3, ['¿Cuántos años tienes?', 'cuantos anos tienes', 'cuántos años tienes'], '¿Cuántos años tienes?')" class="bg-neutral-900 hover:bg-amber-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q3-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>
        </section>

      </main>
    `;
  }
};
