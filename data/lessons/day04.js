const day04Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-amber-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-amber-950/50 px-3 py-1 rounded-full border border-amber-900/50">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
            <span>Day 4 Comprehensive Masterclass</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 04: 職業と国籍の表現 ＆ 動詞 ser の本質とアイデンティティ
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-amber-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-amber-300 font-semibold">From A1 Basics to B2 Nuances:</strong>
              <span class="ml-1 text-neutral-300">
                国籍・職業の性数変化と無冠詞ルール、そして "ser"（永久的属性）と "estar"（一時的状態）を見分けるB2思考法をマスターします。
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
            <h3 class="text-xl font-bold text-neutral-900">1. 深掘り解説：職業・国籍の文法と "ser" の本質</h3>
          </div>

          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-neutral-800">
            <div class="space-y-2 border-l-2 border-amber-500 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">① 国籍と職業の性数変化 ＆ 職業の無冠詞ルール</h4>
              <p class="text-neutral-600">
                ・国籍：<code class="bg-neutral-100 px-1 rounded">japonés / japonesa</code>（日本人）、<code class="bg-neutral-100 px-1 rounded">español / española</code>（スペイン人）、<code class="bg-neutral-100 px-1 rounded">mexicano / mexicana</code>（メキシコ人）<br>
                ・職業：<code class="bg-neutral-100 px-1 rounded">estudiante</code>（学生・男女同形）、<code class="bg-neutral-100 px-1 rounded">profesor / profesora</code>（先生・名詞の性変化）<br>
                ※ <strong>A1の重要ルール：</strong>「私は学生です」と言う時、英語（I am a student）と異なり不定冠詞（un / una）をつけずに <code class="bg-neutral-100 px-1 rounded">Soy estudiante.</code> と言うのが原則です。
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-neutral-900 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">② B2応用：ser と estar の決定的な使い分け（本質 vs 状態）</h4>
              <p class="text-neutral-600">
                スペイン語には「〜である」を表す動詞が2つ存在します。<br>
                ・<strong>ser:</strong> 変わらない本質・属性・アイデンティティ（国籍、職業、性格、出身地など）<br>
                ・<strong>estar:</strong> 一時的な状態や場所（感情、体調、位置など）<br>
                例：<code class="bg-neutral-100 px-1 rounded">Soy alegre.</code>（私は明るい性格だ＝ser） vs <code class="bg-neutral-100 px-1 rounded">Estoy alegre.</code>（私は今気分が明るい＝estar）
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-amber-600 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">💡 豆知識：ラテンアメリカの多様性とアイデンティティ（Mestizaje）</h4>
              <p class="text-neutral-600">
                中南米では、先住民族、ヨーロッパ系、アフリカ系、アジア系などの多様な文化と血統が融合した「メスチソ（Mestizaje）」文化が根付いています。そのため、国籍やルーツを尋ねる質問（¿De dónde eres?）は、お互いのルーツや文化を尊重しあう会話の第一歩として非常に大切にされています。
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
            
            <div onclick="speak('¿De dónde eres? — Soy de Japón, soy japonés.')" class="p-5 hover:bg-amber-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">¿De dónde eres? — Soy de Japón, soy japonés.</span>
                <p class="text-xs text-neutral-500 mt-1">出身はどこですか？ — 日本出身です、日本人です。（男性が答える場合）</p>
              </div>
            </div>

            <div onclick="speak('¿A qué te dedicas? — Soy profesora de español.')" class="p-5 hover:bg-amber-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">¿A qué te dedicas? — Soy profesora de español.</span>
                <p class="text-xs text-neutral-500 mt-1">お仕事は何をされていますか？ — スペイン語の教師です。（女性が答える場合）</p>
              </div>
            </div>

            <div onclick="speak('Mi amigo es ingeniero y vive en México.')" class="p-5 hover:bg-amber-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Mi amigo es ingeniero y vive en México.</span>
                <p class="text-xs text-neutral-500 mt-1">私の友人はエンジニアでメキシコに住んでいます。</p>
              </div>
            </div>

          </div>
        </section>

        <!-- Section 3: Quizzes -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-amber-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">3. Day 04 実践クイズ（全5問）</h3>
            </div>
            <span class="text-xs text-amber-600 font-semibold bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">5 Questions</span>
          </div>

          <!-- Q1 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. 選択問題：女性の日本人</span>
            <p class="font-medium text-neutral-900">女性が「私は日本人です」と言う場合の正しい表現は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, '¡Correcto! Soy japonesa です。', '不正解！ japonés は男性形です。', 'Soy japonesa')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. Soy japonesa</button>
              <button onclick="checkQuiz(1, 1, 0, '¡Correcto! Soy japonesa です。', '不正解！ japonés は男性形です。', 'Soy japonesa')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. Soy japonés</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. 穴埋め問題：出身</span>
            <p class="font-medium text-neutral-900">「〜出身です（Soy [ ] Japón）」の空欄に入る前置詞は？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>Soy</span>
              <span onclick="revealAnswer(2, 'de (de)', 'de')" id="q2-slot" class="cursor-pointer border-b-2 border-dashed border-amber-500 px-3 py-0.5 text-amber-600 font-bold hover:bg-amber-50 transition">[ クリックして答えを表示 ]</span>
              <span>Japón.</span>
            </div>
          </div>

          <!-- Q3 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q3. タイピングテスト：学生</span>
            <p class="font-medium text-neutral-900">「学生（estudiante）」を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q3-input" placeholder="入力してください..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-amber-600 w-64 bg-white">
              <button onclick="checkInput(3, ['estudiante'], 'estudiante')" class="bg-neutral-900 hover:bg-amber-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q3-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q4 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q4. B2応用：ser vs estar</span>
            <p class="font-medium text-neutral-900">職業や本質的な属性を表すときに使う動詞は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(4, 0, 0, '¡Correcto! ser は本質や属性を表します。', '不正解！ estar は一時的な状態や場所を表します。', 'ser')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. ser</button>
              <button onclick="checkQuiz(4, 1, 0, '¡Correcto! ser は本質や属性を表します。', '不正解！ estar は一時的な状態や場所を表します。', 'ser')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. estar</button>
            </div>
            <div id="q4-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q5 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q5. 総合フレーズ</span>
            <p class="font-medium text-neutral-900">「出身はどこですか？ — 日本出身です」のフルフレーズは？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(5, '¿De dónde eres? — Soy de Japón. (¿De dónde eres? — Soy de Japón.)', '¿De dónde eres? — Soy de Japón.')" id="q5-slot" class="cursor-pointer border-b-2 border-dashed border-amber-500 px-3 py-0.5 text-amber-600 font-bold hover:bg-amber-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>
        </section>

        <!-- 🎵 Section 4: Latin Music Special ＆ 歌で学ぶスペイン語 -->
        <section class="space-y-6 pt-6 border-t-2 border-neutral-200">
          <div class="border-b border-neutral-200 pb-3">
            <div class="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full mb-2">
              Day 4 Special • Self Identity & Latin Beat
            </div>
            <h3 class="text-2xl font-bold text-neutral-900">
              4. アンセム『Soy Yo』で覚える ser と自分らしさ
            </h3>
            <p class="text-xs sm:text-sm text-neutral-600 mt-1">
              コロンビアの人気バンド Bomba Estéreo の世界的大ヒット曲から、強烈なアイデンティティ表現を学ぼう！
            </p>
          </div>

          <!-- 曲紹介カード -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold shrink-0">
                <i data-lucide="music" class="w-5 h-5"></i>
              </div>
              <div>
                <h4 class="text-lg font-bold text-neutral-900">Soy Yo (Bomba Estéreo)</h4>
                <p class="text-xs text-neutral-500">Electro Latin / Cumbia Fusion</p>
              </div>
            </div>
            <p class="text-xs text-neutral-700 leading-relaxed bg-neutral-50 p-3.5 rounded-xl border border-neutral-100">
              <strong>【音楽文化コラム】</strong><br>
              映画やCMでも引っ張りだこの『Soy Yo（それが私！）』。「他人の目なんて気にしない、これが私なんだから！」と自己肯定感を全力で歌った讃歌です。"Soy" という動詞 ser のパワーを直感的に学べる最高の一曲です。
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
                  <span class="font-bold text-lg text-amber-950">No te preocupes si no te aprueban, ¡Soy yo!</span>
                  <button onclick="speak('No te preocupes si no te aprueban, Soy yo!')" class="text-amber-600 hover:text-amber-700 p-1 cursor-pointer">
                    <i data-lucide="volume-2" class="w-4 h-4"></i>
                  </button>
                </div>
                <p class="text-neutral-700 font-medium">誰にも認められなくたって心配しないで、これが私なんだから！</p>
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
                  <span class="font-bold text-neutral-900">「Soy yo」で表す強力な主語強調</span>
                </div>
                <p class="text-neutral-700 leading-relaxed">
                  英語の "It's me" に相当する <code class="bg-neutral-200 px-1 rounded">Soy yo</code> ですが、動詞 ser を使うことで「紛れもない私自身という存在そのもの」を力強く自己主張するフレーズになります。
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    `;
  }
};
