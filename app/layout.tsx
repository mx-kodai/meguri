import type { Metadata } from "next";
import { Noto_Serif_JP, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif_JP({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const notoSans = Noto_Sans_JP({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "呉羽山めぐり | 1泊2日ガイドツアー — 富山駅から10分の別世界",
  description:
    "立山連峰を望む呉羽丘陵フットパスを、地元のスペシャリストと歩く1泊2日の贅沢な旅。五百羅漢、展望台、古墳群、茶室、そして呉羽ハイツの展望風呂と富山の美食を満喫。ドリームブリッジくれは企画。",
  keywords: [
    "呉羽山", "ガイドツアー", "富山", "フットパス", "1泊2日",
    "立山連峰", "五百羅漢", "呉羽ハイツ", "ドリームブリッジくれは",
    "呉羽丘陵", "観光", "ウォーキング", "歴史散策",
  ],
  openGraph: {
    title: "呉羽山めぐり | 1泊2日ガイドツアー",
    description:
      "富山駅から10分。立山連峰と535体の石仏、4,000年の歴史を歩く週末旅。呉羽ハイツの展望風呂と会席料理付き。",
    locale: "ja_JP",
    type: "website",
    siteName: "呉羽山めぐり",
  },
  twitter: {
    card: "summary_large_image",
    title: "呉羽山めぐり | 富山駅10分、立山を仰ぐ1泊2日",
    description: "535体の石仏、4,000年の古墳、展望風呂。地元スペシャリストと歩く週末旅。",
  },
  alternates: {
    canonical: "/",
  },
};

// JSON-LD 構造化データ（TourEvent）
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "呉羽山めぐり 1泊2日ガイドツアー",
  description:
    "立山連峰を望む呉羽丘陵フットパスを地元スペシャリストと歩く1泊2日の旅。五百羅漢、展望台、古墳群、茶室、展望風呂、会席料理を堪能。",
  touristType: ["Cultural", "Nature", "Walking"],
  itinerary: {
    "@type": "ItemList",
    numberOfItems: 2,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "1日目：フットパス散策・五百羅漢・展望台・茶室・展望風呂・会席料理",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "2日目：城山公園・連絡橋・古墳群・縄文広場",
      },
    ],
  },
  provider: {
    "@type": "Organization",
    name: "ドリームブリッジくれは",
    url: "https://dreambridge-kureha.net/",
  },
  offers: {
    "@type": "Offer",
    description: "宿泊・食事・ガイド込み",
    availability: "https://schema.org/InStock",
  },
  contentLocation: {
    "@type": "Place",
    name: "呉羽丘陵（富山県富山市）",
    address: {
      "@type": "PostalAddress",
      addressLocality: "富山市",
      addressRegion: "富山県",
      addressCountry: "JP",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSerif.variable} ${notoSans.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
