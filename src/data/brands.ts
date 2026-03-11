// ============================================================
// 日本全国 酒造・醸造所・蒸溜所データ
// 日本酒・ビール・焼酎・ジン・ウィスキー の主要メーカーと代表銘柄
// ============================================================

export interface BrandOption {
  maker: string;  // 酒造・醸造所・メーカー名
  brand: string;  // 代表銘柄
}

export const BRAND_SELECTABLE_TYPES = ['ビール', 'ジン', '日本酒', '焼酎', 'ウィスキー'] as const;

export type DrinkType = '日本酒' | 'ビール' | 'ジン' | '焼酎' | 'ウィスキー';

// 全47都道府県（北から南の順）
export const PREFECTURES = [
  // 北海道
  '北海道',
  // 東北
  '青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県',
  // 関東
  '茨城県', '栃木県', '群馬県', '埼玉県', '千葉県', '東京都', '神奈川県',
  // 中部
  '新潟県', '富山県', '石川県', '福井県', '山梨県', '長野県', '岐阜県', '静岡県', '愛知県',
  // 近畿
  '三重県', '滋賀県', '京都府', '大阪府', '兵庫県', '奈良県', '和歌山県',
  // 中国
  '鳥取県', '島根県', '岡山県', '広島県', '山口県',
  // 四国
  '徳島県', '香川県', '愛媛県', '高知県',
  // 九州・沖縄
  '福岡県', '佐賀県', '長崎県', '熊本県', '大分県', '宮崎県', '鹿児島県', '沖縄県',
] as const;

export type Prefecture = typeof PREFECTURES[number];

