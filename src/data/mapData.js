
import altai from '../images/altai.png'
import ancientSpires from '../images/ancient-spires.png'
import archipelago from '../images/archipelago.png'
import blackForest from '../images/black-forest.png'
import boulderBay from '../images/boulder-bay.png'
import confluence from '../images/confluence.png'
import danubeRiver from '../images/danube-river.png'
import dryArabia from '../images/dry-arabia.png'
import frenchPass from '../images/french-pass.png'
import highView from '../images/high-view.png'
import hillAndDale from '../images/hill-and-dale.png'
import kingOfTheHill from '../images/king-of-the-hill.png'
import lipany from '../images/lipany.png'
import mongolianHeights from '../images/mongolian-heights.png'
import mountainPass from '../images/mountain-pass.png'
import nagari from '../images/nagari.png'
import warringIslands from '../images/warring-islands.png'

export const mapTypes = {
  land: 'land',
  hybrid: 'hybrid',
  water: 'water',
};


export const mapData = [
 {
   name: 'Altai',
   type: mapTypes.land,
   image: altai,
 },
 {
   name: 'Ancient Spires',
   type: mapTypes.hybrid,
   image: ancientSpires,
 },
 {
   name: 'Archipelago',
   type: mapTypes.water,
   image: archipelago,
 },
 {
   name: 'Black Forest',
   type: mapTypes.hybrid,
   image: blackForest,
 },
 {
   name: 'Boulder Bay',
   type: mapTypes.hybrid,
   image: boulderBay,
 },
 {
   name: 'Confluence',
   type: mapTypes.hybrid,
   image: confluence,
 },
 {
   name: 'Danube River',
   type: mapTypes.hybrid,
   image: danubeRiver,
 },
 {
   name: 'Dry Arabia',
   type: mapTypes.land,
   image: dryArabia,
 },
 {
   name: 'French pass',
   type: mapTypes.land,
   image: frenchPass,
 },
 {
   name: 'High View',
   type: mapTypes.land,
   image: highView,
 },
 {
   name: 'Hill and Dale',
   type: mapTypes.land,
   image: hillAndDale,
 },
 {
   name: 'King of the Hill',
   type: mapTypes.land,
   image: kingOfTheHill,
 },
 {
   name: 'Lipany',
   type: mapTypes.land,
   image: lipany,
 },
 {
   name: 'Mongolian Heights',
   type: mapTypes.hybrid,
   image: mongolianHeights,
 },
 {
   name: 'Mountain Pass',
   type: mapTypes.land,
   image: mountainPass,
 },
 {
   name: 'Nagari',
   type: mapTypes.hybrid,
   image: nagari,
 },
 {
   name: 'Warring Islands',
   type: mapTypes.water,
   image: warringIslands,
 },
]