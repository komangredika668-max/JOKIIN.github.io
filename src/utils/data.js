import Wuwa from "../assets/Wuwa-logo.jpg";
import hsr from "../assets/hsr-logo.jpg";
import zzz from "../assets/zzz-logo.jpg";
import gi from "../assets/gi-logo.jpg";

export const products = [
  {
    id: 1,
    name: "Wuthering Waves",
    logo : Wuwa,
    image: "/images/Wuwa-bg.jpg",

    services: [
      {
        id: 1,
        name: "Story Progress",
        description:
          "Pengerjaan quest cerita utama (Archon/Main Story) sampai selesai.",

        targets: [
          {
            id: 1,
            name: "Story 1 - 3",
            price: 30000,
          },
          {
            id: 2,
            name: "Story 4 - 6",
            price: 50000,
          },
          {
            id: 3,
            name: "Story 7 - 10",
            price: 75000,
          },
        ],
      },

      {
        id: 2,
        name: "Farming",
        description:
          "Membantu farming material dan kebutuhan karakter.",

        targets: [
          {
            id: 1,
            name: "1 Jam",
            price: 15000,
          },
          {
            id: 2,
            name: "3 Jam",
            price: 40000,
          },
          {
            id: 3,
            name: "5 Jam",
            price: 60000,
          },
        ],
      },

      {
        id: 3,
        name: "Daily Quest",
        description:
          "Menyelesaikan aktivitas dan daily quest akun.",

        targets: [
          {
            id: 1,
            name: "1 Hari",
            price: 10000,
          },
          {
            id: 2,
            name: "3 Hari",
            price: 25000,
          },
          {
            id: 3,
            name: "7 Hari",
            price: 50000,
          },
        ],
      },
    ],
  },

  {
    id: 2,
    name: "Honkai: Star Rail",
    logo: hsr,
    image: "/images/hsr-bg.png",

    services: [
      {
        id: 1,
        name: "Story Progress",
        description:
          "Pengerjaan Main Story Honkai: Star Rail sampai target selesai.",

        targets: [
          {
            id: 1,
            name: "Story Awal",
            price: 30000,
          },
          {
            id: 2,
            name: "Story Lanjutan",
            price: 50000,
          },
          {
            id: 3,
            name: "Story Full",
            price: 100000,
          },
        ],
      },

      {
        id: 2,
        name: "Memory of Chaos Clear",
        description:
          "Menyelesaikan Konten End Game Secara Cepat.",

        targets: [
          {
            id: 1,
            name: "Ruangan 1 - 3",
            price: 15000,
          },
          {
            id: 2,
            name: "Ruangan 4 - 6",
            price: 20000,
          },
          {
            id: 3,
            name: "Ruangan 7 - 9",
            price: 30000,
          },
          {
            id: 4,
            name: "Ruangan 10 - 12",
            price: 40000,
          },
        ],
      },
      {
        id: 3,
        name: "Simulated/Divergent Universe",
        description:
          "Pengerjaan Konten End Game Sampingan.",

        targets: [
          {
            id: 1,
            name: "Clear 1 Run",
            price: 35000,                                         
          },
          {
            id: 2,
            name: "Clear Difficulty High",
            price: 65000,
          },
          {
            id: 3,
            name: "Farming Planar Ornament",
            price: 35000,
          },
        ],
      },
    ],
  },

  {
    id: 3,
    name: "Zenless Zone Zero",
    logo: zzz,
    image: "/images/zzz-bg.jpg",

    services: [
      {
        id: 1,
        name: "Story Progress",
        description:
          "Mengerjakan Main Story sampai target yang dipilih selesai.",

        targets: [
          {
            id: 1,
            name: "Story Awal",
            price: 30000,
          },
          {
            id: 2,
            name: "Story Lanjutan",
            price: 50000,
          },
          {
            id: 3,
            name: "Story Full",
            price: 90000,
          },
        ],
      },

      {
        id: 2,
        name: "Shiyu Defense",
        description:
          "Membantu menyelesaikan stage Shiyu Defense.",

        targets: [
          {
            id: 1,
            name: "Stage 1 - 5",
            price: 25000,
          },
          {
            id: 2,
            name: "Stage 6 - 10",
            price: 40000,
          },
          {
            id: 3,
            name: "Stage Full Clear",
            price: 60000,
          },
        ],
      },
      {
        id: 3,
        name: "Hollow Zero Routine",
        description:
          "Membantu menyelesaikan aktifitas Hollow Zero dan mendapatkan reward.",

        targets: [
          {
            id: 1,
            name: "1 Run",
            price: 20000,
          },
          {
            id: 2,
            name: "3 Run",
            price: 50000,
          },
          {
            id: 3,
            name: "Weekly Routine",
            price: 75000,
          },
        ],
      },
    ],
  },

  {
    id: 4,
    name: "Genshin Impact",
    logo: gi,
    image: "/images/gi-bg.jpg",

    services: [
      {
        id: 1,
        name: "Story Progress",
        description:
          "Mengerjakan Archon Quest dan Main Story sampai target selesai.",

        targets: [
          {
            id: 1,
            name: "Mondstadt",
            price: 30000,
          },
          {
            id: 2,
            name: "Liyue",
            price: 50000,
          },
          {
            id: 3,
            name: "Inazuma",
            price: 60000,
          },
          {
            id: 4,
            name: "Sumeru",
            price: 68000,
          },
          {
            id: 5,
            name: "Fontaine",
            price: 75000,
          },
          {
            id: 6,
            name: "Natlan",
            price: 75000,
          },
          {
            id: 7,
            name: "Nor Krai",
            price: 50000,
          },
        ],
      },

      {
        id: 2,
        name: "Farming/Artefak",
        description:
          "Membantu farming material, equipment karakter dan kebutuhan akun.",

        targets: [
          {
            id: 1,
            name: "1 Jam",
            price: 15000,
          },
          {
            id: 2,
            name: "3 Jam",
            price: 24000,
          },
          {
            id: 3,
            name: "6 Jam",
            price: 40000,
          },
        ],
      },
      {
        id: 3,
        name: "Spiral Abyss",
        description:
          "Membantu menyelesaikan Spiral Abyss dengan cepat.",

        targets: [
          {
            id: 1,
            name: "Floor 1 - 3",
            price: 32000,
          },
          {
            id: 2,
            name: "Floor 4 - 6",
            price: 38000,
          },
          {
            id: 3,
            name: "Floor 7 - 9",
            price: 45000,
          },
          {
            id: 4,
            name: "Floor 10 - 12",
            price: 60000,
          },
        ],
      },
    ],
  },
];