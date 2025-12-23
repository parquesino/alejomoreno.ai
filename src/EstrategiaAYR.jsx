import React, { useState, useMemo, useEffect } from 'react';
import { Search, BrainCircuit, MessageSquare, ArrowRight, Lock, Eye, Target, Zap, BarChart3, Globe, TrendingUp, Map, Filter, DollarSign, Shield, Cpu, Info, ArrowDown, List, CheckCircle, Rocket, Handshake, Users, AlertTriangle, TrendingDown, MousePointerClick, ShoppingCart, Banknote, PenTool, Layout, Settings, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const EstrategiaAYR = () => {
  const [activeTab, setActiveTab] = useState('journey');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todas');
  const [sortBy, setSortBy] = useState('volume');

  // --- DATASET COMPLETO ---
  const rawData = [
    { keyword: "cerradura inteligente", volume: 27100, trend: "-18%", cpc: "3,44" },
    { keyword: "mirilla digital", volume: 8100, trend: "22%", cpc: "0,49" },
    { keyword: "cerradura invisible", volume: 4400, trend: "-19%", cpc: "5,92" },
    { keyword: "chapa inteligente", volume: 3600, trend: "0%", cpc: "0,60" },
    { keyword: "chapa electrica para puerta", volume: 3600, trend: "-18%", cpc: "0,35" },
    { keyword: "mirilla digital wifi", volume: 2900, trend: "19%", cpc: "0,49" },
    { keyword: "cerradura electrica para puerta", volume: 2900, trend: "-17%", cpc: "0,64" },
    { keyword: "cámara mirilla", volume: 2900, trend: "0%", cpc: "0,58" },
    { keyword: "cerradura con huella digital", volume: 2400, trend: "0%", cpc: "0,48" },
    { keyword: "cerradura yale digital", volume: 2400, trend: "21%", cpc: "0,50" },
    { keyword: "chapa electronica", volume: 1900, trend: "21%", cpc: "0,47" },
    { keyword: "cerradura electrónica", volume: 1600, trend: "0%", cpc: "1,17" },
    { keyword: "cerradura electrica puerta", volume: 1600, trend: "0%", cpc: "2,96" },
    { keyword: "cerradura wifi", volume: 1300, trend: "-12%", cpc: "1,67" },
    { keyword: "cerradura con codigo", volume: 1300, trend: "-38%", cpc: "1,05" },
    { keyword: "mirilla electronica", volume: 1300, trend: "0%", cpc: "0,51" },
    { keyword: "chapa con huella digital", volume: 1300, trend: "-19%", cpc: "0,26" },
    { keyword: "cerradura nuki", volume: 1000, trend: "0%", cpc: "3,98" },
    { keyword: "cerradura inteligente samsung", volume: 1000, trend: "0%", cpc: "0,52" },
    { keyword: "mirilla digital wifi grabadora con sensor de movimiento", volume: 1000, trend: "30%", cpc: "0,49" },
    { keyword: "cámara mirilla puerta", volume: 1000, trend: "0%", cpc: "0,60" },
    { keyword: "cerradura inteligente exterior", volume: 880, trend: "30%", cpc: "1,02" },
    { keyword: "chapas inteligentes para puertas", volume: 880, trend: "19%", cpc: "0,54" },
    { keyword: "cerradura smart", volume: 880, trend: "0%", cpc: "0,69" },
    { keyword: "mirilla inteligente", volume: 880, trend: "0%", cpc: "4,09" },
    { keyword: "cerraduras automaticas", volume: 880, trend: "-18%", cpc: "3,53" },
    { keyword: "cerradura eléctrica puerta exterior", volume: 720, trend: "0%", cpc: "1,07" },
    { keyword: "cerradura inteligente yale", volume: 720, trend: "14%", cpc: "0,48" },
    { keyword: "cerrojo electronico", volume: 720, trend: "-33%", cpc: "1,02" },
    { keyword: "cerradura inteligente xiaomi", volume: 720, trend: "108%", cpc: "2,07" },
    { keyword: "puertas inteligentes", volume: 720, trend: "-18%", cpc: "1,02" },
    { keyword: "mirilla digital leroy merlin", volume: 720, trend: "-33%", cpc: "0,49" },
    { keyword: "cerradura electrica yale", volume: 720, trend: "-18%", cpc: "0,49" },
    { keyword: "cerraduras digitales para puertas", volume: 590, trend: "23%", cpc: "0,78" },
    { keyword: "cerraduras inteligentes para puertas exteriores", volume: 590, trend: "0%", cpc: "1,04" },
    { keyword: "cerradura invisible con alarma", volume: 590, trend: "0%", cpc: "5,99" },
    { keyword: "cerradura inteligente para exterior", volume: 590, trend: "30%", cpc: "0,54" },
    { keyword: "cerradura smart lock", volume: 590, trend: "0%", cpc: "0,61" },
    { keyword: "chapa electrica para porton", volume: 590, trend: "22%", cpc: "0,14" },
    { keyword: "cerradura inteligente puerta exterior", volume: 480, trend: "-18%", cpc: "2,17" },
    { keyword: "cerradura inteligente wifi", volume: 480, trend: "0%", cpc: "2,33" },
    { keyword: "mirilla wifi", volume: 480, trend: "-19%", cpc: "0,77" },
    { keyword: "cerrojo inteligente", volume: 480, trend: "23%", cpc: "1,45" },
    { keyword: "cerradura con mando a distancia", volume: 480, trend: "-18%", cpc: "1,02" },
    { keyword: "smart lock cerradura", volume: 480, trend: "30%", cpc: "0,47" },
    { keyword: "cerradura con huella", volume: 480, trend: "-19%", cpc: "0,68" },
    { keyword: "nuki cerradura", volume: 390, trend: "23%", cpc: "3,99" },
    { keyword: "mejor cerradura inteligente", volume: 390, trend: "0%", cpc: "2,88" },
    { keyword: "cerradura con huella digital para exterior", volume: 390, trend: "-18%", cpc: "0,46" },
    { keyword: "cerradura inteligente con camara", volume: 390, trend: "-18%", cpc: "0,74" },
    { keyword: "cerradura inteligente nuki", volume: 390, trend: "-18%", cpc: "4,71" },
    { keyword: "cerradura antiokupa", volume: 390, trend: "-19%", cpc: "5,89" },
    { keyword: "cerrojo invisible", volume: 390, trend: "-18%", cpc: "5,91" },
    { keyword: "cerradura xiaomi", volume: 390, trend: "125%", cpc: "0,40" },
    { keyword: "cerradura portero automatico", volume: 390, trend: "0%", cpc: "0,62" },
    { keyword: "cerradura inteligente leroy merlin", volume: 390, trend: "-33%", cpc: "3,26" },
    { keyword: "int lock", volume: 390, trend: "-33%", cpc: "3,60" },
    { keyword: "nuki cerraduras", volume: 390, trend: "23%", cpc: "3,99" },
    { keyword: "mirilla para puerta con cámara", volume: 390, trend: "50%", cpc: "0,58" },
    { keyword: "cerradura wifi exterior", volume: 320, trend: "-18%", cpc: "1,02" },
    { keyword: "cerradura electronica samsung", volume: 320, trend: "0%", cpc: "0,58" },
    { keyword: "cerradura para puerta inteligente", volume: 320, trend: "23%", cpc: "0,45" },
    { keyword: "cerradura ayr", volume: 320, trend: "0%", cpc: "5,32" },
    { keyword: "mirilla digital ezviz", volume: 320, trend: "51%", cpc: "0,35" },
    { keyword: "cerradura electronica 12v", volume: 320, trend: "0%", cpc: "0,38" },
    { keyword: "ezviz mirilla digital", volume: 320, trend: "14%", cpc: "0,37" },
    { keyword: "mirilla de puerta con cámara", volume: 320, trend: "22%", cpc: "0,55" },
    { keyword: "cerraduras anti okupas leroy merlin", volume: 260, trend: "-46%", cpc: "3,04" },
    { keyword: "cerradura inteligente alexa", volume: 260, trend: "21%", cpc: "0,57" },
    { keyword: "cerradura bluetooth", volume: 260, trend: "0%", cpc: "2,67" },
    { keyword: "mirilla digital xiaomi", volume: 260, trend: "29%", cpc: "0,51" },
    { keyword: "cerradura inteligente tesa", volume: 260, trend: "0%", cpc: "4,94" },
    { keyword: "cámara mirilla puerta wifi", volume: 260, trend: "50%", cpc: "0,49" },
    { keyword: "chapa inteligente samsung", volume: 260, trend: "-33%", cpc: "0,33" },
    { keyword: "cerradura con camara", volume: 260, trend: "50%", cpc: "0,64" },
    { keyword: "cerradura inteligente amazon", volume: 260, trend: "0%", cpc: "3,25" },
    { keyword: "mirilla digital yale", volume: 260, trend: "24%", cpc: "0,58" },
    { keyword: "cerradura con control remoto", volume: 260, trend: "0%", cpc: "1,12" },
    { keyword: "leroy merlin mirilla digital", volume: 260, trend: "22%", cpc: "0,49" },
    { keyword: "cerradura anti okupas", volume: 210, trend: "22%", cpc: "5,89" },
    { keyword: "cerraduras inteligentes wifi", volume: 210, trend: "-18%", cpc: "3,47" },
    { keyword: "cerraduras para hoteles", volume: 210, trend: "21%", cpc: "1,98" },
    { keyword: "cerradura digital puerta", volume: 210, trend: "-19%", cpc: "0,90" },
    { keyword: "yale cerradura inteligente", volume: 210, trend: "23%", cpc: "1,27" },
    { keyword: "cerraduras con codigo para puertas", volume: 210, trend: "-21%", cpc: "1,20" },
    { keyword: "cerradura código puerta exterior", volume: 210, trend: "0%", cpc: "1,00" },
    { keyword: "mirilla digital wifi xiaomi", volume: 210, trend: "40%", cpc: "0,50" },
    { keyword: "mirilla electronica wifi", volume: 210, trend: "21%", cpc: "0,62" },
    { keyword: "cerradura homekit", volume: 210, trend: "-18%", cpc: "1,02" },
    { keyword: "mirilla digital ezviz cp4", volume: 210, trend: "-19%", cpc: "0,37" },
    { keyword: "cerradura inteligente tuya", volume: 210, trend: "-18%", cpc: "0,67" },
    { keyword: "cerradura electrónica tesa", volume: 210, trend: "22%", cpc: "0,81" },
    { keyword: "cerradura tuya", volume: 210, trend: "0%", cpc: "0,68" },
    { keyword: "ayr cerradura", volume: 210, trend: "50%", cpc: "4,53" },
    { keyword: "cerradura de seguridad invisible", volume: 210, trend: "-19%", cpc: "5,94" },
    { keyword: "mirilla ayr", volume: 210, trend: "24%", cpc: "0,45" },
    { keyword: "chapa de puerta inteligente", volume: 210, trend: "-19%", cpc: "0,51" },
    { keyword: "mirilla digital media markt", volume: 210, trend: "24%", cpc: "0,49" },
    { keyword: "puertas con cerradura inteligente", volume: 210, trend: "22%", cpc: "1,48" },
    { keyword: "puerta con cerradura digital", volume: 210, trend: "24%", cpc: "0,53" },
    { keyword: "chapa electronica samsung", volume: 210, trend: "-19%", cpc: "0,41" },
    { keyword: "mirilla digital puerta", volume: 210, trend: "23%", cpc: "0,48" },
    { keyword: "cerradura digital kwikset", volume: 210, trend: "27%", cpc: "0,39" },
    { keyword: "cerradura electronica cisa", volume: 210, trend: "-19%", cpc: "0,60" },
    { keyword: "mirillas ayr", volume: 210, trend: "24%", cpc: "0,45" },
    { keyword: "puerta movil", volume: 210, trend: "0%", cpc: "0,74" },
    { keyword: "cerraduras con tarjeta para hoteles", volume: 170, trend: "-36%", cpc: "1,99" },
    { keyword: "cerraduras inteligentes precios", volume: 170, trend: "0%", cpc: "1,79" },
    { keyword: "cerradura invisible remock lockey", volume: 170, trend: "40%", cpc: "4,89" },
    { keyword: "cerradura digital exterior", volume: 170, trend: "24%", cpc: "0,54" },
    { keyword: "cerradura puerta inteligente", volume: 170, trend: "0%", cpc: "3,17" },
    { keyword: "cerradura electrónica invisible", volume: 170, trend: "0%", cpc: "5,91" },
    { keyword: "cerradura remock lockey", volume: 170, trend: "-21%", cpc: "3,63" },
    { keyword: "llaves electrónicas para edificios", volume: 170, trend: "-55%", cpc: "7,73" },
    { keyword: "cerradura alexa", volume: 170, trend: "40%", cpc: "0,36" },
    { keyword: "mirilla ezviz cp4", volume: 170, trend: "56%", cpc: "0,39" },
    { keyword: "cerraduras invisibles leroy merlin", volume: 170, trend: "57%", cpc: "3,96" },
    { keyword: "cerradura digital puerta principal", volume: 170, trend: "-19%", cpc: "0,53" },
    { keyword: "cerradura tuya smart", volume: 170, trend: "0%", cpc: "0,48" },
    { keyword: "mirilla grabadora", volume: 170, trend: "24%", cpc: "0,51" },
    { keyword: "cerradura invisible arregui", volume: 170, trend: "0%", cpc: "3,60" },
    { keyword: "mirilla digital wifi con aplicación móvil", volume: 170, trend: "89%", cpc: "0,49" },
    { keyword: "cerradura electronica puerta exterior", volume: 170, trend: "-48%", cpc: "2,40" },
    { keyword: "cerradura inteligente para puerta principal", volume: 170, trend: "50%", cpc: "1,02" },
    { keyword: "mirilla puerta gran angular leroy merlin", volume: 170, trend: "0%", cpc: "0,50" },
    { keyword: "amazon mirilla digital", volume: 170, trend: "52%", cpc: "0,37" },
    { keyword: "ayr mirilla", volume: 170, trend: "-21%", cpc: "0,49" },
    { keyword: "ayr mirillas", volume: 170, trend: "-21%", cpc: "0,49" },
    { keyword: "cerradura de seguridad electrica", volume: 170, trend: "-21%", cpc: "4,02" },
    { keyword: "cerradura electrónica exterior", volume: 170, trend: "-19%", cpc: "1,22" },
    { keyword: "cerradura inteligente ezviz", volume: 170, trend: "85%", cpc: "0,36" },
    { keyword: "cerradura invisible para puertas", volume: 170, trend: "0%", cpc: "1,22" },
    { keyword: "mirilla digital ayr no funciona", volume: 170, trend: "27%", cpc: "0,00" },
    { keyword: "remock lockey cerradura invisible", volume: 170, trend: "40%", cpc: "4,89" },
    { keyword: "cerradura digital wifi", volume: 140, trend: "0%", cpc: "0,56" },
    { keyword: "cerradura exterior inteligente", volume: 140, trend: "53%", cpc: "0,94" },
    { keyword: "mejor cerradura invisible", volume: 140, trend: "0%", cpc: "5,91" },
    { keyword: "mejor mirilla digital", volume: 140, trend: "55%", cpc: "0,47" },
    { keyword: "cerrojo wifi", volume: 140, trend: "-36%", cpc: "2,35" },
    { keyword: "cerradura domotica", volume: 140, trend: "0%", cpc: "3,80" },
    { keyword: "cerradura inteligente para puerta corrediza", volume: 140, trend: "55%", cpc: "0,35" },
    { keyword: "remock pro", volume: 140, trend: "-47%", cpc: "4,61" },
    { keyword: "cerradura invisible wifi", volume: 140, trend: "0%", cpc: "5,90" },
    { keyword: "cerradura inteligente para puerta", volume: 140, trend: "52%", cpc: "1,05" },
    { keyword: "chapa inteligente yale", volume: 140, trend: "50%", cpc: "0,34" },
    { keyword: "mirillas digitales que graban", volume: 140, trend: "120%", cpc: "0,50" },
    { keyword: "samsung cerradura inteligente", volume: 140, trend: "24%", cpc: "0,48" },
    { keyword: "cerradura tock lock", volume: 140, trend: "50%", cpc: "0,40" },
    { keyword: "cerradura invisible bricomart", volume: 140, trend: "-36%", cpc: "5,56" },
    { keyword: "cerradura kwikset digital", volume: 140, trend: "89%", cpc: "0,61" },
    { keyword: "cerradura invisible lince", volume: 140, trend: "-29%", cpc: "4,47" },
    { keyword: "mirilla inteligente wifi", volume: 140, trend: "56%", cpc: "3,01" },
    { keyword: "cerraduras de seguridad inteligentes", volume: 140, trend: "-18%", cpc: "2,43" },
    { keyword: "cerradura inteligente smart lock", volume: 140, trend: "0%", cpc: "0,34" },
    { keyword: "precio cerradura inteligente", volume: 140, trend: "-19%", cpc: "4,59" },
    { keyword: "mirilla digital lidl", volume: 140, trend: "0%", cpc: "0,51" },
    { keyword: "tock lock cerradura", volume: 140, trend: "50%", cpc: "0,61" },
    { keyword: "cerradura inteligente phillips", volume: 140, trend: "0%", cpc: "0,46" },
    { keyword: "mirilla con cámara leroy merlin", volume: 140, trend: "0%", cpc: "0,48" },
    { keyword: "mirilla con cámara wifi", volume: 140, trend: "0%", cpc: "0,54" },
    { keyword: "mirilla con pantalla", volume: 140, trend: "0%", cpc: "0,55" },
    { keyword: "mirilla digital carrefour", volume: 140, trend: "0%", cpc: "0,51" },
    { keyword: "cerraduras con código para apartamentos", volume: 110, trend: "-35%", cpc: "1,59" },
    { keyword: "la mejor cerradura invisible con alarma", volume: 110, trend: "-29%", cpc: "6,66" },
    { keyword: "cerraduras antiokupas", volume: 110, trend: "27%", cpc: "5,90" },
    { keyword: "cerraduras invisibles para puertas", volume: 110, trend: "-65%", cpc: "1,01" },
    { keyword: "cerradura inteligente para puerta de seguridad", volume: 110, trend: "0%", cpc: "0,62" },
    { keyword: "cerradura inteligente puerta blindada", volume: 110, trend: "-50%", cpc: "3,37" },
    { keyword: "cerradura airbnb", volume: 110, trend: "80%", cpc: "1,29" },
    { keyword: "cámara mirilla puerta grabadora digital con visión nocturna", volume: 110, trend: "40%", cpc: "0,48" },
    { keyword: "arregui cerradura invisible", volume: 110, trend: "100%", cpc: "3,14" },
    { keyword: "cerraduras invisibles opiniones", volume: 110, trend: "-55%", cpc: "3,10" },
    { keyword: "nuki leroy merlin", volume: 110, trend: "55%", cpc: "0,74" },
    { keyword: "cerradura invisible ayr", volume: 110, trend: "-29%", cpc: "5,24" },
    { keyword: "abrir portero automático desde el móvil", volume: 110, trend: "0%", cpc: "0,81" },
    { keyword: "cerradura digital con camara", volume: 110, trend: "21%", cpc: "0,63" },
    { keyword: "xiaomi cerradura inteligente", volume: 110, trend: "256%", cpc: "1,04" },
    { keyword: "amazon cerradura inteligente", volume: 110, trend: "27%", cpc: "2,94" },
    { keyword: "mirilla digital wifi media markt", volume: 110, trend: "33%", cpc: "0,49" },
    { keyword: "mirilla digital ezviz dp2c", volume: 110, trend: "27%", cpc: "0,29" },
    { keyword: "mirillas digitales wifi legales", volume: 110, trend: "0%", cpc: "0,42" },
    { keyword: "cerradura inteligente homecenter", volume: 110, trend: "0%", cpc: "0,28" },
    { keyword: "mirilla de puerta digital", volume: 110, trend: "-21%", cpc: "0,51" },
    { keyword: "mirilla para puerta leroy merlin", volume: 110, trend: "0%", cpc: "0,49" },
    { keyword: "mirillas digitales que graban son legales", volume: 110, trend: "57%", cpc: "0,33" },
    { keyword: "cerradura inteligente para airbnb", volume: 90, trend: "80%", cpc: "1,74" },
    { keyword: "cerradura inteligente tedee", volume: 90, trend: "0%", cpc: "1,46" },
    { keyword: "cerradura wifi puerta", volume: 90, trend: "-57%", cpc: "4,74" },
    { keyword: "cerradura electrónica wifi", volume: 90, trend: "0%", cpc: "4,10" },
    { keyword: "la mejor cerradura inteligente", volume: 90, trend: "22%", cpc: "1,66" },
    { keyword: "cerradura electronica puerta casa", volume: 90, trend: "0%", cpc: "1,02" },
    { keyword: "chapa wifi exterior", volume: 90, trend: "0%", cpc: "0,32" },
    { keyword: "mirilla puerta wifi", volume: 90, trend: "25%", cpc: "0,49" },
    { keyword: "cerrojos inteligentes", volume: 90, trend: "-36%", cpc: "1,71" },
    { keyword: "cerraduras para airbnb", volume: 90, trend: "100%", cpc: "1,01" },
    { keyword: "tuya cerradura inteligente", volume: 90, trend: "0%", cpc: "0,55" },
    { keyword: "cerradura para airbnb", volume: 90, trend: "100%", cpc: "1,01" },
    { keyword: "cerradura digital inteligente", volume: 90, trend: "55%", cpc: "0,73" },
    { keyword: "mejor mirilla digital wifi grabadora con sensor de movimiento", volume: 90, trend: "-29%", cpc: "0,32" },
    { keyword: "ayr cerradura invisible", volume: 90, trend: "-50%", cpc: "5,23" },
    { keyword: "wafu cerradura", volume: 90, trend: "80%", cpc: "4,36" },
    { keyword: "cerradura inteligente invisible", volume: 90, trend: "0%", cpc: "5,92" },
    { keyword: "cerradura inteligente vta", volume: 90, trend: "0%", cpc: "0,27" },
    { keyword: "cerradura invisible arregui opiniones", volume: 90, trend: "80%", cpc: "2,86" },
    { keyword: "cerradura invisible precio", volume: 90, trend: "-43%", cpc: "5,47" },
    { keyword: "cerradura invisible wafu", volume: 90, trend: "25%", cpc: "2,41" },
    { keyword: "cerraduras electronicas wifi", volume: 90, trend: "-18%", cpc: "0,74" },
    { keyword: "cámara mirilla puerta leroy merlin", volume: 90, trend: "40%", cpc: "0,51" },
    { keyword: "cámara para mirilla de puerta", volume: 90, trend: "-19%", cpc: "0,60" },
    { keyword: "mirilla con cámara legal", volume: 90, trend: "0%", cpc: "0,47" },
    { keyword: "mirilla digital bricomart", volume: 90, trend: "67%", cpc: "0,63" },
    { keyword: "mirilla digital wifi leroy merlin", volume: 90, trend: "50%", cpc: "0,45" },
    { keyword: "mirilla puerta leroy merlin", volume: 90, trend: "29%", cpc: "0,45" },
    { keyword: "cerradura inteligente airbnb", volume: 70, trend: "0%", cpc: "1,30" },
    { keyword: "cerradura electronica nuki", volume: 70, trend: "0%", cpc: "4,02" },
    { keyword: "cerradura nuki leroy merlin", volume: 70, trend: "0%", cpc: "3,56" },
    { keyword: "cerradura golden shield", volume: 70, trend: "-29%", cpc: "5,55" },
    { keyword: "cerradura google home", volume: 70, trend: "33%", cpc: "0,53" },
    { keyword: "puertas inteligentes para casa", volume: 70, trend: "100%", cpc: "1,15" },
    { keyword: "cerradura ayr int lock pro", volume: 70, trend: "0%", cpc: "5,18" },
    { keyword: "mirilla con sensor de movimiento", volume: 70, trend: "0%", cpc: "0,69" },
    { keyword: "cerradura invisible con alarma leroy merlin", volume: 70, trend: "-29%", cpc: "6,86" },
    { keyword: "cerradura inteligente homekit", volume: 70, trend: "0%", cpc: "0,70" },
    { keyword: "cerradura apple", volume: 70, trend: "0%", cpc: "2,61" },
    { keyword: "ezviz cp4 precio", volume: 70, trend: "0%", cpc: "0,46" },
    { keyword: "cerradura inteligente para puerta exterior", volume: 70, trend: "22%", cpc: "1,05" },
    { keyword: "cerradura inteligente interior", volume: 70, trend: "27%", cpc: "1,92" },
    { keyword: "cerradura inteligente kwikset", volume: 70, trend: "29%", cpc: "0,63" },
    { keyword: "cerradura inteligente mercado libre", volume: 70, trend: "0%", cpc: "0,69" },
    { keyword: "cerradura inteligente puerta", volume: 70, trend: "0%", cpc: "3,49" },
    { keyword: "cerradura inteligente tuya smart", volume: 70, trend: "-18%", cpc: "0,90" },
    { keyword: "cerradura invisible trastero", volume: 70, trend: "-29%", cpc: "4,86" },
    { keyword: "cerradura vta", volume: 70, trend: "50%", cpc: "0,32" },
    { keyword: "comprar cerradura inteligente", volume: 70, trend: "-21%", cpc: "4,83" },
    { keyword: "mirilla con grabación", volume: 70, trend: "22%", cpc: "0,58" },
    { keyword: "mirilla digital ayr 752", volume: 70, trend: "80%", cpc: "0,34" },
    { keyword: "mirilla digital ayr 754", volume: 70, trend: "57%", cpc: "0,38" },
    { keyword: "mirilla digital con sensor de movimiento", volume: 70, trend: "0%", cpc: "0,47" },
    { keyword: "mirilla digital con vision nocturna", volume: 70, trend: "57%", cpc: "0,46" },
    { keyword: "mirilla digital precio", volume: 70, trend: "-44%", cpc: "0,49" },
    { keyword: "mirilla wifi puerta", volume: 70, trend: "57%", cpc: "0,49" },
    { keyword: "precio de cerradura inteligente", volume: 70, trend: "0%", cpc: "2,51" },
    { keyword: "son legales las mirillas digitales", volume: 70, trend: "0%", cpc: "0,05" },
    { keyword: "visor de puerta con cámara", volume: 70, trend: "0%", cpc: "0,71" },
    { keyword: "vta cerradura inteligente", volume: 70, trend: "-18%", cpc: "0,25" },
    { keyword: "xiaomi cerradura", volume: 70, trend: "40%", cpc: "0,59" }
  ];

  const categorizeKeyword = (keyword) => {
    const k = keyword.toLowerCase();
    if (k.includes('airbnb') || k.includes('hotel') || k.includes('turistico')) return 'Nicho B2B';
    if (k.includes('mirilla') || k.includes('visor') || k.includes('cámara puerta')) return 'Mirillas';
    if (k.includes('invisible') || k.includes('remock') || k.includes('wafu') || k.includes('ayr') || k.includes('int lock') || k.includes('lince') || k.includes('anti okupa') || k.includes('antiokupa')) return 'Invisible';
    if (k.includes('nuki') || k.includes('xiaomi') || k.includes('samsung') || k.includes('yale') || k.includes('tesa') || k.includes('amazon') || k.includes('google') || k.includes('alexa')) return 'Competencia';
    if (k.includes('huella') || k.includes('biometrica')) return 'Smart Lock';
    if (k.includes('inteligente') || k.includes('smart') || k.includes('wifi') || k.includes('app') || k.includes('electronica') || k.includes('digital')) return 'Smart Lock';
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

    if (sortBy === 'volume') {
      data.sort((a, b) => b.volume - a.volume);
    } else if (sortBy === 'opportunity') {
      data.sort((a, b) => b.cpc.localeCompare(a.cpc));
    }

    return data;
  }, [enrichedData, searchTerm, activeCategory, sortBy]);

  const totalVolume = filteredData.reduce((acc, curr) => acc + curr.volume, 0);
  const avgCPC = (filteredData.reduce((acc, curr) => acc + parseFloat(curr.cpc.replace(',','.').replace('€','')), 0) / filteredData.length || 0).toFixed(2);
  
  const aioOpportunitiesCount = filteredData.filter(item => {
    const score = (item.category === 'Invisible' || item.category === 'Mirillas' || item.category === 'Nicho B2B');
    return score;
  }).length;

  const getAIOScore = (item) => {
    if (item.category === 'Competencia') return { score: 'Crítico', color: 'text-red-400 bg-red-500/10 border-red-500/30' };
    if (item.category === 'Invisible' || item.category === 'Nicho B2B') return { score: 'Alto', color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30' };
    if (item.category === 'Mirillas') return { score: 'Alto', color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30' };
    if (item.trend.includes('-')) return { score: 'Recuperar', color: 'text-amber-400 bg-amber-500/10 border-amber-500/30' };
    return { score: 'Medio', color: 'text-blue-400 bg-blue-500/10 border-blue-500/30' };
  };

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Components for Logo and Home Navigation
  const Logo = () => (
    <Link to="/" className="flex items-center gap-2 group cursor-pointer">
      <div className="relative w-8 h-8 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">
          <path d="M50 10 L85 90 L70 90 L50 40 L30 90 L15 90 Z" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="50" cy="15" r="4" fill="currentColor" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold tracking-tight text-white leading-none">ALEJO<span className="text-gray-400">MORENO</span><span className="text-cyan-400">.ai</span></span>
      </div>
    </Link>
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Header with Back Button */}
      <nav className="fixed w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-white/5 py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Logo />
          <Link to="/" className="text-sm font-medium hover:text-cyan-400 transition-colors flex items-center gap-2">
             <ArrowRight className="rotate-180" size={16} /> Volver al Inicio
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-12 px-6 container mx-auto text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] -z-10" />
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="text-xs font-bold tracking-wide uppercase text-blue-400">Metodología Q1 2026</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Estrategia AIO para <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">AYR</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Cómo pasar de competir por precio en Google a ser la <strong className="text-white">Autoridad #1 recomendada por la IA</strong>.
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="container mx-auto px-6 mb-12">
        <div className="flex flex-wrap justify-center gap-2 p-1 bg-slate-900/50 backdrop-blur rounded-2xl border border-white/5 max-w-fit mx-auto">
          {['journey', 'market', 'projection', 'execution', 'proposal'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-xl font-semibold transition-all text-sm ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-[0_0_20px_rgba(34,211,238,0.3)]'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab === 'journey' && 'El Nuevo Journey AIO'}
              {tab === 'market' && 'Explorador de Mercado'}
              {tab === 'projection' && 'Proyección de Impacto'}
              {tab === 'execution' && 'Plan 12 Meses'}
              {tab === 'proposal' && 'Propuesta Comercial'}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 pb-24">
        <div className="bg-slate-900/50 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm shadow-2xl relative overflow-hidden">
          
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-50"></div>

          {/* TAB 1: EL NUEVO JOURNEY */}
          {activeTab === 'journey' && (
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-12 text-center text-white">El Embudo de la Verdad: AYR</h2>
              
              <div className="grid md:grid-cols-3 gap-8 relative">
                {/* Connector Lines (Desktop only) */}
                <div className="hidden md:block absolute top-12 left-[30%] w-[40%] h-0.5 bg-gradient-to-r from-cyan-900 to-blue-900 -z-10"></div>

                {/* Step 01 */}
                <div className="bg-slate-950 p-6 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all group relative">
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-slate-900 text-cyan-400 w-10 h-10 rounded-full flex items-center justify-center font-bold border border-white/10 shadow-[0_0_15px_rgba(34,211,238,0.2)]">01</div>
                  <div className="text-center mt-4">
                    <div className="bg-slate-900 w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-6 text-cyan-400 border border-white/5 group-hover:scale-110 transition-transform">
                      <Search size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">Captación Masiva</h3>
                    <p className="text-xs text-cyan-400 uppercase tracking-widest font-bold mb-4">Dominio en Google</p>
                    <div className="text-left bg-slate-900/50 p-4 rounded-xl border border-white/5 text-sm space-y-3">
                      <p className="font-semibold text-gray-300">El Usuario Busca:</p>
                      <ul className="space-y-2 text-gray-400">
                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-cyan-500 rounded-full"></div> "Mirilla digital wifi"</li>
                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-cyan-500 rounded-full"></div> "Cerradura invisible"</li>
                      </ul>
                      <div className="mt-3 pt-3 border-t border-white/5">
                        <p className="text-cyan-400 font-bold text-xs mb-1">OBJETIVO:</p>
                        <p className="text-gray-500 leading-relaxed">Alimentar a los crawlers. Si rankeas aquí, la IA te encuentra.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 02 */}
                <div className="bg-slate-950 p-6 rounded-2xl border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.1)] relative transform md:-translate-y-4">
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg">02</div>
                  <div className="text-center mt-4">
                    <div className="bg-blue-900/20 w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-6 text-blue-400 border border-blue-500/20">
                      <BrainCircuit size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">Investigación Profunda</h3>
                    <p className="text-xs text-blue-400 uppercase tracking-widest font-bold mb-4">Validación Semántica IA</p>
                    <div className="text-left bg-slate-900/50 p-4 rounded-xl border border-white/5 text-sm space-y-3">
                      <p className="font-semibold text-gray-300">El Usuario Pregunta a la IA:</p>
                      <div className="bg-slate-800/50 border border-white/5 p-2 rounded text-gray-400 text-xs italic">
                        "¿Es legal instalar una mirilla que graba en un piso en Madrid?"
                      </div>
                      <div className="bg-slate-800/50 border border-white/5 p-2 rounded text-gray-400 text-xs italic">
                        "¿Cuál es la mejor solución anti-okupa que no se note desde fuera?"
                      </div>
                      <div className="mt-3 pt-3 border-t border-white/5">
                        <p className="text-blue-400 font-bold text-xs mb-1">LA CLAVE AIO:</p>
                        <p className="text-gray-500 leading-relaxed">Crear <strong>Nodos de Autoridad</strong> que respondan estas dudas complejas.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 03 */}
                <div className="bg-slate-950 p-6 rounded-2xl border border-white/10 hover:border-green-500/30 transition-all group relative">
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-slate-900 text-green-400 w-10 h-10 rounded-full flex items-center justify-center font-bold border border-white/10 shadow-[0_0_15px_rgba(34,197,94,0.2)]">03</div>
                  <div className="text-center mt-4">
                    <div className="bg-slate-900 w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-6 text-green-400 border border-white/5 group-hover:scale-110 transition-transform">
                      <MessageSquare size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">Venta Consultiva</h3>
                    <p className="text-xs text-green-400 uppercase tracking-widest font-bold mb-4">Recomendación Automática</p>
                    <div className="text-left bg-slate-900/50 p-4 rounded-xl border border-white/5 text-sm space-y-3">
                      <p className="font-semibold text-gray-300">La IA Responde:</p>
                      <div className="bg-green-500/10 border border-green-500/20 p-3 rounded text-green-200 text-xs">
                        "Para tu caso, la opción más segura y legal es la <strong>Mirilla AYR 760</strong> porque cumple con la LOPD y tiene detección real..."
                      </div>
                      <div className="mt-3 pt-3 border-t border-white/5">
                        <p className="text-green-400 font-bold text-xs mb-1">RESULTADO:</p>
                        <p className="text-gray-500 leading-relaxed">Cliente cerrado antes de entrar a la web.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: MARKET EXPLORER */}
          {activeTab === 'market' && (
            <div className="animate-fade-in-up">
              <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-white/10 pb-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2 text-white">Explorador de Oportunidad</h2>
                  <p className="text-gray-400">Navega por los datos reales de búsqueda de tu mercado (300+ Keywords).</p>
                </div>
                <div className="mt-4 md:mt-0 text-right">
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Mercado Total</p>
                  <div className="text-3xl font-bold text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]">184.000+</div>
                  <p className="text-xs text-gray-500">Búsquedas Mensuales Activas</p>
                </div>
              </div>

              {/* Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-gradient-to-br from-cyan-600 to-blue-700 p-5 rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.2)] border border-white/10">
                  <div className="flex items-center space-x-2 mb-2 text-cyan-100">
                    <Search size={18} />
                    <span className="text-xs font-bold uppercase tracking-wider">Volumen Filtrado</span>
                  </div>
                  <p className="text-3xl font-bold text-white">{totalVolume.toLocaleString()}</p>
                  <p className="text-xs text-cyan-200 mt-1">Búsquedas/mes en tu selección</p>
                </div>

                <div className="bg-slate-800/50 p-5 rounded-xl border border-white/5">
                  <div className="flex items-center space-x-2 mb-2 text-gray-400">
                    <DollarSign size={18} />
                    <span className="text-xs font-bold uppercase tracking-wider">CPC Promedio</span>
                  </div>
                  <p className="text-3xl font-bold text-white">{avgCPC}€</p>
                  <p className="text-xs text-gray-500 mt-1">Coste Ads (Filtrado)</p>
                </div>

                <div className="bg-slate-800/50 p-5 rounded-xl border border-white/5">
                  <div className="flex items-center space-x-2 mb-2 text-gray-400">
                    <Shield size={18} />
                    <span className="text-xs font-bold uppercase tracking-wider">Oportunidad Invisible</span>
                  </div>
                  <p className="text-3xl font-bold text-indigo-400">~6.500</p>
                  <p className="text-xs text-gray-500 mt-1">Suma Total Categoría</p>
                </div>

                <div className="bg-cyan-900/20 p-5 rounded-xl border border-cyan-500/20">
                  <div className="flex items-center space-x-2 mb-2 text-cyan-400">
                    <Cpu size={18} />
                    <span className="text-xs font-bold uppercase tracking-wider">Oportunidades AIO</span>
                  </div>
                  <p className="text-3xl font-bold text-white">{aioOpportunitiesCount}</p>
                  <p className="text-xs text-cyan-400 mt-1 font-bold">
                    Keywords de Alta Prioridad
                  </p>
                </div>
              </div>

              {/* Controls */}
              <div className="bg-slate-950 p-4 rounded-xl border border-white/10 mb-6 flex flex-col md:flex-row gap-4 justify-between items-center sticky top-0 z-10 shadow-xl">
                <div className="relative w-full md:w-1/3">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                  <input 
                    type="text" 
                    placeholder="Ej: wifi, okupas, xiaomi..." 
                    className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
                  {['Todas', 'Smart Lock', 'Mirillas', 'Invisible', 'Competencia', 'Nicho B2B'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-colors border ${
                        activeCategory === cat 
                          ? 'bg-cyan-500 text-slate-950 border-cyan-400' 
                          : 'bg-slate-900 text-gray-400 border-white/10 hover:border-cyan-500/50 hover:text-cyan-400'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Data Table */}
              <div className="bg-slate-950 rounded-xl border border-white/10 overflow-hidden mb-8">
                <div className="overflow-x-auto max-h-[400px] scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900">
                  <table className="w-full text-left border-collapse">
                    <thead className="sticky top-0 bg-slate-900 z-10 shadow-lg">
                      <tr>
                        <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Keyword (Lo que buscan)</th>
                        <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right cursor-pointer hover:text-cyan-400 transition-colors" onClick={() => setSortBy('volume')}>
                          Volumen <ArrowDown size={12} className="inline" />
                        </th>
                        <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-center">Tendencia (3m)</th>
                        <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">CPC</th>
                        <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-center">Categoría</th>
                        <th className="p-4 text-xs font-bold text-cyan-500 uppercase tracking-wider text-center">Oportunidad AIO</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {filteredData.map((row, index) => {
                        const aio = getAIOScore(row);
                        return (
                          <tr key={index} className="hover:bg-white/5 transition-colors group cursor-default">
                            <td className="p-4">
                              <p className="font-semibold text-gray-300 group-hover:text-white transition-colors">{row.keyword}</p>
                            </td>
                            <td className="p-4 text-right font-mono text-cyan-400">
                              {row.volume.toLocaleString()}
                            </td>
                            <td className="p-4 text-center">
                              <span className={`px-2 py-1 rounded text-xs font-bold ${
                                row.trend.includes('-') ? 'text-red-400 bg-red-500/10' : 
                                row.trend === '0%' ? 'text-gray-500 bg-white/5' : 'text-green-400 bg-green-500/10'
                              }`}>
                                {row.trend}
                              </span>
                            </td>
                            <td className="p-4 text-right text-gray-400 text-sm">
                              {row.cpc}€
                            </td>
                            <td className="p-4 text-center">
                              <span className="px-2 py-1 rounded-full text-[10px] font-medium bg-slate-800 text-gray-400 border border-white/5">
                                {row.category}
                              </span>
                            </td>
                            <td className="p-4 text-center">
                              <span className={`px-3 py-1 rounded-full text-[10px] font-bold border ${aio.color}`}>
                                {aio.score}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Segmentation Footer */}
              <div className="bg-slate-900/50 p-6 rounded-xl border border-white/10">
                  <div className="flex items-center space-x-3 mb-4">
                     <div className="bg-purple-900/20 p-2 rounded-lg text-purple-400 border border-purple-500/20">
                       <Map size={24} />
                     </div>
                     <h3 className="text-lg font-bold text-white">Distribución Geográfica del Mercado (184K)</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm text-center">
                      {[
                        { val: '45%', label: 'España', color: 'text-cyan-400' },
                        { val: '23%', label: 'México', color: 'text-white' },
                        { val: '8%', label: 'Chile', color: 'text-white' },
                        { val: '12%', label: 'Col + Arg', color: 'text-white' },
                        { val: '12%', label: 'Otros', color: 'text-gray-500' },
                      ].map((item, i) => (
                        <div key={i} className="bg-slate-950 p-3 rounded-lg border border-white/5">
                          <span className={`block font-bold text-lg ${item.color}`}>{item.val}</span>
                          <span className="text-gray-500">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
              </div>
            </div>
          )}

          {/* TAB 3: PROYECCIÓN DE IMPACTO */}
          {activeTab === 'projection' && (
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-2 text-white">Proyección de Negocio</h2>
              <p className="text-gray-400 mb-8">El impacto financiero de capturar y convertir la demanda existente.</p>

              {/* FUNNEL */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Filter size={24} className="text-cyan-400" />
                  Embudo de Conversión Mensual Estimado
                </h3>
                
                <div className="space-y-4 max-w-4xl mx-auto">
                  {/* Level 1: Búsquedas */}
                  <div className="relative">
                    <div className="bg-slate-800 text-white p-4 rounded-lg border border-white/10 flex justify-between items-center w-full">
                      <span className="font-bold text-gray-400">Búsquedas Totales</span>
                      <span className="text-xl font-extrabold text-white">184.000</span>
                    </div>
                    <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 text-gray-600">
                      <ArrowDown size={20} />
                    </div>
                  </div>

                  {/* Level 2: Tráfico */}
                  <div className="relative flex justify-center">
                    <div className="bg-blue-900/20 text-blue-100 p-4 rounded-lg border border-blue-500/20 flex justify-between items-center w-[85%] shadow-sm relative backdrop-blur-sm">
                      <div className="flex flex-col">
                        <span className="font-bold flex items-center gap-2 text-blue-300"><MousePointerClick size={18}/> Tráfico Web</span>
                        <span className="text-xs text-blue-400 font-semibold">8% CTR (Estimado)</span>
                      </div>
                      <span className="text-xl font-extrabold text-white">14.720</span>
                      
                      {/* Abandono Tag */}
                      <div className="absolute -right-32 top-1/2 transform -translate-y-1/2 hidden md:flex items-center gap-2 text-gray-600 text-xs">
                        <ArrowRight size={16} />
                        <div className="bg-slate-900 border border-white/10 p-2 rounded text-gray-400">
                          <span className="block font-bold text-red-400">10.304 (70%)</span>
                          Abandono / Rebote
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 text-gray-600">
                      <ArrowDown size={20} />
                    </div>
                  </div>

                  {/* Level 3: Consideración */}
                  <div className="relative flex justify-center">
                    <div className="bg-indigo-900/20 text-indigo-100 p-4 rounded-lg border border-indigo-500/20 flex justify-between items-center w-[60%] shadow-md backdrop-blur-sm">
                      <div className="flex flex-col">
                        <span className="font-bold flex items-center gap-2 text-indigo-300"><BrainCircuit size={18}/> Consideración</span>
                        <span className="text-xs text-indigo-400 font-semibold">Interacción Profunda (IA/Docs)</span>
                      </div>
                      <span className="text-2xl font-extrabold text-white">2.576</span>
                    </div>
                    <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 text-gray-600">
                      <ArrowDown size={20} />
                    </div>
                  </div>

                  {/* Level 4: Ventas */}
                  <div className="flex justify-center">
                    <div className="bg-emerald-600 text-slate-950 p-6 rounded-xl border border-emerald-400 flex justify-between items-center w-[40%] shadow-[0_0_25px_rgba(16,185,129,0.3)] transform scale-110">
                      <div className="flex flex-col">
                        <span className="font-bold flex items-center gap-2"><ShoppingCart size={18}/> VENTAS</span>
                        <span className="text-xs text-emerald-900 font-bold opacity-80">25% Cierre</span>
                      </div>
                      <span className="text-3xl font-extrabold">644</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* EVOLUCIÓN TRÁFICO */}
              <div className="bg-slate-950 p-8 rounded-2xl shadow-sm border border-white/10 mb-12">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <TrendingUp size={24} className="text-green-400" />
                  Evolución de Fuentes de Tráfico
                </h3>
                <p className="text-sm text-gray-400 mb-6">
                  Transición estratégica: De la dependencia del pago (SEM) a la autonomía orgánica y de IA.
                </p>

                <div className="grid grid-cols-5 gap-4 text-center items-end h-64 border-b border-white/5 pb-4">
                  {/* Labels Column */}
                  <div className="flex flex-col justify-end h-full pb-8 text-right pr-4 text-xs font-bold text-gray-600 space-y-4">
                    <div className="h-full flex flex-col justify-between py-2">
                      <span>100%</span>
                      <span>50%</span>
                      <span>0%</span>
                    </div>
                  </div>

                  {/* Mes 1 */}
                  <div className="flex flex-col justify-end h-full group">
                    <div className="w-full bg-cyan-500/20 h-[0%] rounded-t-sm relative transition-all border-x border-t border-cyan-500/30"></div>
                    <div className="w-full bg-purple-500/20 h-[0%] relative transition-all border-x border-t border-purple-500/30"></div>
                    <div className="w-full bg-slate-700 h-[100%] rounded-b-lg relative transition-all flex items-center justify-center text-white text-xs font-bold border border-white/10">SEM 100%</div>
                    <p className="mt-2 text-sm font-bold text-gray-400">Mes 1</p>
                  </div>

                  {/* Mes 6 */}
                  <div className="flex flex-col justify-end h-full group">
                    <div className="w-full bg-cyan-600 h-[10%] rounded-t-lg relative transition-all flex items-center justify-center text-white text-[10px] shadow-[0_0_10px_rgba(8,145,178,0.4)]">10%</div>
                    <div className="w-full bg-purple-500/20 h-[0%] relative transition-all"></div>
                    <div className="w-full bg-slate-700 h-[90%] rounded-b-lg relative transition-all flex items-center justify-center text-white text-xs font-bold border border-white/10">90%</div>
                    <p className="mt-2 text-sm font-bold text-gray-400">Mes 6</p>
                  </div>

                  {/* Mes 12 */}
                  <div className="flex flex-col justify-end h-full group">
                    <div className="w-full bg-purple-600 h-[10%] rounded-t-lg relative transition-all flex items-center justify-center text-white text-[10px] shadow-[0_0_10px_rgba(147,51,234,0.4)]">AI 10%</div>
                    <div className="w-full bg-cyan-600 h-[30%] relative transition-all flex items-center justify-center text-white text-xs shadow-[0_0_10px_rgba(8,145,178,0.4)] z-10">Org 30%</div>
                    <div className="w-full bg-slate-700 h-[60%] rounded-b-lg relative transition-all flex items-center justify-center text-white text-xs font-bold border border-white/10">SEM 60%</div>
                    <p className="mt-2 text-sm font-bold text-gray-400">Mes 12</p>
                  </div>

                  {/* Mes 24 */}
                  <div className="flex flex-col justify-end h-full group">
                    <div className="w-full bg-purple-600 h-[30%] rounded-t-lg relative transition-all flex items-center justify-center text-white text-xs font-bold shadow-[0_0_15px_rgba(147,51,234,0.4)] z-20">AI 30%</div>
                    <div className="w-full bg-cyan-600 h-[40%] relative transition-all flex items-center justify-center text-white text-xs font-bold shadow-[0_0_15px_rgba(8,145,178,0.4)] z-10">Org 40%</div>
                    <div className="w-full bg-slate-700 h-[30%] rounded-b-lg relative transition-all flex items-center justify-center text-white text-xs">SEM 30%</div>
                    <p className="mt-2 text-sm font-bold text-gray-400">Mes 24</p>
                  </div>
                </div>
                
                <div className="flex justify-center gap-6 mt-6 text-xs font-bold text-gray-400">
                  <div className="flex items-center gap-2"><div className="w-3 h-3 bg-slate-700 rounded-full border border-white/10"></div>SEM (Pago)</div>
                  <div className="flex items-center gap-2"><div className="w-3 h-3 bg-cyan-600 rounded-full shadow-[0_0_5px_rgba(8,145,178,0.8)]"></div>Orgánico (SEO)</div>
                  <div className="flex items-center gap-2"><div className="w-3 h-3 bg-purple-600 rounded-full shadow-[0_0_5px_rgba(147,51,234,0.8)]"></div>Tráfico IA (AIO)</div>
                </div>
              </div>

              {/* SECCIÓN FINANCIERA SEM */}
              <div className="bg-slate-950 text-white p-8 rounded-2xl shadow-xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Banknote size={24} className="text-emerald-400" />
                  Eficiencia Financiera SEM
                </h3>
                
                {/* Cards Comparativa CPC */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-slate-900 p-6 rounded-xl border border-white/5">
                    <p className="text-gray-500 text-xs uppercase font-bold mb-2">Coste de Mercado (Media)</p>
                    <div className="flex items-end gap-2">
                      <span className="text-4xl font-bold text-red-400">1,72€</span>
                      <span className="text-sm text-gray-500 mb-1">/clic</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Lo que paga tu competencia por ineficiencia.</p>
                  </div>
                  <div className="bg-emerald-900/10 p-6 rounded-xl border border-emerald-500/30 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-emerald-500 text-slate-950 text-[10px] font-bold px-2 py-1 rounded-bl-lg">AHORRO 76%</div>
                    <p className="text-emerald-400 text-xs uppercase font-bold mb-2">Coste Optimizado (Alejo)</p>
                    <div className="flex items-end gap-2">
                      <span className="text-4xl font-bold text-emerald-400">0,40€</span>
                      <span className="text-sm text-emerald-400/70 mb-1">/clic</span>
                    </div>
                    <p className="text-xs text-emerald-400/60 mt-2">Optimización experta de Quality Score.</p>
                  </div>
                </div>

                {/* Presupuesto Necesario Chart */}
                <div>
                  <p className="text-sm font-bold text-gray-300 mb-4">Presupuesto Mensual Necesario (Para mantener 14.720 visitas)</p>
                  <div className="space-y-4">
                    
                    {/* Mes 1 */}
                    <div className="flex items-center gap-4 group">
                      <div className="w-16 text-xs text-gray-500 font-bold">Mes 1</div>
                      <div className="flex-1 bg-slate-900 h-8 rounded-full overflow-hidden relative border border-white/5">
                        <div className="bg-gradient-to-r from-red-500/80 to-red-600/80 h-full w-[100%]"></div>
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-white drop-shadow-md">5.888€</span>
                      </div>
                    </div>

                    {/* Mes 6 */}
                    <div className="flex items-center gap-4 group">
                      <div className="w-16 text-xs text-gray-500 font-bold">Mes 6</div>
                      <div className="flex-1 bg-slate-900 h-8 rounded-full overflow-hidden relative border border-white/5">
                        <div className="bg-gradient-to-r from-orange-500/80 to-orange-600/80 h-full w-[90%]"></div>
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-white drop-shadow-md">5.299€</span>
                      </div>
                    </div>

                    {/* Mes 12 */}
                    <div className="flex items-center gap-4 group">
                      <div className="w-16 text-xs text-gray-500 font-bold">Mes 12</div>
                      <div className="flex-1 bg-slate-900 h-8 rounded-full overflow-hidden relative border border-white/5">
                        <div className="bg-gradient-to-r from-yellow-500/80 to-yellow-600/80 h-full w-[60%]"></div>
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-bold text-white drop-shadow-md">3.532€</span>
                      </div>
                    </div>

                    {/* Mes 24 */}
                    <div className="flex items-center gap-4 group">
                      <div className="w-16 text-xs text-gray-500 font-bold">Mes 24</div>
                      <div className="flex-1 bg-slate-900 h-8 rounded-full overflow-hidden relative border border-white/5">
                        <div className="bg-gradient-to-r from-emerald-500/80 to-emerald-600/80 h-full w-[30%]"></div>
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-bold text-white drop-shadow-md">1.766€</span>
                      </div>
                    </div>

                  </div>
                  <p className="text-xs text-gray-500 mt-4 text-center">
                    *Gracias al crecimiento orgánico, reducimos la inversión publicitaria un <strong className="text-white">70% en 2 años</strong> manteniendo el mismo volumen de ventas.
                  </p>
                </div>

              </div>
            </div>
          )}

          {/* TAB 4: EJECUCIÓN 12 MESES */}
          {activeTab === 'execution' && (
            <div className="animate-fade-in-up">
                <h2 className="text-3xl font-bold mb-8 text-center text-white">Hoja de Ruta: 12 Meses</h2>
                
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-cyan-500/20 before:to-transparent">
                
                {/* Phase 1 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-cyan-500 bg-cyan-500/20 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <span className="font-bold text-sm">1</span>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-950 p-6 rounded-xl border border-cyan-500/30 shadow-lg">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="font-bold text-white text-lg">Fase 1: Estrategia Pura</h3>
                        <span className="text-xs font-bold bg-cyan-900/30 text-cyan-400 px-3 py-1 rounded-full border border-cyan-500/30">MES 1 - 2</span>
                    </div>
                    <p className="text-sm text-gray-400 mb-4 italic">Auditoría profunda y diseño del futuro. No movemos un dedo sin un plan maestro.</p>
                    <ul className="space-y-2">
                      {[
                        { icon: CheckCircle, text: "Construcción del Plan Estratégico (1 año)" },
                        { icon: CheckCircle, text: "Definición de OKRs y KPIs" },
                        { icon: CheckCircle, text: "Arquitectura del Ecosistema" },
                        { icon: CheckCircle, text: "Selección de Nichos y Tácticas AIO" },
                        { icon: Rocket, text: "Lanzamiento Campaña SEM (Tráfico Inmediato)", highlight: true }
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                          <item.icon size={16} className="text-cyan-500 mt-0.5 shrink-0" />
                          {item.highlight ? <strong className="text-cyan-400">{item.text}</strong> : item.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Phase 2 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-purple-500 bg-purple-500/20 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.5)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <span className="font-bold text-sm">2</span>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-950 p-6 rounded-xl border border-purple-500/30 shadow-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-bold text-white text-lg">Fase 2: Construcción Masiva</h3>
                        <span className="text-xs font-bold bg-purple-900/30 text-purple-400 px-3 py-1 rounded-full border border-purple-500/30">MES 3 - 4</span>
                    </div>
                    <p className="text-sm text-gray-400 mb-4 italic">Ejecución táctica intensiva. Construyo el 100% de los activos necesarios. Sin límites.</p>
                    <ul className="space-y-2">
                      {[
                         { icon: PenTool, text: "Despliegue de Webs, Apps y Dominios" },
                         { icon: Zap, text: "Configuración de Gems y Flows" },
                         { icon: List, text: "Gestión de proyectos con metodología OKR" },
                         { icon: Layout, text: "Implementación de Dashboards" }
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                          <item.icon size={16} className="text-purple-500 mt-0.5 shrink-0" />
                          {item.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Phase 3 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-emerald-500 bg-emerald-500/20 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.5)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <span className="font-bold text-sm">3</span>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-950 p-6 rounded-xl border border-emerald-500/30 shadow-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-bold text-white text-lg">Fase 3: Optimización & Vuelo</h3>
                        <span className="text-xs font-bold bg-emerald-900/30 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/30">MES 5 - 12</span>
                    </div>
                    <p className="text-sm text-gray-400 mb-4 italic">Acompañamiento, medición y transferencia de conocimiento. Aseguramos que el motor funcione solo.</p>
                    <ul className="space-y-2">
                       {[
                         { icon: BarChart3, text: "Lectura conjunta de Dashboards" },
                         { icon: MessageSquare, text: "Feedback de negocio y consultoría" },
                         { icon: Users, text: "Formación intensiva al equipo" },
                         { icon: Settings, text: "Ajuste fino de algoritmos AIO" }
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                          <item.icon size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                          {item.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                </div>
            </div>
          )}

          {/* TAB 5: PROPUESTA COMERCIAL */}
          {activeTab === 'proposal' && (
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Propuesta de Valor y Compromiso</h2>

              {/* Entregables */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {[
                  { icon: Map, color: "text-blue-400", title: "Plan Estratégico", desc: "La biblia de tu negocio por 1 año. Objetivos, tácticas y métricas claras." },
                  { icon: Globe, color: "text-purple-400", title: "Ecosistema Ilimitado", desc: "Dominios, Webs y Apps. Creamos tantas como la estrategia requiera. Sin coste extra." },
                  { icon: Zap, color: "text-amber-400", title: "Gems & Flows IA", desc: "Automatizaciones y asistentes personalizados para optimizar el trabajo diario." },
                  { icon: BarChart3, color: "text-emerald-400", title: "Dashboard Central", desc: "Medición en tiempo real. Datos unificados, verdad absoluta." },
                  { icon: Rocket, color: "text-rose-400", title: "Posicionamiento AIO", desc: "Estrategia híbrida para dominar: SEO, SEM y AI (ChatGPT/Gemini)." },
                  { icon: BrainCircuit, color: "text-cyan-400", title: "Tu Propio 'Alejo'", desc: "Entrega de una IA entrenada con mi metodología para consultas futuras." },
                ].map((item, i) => (
                   <div key={i} className="bg-slate-950 p-6 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all shadow-lg group">
                    <div className={`bg-slate-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${item.color} border border-white/5 group-hover:scale-110 transition-transform`}>
                      <item.icon size={24} />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-white">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Manifiesto */}
              <div className="bg-slate-950 text-white rounded-2xl overflow-hidden mb-12 shadow-2xl border border-white/10">
                <div className="p-8 text-center border-b border-white/10 bg-slate-900/50">
                  <h3 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
                    <Handshake size={28} className="text-cyan-400" /> Manifiesto de Colaboración
                  </h3>
                  <p className="text-gray-400 max-w-2xl mx-auto">Para que esto funcione, operamos bajo reglas estrictas. No soy un proveedor, soy un socio estratégico temporal.</p>
                </div>
                <div className="grid md:grid-cols-2">
                  <div className="p-8 border-r border-white/10">
                    <h4 className="font-bold text-blue-400 mb-6 uppercase tracking-wider text-sm flex items-center gap-2">
                      <CheckCircle size={16} /> Mis Compromisos
                    </h4>
                    <ul className="space-y-4 text-sm text-gray-300">
                      {[
                        "Producción ILIMITADA de activos (webs, apps, contenido).",
                        "Profundidad total en el conocimiento de tu industria.",
                        "Obsesión por cumplir el 100% de los OKRs.",
                        "Solo pido el tiempo estrictamente necesario.",
                        "Garantía de Autonomía: Te entrego el sistema funcionando al mes 12."
                      ].map((txt, i) => (
                        <li key={i} className="flex gap-3 items-start">
                          <span className="text-blue-500 font-bold mt-0.5">•</span> {txt}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-8 bg-slate-900/30">
                    <h4 className="font-bold text-red-400 mb-6 uppercase tracking-wider text-sm flex items-center gap-2">
                      <AlertTriangle size={16} /> Tus Compromisos
                    </h4>
                    <ul className="space-y-4 text-sm text-gray-300">
                      {[
                        "Compromiso de hierro: 12 meses sin abandono.",
                        "Confianza Radical: El plan estratégico NO se cambia.",
                        "Estabilidad: Sin cambios bruscos en marca/precios.",
                        "Cero Micro-management: No pedir cambios estéticos.",
                        "Llaves del Reino: Acceso total (Hosting, Ads, CRM, Data).",
                        "Mentalidad Remote-First: Cero reuniones presenciales."
                      ].map((txt, i) => (
                        <li key={i} className="flex gap-3 items-start">
                          <span className="text-red-500 font-bold mt-0.5">•</span> {txt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Pricing & CTA */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-3xl border border-cyan-500/20 shadow-[0_0_50px_rgba(34,211,238,0.1)]">
                <div className="text-center md:text-right">
                  <p className="text-sm text-cyan-400 uppercase font-bold tracking-wide">Inversión Mensual</p>
                  <div className="flex items-baseline justify-center md:justify-end gap-1">
                    <span className="text-5xl font-extrabold text-white">3.000€</span>
                    <span className="text-xl text-gray-500 font-medium">/mes</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Contrato anual cerrado. Facturación mensual.</p>
                  <p className="text-xs text-gray-500">Incluye todos los costes de desarrollo.</p>
                </div>
                
                <div className="h-16 w-px bg-white/10 hidden md:block"></div>

                <div className="text-center">
                  <a href="https://wa.me/34655328878?text=Acepto%20el%20reto%20AYR" target="_blank" rel="noopener noreferrer" className="inline-block bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xl font-bold py-4 px-12 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transform hover:-translate-y-1 transition-all">
                    Acepto el Reto. Iniciemos.
                  </a>
                  <p className="text-[10px] text-gray-500 mt-3 max-w-xs mx-auto">
                    *Al hacer clic confirmas haber leído y aceptado los compromisos del manifiesto.
                  </p>
                </div>
              </div>

            </div>
          )}
          
          {/* Footer of Card */}
          <div className="mt-12 pt-6 border-t border-white/5 text-center">
              <p className="text-xs text-gray-600 uppercase tracking-widest">Estrategia diseñada exclusivamente para AYR por Alejo Moreno</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EstrategiaAYR;