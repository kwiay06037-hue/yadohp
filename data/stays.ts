import type { Caution, Stay } from "./types";

/**
 * Rules shared by all three properties (source spec section 12).
 * High-value penalty / callout-fee language is intentionally omitted until
 * it can be checked against the terms of service and booking system.
 */
export const commonRules: Caution[] = [
  {
    severity: "important",
    title: {
      ja: "宿泊者以外の入館不可",
      en: "Only registered guests may enter",
      zhTW: "僅限已登記的房客入內",
    },
    body: {
      ja: "入館できるのは予約済みの宿泊者のみです。人数変更は事前のご連絡が必要です。玄関外側の防犯カメラで予約人数を確認する場合があります。",
      en: "Only booked guests may enter the property. Please contact us in advance if the number of guests changes. A security camera at the entrance may be used to confirm guest count.",
      zhTW: "僅限已預約的房客入內。若人數有變動，請事先與我們聯絡。玄關外側裝有監視攝影機，可能用於確認入住人數。",
    },
  },
  {
    severity: "important",
    title: {
      ja: "パーティー・騒音禁止",
      en: "No parties or loud noise",
      zhTW: "禁止宴會與喧鬧",
    },
    body: {
      ja: "宴会・パーティーは禁止です。21:00以降は室内・屋外とも静粛にしてください。",
      en: "Parties and gatherings are not permitted. Please keep noise to a minimum, indoors and outdoors, after 9:00 PM.",
      zhTW: "禁止舉辦宴會派對。晚間 21:00 以後，無論室內或戶外皆請保持安靜。",
    },
  },
  {
    severity: "info",
    title: {
      ja: "禁煙・土足禁止",
      en: "No smoking, no outdoor shoes indoors",
      zhTW: "禁菸、室內禁止穿鞋",
    },
    body: {
      ja: "中庭を含め館内は全館禁煙です。館内は土足禁止のため、玄関で履物を脱いでください。",
      en: "The entire property, including the courtyard, is non-smoking. Please remove your shoes at the entrance.",
      zhTW: "包含中庭在內，館內全面禁菸。館內禁止穿鞋，請於玄關脫鞋。",
    },
  },
  {
    severity: "info",
    title: {
      ja: "スーツケース・タオルの扱い",
      en: "Suitcases and towels",
      zhTW: "行李箱與毛巾的使用",
    },
    body: {
      ja: "スーツケースは床や壁を傷つけないよう持ち上げて運んでください。タオル類のお持ち帰りはご遠慮ください。",
      en: "Please lift suitcases when moving them to avoid damaging floors and walls. Towels may not be taken home.",
      zhTW: "搬運行李箱時請提起，避免刮傷地板與牆壁。毛巾類請勿攜出。",
    },
  },
  {
    severity: "important",
    title: {
      ja: "調理に関するお願い",
      en: "Cooking guidelines",
      zhTW: "烹飪相關注意事項",
    },
    body: {
      ja: "大量の油を使う料理（揚げ物、天ぷら、フライ）はご遠慮ください。焼肉、にんにく、キムチなど匂いの強い料理も禁止しています。",
      en: "Please avoid deep-frying or dishes using large amounts of oil. Strong-smelling cooking such as grilled meat, garlic, or kimchi is also not permitted.",
      zhTW: "請避免使用大量油品的料理（如油炸類）。也禁止燒烤肉類、大蒜、泡菜等氣味強烈的料理。",
    },
  },
  {
    severity: "info",
    title: {
      ja: "破損・汚損について",
      en: "Damage and excessive soiling",
      zhTW: "關於損壞與過度弄髒",
    },
    body: {
      ja: "設備・備品の故意の破損や過度な汚損は、原状回復費用を請求する場合があります。",
      en: "Intentional damage or excessive soiling of the facility or its fixtures may result in a restoration charge.",
      zhTW: "若故意損壞設備或過度弄髒，可能會請求收取回復原狀之費用。",
    },
  },
  {
    severity: "info",
    title: {
      ja: "荷物の発送・受け取りは非対応",
      en: "No parcel shipping or receiving",
      zhTW: "不提供包裹寄送與代收服務",
    },
    body: {
      ja: "荷物の発送、集荷、運送業者からの受け取りサービスは行っておりません。",
      en: "We are unable to ship, arrange pickup for, or receive parcels from courier services on your behalf.",
      zhTW: "我們無法提供包裹寄送、託運或代收快遞包裹的服務。",
    },
  },
];

