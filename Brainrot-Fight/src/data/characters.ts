import { Character } from '../types';

export const characters: Character[] = [
  {
    id: 1,
    name: "Mew God",
    image: "https://cdn.discordapp.com/attachments/1350329437668773941/1350412633635029012/images.png?ex=67d6a545&is=67d553c5&hm=3bd17656915a2623625b47fd5b416ca77ca78221c6696871b0f85e19a2350e8c&", // Corrected path
    hp: 100,
    maxHp: 100,
    moves: [
      { name: "Noline", damage: 20, type: "physical", animation: "shake" },
      { name: "Jawline", damage: 25, type: "special", animation: "flash" },
      { name: "Get Mogged", damage: 15, type: "physical", animation: "bounce" },
      { name: "Master Mewing", damage: 30, type: "special", animation: "spin" },
    ]
  },
  {
    id: 2,
    name: "IShowSpeed",
    image: "https://cdn.discordapp.com/attachments/1350329437668773941/1350411963414478848/81cca77ae958c31e4963d9585259a553.png?ex=67d6a4a5&is=67d55325&hm=91d777236293face8435c7eefe076891ee7f025360578e7b15cb204dd5cb7e4e&",
    hp: 90,
    maxHp: 90,
    moves: [
      { name: "Emote", damage: 15, type: "special", animation: "flash" },
      { name: "Backflip", damage: 25, type: "special", animation: "spin" },
      { name: "Suii", damage: 30, type: "special", animation: "shake" },
      { name: "Bark", damage: 10, type: "physical", animation: "bounce" },
    ]
  },
  {
    id: 3,
    name: "Diddy",
    image: "https://cdn.discordapp.com/attachments/1350329437668773941/1350410614408744990/2Q.png?ex=67d6a363&is=67d551e3&hm=f5ae9db78e0233029cfedcdc616806edd711cf69b22b1be7a1c54ee76f4eab62&",
    hp: 95,
    maxHp: 95,
    moves: [
      { name: "DiddyLover", damage: 20, type: "physical", animation: "bounce" },
      { name: "BabyLover", damage: 25, type: "special", animation: "shake" },
      { name: "DiddyParty", damage: 15, type: "special", animation: "flash" },
      { name: "BabyOil", damage: 30, type: "physical", animation: "spin" },
    ]
  },
  {
    id: 4,
    name: "Drake",
    image: "https://cdn.discordapp.com/attachments/1350329437668773941/1350410446678790164/9k.png?ex=67d6a33b&is=67d551bb&hm=5320a2b44b17b4a8224575b0254bda302ca0d10cc89dcb5f89b4fd64001d45fc&",
    hp: 95,
    maxHp: 95,
    moves: [
      { name: "Draky", damage: 20, type: "physical", animation: "bounce" },
      { name: "Slipper Attack", damage: 25, type: "special", animation: "shake" },
      { name: "Gambling", damage: 15, type: "special", animation: "flash" },
      { name: "Mi Amor", damage: 30, type: "physical", animation: "spin" },
    ]
  },
];