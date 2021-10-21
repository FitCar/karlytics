const models = [
  {
      "model_name": "1000",
      "model_make_id": "toyota"
  },
  {
      "model_name": "2000GT",
      "model_make_id": "toyota"
  },
  {
      "model_name": "4Runner",
      "model_make_id": "toyota"
  },
  {
      "model_name": "Avalon",
      "model_make_id": "toyota"
  },
  {
      "model_name": "Avalon Hybrid",
      "model_make_id": "Toyota"
  },
  {
      "model_name": "Camry",
      "model_make_id": "toyota"
  },
  {
      "model_name": "Camry Hybrid",
      "model_make_id": "Toyota"
  },
  {
      "model_name": "Carina",
      "model_make_id": "toyota"
  },
  {
      "model_name": "Celica",
      "model_make_id": "toyota"
  },
  {
      "model_name": "Celsior",
      "model_make_id": "toyota"
  },
  {
      "model_name": "Corolla",
      "model_make_id": "toyota"
  },
  {
      "model_name": "Corona",
      "model_make_id": "toyota"
  },
  {
      "model_name": "Cressida",
      "model_make_id": "toyota"
  },
  {
      "model_name": "Echo",
      "model_make_id": "toyota"
  },
  {
      "model_name": "FJ Cruiser",
      "model_make_id": "toyota"
  },
  {
      "model_name": "Highlander",
      "model_make_id": "toyota"
  },
  {
      "model_name": "Highlander Hybrid",
      "model_make_id": "Toyota"
  },
  {
      "model_name": "Land Cruiser",
      "model_make_id": "toyota"
  },
  {
      "model_name": "Mark II",
      "model_make_id": "toyota"
  },
  {
      "model_name": "Matrix",
      "model_make_id": "toyota"
  },
  {
      "model_name": "Model F",
      "model_make_id": "toyota"
  },
  {
      "model_name": "MR-S",
      "model_make_id": "toyota"
  },
  {
      "model_name": "MR2",
      "model_make_id": "toyota"
  },
  {
      "model_name": "MRJ",
      "model_make_id": "toyota"
  },
  {
      "model_name": "Paseo",
      "model_make_id": "toyota"
  },
  {
      "model_name": "Previa",
      "model_make_id": "toyota"
  },
  {
      "model_name": "Prius",
      "model_make_id": "toyota"
  },
  {
      "model_name": "Prius C",
      "model_make_id": "toyota"
  },
  {
      "model_name": "Prius Plug-in",
      "model_make_id": "Toyota"
  },
  {
      "model_name": "Prius V",
      "model_make_id": "toyota"
  },
  {
      "model_name": "RAV4",
      "model_make_id": "toyota"
  },
  {
      "model_name": "RAV4 EV",
      "model_make_id": "Toyota"
  },
  {
      "model_name": "Sequoia",
      "model_make_id": "toyota"
  },
  {
      "model_name": "Sienna",
      "model_make_id": "toyota"
  },
  {
      "model_name": "Sport 800",
      "model_make_id": "toyota"
  },
  {
      "model_name": "Starlet",
      "model_make_id": "toyota"
  },
  {
      "model_name": "Supra",
      "model_make_id": "toyota"
  },
  {
      "model_name": "Tacoma",
      "model_make_id": "toyota"
  },
  {
      "model_name": "Tercel",
      "model_make_id": "toyota"
  },
  {
      "model_name": "Tundra",
      "model_make_id": "toyota"
  },
  {
      "model_name": "Venza",
      "model_make_id": "toyota"
  },
  {
      "model_name": "Yaris",
      "model_make_id": "toyota"
  },
  {
    "model_name": "Accord",
    "model_make_id": "honda"
},
{
    "model_name": "Accord Crosstour",
    "model_make_id": "honda"
},
{
    "model_name": "Accord Hybrid",
    "model_make_id": "Honda"
},
{
    "model_name": "Accord Plug-In Hybrid",
    "model_make_id": "Honda"
},
{
    "model_name": "Civic",
    "model_make_id": "honda"
},
{
    "model_name": "Civic Del Sol",
    "model_make_id": "honda"
},
{
    "model_name": "CR-V",
    "model_make_id": "honda"
},
{
    "model_name": "CR-Z",
    "model_make_id": "honda"
},
{
    "model_name": "Crosstour",
    "model_make_id": "honda"
},
{
    "model_name": "CRX",
    "model_make_id": "honda"
},
{
    "model_name": "Element",
    "model_make_id": "honda"
},
{
    "model_name": "EV",
    "model_make_id": "honda"
},
{
    "model_name": "FCX",
    "model_make_id": "honda"
},
{
    "model_name": "Fit",
    "model_make_id": "honda"
},
{
    "model_name": "Insight",
    "model_make_id": "honda"
},
{
    "model_name": "Odyssey",
    "model_make_id": "honda"
},
{
    "model_name": "Passport",
    "model_make_id": "honda"
},
{
    "model_name": "Pilot",
    "model_make_id": "honda"
},
{
    "model_name": "Prelude",
    "model_make_id": "honda"
},
{
    "model_name": "Ridgeline",
    "model_make_id": "honda"
},
{
    "model_name": "S2000",
    "model_make_id": "honda"
},
{
    "model_name": "S800",
    "model_make_id": "honda"
},
{
    "model_name": "Shuttle",
    "model_make_id": "honda"
}
]

const newArray = models.filter((make)=>{
  return make.model_make_id === honda
})

console.log(newArray)