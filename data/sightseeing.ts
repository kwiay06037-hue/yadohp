import type { LocalizedText } from "./types";

export type SightseeingCategory =
  | "bikan"
  | "museum"
  | "river"
  | "shrine-temple"
  | "food"
  | "cafe"
  | "kids"
  | "rainy-day"
  | "onsen"
  | "restroom"
  | "filming-location";

export type SightseeingSpot = {
  id: string;
  name: LocalizedText;
  category: SightseeingCategory;
  description: LocalizedText;
  /** Populate from an operator-supplied Google Maps list before launch. */
  mapUrl: string | null;
};

export const sightseeingCategories: { id: SightseeingCategory; label: LocalizedText }[] = [
  { id: "bikan", label: { ja: "倉敷美観地区", en: "Bikan Historical Quarter", zhTW: "倉敷美觀地區" } },
  { id: "museum", label: { ja: "大原美術館", en: "Ohara Museum of Art", zhTW: "大原美術館" } },
  { id: "river", label: { ja: "倉敷川", en: "Kurashiki River", zhTW: "倉敷川" } },
  { id: "shrine-temple", label: { ja: "阿智神社", en: "Achi Shrine", zhTW: "阿智神社" } },
  { id: "food", label: { ja: "飲食店", en: "Restaurants", zhTW: "餐廳" } },
  { id: "cafe", label: { ja: "カフェ", en: "Cafés", zhTW: "咖啡廳" } },
  { id: "kids", label: { ja: "子ども連れ", en: "With kids", zhTW: "親子同遊" } },
  { id: "rainy-day", label: { ja: "雨の日", en: "Rainy days", zhTW: "雨天備案" } },
  { id: "onsen", label: { ja: "日帰り入浴", en: "Day-use baths", zhTW: "一日溫泉" } },
  { id: "restroom", label: { ja: "公衆トイレ", en: "Public restrooms", zhTW: "公共廁所" } },
  { id: "filming-location", label: { ja: "映画・ドラマのロケ地", en: "Film & drama locations", zhTW: "電影電視劇拍攝地" } },
];

/**
 * Placeholder entries — operating hours, fees, and closing days change
 * often, so we intentionally avoid stating them as fixed facts. Populate
 * `mapUrl` from an operator-supplied Google Maps list before launch.
 */
export const sightseeingSpots: SightseeingSpot[] = [
  {
    id: "bikan-historical-quarter",
    name: { ja: "倉敷美観地区", en: "Kurashiki Bikan Historical Quarter", zhTW: "倉敷美觀地區" },
    category: "bikan",
    description: {
      ja: "白壁の蔵屋敷と柳並木が続く、倉敷を代表する町並み。営業時間・定休日は変更される場合があるため、お出かけ前に公式情報をご確認ください。",
      en: "Kurashiki's signature streetscape of white-walled storehouses and willow-lined canals. Hours and closures can change, so please check official sources before visiting.",
      zhTW: "白牆倉庫建築與柳樹並列的街道，是倉敷最具代表性的景緻。營業時間與公休日可能異動，出發前請確認官方資訊。",
    },
    mapUrl: null,
  },
  {
    id: "ohara-museum",
    name: { ja: "大原美術館", en: "Ohara Museum of Art", zhTW: "大原美術館" },
    category: "museum",
    description: {
      ja: "西洋近代美術を中心に収蔵する、日本有数の私立美術館。営業時間・料金・休館日は公式サイトでご確認ください。",
      en: "One of Japan's leading private art museums, centered on modern Western art. Please check the official site for hours, fees, and closures.",
      zhTW: "日本知名的私立美術館，主要收藏近代西洋美術作品。開放時間、票價與休館日請以官方網站公告為準。",
    },
    mapUrl: null,
  },
  {
    id: "kurashiki-river",
    name: { ja: "倉敷川", en: "Kurashiki River", zhTW: "倉敷川" },
    category: "river",
    description: {
      ja: "美観地区を流れる小さな川。舟遊びや川沿いの散策が楽しめます。",
      en: "A small canal running through the Bikan Historical Quarter, popular for boat rides and riverside walks.",
      zhTW: "流經美觀地區的小河，可體驗乘船遊河與沿岸散步的樂趣。",
    },
    mapUrl: null,
  },
  {
    id: "achi-shrine",
    name: { ja: "阿智神社", en: "Achi Shrine", zhTW: "阿智神社" },
    category: "shrine-temple",
    description: {
      ja: "美観地区を見下ろす高台にある神社。桜や藤の名所としても知られています。",
      en: "A shrine on a hill overlooking the Bikan Historical Quarter, also known for its cherry blossoms and wisteria.",
      zhTW: "位於可俯瞰美觀地區高地上的神社，也以賞櫻與紫藤景致聞名。",
    },
    mapUrl: null,
  },
];
