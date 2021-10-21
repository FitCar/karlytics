import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { useDispatch, useSelector } from "react-redux";
import { selectMake } from "../slices/carSlice";
// const { uuid } = require('uuidv4');
import models from './models'

const cars = [
  { model: "Venza", index: '1' },
  { model: "Highlander", index: '2' },
  { model: "Camry", index: '3' },
  { model: "Prado", index: '4' },
  { model: "Matrix", index: '5' },
];

// const models = [
//   {
//       "model_name": "1000",
//       "model_make_id": "toyota"
//   },
//   {
//       "model_name": "2000GT",
//       "model_make_id": "toyota"
//   },
//   {
//       "model_name": "4Runner",
//       "model_make_id": "toyota"
//   },
//   {
//       "model_name": "Avalon",
//       "model_make_id": "toyota"
//   },
//   {
//       "model_name": "Avalon Hybrid",
//       "model_make_id": "Toyota"
//   },
//   {
//       "model_name": "Camry",
//       "model_make_id": "toyota"
//   },
//   {
//       "model_name": "Camry Hybrid",
//       "model_make_id": "Toyota"
//   },
//   {
//       "model_name": "Carina",
//       "model_make_id": "toyota"
//   },
//   {
//       "model_name": "Celica",
//       "model_make_id": "toyota"
//   },
//   {
//       "model_name": "Celsior",
//       "model_make_id": "toyota"
//   },
//   {
//       "model_name": "Corolla",
//       "model_make_id": "toyota"
//   },
//   {
//       "model_name": "Corona",
//       "model_make_id": "toyota"
//   },
//   {
//       "model_name": "Cressida",
//       "model_make_id": "toyota"
//   },
//   {
//       "model_name": "Echo",
//       "model_make_id": "toyota"
//   },
//   {
//       "model_name": "FJ Cruiser",
//       "model_make_id": "toyota"
//   },
//   {
//       "model_name": "Highlander",
//       "model_make_id": "toyota"
//   },
//   {
//       "model_name": "Highlander Hybrid",
//       "model_make_id": "Toyota"
//   },
//   {
//       "model_name": "Land Cruiser",
//       "model_make_id": "toyota"
//   },
//   {
//       "model_name": "Mark II",
//       "model_make_id": "toyota"
//   },
//   {
//       "model_name": "Matrix",
//       "model_make_id": "toyota"
//   },
//   {
//       "model_name": "Model F",
//       "model_make_id": "toyota"
//   },
//   {
//       "model_name": "MR-S",
//       "model_make_id": "toyota"
//   },
//   {
//       "model_name": "MR2",
//       "model_make_id": "toyota"
//   },
//   {
//       "model_name": "MRJ",
//       "model_make_id": "toyota"
//   },
//   {
//       "model_name": "Paseo",
//       "model_make_id": "toyota"
//   },
//   {
//       "model_name": "Previa",
//       "model_make_id": "toyota"
//   },
//   {
//       "model_name": "Prius",
//       "model_make_id": "toyota"
//   },
//   {
//       "model_name": "Prius C",
//       "model_make_id": "toyota"
//   },
//   {
//       "model_name": "Prius Plug-in",
//       "model_make_id": "Toyota"
//   },
//   {
//       "model_name": "Prius V",
//       "model_make_id": "toyota"
//   },
//   {
//       "model_name": "RAV4",
//       "model_make_id": "toyota"
//   },
//   {
//       "model_name": "RAV4 EV",
//       "model_make_id": "Toyota"
//   },
//   {
//       "model_name": "Sequoia",
//       "model_make_id": "toyota"
//   },
//   {
//       "model_name": "Sienna",
//       "model_make_id": "toyota"
//   },
//   {
//       "model_name": "Sport 800",
//       "model_make_id": "toyota"
//   },
//   {
//       "model_name": "Starlet",
//       "model_make_id": "toyota"
//   },
//   {
//       "model_name": "Supra",
//       "model_make_id": "toyota"
//   },
//   {
//       "model_name": "Tacoma",
//       "model_make_id": "toyota"
//   },
//   {
//       "model_name": "Tercel",
//       "model_make_id": "toyota"
//   },
//   {
//       "model_name": "Tundra",
//       "model_make_id": "toyota"
//   },
//   {
//       "model_name": "Venza",
//       "model_make_id": "toyota"
//   },
//   {
//       "model_name": "Yaris",
//       "model_make_id": "toyota"
//   },
//   {
//     "model_name": "Accord",
//     "model_make_id": "honda"
// },
// {
//     "model_name": "Accord Crosstour",
//     "model_make_id": "honda"
// },
// {
//     "model_name": "Accord Hybrid",
//     "model_make_id": "Honda"
// },
// {
//     "model_name": "Accord Plug-In Hybrid",
//     "model_make_id": "Honda"
// },
// {
//     "model_name": "Civic",
//     "model_make_id": "honda"
// },
// {
//     "model_name": "Civic Del Sol",
//     "model_make_id": "honda"
// },
// {
//     "model_name": "CR-V",
//     "model_make_id": "honda"
// },
// {
//     "model_name": "CR-Z",
//     "model_make_id": "honda"
// },
// {
//     "model_name": "Crosstour",
//     "model_make_id": "honda"
// },
// {
//     "model_name": "CRX",
//     "model_make_id": "honda"
// },
// {
//     "model_name": "Element",
//     "model_make_id": "honda"
// },
// {
//     "model_name": "EV",
//     "model_make_id": "honda"
// },
// {
//     "model_name": "FCX",
//     "model_make_id": "honda"
// },
// {
//     "model_name": "Fit",
//     "model_make_id": "honda"
// },
// {
//     "model_name": "Insight",
//     "model_make_id": "honda"
// },
// {
//     "model_name": "Odyssey",
//     "model_make_id": "honda"
// },
// {
//     "model_name": "Passport",
//     "model_make_id": "honda"
// },
// {
//     "model_name": "Pilot",
//     "model_make_id": "honda"
// },
// {
//     "model_name": "Prelude",
//     "model_make_id": "honda"
// },
// {
//     "model_name": "Ridgeline",
//     "model_make_id": "honda"
// },
// {
//     "model_name": "S2000",
//     "model_make_id": "honda"
// },
// {
//     "model_name": "S800",
//     "model_make_id": "honda"
// },
// {
//     "model_name": "Shuttle",
//     "model_make_id": "honda"
// },
// {
//   "model_name": "021 C",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "12 M",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "17",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "17M",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "2000",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "24.7",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "427",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "49",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Aerostar",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Anglia",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Artic",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Aspire",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Bronco",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Bronco II",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "C 100",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "C-MAX",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "C-Max Energi",
//   "model_make_id": "Ford"
// },
// {
//   "model_name": "C-Max Hybrid",
//   "model_make_id": "Ford"
// },
// {
//   "model_name": "Capri",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Consul",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Contour",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Corsair",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Cortina",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Courier",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Crestline",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Crown Victoria",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Custom",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "E-150",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "E-250",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "E-350",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "E-Series",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "E-Series Van",
//   "model_make_id": "Ford"
// },
// {
//   "model_name": "E-Series Wagon",
//   "model_make_id": "Ford"
// },
// {
//   "model_name": "Econoline",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Econovan",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Edge",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Escape",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Escort",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Excursion",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Expedition",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Explorer",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "F",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "F-150",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "F-250",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "F-250 Super Duty",
//   "model_make_id": "Ford"
// },
// {
//   "model_name": "F-350",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "F-350 Super Duty",
//   "model_make_id": "Ford"
// },
// {
//   "model_name": "F-450",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "F-450 Super Duty",
//   "model_make_id": "Ford"
// },
// {
//   "model_name": "F-650",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Fairlane",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Falcon",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Festiva",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Fiesta",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Five Hundred",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Flex",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Focus",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Focus ST",
//   "model_make_id": "Ford"
// },
// {
//   "model_name": "Freestar",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Freestyle",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Fusion",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Fusion Energi",
//   "model_make_id": "Ford"
// },
// {
//   "model_name": "Fusion Hybrid",
//   "model_make_id": "Ford"
// },
// {
//   "model_name": "Galaxie",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Gran Torino",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Granada",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "GT",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "GT 40",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "GT 500",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "GT 70",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Husky",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Limited",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Lotus Cortina",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "LTD",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Maverick",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Monarch",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Mustang",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Orion",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Pilot",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Popular",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Prefect",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Probe",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Ranchero",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Ranger",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "RS 200",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Shelby GT 500",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Shelby GT500",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Skyliner",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Station Wagon",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Taunus",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Taurus",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Taurus X",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Tempo",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Thunderbird",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Torino",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Tracer",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Transit Connect",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Transit Van",
//   "model_make_id": "Ford"
// },
// {
//   "model_name": "Transit Wagon",
//   "model_make_id": "Ford"
// },
// {
//   "model_name": "Vedette",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Windstar",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Zephyr",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "Zodiac",
//   "model_make_id": "ford"
// },
// {
//   "model_name": "1 Series",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "116",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "118",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "120",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "125",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "128",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "130",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "135",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "1500",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "1502",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "1600",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "1602",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "1800",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "2 Series",
//   "model_make_id": "BMW"
// },
// {
//   "model_name": "2.8",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "2000",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "2002",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "2004",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "2800",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "3",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "3 Series",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "3 Series Gran Turismo",
//   "model_make_id": "BMW"
// },
// {
//   "model_name": "3.3",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "315",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "316",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "317",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "318",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "320",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "3200 CS",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "323",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "324",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "325",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "328",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "330",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "332",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "333",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "335",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "340",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "4 Series",
//   "model_make_id": "BMW"
// },
// {
//   "model_name": "4 Series Gran Coupe",
//   "model_make_id": "BMW"
// },
// {
//   "model_name": "5 Series",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "5 Series Gran Turismo",
//   "model_make_id": "BMW"
// },
// {
//   "model_name": "5.8",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "501",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "502",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "503",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "507",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "518",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "520",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "523",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "524",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "525",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "528",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "529",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "530",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "535",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "538",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "540",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "545",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "550",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "6 series",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "6 Series Gran Coupe",
//   "model_make_id": "BMW"
// },
// {
//   "model_name": "600",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "628",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "630",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "633",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "635",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "640",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "645",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "650",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "7 Series",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "725",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "728",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "729",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "730",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "732",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "735",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "740",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "745",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "748",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "750",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "760",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "840",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "845",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "850",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "854",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "856",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "ActiveHybrid 3",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "ActiveHybrid 5",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "ActiveHybrid 7",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "Alpina",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "ALPINA B6 Gran Coupe",
//   "model_make_id": "BMW"
// },
// {
//   "model_name": "ALPINA B7",
//   "model_make_id": "BMW"
// },
// {
//   "model_name": "Dinan",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "M",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "M1",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "M28i",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "M3",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "M4",
//   "model_make_id": "BMW"
// },
// {
//   "model_name": "M5",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "M6",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "M6 Gran Coupe",
//   "model_make_id": "BMW"
// },
// {
//   "model_name": "MM Roadster",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "S3",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "X Activity",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "X Coupe",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "X1",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "X3",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "X4",
//   "model_make_id": "BMW"
// },
// {
//   "model_name": "X5",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "X5 M",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "X6",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "X6 M",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "Z1",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "Z3",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "Z4",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "Z8",
//   "model_make_id": "bmw"
// },
// {
//   "model_name": "Z9",
//   "model_make_id": "bmw"
// }
// ]





const CarModels = () => {
  const navigation = useNavigation()
  const make = useSelector(selectMake)
  console.log(make)

  const newArray = models.filter((mod)=>{
    return mod.model_make_id === make
  })
  let target = [];
  newArray.map((mod)=>target.push(mod.model_name))
  
  console.log(target)
  
  

  return (
    <View style={tw`mt-20`}>
      <FlatList
        data={target}
        renderItem={({item}) => (
          <TouchableOpacity style={tw`bg-gray-100 border-2 h-10 text-center`} onPress={() => navigation.navigate('CarRegisteration')}>
            <Text style={tw`text-black`}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.index}
      />
    </View>
  );
};

export default CarModels;

const styles = StyleSheet.create({});
