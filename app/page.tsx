export default function Home() {
  return (
    <>
      {/* ========== ナビゲーション ========== */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-stone/20">
        {/* 電話帯（40代以降は電話を好む） */}
        <div className="hidden md:block bg-forest text-white/80 text-xs py-1">
          <div className="max-w-6xl mx-auto px-4 flex justify-end items-center gap-4">
            <span>お電話でのご予約・お問い合わせ</span>
            <a href="tel:076-436-0191" className="text-gold-light font-bold tracking-wider">076-436-0191</a>
            <span className="text-white/70">（9:00〜20:00）</span>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#" className="flex items-baseline gap-2">
            <span className="font-[family-name:var(--font-heading)] text-forest font-bold text-lg tracking-wider">呉羽山めぐり</span>
            <span className="text-stone text-xs hidden sm:inline">フットパス ガイドツアー</span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm text-earth">
            <a href="#tour" className="hover:text-forest transition-colors">ツアー概要</a>
            <a href="#day1" className="hover:text-forest transition-colors">1日目</a>
            <a href="#day2" className="hover:text-forest transition-colors">2日目</a>
            <a href="#guide" className="hover:text-forest transition-colors">ガイド</a>
            <a href="#stay" className="hover:text-forest transition-colors">宿泊</a>
            <a href="#booking" className="bg-forest text-white px-5 py-2 rounded-full hover:bg-forest-light transition-colors">
              予約する
            </a>
          </div>
          {/* モバイル: 電話+予約 */}
          <div className="md:hidden flex items-center gap-2">
            <a href="tel:076-436-0191" className="text-forest text-sm font-bold px-3 py-2 border border-forest/20 rounded-full">
              電話
            </a>
            <a
              href="#booking"
              className="bg-forest text-white text-sm px-4 py-2 rounded-full"
            >
              予約
            </a>
          </div>
        </div>
      </nav>

      {/* ========== ヒーロー ==========
        素材リスト:
        - 背景: 呉羽山展望台から立山連峰のパノラマ写真（手前にフットパスを歩くガイドと参加者2-3名の後ろ姿）
        - 山シルエットSVG: /decorations/mountain-silhouette.svg
        - 葉装飾SVG: /decorations/leaf-branch.svg
      */}
      <section className="relative min-h-[90vh] flex items-end pb-20 pt-32 md:pt-0 md:items-center overflow-hidden">
        <img src="/kari/hero.jpg" alt="フットパス連絡橋を渡るガイドと参加者" className="absolute inset-0 w-full h-full object-cover hidden md:block" />
        <img src="/kari/hero-sp.jpg" alt="フットパス連絡橋を渡るガイドと参加者" className="absolute inset-0 w-full h-full object-cover md:hidden" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-charcoal/10" />
        {/* 装飾SVG: 後で差し替え */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
          {/* カテゴリラベル: 一目で何のサイトかわかる */}
          <p className="text-gold-light font-bold text-sm md:text-base tracking-wider mb-4 border border-gold-light/40 inline-block px-4 py-1 rounded-full">
            呉羽丘陵フットパス ガイドツアー
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.15] mb-8 max-w-3xl">
            立山を仰ぐ、<br />
            森の小道を歩こう。
          </h1>
          <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16">
            <div className="max-w-md">
              <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6">
                富山駅からたった10分。全長6.8kmの尾根道を<br className="hidden md:block" />
                地元のくれはマイスターと歩く、1泊2日の週末旅。
              </p>
              <a
                href="#tour"
                className="inline-block bg-white text-forest font-bold px-8 py-4 rounded-full text-base hover:bg-cream transition-colors"
              >
                ツアーの詳細を見る
              </a>
            </div>
            {/* 右側にキーファクト（非対称レイアウト） */}
            <div className="flex gap-6 text-white/70 text-sm">
              <div>
                <p className="text-gold-light font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold">6.8<span className="text-lg">km</span></p>
                <p>フットパス全長</p>
              </div>
              <div>
                <p className="text-gold-light font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold">1泊2日</p>
                <p>ガイド付きツアー</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== イントロ: この場所の魅力 ==========
        素材リスト:
        - 等高線SVG: /decorations/topo-lines.svg（左装飾）
        - 和紙テクスチャ: texture-washi クラス
      */}
      <section className="py-12 md:py-16 bg-cream texture-washi overflow-hidden">
        {/* 等高線テクスチャ（左側にうっすら） */}
<div className="max-w-5xl mx-auto px-4 relative z-10">
          {/* フットパス2026 — トレンド先出し（下部セクションと同じデザイン） */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-20">
            <div>
              <p className="text-gold font-[family-name:var(--font-heading)] text-sm tracking-[0.2em] mb-4">
                KUREHA FOOTPATH
              </p>
              <h3 className="font-[family-name:var(--font-heading)] text-charcoal text-2xl md:text-3xl font-bold mb-6 leading-snug">
                呉羽丘陵フットパス、<br />
                2026年度 全線開通。
              </h3>
              <div className="w-12 h-0.5 bg-gold/40 mb-6" />
              <p className="text-earth text-base leading-loose mb-6">
                全長6.8km、呉羽丘陵の尾根を縦走する自然歩道。
                2023年に全長124mの連絡橋が開通し、
                2026年度前半には周辺広場を含む全線が供用開始予定。
                Park-PFIによる飲食・物販施設「AMANDAN PEAK」も併設され、
                富山の新しい観光拠点が誕生します。
              </p>
              <a
                href="https://www.city.toyama.lg.jp/shisei/machizukuri/1010816/1010817/1017283/1012305.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest underline underline-offset-4 decoration-forest/30 hover:decoration-forest transition-colors"
              >
                富山市公式：呉羽丘陵フットパスとは
              </a>
            </div>
            <div className="space-y-4">
              {/* <!-- 素材: フットパス連絡橋の空撮写真 --> */}
              <img src="/kari/footpath-bridge.jpg" alt="フットパス連絡橋（全長124m）の空撮写真" className="rounded-xl w-full object-cover" style={{ aspectRatio: "16/9" }} />
              {/* <!-- 素材: AMANDAN PEAK完成イメージ --> */}
              <img src="/kari/amandan-peak.jpg" alt="AMANDAN PEAK 外観イメージ" className="rounded-xl w-full object-cover" style={{ aspectRatio: "16/9" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ========== ABOUT KUREHA ==========
        素材リスト:
        - 背景装飾: なし（数字セクション、シンプルに）
      */}
      <section className="py-12 md:py-16 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-gold font-[family-name:var(--font-heading)] text-sm tracking-[0.2em] mb-4">
              ABOUT KUREHA
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-charcoal text-2xl md:text-4xl font-bold leading-snug mb-8">
              4,000年の歴史が眠る、<br />
              街のすぐそばの別世界。
            </h2>
            {/* 飾り線 */}
            <div className="w-16 h-0.5 bg-gold/40 mx-auto mb-8" />
            <p className="text-earth text-base md:text-lg leading-loose max-w-2xl mx-auto mb-10">
              富山を東西に分ける呉羽丘陵。標高わずか70mのこの丘には、
              弥生の古墳群、535体の石仏、戦国の城跡、
              そして立山連峰3,000m級の大パノラマが凝縮されています。
              全長6.8kmのフットパスは、森の息づかいと歴史の重なりを
              ゆっくり味わうための道。
            </p>
            {/* なぜ呉羽山なのか — 数字で語る */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { number: "10分", label: "富山駅から" },
                { number: "535体", label: "石仏（五百羅漢）" },
                { number: "4,000年", label: "の歴史が眠る" },
                { number: "3,000m", label: "級の山々を望む" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <p className="font-[family-name:var(--font-heading)] text-forest text-2xl md:text-3xl font-bold">{item.number}</p>
                  <p className="text-stone text-xs mt-1">{item.label}</p>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* ========== ツアー概要 ==========
        素材リスト:
        - ドットパターン: pattern-dots クラス
      */}
      <section id="tour" className="py-16 md:py-24 bg-cream scroll-mt-16 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <p className="text-gold font-[family-name:var(--font-heading)] text-sm tracking-[0.2em] mb-4">
            TOUR OVERVIEW
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-charcoal text-2xl md:text-4xl font-bold mb-6">
            1泊2日、呉羽山を歩き尽くす。
          </h2>
          <div className="w-12 h-0.5 bg-gold/40 mb-10" />

          {/* 左：テキスト情報、右：料金と含まれるもの */}
          <div className="grid md:grid-cols-5 gap-10 md:gap-16">
            {/* 左カラム: ツアーの要点をテキストで */}
            <div className="md:col-span-3 space-y-8">
              <p className="text-earth text-base md:text-lg leading-loose">
                土日1泊2日、月1回開催。
                くれはマイスターが全行程に同行し、
                ガイドブックには載らない呉羽の物語を語ります。
                標高差わずか70m、整備された遊歩道なので特別な装備は不要。
                少人数制で、気になる場所でいつでも立ち止まれます。
              </p>

              <div className="border-l-2 border-gold/40 pl-6 space-y-4 text-earth">
                <div className="flex items-baseline gap-4">
                  <span className="text-stone text-sm shrink-0 w-16">日程</span>
                  <span className="font-bold">土日 1泊2日（月1回開催予定）</span>
                </div>
                <div className="flex items-baseline gap-4">
                  <span className="text-stone text-sm shrink-0 w-16">定員</span>
                  <span className="font-bold">8〜15名</span>
                </div>
                <div className="flex items-baseline gap-4">
                  <span className="text-stone text-sm shrink-0 w-16">集合</span>
                  <span className="font-bold">富山駅（送迎バスあり / タクシー可）</span>
                </div>
                <div className="flex items-baseline gap-4">
                  <span className="text-stone text-sm shrink-0 w-16">装備</span>
                  <span className="font-bold">歩きやすい靴だけ</span>
                </div>
              </div>

              <div className="border-l-2 border-gold/40 pl-6 mt-6">
                <p className="text-stone text-sm">料金目安</p>
                <p className="font-[family-name:var(--font-heading)] text-forest text-3xl md:text-4xl font-bold mt-1">
                  25,000<span className="text-lg">円〜</span>
                </p>
                <p className="text-earth-light text-sm mt-1">おひとり様 / 税込</p>
              </div>

              <p className="text-earth-light text-sm mt-6">
                おひとり様歓迎。ご夫婦、親子、友人同士でのご参加もお待ちしています。
              </p>
            </div>

            {/* 右カラム: 含まれるもの */}
            <div className="md:col-span-2">

              <div className="space-y-3 text-earth text-sm">
                <p className="font-bold text-charcoal mb-2">料金に含まれるもの</p>
                {[
                  "くれはマイスターによる専属ガイド",
                  "呉羽ハイツ 1泊（展望風呂付き）",
                  "夕食（富山湾の会席料理）",
                  "朝食",
                  "富山駅からの送迎",
                  "茶室 円山庵での抹茶",
                  "民俗民芸村 入館料",
                  "フットパスマップ・資料",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="text-forest font-bold mt-0.5">+</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== セクション区切り: 波 ========== */}
{/* ========== DAY 1 ==========
        素材リスト:
        - 和紙テクスチャ: texture-washi
        - 葉装飾SVG: /decorations/leaf-branch.svg
        - 各タイムラインの画像プレースホルダー: 内容に記載
      */}
      <section id="day1" className="py-20 md:py-32 bg-white scroll-mt-16 relative overflow-hidden">
        {/* 葉の装飾（左側） */}
<div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="flex items-center gap-4 mb-12">
            <span className="font-[family-name:var(--font-heading)] text-gold text-5xl md:text-7xl font-bold leading-none">
              01
            </span>
            <div>
              <p className="text-stone text-sm">DAY ONE / 土曜日</p>
              <h2 className="font-[family-name:var(--font-heading)] text-charcoal text-2xl md:text-3xl font-bold">
                丘をのぼり、歴史と出会う。
              </h2>
            </div>
          </div>

          <div className="space-y-8 timeline-line">
            <TimelineItem
              time="10:00"
              title="富山駅 集合・出発"
              description="呉羽ハイツの無料送迎バスで出発。タクシーや自家用車での参加もOK。荷物はハイツに預けてから身軽に。"
              image="/kari/day1-station.jpg"
            />
            <TimelineItem
              time="10:30"
              title="フットパス連絡橋・AMANDAN PEAK"
              description="全長124m、高さ28mの吊橋を空中散歩。東に立山連峰、西に二上山と新湊大橋。渡った先には2026年開業の「AMANDAN PEAK」。全面ガラス張りのラウンジで一息つきながら、桜の新品種「クレハオトメシダレ」が植えられた芝生広場を散策します。"
              image="/kari/day1-bridge-walk.jpg"
              accent
            />
            <TimelineItem
              time="11:00"
              title="呉羽丘陵フットパス「呉羽山をのんびりと」コース"
              description="富山市おすすめの約1時間コースをマイスターと歩きます。こもれびの雑木林を抜け、しらとり広場・のぞみの丘のビューポイントへ。丘陵ならではの高低差で里山の豊かさを五感で味わう道。"
              image="/kari/day1-forest-path.jpg"
            />
            <TimelineItem
              time="12:00"
              title="呉羽山展望台"
              description="立山連峰3,000m級の大パノラマ。剱岳、立山、薬師岳が眼前に。北陸新幹線と山並みが共演する絶景は日本夜景遺産にも認定。天気がよければ富山湾から能登半島まで。"
              image="/kari/day1-panorama.jpg"
            />
            <TimelineItem
              time="12:30"
              title="呉羽エリアでランチ"
              description="呉羽山には立山連峰を望む眺望レストランがいくつも。当日の営業状況に合わせて、マイスターがおすすめのお店へご案内します。"
              image="/kari/day1-lunch.jpg"
            />
            <TimelineItem
              time="14:00"
              title="五百羅漢（長慶寺）"
              description="50年の歳月をかけて彫られた535体の石仏。東向きの斜面に整然と並ぶ羅漢たちの向こうに、立山連峰が静かに佇みます。200年以上の時を経た石像ひとつひとつに、異なる表情が宿ります。"
              image="/kari/day1-rakan.jpg"
              accent
            />
            <TimelineItem
              time="15:00"
              title="民俗民芸村と茶室 円山庵"
              description="9つの博物館施設が集まる文化ゾーン。篁牛人記念美術館で渇筆の水墨画に触れた後は、数寄屋造りの茶室で抹茶と和菓子をいただきます。窓の向こうに立山連峰。"
              image="/kari/day1-tearoom.jpg"
            />
            <TimelineItem
              time="16:30"
              title="呉羽ハイツ到着、展望風呂"
              description="富山平野を見下ろす展望露天風呂でゆっくりと。歩いた疲れを癒しながら、夕暮れの立山連峰を眺める至福の時間。"
              image="/kari/day1-onsen.jpg"
              accent
            />
            <TimelineItem
              time="18:30"
              title="夕食 — 劔会席"
              description="呉羽ハイツ自慢の会席料理。先付、焼八寸、お造り五種、台の物、揚物、蒸物、旬の釜飯にデザートまで。ホタルイカ、白エビ、地物の筍など、富山湾と山の幸を存分に。地酒とともに、旅の余韻を楽しむ夜。"
              image="/kari/day1-kaiseki.jpg"
            />
          </div>
        </div>
      </section>

      {/* ========== セクション区切り: 山のシルエット ========== */}
{/* ========== DAY 2 ==========
        素材リスト:
        - 等高線テクスチャ: texture-topo
        - 葉装飾SVG: /decorations/leaf-branch.svg（反転）
        - 各タイムラインの画像プレースホルダー: 内容に記載
      */}
      <section id="day2" className="py-16 md:py-24 bg-cream scroll-mt-16 relative overflow-hidden">
        {/* 葉の装飾（右側） */}
<div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="flex items-center gap-4 mb-12">
            <span className="font-[family-name:var(--font-heading)] text-gold text-5xl md:text-7xl font-bold leading-none">
              02
            </span>
            <div>
              <p className="text-stone text-sm">DAY TWO / 日曜日</p>
              <h2 className="font-[family-name:var(--font-heading)] text-charcoal text-2xl md:text-3xl font-bold">
                朝の森を歩き、古代に触れる。
              </h2>
            </div>
          </div>

          {/* DAY2はカードグリッド形式（DAY1のタイムラインと差別化） */}
          <div className="grid sm:grid-cols-2 gap-6">
            {/* 朝：大きなカード（非対称） */}
            <div className="sm:col-span-2 grid sm:grid-cols-5 gap-0 bg-cream rounded-2xl overflow-hidden">
              <img src="/kari/day2-morning.jpg" alt="朝焼けの展望風呂と朝食" className="sm:col-span-2 w-full h-full object-cover" style={{ aspectRatio: "16/9" }} />
              <div className="sm:col-span-3 p-6 flex flex-col justify-center">
                <p className="text-stone text-sm mb-1">07:00</p>
                <h3 className="font-[family-name:var(--font-heading)] text-charcoal text-xl font-bold mb-2">朝風呂と朝食</h3>
                <p className="text-earth text-base leading-relaxed">
                  早朝の澄んだ空気の中、朝日に染まる立山連峰を展望風呂から。身体が目覚めたら、郷土料理を含む和洋バイキングの朝食でエネルギーを。
                </p>
              </div>
            </div>

            {/* 午前前半: 城山→連絡橋（横長で一体感） */}
            <div className="sm:col-span-2 grid sm:grid-cols-2 gap-0 bg-cream rounded-2xl overflow-hidden">
              <img src="/kari/day2-castle.jpg" alt="城山公園の新緑" className="w-full h-full object-cover" style={{ aspectRatio: "16/9" }} />
              <div className="p-6 flex flex-col justify-center">
                <p className="text-stone text-sm mb-1">09:00 — 10:30</p>
                <h3 className="font-[family-name:var(--font-heading)] text-charcoal text-xl font-bold mb-2">城山公園からフットパス連絡橋へ</h3>
                <p className="text-earth text-base leading-relaxed">
                  戦国の山城跡から360度の眺望。その後、全長124mの連絡橋を空中散歩。
                  東に立山連峰、西に二上山と新湊大橋。呉羽丘陵の両側を一望します。
                </p>
              </div>
            </div>

            {/* 午前後半: 杉谷古墳群（テキスト主体、写真小さめ） */}
            <div className="sm:col-span-2 grid sm:grid-cols-5 gap-6 items-start py-4">
              <div className="sm:col-span-3">
                <p className="text-stone text-sm mb-3">10:45 — 12:00</p>
                <h3 className="font-[family-name:var(--font-heading)] text-charcoal text-xl font-bold mb-3">杉谷古墳群を歩く</h3>
                <p className="text-earth text-base leading-relaxed mb-4">
                  弥生後期の四隅突出型墳丘墓を含む杉谷古墳群11基。
                  出雲との交流を示す貴重な遺構を、マイスターの解説で巡ります。
                  森に包まれた古代の墳丘を辿り、呉羽に眠る歴史の深さを体感。
                </p>
              </div>
              <div className="sm:col-span-2 space-y-3">
                <img src="/kari/day2-kofun.jpg" alt="杉谷古墳群の森と墳丘" className="rounded-lg w-full object-cover" style={{ aspectRatio: "16/9" }} />
              </div>
            </div>

            {/* 解散：横長カード */}
            <div className="sm:col-span-2 bg-forest/5 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4 border border-forest/10">
              <div className="flex-1">
                <p className="text-stone text-sm mb-1">12:30</p>
                <h3 className="font-[family-name:var(--font-heading)] text-charcoal text-xl font-bold mb-2">ランチと解散</h3>
                <p className="text-earth text-base leading-relaxed">
                  呉羽エリアでゆっくり昼食をとった後、富山駅まで送迎。2日間の旅が、日常への素敵なお土産になりますように。
                </p>
              </div>
              <img src="/kari/day2-dessert.jpg" alt="呉羽梨のデザート" className="sm:w-48 rounded-xl shrink-0 object-cover" style={{ aspectRatio: "3/2" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ========== セクション区切り: 波 ========== */}
{/* ========== 季節の見どころ ==========
        素材リスト:
        - 和紙テクスチャ: texture-washi
        - 春: 桜越しの立山連峰の写真
        - 夏: 新緑のフットパス木漏れ日の写真
        - 秋: 民俗民芸村の紅葉と合掌造りの写真
        - 冬: 雪景色の立山連峰と展望台の写真
      */}
      <section className="py-14 md:py-20 bg-forest text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <p className="text-gold-light font-[family-name:var(--font-heading)] text-sm tracking-[0.2em] mb-4 text-center">
            FOUR SEASONS
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-white text-2xl md:text-4xl font-bold text-center mb-12">
            訪れるたびに、違う顔。
          </h2>
          {/* 春: 大きく見せる（メイン推し） */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <img src="/kari/season-spring.jpg" alt="桜越しの立山連峰" className="rounded-xl w-full object-cover" style={{ aspectRatio: "16/9" }} />
            <div className="flex flex-col justify-center">
              <span className="font-[family-name:var(--font-heading)] text-gold-light text-4xl md:text-5xl font-bold">春</span>
              <span className="text-white/70 text-sm mt-1 mb-4">3月〜5月</span>
              <p className="text-white/80 text-base leading-relaxed">
                500本の桜と残雪の立山連峰。
                呉羽でしか見られない新品種「クレハオトメシダレ」も。
                梨畑が白い花で染まる季節。
              </p>
            </div>
          </div>

          {/* 夏・秋・冬: コンパクトに */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { season: "夏", months: "6〜8月", description: "緑のトンネルを抜けるフットパス。木漏れ日の雑木林は天然のクーラー。", image: "/kari/season-summer.jpg" },
              { season: "秋", months: "9〜11月", description: "民俗民芸村の紅葉は圧巻。落ち葉の絨毯を踏みしめるフットパスは格別。", image: "/kari/season-autumn.jpg" },
              { season: "冬", months: "12〜2月", description: "澄んだ空気で立山連峰がくっきり。展望風呂から雪化粧の山々を。", image: "/kari/season-winter.jpg" },
            ].map((item) => (
              <div key={item.season}>
                <img src={item.image} alt={item.season} className="rounded-lg w-full object-cover mb-3" style={{ aspectRatio: "16/9" }} />
                <p className="font-[family-name:var(--font-heading)] text-gold-light text-xl font-bold">{item.season}</p>
                <p className="text-white/70 text-sm mb-2">{item.months}</p>
                <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== ガイド: ドリームブリッジくれは ==========
        素材リスト:
        - グレインテクスチャ: texture-grain
        - 等高線SVG: /decorations/topo-lines.svg（右装飾、白）
        - 歴史ガイドのポートレート写真
        - 自然ガイドのポートレート写真
        - 文化ガイドのポートレート写真
      */}
      <section id="guide" className="py-16 md:py-24 bg-cream scroll-mt-16 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <p className="text-gold font-[family-name:var(--font-heading)] text-sm tracking-[0.2em] mb-4">
            YOUR GUIDE
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-charcoal text-2xl md:text-4xl font-bold mb-6">
            くれはマイスターと歩く、<br className="sm:hidden" />
            だから面白い。
          </h2>
          <p className="text-earth text-base md:text-lg leading-loose max-w-3xl mb-12">
            案内するのは「ドリームブリッジくれは」のガイドたち。
            歴史、自然、文化にそれぞれ精通したスペシャリストが、
            ガイドブックには載らない呉羽の物語を語ります。
          </p>

          {/* マイスター3人紹介: 非対称レイアウト */}
          <div className="space-y-10">
            {/* 1人目: 原島義正 — 左写真+右テキスト */}
            <div className="grid md:grid-cols-3 gap-6 items-center">
              <div className="rounded-xl overflow-hidden" style={{ aspectRatio: "1/1" }}>
                <img src="/guide/harashima.jpg" alt="原島 義正" className="w-full h-full object-cover" />
              </div>
              <div className="md:col-span-2">
                <h3 className="font-[family-name:var(--font-heading)] text-charcoal text-xl font-bold mb-2">原島 義正</h3>
                <p className="text-earth text-base leading-relaxed">
                  呉羽に生まれ育ち70年以上。事務局の立場から、県中央部に位置する呉羽丘陵の素晴らしさ・楽しさを皆さんにお伝えします。大好きなレトロカーで走り回る毎日。
                </p>
                <p className="text-stone text-sm mt-2">趣味：レトロカー、ゴルフ</p>
              </div>
            </div>

            {/* 2人目: 天野元治 — デスクトップで右写真+左テキスト、スマホは写真→テキスト */}
            <div className="grid md:grid-cols-3 gap-6 items-center">
              <div className="rounded-xl overflow-hidden order-1 md:order-2" style={{ aspectRatio: "1/1" }}>
                <img src="/guide/amano.jpg" alt="天野 元治" className="w-full h-full object-cover" />
              </div>
              <div className="md:col-span-2 order-2 md:order-1">
                <h3 className="font-[family-name:var(--font-heading)] text-charcoal text-xl font-bold mb-2">天野 元治</h3>
                <p className="text-stone text-sm mb-2">とやま観光未来創造塾 認定ガイド・自然解説員</p>
                <p className="text-earth text-base leading-relaxed">
                  自然観察はもちろん、文化・歴史・地形を織り交ぜて楽しくご案内。「立山連峰の展望台」といわれる呉羽丘陵の魅力を、さまざまな角度からお伝えします。
                </p>
                <p className="text-stone text-sm mt-2">趣味：トレイルランニング、自然観察 / 特技：森の不思議を見つけること</p>
              </div>
            </div>

            {/* 3人目（浜田）: 左写真+右テキスト */}
            <div className="grid md:grid-cols-3 gap-6 items-center">
              {/* <!-- 素材: guide-3.jpg（女性マイスター・要撮影） --> */}
              <div className="img-placeholder rounded-xl" style={{ aspectRatio: "1/1" }}>
                女性マイスターのポートレート写真
              </div>
              <div className="md:col-span-2">
                <h3 className="font-[family-name:var(--font-heading)] text-charcoal text-xl font-bold mb-2">マイスター名</h3>
                <p className="text-earth text-base leading-relaxed">
                  地元に暮らす目線で、呉羽山の日常の魅力を伝える案内人。
                  季節の花や隠れた眺望スポット、地元で愛される食の情報まで、
                  ガイドブックに載らない呉羽の楽しみ方を教えてくれます。
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <a
              href="https://dreambridge-kureha.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-forest text-forest px-8 py-3 rounded-full hover:bg-forest hover:text-white transition-colors text-base"
            >
              ドリームブリッジくれは 公式サイト
            </a>
          </div>
        </div>
      </section>

      {/* ========== セクション区切り: 山のシルエット（forest→white） ========== */}
{/* ========== 宿泊: 呉羽ハイツ ==========
        素材リスト:
        - ドットパターン: pattern-dots
        - 呉羽ハイツ外観写真
        - 展望露天風呂から富山平野の眺望写真
      */}
      <section id="stay" className="py-20 md:py-28 bg-white pattern-dots scroll-mt-16 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <p className="text-gold font-[family-name:var(--font-heading)] text-sm tracking-[0.2em] mb-4">
            ACCOMMODATION
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-charcoal text-2xl md:text-4xl font-bold mb-3">
            呉羽ハイツ — 眺めの宿。
          </h2>
          <p className="text-earth text-base mb-12">四季彩る、食と展望風呂の宿。</p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              {/* <!-- 素材: 呉羽ハイツ外観の写真 --> */}
              <img src="/kari/hotel-exterior.jpg" alt="呉羽ハイツ外観" className="rounded-xl w-full object-cover" style={{ aspectRatio: "16/9" }} />
              {/* <!-- 素材: 展望風呂の写真 --> */}
              <img src="/kari/hotel-bath.jpg" alt="展望露天風呂からの富山平野の眺望" className="rounded-xl w-full object-cover" style={{ aspectRatio: "16/9" }} />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="font-[family-name:var(--font-heading)] text-charcoal text-xl md:text-2xl font-bold mb-4">
                立山連峰を望む展望風呂と、<br />
                富山の美食を味わう一夜。
              </h3>
              <p className="text-earth text-base leading-loose mb-6">
                富山平野を見下ろす高台に佇む「呉羽ハイツ」。
                露天風呂から見える朝焼けの立山連峰は、
                宿泊者だけの特別な景色。
                純和風の客室でくつろぎ、
                ホタルイカ、白エビ、地物の山菜など、
                季節の会席料理に舌鼓を打つ夜をお過ごしください。
              </p>
              <div className="bg-mist rounded-xl p-5 space-y-3 text-earth text-base mb-6">
                <div className="flex gap-3">
                  <span className="text-forest font-bold min-w-[5rem]">客室</span>
                  <span>全37室（純和風・全室禁煙）</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-forest font-bold min-w-[5rem]">風呂</span>
                  <span>展望大浴場・露天風呂</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-forest font-bold min-w-[5rem]">送迎</span>
                  <span>富山駅から無料シャトル（約20分・予約制）</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-forest font-bold min-w-[5rem]">駐車場</span>
                  <span>約120台（無料）</span>
                </div>
              </div>
              <a
                href="https://www.kureha-heights.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-forest border-2 border-forest px-6 py-3 rounded-full hover:bg-forest hover:text-white transition-colors text-base text-center"
              >
                呉羽ハイツ 公式サイト
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 参加者の声 ==========
        素材リスト:
        - 参加者のポートレート写真（許可取得済みのもの）
        - モニターツアー実施後に差し替え
      */}
      <section className="py-12 md:py-16 bg-mist relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <p className="text-gold font-[family-name:var(--font-heading)] text-sm tracking-[0.2em] mb-4">
            VOICES
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-charcoal text-2xl md:text-4xl font-bold mb-12">
            歩いた方の声。
          </h2>

          {/* メインの引用: 大きく */}
          <blockquote className="border-l-4 border-gold pl-6 md:pl-8 mb-10">
            <p className="text-charcoal text-lg md:text-xl leading-loose font-[family-name:var(--font-heading)]">
              五百羅漢の石仏に、亡き父に似た顔を見つけて、
              思わず涙が出ました。
            </p>
            <p className="text-earth text-base leading-relaxed mt-4">
              ガイドさんの説明で、一体一体に歴史があると知り、
              何度でも訪れたい場所になりました。
            </p>
            <footer className="mt-4 text-stone text-sm">
              60代女性 / 月いちウォーク参加者
            </footer>
          </blockquote>

          {/* サブの声: テキスト主体で軽く */}
          <div className="space-y-6 border-t border-stone/20 pt-8">
            <div>
              <p className="text-earth text-base leading-relaxed">
                「富山に何十年も住んでいるのに、呉羽山にこれほどの歴史があるとは知りませんでした。
                4,000年前の古墳群、出雲との交流。マイスターの話は本当に面白い。」
              </p>
              <p className="text-stone text-sm mt-2">50代男性 / ドリームブリッジツアー参加者</p>
            </div>
            <div>
              <p className="text-earth text-base leading-relaxed">
                「展望台からの立山連峰に言葉を失いました。標高70mなのにこの絶景。
                フットパスの木漏れ日の中を歩いていると、駅から10分の場所とは思えません。」
              </p>
              <p className="text-stone text-sm mt-2">40代女性 / 月いちウォーク参加者</p>
            </div>
          </div>

          <p className="text-stone text-xs mt-8">
            ※ 月いちウォーク・ドリームブリッジくれはツアー参加者の感想をもとに構成
          </p>
        </div>
      </section>

      {/* ========== 予約・お問い合わせ ==========
        素材リスト:
        - グレインテクスチャ: texture-grain
        - 等高線SVG: /decorations/topo-lines.svg（中央装飾）
      */}
      <section id="booking" className="py-24 md:py-32 bg-forest texture-grain scroll-mt-16 relative overflow-hidden">
        {/* 等高線テクスチャ */}
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <p className="text-gold-light font-[family-name:var(--font-heading)] text-sm tracking-[0.2em] mb-4">
            RESERVATION
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-white text-2xl md:text-4xl font-bold mb-6">
            じゃらんから、かんたん予約。
          </h2>
          <div className="w-16 h-0.5 bg-gold-light/40 mx-auto mb-6" />
          <p className="text-white/70 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            空き日程の確認からお支払いまで、じゃらんで完結します。
            お電話でのご予約・ご相談も承ります。
          </p>

          {/* メインCTA: じゃらん */}
          <a
            href="https://www.jalan.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white text-forest font-bold text-lg py-5 px-8 rounded-full hover:bg-cream transition-colors mb-4 max-w-md mx-auto"
          >
            じゃらんで予約する
          </a>
          <p className="text-white/70 text-sm mb-12">じゃらん遊び・体験 のページが開きます</p>

          {/* 補助: 電話 */}
          <div className="border-t border-white/10 pt-8">
            <p className="text-white/70 text-sm mb-3">お電話でのご予約・お問い合わせ</p>
            <a href="tel:076-436-0191" className="font-[family-name:var(--font-heading)] text-gold-light text-2xl md:text-3xl font-bold tracking-wider">
              076-436-0191
            </a>
            <p className="text-white/70 text-sm mt-2">呉羽ハイツ（9:00〜20:00）</p>
          </div>
        </div>
      </section>

      {/* ========== セクション区切り: 山のシルエット（forest→cream） ========== */}
{/* ========== アクセス ==========
        素材リスト:
        - 和紙テクスチャ: texture-washi
        - 呉羽山エリアのイラストマップ（富山駅・ハイツ・展望台・五百羅漢・連絡橋・古墳群の位置関係）
      */}
      <section className="py-12 md:py-16 bg-cream texture-washi relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <p className="text-gold font-[family-name:var(--font-heading)] text-sm tracking-[0.2em] mb-4 text-center">
            ACCESS
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-charcoal text-2xl md:text-4xl font-bold text-center mb-6">
            富山駅から、たった10分。
          </h2>
          <div className="w-16 h-0.5 bg-gold/40 mx-auto mb-16" />

          {/* 地図プレースホルダー */}
          <img src="/kari/access-map.jpg" alt="呉羽山エリアのイラストマップ" className="rounded-xl mb-10 max-w-3xl mx-auto w-full object-cover" />

          {/* アクセス情報: テーブル形式 */}
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="border-b border-stone/20 pb-6">
              <h3 className="font-[family-name:var(--font-heading)] text-forest text-lg font-bold mb-3">
                無料送迎バス（予約制）
              </h3>
              <p className="text-earth text-base leading-relaxed mb-4">
                富山駅前「宝町川口コインパーキング前」から呉羽ハイツまで約20分。
              </p>
              <div className="grid grid-cols-[5rem_1fr] gap-y-2 text-sm text-earth">
                <span className="font-bold">駅発</span>
                <span>10:05 / 12:00 / 15:30 / 16:30 / 17:40</span>
                <span className="font-bold">ハイツ発</span>
                <span>9:40 / 11:30 / 15:05 / 16:00 / 17:15 / 21:30</span>
              </div>
            </div>

            <div className="border-b border-stone/20 pb-6">
              <h3 className="font-[family-name:var(--font-heading)] text-forest text-lg font-bold mb-3">
                お車の場合
              </h3>
              <p className="text-earth text-base leading-relaxed">
                富山西ICから約10分。駐車場120台（無料）。富山駅から車で約20分。
              </p>
            </div>

            <div>
              <h3 className="font-[family-name:var(--font-heading)] text-forest text-lg font-bold mb-3">
                北陸新幹線でお越しの方
              </h3>
              <p className="text-earth text-base leading-relaxed">
                東京から約2時間10分、金沢から約20分。富山駅到着後、送迎バスまたはタクシーで。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== モバイル固定CTA ========== */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-forest/95 backdrop-blur-sm border-t border-white/10 px-4 py-3 flex gap-3">
        <a href="tel:076-436-0191" className="flex-1 bg-white text-forest font-bold text-center py-3 rounded-full text-sm">
          電話で予約
        </a>
        <a href="#booking" className="flex-1 bg-gold text-white font-bold text-center py-3 rounded-full text-sm">
          じゃらんで予約
        </a>
      </div>

      {/* ========== フッター ========== */}
      <footer className="bg-charcoal text-white/70 py-12 pb-24 md:pb-12 relative">
        {/* ドットパターン */}
<div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="grid sm:grid-cols-3 gap-8 mb-8">
            <div>
              <p className="font-[family-name:var(--font-heading)] text-white text-lg font-bold mb-3">
                呉羽山めぐり
              </p>
              <p className="text-sm leading-relaxed">
                富山駅から10分の別世界。<br />
                立山連峰を望む1泊2日の旅。
              </p>
            </div>
            <div>
              <p className="text-white text-sm font-bold mb-3">企画・運営</p>
              <p className="text-sm leading-relaxed">
                <a href="https://dreambridge-kureha.net/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  ドリームブリッジくれは
                </a>
              </p>
            </div>
            <div>
              <p className="text-white text-sm font-bold mb-3">宿泊</p>
              <p className="text-sm leading-relaxed">
                <a href="https://www.kureha-heights.jp/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  呉羽ハイツ
                </a>
                <br />
                TEL: 076-436-0191
              </p>
            </div>
          </div>
          {/* 活動協力 */}
          <div className="border-t border-white/10 pt-6 mb-6">
            <p className="text-white text-sm font-bold mb-2">活動協力</p>
            <p className="text-sm">
              <a href="https://toyamaphotomap.glide.page/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">ふふっと富山のフォトマップ</a>
              <span className="mx-2">|</span>
              <a href="https://x.com/toyama_photomap" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">X</a>
              <span className="mx-2">|</span>
              <a href="https://www.instagram.com/toyama_photomap/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
            </p>
            <p className="text-xs mt-1">富山大学都市デザイン学部 自主プロジェクト</p>
          </div>
          <div className="border-t border-white/10 pt-6 text-center text-xs space-y-2">
            <a href="/privacy" className="hover:text-white transition-colors">プライバシーポリシー</a>
            <p>&copy; 2026 ドリームブリッジくれは. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

/* ========== タイムラインコンポーネント（DAY1用） ========== */
function TimelineItem({
  time,
  title,
  description,
  image,
  accent = false,
}: {
  time: string;
  title: string;
  description: string;
  image: string;
  accent?: boolean;
}) {
  return (
    <div className={`grid md:grid-cols-[5rem_1fr_1fr] gap-4 md:gap-6 ${accent ? "md:grid-cols-[5rem_1fr_1.2fr]" : ""}`}>
      {/* 時刻 */}
      <div className="flex md:flex-col items-baseline md:items-end gap-2 md:gap-0 md:pt-1">
        <span className="font-[family-name:var(--font-heading)] text-forest text-xl md:text-2xl font-bold">
          {time}
        </span>
      </div>
      {/* テキスト */}
      <div className={`${accent ? "bg-white rounded-xl p-5 md:p-6 shadow-sm border border-forest/5" : ""}`}>
        <h3 className="font-[family-name:var(--font-heading)] text-charcoal text-lg md:text-xl font-bold mb-2">
          {title}
        </h3>
        <p className="text-earth text-base leading-relaxed">
          {description}
        </p>
      </div>
      {/* 画像 */}
      <img src={image} alt={title} className="rounded-xl w-full h-full object-cover" style={{ aspectRatio: "16/9" }} />
    </div>
  );
}
