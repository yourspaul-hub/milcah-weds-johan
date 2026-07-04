// ============================================================
//  WEDDING INVITATION — CUSTOMIZATION CONFIG
//  Milcah & Johan
// ============================================================

export const weddingConfig = {

  couple: {
    groomName:     "Johan",
    groomFullName: "Johan Jacob",
    brideName:     "Milcah",
    brideFullName: "Milcah Nigy",
  },

  family: {
    bride: {
      fullName: "Milcah",
      detail:   "Daughter of Mrs. Nigy Abraham & Mr. Abraham T. Mathew (Binoy), Kanjirappallil, Thottukadavil House, Ranni",
    },
    groom: {
      fullName: "Johan",
      detail:   "Son of Mrs. Jessy Jacob & Mr. C V Jacob, Cheriyil House, Thiruvalla",
    },
  },

  wedding: {
    date:          "2026-08-08",
    displayDate:   "August 8, 2026",
    dotDate:       "08 · 08 · 26",
    dayOfWeek:     "Saturday",
    time:          "11:00 AM",
    venue:         "Believers Convention Center",
    venueFullName: "Believers Convention Center",
    venueAddress:  "Kuttapuzha, Thiruvalla, Kerala",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Believers+Convention+Center+Kuttapuzha+Thiruvalla",
  },

  events: [
    { time: "10:15 AM", title: "Guest Arrival & Seating" },
    { time: "10:30 AM", title: "Opening Prayer & Worship" },
    { time: "11:00 AM", title: "Holy Matrimony" },
    { time: "12:00 PM", title: "Closing Prayer & Blessing" },
    { time: "12:30 PM", title: "Wedding Reception & Lunch" },
  ],

  images: {
    heroBackground: "/hero-bg.jpg",
  },

  music: {
    enabled:  true,
    url:      "/music.mp3",
    autoplay: true,
  },

  colors: {
    sageGreen:   "#7A8471",
    ivory:       "#FBF7EF",
    dustyRose:   "#C08B8B",
    champagne:   "#D9C7A3",
    antiqueGold: "#B08D57",
    softTaupe:   "#A9998A",
    textDark:    "#3E362E",
  },

  messages: {
    saveTheDate:  "With Heartfelt Joy",
    scripture:    "“This is the LORD’s doing; it is marvellous in our eyes.”",
    scriptureRef: "Psalms 118:23",
    invite:       "invite you and your family to join us in celebrating and blessing the wedding of our beloved children",
    closingLine:  "Sharing the happiness",
    sharingNames: "John, Dennis, Miriam, Nora & Jonathan",
    credit:       "Made by yzarC Studio",
  },
};

export type WeddingConfig = typeof weddingConfig;
