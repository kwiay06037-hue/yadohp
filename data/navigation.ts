import type { LocalizedText } from "./types";

export type NavItem = {
  key: string;
  href: string;
  label: LocalizedText;
};

export const primaryNav: NavItem[] = [
  { key: "stays", href: "/stays", label: { ja: "宿を探す", en: "Find a stay", zhTW: "尋找住宿" } },
  { key: "compare", href: "/stays#compare", label: { ja: "3施設比較", en: "Compare all 3", zhTW: "三館比較" } },
  { key: "access", href: "/access", label: { ja: "アクセス", en: "Access", zhTW: "交通方式" } },
  { key: "sightseeing", href: "/sightseeing", label: { ja: "周辺観光", en: "Sightseeing", zhTW: "周邊景點" } },
  { key: "faq", href: "/faq", label: { ja: "FAQ", en: "FAQ", zhTW: "常見問題" } },
];

export const footerNav: NavItem[] = [
  { key: "stays", href: "/stays", label: { ja: "宿を探す", en: "Find a stay", zhTW: "尋找住宿" } },
  { key: "access", href: "/access", label: { ja: "アクセス", en: "Access", zhTW: "交通方式" } },
  { key: "sightseeing", href: "/sightseeing", label: { ja: "周辺観光", en: "Sightseeing", zhTW: "周邊景點" } },
  { key: "faq", href: "/faq", label: { ja: "よくある質問", en: "FAQ", zhTW: "常見問題" } },
  { key: "contact", href: "/contact", label: { ja: "お問い合わせ", en: "Contact", zhTW: "聯絡我們" } },
  { key: "terms", href: "/terms", label: { ja: "利用規約", en: "Terms of Use", zhTW: "使用條款" } },
  { key: "privacy", href: "/privacy", label: { ja: "プライバシーポリシー", en: "Privacy Policy", zhTW: "隱私權政策" } },
];
