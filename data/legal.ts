import type { LocalizedText } from "./types";

export type LegalSection = {
  heading: LocalizedText;
  body: LocalizedText[];
};

const TODO_NOTE: LocalizedText = {
  ja: "【TODO】現時点では未確定のため、事実を創作せず公開前に運営者が確定してください。",
  en: "[TODO] Not yet finalized — the operator must confirm this before launch rather than inventing a value.",
  zhTW: "【TODO】目前尚未確定，請勿自行創造內容，請於上線前由經營者確認後補齊。",
};

export const termsSections: LegalSection[] = [
  {
    heading: { ja: "第1条（適用）", en: "Article 1 (Scope)", zhTW: "第一條（適用範圍）" },
    body: [
      {
        ja: "本規約は、Kurashiki Stay Collection（以下「当サイト」）が提供する倉敷NAGAYA、SHIRAKABEの宿、民宿HIDAMARI（以下「本施設」）の公式ウェブサイトの利用条件を定めるものです。",
        en: "These Terms set out the conditions for using the official Kurashiki Stay Collection website for Kurashiki NAGAYA, SHIRAKABE no Yado, and HIDAMARI (the “Properties”).",
        zhTW: "本條款規範使用 Kurashiki Stay Collection 官方網站（介紹倉敷NAGAYA、SHIRAKABEの宿、民宿HIDAMARI，以下稱「本設施」）之相關條件。",
      },
    ],
  },
  {
    heading: { ja: "第2条（予約）", en: "Article 2 (Reservations)", zhTW: "第二條（預約）" },
    body: [
      {
        ja: "ご予約は当サイトに掲載する予約導線、または予約プラットフォームを通じて行うものとします。予約確定後の内容は、各予約プラットフォームの規約にも従います。",
        en: "Reservations are made through the booking links on this site or a booking platform. Confirmed reservations are also governed by the terms of the relevant booking platform.",
        zhTW: "預約請透過本網站刊登之預約連結或訂房平台進行。預約成立後之內容，亦適用各訂房平台之相關條款。",
      },
    ],
  },
  {
    heading: {
      ja: "第3条（利用ルール）",
      en: "Article 3 (House rules)",
      zhTW: "第三條（使用規則）",
    },
    body: [
      {
        ja: "宿泊者は、チェックイン・チェックアウト時刻、宴会・パーティーの禁止、21:00以降の静粛、禁煙、駐車場の利用条件など、各施設ページおよびFAQに掲載する利用ルールを遵守するものとします。",
        en: "Guests must follow the house rules published on each property's page and the FAQ, including check-in/check-out times, the prohibition on parties, quiet hours after 9:00 PM, no smoking, and parking conditions.",
        zhTW: "房客應遵守各設施頁面及常見問題所刊載之使用規則，包括入住・退房時間、禁止宴會派對、21:00 以後保持安靜、禁菸及停車場使用條件等。",
      },
    ],
  },
  {
    heading: {
      ja: "第4条（損害賠償）",
      en: "Article 4 (Damages)",
      zhTW: "第四條（損害賠償）",
    },
    body: [
      {
        ja: "宿泊者の故意または過失により設備・備品を破損、または過度に汚損した場合、原状回復に要する費用を請求する場合があります。",
        en: "If a guest intentionally or negligently damages or excessively soils facilities or fixtures, the operator may charge the cost of restoration.",
        zhTW: "若房客因故意或過失損壞設備、備品或過度弄髒，經營者可能請求收取回復原狀所需之費用。",
      },
      TODO_NOTE,
    ],
  },
  {
    heading: {
      ja: "第5条（キャンセルポリシー）",
      en: "Article 5 (Cancellation policy)",
      zhTW: "第五條（取消政策）",
    },
    body: [
      {
        ja: "チェックイン日の7日前まではキャンセル料はかかりません。チェックイン7日前を過ぎてのキャンセルは、宿泊料金の100%（全額）を頂戴します。",
        en: "Cancellations are free of charge up to 7 days before check-in. Cancellations made after that point are charged 100% (the full amount) of the stay's rate.",
        zhTW: "入住日 7 天前皆可免費取消，恕不收取取消費用。超過此期限取消者，將收取住宿費用全額（100%）之取消費用。",
      },
      {
        ja: "予約プラットフォーム経由でのご予約は、そのプラットフォームのキャンセルポリシーが適用される場合があります。予約時にあわせてご確認ください。",
        en: "Reservations made through a booking platform may instead be governed by that platform's cancellation policy. Please check this at the time of booking.",
        zhTW: "透過訂房平台預約時，該平台之取消政策可能優先適用，請於預約時一併確認。",
      },
    ],
  },
  {
    heading: {
      ja: "第6条（免責事項）",
      en: "Article 6 (Disclaimer)",
      zhTW: "第六條（免責事項）",
    },
    body: [
      {
        ja: "当サイトに掲載する情報は、公開時点の情報です。営業時間、料金、施設内容等は予告なく変更される場合があります。",
        en: "Information on this site reflects the time of publication. Hours, rates, and facility details may change without notice.",
        zhTW: "本網站刊載之資訊為公開當下之內容，營業時間、價格及設施內容等可能於未事先通知的情況下變更。",
      },
    ],
  },
  {
    heading: {
      ja: "第7条（準拠法・管轄）",
      en: "Article 7 (Governing law & jurisdiction)",
      zhTW: "第七條（準據法與管轄權）",
    },
    body: [
      {
        ja: "本規約は日本法に準拠します。本規約に関して紛争が生じた場合、運営者の所在地を管轄する裁判所を第一審の専属的合意管轄とします。",
        en: "These Terms are governed by the laws of Japan. Any disputes will be subject to the exclusive jurisdiction of the court having jurisdiction over the operator's location as the court of first instance.",
        zhTW: "本條款依日本法律解釋適用。若因本條款產生爭議，以經營者所在地具管轄權之法院為第一審專屬管轄法院。",
      },
      TODO_NOTE,
    ],
  },
];

