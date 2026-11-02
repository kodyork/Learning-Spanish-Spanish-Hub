const day03Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-amber-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-amber-950/50 px-3 py-1 rounded-full border border-amber-900/50">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
            <span>Day 3 Comprehensive Masterclass</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 03: 家族の紹介と所有表現 ＆ 前置詞詞・関わりの文法
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-amber-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-amber-300 font-semibold">From A1 Basics to B2 Nuances:</strong>
              <span class="ml-1 text-neutral-300">
                家族の単語と所有形容詞 (mi/mis) の性数一致、さらに前置詞とともに使う代名詞 (conmigo / para mí) の不規則変化をマスターします。
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
            <h3 class="text-xl font-bold text-neutral-900">1. 深掘り解説：家族表現・所有代名詞と前置詞格</h3>
          </div>

          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-neutral-800">
            <div class="space-y-2 border-l-2 border-amber-500 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">① 家族の名称と所有形容詞 (mi / mis) の一致ルール</h4>
              <p class="text-neutral-600">
                ・<code class="bg-neutral-100 px-1 rounded">padre</code>（父） / <code class="bg-neutral-100 px-1 rounded">madre</code>（母） / <code class="bg-neutral-100 px-1 rounded">padres</code>（両親）<br>
                ・<code class="bg-neutral-100 px-1 rounded">hermano</code>（兄弟） / <code class="bg-neutral-100 px-1 rounded">hermana</code>（姉妹）<br>
                ・<code class="bg-neutral-100 px-1 rounded">hijo</code>（息子） / <code class="bg-neutral-100 px-1 rounded">hija</code>（娘）<br>
                ※ <strong>ポイント：</strong>所有形容詞は「所有される名詞の数」に一致します。単数なら <code class="bg-neutral-100 px-1 rounded">mi madre</code>、複数なら <code class="bg-neutral-100 px-1 rounded">mis padres</code> となります。
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-neutral-900 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">② B2応用：前置詞と一緒に使う人称代名詞（mí / tí と con の特殊形）</h4>
              <p class="text-neutral-600">
                前置詞（para, de, en など）の後ろでは、私＝<code class="bg-neutral-100 px-1 rounded">mí</code>（アクセント記号あり）、君＝<code class="bg-neutral-100 px-1 rounded">ti</code> となります（例：para mí ＝ 私にとって）。<br>
                さらに、前置詞 <strong>con（〜と一緒に）</strong> と結合すると特別な形に変化します：<br>
                ・<code class="bg-neutral-100 px-1 rounded">conmigo</code>（私と一緒に）<br>
                ・<code class="bg-neutral-100 px-1 rounded">contigo</code>（君と一緒に）
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-amber-600 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">💡 豆知識：スペイン語圏における「2つの苗字（Apellidos）」文化</h4>
              <p class="text-neutral-600">
                スペインや中南米では、正式な名前には **父方の姓 + 母方の姓** の2つの苗字がつきます。（例：Gabriel García Márquez の場合、García が父方、Márquez が母方）。結婚しても女性は苗字を変えない（夫婦別姓が一般的）のも、家族の血統を尊重するラテン文化の特徴です。
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
            
            <div onclick="speak('Esta es mi familia. Te presento a mi madre.')" class="p-5 hover:bg-amber-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Esta es mi familia. Te presento a mi madre.</span>
                <p class="text-xs text-neutral-500 mt-1">こちらは私の家族です。私の母を紹介するね。</p>
              </div>
            </div>

            <div onclick="speak('Tengo un hermano mayor y una hermana menor.')" class="p-5 hover:bg-amber-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Tengo un hermano mayor y una hermana menor.</span>
                <p class="text-xs text-neutral-500 mt-1">私には兄が1人と妹が1人います。（mayor=年上 / menor=年下）</p>
              </div>
            </div>

            <div onclick="speak('¿Quieres venir a cenar conmigo y con mi familia?')" class="p-5 hover:bg-amber-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">¿Quieres venir a cenar conmigo y con mi familia?</span>
                <p class="text-xs text-neutral-500 mt-1">私と私の家族と一緒に夕食を食べに来ない？</p>
              </div>
            </div>

          </div>
        </section>

        <!-- Section 3: Quizzes -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-amber-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">3. Day 03 実践クイズ（全5問）</h3>
            </div>
            <span class="text-xs text-amber-600 font-semibold bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">5 Questions</span>
          </div>

          <!-- Q1 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. 選択問題：母</span>
            <p class="font-medium text-neutral-900">「母」を表す正しいスペイン語は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, '¡Correcto! madre です。', '不正解！ padre は父です。', 'madre')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. madre</button>
              <button onclick="checkQuiz(1, 1, 0, '¡Correcto! madre です。', '不正解！ padre は父です。', 'madre')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. padre</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. 穴埋め問題：所有形容詞（複数形）</span>
            <p class="font-medium text-neutral-900">「私の両親（[ ] padres）」の空欄に入る複数形の所有形容詞は？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(2, 'Mis (mis)', 'mis')" id="q2-slot" class="cursor-pointer border-b-2 border-dashed border-amber-500 px-3 py-0.5 text-amber-600 font-bold hover:bg-amber-50 transition">[ クリックして答えを表示 ]</span>
              <span>padres.</span>
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
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q4. B2応用：君と一緒に</span>
            <p class="font-medium text-neutral-900">「君と一緒に」を表す正しい一語の形は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(4, 0, 0, '¡Correcto! contigo です。', '不正解！ con ti という言い方はせず contigo に変化します。', 'contigo')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. contigo</button>
              <button onclick="checkQuiz(4, 1, 0, '¡Correcto! contigo です。', '不正解！ con ti という言い方はせず contigo に変化します。', 'contigo')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. con ti</button>
            </div>
            <div id="q4-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q5 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q5. 総合フレーズ</span>
            <p class="font-medium text-neutral-900">「私と私の家族と一緒に夕食を食べに来ない？」のフルフレーズは？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(5, '¿Quieres venir a cenar conmigo y con mi familia? (¿Quieres venir a cenar conmigo y con mi familia?)', '¿Quieres venir a cenar conmigo y con mi familia?')" id="q5-slot" class="cursor-pointer border-b-2 border-dashed border-amber-500 px-3 py-0.5 text-amber-600 font-bold hover:bg-amber-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>
        </section>

        <!-- 🎵 Section 4: Latin Music Special ＆ 歌で学ぶスペイン語 -->
        <section class="space-y-6 pt-6 border-t-2 border-neutral-200">
          <div class="border-b border-neutral-200 pb-3">
            <div class="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full mb-2">
              Day 3 Special • Latin Ballad & Emotion
            </div>
            <h3 class="text-2xl font-bold text-neutral-900">
              4. ラテンの名曲で学ぶ「contigo / conmigo」の絆
            </h3>
            <p class="text-xs sm:text-sm text-neutral-600 mt-1">
              愛や家族、絆を歌うラテンミュージックの中で最も頻出する前置詞表現を体感しましょう。
            </p>
          </div>

          <!-- 曲紹介カード -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold shrink-0">
                <i data-lucide="music" class="w-5 h-5"></i>
              </div>
              <div>
                <h4 class="text-lg font-bold text-neutral-900">Contigo en la Distancia (Joaquín Prieto)</h4>
                <p class="text-xs text-neutral-500">Classic Bolero Standard</p>
              </div>
            </div>
            <p class="text-xs text-neutral-700 leading-relaxed bg-neutral-50 p-3.5 rounded-xl border border-neutral-100">
              <strong>【音楽文化コラム】</strong><br>
              ボレロの名曲『Contigo en la distancia（遠く離れていても君と共に）』は、クリスティーナ・アギレラやルイス・ミゲルなど数々の巨星がカバーしてきたバラードの至宝。「離れていても心はいつも一緒」というラテンの熱い情愛が込められています。
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
                  <span class="font-bold text-lg text-amber-950">No hay espacio en que no estés, tú estás conmigo</span>
                  <button onclick="speak('No hay espacio en que no estés, tú estás conmigo')" class="text-amber-600 hover:text-amber-700 p-1 cursor-pointer">
                    <i data-lucide="volume-2" class="w-4 h-4"></i>
                  </button>
                </div>
                <p class="text-neutral-700 font-medium">君がいない場所なんてない、君はいつでも私と共にいるんだから</p>
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
                  <span class="font-bold text-neutral-900">「estás conmigo」で表す存在と安心感</span>
                </div>
                <p class="text-neutral-700 leading-relaxed">
                  <code class="bg-neutral-200 px-1 rounded">estar + conmigo / contigo</code> は「物理的に隣にいる」だけでなく「精神的に寄り添っている」という温かい絆を表すスペイン語ならではの表現です。
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    `;
  }
};