// ============================================================
// メインデータ
// DrinkType -> Prefecture -> BrandOption[]
// ============================================================
export const BRAND_DATA: Record<DrinkType, Partial<Record<Prefecture, BrandOption[]>>> = {

  // ============================================================
  // 日本酒（全47都道府県）
  // ============================================================
  '日本酒': {

    // -------------------------------------------------------
    // 北海道
    // -------------------------------------------------------
    '北海道': [
      { maker: '男山', brand: '男山' },
      { maker: '高砂酒造', brand: '国士無双' },
      { maker: '合同酒精', brand: '大雪乃蔵' },
      { maker: '日本清酒', brand: '千歳鶴' },
      { maker: '福司酒造', brand: '福司' },
      { maker: '小林酒造', brand: '北の錦' },
      { maker: '金滴酒造', brand: '金滴' },
      { maker: '田中酒造', brand: '宝川' },
      { maker: '二世古酒造', brand: '二世古' },
      { maker: '国稀酒造', brand: '国稀' },
      { maker: '三千櫻酒造', brand: '三千櫻' },
    ],

    // -------------------------------------------------------
    // 東北
    // -------------------------------------------------------
    '青森県': [
      { maker: '西田酒造店', brand: '田酒' },
      { maker: '八戸酒造', brand: '陸奥八仙' },
      { maker: '三浦酒造', brand: '豊盃' },
      { maker: '桃川', brand: '桃川' },
      { maker: '鳩正宗', brand: '鳩正宗' },
      { maker: '八戸酒類', brand: '如空' },
      { maker: '齋藤酒造店', brand: '松緑' },
      { maker: 'カネタ玉田酒造店', brand: '華一風' },
      { maker: '竹浪酒造店', brand: '岩木正宗' },
      { maker: '尾崎酒造', brand: '安東水軍' },
    ],
    '岩手県': [
      { maker: '南部美人', brand: '南部美人' },
      { maker: '赤武酒造', brand: 'AKABU' },
      { maker: 'あさ開', brand: 'あさ開' },
      { maker: '菊の司酒造', brand: '菊の司' },
      { maker: '酔仙酒造', brand: '酔仙' },
      { maker: '川村酒造店', brand: '酉与右衛門' },
      { maker: '泉金酒造', brand: '龍泉八重桜' },
      { maker: '磐乃井酒造', brand: '磐乃井' },
      { maker: '月の輪酒造店', brand: '月の輪' },
      { maker: '廣田酒造店', brand: '廣喜' },
    ],
    '宮城県': [
      { maker: '新澤醸造店', brand: '伯楽星' },
      { maker: '佐浦', brand: '浦霞' },
      { maker: '一ノ蔵', brand: '一ノ蔵' },
      { maker: '平孝酒造', brand: '日高見' },
      { maker: '墨廼江酒造', brand: '墨廼江' },
      { maker: '萩野酒造', brand: '萩の鶴' },
      { maker: '大沼酒造店', brand: '乾坤一' },
      { maker: '山和酒造店', brand: '山和' },
      { maker: '内ヶ崎酒造店', brand: '鳳陽' },
      { maker: '蔵王酒造', brand: '蔵王' },
      { maker: '勝山酒造', brand: '勝山' },
    ],
    '秋田県': [
      { maker: '新政酒造', brand: '新政' },
      { maker: '山本合名会社', brand: '山本' },
      { maker: '齋彌酒造店', brand: '雪の茅舎' },
      { maker: '秋田醸造', brand: 'ゆきの美人' },
      { maker: '栗林酒造店', brand: '春霞' },
      { maker: '天寿酒造', brand: '天寿' },
      { maker: '日の丸醸造', brand: 'まんさくの花' },
      { maker: '両関酒造', brand: '両関' },
      { maker: '秋田酒類製造', brand: '高清水' },
      { maker: '出羽鶴酒造', brand: '出羽鶴' },
      { maker: '福禄寿酒造', brand: '一白水成' },
    ],
    '山形県': [
      { maker: '高木酒造', brand: '十四代' },
      { maker: '出羽桜酒造', brand: '出羽桜' },
      { maker: '亀の井酒造', brand: 'くどき上手' },
      { maker: '東北銘醸', brand: '初孫' },
      { maker: '山形正宗醸造元 水戸部酒造', brand: '山形正宗' },
      { maker: '楯の川酒造', brand: '楯野川' },
      { maker: '冨士酒造', brand: '栄光冨士' },
      { maker: '酒田酒造', brand: '上喜元' },
      { maker: '米鶴酒造', brand: '米鶴' },
      { maker: '後藤酒造店', brand: '辯天' },
      { maker: '秀鳳酒造場', brand: '秀鳳' },
      { maker: '鯉川酒造', brand: '鯉川' },
    ],
    '福島県': [
      { maker: '廣木酒造本店', brand: '飛露喜' },
      { maker: '宮泉銘醸', brand: '寫樂' },
      { maker: '大七酒造', brand: '大七' },
      { maker: '花泉酒造', brand: 'ロ万' },
      { maker: '奥の松酒造', brand: '奥の松' },
      { maker: '人気酒造', brand: '人気一' },
      { maker: '末廣酒造', brand: '末廣' },
      { maker: '名倉山酒造', brand: '名倉山' },
      { maker: '笹の川酒造', brand: '笹の川' },
      { maker: '国権酒造', brand: '国権' },
      { maker: '鶴乃江酒造', brand: '会津中将' },
      { maker: '曙酒造', brand: '天明' },
    ],

    // -------------------------------------------------------
    // 関東
    // -------------------------------------------------------
    '茨城県': [
      { maker: '須藤本家', brand: '郷乃誉' },
      { maker: '結城酒造', brand: '結ゆい' },
      { maker: '来福酒造', brand: '来福' },
      { maker: '府中誉', brand: '渡舟' },
      { maker: '磯蔵酒造', brand: '稲里' },
      { maker: '武勇', brand: '武勇' },
      { maker: '月の井酒造店', brand: '月の井' },
      { maker: '浦里酒造店', brand: '霧筑波' },
      { maker: '木内酒造', brand: '菊盛' },
      { maker: '明利酒類', brand: '副将軍' },
    ],
    '栃木県': [
      { maker: 'せんきん', brand: '仙禽' },
      { maker: '小林酒造', brand: '鳳凰美田' },
      { maker: '松井酒造店', brand: '松の寿' },
      { maker: '惣誉酒造', brand: '惣誉' },
      { maker: '島崎酒造', brand: '東力士' },
      { maker: '辻善兵衛商店', brand: '辻善兵衛' },
      { maker: '北関酒造', brand: '北冠' },
      { maker: '菊の里酒造', brand: '大那' },
      { maker: '天鷹酒造', brand: '天鷹' },
      { maker: '飯沼銘醸', brand: '杉並木' },
    ],
    '群馬県': [
      { maker: '龍神酒造', brand: '尾瀬の雪どけ' },
      { maker: '町田酒造店', brand: '町田酒造' },
      { maker: '永井酒造', brand: '水芭蕉' },
      { maker: '牧野酒造', brand: '大盃' },
      { maker: '聖酒造', brand: '聖' },
      { maker: '美峰酒類', brand: '谷川岳' },
      { maker: '柳澤酒造', brand: '桂川' },
      { maker: '浅間酒造', brand: '秘幻' },
      { maker: '分福酒造', brand: '分福' },
      { maker: '土田酒造', brand: '土田' },
    ],
    '埼玉県': [
      { maker: '南陽醸造', brand: '花陽浴' },
      { maker: '石井酒造', brand: '豊明' },
      { maker: '神亀酒造', brand: '神亀' },
      { maker: '小山本家酒造', brand: '灘麗' },
      { maker: '釜屋', brand: '力士' },
      { maker: '五十嵐酒造', brand: '天覧山' },
      { maker: '権田酒造', brand: '直実' },
      { maker: '北西酒造', brand: '文楽' },
      { maker: '長澤酒造', brand: '君の井' },
      { maker: '麻原酒造', brand: '琵琶のささ浪' },
    ],
    '千葉県': [
      { maker: '寒菊銘醸', brand: '寒菊' },
      { maker: '飯沼本家', brand: '甲子' },
      { maker: '亀田酒造', brand: '寿萬亀' },
      { maker: '岩瀬酒造', brand: '岩の井' },
      { maker: '木戸泉酒造', brand: '木戸泉' },
      { maker: '鍋店', brand: '仁勇' },
      { maker: '稲花酒造', brand: '稲花' },
      { maker: '東薫酒造', brand: '東薫' },
      { maker: '東灘醸造', brand: '東灘' },
      { maker: '和蔵酒造', brand: '聖泉' },
    ],
    '東京都': [
      { maker: '小澤酒造', brand: '澤乃井' },
      { maker: '石川酒造', brand: '多満自慢' },
      { maker: '田村酒造場', brand: '嘉泉' },
      { maker: '小山酒造', brand: '丸真正宗' },
      { maker: '野崎酒造', brand: '喜正' },
      { maker: '豊島屋酒造', brand: '屋守' },
      { maker: '中村酒造', brand: '千代鶴' },
      { maker: '田中酒造', brand: '国府鶴' },
      { maker: '渡邉酒造', brand: '大多摩' },
      { maker: '東京港醸造', brand: '江戸開城' },
    ],
    '神奈川県': [
      { maker: '泉橋酒造', brand: 'いづみ橋' },
      { maker: '熊澤酒造', brand: '天青' },
      { maker: '久保田酒造', brand: '相模灘' },
      { maker: '黄金井酒造', brand: '盛升' },
      { maker: '石井醸造', brand: '曽我の誉' },
      { maker: '瀬戸酒造店', brand: 'セトイチ' },
      { maker: '川西屋酒造店', brand: '丹沢山' },
      { maker: '吉川醸造', brand: '雨降' },
      { maker: '大矢孝酒造', brand: '残草蓬莱' },
      { maker: '清水酒造', brand: '巌乃泉' },
    ],

    // -------------------------------------------------------
    // 中部
    // -------------------------------------------------------
    '新潟県': [
      { maker: '八海醸造', brand: '八海山' },
      { maker: '朝日酒造', brand: '久保田' },
      { maker: '石本酒造', brand: '越乃寒梅' },
      { maker: '青木酒造', brand: '鶴齢' },
      { maker: '宮尾酒造', brand: '〆張鶴' },
      { maker: '諸橋酒造', brand: '越乃景虎' },
      { maker: '麒麟山酒造', brand: '麒麟山' },
      { maker: '高千代酒造', brand: '高千代' },
      { maker: '久須美酒造', brand: '清泉' },
      { maker: '菊水酒造', brand: '菊水' },
      { maker: '吉乃川', brand: '吉乃川' },
      { maker: '加茂錦酒造', brand: '加茂錦' },
      { maker: 'DHC酒造', brand: '越乃梅里' },
      { maker: '玉川酒造', brand: '玉風味' },
    ],
    '富山県': [
      { maker: '桝田酒造店', brand: '満寿泉' },
      { maker: '若鶴酒造', brand: '苗加屋' },
      { maker: '富美菊酒造', brand: '羽根屋' },
      { maker: '林酒造場', brand: '黒部峡' },
      { maker: '立山酒造', brand: '立山' },
      { maker: '銀盤酒造', brand: '銀盤' },
      { maker: '三笑楽酒造', brand: '三笑楽' },
      { maker: '皇国晴酒造', brand: '幻の瀧' },
      { maker: '千代鶴酒造', brand: '千代鶴' },
      { maker: '福鶴酒造', brand: '風の盆' },
    ],
    '石川県': [
      { maker: '福光屋', brand: '加賀鳶' },
      { maker: '菊姫', brand: '菊姫' },
      { maker: '車多酒造', brand: '天狗舞' },
      { maker: '吉田酒造店', brand: '手取川' },
      { maker: '農口尚彦研究所', brand: '農口尚彦研究所' },
      { maker: '宗玄酒造', brand: '宗玄' },
      { maker: '数馬酒造', brand: '竹葉' },
      { maker: '松浦酒造', brand: '獅子の里' },
      { maker: '鶴野酒造店', brand: '谷泉' },
      { maker: '白藤酒造店', brand: '奥能登の白菊' },
    ],
    '福井県': [
      { maker: '黒龍酒造', brand: '黒龍' },
      { maker: '加藤吉平商店', brand: '梵' },
      { maker: '田邊酒造', brand: '越前岬' },
      { maker: '一本義久保本店', brand: '一本義' },
      { maker: '安本酒造', brand: '白岳仙' },
      { maker: '南部酒造場', brand: '花垣' },
      { maker: '常山酒造', brand: '常山' },
      { maker: '美川酒造場', brand: '舞美人' },
      { maker: '毛利酒造', brand: '紗利' },
      { maker: '吉田金右衛門商店', brand: '雲乃井' },
    ],
    '山梨県': [
      { maker: '山梨銘醸', brand: '七賢' },
      { maker: '谷櫻酒造', brand: '谷櫻' },
      { maker: '笹一酒造', brand: '笹一' },
      { maker: '太冠酒造', brand: '太冠' },
      { maker: '萬屋醸造店', brand: '春鶯囀' },
      { maker: '養老酒造', brand: '養老' },
      { maker: '武の井酒造', brand: '武の井' },
      { maker: '井出醸造店', brand: '甲斐の開運' },
      { maker: '腕相撲', brand: '腕相撲' },
      { maker: '横内酒造店', brand: '大冠' },
    ],
    '長野県': [
      { maker: '宮坂醸造', brand: '真澄' },
      { maker: '大信州酒造', brand: '大信州' },
      { maker: '尾澤酒造場', brand: '十九' },
      { maker: '佐久の花酒造', brand: '佐久の花' },
      { maker: '酒千蔵野', brand: '川中島' },
      { maker: '小野酒造店', brand: '夜明け前' },
      { maker: '大雪渓酒造', brand: '大雪渓' },
      { maker: '木曽路酒造', brand: '木曽路' },
      { maker: '黒澤酒造', brand: '黒澤' },
      { maker: '岡崎酒造', brand: '信州亀齢' },
      { maker: '田中屋酒造店', brand: '水尾' },
    ],
    '岐阜県': [
      { maker: '三千盛', brand: '三千盛' },
      { maker: '御代桜醸造', brand: '御代桜' },
      { maker: '渡辺酒造店', brand: '蓬莱' },
      { maker: '林本店', brand: '百十郎' },
      { maker: '天領酒造', brand: '天領' },
      { maker: '小坂酒造場', brand: '百春' },
      { maker: '大塚酒造', brand: '竹雀' },
      { maker: '船坂酒造店', brand: '深山菊' },
      { maker: '奥飛騨酒造', brand: '奥飛騨' },
      { maker: '平瀬酒造店', brand: '久寿玉' },
    ],
    '静岡県': [
      { maker: '磯自慢酒造', brand: '磯自慢' },
      { maker: '初亀醸造', brand: '初亀' },
      { maker: '土井酒造場', brand: '開運' },
      { maker: '三和酒造', brand: '臥龍梅' },
      { maker: '英君酒造', brand: '英君' },
      { maker: '花の舞酒造', brand: '花の舞' },
      { maker: '志太泉酒造', brand: '志太泉' },
      { maker: '杉井酒造', brand: '杉錦' },
      { maker: '富士高砂酒造', brand: '高砂' },
      { maker: '神沢川酒造場', brand: '正雪' },
    ],
    '愛知県': [
      { maker: '萬乗醸造', brand: '醸し人九平次' },
      { maker: '関谷醸造', brand: '蓬莱泉' },
      { maker: '山崎合資会社', brand: '奥' },
      { maker: '丸石醸造', brand: '二兎' },
      { maker: '盛田', brand: 'ねのひ' },
      { maker: '金虎酒造', brand: '金虎' },
      { maker: '神杉酒造', brand: '神杉' },
      { maker: '東春酒造', brand: '東龍' },
      { maker: '澤田酒造', brand: '白老' },
      { maker: '長珍酒造', brand: '長珍' },
    ],

    // -------------------------------------------------------
    // 近畿
    // -------------------------------------------------------
    '三重県': [
      { maker: '清水清三郎商店', brand: '作' },
      { maker: '木屋正酒造', brand: '而今' },
      { maker: '瀧自慢酒造', brand: '瀧自慢' },
      { maker: '宮崎本店', brand: '宮の雪' },
      { maker: '若戎酒造', brand: '若戎' },
      { maker: '元坂酒造', brand: '酒屋八兵衛' },
      { maker: '後藤酒造場', brand: '青雲' },
      { maker: '河武醸造', brand: '鉾杉' },
      { maker: '寒紅梅酒造', brand: '寒紅梅' },
      { maker: '大田酒造', brand: '半蔵' },
    ],
    '滋賀県': [
      { maker: '冨田酒造', brand: '七本鎗' },
      { maker: '畑酒造', brand: '大治郎' },
      { maker: '松瀬酒造', brand: '松の司' },
      { maker: '藤居本家', brand: '旭日' },
      { maker: '笑四季酒造', brand: '笑四季' },
      { maker: '美冨久酒造', brand: '美冨久' },
      { maker: '喜多酒造', brand: '喜楽長' },
      { maker: '浪乃音酒造', brand: '浪乃音' },
      { maker: '福井弥平商店', brand: '萩乃露' },
      { maker: '太田酒造', brand: '道灌' },
    ],
    '京都府': [
      { maker: '月桂冠', brand: '月桂冠' },
      { maker: '黄桜', brand: '黄桜' },
      { maker: '松本酒造', brand: '澤屋まつもと' },
      { maker: '齊藤酒造', brand: '英勲' },
      { maker: '玉乃光酒造', brand: '玉乃光' },
      { maker: '招徳酒造', brand: '招徳' },
      { maker: '増田德兵衛商店', brand: '月の桂' },
      { maker: '佐々木酒造', brand: '聚楽第' },
      { maker: '木下酒造', brand: '玉川' },
      { maker: '羽田酒造', brand: '初日の出' },
      { maker: '東山酒造', brand: '坤滴' },
    ],
    '大阪府': [
      { maker: '秋鹿酒造', brand: '秋鹿' },
      { maker: '山野酒造', brand: '片野桜' },
      { maker: '北庄司酒造店', brand: '荘の郷' },
      { maker: '西條合資会社', brand: '天野酒' },
      { maker: '壽酒造', brand: '國乃長' },
      { maker: '浪花酒造', brand: '浪花正宗' },
      { maker: '利休蔵', brand: '利休梅' },
      { maker: '山田酒造', brand: '三輪福' },
      { maker: '井坂酒造場', brand: '三輪福' },
      { maker: '藤本雅一酒造醸', brand: 'みのり' },
    ],
    '兵庫県': [
      { maker: '白鶴酒造', brand: '白鶴' },
      { maker: '菊正宗酒造', brand: '菊正宗' },
      { maker: '剣菱酒造', brand: '剣菱' },
      { maker: '大関', brand: '大関' },
      { maker: '沢の鶴', brand: '沢の鶴' },
      { maker: '白鹿（辰馬本家酒造）', brand: '黒松白鹿' },
      { maker: '富久錦', brand: '富久錦' },
      { maker: '本田商店', brand: '龍力' },
      { maker: '山陽盃酒造', brand: '播州一献' },
      { maker: '下村酒造店', brand: '奥播磨' },
      { maker: '太陽酒造', brand: '赤石' },
    ],
    '奈良県': [
      { maker: '今西酒造', brand: 'みむろ杉' },
      { maker: '油長酒造', brand: '風の森' },
      { maker: '大倉本家', brand: '大倉' },
      { maker: '久保本家酒造', brand: '睡龍' },
      { maker: '奈良豊澤酒造', brand: '豊祝' },
      { maker: '春鹿（今西清兵衛商店）', brand: '春鹿' },
      { maker: '梅乃宿酒造', brand: '梅乃宿' },
      { maker: '長龍酒造', brand: '長龍' },
      { maker: '千代酒造', brand: '篠峯' },
      { maker: '北岡本店', brand: '八咫烏' },
    ],
    '和歌山県': [
      { maker: '平和酒造', brand: '紀土' },
      { maker: '名手酒造店', brand: '黒牛' },
      { maker: '田端酒造', brand: '羅生門' },
      { maker: '高垣酒造', brand: '龍神丸' },
      { maker: '世界一統', brand: '南方' },
      { maker: '九重雑賀', brand: '雑賀' },
      { maker: '吉村秀雄商店', brand: '車坂' },
      { maker: '初桜酒造', brand: '初桜' },
      { maker: '中野BC', brand: '紀伊国屋文左衛門' },
      { maker: '島村酒造', brand: '島村' },
    ],

    // -------------------------------------------------------
    // 中国
    // -------------------------------------------------------
    '鳥取県': [
      { maker: '千代むすび酒造', brand: '千代むすび' },
      { maker: '稲田本店', brand: '稲田姫' },
      { maker: '大谷酒造', brand: '鷹勇' },
      { maker: '梅津酒造', brand: '冨玲' },
      { maker: '久米桜酒造', brand: '久米桜' },
      { maker: '高田酒造', brand: '此君' },
      { maker: '諏訪酒造', brand: '諏訪泉' },
      { maker: '山根酒造場', brand: '日置桜' },
      { maker: '中井酒造', brand: '八潮' },
      { maker: '太田酒造場', brand: '辨天娘' },
    ],
    '島根県': [
      { maker: '李白酒造', brand: '李白' },
      { maker: '旭日酒造', brand: '十旭日' },
      { maker: '王祿酒造', brand: '王祿' },
      { maker: '吉田酒造', brand: '月山' },
      { maker: '板倉酒造', brand: '天穏' },
      { maker: '一宮酒造', brand: '石見銀山' },
      { maker: '隠岐酒造', brand: '隠岐誉' },
      { maker: '米田酒造', brand: '豊の秋' },
      { maker: '簸上清酒', brand: '七冠馬' },
      { maker: '池月酒造', brand: '池月' },
    ],
    '岡山県': [
      { maker: '利守酒造', brand: '酒一筋' },
      { maker: '宮下酒造', brand: '極聖' },
      { maker: '辻本店', brand: '御前酒' },
      { maker: '丸本酒造', brand: '竹林' },
      { maker: '嘉美心酒造', brand: '嘉美心' },
      { maker: '菊池酒造', brand: '燦然' },
      { maker: '板野酒造本店', brand: 'きびの吟風' },
      { maker: '室町酒造', brand: '室町時代' },
      { maker: '白菊酒造', brand: '大典白菊' },
      { maker: '三光正宗', brand: '三光正宗' },
    ],
    '広島県': [
      { maker: '賀茂鶴酒造', brand: '賀茂鶴' },
      { maker: '今田酒造本店', brand: '富久長' },
      { maker: '宝剣酒造', brand: '宝剣' },
      { maker: '亀齢酒造', brand: '亀齢' },
      { maker: '相原酒造', brand: '雨後の月' },
      { maker: '賀茂泉酒造', brand: '賀茂泉' },
      { maker: '醉心山根本店', brand: '醉心' },
      { maker: '竹鶴酒造', brand: '竹鶴' },
      { maker: '中尾醸造', brand: '誠鏡' },
      { maker: '藤井酒造', brand: '龍勢' },
      { maker: '白牡丹酒造', brand: '白牡丹' },
    ],
    '山口県': [
      { maker: '旭酒造', brand: '獺祭' },
      { maker: '澄川酒造場', brand: '東洋美人' },
      { maker: '岩崎酒造', brand: '長陽福娘' },
      { maker: '永山本家酒造場', brand: '貴' },
      { maker: '八百新酒造', brand: '雁木' },
      { maker: '村重酒造', brand: '金冠黒松' },
      { maker: '酒井酒造', brand: '五橋' },
      { maker: '山縣本店', brand: '毛利公' },
      { maker: '金光酒造', brand: '山頭火' },
      { maker: '中島屋酒造場', brand: 'カネナカ' },
    ],

    // -------------------------------------------------------
    // 四国
    // -------------------------------------------------------
    '徳島県': [
      { maker: '三芳菊酒造', brand: '三芳菊' },
      { maker: '本家松浦酒造場', brand: '鳴門鯛' },
      { maker: '芳水酒造', brand: '芳水' },
      { maker: '司菊酒造', brand: '司菊' },
      { maker: '日新酒類', brand: '瓢太閤' },
      { maker: '齋藤酒造場', brand: '御殿桜' },
      { maker: '吉本酒造場', brand: '美波太平洋' },
      { maker: '那賀酒造', brand: '旭の出鶴' },
      { maker: '天然醸造丸新本家', brand: '鬼太鼓' },
      { maker: '津乃峰酒造', brand: '津乃峰' },
    ],
    '香川県': [
      { maker: '川鶴酒造', brand: '川鶴' },
      { maker: '綾菊酒造', brand: '綾菊' },
      { maker: '金陵（西野金陵）', brand: '金陵' },
      { maker: '丸尾本店', brand: '悦凱陣' },
      { maker: '小豆島酒造', brand: 'ふわふわ。' },
      { maker: '森國酒造', brand: '森國' },
      { maker: '勇心酒造', brand: '勇心' },
      { maker: '石鎚酒造（香川営業所）', brand: '凱陣' },
      { maker: '今田酒造', brand: '讃岐くらうでぃ' },
      { maker: '国分寺酒造', brand: '国分寺' },
    ],
    '愛媛県': [
      { maker: '石鎚酒造', brand: '石鎚' },
      { maker: '成龍酒造', brand: '伊予賀儀屋' },
      { maker: '栄光酒造', brand: '栄光' },
      { maker: '酒六酒造', brand: '京ひな' },
      { maker: '八木酒造部', brand: '山丹正宗' },
      { maker: '梅錦山川', brand: '梅錦' },
      { maker: '水口酒造', brand: '仁喜多津' },
      { maker: '雪雀酒造', brand: '雪雀' },
      { maker: '武田酒造', brand: '日本心' },
      { maker: '近藤酒造', brand: '華姫桜' },
    ],
    '高知県': [
      { maker: '酔鯨酒造', brand: '酔鯨' },
      { maker: '亀泉酒造', brand: '亀泉' },
      { maker: '濱川商店', brand: '美丈夫' },
      { maker: '司牡丹酒造', brand: '司牡丹' },
      { maker: '仙頭酒造場', brand: '土佐しらぎく' },
      { maker: '無手無冠', brand: '無手無冠' },
      { maker: '南酒造場', brand: '南' },
      { maker: '有光酒造場', brand: '安芸虎' },
      { maker: '土佐鶴酒造', brand: '土佐鶴' },
      { maker: '文本酒造', brand: '桃太郎' },
      { maker: '西岡酒造店', brand: '久礼' },
    ],

    // -------------------------------------------------------
    // 九州・沖縄
    // -------------------------------------------------------
    '福岡県': [
      { maker: '山口酒造場', brand: '庭のうぐいす' },
      { maker: '杜の蔵', brand: '杜の蔵' },
      { maker: '大賀酒造', brand: '玉出泉' },
      { maker: '喜多屋', brand: '喜多屋' },
      { maker: '瑞穂菊酒造', brand: '瑞穂菊' },
      { maker: '若波酒造', brand: '若波' },
      { maker: '豊村酒造', brand: '豊村' },
      { maker: '比翼鶴酒造', brand: '比翼鶴' },
      { maker: '花の露', brand: '花の露' },
      { maker: '旭菊酒造', brand: '旭菊' },
    ],
    '佐賀県': [
      { maker: '天山酒造', brand: '七田' },
      { maker: '富久千代酒造', brand: '鍋島' },
      { maker: '天吹酒造', brand: '天吹' },
      { maker: '基山商店', brand: '基峰鶴' },
      { maker: '東鶴酒造', brand: '東鶴' },
      { maker: '矢野酒造', brand: '竹の園' },
      { maker: '小松酒造', brand: '万齢' },
      { maker: '馬場酒造場', brand: '能古見' },
      { maker: '古伊万里酒造', brand: '古伊万里' },
      { maker: '大和酒造', brand: '肥前蔵心' },
    ],
    '長崎県': [
      { maker: '福田酒造', brand: '福田' },
      { maker: '今里酒造', brand: '六十餘洲' },
      { maker: '森酒造場', brand: '飛鸞' },
      { maker: '杵の川', brand: '杵の川' },
      { maker: '梅ヶ枝酒造', brand: '梅ヶ枝' },
      { maker: '壱岐の蔵酒造', brand: '壱岐の島' },
      { maker: '吉田屋', brand: '吉田屋' },
      { maker: '潜龍酒造', brand: '潜龍' },
      { maker: '山崎本店酒造場', brand: 'よこやま' },
      { maker: '重家酒造', brand: '横山五十' },
    ],
    '熊本県': [
      { maker: '花の香酒造', brand: '花の香' },
      { maker: '河津酒造', brand: '花雪' },
      { maker: '熊本県酒造研究所', brand: '香露' },
      { maker: '通潤酒造', brand: '通潤' },
      { maker: '千代の園酒造', brand: '千代の園' },
      { maker: '美少年', brand: '美少年' },
      { maker: '山村酒造', brand: 'れいざん' },
      { maker: '亀萬酒造', brand: '亀萬' },
      { maker: '瑞鷹', brand: '瑞鷹' },
      { maker: '天草酒造', brand: '天草' },
    ],
    '大分県': [
      { maker: '萱島酒造', brand: '西の関' },
      { maker: '小松酒造場', brand: '豊潤' },
      { maker: '中野酒造', brand: '智恵美人' },
      { maker: '藤居醸造', brand: '龍梅' },
      { maker: '久家本店', brand: '一の井手' },
      { maker: '佐藤酒造', brand: '久住千羽鶴' },
      { maker: '八鹿酒造', brand: '八鹿' },
      { maker: '倉光酒造', brand: '倉光' },
      { maker: '井上酒造', brand: '角の井' },
      { maker: '老松酒造', brand: '閻魔' },
    ],
    '宮崎県': [
      { maker: '千徳酒造', brand: '千徳' },
      { maker: '雲海酒造', brand: '初御代' },
      { maker: '落合酒造場', brand: '落合' },
      { maker: '松露酒造', brand: '松露' },
      { maker: '姫泉酒造', brand: '御幣' },
      { maker: '神楽酒造', brand: '天孫降臨（清酒）' },
      { maker: '佐藤焼酎製造場', brand: '宮の舞' },
      { maker: '正春酒造', brand: '正春（清酒）' },
      { maker: '藤田酒造', brand: '日向路' },
      { maker: '寿海酒造', brand: '寿海（清酒）' },
    ],
    '鹿児島県': [
      { maker: '濵田酒造', brand: '薩州正宗' },
      { maker: '西酒造', brand: '天賦' },
      { maker: 'さつま無双', brand: 'さつま無双（清酒）' },
      { maker: '本坊酒造', brand: '桜島（清酒）' },
      { maker: '鹿児島酒造', brand: 'やごろうどん（清酒）' },
      { maker: '小正醸造', brand: '薩摩の誉（清酒）' },
      { maker: '薩摩酒造', brand: '明治蔵' },
      { maker: '相良酒造', brand: '相良' },
      { maker: '白金酒造', brand: '白金（清酒）' },
      { maker: '大口酒造', brand: '伊佐美（清酒）' },
    ],
    '沖縄県': [
      { maker: '泰石酒造', brand: '黎明' },
      { maker: 'まさひろ酒造', brand: '島唄' },
      { maker: '瑞泉酒造', brand: '瑞泉（清酒）' },
      { maker: '崎山酒造廠', brand: '崎山（清酒）' },
      { maker: '久米島の久米仙', brand: '久米島（清酒）' },
      { maker: '忠孝酒造', brand: '忠孝（清酒）' },
      { maker: '菊之露酒造', brand: '菊之露（清酒）' },
      { maker: '新里酒造', brand: '新里（清酒）' },
      { maker: 'ヘリオス酒造', brand: 'ヘリオス' },
      { maker: '石川酒造場', brand: '玉友' },
    ],
  },

  // ============================================================
  // ビール
  // ============================================================
  'ビール': {

    // -------------------------------------------------------
    // 北海道
    // -------------------------------------------------------
    '北海道': [
      { maker: 'サッポロビール', brand: 'サッポロクラシック' },
      { maker: '小樽ビール', brand: '小樽ビール' },
      { maker: 'ノースアイランドビール', brand: 'ノースアイランドビール' },
      { maker: '大雪地ビール', brand: '大雪ピルスナー' },
      { maker: '網走ビール', brand: '流氷ドラフト' },
      { maker: '鬼伝説ビール（のぼりべつ地ビール）', brand: '鬼伝説' },
      { maker: '帯広ビール', brand: '十勝ビール' },
      { maker: '薄野地麦酒', brand: '薄野ビール' },
      { maker: '旭川大雪地ビール', brand: '大雪ケルシュ' },
      { maker: 'フラノブルワリー', brand: 'フラノビール' },
    ],

    // -------------------------------------------------------
    // 東北
    // -------------------------------------------------------
    '青森県': [
      { maker: '奥入瀬ビール（JA十和田おいらせ）', brand: '奥入瀬ビール' },
      { maker: 'Be Easy Brewing', brand: 'ペイペイエール' },
      { maker: 'みちのく地ビール', brand: 'みちのくビール' },
      { maker: 'Garutsu Brewing', brand: 'ガルツビール' },
    ],
    '岩手県': [
      { maker: 'ベアレン醸造所', brand: 'ベアレンクラシック' },
      { maker: 'いわて蔵ビール（世嬉の一酒造）', brand: 'いわて蔵ビール' },
      { maker: '遠野醸造', brand: '遠野醸造ビール' },
      { maker: 'ブリューイングベース一関', brand: 'さくらエール' },
      { maker: '三陸ビール', brand: '三陸ビール' },
    ],
    '宮城県': [
      { maker: 'やくらいビール', brand: 'やくらいビール' },
      { maker: '仙南クラフトビール', brand: '仙南ビール' },
      { maker: '鳴子温泉ブルワリー', brand: '鳴子の風' },
      { maker: '松島ビール', brand: '松島ビール' },
      { maker: '仙台マイクロブルワリー', brand: '仙台ビール' },
    ],
    '秋田県': [
      { maker: '秋田あくらビール', brand: 'あくらビール' },
      { maker: '田沢湖ビール', brand: '田沢湖ビール' },
      { maker: 'ブルーマスター', brand: 'なまはげIPA' },
      { maker: '湖畔の杜ビール', brand: '湖畔の杜ビール' },
    ],
    '山形県': [
      { maker: '月山ビール', brand: '月山ビール' },
      { maker: '米沢ジャックスブルワリー', brand: '米沢エール' },
      { maker: '東根フルーツビール', brand: 'さくらんぼビール' },
      { maker: '山形ブルワリー', brand: '山形ビール' },
    ],
    '福島県': [
      { maker: '猪苗代地ビール', brand: '猪苗代地ビール' },
      { maker: '福島路ビール', brand: '福島路ビール' },
      { maker: '会津麦酒', brand: '会津麦酒' },
      { maker: '南会津マウンテンブルーイング', brand: '南会津ラガー' },
      { maker: 'みちのく福島路ビール', brand: 'ピーチエール' },
    ],

    // -------------------------------------------------------
    // 関東
    // -------------------------------------------------------
    '茨城県': [
      { maker: '木内酒造', brand: '常陸野ネストビール' },
      { maker: 'シャトーカミヤ', brand: '牛久ビール' },
      { maker: 'つくばクラフトビア', brand: 'つくばエール' },
      { maker: 'さかい河岸ブルワリー', brand: 'さかい河岸ビール' },
    ],
    '栃木県': [
      { maker: 'ろまんちっく村ブルワリー', brand: '餃子浪漫' },
      { maker: 'うしとらブルワリー', brand: 'うしとらビール' },
      { maker: 'ブリューイング那須', brand: '那須ビール' },
      { maker: 'Circular Brewing', brand: 'サーキュラービール' },
    ],
    '群馬県': [
      { maker: '川場ビール', brand: '川場ビール' },
      { maker: '嬬恋高原ブルワリー', brand: '嬬恋ビール' },
      { maker: '月夜野クラフトビール', brand: '月夜野ビール' },
    ],
    '埼玉県': [
      { maker: 'コエドブルワリー', brand: 'COEDO' },
      { maker: '秩父麦酒', brand: '秩父麦酒' },
      { maker: '氷川ブルワリー', brand: '氷川の杜' },
      { maker: '所沢ビール', brand: '所沢ビール' },
      { maker: '麦雑穀工房マイクロブルワリー', brand: '小川町ビール' },
    ],
    '千葉県': [
      { maker: 'ロコビア', brand: '佐倉エール' },
      { maker: '九十九里オーシャンビール', brand: '九十九里ビール' },
      { maker: '寒菊銘醸', brand: 'COLD CREEK' },
      { maker: '安房麦酒', brand: '安房ビール' },
    ],
    '東京都': [
      { maker: 'ティー・ワイ・ハーバーブルワリー', brand: 'T.Y.HARBOR' },
      { maker: '東京隅田川ブルーイング', brand: 'すみだエール' },
      { maker: 'TOKYO ALEWORKS', brand: 'トーキョーエール' },
      { maker: 'Distant Shores Brewing', brand: 'ディスタントショアーズ' },
      { maker: 'ブリューイングキャンプ', brand: 'ブリューイングキャンプ' },
      { maker: '石川酒造', brand: '多摩の恵' },
      { maker: 'Vertere', brand: 'ヴェルテレ' },
      { maker: 'BREW LOUNGE', brand: 'ブリューラウンジ' },
      { maker: '奥多摩ブルワリー', brand: 'VERTERE' },
      { maker: '26K Brewing', brand: '26Kビール' },
    ],
    '神奈川県': [
      { maker: 'サンクトガーレン', brand: 'サンクトガーレン' },
      { maker: '横浜ビール', brand: '横浜ラガー' },
      { maker: '鎌倉ビール', brand: '鎌倉ビール' },
      { maker: '湘南ビール（熊澤酒造）', brand: '湘南ビール' },
      { maker: 'ブリマーブルーイング', brand: 'ブリマーポーター' },
      { maker: 'TDM1874 Brewery', brand: 'TDM1874' },
      { maker: 'ヨロッコビール', brand: 'ヨロッコビール' },
    ],

    // -------------------------------------------------------
    // 中部
    // -------------------------------------------------------
    '新潟県': [
      { maker: 'エチゴビール', brand: 'エチゴビール' },
      { maker: 'スワンレイクビール', brand: 'スワンレイクビール' },
      { maker: '胎内高原ビール', brand: '吟籠IPA' },
      { maker: '八海醸造', brand: 'ライディーンビール' },
    ],
    '富山県': [
      { maker: '城端麦酒', brand: '城端麦酒' },
      { maker: '宇奈月ビール', brand: '宇奈月ビール' },
      { maker: '立山ブルワリー', brand: '立山ビール' },
    ],
    '石川県': [
      { maker: 'わくわくブルワリー', brand: '金澤麦酒' },
      { maker: '能登ブルーイング', brand: '能登エール' },
      { maker: 'オリエンタルブルーイング', brand: 'オリエンタルビール' },
    ],
    '福井県': [
      { maker: '越の磯', brand: '越前福井浪漫麦酒' },
      { maker: 'ZEN BREWING', brand: 'ZENビール' },
    ],
    '山梨県': [
      { maker: '富士桜高原麦酒', brand: '富士桜高原麦酒' },
      { maker: '八ヶ岳ブルワリー', brand: 'タッチダウン' },
      { maker: 'アウトサイダーブルーイング', brand: 'アウトサイダービール' },
      { maker: 'Far Yeast Brewing', brand: 'Far Yeast' },
    ],
    '長野県': [
      { maker: 'ヤッホーブルーイング', brand: 'よなよなエール' },
      { maker: 'オラホビール', brand: 'オラホビール' },
      { maker: '志賀高原ビール（玉村本店）', brand: '志賀高原ビール' },
      { maker: '南信州ビール', brand: '南信州ビール' },
      { maker: 'AJB (Asian Japanese Brewery)', brand: 'AJBビール' },
      { maker: '松本ブルワリー', brand: '松本ビール' },
      { maker: '軽井沢ブルワリー', brand: 'THE軽井沢ビール' },
    ],
    '岐阜県': [
      { maker: '飛騨高山麦酒', brand: '飛騨高山麦酒' },
      { maker: '地ビール飛騨', brand: '飛騨ビール' },
      { maker: '郡上八幡麦酒こぼこぼ', brand: 'こぼこぼビール' },
    ],
    '静岡県': [
      { maker: 'ベアードビール', brand: 'ベアードビール' },
      { maker: '反射炉ビヤ', brand: '反射炉ビヤ' },
      { maker: '御殿場高原ビール', brand: '御殿場高原ビール' },
      { maker: 'West Coast Brewing', brand: 'WCB' },
      { maker: 'Repubrew', brand: 'リパブリュー' },
    ],
    '愛知県': [
      { maker: '盛田金しゃちビール', brand: '金しゃちビール' },
      { maker: 'ワイマーケットブルーイング', brand: 'ワイマーケット' },
      { maker: 'カブトビール（半田赤レンガ建物）', brand: 'カブトビール' },
      { maker: 'ブルワリーレストランORIZON', brand: 'ORIZONビール' },
    ],

    // -------------------------------------------------------
    // 近畿
    // -------------------------------------------------------
    '三重県': [
      { maker: '伊勢角屋麦酒', brand: '伊勢角屋麦酒' },
      { maker: 'モクモクブルワリー', brand: 'モクモクビール' },
    ],
    '滋賀県': [
      { maker: '長浜浪漫ビール', brand: '長浜エール' },
      { maker: 'TWO RABBITS BREWING', brand: 'ツーラビッツ' },
    ],
    '京都府': [
      { maker: 'キンシ正宗', brand: '京都町家麦酒' },
      { maker: '黄桜', brand: '京都麦酒' },
      { maker: 'ウッドミルブルワリー', brand: 'ウッドミル' },
      { maker: 'スプリングバレーブルワリー京都', brand: 'SVB京都' },
    ],
    '大阪府': [
      { maker: '箕面ビール', brand: '箕面ビール' },
      { maker: 'マーカスブルワリー', brand: 'マーカスビール' },
      { maker: 'Derailleur Brew Works', brand: 'デライユ' },
      { maker: 'CRAFT BEER BASE', brand: 'CBBビール' },
    ],
    '兵庫県': [
      { maker: 'あわぢびーる', brand: 'あわぢびーる' },
      { maker: '六甲ビール', brand: '六甲ビール' },
      { maker: 'KONISHIビール（小西酒造）', brand: 'KONISHIビール' },
      { maker: '城崎ビール', brand: '城崎ビール' },
    ],
    '奈良県': [
      { maker: '奈良醸造', brand: 'ならまちエール' },
      { maker: '曽爾高原ビール', brand: '曽爾高原ビール' },
      { maker: 'ゴールデンラビットビール', brand: 'ゴールデンラビット' },
    ],
    '和歌山県': [
      { maker: 'ボイジャーブルーイング', brand: 'ボイジャービール' },
      { maker: 'ナギサビール', brand: 'ナギサビール' },
    ],

    // -------------------------------------------------------
    // 中国
    // -------------------------------------------------------
    '鳥取県': [
      { maker: '大山Gビール（久米桜酒造）', brand: '大山Gビール' },
      { maker: '鳥取砂丘ブルワリー', brand: '砂丘ビール' },
    ],
    '島根県': [
      { maker: 'ビアへるん（島根ビール）', brand: 'ビアへるん' },
      { maker: '石見麦酒', brand: '石見麦酒' },
    ],
    '岡山県': [
      { maker: '宮下酒造', brand: '独歩ビール' },
      { maker: '吉備土手下麦酒', brand: '吉備土手下麦酒' },
    ],
    '広島県': [
      { maker: '三次ベッケンビール', brand: 'ベッケンビール' },
      { maker: '宮島ビール', brand: '宮島ビール' },
      { maker: 'Hiroshima Neighborly Brewing', brand: 'HNBビール' },
    ],
    '山口県': [
      { maker: '萩ビール', brand: 'ちょんまげビール' },
      { maker: 'やまぐち地ビール', brand: 'やまぐちビール' },
    ],

    // -------------------------------------------------------
    // 四国
    // -------------------------------------------------------
    '徳島県': [
      { maker: 'RISE & WIN Brewing', brand: 'KAMIKATZ' },
      { maker: 'Awa新町ブルワリー', brand: '阿波麦酒' },
    ],
    '香川県': [
      { maker: 'さぬきビール', brand: 'さぬきビール' },
      { maker: 'まめまめビール', brand: 'まめまめビール' },
    ],
    '愛媛県': [
      { maker: '梅錦ビール', brand: '梅錦ビール' },
      { maker: 'DD4D BREWING', brand: 'DD4D' },
    ],
    '高知県': [
      { maker: 'TOSACO（高知カンパーニュブルワリー）', brand: 'TOSACO' },
      { maker: 'Mukai Craft Brewing', brand: 'ムカイクラフト' },
    ],

    // -------------------------------------------------------
    // 九州・沖縄
    // -------------------------------------------------------
    '福岡県': [
      { maker: 'ブルーマスター', brand: 'ブルーマスター' },
      { maker: 'FUKUOKA CRAFT', brand: 'FUKUOKA CRAFT' },
      { maker: '門司港レトロビール', brand: '門司港ビール' },
      { maker: 'ヤフオクドーム醸造所（ホークスビール）', brand: 'ホークスラガー' },
    ],
    '佐賀県': [
      { maker: '宗政酒造', brand: 'のまんばビール' },
      { maker: '嬉野温泉ブルワリー', brand: '嬉野ビール' },
    ],
    '長崎県': [
      { maker: '雲仙ブルワリー', brand: '雲仙ビール' },
      { maker: '壱岐麦酒', brand: '壱岐ゴールド' },
    ],
    '熊本県': [
      { maker: '熊本クラフトビール', brand: '熊本クラフト' },
      { maker: '阿蘇ファームブルワリー', brand: '阿蘇ビール' },
    ],
    '大分県': [
      { maker: '別府ブルワリー', brand: '別府エール' },
      { maker: 'くじゅう高原ビール', brand: 'くじゅうビール' },
    ],
    '宮崎県': [
      { maker: 'ひでじビール', brand: 'ひでじビール' },
      { maker: '青島ブルワリー', brand: '青島ビール' },
    ],
    '鹿児島県': [
      { maker: '城山ブルワリー', brand: '城山ビール' },
      { maker: '霧島高原ビール', brand: '霧島高原ビール' },
      { maker: '薩摩麦酒', brand: '薩摩ゴールド' },
    ],
    '沖縄県': [
      { maker: 'オリオンビール', brand: 'オリオンビール' },
      { maker: 'ヘリオス酒造', brand: 'ヘリオスビール' },
      { maker: '石垣島ビール', brand: '石垣島ビール' },
      { maker: '沖縄サンゴビール', brand: 'サンゴビール' },
      { maker: '南都酒造所', brand: 'OKINAWA SANGO BEER' },
    ],
  },

  // ============================================================
  // 焼酎
  // ============================================================
  '焼酎': {

    // -------------------------------------------------------
    // 北海道・東北
    // -------------------------------------------------------
    '北海道': [
      { maker: '合同酒精', brand: 'しそ焼酎 鍛高譚' },
      { maker: '札幌酒精工業', brand: 'サッポロソフト' },
      { maker: '二世古酒造', brand: 'えぞっ娘' },
    ],
    '青森県': [
      { maker: '八戸酒類', brand: 'どんぐり' },
    ],
    '岩手県': [
      { maker: 'あさ開', brand: '南部杜氏（焼酎）' },
    ],
    '宮城県': [
      { maker: '佐浦', brand: '浦霞焼酎' },
    ],
    '秋田県': [
      { maker: '秋田県醗酵工業', brand: 'なまはげ' },
    ],
    '山形県': [
      { maker: '出羽桜酒造', brand: '出羽桜焼酎' },
    ],
    '福島県': [
      { maker: '花泉酒造', brand: '花泉（焼酎）' },
      { maker: '奥の松酒造', brand: '奥の松焼酎' },
    ],

    // -------------------------------------------------------
    // 関東
    // -------------------------------------------------------
    '茨城県': [
      { maker: '明利酒類', brand: '百年梅酒焼酎' },
    ],
    '栃木県': [
      { maker: '天鷹酒造', brand: '天鷹焼酎' },
    ],
    '群馬県': [
      { maker: '永井酒造', brand: '水芭蕉焼酎' },
    ],
    '埼玉県': [
      { maker: '釜屋', brand: '力士焼酎' },
    ],
    '千葉県': [
      { maker: '岩瀬酒造', brand: '御腹召' },
    ],
    '東京都': [
      { maker: '小澤酒造', brand: '澤乃井粕取り焼酎' },
      { maker: '東京島酒（八丈興発）', brand: '八重椿' },
      { maker: '樫立酒造', brand: '島の華' },
    ],
    '神奈川県': [
      { maker: '黄金井酒造', brand: '盛升焼酎' },
    ],

    // -------------------------------------------------------
    // 中部
    // -------------------------------------------------------
    '新潟県': [
      { maker: '越乃米蔵', brand: '越乃米蔵' },
    ],
    '長野県': [
      { maker: '喜久水酒造', brand: '喜久水そば焼酎' },
      { maker: '千曲錦酒造', brand: '信濃蕎麦焼酎' },
    ],
    '静岡県': [
      { maker: '花の舞酒造', brand: '花の舞焼酎' },
    ],
    '愛知県': [
      { maker: '中埜酒造', brand: 'きんしゃち焼酎' },
    ],

    // -------------------------------------------------------
    // 近畿
    // -------------------------------------------------------
    '三重県': [
      { maker: '宮崎本店', brand: 'キンミヤ焼酎' },
      { maker: '清水清三郎商店', brand: '作 本格焼酎' },
    ],
    '京都府': [
      { maker: '宝酒造', brand: 'よかいち' },
      { maker: '松本酒造', brand: '京焼酎' },
    ],
    '大阪府': [
      { maker: '西吉田酒造大阪支店', brand: '大阪焼酎' },
    ],
    '兵庫県': [
      { maker: '江井ヶ嶋酒造', brand: '白玉焼酎' },
    ],
    '奈良県': [
      { maker: '八木酒造', brand: '青短' },
    ],
    '和歌山県': [
      { maker: '中野BC', brand: '富士白' },
      { maker: '平和酒造', brand: '紀州の焼酎' },
    ],

    // -------------------------------------------------------
    // 中国
    // -------------------------------------------------------
    '鳥取県': [
      { maker: '千代むすび酒造', brand: 'なまけ者' },
    ],
    '島根県': [
      { maker: '李白酒造', brand: '李白焼酎' },
    ],
    '岡山県': [
      { maker: '宮下酒造', brand: 'キングオブダイヤモンド' },
    ],
    '広島県': [
      { maker: '中国醸造', brand: 'ダルマ焼酎' },
      { maker: '三宅本店', brand: '千福焼酎' },
    ],
    '山口県': [
      { maker: '永山本家酒造場', brand: '貴 焼酎' },
    ],

    // -------------------------------------------------------
    // 四国
    // -------------------------------------------------------
    '徳島県': [
      { maker: '日新酒類', brand: 'すだち酎' },
      { maker: '鳴門金時蒸溜所', brand: '鳴門金時焼酎' },
    ],
    '香川県': [
      { maker: '西野金陵', brand: '金陵焼酎' },
    ],
    '愛媛県': [
      { maker: '媛囃子', brand: '媛囃子' },
    ],
    '高知県': [
      { maker: '無手無冠', brand: 'ダバダ火振' },
      { maker: '菊水酒造（高知）', brand: 'ひまわり焼酎' },
    ],

    // -------------------------------------------------------
    // 九州・沖縄（焼酎の本場）
    // -------------------------------------------------------
    '福岡県': [
      { maker: '西吉田酒造', brand: 'つくし' },
      { maker: 'ゑびす酒造', brand: 'らんびき' },
      { maker: '紅乙女酒造', brand: '紅乙女' },
      { maker: '杜の蔵', brand: '杜の蔵 麦焼酎' },
      { maker: '喜多屋', brand: '喜多屋 麦焼酎' },
      { maker: '天盃', brand: '天盃' },
      { maker: '光武酒造場', brand: '魔界への誘い' },
    ],
    '佐賀県': [
      { maker: '宗政酒造', brand: 'のんのこ' },
      { maker: '天山酒造', brand: '天山 麦焼酎' },
      { maker: '窓乃梅酒造', brand: '窓乃梅焼酎' },
      { maker: '光武酒造場', brand: '魔界への誘い' },
      { maker: '松浦一酒造', brand: '松浦一' },
    ],
    '長崎県': [
      { maker: '壱岐の蔵酒造', brand: '壱岐っ娘' },
      { maker: '玄海酒造', brand: '壱岐' },
      { maker: '重家酒造', brand: 'ちんぐ' },
      { maker: '猿川伊豆酒造', brand: '猿川' },
      { maker: '天の川酒造', brand: '天の川' },
      { maker: '山の守酒造場', brand: '山の守' },
      { maker: '壱岐焼酎協業組合', brand: '壱岐の華' },
    ],
    '熊本県': [
      { maker: '繊月酒造', brand: '繊月' },
      { maker: '高橋酒造', brand: '白岳しろ' },
      { maker: '常楽酒造', brand: '秋の露' },
      { maker: '豊永酒造', brand: '豊永蔵' },
      { maker: '六調子酒造', brand: '六調子' },
      { maker: '寿福酒造場', brand: '武者返し' },
      { maker: '大石酒造場', brand: '大石' },
      { maker: '深野酒造', brand: '彩葉' },
      { maker: '房の露', brand: 'とろとろの梅酒' },
      { maker: '松下醸造場', brand: '萬緑' },
      { maker: '鳥飼酒造', brand: '鳥飼' },
      { maker: '球磨焼酎酒造組合', brand: '球磨焼酎' },
      { maker: '抜群酒造', brand: '抜群' },
      { maker: '那須酒造場', brand: '球磨の泉' },
      { maker: '木下醸造所', brand: '文蔵' },
      { maker: '渕田酒造場', brand: '蔵八' },
    ],
    '大分県': [
      { maker: '三和酒類', brand: 'いいちこ' },
      { maker: '二階堂酒造', brand: '二階堂' },
      { maker: '藤居醸造', brand: '特蒸泰明' },
      { maker: '常徳屋酒造場', brand: '常徳屋' },
      { maker: '四ツ谷酒造', brand: '兼八' },
      { maker: '赤嶺酒造場', brand: '百助' },
      { maker: '老松酒造', brand: '閻魔' },
      { maker: '井上酒造', brand: '角の井' },
      { maker: '南酒造', brand: '一村一品' },
      { maker: '八鹿酒造', brand: '銀座のすずめ' },
      { maker: '西の星', brand: '西の星' },
      { maker: '光酒造', brand: '博多小女郎' },
      { maker: '麻生本店', brand: '麻生' },
      { maker: '久保酒蔵', brand: '緑茶梅酒' },
      { maker: '薫長酒造', brand: '薫長' },
    ],
    '宮崎県': [
      { maker: '霧島酒造', brand: '黒霧島' },
      { maker: '雲海酒造', brand: '雲海' },
      { maker: '落合酒造場', brand: '赤芋仕込 薩摩の翼' },
      { maker: '黒木本店', brand: '百年の孤独' },
      { maker: '柳田酒造', brand: '駒' },
      { maker: '渡邊酒造場', brand: '旭萬年' },
      { maker: '佐藤焼酎製造場', brand: '天の刻印' },
      { maker: '正春酒造', brand: '正春' },
      { maker: '岩倉酒造場', brand: '月の中' },
      { maker: '寿海酒造', brand: '寿海' },
      { maker: '神楽酒造', brand: '天孫降臨' },
      { maker: '松露酒造', brand: '松露' },
      { maker: '古澤醸造', brand: '八重桜' },
      { maker: '姫泉酒造', brand: '御幣' },
      { maker: '尾鈴山蒸留所（黒木本店）', brand: '山猿' },
      { maker: '京屋酒造', brand: '甕雫' },
    ],
    '鹿児島県': [
      { maker: '濵田酒造', brand: '海' },
      { maker: '小正醸造', brand: '小鶴' },
      { maker: '薩摩酒造', brand: 'さつま白波' },
      { maker: '本坊酒造', brand: '桜島' },
      { maker: '大口酒造', brand: '伊佐美' },
      { maker: '村尾酒造', brand: '村尾' },
      { maker: '佐藤酒造', brand: '佐藤' },
      { maker: '西酒造', brand: '富乃宝山' },
      { maker: '白金酒造', brand: '白金乃露' },
      { maker: 'さつま無双', brand: 'さつま無双' },
      { maker: '国分酒造', brand: 'フラミンゴオレンジ' },
      { maker: '中村酒造場', brand: 'なかむら' },
      { maker: '田村合名会社', brand: '薩摩茶屋' },
      { maker: '万膳酒造', brand: '万膳' },
      { maker: '鹿児島酒造', brand: 'やきいも黒瀬' },
      { maker: '田苑酒造', brand: '田苑' },
      { maker: '若潮酒造', brand: '千亀女' },
      { maker: '小牧醸造', brand: '一尚' },
      { maker: '相良酒造', brand: '相良仲右衛門' },
      { maker: '甲斐商店', brand: '伊佐大泉' },
      { maker: '白玉醸造', brand: '魔王' },
      { maker: '森伊蔵酒造', brand: '森伊蔵' },
    ],
    '沖縄県': [
      { maker: '久米島の久米仙', brand: '久米仙' },
      { maker: '瑞泉酒造', brand: '瑞泉' },
      { maker: '菊之露酒造', brand: '菊之露' },
      { maker: 'まさひろ酒造', brand: 'まさひろ' },
      { maker: '崎山酒造廠', brand: '松藤' },
      { maker: '忠孝酒造', brand: '忠孝' },
      { maker: '瑞穂酒造', brand: '瑞穂' },
      { maker: '新里酒造', brand: '琉球' },
      { maker: 'ヘリオス酒造', brand: 'くら' },
      { maker: '請福酒造', brand: '請福' },
      { maker: '比嘉酒造', brand: '残波' },
      { maker: '今帰仁酒造', brand: '美しき古里' },
      { maker: '山川酒造', brand: '珊瑚礁' },
      { maker: '咲元酒造', brand: '咲元' },
      { maker: '多良川', brand: '多良川' },
      { maker: '宮の華', brand: '宮の華' },
    ],
  },

  // ============================================================
  // ジン
  // ============================================================
  'ジン': {

    // -------------------------------------------------------
    // 北海道
    // -------------------------------------------------------
    '北海道': [
      { maker: '紅櫻蒸溜所', brand: '9148' },
      { maker: '自由ウヰスキー（堅展実業）', brand: '紅桜ジン' },
      { maker: '積丹スピリッツ', brand: '火の帆 HONOHO' },
      { maker: '北海道自由ウヰスキー', brand: '北海道クラフトジン' },
      { maker: 'ニセコ蒸溜所（八海醸造）', brand: 'ohoro GIN' },
    ],

    // -------------------------------------------------------
    // 東北
    // -------------------------------------------------------
    '青森県': [
      { maker: '八戸酒造', brand: '八仙 クラフトジン' },
      { maker: 'ガルツ蒸留所', brand: 'ガルツジン' },
    ],
    '岩手県': [
      { maker: '赤武酒造', brand: 'クラフトジン清庵' },
    ],
    '宮城県': [
      { maker: '伊達醸造所', brand: '欅 KEYAKI' },
    ],
    '秋田県': [
      { maker: '秋田蒸溜所', brand: '秋田杉GIN' },
      { maker: '新政酒造', brand: '新政ジン' },
    ],
    '山形県': [
      { maker: '月山酒造', brand: '月山ジン' },
    ],
    '福島県': [
      { maker: '笹の川酒造', brand: '安積蒸溜所ジン' },
    ],

    // -------------------------------------------------------
    // 関東
    // -------------------------------------------------------
    '茨城県': [
      { maker: '木内酒造', brand: '常陸野ハンドメイドジン' },
    ],
    '栃木県': [
      { maker: 'アール蒸溜所', brand: 'クラフトジン日光' },
    ],
    '群馬県': [
      { maker: '土田酒造', brand: '土田ジン' },
    ],
    '埼玉県': [
      { maker: '麻原酒造', brand: '武州クラフトジン' },
    ],
    '千葉県': [
      { maker: 'ミツバ蒸溜所', brand: 'MITSUBEE GIN' },
    ],
    '東京都': [
      { maker: 'エシカル・スピリッツ', brand: '東京リバーサイド蒸溜所ジン' },
      { maker: '東京八王子蒸溜所', brand: 'トーキョーハチオウジン' },
      { maker: '虎ノ門蒸留所', brand: 'COMMON GIN' },
    ],
    '神奈川県': [
      { maker: '熊澤酒造', brand: '湘南クラフトジン' },
    ],

    // -------------------------------------------------------
    // 中部
    // -------------------------------------------------------
    '新潟県': [
      { maker: '今代司酒造', brand: '今代司ジン' },
      { maker: '越後薬草', brand: 'THE HERBALIST YASO GIN' },
      { maker: '高千代酒造', brand: 'たかちよ GIN' },
    ],
    '富山県': [
      { maker: '若鶴酒造', brand: 'T&T TOYAMA GIN' },
    ],
    '石川県': [
      { maker: '数馬酒造', brand: '能登ジン' },
    ],
    '山梨県': [
      { maker: 'ドメーヌ・デ・テンプリエ', brand: '甲斐ジン' },
    ],
    '長野県': [
      { maker: 'マルス信州蒸溜所（本坊酒造）', brand: '和美人ジン信州' },
      { maker: '小諸蒸留所', brand: '小諸ジン' },
    ],
    '岐阜県': [
      { maker: '辰巳蒸留所', brand: 'クラフトジン飛騨' },
    ],
    '静岡県': [
      { maker: 'ガイアフロー静岡蒸溜所', brand: '静岡ドライジン' },
      { maker: '中村酒造場（静岡）', brand: '駿河ジン' },
    ],
    '愛知県': [
      { maker: 'クラフトリカーズ', brand: 'LAST EPISODE GIN' },
      { maker: 'キヨス蒸留所', brand: 'キヨスジン' },
    ],

    // -------------------------------------------------------
    // 近畿
    // -------------------------------------------------------
    '三重県': [
      { maker: '伊勢萬', brand: '伊勢ジン' },
    ],
    '滋賀県': [
      { maker: '長濱蒸溜所', brand: '長濱ジン' },
    ],
    '京都府': [
      { maker: '京都蒸溜所', brand: '季の美' },
      { maker: '松本酒造', brand: '京ジン' },
    ],
    '大阪府': [
      { maker: '大阪スピリッツ', brand: '大阪ジン' },
      { maker: '江井ヶ嶋酒造大阪工場', brand: 'AKASHI GIN' },
    ],
    '兵庫県': [
      { maker: '明石酒類醸造', brand: '明石ジン' },
      { maker: '江井ヶ嶋酒造', brand: 'あかしクラフトジン' },
    ],
    '奈良県': [
      { maker: '油長酒造', brand: '大和蒸溜所ジン' },
    ],
    '和歌山県': [
      { maker: '中野BC', brand: '槙 KOZUE' },
      { maker: '平和酒造', brand: '紀州ジン' },
    ],

    // -------------------------------------------------------
    // 中国
    // -------------------------------------------------------
    '鳥取県': [
      { maker: '千代むすび酒造', brand: '大山ジン' },
    ],
    '島根県': [
      { maker: '三島酒造', brand: '出雲ジン' },
    ],
    '岡山県': [
      { maker: '宮下酒造', brand: 'クラフトジン岡山' },
    ],
    '広島県': [
      { maker: 'SAKURAO DISTILLERY（中国醸造）', brand: 'SAKURAO GIN' },
    ],
    '山口県': [
      { maker: '永山本家酒造場', brand: '貴 ジン' },
    ],

    // -------------------------------------------------------
    // 四国
    // -------------------------------------------------------
    '徳島県': [
      { maker: '日新酒類', brand: 'AWAGIN' },
    ],
    '香川県': [
      { maker: '小豆島酒造', brand: '小豆島ジン' },
    ],
    '愛媛県': [
      { maker: '媛囃子（桜うづまき酒造）', brand: '媛ジン' },
    ],
    '高知県': [
      { maker: 'マバム高知蒸留所', brand: 'MABAM GIN' },
    ],

    // -------------------------------------------------------
    // 九州・沖縄
    // -------------------------------------------------------
    '福岡県': [
      { maker: 'ニッカウヰスキー門司工場', brand: 'ニッカクラフトジン' },
      { maker: '光酒造', brand: '博多ジン' },
    ],
    '佐賀県': [
      { maker: '宗政酒造', brand: '佐賀クラフトジン' },
    ],
    '長崎県': [
      { maker: '福田酒造', brand: '長崎ジン' },
    ],
    '熊本県': [
      { maker: '高橋酒造', brand: '球磨ジン' },
    ],
    '大分県': [
      { maker: '三和酒類', brand: 'ワールドジン' },
      { maker: '藤居醸造', brand: '泰明ジン' },
    ],
    '宮崎県': [
      { maker: '尾鈴山蒸留所（黒木本店）', brand: '尾鈴山 山椒' },
      { maker: '京屋酒造', brand: '油津吟 ABURATSU GIN' },
    ],
    '鹿児島県': [
      { maker: '小正醸造', brand: 'KOMASA GIN' },
      { maker: '佐多宗二商店', brand: 'AKAYANE GIN' },
      { maker: '本坊酒造', brand: '和美人' },
      { maker: '濵田酒造', brand: '海童ジン' },
    ],
    '沖縄県': [
      { maker: 'まさひろ酒造', brand: 'まさひろオキナワジン' },
      { maker: '瑞穂酒造', brand: 'ORI-GIN 1848' },
    ],
  },

  // ============================================================
  // ウィスキー（日本全国の蒸溜所）
  // ============================================================
  'ウィスキー': {

    // -------------------------------------------------------
    // 北海道
    // -------------------------------------------------------
    '北海道': [
      { maker: 'ニッカウヰスキー余市蒸溜所', brand: '余市' },
      { maker: '堅展実業（厚岸蒸溜所）', brand: '厚岸' },
      { maker: '八海醸造（ニセコ蒸溜所）', brand: 'ohoro' },
      { maker: '紅櫻蒸溜所', brand: '紅櫻ウイスキー' },
      { maker: '札幌酒精工業', brand: 'サッポロウイスキー' },
      { maker: '利尻蒸留所', brand: '利尻' },
      { maker: '馬追蒸留所', brand: '馬追' },
      { maker: '上富良野蒸留所', brand: '十勝岳' },
    ],

    // -------------------------------------------------------
    // 東北
    // -------------------------------------------------------
    '岩手県': [
      { maker: '南部美人', brand: '南部美人ウイスキー' },
    ],
    '宮城県': [
      { maker: 'ニッカウヰスキー宮城峡蒸溜所', brand: '宮城峡' },
    ],
    '秋田県': [
      { maker: '秋田蒸溜所（ドリームリンク）', brand: 'AKITA' },
    ],
    '山形県': [
      { maker: '遊佐蒸溜所（金龍）', brand: 'YUZA' },
    ],
    '福島県': [
      { maker: '笹の川酒造（安積蒸溜所）', brand: '安積' },
    ],

    // -------------------------------------------------------
    // 関東
    // -------------------------------------------------------
    '茨城県': [
      { maker: '木内酒造（八郷蒸溜所）', brand: '日の丸ウイスキー' },
      { maker: '明利酒類', brand: '明利ウイスキー' },
    ],
    '栃木県': [
      { maker: '松井酒造店（日光蒸溜所）', brand: '日光ウイスキー' },
    ],
    '群馬県': [
      { maker: '土田酒造', brand: '土田ウイスキー' },
    ],
    '埼玉県': [
      { maker: '東亜酒造', brand: 'ゴールデンホース' },
      { maker: 'ベンチャーウイスキー（秩父蒸溜所）', brand: 'イチローズモルト' },
    ],
    '千葉県': [
      { maker: '須藤本家', brand: '房総ウイスキー' },
    ],
    '東京都': [
      { maker: '東京ウイスキー＆スピリッツ', brand: '東京ウイスキー' },
    ],

    // -------------------------------------------------------
    // 中部
    // -------------------------------------------------------
    '新潟県': [
      { maker: '新潟小規模蒸溜所（新潟亀田蒸溜所）', brand: '新潟ウイスキー' },
    ],
    '富山県': [
      { maker: '若鶴酒造（三郎丸蒸留所）', brand: '三郎丸' },
    ],
    '石川県': [
      { maker: '数馬酒造', brand: '能登ウイスキー' },
    ],
    '福井県': [
      { maker: '黒龍酒造（九頭龍蒸溜所）', brand: '九頭龍ウイスキー' },
    ],
    '山梨県': [
      { maker: 'サントリー白州蒸溜所', brand: '白州' },
      { maker: '甲斐ノ関蒸留所', brand: '甲斐ノ関' },
    ],
    '長野県': [
      { maker: '本坊酒造（マルス信州蒸溜所）', brand: '駒ヶ岳' },
      { maker: '小諸蒸留所', brand: '小諸ウイスキー' },
      { maker: '軽井沢蒸留酒製造', brand: '軽井沢ウイスキー' },
      { maker: '野沢温泉蒸留所', brand: '野沢温泉' },
    ],
    '岐阜県': [
      { maker: '飛騨高山蒸溜所', brand: '飛騨高山ウイスキー' },
    ],
    '静岡県': [
      { maker: 'ガイアフロー静岡蒸溜所', brand: '静岡' },
      { maker: 'キリンディスティラリー（富士御殿場蒸溜所）', brand: '富士' },
    ],
    '愛知県': [
      { maker: 'サントリー知多蒸溜所', brand: '知多' },
      { maker: 'クラフトリカーズ（碧南蒸留所）', brand: '碧南ウイスキー' },
    ],

    // -------------------------------------------------------
    // 近畿
    // -------------------------------------------------------
    '三重県': [
      { maker: '伊勢萬（伊勢蒸留所）', brand: '伊勢ウイスキー' },
    ],
    '滋賀県': [
      { maker: '長濱蒸溜所（長濱浪漫ビール）', brand: 'AMAHAGAN' },
    ],
    '京都府': [
      { maker: '京都蒸溜所', brand: '季の美ウイスキー' },
    ],
    '大阪府': [
      { maker: 'サントリー山崎蒸溜所', brand: '山崎' },
    ],
    '兵庫県': [
      { maker: '江井ヶ嶋酒造（ホワイトオーク蒸溜所）', brand: 'あかし' },
    ],
    '奈良県': [
      { maker: '油長酒造（大和蒸溜所）', brand: '橘花ウイスキー' },
    ],

    // -------------------------------------------------------
    // 中国
    // -------------------------------------------------------
    '鳥取県': [
      { maker: '松井酒造（倉吉蒸溜所）', brand: '倉吉' },
    ],
    '島根県': [
      { maker: '松井酒造（隠岐蒸溜所）', brand: '隠岐ウイスキー' },
    ],
    '岡山県': [
      { maker: '宮下酒造（岡山蒸溜所）', brand: '岡山ウイスキー' },
    ],
    '広島県': [
      { maker: '中国醸造（SAKURAO DISTILLERY）', brand: '戸河内' },
      { maker: 'SAKURAO DISTILLERY', brand: '桜尾' },
    ],
    '山口県': [
      { maker: '中島屋酒造場', brand: '中島屋ウイスキー' },
    ],

    // -------------------------------------------------------
    // 四国
    // -------------------------------------------------------
    '香川県': [
      { maker: '小豆島蒸溜所', brand: '小豆島ウイスキー' },
    ],
    '愛媛県': [
      { maker: '桜うづまき酒造', brand: '桜うづまきウイスキー' },
    ],
    '高知県': [
      { maker: '菊水酒造（高知）', brand: '高知ウイスキー' },
    ],

    // -------------------------------------------------------
    // 九州・沖縄
    // -------------------------------------------------------
    '福岡県': [
      { maker: '小正嘉之助蒸溜所（福岡工場）', brand: '嘉之助 福岡' },
    ],
    '長崎県': [
      { maker: '壱岐の蔵酒造', brand: '壱岐ウイスキー' },
    ],
    '熊本県': [
      { maker: '山鹿蒸溜所', brand: '山鹿' },
    ],
    '大分県': [
      { maker: '久住蒸溜所', brand: '久住ウイスキー' },
    ],
    '宮崎県': [
      { maker: '尾鈴山蒸留所（黒木本店）', brand: '尾鈴山ウイスキー' },
    ],
    '鹿児島県': [
      { maker: '本坊酒造（マルス津貫蒸溜所）', brand: 'マルス津貫' },
      { maker: '小正嘉之助蒸溜所', brand: '嘉之助' },
      { maker: '佐多宗二商店', brand: 'AKAYANE WHISKY' },
    ],
    '沖縄県': [
      { maker: 'ヘリオス酒造', brand: '暦' },
    ],
  },
};
