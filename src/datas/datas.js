import avatarKnight from "../assets/avatar-knight.webp";
import avatarAssassin from "../assets/avatar-assassin.webp";
import avatarCleric from "../assets/avatar-cleric.webp";
import avatarDeprived from "../assets/avatar-deprived.webp";
import avatarHerrald from "../assets/avatar-herrald.webp";
import avatarMercenaris from "../assets/avatar-mercenaris.webp";
import avatarPyromancer from "../assets/avatar-pyromancer.webp";
import avatarSorcerer from "../assets/avatar-sorcerer.webp";
import avatarThief from "../assets/avatar-thief.webp";
import avatarWarrior from "../assets/avatar-warrior.webp";

export const charactersClasses = [
  {
    startingClass: "Knight ",
    description:
      "An obscure knight of poor renown who collapsed roaming the land. Sturdy, owing to high vitality and stout armor.",
    startingstuff: "Long Sword and Knight Shield",
    avatar: avatarKnight,
    stats: {
      level: 9,
      vigor: 12,
      attunement: 10,
      endurance: 11,
      vitality: 15,
      strenght: 13,
      dexterity: 12,
      intelligence: 9,
      faith: 9,
      luck: 7,
    },
  },
  {
    startingClass: "Mercenary ",
    description:
      "A mercenary and veteran of the battlefield. High dexterity allows masterful wielding of dual scimitars.",
    startingstuff: "Sellsword Twinblades And Wooden Shield",
    avatar: avatarMercenaris,
    stats: {
      level: 8,
      vigor: 11,
      attunement: 12,
      endurance: 11,
      vitality: 10,
      strenght: 10,
      dexterity: 16,
      intelligence: 10,
      faith: 8,
      luck: 9,
    },
  },
  {
    startingClass: "Warrior ",
    description:
      "Descendant of northern warriors famed for their brawn. Utilizes high strength to wield a heavy battleaxe.",
    startingstuff: "Battle Axe and Round Shield",
    avatar: avatarWarrior,
    stats: {
      level: 7,
      vigor: 14,
      attunement: 6,
      endurance: 12,
      vitality: 11,
      strenght: 16,
      dexterity: 9,
      intelligence: 8,
      faith: 9,
      luck: 11,
    },
  },
  {
    startingClass: "Herald ",
    description:
      "A former herald who journeyed to finish a quest undertaken. Wields a sturdy spear and employs a gentle restorative miracle. ",
    startingstuff: "Spear, Kite Shield and  Talisman",
    avatar: avatarHerrald,
    stats: {
      level: 9,
      vigor: 12,
      attunement: 10,
      endurance: 9,
      vitality: 12,
      strenght: 12,
      dexterity: 11,
      intelligence: 8,
      faith: 13,
      luck: 11,
    },
  },
  {
    startingClass: "Thief ",
    description:
      "A common thief and pitiful deserter. Wields a dagger intended for backstabs alongside a military-issue bow.",
    startingstuff: "Bandit's Knife, Iron Round Shield and Short Bow",
    avatar: avatarThief,
    stats: {
      level: 5,
      vigor: 10,
      attunement: 11,
      endurance: 10,
      vitality: 9,
      strenght: 9,
      dexterity: 13,
      intelligence: 10,
      faith: 8,
      luck: 14,
    },
  },
  {
    startingClass: "Assassin ",
    description:
      "An assassin who stalks their prey from the shadows. Favors sorceries in addition to thrusting swords.",
    startingstuff: "Estoc, Target Shield And Sorcerer's Staff",
    avatar: avatarAssassin,
    stats: {
      level: 10,
      vigor: 10,
      attunement: 14,
      endurance: 11,
      vitality: 10,
      strenght: 10,
      dexterity: 14,
      intelligence: 11,
      faith: 9,
      luck: 10,
    },
  },
  {
    startingClass: "Sorcerer ",
    description:
      "A loner who left formal academia to pursue further research- Commands soul sorceries using high intelligence. ",
    startingstuff: "Mail Breaker, Sorcerer's Staff and Leather Shield",
    avatar: avatarSorcerer,
    stats: {
      level: 6,
      vigor: 9,
      attunement: 16,
      endurance: 9,
      vitality: 7,
      strenght: 7,
      dexterity: 12,
      intelligence: 16,
      faith: 7,
      luck: 12,
    },
  },
  {
    startingClass: "Pyromancer ",
    description:
      "A pyromancer from a remote region who manipulates flame. Also an adept close combat warrior who wields a hand axe.",
    startingstuff: "Hand Axe, Caduceus Round Shield and Pyromancy Flame",
    avatar: avatarPyromancer,
    stats: {
      level: 8,
      vigor: 11,
      attunement: 12,
      endurance: 10,
      vitality: 8,
      strenght: 12,
      dexterity: 9,
      intelligence: 14,
      faith: 14,
      luck: 7,
    },
  },
  {
    startingClass: "Cleric ",
    description:
      "A traveling cleric who collapsed from exhaustion. Channels high faith to cast many and varied miracles.",
    startingstuff: "Mace, Cleric's Sacred Chime and Blue Wooden Shield",
    avatar: avatarCleric,
    stats: {
      level: 7,
      vigor: 10,
      attunement: 14,
      endurance: 9,
      vitality: 7,
      strenght: 12,
      dexterity: 8,
      intelligence: 7,
      faith: 16,
      luck: 13,
    },
  },
  {
    startingClass: "Deprived ",
    description:
      "Naked and of unknown origin. Either an unfathomable fool in life, or was stripped of possessions upon burial.",
    startingstuff: "Club and Plank Shield",
    avatar: avatarDeprived,
    stats: {
      level: 1,
      vigor: 10,
      attunement: 10,
      endurance: 10,
      vitality: 10,
      strenght: 10,
      dexterity: 10,
      intelligence: 10,
      faith: 10,
      luck: 10,
    },
  },
];
