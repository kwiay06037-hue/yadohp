export type LocalizedText = {
  ja: string;
  en: string;
  zhTW: string;
};

export type Bed = {
  type: LocalizedText;
  count: number;
  size: string;
  note?: LocalizedText;
};

export type Amenity = {
  label: LocalizedText;
  category:
    | "disposable"
    | "bath"
    | "towel"
    | "kitchen"
    | "device"
    | "other";
};

export type ParkingInfo = {
  distanceMeters: number | null;
  spaces: number | null;
  maxLengthMeters: number | null;
  availableFrom: LocalizedText;
  availableUntil: LocalizedText;
  notes: LocalizedText[];
};

export type Caution = {
  title: LocalizedText;
  body: LocalizedText;
  severity: "info" | "important";
};

export type ImageCategory =
  | "exterior"
  | "entrance"
  | "living"
  | "dining"
  | "kitchen"
  | "bedroom"
  | "japanese-room"
  | "bathroom"
  | "shower"
  | "toilet"
  | "washbasin"
  | "laundry"
  | "projector"
  | "amenity"
  | "kids"
  | "stairs"
  | "parking"
  | "street"
  | "bikan"
  | "floorplan";

export type StayImage = {
  src: string | null;
  alt: LocalizedText;
  width: number;
  height: number;
  category: ImageCategory;
  caption?: LocalizedText;
  priority?: boolean;
};

export type SeoData = {
  title: LocalizedText;
  description: LocalizedText;
};

export type StayFaqItem = {
  question: LocalizedText;
  answer: LocalizedText;
};

/** "unconfirmed" fields are intentionally left null/undefined per the source spec — do not invent values. */
export type Stay = {
  id: string;
  slug: string;
  name: LocalizedText;
  nameEn: string;
  concept: LocalizedText;
  description: LocalizedText;
  address: string;
  mapUrl: string | null;
  airbnbReferenceUrl: string | null;
  bookingUrlEnvVar: string;
  maxGuests: number | null;
  bedrooms: number | null;
  bathrooms: number | null;
  showers: number | null;
  toilets: number | null;
  hasStairs: boolean;
  stairsCaution?: Caution;
  distanceToBikanMeters: number | null;
  distanceToBikanNote?: LocalizedText;
  distanceToStationMeters: number | null;
  distanceToStationNote?: LocalizedText;
  highlights: LocalizedText[];
  beds: Bed[];
  amenities: Amenity[];
  hasProjector: boolean;
  hasTV: boolean;
  laundryType: LocalizedText;
  kidsEquipmentAvailable: boolean;
  parking: ParkingInfo;
  checkIn: string;
  checkOut: string;
  cleaningEntryNote: LocalizedText;
  cautions: Caution[];
  images: StayImage[];
  faq: StayFaqItem[];
  seo: SeoData;
  suitableFor: string[];
}

export type ComparisonKey =
  | "smallChildren"
  | "largeGroup"
  | "stairsConcern"
  | "twoCars"
  | "bikanProximity"
  | "longStay"
  | "projector";