export const stays: Stay[] = [
  {
    id: "kurashiki-nagaya",
    slug: "kurashiki-nagaya",
    name: { ja: "倉敷NAGAYA", en: "Kurashiki NAGAYA", zhTW: "倉敷NAGAYA" },
    nameEn: "KURASHIKI NAGAYA",
    concept: {
      ja: "倉敷をゆっくり楽しむ、一棟貸しの宿。",
      en: "A whole-house rental for savoring Kurashiki at your own pace.",
      zhTW: "悠閒享受倉敷時光的獨棟包棟民宿。",
    },
    description: {
      ja: "家族やグループで過ごせる、生活設備の整った滞在拠点。倉敷美観地区周辺で、セルフチェックインにより自由な時間に到着できます。",
      en: "A well-equipped base for families and groups, near the Kurashiki Bikan Historical Quarter, with self check-in for flexible arrival.",
      zhTW: "設備齊全，適合家庭與團體入住的據點，鄰近倉敷美觀地區，並提供自助入住服務，抵達時間更彈性。",
    },
    address: "岡山県倉敷市稲荷町1-3",
    mapUrl: "https://maps.app.goo.gl/zbanGH5QmVqSC8tj9",
    airbnbReferenceUrl: "https://www.airbnb.jp/rooms/1191933189443237221",
    bookingUrlEnvVar: "NEXT_PUBLIC_NAGAYA_BOOKING_URL",
    maxGuests: 9,
    bedrooms: null,
    bathrooms: 1,
    showers: null,
    toilets: 1,
    hasStairs: false,
    distanceToBikanMeters: null,
    distanceToStationMeters: null,
    highlights: [
      { ja: "一棟貸し", en: "Whole-house rental", zhTW: "獨棟包棟" },
      { ja: "セルフチェックイン", en: "Self check-in", zhTW: "自助入住" },
      { ja: "美観地区周辺", en: "Near the Bikan Historical Quarter", zhTW: "鄰近美觀地區" },
      { ja: "ドラム式洗濯乾燥機", en: "Drum-type washer-dryer", zhTW: "滾筒式洗脫烘衣機" },
      { ja: "食器洗い乾燥機", en: "Dishwasher-dryer", zhTW: "洗碗機" },
      { ja: "全室空気清浄機", en: "Air purifier in every room", zhTW: "全室配備空氣清淨機" },
      { ja: "Amazon Fire TV搭載プロジェクター", en: "Projector with Amazon Fire TV", zhTW: "搭載 Amazon Fire TV 的投影機" },
      { ja: "子ども連れ向け設備", en: "Family-friendly equipment", zhTW: "親子友善設備" },
    ],
    beds: [
      { type: { ja: "ダブルベッド", en: "Double bed", zhTW: "雙人床" }, count: 2, size: "140cm × 200cm" },
      { type: { ja: "シングルベッド", en: "Single bed", zhTW: "單人床" }, count: 4, size: "100cm × 200cm" },
      {
        type: { ja: "和室 敷布団", en: "Futon in the tatami room", zhTW: "和室被褥" },
        count: 0,
        size: "—",
        note: {
          ja: "大人6名以上でご利用の場合、和室にシングル敷布団をご用意します。5名以下で追加布団が必要な場合は事前にご相談ください。",
          en: "For 6 or more adults, single futon bedding is provided in the tatami room. For 5 or fewer guests needing extra bedding, please contact us in advance.",
          zhTW: "若入住成人達 6 名以上，將於和室準備單人被褥。5 名以下如需加床，請事先與我們聯繫。",
        },
      },
      {
        type: { ja: "ベビーベッド", en: "Baby crib", zhTW: "嬰兒床" },
        count: 1,
        size: "—",
        note: {
          ja: "1台、2,000円、要事前予約。",
          en: "1 available, ¥2,000, advance reservation required.",
          zhTW: "共 1 台，費用 2,000 日圓，須事先預約。",
        },
      },
    ],
    amenities: [
      { category: "disposable", label: { ja: "歯ブラシ", en: "Toothbrush", zhTW: "牙刷" } },
      { category: "disposable", label: { ja: "歯磨き粉", en: "Toothpaste", zhTW: "牙膏" } },
      { category: "disposable", label: { ja: "ヘアブラシ", en: "Hairbrush", zhTW: "梳子" } },
      { category: "disposable", label: { ja: "髭剃り", en: "Razor", zhTW: "刮鬍刀" } },
      { category: "bath", label: { ja: "シャンプー・リンス（無印良品）", en: "Shampoo & conditioner (MUJI)", zhTW: "洗髮精・潤髮乳（無印良品）" } },
      { category: "bath", label: { ja: "ボディソープ", en: "Body soap", zhTW: "沐浴乳" } },
      { category: "bath", label: { ja: "化粧水・乳液", en: "Toner & lotion", zhTW: "化妝水・乳液" } },
      { category: "bath", label: { ja: "洗顔フォーム・クレンジング", en: "Face wash & cleansing oil", zhTW: "洗面乳・卸妝油" } },
      { category: "towel", label: { ja: "バスタオル・フェイスタオル・バスマット", en: "Bath towel, face towel, bath mat", zhTW: "浴巾・面巾・浴室踏墊" } },
      { category: "kitchen", label: { ja: "キッチン", en: "Kitchen", zhTW: "廚房" } },
      { category: "device", label: { ja: "Wi-Fi", en: "Wi-Fi", zhTW: "Wi-Fi" } },
      { category: "device", label: { ja: "Amazon Fire TV搭載プロジェクター", en: "Projector with Amazon Fire TV", zhTW: "搭載 Amazon Fire TV 的投影機" } },
      { category: "other", label: { ja: "全室エアコン", en: "Air conditioning in every room", zhTW: "全室配備冷氣" } },
      { category: "other", label: { ja: "全室空気清浄機", en: "Air purifier in every room", zhTW: "全室配備空氣清淨機" } },
      { category: "other", label: { ja: "ドラム式洗濯乾燥機（洗剤・柔軟剤は無添加さらさ）", en: "Drum-type washer-dryer (additive-free detergent provided)", zhTW: "滾筒式洗脫烘衣機（提供無添加洗劑）" } },
      { category: "other", label: { ja: "食器洗い乾燥機", en: "Dishwasher-dryer", zhTW: "洗碗機" } },
    ],
    hasProjector: true,
    hasTV: false,
    laundryType: { ja: "ドラム式洗濯乾燥機", en: "Drum-type washer-dryer", zhTW: "滾筒式洗脫烘衣機" },
    kidsEquipmentAvailable: true,
    parking: {
      distanceMeters: 50,
      spaces: null,
      maxLengthMeters: 5,
      availableFrom: { ja: "宿泊日 16:00", en: "4:00 PM on check-in day", zhTW: "入住當日 16:00" },
      availableUntil: { ja: "チェックアウト日 10:00頃", en: "Around 10:00 AM on check-out day", zhTW: "退房日約 10:00" },
      notes: [
        {
          ja: "チェックアウト後は利用できません。宿前での駐停車・荷物の積み下ろしは禁止です。",
          en: "Not available after check-out. Stopping or unloading in front of the property is prohibited.",
          zhTW: "退房後恕不提供使用。禁止在民宿門前停車或裝卸行李。",
        },
        {
          ja: "川が近いため、小さなお子様連れの方はご注意ください。",
          en: "A river is nearby — please keep an eye on small children.",
          zhTW: "由於鄰近河川，攜帶幼童入住時請特別留意安全。",
        },
      ],
    },
    checkIn: "16:00",
    checkOut: "10:00",
    cleaningEntryNote: {
      ja: "16:00より前にご到着の場合も、玄関でお荷物をお預かりできます。チェックアウト後の荷物預かりはできません。",
      en: "If you arrive before 4:00 PM, we can hold your luggage at the entrance. Luggage storage after check-out is not available.",
      zhTW: "若於 16:00 前抵達，可於玄關寄放行李。退房後恕無法提供行李寄放服務。",
    },
    cautions: [],
    images: [
      { src: null, alt: { ja: "倉敷NAGAYA 外観", en: "Kurashiki NAGAYA exterior", zhTW: "倉敷NAGAYA 外觀" }, width: 1600, height: 1067, category: "exterior", priority: true },
      { src: null, alt: { ja: "倉敷NAGAYA リビング", en: "Kurashiki NAGAYA living room", zhTW: "倉敷NAGAYA 客廳" }, width: 1600, height: 1067, category: "living" },
      { src: null, alt: { ja: "倉敷NAGAYA 寝室", en: "Kurashiki NAGAYA bedroom", zhTW: "倉敷NAGAYA 臥室" }, width: 1600, height: 1067, category: "bedroom" },
      { src: null, alt: { ja: "倉敷NAGAYA キッチン", en: "Kurashiki NAGAYA kitchen", zhTW: "倉敷NAGAYA 廚房" }, width: 1600, height: 1067, category: "kitchen" },
      { src: null, alt: { ja: "倉敷NAGAYA 駐車場", en: "Kurashiki NAGAYA parking", zhTW: "倉敷NAGAYA 停車場" }, width: 1600, height: 1067, category: "parking" },
    ],
    faq: [
      {
        question: { ja: "テレビはありますか。", en: "Is there a TV?", zhTW: "有電視嗎？" },
        answer: {
          ja: "テレビはございませんが、Amazon Fire TV搭載のプロジェクターをご利用いただけます。動画配信サービスはお客様ご自身のアカウントでご利用ください。",
          en: "There is no TV, but a projector with Amazon Fire TV is available. Streaming services require your own account.",
          zhTW: "本設施沒有電視，但備有搭載 Amazon Fire TV 的投影機。串流服務請使用您自己的帳號登入。",
        },
      },
      {
        question: { ja: "駐車場はありますか。", en: "Is parking available?", zhTW: "有停車場嗎？" },
        answer: {
          ja: "宿から約50mの駐車場がございます（全長5mまで）。ご利用は宿泊日16:00からチェックアウト日10:00頃までです。",
          en: "Parking is available about 50m from the property (vehicles up to 5m). Available from 4:00 PM on check-in day until around 10:00 AM on check-out day.",
          zhTW: "距民宿約 50 公尺處設有停車場（車長限 5 公尺以內）。使用時間為入住當日 16:00 至退房日約 10:00。",
        },
      },
    ],
    seo: {
      title: {
        ja: "倉敷NAGAYA｜倉敷美観地区近くの一棟貸し宿",
        en: "Kurashiki NAGAYA | Whole-house rental near the Bikan Historical Quarter",
        zhTW: "倉敷NAGAYA｜鄰近倉敷美觀地區的獨棟包棟民宿",
      },
      description: {
        ja: "倉敷美観地区周辺、家族やグループに適した一棟貸しの宿「倉敷NAGAYA」。ドラム式洗濯乾燥機や食器洗い乾燥機など生活設備が充実しています。",
        en: "Kurashiki NAGAYA is a whole-house rental near the Bikan Historical Quarter, suited to families and groups, with a washer-dryer and dishwasher.",
        zhTW: "倉敷NAGAYA 是鄰近倉敷美觀地區、適合家庭與團體的獨棟包棟民宿，備有洗脫烘衣機與洗碗機等生活設備。",
      },
    },
    suitableFor: ["smallChildren", "largeGroup", "twoCars"],
  },
  {
    id: "shirakabe",
    slug: "shirakabe",
    name: { ja: "SHIRAKABEの宿", en: "SHIRAKABE no Yado", zhTW: "SHIRAKABE の宿" },
    nameEn: "SHIRAKABE no Yado",
    concept: {
      ja: "白壁と木の落ち着きを感じる、倉敷の一棟貸し。",
      en: "A whole-house rental in Kurashiki, calmed by white walls and wood.",
      zhTW: "感受白牆與木質沉靜氛圍的倉敷獨棟包棟民宿。",
    },
    description: {
      ja: "古い建物の趣、琴や骨董品などの和の要素と、現代的な設備を両立した宿です。",
      en: "A stay that balances the charm of an older building — with a koto and antiques — against modern comforts.",
      zhTW: "兼具古建築風情、古琴與骨董等和風元素，並融合現代化設備的住宿空間。",
    },
    address: "岡山県倉敷市川西町7-45",
    mapUrl: "https://maps.app.goo.gl/1kLJ7RYnnGPhq4xJ9",
    airbnbReferenceUrl: "https://www.airbnb.jp/rooms/1660632158571123647",
    bookingUrlEnvVar: "NEXT_PUBLIC_SHIRAKABE_BOOKING_URL",
    maxGuests: 12,
    bedrooms: null,
    bathrooms: 1,
    showers: 1,
    toilets: 2,
    hasStairs: true,
    stairsCaution: {
      severity: "important",
      title: {
        ja: "階段についてのご案内",
        en: "About the stairs",
        zhTW: "關於樓梯的說明",
      },
      body: {
        ja: "この施設には狭い階段があります。手すりと滑り止めを備えていますが、小さなお子様、ご高齢の方、階段に不安のある方はご注意ください。階段にご不安がある場合は、倉敷NAGAYAも選択肢としてご検討いただけます。",
        en: "This property has a narrow staircase. It is fitted with a handrail and non-slip strips, but please take care if traveling with small children, older guests, or anyone unsteady on stairs. Kurashiki NAGAYA is a stair-free alternative if this is a concern.",
        zhTW: "本設施設有較為狹窄的樓梯，雖裝有扶手與防滑條，但若同行有幼童、年長者或對樓梯感到不安的旅客，請特別留意。若您對樓梯有疑慮，倉敷NAGAYA 也是一個無樓梯的選擇。",
      },
    },
    distanceToBikanMeters: null,
    distanceToStationMeters: 550,
    highlights: [
      { ja: "倉敷駅から約550m", en: "About 550m from Kurashiki Station", zhTW: "距倉敷車站約 550 公尺" },
      { ja: "一棟貸し", en: "Whole-house rental", zhTW: "獨棟包棟" },
      { ja: "セルフチェックイン", en: "Self check-in", zhTW: "自助入住" },
      { ja: "専用駐車場2台", en: "Private parking for 2 cars", zhTW: "專用停車位 2 個" },
      { ja: "XGIMIプロジェクター", en: "XGIMI projector", zhTW: "XGIMI 投影機" },
      { ja: "ドラム式洗濯乾燥機", en: "Drum-type washer-dryer", zhTW: "滾筒式洗脫烘衣機" },
      { ja: "琴・骨董品のある空間", en: "Space featuring a koto and antiques", zhTW: "陳設古琴與骨董的空間" },
    ],
    beds: [
      { type: { ja: "クイーンベッド", en: "Queen bed", zhTW: "特大雙人床" }, count: 2, size: "170cm × 210cm" },
      { type: { ja: "ダブルベッド", en: "Double bed", zhTW: "雙人床" }, count: 2, size: "140cm × 210cm" },
      { type: { ja: "セミダブルベッド", en: "Semi-double bed", zhTW: "小型雙人床" }, count: 1, size: "120cm × 210cm" },
      { type: { ja: "クイーンソファーベッド", en: "Queen sofa bed", zhTW: "特大雙人沙發床" }, count: 1, size: "170cm × 211cm" },
      {
        type: { ja: "シングル敷布団", en: "Single futon", zhTW: "單人被褥" },
        count: 2,
        size: "100cm × 210cm",
        note: {
          ja: "大人8名以上でご利用の場合、敷布団をご用意します。",
          en: "For 8 or more adults, futon bedding is provided.",
          zhTW: "若入住成人達 8 名以上，將準備被褥。",
        },
      },
    ],
    amenities: [
      { category: "device", label: { ja: "Wi-Fi", en: "Wi-Fi", zhTW: "Wi-Fi" } },
      { category: "device", label: { ja: "XGIMIプロジェクター（大画面投影）", en: "XGIMI projector (large-screen projection)", zhTW: "XGIMI 投影機（大螢幕投影）" } },
      { category: "device", label: { ja: "Harman/Kardon スピーカー", en: "Harman/Kardon speaker", zhTW: "Harman/Kardon 喇叭" } },
      { category: "device", label: { ja: "携帯充電ケーブル", en: "Phone charging cables", zhTW: "手機充電線" } },
      { category: "bath", label: { ja: "バスタブ付き浴室", en: "Bathroom with tub", zhTW: "附浴缸的浴室" } },
      { category: "bath", label: { ja: "シャワーブース", en: "Shower booth", zhTW: "淋浴間" } },
      { category: "other", label: { ja: "洋式トイレ 2つ", en: "2 Western-style toilets", zhTW: "西式馬桶 2 間" } },
      { category: "other", label: { ja: "蛇口2つの洗面台", en: "Washbasin with 2 taps", zhTW: "雙水龍頭洗手台" } },
      { category: "other", label: { ja: "ドラム式洗濯乾燥機", en: "Drum-type washer-dryer", zhTW: "滾筒式洗脫烘衣機" } },
      { category: "other", label: { ja: "空気清浄機", en: "Air purifier", zhTW: "空氣清淨機" } },
    ],
    hasProjector: true,
    hasTV: false,
    laundryType: { ja: "ドラム式洗濯乾燥機", en: "Drum-type washer-dryer", zhTW: "滾筒式洗脫烘衣機" },
    kidsEquipmentAvailable: false,
    parking: {
      distanceMeters: 30,
      spaces: 2,
      maxLengthMeters: null,
      availableFrom: { ja: "チェックイン時", en: "From check-in", zhTW: "入住起" },
      availableUntil: { ja: "チェックアウト時", en: "Until check-out", zhTW: "退房前" },
      notes: [
        {
          ja: "専用区画2台分。宿の隣の駐車場は使用できません。宿前での荷物の積み下ろしは不可です。",
          en: "2 dedicated spaces. The parking lot next to the property is not available for guest use. Unloading in front of the property is not permitted.",
          zhTW: "設有 2 個專用車位。民宿旁的停車場恕不開放使用。禁止在民宿門前卸下行李。",
        },
      ],
    },
    checkIn: "16:00",
    checkOut: "10:00",
    cleaningEntryNote: {
      ja: "16:00より前にご到着の場合も、玄関でお荷物をお預かりできます。10:15頃から清掃スタッフが入室するため、チェックアウト後の荷物預かりはできません。",
      en: "If you arrive before 4:00 PM, we can hold your luggage at the entrance. Cleaning staff enter around 10:15 AM, so luggage storage after check-out is not available.",
      zhTW: "若於 16:00 前抵達，可於玄關寄放行李。清潔人員約於 10:15 進入打掃，故退房後恕無法提供行李寄放服務。",
    },
    cautions: [],
    images: [
      { src: null, alt: { ja: "SHIRAKABEの宿 外観", en: "SHIRAKABE no Yado exterior", zhTW: "SHIRAKABE の宿 外觀" }, width: 1600, height: 1067, category: "exterior", priority: true },
      { src: null, alt: { ja: "SHIRAKABEの宿 リビング", en: "SHIRAKABE no Yado living room", zhTW: "SHIRAKABE の宿 客廳" }, width: 1600, height: 1067, category: "living" },
      { src: null, alt: { ja: "SHIRAKABEの宿 階段", en: "SHIRAKABE no Yado staircase", zhTW: "SHIRAKABE の宿 樓梯" }, width: 1600, height: 1067, category: "stairs" },
      { src: null, alt: { ja: "SHIRAKABEの宿 浴室", en: "SHIRAKABE no Yado bathroom", zhTW: "SHIRAKABE の宿 浴室" }, width: 1600, height: 1067, category: "bathroom" },
      { src: null, alt: { ja: "SHIRAKABEの宿 駐車場", en: "SHIRAKABE no Yado parking", zhTW: "SHIRAKABE の宿 停車場" }, width: 1600, height: 1067, category: "parking" },
    ],
    faq: [
      {
        question: { ja: "階段はありますか。", en: "Are there stairs?", zhTW: "有樓梯嗎？" },
        answer: {
          ja: "はい、狭い階段がございます。手すりと滑り止めを備えていますが、小さなお子様やご高齢の方はご注意ください。階段にご不安がある場合は倉敷NAGAYAもご検討ください。",
          en: "Yes, there is a narrow staircase with a handrail and non-slip strips. Please take care with small children or older guests. Kurashiki NAGAYA is stair-free if this is a concern.",
          zhTW: "是的，設有較為狹窄的樓梯，備有扶手與防滑條，但攜帶幼童或年長者同行時請多加留意。若有疑慮，也可考慮選擇倉敷NAGAYA。",
        },
      },
      {
        question: { ja: "Wi-Fiはありますか。", en: "Is Wi-Fi available?", zhTW: "有 Wi-Fi 嗎？" },
        answer: {
          ja: "はい、Wi-Fiをご利用いただけます。",
          en: "Yes, Wi-Fi is available.",
          zhTW: "有的，可以使用 Wi-Fi。",
        },
      },
    ],
    seo: {
      title: {
        ja: "SHIRAKABEの宿｜倉敷駅・美観地区近くの一棟貸し",
        en: "SHIRAKABE no Yado | Whole-house rental near Kurashiki Station & the Bikan Quarter",
        zhTW: "SHIRAKABE の宿｜鄰近倉敷車站・美觀地區的獨棟包棟民宿",
      },
      description: {
        ja: "白壁と木の落ち着き、琴や骨董品のある倉敷の一棟貸し宿「SHIRAKABEの宿」。倉敷駅から約550m、専用駐車場2台完備。",
        en: "SHIRAKABE no Yado blends white walls, wood, and antiques. About 550m from Kurashiki Station, with 2 dedicated parking spaces.",
        zhTW: "SHIRAKABE の宿融合白牆木質的沉靜氛圍與古琴骨董，距倉敷車站約 550 公尺，備有 2 個專用停車位。",
      },
    },
    suitableFor: ["largeGroup", "twoCars", "projector"],
  },
  {
    id: "hidamari",
    slug: "hidamari",
    name: { ja: "民宿HIDAMARI", en: "HIDAMARI", zhTW: "民宿HIDAMARI" },
    nameEn: "HIDAMARI",
    concept: {
      ja: "暮らすように旅する、倉敷の一棟貸し。",
      en: "A whole-house rental in Kurashiki for traveling as if you lived there.",
      zhTW: "如生活般旅行的倉敷獨棟包棟民宿。",
    },
    description: {
      ja: "家族や大切な人と、自分たちのペースで過ごせる温かい宿です。",
      en: "A warm stay where you can spend time with family or loved ones at your own pace.",
      zhTW: "與家人或重要的人，以自己步調度過時光的溫馨住宿空間。",
    },
    address: "岡山県倉敷市稲荷町7-30",
    // TODO: Google Maps URL for HIDAMARI not yet supplied — confirm before launch.
    mapUrl: null,
    airbnbReferenceUrl: "https://www.airbnb.jp/rooms/1364452941170748365",
    bookingUrlEnvVar: "NEXT_PUBLIC_HIDAMARI_BOOKING_URL",
    maxGuests: 5,
    bedrooms: null,
    bathrooms: 1,
    showers: null,
    toilets: 1,
    hasStairs: false,
    distanceToBikanMeters: 330,
    distanceToBikanNote: {
      ja: "美観地区の入口まで徒歩約5分（約330m）。距離・徒歩時間は公開前に現地照合します。",
      en: "About a 5-minute walk (approx. 330m) to the entrance of the Bikan Historical Quarter. Distances will be verified on site before launch.",
      zhTW: "步行至美觀地區入口約 5 分鐘（約 330 公尺）。距離與步行時間將於上線前實地核對。",
    },
    distanceToStationMeters: 800,
    distanceToStationNote: {
      ja: "倉敷駅から徒歩約800m。",
      en: "About an 800m walk from Kurashiki Station.",
      zhTW: "距倉敷車站步行約 800 公尺。",
    },
    highlights: [
      { ja: "美観地区の入口まで徒歩約5分", en: "About a 5-minute walk to the Bikan Historical Quarter", zhTW: "步行至美觀地區入口約 5 分鐘" },
      { ja: "スーパー併設ドラッグストアまで徒歩約3分", en: "About a 3-minute walk to a supermarket/drugstore", zhTW: "步行至超市藥妝店約 3 分鐘" },
      { ja: "一棟貸し", en: "Whole-house rental", zhTW: "獨棟包棟" },
      { ja: "セルフチェックイン", en: "Self check-in", zhTW: "自助入住" },
      { ja: "家族連れへの配慮", en: "Family-friendly consideration", zhTW: "貼心的親子友善設計" },
      { ja: "プロジェクター・テレビ", en: "Projector & TV", zhTW: "投影機・電視" },
      { ja: "無印良品アメニティ", en: "MUJI amenities", zhTW: "無印良品備品" },
    ],
    beds: [
      { type: { ja: "ダブルベッド", en: "Double bed", zhTW: "雙人床" }, count: 2, size: "140cm × 200cm" },
      { type: { ja: "セミダブルベッド", en: "Semi-double bed", zhTW: "小型雙人床" }, count: 1, size: "120cm × 200cm" },
      {
        type: { ja: "ソファーベッド（クイーンサイズ・1階）", en: "Sofa bed (queen size, 1st floor)", zhTW: "沙發床（特大雙人尺寸・1樓）" },
        count: 1,
        size: "184cm × 210cm",
        note: {
          ja: "大人4名以上のご予約時に、1階にクイーンサイズのソファーベッドをご用意します。",
          en: "For 4 or more adults, a queen-size sofa bed is provided on the 1st floor.",
          zhTW: "若入住成人達 4 名以上，將於 1 樓準備特大雙人尺寸的沙發床。",
        },
      },
    ],
    amenities: [
      { category: "device", label: { ja: "Wi-Fi", en: "Wi-Fi", zhTW: "Wi-Fi" } },
      { category: "device", label: { ja: "2階プロジェクター", en: "Projector (2nd floor)", zhTW: "2 樓投影機" } },
      { category: "device", label: { ja: "1階テレビ", en: "TV (1st floor)", zhTW: "1 樓電視" } },
      { category: "kitchen", label: { ja: "冷蔵冷凍庫", en: "Refrigerator/freezer", zhTW: "冰箱冷凍庫" } },
      { category: "other", label: { ja: "ドライヤー", en: "Hair dryer", zhTW: "吹風機" } },
      { category: "other", label: { ja: "ドラム式洗濯機（洗剤・柔軟剤は無添加さらさ）", en: "Drum-type washer (additive-free detergent provided)", zhTW: "滾筒式洗衣機（提供無添加洗劑）" } },
      { category: "bath", label: { ja: "無印良品アメニティ", en: "MUJI amenities", zhTW: "無印良品備品" } },
    ],
    hasProjector: true,
    hasTV: true,
    laundryType: { ja: "ドラム式洗濯機", en: "Drum-type washer", zhTW: "滾筒式洗衣機" },
    kidsEquipmentAvailable: false,
    parking: {
      distanceMeters: 60,
      spaces: null,
      maxLengthMeters: 5,
      availableFrom: { ja: "宿泊日 16:00", en: "4:00 PM on check-in day", zhTW: "入住當日 16:00" },
      availableUntil: { ja: "翌日 10:00", en: "10:00 AM the following day", zhTW: "隔日 10:00" },
      notes: [
        {
          ja: "手前から2番目の区画、全長5mまで。宿入口付近の道路は狭いため、専用駐車場から徒歩でお越しください。",
          en: "The second space from the front, for vehicles up to 5m. The road near the entrance is narrow — please walk from the parking area.",
          zhTW: "為由外側算起第 2 個車位，車長限 5 公尺以內。民宿入口附近道路較窄，請由停車場步行前往。",
        },
        {
          ja: "宿の入口付近や正面駐車場での駐車・停車・荷物の積み下ろしは禁止です。",
          en: "Parking, stopping, or unloading near the entrance or the front parking area is prohibited.",
          zhTW: "禁止在民宿入口附近或正面停車場停車、暫停或裝卸行李。",
        },
        {
          ja: "川が近いため、小さなお子様連れの方はご注意ください。",
          en: "A river is nearby — please keep an eye on small children.",
          zhTW: "由於鄰近河川，攜帶幼童入住時請特別留意安全。",
        },
      ],
    },
    checkIn: "16:00",
    checkOut: "10:00",
    cleaningEntryNote: {
      ja: "16:00より前にご到着の場合も、玄関でお荷物をお預かりできます。10:15頃から清掃スタッフが入室するため、チェックアウト後の荷物預かりはできません。配送業者からの荷物受け取りや、荷物の発送・集荷サービスも行っておりません。",
      en: "If you arrive before 4:00 PM, we can hold your luggage at the entrance. Cleaning staff enter around 10:15 AM, so luggage storage after check-out is not available. Courier receiving and parcel shipping/pickup are also not available.",
      zhTW: "若於 16:00 前抵達，可於玄關寄放行李。清潔人員約於 10:15 進入打掃，故退房後恕無法提供行李寄放服務，亦不提供代收快遞或包裹寄送服務。",
    },
    cautions: [
      {
        severity: "important",
        title: {
          ja: "住宅街での過ごし方",
          en: "Being a good neighbor",
          zhTW: "住宅區的相處禮儀",
        },
        body: {
          ja: "宿の隣には住民が居住しています。宴会・パーティーや騒がしくなる利用は禁止です。21:00以降は室内・屋外とも静粛にしてください。",
          en: "Residents live next door to this property. Parties and noisy use are not permitted. Please keep noise to a minimum, indoors and outdoors, after 9:00 PM.",
          zhTW: "民宿隔壁即為居民住家，禁止舉辦宴會派對或發出喧鬧聲響。晚間 21:00 以後，無論室內或戶外皆請保持安靜。",
        },
      },
    ],
    images: [
      { src: null, alt: { ja: "民宿HIDAMARI 外観", en: "HIDAMARI exterior", zhTW: "民宿HIDAMARI 外觀" }, width: 1600, height: 1067, category: "exterior", priority: true },
      { src: null, alt: { ja: "民宿HIDAMARI リビング", en: "HIDAMARI living room", zhTW: "民宿HIDAMARI 客廳" }, width: 1600, height: 1067, category: "living" },
      { src: null, alt: { ja: "民宿HIDAMARI 寝室", en: "HIDAMARI bedroom", zhTW: "民宿HIDAMARI 臥室" }, width: 1600, height: 1067, category: "bedroom" },
      { src: null, alt: { ja: "民宿HIDAMARI キッチン", en: "HIDAMARI kitchen", zhTW: "民宿HIDAMARI 廚房" }, width: 1600, height: 1067, category: "kitchen" },
      { src: null, alt: { ja: "民宿HIDAMARI 駐車場", en: "HIDAMARI parking", zhTW: "民宿HIDAMARI 停車場" }, width: 1600, height: 1067, category: "parking" },
    ],
    faq: [
      {
        question: { ja: "宅配便を送れますか。", en: "Can I ship a parcel from here?", zhTW: "可以在此寄送包裹嗎？" },
        answer: {
          ja: "荷物の発送・集荷、運送業者からの受け取りサービスは行っておりません。",
          en: "We are unable to ship, arrange pickup for, or receive parcels from courier services.",
          zhTW: "我们無法提供包裹寄送、託運或代收快遞包裹的服務。",
        },
      },
      {
        question: { ja: "美観地区までの距離は？", en: "How far is the Bikan Historical Quarter?", zhTW: "距離美觀地區有多遠？" },
        answer: {
          ja: "美観地区の入口まで徒歩約5分（約330m）です。",
          en: "About a 5-minute walk (approx. 330m) to the entrance of the Bikan Historical Quarter.",
          zhTW: "步行至美觀地區入口約 5 分鐘（約 330 公尺）。",
        },
      },
    ],
    seo: {
      title: {
        ja: "民宿HIDAMARI｜倉敷美観地区徒歩約5分の一棟貸し",
        en: "HIDAMARI | Whole-house rental about a 5-minute walk from the Bikan Quarter",
        zhTW: "民宿HIDAMARI｜距倉敷美觀地區徒步約 5 分鐘的獨棟包棟民宿",
      },
      description: {
        ja: "倉敷美観地区の入口まで徒歩約5分、暮らすように旅する一棟貸し宿「民宿HIDAMARI」。家族連れへの配慮が行き届いた住宅街の宿です。",
        en: "HIDAMARI is a whole-house rental about a 5-minute walk from the Bikan Historical Quarter, in a residential area with family-friendly touches.",
        zhTW: "民宿HIDAMARI 距倉敷美觀地區入口徒步約 5 分鐘，位於住宅區內，是一間貼心照顧親子旅客的獨棟包棟民宿。",
      },
    },
    suitableFor: ["smallChildren", "bikanProximity", "longStay"],
  },
];

export function getStayBySlug(slug: string): Stay | undefined {
  return stays.find((stay) => stay.slug === slug);
}
