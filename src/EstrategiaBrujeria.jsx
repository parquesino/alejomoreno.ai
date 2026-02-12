import React, { useState, useMemo, useEffect } from 'react';
import { Search, ArrowRight, Zap, TrendingUp, Filter, DollarSign, Shield, ShoppingCart, Activity, Package, Droplets, Sparkles, Map, BarChart3, Users, HeartPulse } from 'lucide-react';
import { Link } from 'react-router-dom';

const EstrategiaBrujeria = () => {
  const [activeTab, setActiveTab] = useState('market'); // Arrancamos en 'market' para ver la data
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todas');
  const [sortBy, setSortBy] = useState('volume');

  // --- DATASET NUEVO PROCESADO ---
  const rawData = [
    { keyword: "termoprotector para el cabello", volume: 9900, trend: "-45%", cpc: 469 },
    { keyword: "remington planchas aguacate", volume: 6600, trend: "-33%", cpc: 62 },
    { keyword: "shampoo de cebolla", volume: 5400, trend: "-33%", cpc: 556 },
    { keyword: "shampoo kaba", volume: 4400, trend: "-64%", cpc: 492 },
    { keyword: "anyeluz shampoo", volume: 4400, trend: "-18%", cpc: 99 },
    { keyword: "shampoo anyeluz", volume: 4400, trend: "-19%", cpc: 70 },
    { keyword: "repolarización", volume: 3600, trend: "0%", cpc: 424 },
    { keyword: "kaba shampoo", volume: 3600, trend: "-56%", cpc: 393 },
    { keyword: "repolarizado", volume: 3600, trend: "0%", cpc: 424 },
    { keyword: "repolarizar", volume: 3600, trend: "0%", cpc: 424 },
    { keyword: "termo protector para el cabello", volume: 2400, trend: "0%", cpc: 347 },
    { keyword: "termoprotector milagros", volume: 1900, trend: "0%", cpc: 38 },
    { keyword: "protector termico para el cabello", volume: 1600, trend: "0%", cpc: 321 },
    { keyword: "tratamiento para el cabello seco y maltratado", volume: 1600, trend: "-32%", cpc: 564 },
    { keyword: "tratamientos caseros para el cabello seco y maltratado", volume: 1600, trend: "-12%", cpc: 394 },
    { keyword: "peinado con crespos", volume: 1600, trend: "-33%", cpc: 0 },
    { keyword: "peinar cabello rizado", volume: 1600, trend: "-34%", cpc: 0 },
    { keyword: "tratamiento para cabello seco maltratado", volume: 1600, trend: "-32%", cpc: 564 },
    { keyword: "crema para peinar rizos", volume: 1300, trend: "19%", cpc: 563 },
    { keyword: "shampoo de cebolla anyeluz", volume: 1300, trend: "-45%", cpc: 105 },
    { keyword: "crema de peinar para rizos", volume: 1000, trend: "30%", cpc: 517 },
    { keyword: "protector de calor para el cabello", volume: 1000, trend: "-45%", cpc: 365 },
    { keyword: "mascarillas para hidratar el cabello seco y maltratado", volume: 1000, trend: "-32%", cpc: 497 },
    { keyword: "champu de cebolla", volume: 1000, trend: "-33%", cpc: 192 },
    { keyword: "crema para rizos", volume: 1000, trend: "0%", cpc: 573 },
    { keyword: "crema para peinar sedal", volume: 1000, trend: "-32%", cpc: 210 },
    { keyword: "peinado para rizos", volume: 1000, trend: "0%", cpc: 0 },
    { keyword: "protector de cabello para el calor", volume: 1000, trend: "-45%", cpc: 365 },
    { keyword: "mascarilla para el cabello seco y maltratado", volume: 880, trend: "-33%", cpc: 578 },
    { keyword: "mascarilla para el cabello seco y con frizz", volume: 880, trend: "-55%", cpc: 548 },
    { keyword: "crema skala para rizos", volume: 880, trend: "-28%", cpc: 251 },
    { keyword: "mascarilla para cabello seco y con frizz", volume: 880, trend: "-55%", cpc: 548 },
    { keyword: "peinar un pelo rizado", volume: 880, trend: "-19%", cpc: 0 },
    { keyword: "shampoo gusano de seda", volume: 720, trend: "-18%", cpc: 210 },
    { keyword: "skala para rizos", volume: 720, trend: "-63%", cpc: 119 },
    { keyword: "sedal rizos definidos", volume: 720, trend: "39%", cpc: 328 },
    { keyword: "shampoo cebolla", volume: 720, trend: "-18%", cpc: 516 },
    { keyword: "sedal rizos", volume: 720, trend: "-46%", cpc: 391 },
    { keyword: "skala rizos", volume: 720, trend: "-41%", cpc: 220 },
    { keyword: "shampoo de kaba", volume: 720, trend: "-63%", cpc: 561 },
    { keyword: "peinado con rizo", volume: 720, trend: "-19%", cpc: 0 },
    { keyword: "peinados en rizo", volume: 720, trend: "-19%", cpc: 0 },
    { keyword: "peinar con rulos", volume: 720, trend: "-38%", cpc: 0 },
    { keyword: "sedal rizo", volume: 720, trend: "-46%", cpc: 391 },
    { keyword: "shampoo anyeluz romero", volume: 720, trend: "-45%", cpc: 72 },
    { keyword: "tratamientos profesionales para el cabello seco y maltratado", volume: 590, trend: "-46%", cpc: 443 },
    { keyword: "remedios caseros para hidratar el cabello seco y maltratado", volume: 590, trend: "-56%", cpc: 39 },
    { keyword: "termoprotector para el cabello antes de planchar", volume: 590, trend: "-41%", cpc: 522 },
    { keyword: "crema de peinar sedal", volume: 590, trend: "0%", cpc: 183 },
    { keyword: "shampoo kaba precio", volume: 590, trend: "-70%", cpc: 88 },
    { keyword: "shampoo cebolla anyeluz", volume: 590, trend: "-19%", cpc: 96 },
    { keyword: "tratamiento para cabello maltratado", volume: 480, trend: "-19%", cpc: 533 },
    { keyword: "crema para rizos definidos", volume: 480, trend: "-19%", cpc: 593 },
    { keyword: "tratamientos para cabello rizado seco y maltratado", volume: 480, trend: "-33%", cpc: 449 },
    { keyword: "shampoo de cebolla kaba", volume: 480, trend: "-64%", cpc: 289 },
    { keyword: "mascarillas para el cabello dañado", volume: 480, trend: "-81%", cpc: 0 },
    { keyword: "cabello maltratado", volume: 480, trend: "-35%", cpc: 0 },
    { keyword: "anyeluz shampoo de cebolla", volume: 480, trend: "0%", cpc: 83 },
    { keyword: "cuál es la mejor keratina para el cabello maltratado", volume: 480, trend: "-45%", cpc: 420 },
    { keyword: "cebolla para cabello", volume: 480, trend: "-35%", cpc: 0 },
    { keyword: "shampoo de anyeluz", volume: 480, trend: "0%", cpc: 42 },
    { keyword: "shampoo de romero anyeluz", volume: 480, trend: "-18%", cpc: 86 },
    { keyword: "shampoo romero anyeluz", volume: 480, trend: "-34%", cpc: 154 },
    { keyword: "productos para hidratar el cabello seco y maltratado", volume: 390, trend: "-56%", cpc: 479 },
    { keyword: "mascarilla para puntas secas y maltratadas", volume: 390, trend: "-65%", cpc: 754 },
    { keyword: "ampolletas para el cabello maltratado", volume: 390, trend: "-46%", cpc: 445 },
    { keyword: "crema sedal", volume: 390, trend: "23%", cpc: 0 },
    { keyword: "crema para peinar sedal rizos", volume: 390, trend: "-19%", cpc: 188 },
    { keyword: "crema sedal rizos", volume: 390, trend: "-34%", cpc: 186 },
    { keyword: "skala para cabello seco y maltratado", volume: 390, trend: "-81%", cpc: 0 },
    { keyword: "etniker crema para peinar", volume: 390, trend: "50%", cpc: 57 },
    { keyword: "cremas de peinar pantene", volume: 390, trend: "-18%", cpc: 0 },
    { keyword: "cremas pantene para peinar", volume: 390, trend: "-18%", cpc: 390 },
    { keyword: "la cebolla sirve para el cabello", volume: 390, trend: "-19%", cpc: 0 },
    { keyword: "milagros termoprotector", volume: 390, trend: "0%", cpc: 50 },
    { keyword: "sedal cremas", volume: 390, trend: "23%", cpc: 0 },
    { keyword: "shampoo anyeluz cebolla", volume: 390, trend: "-18%", cpc: 92 },
    { keyword: "shampoo lissia con biotina", volume: 390, trend: "-46%", cpc: 0 },
    { keyword: "termo protector milagros", volume: 390, trend: "0%", cpc: 36 },
    { keyword: "termoprotector anyeluz", volume: 390, trend: "-19%", cpc: 253 },
    { keyword: "termoprotector de milagros", volume: 390, trend: "49%", cpc: 35 },
    { keyword: "shampoo de aguacate", volume: 320, trend: "-19%", cpc: 830 },
    { keyword: "tengo el pelo muy seco y dañado que puedo hacer", volume: 320, trend: "-73%", cpc: 341 },
    { keyword: "crema de peinar rizos", volume: 320, trend: "50%", cpc: 608 },
    { keyword: "kaba shampoo de cebolla", volume: 320, trend: "-76%", cpc: 305 },
    { keyword: "plancha de aguacate original", volume: 320, trend: "-45%", cpc: 46 },
    { keyword: "crema para rizos skala", volume: 320, trend: "-56%", cpc: 55 },
    { keyword: "shampoo kaba cebolla", volume: 320, trend: "-66%", cpc: 441 },
    { keyword: "anyeluz cebolla", volume: 320, trend: "0%", cpc: 119 },
    { keyword: "anyeluz shampoo cebolla", volume: 320, trend: "0%", cpc: 148 },
    { keyword: "cremas de peinar rizos", volume: 320, trend: "50%", cpc: 608 },
    { keyword: "cremas para rizos skala", volume: 320, trend: "-56%", cpc: 55 },
    { keyword: "para q sirve el shampoo de cebolla", volume: 320, trend: "-33%", cpc: 0 },
    { keyword: "para que sirve el shampoo de cebolla", volume: 320, trend: "-33%", cpc: 0 },
    { keyword: "peinado para crespos", volume: 320, trend: "-18%", cpc: 0 },
    { keyword: "tratamiento para cabello seco maltratado y quebradizo", volume: 260, trend: "0%", cpc: 453 },
    { keyword: "cabello seco y maltratado", volume: 260, trend: "-35%", cpc: 477 },
    { keyword: "mascarilla para cabello maltratado", volume: 260, trend: "-73%", cpc: 0 },
    { keyword: "crema para peinar pantene rizos", volume: 260, trend: "-19%", cpc: 149 },
    { keyword: "shampoo con cebolla", volume: 260, trend: "-21%", cpc: 663 },
    { keyword: "tratamientos para el pelo caseros", volume: 260, trend: "0%", cpc: 0 },
    { keyword: "cabello dañado", volume: 260, trend: "0%", cpc: 0 },
    { keyword: "mascarillas de aguacate para el cabello maltratado", volume: 260, trend: "-35%", cpc: 0 },
    { keyword: "shampoo de cebolla babaria", volume: 260, trend: "-48%", cpc: 794 },
    { keyword: "anyeluz de cebolla", volume: 260, trend: "-57%", cpc: 31 },
    { keyword: "anyeluz shampoo romero", volume: 260, trend: "-33%", cpc: 96 },
    { keyword: "shampoo anyeluz de cebolla", volume: 260, trend: "-33%", cpc: 58 },
    { keyword: "shampoo de cebolla anyeluz testimonios", volume: 260, trend: "-67%", cpc: 0 },
    { keyword: "shampoo de cebolla sin sal", volume: 260, trend: "-58%", cpc: 243 },
    { keyword: "terapia capilar anyeluz", volume: 260, trend: "-36%", cpc: 0 },
    { keyword: "tratamiento casero para pelo", volume: 260, trend: "0%", cpc: 0 },
    { keyword: "tratamiento para el pelo casero", volume: 260, trend: "0%", cpc: 0 },
    { keyword: "tratamiento para pelo casero", volume: 260, trend: "0%", cpc: 0 },
    { keyword: "tratamientos caseros para pelo", volume: 260, trend: "0%", cpc: 0 },
    { keyword: "shampoo de aloe vera", volume: 210, trend: "-18%", cpc: 0 },
    { keyword: "tratamiento para cabello decolorado y chicloso", volume: 210, trend: "-56%", cpc: 441 },
    { keyword: "mascarillas caseras para hidratar el cabello seco y maltratado", volume: 210, trend: "-20%", cpc: 0 },
    { keyword: "productos para definir rizos", volume: 210, trend: "-35%", cpc: 665 },
    { keyword: "mejor crema para definir rizos", volume: 210, trend: "-19%", cpc: 261 },
    { keyword: "shampoo de sabila", volume: 210, trend: "-18%", cpc: 0 },
    { keyword: "crema pantene", volume: 210, trend: "-33%", cpc: 0 },
    { keyword: "mascarillas para hidratar el cabello seco y maltratado naturales", volume: 210, trend: "-57%", cpc: 0 },
    { keyword: "herbal essences mango", volume: 210, trend: "-57%", cpc: 357 },
    { keyword: "tratamientos caseros para cabello rizado seco y maltratado", volume: 210, trend: "-46%", cpc: 403 },
    { keyword: "mascarilla casera para cabello seco y maltratado", volume: 210, trend: "-36%", cpc: 0 },
    { keyword: "mejor termoprotector para el cabello", volume: 210, trend: "-33%", cpc: 475 },
    { keyword: "crema de peinar skala para rizos", volume: 210, trend: "-56%", cpc: 54 },
    { keyword: "crema de peinar sedal rizos", volume: 210, trend: "-19%", cpc: 0 },
    { keyword: "capibell cebolla", volume: 210, trend: "-50%", cpc: 0 },
    { keyword: "capibell cebolla y biotina es bueno", volume: 210, trend: "-88%", cpc: 0 },
    { keyword: "mascarilla casera para hidratar el cabello seco y maltratado", volume: 210, trend: "-20%", cpc: 0 },
    { keyword: "mascarillas caseras para el cabello maltratado y seco", volume: 210, trend: "-36%", cpc: 0 },
    { keyword: "mejor termoprotector para cabello", volume: 210, trend: "-33%", cpc: 475 },
    { keyword: "shampoo de aloe", volume: 210, trend: "-18%", cpc: 0 },
    { keyword: "shampoo gusano de seda anyeluz", volume: 210, trend: "-36%", cpc: 0 },
    { keyword: "shampoo kaba para que sirve", volume: 210, trend: "-59%", cpc: 0 },
    { keyword: "tonico anticaida anyeluz", volume: 210, trend: "-79%", cpc: 0 },
    { keyword: "crema de rizos", volume: 170, trend: "22%", cpc: 389 },
    { keyword: "crema rizos", volume: 170, trend: "50%", cpc: 223 },
    { keyword: "shampoo de cebolla onions", volume: 170, trend: "50%", cpc: 0 },
    { keyword: "keratina casera para cabello seco y maltratado", volume: 170, trend: "21%", cpc: 0 },
    { keyword: "shampoo cebolla kaba", volume: 170, trend: "-58%", cpc: 444 },
    { keyword: "johnson crema para peinar rizos niñas", volume: 170, trend: "-71%", cpc: 0 },
    { keyword: "crema para pelo rizo", volume: 170, trend: "24%", cpc: 670 },
    { keyword: "acondicionador de cebolla anyeluz", volume: 170, trend: "-36%", cpc: 0 },
    { keyword: "beneficios del shampoo de cebolla", volume: 170, trend: "-56%", cpc: 0 },
    { keyword: "blindagem anyeluz", volume: 170, trend: "-19%", cpc: 56 },
    { keyword: "crema para peinar crespos", volume: 170, trend: "0%", cpc: 533 },
    { keyword: "salon line crema para peinar rizos", volume: 170, trend: "189%", cpc: 53 },
    { keyword: "savital rizos", volume: 170, trend: "21%", cpc: 599 },
    { keyword: "shampoo aloe vera anyeluz", volume: 170, trend: "-36%", cpc: 0 },
    { keyword: "shampoo de cebolla beneficios", volume: 170, trend: "-56%", cpc: 0 },
    { keyword: "shampoo de cebolla lissia", volume: 170, trend: "-56%", cpc: 0 },
    { keyword: "shampoo de cebolla onion", volume: 170, trend: "50%", cpc: 0 },
    { keyword: "termoprotector capilar", volume: 140, trend: "0%", cpc: 429 },
    { keyword: "mejor producto para definir rizos", volume: 140, trend: "-58%", cpc: 498 },
    { keyword: "remedios caseros para el cabello seco y maltratado sin brillo", volume: 140, trend: "0%", cpc: 0 },
    { keyword: "tratamiento para cabello seco y con frizz", volume: 140, trend: "-47%", cpc: 488 },
    { keyword: "la mejor crema para peinar rizos", volume: 140, trend: "-18%", cpc: 459 },
    { keyword: "cantu crema para peinar", volume: 140, trend: "-33%", cpc: 157 },
    { keyword: "mejores cremas para peinar rizos", volume: 140, trend: "0%", cpc: 499 },
    { keyword: "sedal para rizos", volume: 140, trend: "-21%", cpc: 0 },
    { keyword: "sabila shampoo", volume: 140, trend: "-36%", cpc: 0 },
    { keyword: "novex crema de peinar", volume: 140, trend: "86%", cpc: 88 },
    { keyword: "mascarilla casera para el cabello seco y con frizz", volume: 140, trend: "-48%", cpc: 0 },
    { keyword: "mejores productos para definir rizos", volume: 140, trend: "-58%", cpc: 498 },
    { keyword: "shampoo sabila", volume: 140, trend: "-36%", cpc: 0 },
    { keyword: "crema para peinar skala para rizos", volume: 140, trend: "-47%", cpc: 163 },
    { keyword: "anyeluz shampoo de romero", volume: 140, trend: "25%", cpc: 0 },
    { keyword: "cabello reventado", volume: 140, trend: "-36%", cpc: 0 },
    { keyword: "crema para peinar rizos skala", volume: 140, trend: "53%", cpc: 293 },
    { keyword: "mascarilla de aguacate para el cabello seco y maltratado", volume: 140, trend: "-86%", cpc: 0 },
    { keyword: "mascarillas caseras para el cabello seco y con frizz", volume: 140, trend: "-48%", cpc: 0 },
    { keyword: "peinado de crespos", volume: 140, trend: "-35%", cpc: 0 },
    { keyword: "remedio casero para que salga cabello nuevo", volume: 140, trend: "-55%", cpc: 37 },
    { keyword: "sabila con shampoo", volume: 140, trend: "-36%", cpc: 0 },
    { keyword: "sabila en el shampoo", volume: 140, trend: "-36%", cpc: 0 },
    { keyword: "shampoo anyeluz precio", volume: 140, trend: "-55%", cpc: 0 },
    { keyword: "shampoo babaria cebolla", volume: 140, trend: "0%", cpc: 103 },
    { keyword: "shampoo etileya", volume: 140, trend: "-59%", cpc: 0 },
    { keyword: "shampoo gusano de seda lehit", volume: 140, trend: "-33%", cpc: 0 },
    { keyword: "shampoo lehit gusano de seda", volume: 140, trend: "-18%", cpc: 0 },
    { keyword: "shampoo y sabila", volume: 140, trend: "-36%", cpc: 0 },
    { keyword: "skala crema para peinar rizos", volume: 140, trend: "-50%", cpc: 208 },
    { keyword: "termoprotector kaba", volume: 140, trend: "-56%", cpc: 443 },
    { keyword: "termoprotector para el cabello dromatic", volume: 140, trend: "-78%", cpc: 0 },
    { keyword: "tio nacho anti daño", volume: 140, trend: "-22%", cpc: 0 },
    { keyword: "cremas para el pelo seco y con frizz", volume: 110, trend: "-43%", cpc: 0 },
    { keyword: "cremas para hidratar el cabello seco y maltratado", volume: 110, trend: "0%", cpc: 709 },
    { keyword: "skala crema para rizos", volume: 110, trend: "-73%", cpc: 63 },
    { keyword: "crema definidora de rizos", volume: 110, trend: "-35%", cpc: 596 },
    { keyword: "hair food aguacate", volume: 110, trend: "-44%", cpc: 807 },
    { keyword: "tratamiento cabello maltratado", volume: 110, trend: "-18%", cpc: 602 },
    { keyword: "crema pantene para rizos", volume: 110, trend: "-18%", cpc: 0 },
    { keyword: "mascarilla garnier aguacate", volume: 110, trend: "0%", cpc: 934 },
    { keyword: "proteínas para el cabello maltratado", volume: 110, trend: "-59%", cpc: 440 },
    { keyword: "el mejor tratamiento para cabello seco y maltratado", volume: 110, trend: "-57%", cpc: 0 },
    { keyword: "crema de peinar cantu", volume: 110, trend: "0%", cpc: 99 },
    { keyword: "mascarillas para cabello rizado seco y maltratado", volume: 110, trend: "-20%", cpc: 571 },
    { keyword: "crema de peinar pantene rizos", volume: 110, trend: "-36%", cpc: 0 },
    { keyword: "remedio casero para el cabello maltratado", volume: 110, trend: "-20%", cpc: 0 },
    { keyword: "crema para peinar rizos johnson", volume: 110, trend: "50%", cpc: 0 },
    { keyword: "el mejor termoprotector para el cabello", volume: 110, trend: "-21%", cpc: 349 },
    { keyword: "babaria shampoo de cebolla", volume: 110, trend: "40%", cpc: 244 },
    { keyword: "shampoo aguacate", volume: 110, trend: "27%", cpc: 1512 },
    { keyword: "kaba shampoo precio", volume: 110, trend: "-64%", cpc: 145 },
    { keyword: "capibell cebolla y biotina", volume: 110, trend: "-20%", cpc: 0 },
    { keyword: "capibell cebolla y biotina para que sirve", volume: 110, trend: "-86%", cpc: 0 },
    { keyword: "champu de cebolla anyeluz", volume: 110, trend: "40%", cpc: 106 },
    { keyword: "champú de cebolla anyeluz", volume: 110, trend: "40%", cpc: 106 },
    { keyword: "konzil rizos", volume: 110, trend: "-59%", cpc: 0 },
    { keyword: "peinado de rizo", volume: 110, trend: "24%", cpc: 0 },
    { keyword: "peinado de rizos", volume: 110, trend: "24%", cpc: 0 },
    { keyword: "remedios casero para cabello maltratado", volume: 110, trend: "-20%", cpc: 0 },
    { keyword: "savital para rizos", volume: 110, trend: "0%", cpc: 1056 },
    { keyword: "shampoo aguacate anyeluz", volume: 110, trend: "-50%", cpc: 0 },
    { keyword: "shampoo capibell sin sal", volume: 110, trend: "-71%", cpc: 0 },
    { keyword: "shampoo de cebolla anyeluz precio", volume: 110, trend: "-82%", cpc: 0 },
    { keyword: "shampoo de cebolla para q sirve", volume: 110, trend: "0%", cpc: 0 },
    { keyword: "shampoo de cebolla y romero", volume: 110, trend: "-18%", cpc: 462 },
    { keyword: "skala para definir rizos", volume: 110, trend: "-67%", cpc: 0 },
    { keyword: "termoprotector milagros precio", volume: 110, trend: "-58%", cpc: 20 },
    { keyword: "termoprotector para el cabello para que sirve", volume: 110, trend: "-64%", cpc: 289 },
    { keyword: "shampoo aloe vera", volume: 90, trend: "29%", cpc: 0 },
    { keyword: "champu cebolla", volume: 90, trend: "-20%", cpc: 249 },
    { keyword: "tratamiento para cabello maltratado y puntas abiertas", volume: 90, trend: "-78%", cpc: 455 },
    { keyword: "tratamiento para pelo rizado", volume: 90, trend: "-36%", cpc: 210 },
    { keyword: "mascarillas para pelo seco", volume: 90, trend: "-40%", cpc: 203 },
    { keyword: "champu de cebolla babaria", volume: 90, trend: "-57%", cpc: 0 },
    { keyword: "crema para peinar cantu", volume: 90, trend: "-36%", cpc: 110 },
    { keyword: "tratamientos naturales para cabello rizado seco y maltratado", volume: 90, trend: "-100%", cpc: 0 },
    { keyword: "shampoo kaba de cebolla", volume: 90, trend: "-18%", cpc: 459 },
    { keyword: "champu romero", volume: 90, trend: "22%", cpc: 842 },
    { keyword: "tratamiento natural para el cabello seco y maltratado", volume: 90, trend: "-86%", cpc: 0 },
    { keyword: "crema para peinar rizos niñas", volume: 90, trend: "-20%", cpc: 402 },
    { keyword: "pantene para rizos", volume: 90, trend: "-18%", cpc: 0 },
    { keyword: "crema sedal para rizos", volume: 90, trend: "0%", cpc: 0 },
    { keyword: "ampolletas para el cabello chicloso", volume: 90, trend: "-73%", cpc: 0 },
    { keyword: "cabello maltratado por decoloración", volume: 90, trend: "-56%", cpc: 357 },
    { keyword: "crema para peinar rizos para bebés", volume: 90, trend: "-43%", cpc: 182 },
    { keyword: "tratamiento casero para cabello maltratado", volume: 90, trend: "-44%", cpc: 0 },
    { keyword: "tratamiento wella para cabello maltratado", volume: 90, trend: "0%", cpc: 332 },
    { keyword: "shampoo garnier aguacate", volume: 90, trend: "29%", cpc: 257 },
    { keyword: "tratamiento para cabello afro maltratado", volume: 90, trend: "-43%", cpc: 0 },
    { keyword: "pelo maltratado", volume: 90, trend: "-22%", cpc: 0 },
    { keyword: "tónico capilar anticaída", volume: 90, trend: "125%", cpc: 802 },
    { keyword: "remedios caseros para el cabello chicloso", volume: 90, trend: "-44%", cpc: 0 },
    { keyword: "champu de cebolla para que sirve", volume: 90, trend: "-50%", cpc: 0 },
    { keyword: "aceite para el cabello seco y maltratado", volume: 90, trend: "-57%", cpc: 440 },
    { keyword: "tratamiento casero para el cabello maltratado", volume: 90, trend: "-44%", cpc: 0 },
    { keyword: "acondicionador cebolla anyeluz", volume: 90, trend: "22%", cpc: 0 },
    { keyword: "anyeluz shampoo precio", volume: 90, trend: "-50%", cpc: 0 },
    { keyword: "cabello maltratado por decoloracion", volume: 90, trend: "-56%", cpc: 357 },
    { keyword: "cachos crema de peinar", volume: 90, trend: "-18%", cpc: 0 },
    { keyword: "cebolla en el shampoo", volume: 90, trend: "-50%", cpc: 0 },
    { keyword: "crema cantú", volume: 90, trend: "0%", cpc: 146 },
    { keyword: "crema para definir rizos afro", volume: 90, trend: "-44%", cpc: 255 },
    { keyword: "crema para peinar muss rizos", volume: 90, trend: "0%", cpc: 0 },
    { keyword: "crema para peinar savital rizos", volume: 90, trend: "29%", cpc: 601 },
    { keyword: "crema sedal rizos precio", volume: 90, trend: "-64%", cpc: 0 },
    { keyword: "diplona tonico capilar anticaida", volume: 90, trend: "2500%", cpc: 593 },
    { keyword: "masaje casero para cabello maltratado", volume: 90, trend: "0%", cpc: 0 },
    { keyword: "muss recamier rizos", volume: 90, trend: "-20%", cpc: 0 },
    { keyword: "pelos dañados", volume: 90, trend: "-22%", cpc: 0 },
    { keyword: "pilofast tonico", volume: 90, trend: "-80%", cpc: 0 },
    { keyword: "savital crema para peinar rizos", volume: 90, trend: "22%", cpc: 909 },
    { keyword: "shampoo anyeluz gusano de seda", volume: 90, trend: "-29%", cpc: 0 },
    { keyword: "shampoo cebolla babaria", volume: 90, trend: "80%", cpc: 0 },
    { keyword: "shampoo con romero anyeluz", volume: 90, trend: "-56%", cpc: 92 },
    { keyword: "shampoo lehit cebolla", volume: 90, trend: "-43%", cpc: 0 },
    { keyword: "shampoo lissia cebolla", volume: 90, trend: "-43%", cpc: 0 },
    { keyword: "shampoo milagros cebolla", volume: 90, trend: "255%", cpc: 42 },
    { keyword: "shampoo versatil cebolla", volume: 90, trend: "-29%", cpc: 0 },
    { keyword: "shampoo y acondicionador anyeluz", volume: 90, trend: "-36%", cpc: 59 },
    { keyword: "skala rizos definidos", volume: 90, trend: "0%", cpc: 39 },
    { keyword: "termoprotector para el cabello lissia", volume: 90, trend: "133%", cpc: 0 },
    { keyword: "termoprotector para el cabello sobre", volume: 90, trend: "-19%", cpc: 0 },
    { keyword: "tratamiento para el pelo rizo", volume: 90, trend: "-36%", cpc: 210 },
    { keyword: "tratamientos caseros para cabellos maltratados", volume: 90, trend: "-44%", cpc: 0 },
    { keyword: "tratamientos para pelo rizo", volume: 90, trend: "-36%", cpc: 210 },
    { keyword: "vitalher shampoo", volume: 90, trend: "-18%", cpc: 0 },
    { keyword: "tónico anticaída", volume: 70, trend: "25%", cpc: 462 },
    { keyword: "protector termico cabello", volume: 70, trend: "29%", cpc: 269 },
    { keyword: "mejor tratamiento para el cabello seco y maltratado", volume: 70, trend: "-71%", cpc: 532 },
    { keyword: "tratamiento para cabello muy maltratado por decoloración", volume: 70, trend: "-80%", cpc: 392 },
    { keyword: "tratamiento intensivo para cabello seco y maltratado", volume: 70, trend: "-33%", cpc: 459 },
    { keyword: "mascarilla para hidratar el pelo", volume: 70, trend: "-18%", cpc: 582 },
    { keyword: "termo protector para cabello", volume: 70, trend: "-18%", cpc: 282 },
    { keyword: "mejor protector de calor para cabello", volume: 70, trend: "-29%", cpc: 733 },
    { keyword: "reparar cabello dañado por decoloración", volume: 70, trend: "0%", cpc: 406 },
    { keyword: "productos para el cabello maltratado", volume: 70, trend: "-33%", cpc: 862 },
    { keyword: "tratamiento para cabello reseco y maltratado", volume: 70, trend: "-25%", cpc: 466 },
    { keyword: "kérastase para cabello seco y maltratado", volume: 70, trend: "0%", cpc: 153 },
    { keyword: "crema para rizos profesional", volume: 70, trend: "0%", cpc: 293 },
    { keyword: "tratamiento loreal para cabello maltratado", volume: 70, trend: "40%", cpc: 330 },
    { keyword: "tratamiento para cabello maltratado por decoloración", volume: 70, trend: "-80%", cpc: 442 },
    { keyword: "remedios caseros para cabello seco y maltratado", volume: 70, trend: "-33%", cpc: 0 },
    { keyword: "tratamiento para cabello quebradizo", volume: 70, trend: "-29%", cpc: 550 },
    { keyword: "ampolletas para cabello maltratado por decoloración", volume: 70, trend: "-78%", cpc: 560 },
    { keyword: "crema peinar rizos", volume: 70, trend: "-36%", cpc: 741 },
    { keyword: "crema para rizos hombre", volume: 70, trend: "-64%", cpc: 0 },
    { keyword: "hidratación para el cabello seco y maltratado", volume: 70, trend: "-56%", cpc: 455 },
    { keyword: "kaba shampoo cebolla", volume: 70, trend: "-57%", cpc: 406 },
    { keyword: "herbal essences crema para peinar rizos", volume: 70, trend: "0%", cpc: 211 },
    { keyword: "tratamiento para el cabello maltratado y reseco", volume: 70, trend: "-25%", cpc: 466 },
    { keyword: "crema para peinar para rizos", volume: 70, trend: "0%", cpc: 367 },
    { keyword: "extracto de cebolla", volume: 70, trend: "0%", cpc: 0 },
    { keyword: "mascarilla para cabello reseco y maltratado", volume: 70, trend: "-25%", cpc: 0 },
    { keyword: "tratamiento de aguacate para el cabello seco y maltratado", volume: 70, trend: "0%", cpc: 0 },
    { keyword: "tratamiento casero para cabello seco", volume: 70, trend: "-43%", cpc: 0 },
    { keyword: "q tratamiento es bueno para el cabello maltratado", volume: 70, trend: "-57%", cpc: 354 },
    { keyword: "remedio casero para el pelo", volume: 70, trend: "0%", cpc: 0 },
    { keyword: "ampolletas para el cabello maltratado alfaparf", volume: 70, trend: "320%", cpc: 0 },
    { keyword: "anyeluz gusano de seda", volume: 70, trend: "-22%", cpc: 0 },
    { keyword: "capibell cebolla opiniones", volume: 70, trend: "0%", cpc: 0 },
    { keyword: "cebolla morada en el shampoo", volume: 70, trend: "-20%", cpc: 0 },
    { keyword: "champú babaria", volume: 70, trend: "-40%", cpc: 0 },
    { keyword: "crema de peinar crespos", volume: 70, trend: "27%", cpc: 150 },
    { keyword: "crema de peinar savital para rizos", volume: 70, trend: "-71%", cpc: 0 },
    { keyword: "crema para peinar rizos savital", volume: 70, trend: "-29%", cpc: 0 },
    { keyword: "crema termoprotectora para el cabello", volume: 70, trend: "-56%", cpc: 627 },
    { keyword: "cremas activadoras de rizos", volume: 70, trend: "-36%", cpc: 68 },
    { keyword: "el shampoo kaba tiene sal", volume: 70, trend: "-64%", cpc: 0 },
    { keyword: "la mejor skala para rizos", volume: 70, trend: "125%", cpc: 0 },
    { keyword: "lissia cebolla", volume: 70, trend: "100%", cpc: 0 },
    { keyword: "lissia shampoo cebolla", volume: 70, trend: "-80%", cpc: 0 },
    { keyword: "los mejores termoprotectores para el cabello", volume: 70, trend: "-22%", cpc: 503 },
    { keyword: "mascarilla de mayonesa para el cabello maltratado", volume: 70, trend: "-57%", cpc: 0 },
    { keyword: "mejores tratamientos para el cabello seco y maltratado", volume: 70, trend: "-71%", cpc: 532 },
    { keyword: "muss crema de peinar rizos", volume: 70, trend: "33%", cpc: 0 },
    { keyword: "peinado curly", volume: 70, trend: "-36%", cpc: 0 },
    { keyword: "pelo rizado crema para peinar rizos para bebes", volume: 70, trend: "33%", cpc: 0 },
    { keyword: "precio de la crema skala para rizos", volume: 70, trend: "-67%", cpc: 293 },
    { keyword: "precio shampoo anyeluz", volume: 70, trend: "-25%", cpc: 25 },
    { keyword: "precio shampoo kaba", volume: 70, trend: "-73%", cpc: 253 },
    { keyword: "producto skala para rizos", volume: 70, trend: "-67%", cpc: 63 },
    { keyword: "remedio casero para cabello maltratado y seco", volume: 70, trend: "-33%", cpc: 0 },
    { keyword: "remedios casero para el cabello seco y maltratado", volume: 70, trend: "-33%", cpc: 0 },
    { keyword: "sedal rizos definidos precio", volume: 70, trend: "-40%", cpc: 0 },
    { keyword: "shampoo anyeluz aguacate", volume: 70, trend: "-57%", cpc: 0 },
    { keyword: "shampoo anyeluz aloe vera", volume: 70, trend: "0%", cpc: 0 },
    { keyword: "shampoo anyeluz de romero", volume: 70, trend: "-29%", cpc: 36 },
    { keyword: "shampoo anyeluz opiniones", volume: 70, trend: "0%", cpc: 0 },
    { keyword: "shampoo biotina lissia", volume: 70, trend: "-25%", cpc: 0 },
    { keyword: "shampoo capibell cebolla", volume: 70, trend: "-29%", cpc: 0 },
    { keyword: "shampoo cebolla lissia", volume: 70, trend: "-33%", cpc: 0 },
    { keyword: "shampoo de aguacate anyeluz", volume: 70, trend: "0%", cpc: 0 },
    { keyword: "shampoo de anyeluz de romero", volume: 70, trend: "-29%", cpc: 0 },
    { keyword: "shampoo de cebolla anyeluz donde comprar", volume: 70, trend: "-50%", cpc: 0 },
    { keyword: "shampoo de cebolla anyeluz para que sirve", volume: 70, trend: "-25%", cpc: 0 },
    { keyword: "shampoo de cebolla capibell", volume: 70, trend: "-20%", cpc: 0 },
    { keyword: "shampoo de cebolla de anyeluz", volume: 70, trend: "40%", cpc: 26 },
    { keyword: "shampoo de cebolla lehit", volume: 70, trend: "-71%", cpc: 0 },
    { keyword: "shampoo de cebolla lissia beneficios", volume: 70, trend: "-67%", cpc: 0 },
    { keyword: "shampoo de cebolla natural sant", volume: 70, trend: "-43%", cpc: 0 },
    { keyword: "shampoo de cebolla onions precio", volume: 70, trend: "-86%", cpc: 0 },
    { keyword: "shampoo gusano de seda sin sal", volume: 70, trend: "-60%", cpc: 0 },
    { keyword: "shampoo milagros de cebolla", volume: 70, trend: "420%", cpc: 37 },
    { keyword: "shampoo muss aguacate", volume: 70, trend: "120%", cpc: 435 },
    { keyword: "termo protector anyeluz", volume: 70, trend: "-36%", cpc: 37 },
    { keyword: "termoprotector lissia", volume: 70, trend: "-55%", cpc: 0 },
    { keyword: "termoprotector para planchar el cabello", volume: 70, trend: "29%", cpc: 473 },
    { keyword: "tonico anti caida", volume: 70, trend: "25%", cpc: 462 },
    { keyword: "tratamiento de cebolla anyeluz", volume: 70, trend: "-29%", cpc: 0 },
    { keyword: "tratamiento para cabello maltratado por decoloracion", volume: 70, trend: "-80%", cpc: 442 },
    { keyword: "tratamiento para el pelo crespo", volume: 70, trend: "0%", cpc: 558 },
    { keyword: "tratamientos para el pelo crespo", volume: 70, trend: "0%", cpc: 558 },
    { keyword: "reparador de cabello", volume: 50, trend: "-29%", cpc: 728 },
    { keyword: "los mejores productos para el cabello seco y maltratado", volume: 50, trend: "-67%", cpc: 0 },
    { keyword: "tratamiento para cabello dañado", volume: 50, trend: "-40%", cpc: 550 },
    { keyword: "termo protector cabello", volume: 50, trend: "22%", cpc: 326 },
    { keyword: "cremas para el cabello seco y maltratado", volume: 50, trend: "-40%", cpc: 478 },
    { keyword: "crema para peinar cabello rizado", volume: 50, trend: "40%", cpc: 795 },
    { keyword: "protector calor cabello", volume: 50, trend: "-44%", cpc: 615 },
    { keyword: "mejor crema para rizos", volume: 50, trend: "67%", cpc: 537 },
    { keyword: "crema cantu para rizos", volume: 50, trend: "-36%", cpc: 110 },
    { keyword: "aceite para el cabello maltratado", volume: 50, trend: "0%", cpc: 520 },
    { keyword: "tratamiento para reparar el cabello", volume: 50, trend: "-60%", cpc: 359 },
    { keyword: "cabello reseco y maltratado", volume: 50, trend: "0%", cpc: 0 },
    { keyword: "cremas de peinar para cabello rizado", volume: 50, trend: "0%", cpc: 0 },
    { keyword: "crema rizos definidos", volume: 50, trend: "0%", cpc: 354 },
    { keyword: "las mejores cremas para peinar rizos", volume: 50, trend: "-40%", cpc: 546 },
    { keyword: "crema para peinar rizos natural", volume: 50, trend: "-33%", cpc: 185 },
    { keyword: "mascarilla para reparar el cabello", volume: 50, trend: "0%", cpc: 623 },
    { keyword: "productos loreal para el cabello maltratado", volume: 50, trend: "0%", cpc: 357 },
    { keyword: "aceite de coco para el cabello maltratado", volume: 50, trend: "-67%", cpc: 0 },
    { keyword: "crema pantene rizos", volume: 50, trend: "40%", cpc: 0 },
    { keyword: "cabello dañado por decoloracion", volume: 50, trend: "-25%", cpc: 0 },
    { keyword: "tio nacho aloe vera", volume: 50, trend: "0%", cpc: 0 },
    { keyword: "mascarillas para hidratar el cabello seco y maltratado rizado", volume: 50, trend: "-25%", cpc: 0 },
    { keyword: "productos alfaparf para cabello maltratado", volume: 50, trend: "-64%", cpc: 76 },
    { keyword: "pantene crema", volume: 50, trend: "0%", cpc: 0 },
    { keyword: "remedios caseros para el cabello quebradizo", volume: 50, trend: "0%", cpc: 0 },
    { keyword: "anyeluz aguacate", volume: 50, trend: "-29%", cpc: 0 },
    { keyword: "bulbo forte anticaida", volume: 50, trend: "-25%", cpc: 357 },
    { keyword: "cabello quemado por decoloracion", volume: 50, trend: "50%", cpc: 0 },
    { keyword: "cabello rizado como peinarlo", volume: 50, trend: "-40%", cpc: 0 },
    { keyword: "cebolla morada para el cabello en el shampoo", volume: 50, trend: "0%", cpc: 0 },
    { keyword: "cebolla para el cabello en el shampoo", volume: 50, trend: "0%", cpc: 0 },
    { keyword: "cebolla para el cabello testimonios", volume: 50, trend: "-67%", cpc: 0 },
    { keyword: "cebolla shampoo", volume: 50, trend: "-25%", cpc: 0 },
    { keyword: "crema brasileña para rizos", volume: 50, trend: "-43%", cpc: 0 },
    { keyword: "crema de pantene", volume: 50, trend: "-20%", cpc: 0 },
    { keyword: "crema de peinar konzil rizos", volume: 50, trend: "-75%", cpc: 0 },
    { keyword: "crema de peinar sedal rizos precio", volume: 50, trend: "-29%", cpc: 0 },
    { keyword: "crema de peinar skala para rizos precio", volume: 50, trend: "-75%", cpc: 0 },
    { keyword: "crema para peinar cabello crespo", volume: 50, trend: "-60%", cpc: 0 },
    { keyword: "crema para peinar konzil rizos", volume: 50, trend: "-20%", cpc: 0 },
    { keyword: "crema para peinar novex", volume: 50, trend: "67%", cpc: 72 },
    { keyword: "crema para peinar rizos lehit", volume: 50, trend: "-25%", cpc: 0 },
    { keyword: "crema para peinar sedal precio", volume: 50, trend: "-50%", cpc: 167 },
    { keyword: "crema para rizos savital", volume: 50, trend: "-29%", cpc: 0 },
    { keyword: "crema peinar sedal", volume: 50, trend: "0%", cpc: 0 },
    { keyword: "crema savital para rizos", volume: 50, trend: "100%", cpc: 0 },
    { keyword: "crema sedal verde", volume: 50, trend: "175%", cpc: 0 },
    { keyword: "crema skala rizos", volume: 50, trend: "22%", cpc: 0 },
    { keyword: "gusano de seda anyeluz", volume: 50, trend: "25%", cpc: 0 },
    { keyword: "kaba cebolla", volume: 50, trend: "-22%", cpc: 532 },
    { keyword: "mascarilla casera para cabello maltratado", volume: 50, trend: "0%", cpc: 0 },
    { keyword: "mascarilla para puntas secas y maltratadas caseras", volume: 50, trend: "-67%", cpc: 0 },
    { keyword: "mascarilla para puntas secas y maltratadas casero", volume: 50, trend: "-67%", cpc: 0 },
    { keyword: "para que sirve el shampoo de cebolla y biotina", volume: 50, trend: "-50%", cpc: 0 },
    { keyword: "q sirve para el cabello maltratado", volume: 50, trend: "-50%", cpc: 441 },
    { keyword: "repolarizaciones", volume: 50, trend: "25%", cpc: 0 },
    { keyword: "repolarización que es", volume: 50, trend: "25%", cpc: 0 },
    { keyword: "rizos crema", volume: 50, trend: "91%", cpc: 245 },
    { keyword: "rizos obedientes sedal", volume: 50, trend: "-40%", cpc: 0 },
    { keyword: "sabila y cebolla para el cabello", volume: 50, trend: "-100%", cpc: 0 },
    { keyword: "shampoo de ajo y cebolla", volume: 50, trend: "-80%", cpc: 0 },
    { keyword: "shampoo de cebolla casero", volume: 50, trend: "0%", cpc: 0 },
    { keyword: "shampoo de cebolla kaba precio", volume: 50, trend: "-75%", cpc: 259 },
    { keyword: "shampoo de cebolla y biotina", volume: 50, trend: "-33%", cpc: 0 },
    { keyword: "shampoo de cebolla y romero beneficios", volume: 50, trend: "-50%", cpc: 0 },
    { keyword: "shampoo de romero de anyeluz", volume: 50, trend: "0%", cpc: 0 },
    { keyword: "shampoo de romero y cebolla", volume: 50, trend: "25%", cpc: 0 },
    { keyword: "shampoo gusano de seda para que sirve", volume: 50, trend: "-25%", cpc: 0 },
    { keyword: "shampoo kaba es sin sal", volume: 50, trend: "-71%", cpc: 0 },
    { keyword: "shampoo kaba ingredientes", volume: 50, trend: "-86%", cpc: 0 },
    { keyword: "shampoo lehit cebolla opiniones", volume: 50, trend: "-67%", cpc: 0 },
    { keyword: "shampoo onions donde lo venden", volume: 50, trend: "-75%", cpc: 0 },
    { keyword: "shampoo vitalher cebolla", volume: 50, trend: "-67%", cpc: 0 },
    { keyword: "termo protector de cabello", volume: 50, trend: "-22%", cpc: 641 },
    { keyword: "termo protector para planchar el cabello", volume: 50, trend: "80%", cpc: 0 },
    { keyword: "termoprotector nikols", volume: 50, trend: "33%", cpc: 0 },
    { keyword: "termoprotector para el cabello precio", volume: 50, trend: "-67%", cpc: 0 },
    { keyword: "tricogen cebolla", volume: 50, trend: "-67%", cpc: 0 },
    { keyword: "versatil shampoo cebolla", volume: 50, trend: "-50%", cpc: 0 }
  ];

  // Función de categorización avanzada basada en tu lista
  const categorizeKeyword = (keyword) => {
    const k = keyword.toLowerCase();
    
    // 1. Marca Propia (Prioridad)
    if (k.includes('brujeria')) return 'Marca Propia';

    // 2. Transaccional (Dinero)
    if (k.includes('precio') || k.includes('comprar') || k.includes('venta') || k.includes('donde') || k.includes('mejor') || k.includes('kit')) return 'Transaccional';

    // 3. Marca Competencia (Los Gigantes)
    if (k.includes('anyeluz') || k.includes('kaba') || k.includes('sedal') || k.includes('pantene') || k.includes('loreal') || k.includes('milagros') || k.includes('skala') || k.includes('herbal') || k.includes('garnier') || k.includes('dove') || k.includes('tio nacho') || k.includes('recamier') || k.includes('muss') || k.includes('konzil') || k.includes('savital') || k.includes('nevada') || k.includes('remington') || k.includes('wella') || k.includes('johnson') || k.includes('lissia') || k.includes('capibell') || k.includes('lehit') || k.includes('babaria') || k.includes('etniker') || k.includes('novex') || k.includes('salon line') || k.includes('dromatic') || k.includes('alfaparf') || k.includes('kerastase') || k.includes('vitalher') || k.includes('nikols') || k.includes('tricogen')) return 'Marca Competencia';

    // 4. Necesidad / Dolor (El problema del usuario)
    if (k.includes('maltratado') || k.includes('caida') || k.includes('crecimiento') || k.includes('seco') || k.includes('quemado') || k.includes('chicloso') || k.includes('frizz') || k.includes('reparar') || k.includes('restaurar') || k.includes('anticaida') || k.includes('caspa') || k.includes('puntas') || k.includes('dañado') || k.includes('quebradizo') || k.includes('reventado')) return 'Necesidad/Dolor';

    // 5. Ingrediente (Nuestra arma principal)
    if (k.includes('cebolla') || k.includes('romero') || k.includes('aguacate') || k.includes('aloe') || k.includes('sabila') || k.includes('gusano') || k.includes('biotina') || k.includes('coco') || k.includes('argan') || k.includes('keratina') || k.includes('mayonesa')) return 'Ingrediente';

    // 6. Tipo de Producto (Genéricos)
    if (k.includes('shampoo') || k.includes('crema') || k.includes('tratamiento') || k.includes('tónico') || k.includes('mascarilla') || k.includes('rizos') || k.includes('crespos') || k.includes('termoprotector') || k.includes('ampolleta') || k.includes('repolarizacion') || k.includes('repolarizado') || k.includes('repolarizar') || k.includes('protector') || k.includes('plancha') || k.includes('peinado')) return 'Tipo de Producto';
    
    return 'Otros';
  };

  const enrichedData = useMemo(() => {
    return rawData.map(item => ({
      ...item,
      category: categorizeKeyword(item.keyword)
    }));
  }, []);

  const filteredData = useMemo(() => {
    let data = enrichedData.filter(item => 
      (activeCategory === 'Todas' || item.category === activeCategory) &&
      item.keyword.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (sortBy === 'volume') data.sort((a, b) => b.volume - a.volume);
    return data;
  }, [enrichedData, searchTerm, activeCategory, sortBy]);

  // Estrategia según la nueva categorización
  const getScore = (item) => {
    switch (item.category) {
      case 'Marca Propia': return { score: 'Defender', color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' };
      case 'Ingrediente': return { score: 'Atacar (Foco)', color: 'text-purple-400 bg-purple-500/10 border-purple-500/30' };
      case 'Necesidad/Dolor': return { score: 'Solucionar (AIO)', color: 'text-pink-400 bg-pink-500/10 border-pink-500/30' };
      case 'Transaccional': return { score: 'Convertir', color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30' };
      case 'Marca Competencia': return { score: 'Monitorear/Comparar', color: 'text-red-400 bg-red-500/10 border-red-500/30' };
      default: return { score: 'Posicionar', color: 'text-gray-400 bg-gray-500/10 border-gray-500/30' };
    }
  };

  useEffect(() => window.scrollTo(0, 0), []);

  const Logo = () => (
    <Link to="/" className="flex items-center gap-2 group cursor-pointer">
      <div className="relative w-8 h-8 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full text-purple-400 drop-shadow-[0_0_8px_rgba(192,132,252,0.6)]">
          <path d="M50 10 L85 90 L70 90 L50 40 L30 90 L15 90 Z" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="50" cy="15" r="4" fill="currentColor" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold tracking-tight text-white leading-none">ALEJO<span className="text-gray-400">MORENO</span><span className="text-purple-400">.ai</span></span>
      </div>
    </Link>
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-purple-500/30 selection:text-purple-200">
      
      {/* Header */}
      <nav className="fixed w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-white/5 py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Logo />
          <Link to="/" className="text-sm font-medium hover:text-purple-400 transition-colors flex items-center gap-2">
             <ArrowRight className="rotate-180" size={16} /> Volver al Inicio
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-12 px-6 container mx-auto text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] -z-10" />
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
            <span className="text-xs font-bold tracking-wide uppercase text-purple-400">Estrategia Q1 2026</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Brujería Capilar: <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Dominio por Ingrediente y Necesidad</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
          Análisis profundo de más de 3,000 keywords. La estrategia es clara: atacar la intención de búsqueda (Ingredientes y Problemas) donde los gigantes son vulnerables.
        </p>
      </div>

      {/* Tabs */}
      <div className="container mx-auto px-6 mb-12">
        <div className="flex flex-wrap justify-center gap-2 p-1 bg-slate-900/50 backdrop-blur rounded-2xl border border-white/5 max-w-fit mx-auto">
          {['market', 'journey', 'execution'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-xl font-semibold transition-all text-sm ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.3)]'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab === 'market' && 'El Caldero de Data (Completo)'}
              {tab === 'journey' && 'El Embudo Mágico'}
              {tab === 'execution' && 'Plan del Hechizo'}
            </button>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 pb-24">
        <div className="bg-slate-900/50 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-50"></div>

          {/* TAB 1: MARKET DATA (EL CALDERO) */}
          {activeTab === 'market' && (
            <div className="animate-fade-in-up">
              <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-white/10 pb-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2 text-white">El Caldero de Data (+3000 Keywords)</h2>
                  <p className="text-gray-400">Radiografía completa del mercado capilar en Google (Q1 2026).</p>
                </div>
                <div className="mt-4 md:mt-0 text-right">
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Mercado Total Mensual</p>
                  <div className="text-3xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">185.450</div>
                  <p className="text-xs text-emerald-400 font-bold mt-1">Brujería Capilar: +127% (Mayor crecimiento registrado)</p>
                </div>
              </div>

              {/* MARKET SHARE BY CITY (Actualizado) */}
              <div className="bg-slate-900/50 p-6 rounded-xl border border-white/10 mb-8">
                  <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-purple-900/20 p-2 rounded-lg text-purple-400 border border-purple-500/20">
                        <Map size={24} />
                      </div>
                      <h3 className="text-lg font-bold text-white">Distribución Geográfica del Mercado</h3>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                      <div className="bg-slate-950 p-4 rounded-lg border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.1)]">
                          <span className="block font-extrabold text-2xl text-purple-400">45%</span>
                          <span className="text-gray-400 text-xs uppercase font-bold">Bogotá</span>
                      </div>
                      <div className="bg-slate-950 p-4 rounded-lg border border-white/10">
                          <span className="block font-bold text-xl text-white">20%</span>
                          <span className="text-gray-500 text-xs uppercase">Medellín</span>
                      </div>
                      <div className="bg-slate-950 p-4 rounded-lg border border-white/10">
                          <span className="block font-bold text-xl text-white">15%</span>
                          <span className="text-gray-500 text-xs uppercase">Cali</span>
                      </div>
                      <div className="bg-slate-950 p-4 rounded-lg border border-white/10">
                          <span className="block font-bold text-lg text-white">10%</span>
                          <span className="text-gray-500 text-xs uppercase">Barranquilla</span>
                      </div>
                      <div className="bg-slate-950 p-4 rounded-lg border border-white/5">
                          <span className="block font-bold text-lg text-gray-400">10%</span>
                          <span className="text-gray-500 text-xs uppercase">Otros</span>
                      </div>
                  </div>
              </div>

              {/* Filtros (Nuevas Categorías) */}
              <div className="bg-slate-950 p-4 rounded-xl border border-white/10 mb-6 flex flex-col md:flex-row gap-4 justify-between items-center sticky top-0 z-10 shadow-xl">
                 <div className="relative w-full md:w-1/3">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                  <input 
                    type="text" 
                    placeholder="Buscar en +3000 keywords..." 
                    className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
                  {['Todas', 'Ingrediente', 'Necesidad/Dolor', 'Marca Competencia', 'Tipo de Producto', 'Transaccional'].map(cat => (
                    <button 
                      key={cat} 
                      onClick={() => setActiveCategory(cat)} 
                      className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap border transition-colors ${activeCategory === cat ? 'bg-purple-500 text-white border-purple-400' : 'bg-slate-900 text-gray-400 border-white/10 hover:border-purple-500/50 hover:text-purple-400'}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tabla Data Masiva */}
              <div className="bg-slate-950 rounded-xl border border-white/10 overflow-hidden mb-8">
                <div className="overflow-x-auto max-h-[600px] scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900">
                  <table className="w-full text-left border-collapse">
                    <thead className="sticky top-0 bg-slate-900 z-20 shadow-lg">
                      <tr>
                        <th className="p-4 text-xs font-bold text-gray-500 uppercase">Keyword</th>
                        <th className="p-4 text-xs font-bold text-gray-500 uppercase text-right cursor-pointer hover:text-purple-400" onClick={() => setSortBy('volume')}>Volumen Men.</th>
                        <th className="p-4 text-xs font-bold text-gray-500 uppercase text-center">Tendencia</th>
                        <th className="p-4 text-xs font-bold text-gray-500 uppercase text-right">CPC (COP)</th>
                        <th className="p-4 text-xs font-bold text-gray-500 uppercase text-center">Categoría</th>
                        <th className="p-4 text-xs font-bold text-purple-400 uppercase text-center">Acción Estratégica</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {filteredData.map((row, i) => {
                        const style = getScore(row);
                        return (
                          <tr key={i} className="hover:bg-white/5 transition-colors group cursor-default">
                            <td className="p-3 font-medium text-gray-300 group-hover:text-white transition-colors text-sm truncate max-w-[250px]" title={row.keyword}>{row.keyword}</td>
                            <td className="p-3 text-right font-mono text-purple-300 font-bold">{row.volume.toLocaleString()}</td>
                            <td className="p-3 text-center">
                               <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${row.trend.includes('-') ? 'text-red-400 bg-red-500/10' : (row.trend === '0%' || row.trend === 'N/A') ? 'text-gray-500 bg-white/5' : 'text-emerald-400 bg-emerald-500/10'}`}>
                                {row.trend}
                              </span>
                            </td>
                             <td className="p-3 text-right text-xs text-gray-400 font-mono">{row.cpc > 0 ? `$${parseInt(row.cpc).toLocaleString()}` : '-'}</td>
                            <td className="p-3 text-center"><span className="px-2 py-0.5 rounded-full text-[10px] bg-slate-800 text-gray-400 border border-white/5 uppercase tracking-wider">{row.category}</span></td>
                            <td className="p-3 text-center"><span className={`px-3 py-1 rounded-full text-[10px] font-bold border ${style.color} uppercase tracking-wide`}>{style.score}</span></td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                 <p className="text-xs text-gray-500 p-2 text-right bg-slate-900 font-mono">Mostrando {filteredData.length} keywords procesadas.</p>
              </div>
            </div>
          )}

          {/* TAB 2: JOURNEY (EL EMBUDO) */}
          {activeTab === 'journey' && (
             <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-12 text-center text-white">Los 3 Pilares del Ataque AIO</h2>
              <div className="grid md:grid-cols-3 gap-8">
                
                {/* Pilar 1 */}
                <div className="bg-slate-950 p-6 rounded-2xl border border-purple-500/30 transition-all group shadow-[0_0_20px_rgba(168,85,247,0.15)] hover:scale-105">
                  <div className="bg-purple-900/20 w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-6 text-purple-400 border border-purple-500/20 group-hover:rotate-6 transition-transform">
                    <Droplets size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white text-center">1. Dominio del Ingrediente</h3>
                  <p className="text-center text-gray-400 text-sm mb-4 leading-relaxed">
                    Miles buscan "shampoo de cebolla" (5.4k) o "romero" (1.4k), no marcas. Crearemos las páginas definitivas para cada ingrediente, superando la información superficial de la competencia.
                  </p>
                  <div className="text-center mt-4 flex flex-wrap justify-center gap-2">
                      <span className="text-[10px] px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">Cebolla</span>
                      <span className="text-[10px] px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">Romero</span>
                      <span className="text-[10px] px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">Gusano de Seda</span>
                  </div>
                </div>

                {/* Pilar 2 */}
                <div className="bg-slate-950 p-6 rounded-2xl border border-pink-500/30 relative transform md:-translate-y-4 shadow-[0_0_30px_rgba(236,72,153,0.2)] hover:scale-105 transition-all">
                  <div className="absolute -top-3 -right-3 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse shadow-lg">Foco AIO</div>
                  <div className="bg-pink-900/20 w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-6 text-pink-400 border border-pink-500/20 group-hover:rotate-6 transition-transform">
                    <HeartPulse size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white text-center">2. Resolver el Dolor</h3>
                  <p className="text-center text-gray-400 text-sm mb-4 leading-relaxed">
                    Atacaremos búsquedas de problemas reales: "cabello maltratado" (480), "caída del cabello" (12.1k), "cabello chicloso" (140). La IA premiará las respuestas profundas y útiles sobre los productos genéricos.
                  </p>
                </div>

                {/* Pilar 3 */}
                <div className="bg-slate-950 p-6 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all group hover:scale-105">
                  <div className="bg-slate-900 w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-6 text-purple-400 border border-white/5 group-hover:rotate-6 transition-transform">
                    <Zap size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white text-center">3. Flanqueo a la Competencia</h3>
                  <p className="text-center text-gray-400 text-sm mb-4 leading-relaxed">
                    Mientras Anyeluz y Kaba pelean por su nombre, nosotros capturaremos el tráfico de comparación ("anyeluz shampoo precio", "kaba opiniones") con contenido comparativo honesto que posicione a Brujería como la alternativa premium.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: EXECUTION (PLAN) */}
          {activeTab === 'execution' && (
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Hoja de Ruta: El Hechizo de 12 Meses</h2>
              
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-purple-500/20 before:to-transparent">
                
                {/* Phase 1 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-purple-500 bg-purple-500/20 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.5)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <span className="font-bold text-sm">1</span>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-950 p-6 rounded-xl border border-purple-500/30 shadow-lg hover:border-purple-500 transition-all">
                    <h3 className="font-bold text-white text-lg mb-2">Fase 1: Infraestructura & Defensa</h3>
                    <p className="text-sm text-gray-400 mb-4 italic">Mes 1-3: Preparar el terreno para la batalla.</p>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex gap-2"><Package size={16} className="text-purple-500"/> <strong>Landings de Ingrediente:</strong> Crear "La Guía Definitiva del Shampoo de Cebolla" (y Romero, Gusano de Seda).</li>
                      <li className="flex gap-2"><Shield size={16} className="text-purple-500"/> <strong>Defensa de Marca:</strong> Asegurar el #1 para "Brujería Capilar" (+127% tendencia).</li>
                      <li className="flex gap-2"><Activity size={16} className="text-purple-500"/> <strong>Feed de Datos:</strong> Estructurar catálogo para Google Shopping (Precios, Stock).</li>
                    </ul>
                  </div>
                </div>

                {/* Phase 2 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-pink-500 bg-pink-500/20 text-pink-400 shadow-[0_0_15px_rgba(236,72,153,0.5)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <span className="font-bold text-sm">2</span>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-950 p-6 rounded-xl border border-pink-500/30 shadow-lg hover:border-pink-500 transition-all">
                    <h3 className="font-bold text-white text-lg mb-2">Fase 2: Ataque AIO & Solución de Dolor</h3>
                    <p className="text-sm text-gray-400 mb-4 italic">Mes 4-8: Interceptar la intención de búsqueda.</p>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex gap-2"><Zap size={16} className="text-pink-500"/> <strong>Contenido de Dolor:</strong> Artículos profundos sobre "Cómo recuperar cabello chicloso" y "Tratamientos para caída".</li>
                      <li className="flex gap-2"><Zap size={16} className="text-pink-500"/> <strong>Campañas Shopping Inteligentes:</strong> Atacar keywords transaccionales y de ingrediente con ROAS objetivo.</li>
                      <li className="flex gap-2"><Zap size={16} className="text-pink-500"/> <strong>Comparativas:</strong> Crear contenido "Brujería vs. Competencia" para capturar tráfico indeciso.</li>
                    </ul>
                  </div>
                </div>

                 {/* Phase 3 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-emerald-500 bg-emerald-500/20 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.5)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <span className="font-bold text-sm">3</span>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-950 p-6 rounded-xl border border-emerald-500/30 shadow-lg hover:border-emerald-500 transition-all">
                    <h3 className="font-bold text-white text-lg mb-2">Fase 3: Consolidación & LTV</h3>
                    <p className="text-sm text-gray-400 mb-4 italic">Mes 9-12: Fidelizar la magia.</p>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex gap-2"><Sparkles size={16} className="text-emerald-500"/> <strong>Rituales Recurrentes:</strong> Fomentar la compra de kits y suscripciones.</li>
                      <li className="flex gap-2"><Sparkles size={16} className="text-emerald-500"/> <strong>Expansión de Catálogo:</strong> Identificar nuevos ingredientes en tendencia (ej. Biotina, Argán) para lanzar productos.</li>
                    </ul>
                  </div>
                </div>

              </div>
              
               <div className="mt-16 bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-3xl border border-purple-500/20 shadow-[0_0_40px_rgba(168,85,247,0.1)] max-w-2xl mx-auto text-center relative overflow-hidden">
                 <div className="absolute inset-0 bg-purple-600/5 blur-[50px] -z-10"></div>
                <p className="text-sm text-purple-400 uppercase font-bold tracking-wide mb-4">Inversión para Dominar el Mercado</p>
                <div className="flex items-center justify-center gap-2 my-4">
                  <span className="text-5xl font-extrabold text-white drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">3.000€</span>
                  <span className="text-xl text-gray-500 self-end mb-2">/mes</span>
                </div>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed max-w-lg mx-auto">Contrato anual. Incluye desarrollo de landings AIO, estrategia de contenidos, gestión de campañas (Google/Meta) y optimización continua de tasa de conversión (CRO).</p>
                <a href="https://wa.me/34655328878?text=Acepto%20el%20reto%20Brujeria%20Capilar%20Q1%202026" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-12 py-4 rounded-full font-bold transition-all shadow-lg shadow-purple-500/25 hover:scale-105 hover:shadow-purple-500/40">
                  <Zap size={20} /> Iniciar Transformación AIO
                </a>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default EstrategiaBrujeria;