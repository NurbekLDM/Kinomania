import { image } from "@nextui-org/theme";

const trailers = [
    { name: "Dune: Part Two", premiereDate: "2024-03-15", videoLink: "https://youtu.be/Way9Dexny3w?si=CGhw03Z506GGU0y4", image: 'https://i.pinimg.com/474x/2a/62/45/2a6245ca254c29c16399ee2f3e50748a.jpg' },
    { name: "Avatar 3", premiereDate: "2024-12-20", videoLink: "https://youtu.be/YXtWPVFk5TQ?si=SceLYuUqgFxN95sJ", image: 'https://i.pinimg.com/474x/f5/8b/72/f58b7251dfc4ec61b86ee036562bae6e.jpg' },
    { name: "The Marvels", premiereDate: "2023-11-10", videoLink: "https://youtu.be/wS_qbDztgVY?si=3HLa-UcHXiM7ldQi", image: 'https://i.pinimg.com/474x/c8/d1/1e/c8d11eed4b230e038e73f421cfa9c391.jpg' },
    { name: "Mission: Impossible – Dead Reckoning Part Two", premiereDate: "2024-06-28", videoLink: "https://youtu.be/8jRMVhGwy0M?si=67MDgMx_yix5kJfe" },
    { name: "John Wick: Chapter 5", premiereDate: "2025-05-23", videoLink: "https://youtu.be/AFoe0uKTkTQ?si=c55VivOq-GOVlz3x" },
    { name: "Fantastic Beasts 4", premiereDate: "2025-11-16", videoLink: "https://youtu.be/rP7pdXPABB8?si=0-GQe5eeKNaG1wNg" },
    { name: "Star Wars: Rogue Squadron", premiereDate: "2024-12-18", videoLink: "https://youtu.be/5bLkTjn6Y_s?si=7gVexTXta6mFM9Dx" },
    { name: "The Matrix Resurrections 2", premiereDate: "2026-07-14", videoLink: "https://youtu.be/nNpvWBuTfrc?si=7ap0OVTwLQRi3_eW" },
    { name: "Jurassic World: Extinction", premiereDate: "2024-09-12", videoLink: "https://youtu.be/Q3YxrPfNiO4?si=rNqA8U3oj1vqDxd9" },
    { name: "Black Panther 3", premiereDate: "2025-07-10", videoLink: "https://youtu.be/Wfb6bTFIRrY?si=MiNwh5qIf2jE3ZL0" },
    { name: "Spider-Man: Beyond the Spider-Verse", premiereDate: "2024-08-02", videoLink: "https://youtu.be/yphx97aseKw?si=Lcov3Hcs7muZ9lLH" },
    { name: "Guardians of the Galaxy Vol. 4", premiereDate: "2026-05-05", videoLink: "https://youtu.be/xCx9k5Qs02Y?si=SNnRMJxT_Ik5aKPu" },
    { name: "Indiana Jones 6", premiereDate: "2025-06-15", videoLink: "https://youtu.be/agSAnW-On2w?si=1hXyCuZVZNDO7G7D" },
    { name: "Doctor Strange 3", premiereDate: "2025-03-19", videoLink: "https://youtu.be/1hHFpMcxXmU?si=JlZYoqZgH8_HS1Iy" },
    { name: "Harry Potter Reboot", premiereDate: "2027-11-11", videoLink: "https://youtu.be/mvBuvlewGRs?si=iXVnPEhYnbIIh_uP" },
    { name: "Toy Story 5", premiereDate: "2025-06-17", videoLink: "https://youtu.be/F8N0-ViM254?si=oTxn72edjjmUmkJu" },
    { name: "Aquaman 3", premiereDate: "2026-11-21", videoLink: "https://youtu.be/qhgKJo2DBoQ?si=rlc6pl5a4bot0FH2" },
    { name: "Fast & Furious 11", premiereDate: "2025-04-04", videoLink: "https://youtu.be/emxXFg1_BBI?si=SltJQrPxYBrF5Bd1" },
    { name: "The Conjuring 4", premiereDate: "2025-10-13", videoLink: "https://youtu.be/3_FBIsSueQc?si=h69PHcm-x5no9ufq" },
    { name: "The Batman Part II", premiereDate: "2025-10-03", videoLink: "https://youtu.be/KdA82prVlAw?si=L8yP2lDE9UGnDHB0" },
    { name: "Frozen III", premiereDate: "2026-12-05", videoLink: "https://www.youtube.com/watch?v=frozen-iii" },
    { name: "It: Chapter 3", premiereDate: "2025-09-19", videoLink: "https://www.youtube.com/watch?v=it-chapter-3" },
    { name: "Kung Fu Panda 4", premiereDate: "2024-03-22", videoLink: "https://www.youtube.com/watch?v=kung-fu-panda-4" },
    { name: "Sonic the Hedgehog 3", premiereDate: "2024-12-25", videoLink: "https://www.youtube.com/watch?v=sonic-3" },
    { name: "Despicable Me 4", premiereDate: "2024-07-02", videoLink: "https://www.youtube.com/watch?v=despicable-me-4" },
    { name: "The Hunger Games: The Ballad of Songbirds and Snakes", premiereDate: "2023-11-17", videoLink: "https://www.youtube.com/watch?v=hunger-games-prequel" },
    { name: "Shrek 5", premiereDate: "2025-05-18", videoLink: "https://www.youtube.com/watch?v=shrek-5" },
    { name: "Transformers: One", premiereDate: "2025-09-05", videoLink: "https://www.youtube.com/watch?v=transformers-one" },
    { name: "Blade", premiereDate: "2025-11-07", videoLink: "https://www.youtube.com/watch?v=blade" },
    { name: "Captain America: Brave New World", premiereDate: "2024-05-03", videoLink: "https://www.youtube.com/watch?v=captain-america-new-world" },
    { name: "Fantastic Four", premiereDate: "2025-02-14", videoLink: "https://www.youtube.com/watch?v=fantastic-four" },
    { name: "Deadpool 3", premiereDate: "2024-11-08", videoLink: "https://www.youtube.com/watch?v=deadpool-3" },
    { name: "Aladdin 2", premiereDate: "2025-12-20", videoLink: "https://www.youtube.com/watch?v=aladdin-2" },
    { name: "Inside Out 2", premiereDate: "2024-06-14", videoLink: "https://www.youtube.com/watch?v=inside-out-2" },
    { name: "Joker: Folie à Deux", premiereDate: "2024-10-04", videoLink: "https://www.youtube.com/watch?v=joker-2" },
    { name: "Mad Max: The Wasteland", premiereDate: "2026-08-19", videoLink: "https://www.youtube.com/watch?v=mad-max-wasteland" },
    { name: "Alien: Romulus", premiereDate: "2025-04-10", videoLink: "https://www.youtube.com/watch?v=alien-romulus" },
    { name: "Tomb Raider 2", premiereDate: "2025-07-25", videoLink: "https://www.youtube.com/watch?v=tomb-raider-2" },
    { name: "Venom 3", premiereDate: "2024-10-18", videoLink: "https://www.youtube.com/watch?v=venom-3" }
  ];
  
 export default trailers  