export const tokushohoSections: LegalSection[] = [
  {
    heading: {
      ja: "特定商取引法に基づく表記（テンプレート）",
      en: "Commercial Transactions Act Notice (template)",
      zhTW: "特定商業交易法相關標示（範本）",
    },
    body: [
      {
        ja: "以下は日本の特定商取引法に基づく表記のテンプレートです。未確定の項目は事実を創作せず、公開前に運営者情報で補ってください。",
        en: "The following is a template notice required under Japan's Act on Specified Commercial Transactions. Unconfirmed fields must be completed with real operator information before launch, not invented.",
        zhTW: "以下為依據日本《特定商業交易法》所需標示之範本。尚未確認之項目請勿自行創造內容，須於上線前由經營者補齊正確資訊。",
      },
    ],
  },
  {
    heading: { ja: "販売事業者", en: "Business operator", zhTW: "營業者" },
    body: [{ ja: "YUICHIRO KIKKAWA（詳細情報は準備中）", en: "YUICHIRO KIKKAWA (details pending)", zhTW: "YUICHIRO KIKKAWA（詳細資訊準備中）" }],
  },
  {
    heading: { ja: "所在地", en: "Address", zhTW: "地址" },
    body: [
      {
        ja: "個人で運営しているため、所在地は本ページでは公開しておりません。ご予約が確定されたお客様には、チェックイン前のご案内にて別途お知らせします。",
        en: "As this is operated as an individual business, the address is not published on this page. Guests with a confirmed reservation will receive it separately in pre-check-in guidance.",
        zhTW: "由於本業務為個人經營，本頁面不公開所在地地址。已完成預約之房客，將於入住前的說明中另行告知。",
      },
      {
        ja: "特定商取引法上、所在地を非公開とする場合は、請求があった際に遅滞なく開示できる体制が必要です。本方針がこの要件を満たしているか、公開前に専門家にご確認ください。",
        en: "Under the Specified Commercial Transactions Act, withholding the address from public view requires being able to disclose it promptly upon request. Please confirm with a qualified professional before launch that this policy satisfies that requirement.",
        zhTW: "依《特定商業交易法》規定，若選擇不公開所在地，須具備於消費者請求時能迅速提供之機制。請於上線前洽詢專業人士，確認此做法是否符合相關規定。",
      },
    ],
  },
  { heading: { ja: "電話番号", en: "Phone number", zhTW: "電話號碼" }, body: [TODO_NOTE] },
  { heading: { ja: "運営責任者", en: "Representative", zhTW: "負責人" }, body: [TODO_NOTE] },
  {
    heading: { ja: "販売価格", en: "Prices", zhTW: "價格" },
    body: [
      {
        ja: "各予約プラットフォームまたは予約ページの表示価格によります。",
        en: "As shown on each booking platform or booking page.",
        zhTW: "以各訂房平台或預約頁面上顯示之價格為準。",
      },
    ],
  },
  { heading: { ja: "お支払い方法", en: "Payment methods", zhTW: "付款方式" }, body: [TODO_NOTE] },
  {
    heading: { ja: "キャンセル規定", en: "Cancellation terms", zhTW: "取消規定" },
    body: [
      {
        ja: "チェックイン日の7日前まではキャンセル料はかかりません。チェックイン7日前を過ぎてのキャンセルは、宿泊料金の100%（全額）を頂戴します。",
        en: "Cancellations are free of charge up to 7 days before check-in. Cancellations made after that point are charged 100% (the full amount) of the stay's rate.",
        zhTW: "入住日 7 天前皆可免費取消，恕不收取取消費用。超過此期限取消者，將收取住宿費用全額（100%）之取消費用。",
      },
    ],
  },
];

export const privacySections: LegalSection[] = [
  {
    heading: {
      ja: "取得する情報",
      en: "Information we collect",
      zhTW: "蒐集之資訊",
    },
    body: [
      {
        ja: "お問い合わせフォームでは、氏名、メールアドレス、希望施設、宿泊予定日、宿泊人数、問い合わせ種別、問い合わせ内容をお預かりします。",
        en: "The contact form collects your name, email address, preferred property, planned check-in date, number of guests, inquiry type, and message.",
        zhTW: "聯絡表單將蒐集您的姓名、電子郵件地址、希望入住設施、預計入住日期、入住人數、諮詢類別及諮詢內容。",
      },
    ],
  },
  {
    heading: { ja: "利用目的", en: "Purpose of use", zhTW: "使用目的" },
    body: [
      {
        ja: "お問い合わせへの回答、予約に関するご案内のために利用します。目的外での利用は行いません。",
        en: "We use this information to respond to inquiries and provide booking-related guidance. We do not use it for any other purpose.",
        zhTW: "僅用於回覆諮詢及提供預約相關說明，不會用於上述目的以外之用途。",
      },
    ],
  },
  {
    heading: { ja: "第三者提供", en: "Disclosure to third parties", zhTW: "提供第三方" },
    body: [
      {
        ja: "法令に基づく場合を除き、ご本人の同意なく第三者に提供することはありません。",
        en: "We do not share personal information with third parties without consent, except where required by law.",
        zhTW: "除法令另有規定外，未經本人同意不會提供予第三方。",
      },
    ],
  },
  {
    heading: { ja: "保存期間", en: "Retention period", zhTW: "保存期間" },
    body: [TODO_NOTE],
  },
  {
    heading: {
      ja: "Cookieについて",
      en: "About cookies",
      zhTW: "關於 Cookie",
    },
    body: [
      {
        ja: "本サイトは、現時点でアクセス解析・広告配信を目的としたCookieを使用していません。今後導入する場合は、本ページを更新し、必要に応じて同意取得の仕組みを追加します。",
        en: "This site does not currently use cookies for analytics or advertising. If that changes, this page will be updated and a consent mechanism will be added as needed.",
        zhTW: "本網站目前未使用任何用於流量分析或廣告投放之 Cookie。日後如有導入相關功能，將更新本頁面並視需要新增同意機制。",
      },
    ],
  },
  {
    heading: {
      ja: "宿泊者名簿・パスポート情報の取り扱い",
      en: "Handling of guest registers & passport information",
      zhTW: "住宿者名冊・護照資訊之處理",
    },
    body: [
      {
        ja: "旅館業法に基づく宿泊者名簿の記入や、必要に応じたパスポート情報の確認は、公開ウェブサイトの問い合わせフォームとは別の、予約者限定の非公開の仕組みで行います。利用目的、保存期間、閲覧権限、委託先、削除方法、お問い合わせ先は、当該非公開の案内において別途明示します。",
        en: "Guest register entries required under the Hotel Business Act, and any necessary passport checks, are handled through a separate, private mechanism limited to confirmed guests — not the public contact form. Purpose of use, retention period, access rights, subcontractors, deletion method, and contact details are disclosed separately in that private guidance.",
        zhTW: "依《旅館業法》所需之住宿者名冊登記，以及視情況所需之護照資訊確認，將透過與公開網站聯絡表單分離、僅限已預約房客使用之非公開機制辦理。使用目的、保存期間、閱覽權限、委外對象、刪除方式及聯絡窗口，將於該非公開說明中另行載明。",
      },
    ],
  },
  {
    heading: {
      ja: "開示・訂正・削除のご請求",
      en: "Requests to disclose, correct, or delete",
      zhTW: "請求揭露・更正・刪除",
    },
    body: [
      {
        ja: "ご自身の個人情報の開示・訂正・削除をご希望の場合は、お問い合わせフォームよりご連絡ください。",
        en: "To request disclosure, correction, or deletion of your personal information, please contact us using the contact form.",
        zhTW: "如您希望申請揭露、更正或刪除您的個人資料，請透過聯絡表單與我們聯繫。",
      },
    ],
  },
];
