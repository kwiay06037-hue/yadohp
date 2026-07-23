import type { LocalizedText } from "./types";

/**
 * Central brand configuration. The brand name is provisional ("仮称" in the
 * source spec) — change it here rather than hardcoding it across the site.
 */
export const site = {
  brandName: "Kurashiki Stay Collection",
  brandNameStatus: "provisional" as const,
  operatorName: "YUICHIRO KIKKAWA",
  contactEmail: "kwiay06037@gmail.com",
  // TODO: confirm domain before launch.
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN ?? "https://example.com",
  defaultBookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL ?? "",
  tagline: {
    ja: "泊まる場所から、倉敷の旅を特別に。",
    en: "Where you stay makes your Kurashiki trip special.",
    zhTW: "從下榻之處開始，讓倉敷之旅與眾不同。",
  } satisfies LocalizedText,
  subTagline: {
    ja: "倉敷美観地区の近くにある、個性の異なる3つの一棟貸し宿。ご家族や大切な人と、自分たちのペースで倉敷をお楽しみください。",
    en: "Three distinctive whole-house rentals near the Kurashiki Bikan Historical Quarter. Enjoy Kurashiki at your own pace with family or the people who matter most.",
    zhTW: "三間各具特色的獨棟包棟民宿，鄰近倉敷美觀地區。與家人或重要的人，以自己的步調享受倉敷之旅。",
  } satisfies LocalizedText,
  brandIntro: {
    ja: "倉敷の歴史ある町並みを、朝から夜までゆっくり楽しんでいただきたい。Kurashiki Stay Collectionは、倉敷美観地区の近くで運営する一棟貸しの宿です。古い建物の趣を残しながら、ベッド、キッチン、洗濯設備、Wi-Fi、プロジェクターなど、現代の旅行に必要な設備を備えています。ホテルとは少し違う、自分たちだけの倉敷滞在をお楽しみください。",
    en: "We want you to enjoy Kurashiki's historic streets at your own pace, from morning to night. Kurashiki Stay Collection operates whole-house rentals near the Kurashiki Bikan Historical Quarter. Each keeps the character of an older building while offering the amenities modern travel needs — beds, a kitchen, laundry, Wi-Fi, and a projector. Enjoy a Kurashiki stay that's all your own, a little different from a hotel.",
    zhTW: "希望您能從早到晚，悠閒享受倉敷歷史悠久的街景。Kurashiki Stay Collection 是在倉敷美觀地區附近經營的獨棟包棟民宿。保留古建築的風情之餘，也備有床鋪、廚房、洗衣設備、Wi-Fi、投影機等現代旅行所需的設備。歡迎您享受與飯店略有不同、專屬於您的倉敷時光。",
  } satisfies LocalizedText,
} as const;

export type ThemeColors = typeof themeColors;

export const themeColors = {
  bgPrimary: "#F8F7F3",
  bgWhite: "#FFFFFF",
  textPrimary: "#1F2328",
  textSecondary: "#343434",
  main: "#1D2A38",
  accent: "#8A6D3B",
} as const;
