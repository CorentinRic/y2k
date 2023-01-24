import snakeBlue1 from "../assets/images/snakeBlue/karsten-winegeart-7rT-t_LuDz4-unsplash.webp";
import snakeBlue2 from "../assets/images/snakeBlue/karsten-winegeart-pCS5YlrskC8-unsplash.webp";
import snakeBlue3 from "../assets/images/snakeBlue/karsten-winegeart-KLVNx0l3zRU-unsplash.webp";
import snakeBlue4 from "../assets/images/snakeBlue/karsten-winegeart-CA0xocGZSFM-unsplash.webp";

import snakeGold1 from "../assets/images/snakeGold/1karsten-winegeart-R4yfMU8mvdE-unsplash.webp";
import snakeGold2 from "../assets/images/snakeGold/2karsten-winegeart-CXKuFzhfo2Q-unsplash.webp";
import snakeGold3 from "../assets/images/snakeGold/3karsten-winegeart-0w26J0JGj1I-unsplash.webp";
import snakeGold4 from "../assets/images/snakeGold/4karsten-winegeart-KFJ8J8dGjVQ-unsplash.webp";
import snakeGold5 from "../assets/images/snakeGold/5karsten-winegeart-9QEMpewCmeE-unsplash.webp";

import snakeOrange1 from "../assets/images/snakeOrange/1karsten-winegeart-Eq5DFLwKaKk-unsplash.webp";
import snakeOrange2 from "../assets/images/snakeOrange/2karsten-winegeart-iWMd0aZPZkI-unsplash.webp";
import snakeOrange3 from "../assets/images/snakeOrange/3karsten-winegeart-cZVE4GpzQLM-unsplash.webp";

import snakeSpace1 from "../assets/images/snakeSpace/1karsten-winegeart-xZ9v9QsWRDs-unsplash.webp";
import snakeSpace2 from "../assets/images/snakeSpace/2karsten-winegeart-d_YQ8A2fHmc-unsplash.webp";

import snakeAlpin1 from "../assets/images/snakeAlpin/1matthieu-petiard-8P4azS2DMdk-unsplash.webp";
import snakeAlpin2 from "../assets/images/snakeAlpin/2matthieu-petiard-N7_W_n3fafU-unsplash.webp";
import snakeAlpin3 from "../assets/images/snakeAlpin/3matthieu-petiard-Pf6e3o0GL4M-unsplash.webp";

import snakeVintage1 from "../assets/images/snakeVintage/1oguz-yagiz-kara-x0TdwAXoj-E-unsplash.webp";
import snakeVintage2 from "../assets/images/snakeVintage/2oguz-yagiz-kara-Ppjjgj1V8EU-unsplash.webp";
import snakeVintage3 from "../assets/images/snakeVintage/3oguz-yagiz-kara-f6nddm_QIVE-unsplash.webp";

import cyclisteGrey1 from "../assets/images/cyclisteGrey/1munbaik-cycling-clothing-mSv2vktuqeQ-unsplash.webp";
import cyclisteGrey2 from "../assets/images/cyclisteGrey/2munbaik-cycling-clothing-QPrPGq8yAyo-unsplash.webp";
import cyclisteGrey3 from "../assets/images/cyclisteGrey/3munbaik-cycling-clothing-F4aMcFi8Jqk-unsplash.webp";

import cyberPurple1 from "../assets/images/cyberPurple/blackpearl-worldwide-2x5uh_0eZZ4-unsplash.webp";
import cyberPurple2 from "../assets/images/cyberPurple/mo-darbz-q-k7VVjcLNQ-unsplash.webp";

import cyberPunk1 from "../assets/images/cyberPunk/wilmer-martinez-u9KYV8dPc5U-unsplash.webp";
import cyberPunk2 from "../assets/images/cyberPunk/wilmer-martinez-Lme2Ye2jVo8-unsplash.webp";

const PRODUCTS = [
  {
    name: "Snake Blue",
    category: "Masque",
    id: 1,
    ref: "1P",
    isBestSale: true,
    scale: 4,
    cover: snakeBlue1,
    pictures: [snakeBlue1, snakeBlue2, snakeBlue3, snakeBlue4],
    price: 190,
    specification: "Masque bleu de ouuuuuf !",
    text: "Description : Masque de ski/snow pour rider avec du flow de ouf !",
  },
  {
    name: "Snake Blue",
    category: "Masque",
    id: 2,
    ref: "2P",
    isBestSale: true,
    scale: 5,
    cover: snakeGold1,
    pictures: [snakeGold1, snakeGold2, snakeGold3, snakeGold4, snakeGold5],
    price: 190,
    specification: "Masque gold de ouuuuuf !",
    text: "Description : Masque de ski/snow pour rider avec du flow de ouf !",
  },
  {
    name: "Snake Orange",
    category: "Masque",
    id: 3,
    ref: "3P",
    isBestSale: true,
    scale: 3,
    cover: snakeOrange1,
    pictures: [snakeOrange1, snakeOrange2, snakeOrange3],
    price: 190,
    specification: "Masque Orange de ouuuuuf !",
    text: "Description : Masque de ski/snow pour rider avec du flow de ouf !",
  },
  {
    name: "Snake space",
    category: "Masque",
    id: 4,
    ref: "4P",
    isBestSale: true,
    scale: 5,
    cover: snakeSpace1,
    pictures: [snakeSpace1, snakeSpace2],
    price: 190,
    specification: "Masque Espace de ouuuuuf !",
    text: "Description : Masque de ski/snow pour rider avec du flow de ouf !",
  },
  {
    name: "Snake Alpin",
    category: "Masque",
    id: 5,
    ref: "5P",
    isBestSale: true,
    scale: 5,
    cover: snakeAlpin1,
    pictures: [snakeAlpin1, snakeAlpin2, snakeAlpin3],
    price: 190,
    specification: "Masque Alpin de ouuuuuf !",
    text: "Description : Masque de ski/snow pour rider avec du flow de ouf !",
  },
  {
    name: "Snake Vintage",
    category: "Masque",
    id: 6,
    ref: "6P",
    isBestSale: true,
    scale: 3,
    cover: snakeVintage1,
    pictures: [snakeVintage1, snakeVintage2, snakeVintage3],
    price: 190,
    specification: "Masque Vintage de ouuuuuf !",
    text: "Description : Masque de ski/snow pour rider avec du flow de ouf !",
  },
  {
    name: "Cycliste Grey",
    category: "Lunettes",
    id: 7,
    ref: "7P",
    isBestSale: true,
    scale: 5,
    cover: cyclisteGrey1,
    pictures: [cyclisteGrey1, cyclisteGrey2, cyclisteGrey3],
    price: 89,
    specification: "Lunettes de vélo 'aérodynamique' !",
    text: "Description : Lunettes de vélo pour rouler à fond de ouuuf !",
  },
  {
    name: "Cyber Purple",
    category: "Lunettes",
    id: 8,
    ref: "8P",
    isBestSale: true,
    scale: 5,
    cover: cyberPurple1,
    pictures: [cyberPurple1, cyberPurple2],
    price: 74,
    specification: "À la blade runner ?",
    text: "Description : Lunettes parfaites pour se croire dans un film !",
  },
  {
    name: "Cyber Punk",
    category: "Lunettes",
    id: 9,
    ref: "9P",
    isBestSale: true,
    scale: 5,
    cover: cyberPunk1,
    pictures: [cyberPunk1, cyberPunk2],
    price: 74,
    specification: "À la blade runner ?",
    text: "Description : Lunettes parfaites pour se croire dans un film !",
  },
];
export default PRODUCTS;
