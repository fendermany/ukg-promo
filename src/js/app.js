// Включить/выключить FLS (Full Logging System) (в работе)
window["FLS"] = true;

import "../scss/style.scss";

import * as flsFunctions from "./files/functions.js";

import "./libs/select.js";

import "./files/sliders.js";

import "./files/script.js";

// import "./files/chart.js";

flsFunctions.isWebp();

flsFunctions.menuInit();

flsFunctions.spollers();

flsFunctions.tabs();
