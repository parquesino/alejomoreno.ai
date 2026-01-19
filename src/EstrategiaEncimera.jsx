import React, { useState, useMemo, useEffect } from 'react';
import { Search, BrainCircuit, MessageSquare, ArrowRight, Lock, Eye, Target, Zap, BarChart3, Globe, TrendingUp, Map, Filter, DollarSign, Shield, Cpu, Info, ArrowDown, List, CheckCircle, Rocket, Handshake, Users, AlertTriangle, TrendingDown, MousePointerClick, ShoppingCart, Banknote, PenTool, Layout, Settings, Briefcase, GraduationCap, Megaphone, Award, BookOpen, Hammer } from 'lucide-react';
import { Link } from 'react-router-dom';

const EstrategiaEncimera = () => {
  const [activeTab, setActiveTab] = useState('journey');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todas');
  const [sortBy, setSortBy] = useState('volume');

  // --- DATASET COMPLETO (Procesado de tu lista) ---
  const rawData = [
    { keyword: "encimeras de cocina", volume: 2900, trend: "0%", cpc: "1,00" },
    { keyword: "encimera", volume: 1900, trend: "0%", cpc: "1,00" },
    { keyword: "silestones", volume: 1600, trend: "0%", cpc: "1,00" },
    { keyword: "encimera cocina", volume: 1300, trend: "0%", cpc: "1,00" },
    { keyword: "encimera ikea", volume: 1300, trend: "0%", cpc: "1,00" },
    { keyword: "ikea encimeras", volume: 1300, trend: "0%", cpc: "1,00" },
    { keyword: "encimeras en ikea", volume: 1300, trend: "0%", cpc: "1,00" },
    { keyword: "encimeras leroy merlin", volume: 1000, trend: "0%", cpc: "1,00" },
    { keyword: "encimeras en leroy merlin", volume: 1000, trend: "0%", cpc: "1,00" },
    { keyword: "encimera silestone", volume: 720, trend: "0%", cpc: "1,00" },
    { keyword: "dekton encimeras", volume: 590, trend: "0%", cpc: "1,00" },
    { keyword: "vitrocerámica teka", volume: 590, trend: "0%", cpc: "1,00" },
    { keyword: "encimera porcelanico", volume: 480, trend: "0%", cpc: "1,00" },
    { keyword: "encimera granito", volume: 480, trend: "0%", cpc: "1,00" },
    { keyword: "encimera madera", volume: 390, trend: "0%", cpc: "1,00" },
    { keyword: "encimeras de granito", volume: 390, trend: "0%", cpc: "1,00" },
    { keyword: "encimeras de cocina baratas", volume: 320, trend: "0%", cpc: "1,00" },
    { keyword: "encimera cocina madera", volume: 320, trend: "0%", cpc: "1,00" },
    { keyword: "leroy merlin encimeras", volume: 320, trend: "0%", cpc: "1,00" },
    { keyword: "encimera cocina leroy merlin", volume: 320, trend: "0%", cpc: "1,00" },
    { keyword: "encimera cocina ikea", volume: 320, trend: "0%", cpc: "1,00" },
    { keyword: "porcelánico encimera", volume: 320, trend: "0%", cpc: "1,00" },
    { keyword: "encimera baño", volume: 260, trend: "0%", cpc: "1,00" },
    { keyword: "encimera de madera", volume: 260, trend: "0%", cpc: "1,00" },
    { keyword: "neolith encimera", volume: 260, trend: "0%", cpc: "1,00" },
    { keyword: "encimeras de cuarzo", volume: 260, trend: "0%", cpc: "1,00" },
    { keyword: "encimera madera ikea", volume: 260, trend: "0%", cpc: "1,00" },
    { keyword: "vitroceramica bosch", volume: 210, trend: "0%", cpc: "1,00" },
    { keyword: "encimera a medida", volume: 210, trend: "0%", cpc: "1,00" },
    { keyword: "encimeras bricodepot", volume: 210, trend: "0%", cpc: "1,00" },
    { keyword: "encimera marmol", volume: 210, trend: "0%", cpc: "1,00" },
    { keyword: "encimera blanca cocina", volume: 210, trend: "0%", cpc: "1,00" },
    { keyword: "colores silestone", volume: 210, trend: "0%", cpc: "1,00" },
    { keyword: "encimeras de cocina silestone", volume: 170, trend: "0%", cpc: "1,00" },
    { keyword: "silestone cocina", volume: 170, trend: "0%", cpc: "1,00" },
    { keyword: "encimera silestone precio", volume: 170, trend: "0%", cpc: "1,00" },
    { keyword: "encimeras bricomart", volume: 170, trend: "0%", cpc: "1,00" },
    { keyword: "encimera cuarzo", volume: 170, trend: "0%", cpc: "1,00" },
    { keyword: "encimeras para cocina", volume: 140, trend: "0%", cpc: "1,00" },
    { keyword: "encimera laminada", volume: 140, trend: "0%", cpc: "1,00" },
    { keyword: "encimera de marmol", volume: 140, trend: "0%", cpc: "1,00" },
    { keyword: "ascale encimeras", volume: 140, trend: "0%", cpc: "1,00" },
    { keyword: "encimeras de gas", volume: 110, trend: "0%", cpc: "1,00" },
    { keyword: "encimera porcelánico precio m2", volume: 110, trend: "0%", cpc: "1,00" },
    { keyword: "encimera cocina porcelanico", volume: 110, trend: "0%", cpc: "1,00" },
    { keyword: "precio encimera cocina", volume: 110, trend: "0%", cpc: "1,00" },
    { keyword: "encimera compac", volume: 110, trend: "0%", cpc: "1,00" },
    { keyword: "cosentino encimeras", volume: 110, trend: "0%", cpc: "1,00" },
    { keyword: "tipos de encimeras", volume: 110, trend: "0%", cpc: "1,00" },
    { keyword: "encimera corian", volume: 110, trend: "0%", cpc: "1,00" },
    { keyword: "encimera negra", volume: 90, trend: "0%", cpc: "1,00" },
    { keyword: "encimeras baratas", volume: 90, trend: "0%", cpc: "1,00" },
    { keyword: "encimera piedra", volume: 90, trend: "0%", cpc: "1,00" },
    { keyword: "laminam encimeras", volume: 90, trend: "0%", cpc: "1,00" },
    { keyword: "encimeras de piedra", volume: 90, trend: "0%", cpc: "1,00" },
    { keyword: "precio m2 silestone", volume: 90, trend: "0%", cpc: "1,00" },
    { keyword: "encimera dekton precio", volume: 70, trend: "0%", cpc: "1,00" },
    { keyword: "encimera granito blanco", volume: 70, trend: "0%", cpc: "1,00" },
    { keyword: "encimera piedra natural", volume: 70, trend: "0%", cpc: "1,00" },
    { keyword: "encimera calacatta", volume: 70, trend: "0%", cpc: "1,00" },
    { keyword: "catalogo silestone", volume: 70, trend: "0%", cpc: "1,00" },
    { keyword: "marmol blanco cocina", volume: 70, trend: "0%", cpc: "1,00" },
    { keyword: "encimera compacta", volume: 70, trend: "0%", cpc: "1,00" },
    { keyword: "encimera a gas", volume: 50, trend: "0%", cpc: "1,00" },
    { keyword: "precio encimera granito", volume: 50, trend: "0%", cpc: "1,00" },
    { keyword: "piedra para cocina", volume: 50, trend: "0%", cpc: "1,00" },
    { keyword: "encimera roble", volume: 50, trend: "0%", cpc: "1,00" },
    { keyword: "precio encimera", volume: 50, trend: "0%", cpc: "1,00" },
    { keyword: "encimera ceramica", volume: 50, trend: "0%", cpc: "1,00" },
    { keyword: "inalco encimeras", volume: 50, trend: "0%", cpc: "1,00" },
    { keyword: "encimera krion", volume: 50, trend: "0%", cpc: "1,00" },
    { keyword: "encimera gris", volume: 50, trend: "0%", cpc: "1,00" },
    { keyword: "encimera calacatta gold", volume: 50, trend: "0%", cpc: "1,00" },
    { keyword: "encimera terrazo", volume: 50, trend: "0%", cpc: "1,00" },
    { keyword: "encimera techlam", volume: 50, trend: "0%", cpc: "1,00" },
    { keyword: "encimera neolith precio", volume: 40, trend: "0%", cpc: "1,00" },
    { keyword: "encimera exterior", volume: 40, trend: "0%", cpc: "1,00" },
    { keyword: "encimera microcemento", volume: 40, trend: "0%", cpc: "1,00" },
    { keyword: "encimera efecto marmol", volume: 40, trend: "0%", cpc: "1,00" },
    { keyword: "encimera de resina", volume: 40, trend: "0%", cpc: "1,00" },
    { keyword: "cuarcita encimera", volume: 40, trend: "0%", cpc: "1,00" },
    { keyword: "coverlam encimeras", volume: 40, trend: "0%", cpc: "1,00" }
  ];

  const categorizeKeyword = (keyword) => {
    const k = keyword.toLowerCase();
    if (k.includes('ikea') || k.includes('leroy') || k.includes('brico')) return 'Competencia';
    if (k.includes('granito') || k.includes('piedra') || k.includes('marmol') || k.includes('cuarcita')) return 'Piedra Natural';
    if (k.includes('silestone') || k.includes('dekton') || k.includes('neolith') || k.includes('porcelanico') || k.includes('compac') || k.includes('corian') || k.includes('krion')) return 'Sintéticos/Marcas';
    if (k.includes('madera') || k.includes('laminada') || k.includes('formica')) return 'Económico/Madera';
    if (k.includes('precio') || k.includes('barata') || k.includes('coste')) return 'Oportunidad Precio';
    if (k.includes('gas') || k.includes('vitro') || k.includes('induccion')) return 'Electrodomésticos';
    return 'General';
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

  // Funnel Data (Mensual, según tu input)
  const funnelData = [
    { month: 'Mes 1', share: '20%', traffic: 600, cost: 600, sales: 3.78 },
    { month: 'Mes 2', share: '20%', traffic: 600, cost: 600, sales: 3.78 },
    { month: 'Mes 3', share: '20%', traffic: 600, cost: 600, sales: 3.78 },
    { month: 'Mes 4', share: '20%', traffic: 600, cost: 600, sales: 3.78 },
    { month: 'Mes 5', share: '50%', traffic: 1500, cost: 1500, sales: 9.45 },
    { month: 'Mes 6', share: '50%', traffic: 1500, cost: 1500, sales: 9.45 },
    { month: 'Mes 7', share: '50%', traffic: 1500, cost: 1500, sales: 9.45 },
    { month: 'Mes 8', share: '70%', traffic: 2100, cost: 2100, sales: 13.23 },
    { month: 'Mes 9', share: '70%', traffic: 2100, cost: 2100, sales: 13.23 },
    { month: 'Mes 10', share: '70%', traffic: 2100, cost: 2100, sales: 13.23 },
    { month: 'Mes 11', share: '70%', traffic: 2100, cost: 2100, sales: 13.23 },
    { month: 'Mes 12', share: '70%', traffic: 2100, cost: 2100, sales: 13.23 },
  ];

  const totalTraffic = funnelData.reduce((acc, curr) => acc + curr.traffic, 0);
  const totalSales = funnelData.reduce((acc, curr) => acc + curr.sales, 0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      
      {/* Header */}
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
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-xs font-bold tracking-wide uppercase text-cyan-400">Metodología Q1 2026</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Estrategia AIO para <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">ENCIMERA & STONE</span>
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
          
          <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-50"></div>

          {/* TAB 1: JOURNEY */}
          {activeTab === 'journey' && (
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-12 text-center text-white">El Journey de la Encimera Perfecta</h2>
              
              <div className="grid md:grid-cols-3 gap-8 relative">
                <div className="hidden md:block absolute top-12 left-[30%] w-[40%] h-0.5 bg-gradient-to-r from-cyan-900 to-blue-900 -z-10"></div>

                {/* Step 01 */}
                <div className="bg-slate-950 p-6 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all group relative">
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-slate-900 text-cyan-400 w-10 h-10 rounded-full flex items-center justify-center font-bold border border-white/10 shadow-[0_0_15px_rgba(34,211,238,0.2)]">01</div>
                  <div className="text-center mt-4">
                    <div className="bg-slate-900 w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-6 text-cyan-400 border border-white/5 group-hover:scale-110 transition-transform">
                      <Search size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">Búsqueda AIO</h3>
                    <p className="text-xs text-cyan-400 uppercase tracking-widest font-bold mb-4">Captación Inteligente</p>
                    <div className="text-left bg-slate-900/50 p-4 rounded-xl border border-white/5 text-sm space-y-3">
                      <p className="font-semibold text-gray-300">El usuario busca:</p>
                      <ul className="space-y-2 text-gray-400">
                        <li className="flex items-center gap-2"><CheckCircle size={14} className="text-cyan-500"/> "Encimera granito blanco resistente"</li>
                        <li className="flex items-center gap-2"><CheckCircle size={14} className="text-cyan-500"/> "Silestone vs Dekton precios"</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step 02 */}
                <div className="bg-slate-950 p-6 rounded-2xl border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.1)] relative transform md:-translate-y-4">
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg">02</div>
                  <div className="text-center mt-4">
                    <div className="bg-blue-900/20 w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-6 text-blue-400 border border-blue-500/20">
                      <MessageSquare size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">Conversación Real</h3>
                    <p className="text-xs text-blue-400 uppercase tracking-widest font-bold mb-4">WhatsApp & Asesoría</p>
                    <div className="text-left bg-slate-900/50 p-4 rounded-xl border border-white/5 text-sm space-y-3">
                      <p className="font-semibold text-gray-300">El cierre sucede aquí:</p>
                      <div className="bg-slate-800/50 border border-white/5 p-2 rounded text-gray-400 text-xs italic">
                        "Envíame las medidas y te paso presupuesto en 1h. ¿Prefieres ver muestras?"
                      </div>
                      <p className="text-xs text-gray-500 mt-2">Aquí es donde tú (Encimera & Stone) brillas respondiendo.</p>
                    </div>
                  </div>
                </div>

                {/* Step 03 */}
                <div className="bg-slate-950 p-6 rounded-2xl border border-white/10 hover:border-green-500/30 transition-all group relative">
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-slate-900 text-green-400 w-10 h-10 rounded-full flex items-center justify-center font-bold border border-white/10 shadow-[0_0_15px_rgba(34,197,94,0.2)]">03</div>
                  <div className="text-center mt-4">
                    <div className="bg-slate-900 w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-6 text-green-400 border border-white/5 group-hover:scale-110 transition-transform">
                      <Hammer size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">Instalación & Margen</h3>
                    <p className="text-xs text-green-400 uppercase tracking-widest font-bold mb-4">Rentabilidad Compartida</p>
                    <div className="text-left bg-slate-900/50 p-4 rounded-xl border border-white/5 text-sm space-y-3">
                      <p className="font-semibold text-gray-300">Modelo Win-Win:</p>
                      <div className="bg-green-500/10 border border-green-500/20 p-3 rounded text-green-200 text-xs">
                        Tú ganas el 80% del margen. Yo gano el 20%. Solo ganamos si vendemos.
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
                  <p className="text-gray-400">Análisis de demanda real (Top Keywords).</p>
                </div>
                <div className="mt-4 md:mt-0 text-right">
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Mercado Potencial</p>
                  <div className="text-3xl font-bold text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]">50.000+</div>
                  <p className="text-xs text-gray-500">Búsquedas Mensuales Est. (Total)</p>
                </div>
              </div>

              {/* Controls */}
              <div className="bg-slate-950 p-4 rounded-xl border border-white/10 mb-6 flex flex-col md:flex-row gap-4 justify-between items-center sticky top-0 z-10 shadow-xl">
                <div className="relative w-full md:w-1/3">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                  <input 
                    type="text" 
                    placeholder="Filtrar (ej: granito, silestone...)" 
                    className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
                  {['Todas', 'Sintéticos/Marcas', 'Piedra Natural', 'Competencia', 'Económico/Madera'].map((cat) => (
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
                        <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Keyword</th>
                        <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right cursor-pointer hover:text-cyan-400 transition-colors" onClick={() => setSortBy('volume')}>
                          Volumen <ArrowDown size={12} className="inline" />
                        </th>
                        <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">CPC Est.</th>
                        <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-center">Categoría</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {filteredData.map((row, index) => (
                        <tr key={index} className="hover:bg-white/5 transition-colors group cursor-default">
                          <td className="p-4">
                            <p className="font-semibold text-gray-300 group-hover:text-white transition-colors">{row.keyword}</p>
                          </td>
                          <td className="p-4 text-right font-mono text-cyan-400">
                            {row.volume}
                          </td>
                          <td className="p-4 text-right text-gray-400 text-sm">
                            {row.cpc}€
                          </td>
                          <td className="p-4 text-center">
                            <span className="px-2 py-1 rounded-full text-[10px] font-medium bg-slate-800 text-gray-400 border border-white/5">
                              {row.category}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: PROYECCIÓN */}
          {activeTab === 'projection' && (
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-2 text-white">Proyección Mensual (Año 1)</h2>
              <p className="text-gray-400 mb-8">Escalado progresivo de cuota de mercado y ventas estimadas.</p>

              {/* Monthly Table */}
              <div className="bg-slate-950 rounded-xl border border-white/10 overflow-hidden mb-8 shadow-xl">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-900 border-b border-white/10">
                        <th className="p-4 text-xs font-bold text-gray-400 uppercase">Mes</th>
                        <th className="p-4 text-xs font-bold text-gray-400 uppercase text-center">Búsquedas</th>
                        <th className="p-4 text-xs font-bold text-cyan-400 uppercase text-center">Share %</th>
                        <th className="p-4 text-xs font-bold text-gray-400 uppercase text-center">Tráfico (6% CTR)</th>
                        <th className="p-4 text-xs font-bold text-red-400 uppercase text-right">Coste Ads (1€)</th>
                        <th className="p-4 text-xs font-bold text-emerald-400 uppercase text-right">Ventas Est.</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {funnelData.map((row, index) => (
                        <tr key={index} className={`hover:bg-white/5 transition-colors ${index >= 7 ? 'bg-emerald-900/10' : ''}`}>
                          <td className="p-4 font-bold text-white">{row.month}</td>
                          <td className="p-4 text-center text-gray-500">50.000</td>
                          <td className="p-4 text-center font-bold text-cyan-400">{row.share}</td>
                          <td className="p-4 text-center text-white">{row.traffic}</td>
                          <td className="p-4 text-right text-red-300">{row.cost}€</td>
                          <td className="p-4 text-right font-bold text-emerald-400">{row.sales.toFixed(1)}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot className="bg-slate-900 border-t border-white/10">
                      <tr>
                        <td className="p-4 font-bold text-white">TOTAL AÑO 1</td>
                        <td className="p-4 text-center text-gray-500">600.000</td>
                        <td className="p-4"></td>
                        <td className="p-4 text-center font-bold text-white">{totalTraffic}</td>
                        <td className="p-4 text-right font-bold text-red-400">{totalTraffic}€</td>
                        <td className="p-4 text-right font-bold text-emerald-400 text-lg">{totalSales.toFixed(0)} Ventas</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>

              {/* Evolución de Tráfico (Igual a AYR) */}
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

              {/* Summary Metrics */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-slate-900 p-6 rounded-xl border border-white/5">
                  <h4 className="text-gray-400 uppercase text-xs font-bold mb-2">Inversión Total Ads (Anual)</h4>
                  <p className="text-3xl font-bold text-white">{totalTraffic}€</p>
                  <p className="text-xs text-gray-500 mt-2">Pagado directamente a Google</p>
                </div>
                <div className="bg-emerald-900/20 p-6 rounded-xl border border-emerald-500/20">
                  <h4 className="text-emerald-400 uppercase text-xs font-bold mb-2">Ventas Estimadas (Anual)</h4>
                  <p className="text-3xl font-bold text-white">~{totalSales.toFixed(0)}</p>
                  <p className="text-xs text-emerald-400/60 mt-2">Tasa de conversión conservadora (0,63%)</p>
                </div>
                <div className="bg-cyan-900/20 p-6 rounded-xl border border-cyan-500/20">
                  <h4 className="text-cyan-400 uppercase text-xs font-bold mb-2">Tu Coste Fijo</h4>
                  <p className="text-3xl font-bold text-white">0€</p>
                  <p className="text-xs text-cyan-400/60 mt-2">Riesgo cero. Solo comisión.</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: EJECUCIÓN */}
          {activeTab === 'execution' && (
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Plan de Ejecución</h2>
              
              <div className="space-y-6">
                <div className="bg-slate-950 p-6 rounded-xl border border-cyan-500/30">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-white text-lg">Fase 1: Setup & Lanzamiento (M1-M4)</h3>
                    <span className="text-xs font-bold bg-cyan-900/30 text-cyan-400 px-3 py-1 rounded-full">Share 20%</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex gap-2"><CheckCircle size={16} className="text-cyan-500"/> Configuración campañas Google Ads (Búsqueda exacta).</li>
                    <li className="flex gap-2"><CheckCircle size={16} className="text-cyan-500"/> Optimización de landings para conversión móvil (WhatsApp).</li>
                    <li className="flex gap-2"><CheckCircle size={16} className="text-cyan-500"/> Calibración de keywords negativas.</li>
                  </ul>
                </div>

                <div className="bg-slate-950 p-6 rounded-xl border border-blue-500/30">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-white text-lg">Fase 2: Escalado (M5-M7)</h3>
                    <span className="text-xs font-bold bg-blue-900/30 text-blue-400 px-3 py-1 rounded-full">Share 50%</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex gap-2"><CheckCircle size={16} className="text-blue-500"/> Ampliación de presupuesto diario.</li>
                    <li className="flex gap-2"><CheckCircle size={16} className="text-blue-500"/> Test A/B de anuncios.</li>
                    <li className="flex gap-2"><CheckCircle size={16} className="text-blue-500"/> Estrategia de retargeting.</li>
                  </ul>
                </div>

                <div className="bg-slate-950 p-6 rounded-xl border border-emerald-500/30">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-white text-lg">Fase 3: Dominancia (M8-M12)</h3>
                    <span className="text-xs font-bold bg-emerald-900/30 text-emerald-400 px-3 py-1 rounded-full">Share 70%</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex gap-2"><CheckCircle size={16} className="text-emerald-500"/> Maximización de cuota de impresiones.</li>
                    <li className="flex gap-2"><CheckCircle size={16} className="text-emerald-500"/> Optimización de costes marginales.</li>
                    <li className="flex gap-2"><CheckCircle size={16} className="text-emerald-500"/> Consolidación como líder del nicho.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: PROPUESTA */}
          {activeTab === 'proposal' && (
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Tu Socio de Crecimiento</h2>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* LO QUE YO HAGO */}
                <div className="bg-slate-900 p-8 rounded-2xl border border-cyan-500/20">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <Zap size={24} className="text-cyan-400"/> Mi Responsabilidad
                  </h3>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex gap-3">
                      <CheckCircle className="text-cyan-500 mt-1 shrink-0" size={18}/>
                      <div>
                        <strong>Estrategia AIO & SEM Completa:</strong> Configuración, gestión y optimización diaria.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="text-cyan-500 mt-1 shrink-0" size={18}/>
                      <div>
                        <strong>Infraestructura Digital:</strong> Webs, landings y automatizaciones necesarias.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="text-cyan-500 mt-1 shrink-0" size={18}/>
                      <div>
                        <strong>Analítica:</strong> Reportes de rendimiento y transparencia total.
                      </div>
                    </li>
                  </ul>
                </div>

                {/* LO QUE TÚ HACES */}
                <div className="bg-slate-900 p-8 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <Users size={24} className="text-white"/> Tu Responsabilidad
                  </h3>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex gap-3">
                      <CheckCircle className="text-white mt-1 shrink-0" size={18}/>
                      <div>
                        <strong>Inversión Publicitaria:</strong> Pago directo de las facturas de Google Ads.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="text-white mt-1 shrink-0" size={18}/>
                      <div>
                        <strong>Atención al Cliente:</strong> Responder WhatsApps y cerrar las ventas con agilidad.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="text-white mt-1 shrink-0" size={18}/>
                      <div>
                        <strong>Calidad:</strong> Mantener el estándar de producto e instalación.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* PRICING CARD */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-10 rounded-3xl border border-cyan-500/30 text-center max-w-2xl mx-auto shadow-[0_0_50px_rgba(34,211,238,0.15)]">
                <p className="text-sm text-cyan-400 uppercase font-bold tracking-widest mb-4">Condiciones Económicas</p>
                
                <div className="flex justify-center items-end gap-2 mb-2">
                  <span className="text-6xl font-extrabold text-white">0€</span>
                  <span className="text-xl text-gray-400 mb-2">/mes (Fee Fijo)</span>
                </div>
                
                <div className="my-6 border-t border-white/10 w-1/2 mx-auto"></div>
                
                <div className="flex justify-center items-end gap-2 mb-8">
                  <span className="text-5xl font-extrabold text-emerald-400">20%</span>
                  <span className="text-xl text-emerald-200 mb-2">del Margen</span>
                </div>

                <p className="text-gray-400 text-sm mb-8">
                  Solo gano si tú ganas. Facturación a mes vencido sobre ventas cerradas.
                </p>

                <a href="https://wa.me/34655328878?text=Acepto%20el%20reto%20Encimera" target="_blank" rel="noopener noreferrer" className="inline-block bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xl font-bold py-4 px-12 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transform hover:-translate-y-1 transition-all">
                  Empezar Ahora
                </a>
              </div>

            </div>
          )}
          
          <div className="mt-12 pt-6 border-t border-white/5 text-center">
              <p className="text-xs text-gray-600 uppercase tracking-widest">Estrategia diseñada exclusivamente para Encimera & Stone por Alejo Moreno</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EstrategiaEncimera;