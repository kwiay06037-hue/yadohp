import type { LocalizedText } from "./types";

export type FaqItem = {
  id: string;
  question: LocalizedText;
  answer: LocalizedText;
};

export const commonFaq: FaqItem[] = [
  {
    id: "check-in-time",
    question: { ja: "チェックインは何時からですか。", en: "What time is check-in?", zhTW: "幾點可以入住？" },
    answer: {
      ja: "チェックインは16:00以降です。それより前は客室への入室・滞在はできません。",
      en: "Check-in is from 4:00 PM. Entry or staying in the room before that time is not possible.",
      zhTW: "入住時間為 16:00 起，之前恕無法進入或停留於房內。",
    },
  },
  {
    id: "check-out-time",
    question: { ja: "チェックアウトは何時ですか。", en: "What time is check-out?", zhTW: "幾點退房？" },
    answer: {
      ja: "チェックアウトは10:00厳守です。10:15頃から清掃スタッフが入室します。",
      en: "Check-out is strictly by 10:00 AM. Cleaning staff enter around 10:15 AM.",
      zhTW: "退房時間為 10:00 整，請務必準時。清潔人員約於 10:15 進入打掃。",
    },
  },
  {
    id: "early-luggage",
    question: {
      ja: "早く到着した場合、荷物を預けられますか。",
      en: "Can I store my luggage if I arrive early?",
      zhTW: "提早抵達時可以寄放行李嗎？",
    },
    answer: {
      ja: "はい。チェックイン時刻（16:00）より前にご到着の場合も、玄関でお荷物をお預かりできます。",
      en: "Yes. If you arrive before check-in time (4:00 PM), we can hold your luggage at the entrance.",
      zhTW: "可以。若於入住時間（16:00）前抵達，也能於玄關寄放行李。",
    },
  },
  {
    id: "after-checkout-luggage",
    question: {
      ja: "チェックアウト後に荷物を預けられますか。",
      en: "Can I store luggage after check-out?",
      zhTW: "退房後可以寄放行李嗎？",
    },
    answer: {
      ja: "チェックアウト後の荷物預かりはできません。",
      en: "Luggage storage after check-out is not available.",
      zhTW: "退房後恕無法提供行李寄放服務。",
    },
  },
  {
    id: "courier",
    question: { ja: "宅配便を送れますか。", en: "Can I ship a parcel?", zhTW: "可以寄送包裹嗎？" },
    answer: {
      ja: "荷物の発送、集荷、運送業者からの受け取りサービスは行っておりません。",
      en: "We are unable to ship, arrange pickup for, or receive parcels from courier services.",
      zhTW: "我們無法提供包裹寄送、託運或代收快遞包裹的服務。",
    },
  },
  {
    id: "parking",
    question: { ja: "駐車場はありますか。", en: "Is parking available?", zhTW: "有停車場嗎？" },
    answer: {
      ja: "3施設とも駐車場をご用意していますが、台数・距離・利用時間は施設ごとに異なります。各施設のページでご確認ください。",
      en: "All three properties offer parking, but the number of spaces, distance, and hours vary by property. Please check each property's page.",
      zhTW: "三間設施皆備有停車場，惟車位數量、距離與使用時間依設施而異，詳情請參閱各設施頁面。",
    },
  },
  {
    id: "drop-off",
    question: {
      ja: "宿の前で荷物を降ろせますか。",
      en: "Can I unload luggage in front of the property?",
      zhTW: "可以在民宿前卸下行李嗎？",
    },
    answer: {
      ja: "宿前での駐停車・荷物の積み下ろしは禁止されています。",
      en: "Stopping or unloading in front of the property is not permitted.",
      zhTW: "禁止在民宿門前停車或裝卸行李。",
    },
  },
  {
    id: "pajamas",
    question: { ja: "パジャマはありますか。", en: "Are pajamas provided?", zhTW: "有提供睡衣嗎？" },
    answer: {
      ja: "パジャマのご用意はありません。",
      en: "Pajamas are not provided.",
      zhTW: "恕不提供睡衣。",
    },
  },
  {
    id: "wifi",
    question: { ja: "Wi-Fiはありますか。", en: "Is Wi-Fi available?", zhTW: "有 Wi-Fi 嗎？" },
    answer: {
      ja: "3施設ともWi-Fiをご利用いただけます。",
      en: "Wi-Fi is available at all three properties.",
      zhTW: "三間設施皆可使用 Wi-Fi。",
    },
  },
  {
    id: "kids-equipment",
    question: {
      ja: "子ども用設備はありますか。",
      en: "Is there equipment for young children?",
      zhTW: "有提供兒童用品嗎？",
    },
    answer: {
      ja: "施設ごとに異なります。各施設ページの「子ども連れ向け設備」をご確認ください。",
      en: "This varies by property. Please check the “Family-friendly equipment” section on each property's page.",
      zhTW: "依各設施而異，請參閱各設施頁面的「親子友善設備」項目。",
    },
  },
  {
    id: "guest-count-change",
    question: {
      ja: "予約人数を変更できますか。",
      en: "Can I change the number of guests after booking?",
      zhTW: "訂房後可以更改入住人數嗎？",
    },
    answer: {
      ja: "人数変更は事前のご連絡が必要です。お問い合わせフォームよりご連絡ください。",
      en: "Please contact us in advance to change the number of guests, using the contact form.",
      zhTW: "如需變更入住人數，請事先透過聯絡表單與我們聯繫。",
    },
  },
  {
    id: "smoking-party",
    question: {
      ja: "喫煙やパーティーはできますか。",
      en: "Can I smoke or hold a party?",
      zhTW: "可以吸菸或舉辦派對嗎？",
    },
    answer: {
      ja: "全館禁煙です。宴会・パーティーもご遠慮いただいています。",
      en: "All properties are non-smoking. Parties and gatherings are not permitted.",
      zhTW: "全館禁菸，亦禁止舉辦宴會派對。",
    },
  },
];
