import React, { useState, useMemo, useEffect } from 'react';
import { Search, ArrowRight, Zap, Globe, TrendingUp, Shield, CheckCircle, Handshake, AlertTriangle, Coffee, Home, BookOpen, ArrowDown, Users, DollarSign, Calculator, BarChart3, Banknote, Filter, Map, BrainCircuit, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const EstrategiaConstructoras = () => {
  // Iniciamos en la nueva pestaña 'opportunity' (Contexto / PPT)
  const [activeTab, setActiveTab] = useState('opportunity');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todas');
  const [sortBy, setSortBy] = useState('volume');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // --- DATASET REAL (Filtrado > 100 búsquedas) ---
  const rawData = [
    // INGLÉS (High Volume)
    { keyword: "houses for sale in colombia", volume: 3600, lang: "Inglés", region: "Nacional" },
    { keyword: "homes for sale in colombia", volume: 3600, lang: "Inglés", region: "Nacional" },
    { keyword: "medellin real estate", volume: 2400, lang: "Inglés", region: "Medellín" },
    { keyword: "medellin real estate el poblado", volume: 2400, lang: "Inglés", region: "Medellín" },
    { keyword: "medellin properties", volume: 2400, lang: "Inglés", region: "Medellín" },
    { keyword: "houses in colombia", volume: 1900, lang: "Inglés", region: "Nacional" },
    { keyword: "colombia homes", volume: 1900, lang: "Inglés", region: "Nacional" },
    { keyword: "colombia south america real estate", volume: 1600, lang: "Inglés", region: "Nacional" },
    { keyword: "real estate in cartagena colombia", volume: 1600, lang: "Inglés", region: "Caribe" },
    { keyword: "medellin apartments for sale", volume: 1600, lang: "Inglés", region: "Medellín" },
    { keyword: "santa marta colombia real estate", volume: 1000, lang: "Inglés", region: "Caribe" },
    { keyword: "bogota real estate", volume: 880, lang: "Inglés", region: "Bogotá" },
    { keyword: "real estate in bogota colombia", volume: 880, lang: "Inglés", region: "Bogotá" },
    { keyword: "homes for sale in cartagena colombia", volume: 880, lang: "Inglés", region: "Caribe" },
    { keyword: "properties for sale in colombia", volume: 720, lang: "Inglés", region: "Nacional" },
    { keyword: "medellin condos for sale", volume: 720, lang: "Inglés", region: "Medellín" },
    { keyword: "houses in medellin", volume: 720, lang: "Inglés", region: "Medellín" },
    { keyword: "bogota colombia homes for sale", volume: 720, lang: "Inglés", region: "Bogotá" },
    { keyword: "houses for sale in cartagena colombia", volume: 590, lang: "Inglés", region: "Caribe" },
    { keyword: "buying property in colombia", volume: 590, lang: "Inglés", region: "Nacional" },
    { keyword: "buying land in colombia", volume: 590, lang: "Inglés", region: "Nacional" },
    { keyword: "medellin property for sale", volume: 590, lang: "Inglés", region: "Medellín" },
    { keyword: "cali colombia homes for sale", volume: 480, lang: "Inglés", region: "Cali/Valle" },
    { keyword: "real estate colombia", volume: 480, lang: "Inglés", region: "Nacional" },
    { keyword: "cartagena condos for sale", volume: 320, lang: "Inglés", region: "Caribe" },
    { keyword: "barranquilla real estate", volume: 320, lang: "Inglés", region: "Caribe" },
    { keyword: "el poblado medellin apartments for sale", volume: 260, lang: "Inglés", region: "Medellín" },
    { keyword: "colombia apartments for sale", volume: 260, lang: "Inglés", region: "Nacional" },
    { keyword: "barranquilla homes for sale", volume: 210, lang: "Inglés", region: "Caribe" },
    { keyword: "condos in medellin colombia", volume: 210, lang: "Inglés", region: "Medellín" },
    { keyword: "pereira colombia real estate", volume: 170, lang: "Inglés", region: "Eje Cafetero" },
    { keyword: "luxury homes in colombia", volume: 170, lang: "Inglés", region: "Nacional" },
    { keyword: "luxury real estate medellin colombia", volume: 110, lang: "Inglés", region: "Medellín" },
    { keyword: "investing in colombia real estate", volume: 110, lang: "Inglés", region: "Nacional" },
    { keyword: "best place to buy property in colombia", volume: 110, lang: "Inglés", region: "Nacional" },

    // ESPAÑOL (High Volume)
    { keyword: "casas en colombia", volume: 1300, lang: "Español", region: "Nacional" },
    { keyword: "apartamentos en venta medellin", volume: 880, lang: "Español", region: "Medellín" },
    { keyword: "finca en colombia", volume: 880, lang: "Español", region: "Nacional" },
    { keyword: "casas en venta en colombia", volume: 590, lang: "Español", region: "Nacional" },
    { keyword: "venta casas medellin", volume: 590, lang: "Español", region: "Medellín" },
    { keyword: "casas en venta bogota", volume: 480, lang: "Español", region: "Bogotá" },
    { keyword: "casas medellin", volume: 480, lang: "Español", region: "Medellín" },
    { keyword: "venta casas cali", volume: 390, lang: "Español", region: "Cali/Valle" },
    { keyword: "casas cali", volume: 390, lang: "Español", region: "Cali/Valle" },
    { keyword: "casa bogota", volume: 390, lang: "Español", region: "Bogotá" },
    { keyword: "casas en venta cali colombia", volume: 320, lang: "Español", region: "Cali/Valle" },
    { keyword: "precio de casas en colombia", volume: 320, lang: "Español", region: "Nacional" },
    { keyword: "casas en venta barranquilla", volume: 260, lang: "Español", region: "Caribe" },
    { keyword: "casas en venta bucaramanga", volume: 260, lang: "Español", region: "Santander" },
    { keyword: "casa en el poblado medellin", volume: 260, lang: "Español", region: "Medellín" },
    { keyword: "casa pereira venta", volume: 260, lang: "Español", region: "Eje Cafetero" },
    { keyword: "apartamentos en medellin el poblado", volume: 210, lang: "Español", region: "Medellín" },
    { keyword: "casas en venta en colombia baratas", volume: 210, lang: "Español", region: "Nacional" },
    { keyword: "venta de apartamentos medellin", volume: 170, lang: "Español", region: "Medellín" },
    { keyword: "casas barranquilla", volume: 170, lang: "Español", region: "Caribe" },
    { keyword: "casa en venta en pereira colombia", volume: 170, lang: "Español", region: "Eje Cafetero" },
    { keyword: "casas en venta colombia bogota", volume: 170, lang: "Español", region: "Bogotá" },
    { keyword: "comprar apartamento en medellin", volume: 140, lang: "Español", region: "Medellín" },
    { keyword: "casas en venta en ibague", volume: 140, lang: "Español", region: "Tolima" },
    { keyword: "casas venta armenia quindio", volume: 140, lang: "Español", region: "Eje Cafetero" },
    { keyword: "santa marta colombia casas en venta", volume: 140, lang: "Español", region: "Caribe" },
    { keyword: "venta casa manizales", volume: 140, lang: "Español", region: "Eje Cafetero" },
    { keyword: "compra apartamento bogota", volume: 110, lang: "Español", region: "Bogotá" },
    { keyword: "finca raiz bucaramanga", volume: 110, lang: "Español", region: "Santander" },
    { keyword: "casas en venta cartagena de indias", volume: 110, lang: "Español", region: "Caribe" },
    { keyword: "venta de fincas baratas en colombia", volume: 110, lang: "Español", region: "Nacional" }
  ];

  // Lógica para filtrar tabla
  const filteredData = useMemo(() => {
    let data = rawData.filter(item => 
      (activeCategory === 'Todas' || 
       (activeCategory === 'Inglés' && item.lang === 'Inglés') ||
       (activeCategory === 'Español' && item.lang === 'Español') ||
       item.region === activeCategory
      ) &&
      item.keyword.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortBy === 'volume') {
      data.sort((a, b) => b.volume - a.volume);
    }

    return data;
  }, [rawData, searchTerm, activeCategory, sortBy]);

  const totalVolume = filteredData.reduce((acc, curr) => acc + curr.volume, 0);

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
            <span className="text-xs font-bold tracking-wide uppercase text-cyan-400">Plan Director Inmobiliario 2026</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Vender Colombia al Mundo: <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Hegemonía Digital y AIO</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
          Estrategia para capturar la demanda internacional de Real Estate (500k búsquedas/mes) mediante 5 Nodos de Autoridad y Validación por IA.
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="container mx-auto px-6 mb-12">
        <div className="flex flex-wrap justify-center gap-2 p-1 bg-slate-900/50 backdrop-blur rounded-2xl border border-white/5 max-w-fit mx-auto">
          {['opportunity', 'market', 'funnel', 'execution', 'proposal'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-xl font-semibold transition-all text-sm ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-[0_0_20px_rgba(34,211,238,0.3)]'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab === 'opportunity' && 'Contexto'}
              {tab === 'market' && 'Análisis de Demanda'}
              {tab === 'funnel' && 'Embudo de Ventas (ROI)'}
              {tab === 'execution' && 'Plan 12 Meses'}
              {tab === 'proposal' && 'Propuesta y Manifiesto'}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 pb-24">
        <div className="bg-slate-900/50 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm shadow-2xl relative overflow-hidden">
          
          {/* =========================================
              TAB 0: OPORTUNIDAD DE MERCADO (Contexto)
             ========================================= */}
          {activeTab === 'opportunity' && (
            <div className="animate-fade-in-up">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Oportunidad de Mercado en el Negocio Internacional</h2>
                  <p className="text-xl text-gray-400 max-w-2xl mx-auto">No venimos a hablar de un problema de marketing, venimos a capturar una demanda desatendida.</p>
              </div>

              {/* LA DEMANDA */}
              <div className="mb-20">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-8 flex items-center justify-center gap-3 uppercase tracking-widest border-b border-white/5 pb-4">
                      <Globe size={28} /> La Demanda
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                      {/* Búsquedas Globales */}
                      <div className="bg-slate-950 p-8 rounded-2xl border border-white/10 shadow-lg relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full"></div>
                          <p className="text-gray-400 font-bold mb-2 uppercase tracking-wider text-xs">Búsquedas en Google</p>
                          <div className="text-5xl font-black text-white mb-6">Medio Millón<span className="text-xl text-gray-500 font-medium block mt-1">/mes en todo el mundo</span></div>
                          <div className="space-y-4">
                              <div className="flex justify-between items-center border-b border-white/5 pb-3">
                                  <span className="text-gray-300">Generadas desde Colombia</span>
                                  <span className="font-bold text-white text-lg">50%</span>
                              </div>
                              <div className="flex justify-between items-center border-b border-white/5 pb-3 bg-cyan-900/20 p-3 rounded-lg border border-cyan-500/20">
                                  <span className="text-cyan-400">Búsquedas en Inglés (Local)</span>
                                  <span className="font-bold text-cyan-400 text-lg">24K</span>
                              </div>
                               <div className="flex justify-between items-center pt-2">
                                  <span className="text-gray-300">Generadas Fuera de Colombia</span>
                                  <span className="font-bold text-white text-lg">50%</span>
                              </div>
                          </div>
                      </div>

                      {/* Distribución */}
                      <div className="bg-slate-950 p-8 rounded-2xl border border-white/10 shadow-lg relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-bl-full"></div>
                          <p className="text-gray-400 font-bold mb-6 uppercase tracking-wider text-xs">Distribución del Tráfico Exterior</p>
                          <div className="space-y-5">
                              <div className="flex items-center gap-4 group">
                                  <div className="w-16 text-right font-black text-xl text-blue-400">27%</div>
                                  <div className="flex-1 bg-slate-900 h-6 rounded-full overflow-hidden border border-white/5">
                                      <div className="bg-gradient-to-r from-blue-600 to-blue-400 h-full w-[27%] transition-all group-hover:w-[30%]"></div>
                                  </div>
                                  <div className="w-16 font-bold text-gray-200">EEUU</div>
                              </div>
                              <div className="flex items-center gap-4">
                                  <div className="w-16 text-right font-bold text-cyan-400">4%</div>
                                  <div className="flex-1 bg-slate-900 h-4 rounded-full overflow-hidden border border-white/5">
                                      <div className="bg-cyan-500 h-full w-[4%]"></div>
                                  </div>
                                  <div className="w-16 text-sm text-gray-400">España</div>
                              </div>
                              <div className="flex items-center gap-4">
                                  <div className="w-16 text-right font-bold text-emerald-400">3%</div>
                                  <div className="flex-1 bg-slate-900 h-4 rounded-full overflow-hidden border border-white/5">
                                      <div className="bg-emerald-500 h-full w-[3%]"></div>
                                  </div>
                                  <div className="w-16 text-sm text-gray-400">Canadá</div>
                              </div>
                              <div className="flex items-center gap-4">
                                  <div className="w-16 text-right font-bold text-amber-400">3%</div>
                                  <div className="flex-1 bg-slate-900 h-4 rounded-full overflow-hidden border border-white/5">
                                      <div className="bg-amber-500 h-full w-[3%]"></div>
                                  </div>
                                  <div className="w-16 text-sm text-gray-400">México</div>
                              </div>
                              <div className="flex items-center gap-4">
                                  <div className="w-16 text-right font-bold text-gray-600">13%</div>
                                  <div className="flex-1 bg-slate-900 h-4 rounded-full overflow-hidden border border-white/5">
                                      <div className="bg-gray-700 h-full w-[13%]"></div>
                                  </div>
                                  <div className="w-16 text-sm text-gray-500">Otros</div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-gradient-to-br from-blue-900/40 to-slate-900 border border-blue-500/30 p-8 rounded-2xl text-center transform hover:-translate-y-1 transition-transform">
                          <p className="text-blue-400 text-sm font-bold uppercase tracking-widest mb-2">Foco EEUU</p>
                          <p className="text-5xl font-black text-white mb-4">150K</p>
                          <div className="flex justify-center gap-6 text-sm bg-black/30 p-3 rounded-xl border border-white/5">
                              <div className="text-left"><span className="block font-bold text-white text-lg">100K</span><span className="text-gray-400 text-xs">Inglés</span></div>
                              <div className="w-px bg-white/10"></div>
                              <div className="text-left"><span className="block font-bold text-white text-lg">50K</span><span className="text-gray-400 text-xs">Español</span></div>
                          </div>
                      </div>
                      <div className="bg-slate-900 p-8 rounded-2xl border border-white/5 text-center flex flex-col justify-center">
                          <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-2">Español Exterior</p>
                          <p className="text-4xl font-black text-white mb-2">110K</p>
                          <p className="text-xs text-gray-500">Búsquedas al mes por fuera de Colombia</p>
                      </div>
                       <div className="bg-slate-900 p-8 rounded-2xl border border-white/5 text-center flex flex-col justify-center">
                          <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-2">Inglés Local</p>
                          <p className="text-4xl font-black text-white mb-2">24K</p>
                          <p className="text-xs text-gray-500">Extranjeros que ya están en el país</p>
                      </div>
                  </div>
              </div>

              {/* LA OFERTA & RETOS */}
              <div className="mb-20">
                  <h3 className="text-2xl font-bold text-red-400 mb-8 flex items-center justify-center gap-3 uppercase tracking-widest border-b border-white/5 pb-4">
                      <AlertTriangle size={28} /> La Oferta y Los Retos
                  </h3>
                  
                  <div className="bg-gradient-to-r from-red-900/20 to-slate-900 border-l-4 border-red-500 p-8 rounded-r-2xl mb-12 shadow-lg">
                      <p className="text-2xl text-white leading-relaxed font-light">
                          "Al mes hay <strong className="text-red-400 font-bold">250.000 personas con dólares y euros en la mano</strong> buscando y Google les está recomendando <strong className="text-white bg-red-500/20 px-2 rounded">indexadores internacionales</strong> que después venden leads fríos a las grandes constructoras."
                      </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-slate-950 p-6 rounded-2xl border border-white/10 group">
                           <h4 className="font-bold text-white mb-4 flex items-center gap-2 text-lg">
                              <Search className="text-gray-400"/> Quién se lleva el tráfico hoy
                           </h4>
                           <div className="aspect-[4/3] bg-slate-900 rounded-xl border border-white/5 flex flex-col items-center justify-center relative overflow-hidden">
                               {/* Hint para reemplazar con imagen real */}
                               <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/90 z-10"></div>
                               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070')] bg-cover bg-center opacity-10 grayscale group-hover:opacity-30 transition-opacity"></div>
                               <div className="z-20 text-center p-6">
                                  <div className="inline-flex gap-4 mb-4 opacity-50">
                                      <div className="w-12 h-12 bg-white rounded-lg"></div>
                                      <div className="w-12 h-12 bg-white rounded-lg"></div>
                                      <div className="w-12 h-12 bg-white rounded-lg"></div>
                                  </div>
                                  <p className="text-red-300 font-bold uppercase tracking-widest text-xs mb-2">Espacio para Capturas</p>
                                  <p className="text-gray-400 text-sm">Zillow | FazWaz | Point2</p>
                               </div>
                           </div>
                      </div>
                      <div className="bg-slate-950 p-6 rounded-2xl border border-white/10 group">
                           <h4 className="font-bold text-white mb-4 flex items-center gap-2 text-lg">
                              <BrainCircuit className="text-purple-400"/> El Nuevo Vendedor: IA
                           </h4>
                           <div className="aspect-[4/3] bg-slate-900 rounded-xl border border-purple-500/20 flex flex-col items-center justify-center relative overflow-hidden shadow-[0_0_30px_rgba(168,85,247,0.05)] group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all">
                               {/* Hint para reemplazar con imagen de ChatGPT */}
                               <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-slate-950/90 z-10"></div>
                               <div className="z-20 text-center p-6">
                                  <MessageSquare size={48} className="mx-auto text-purple-500/30 mb-4" />
                                  <p className="text-purple-400 font-bold uppercase tracking-widest text-xs mb-2">Espacio para Captura IA</p>
                                  <p className="text-gray-400 text-sm leading-relaxed">Muestra cómo ChatGPT recomienda proyectos específicos basados en autoridad y data, no en pauta pagada.</p>
                               </div>
                           </div>
                      </div>
                  </div>
              </div>

              {/* ACCIONES */}
              <div>
                  <h3 className="text-2xl font-bold text-emerald-400 mb-8 flex items-center justify-center gap-3 uppercase tracking-widest border-b border-white/5 pb-4">
                      <CheckCircle size={28} /> Acciones Propuestas
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                      <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-3xl border border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.1)] transform hover:-translate-y-1 transition-transform">
                          <div className="w-16 h-16 bg-emerald-900/30 rounded-2xl flex items-center justify-center text-emerald-400 mb-6 shadow-inner border border-emerald-500/20">
                              <Globe size={32} />
                          </div>
                          <h4 className="text-2xl font-bold text-white mb-4">Desplazar a los Indexadores</h4>
                          <p className="text-gray-400 leading-relaxed">Propongo que ustedes desplacen a los indexadores internacionales en Google. Es hora de ser <strong className="text-emerald-300">dueños de la demanda</strong>, no inquilinos de portales de terceros.</p>
                      </div>
                      <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-3xl border border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.1)] transform hover:-translate-y-1 transition-transform">
                          <div className="w-16 h-16 bg-purple-900/30 rounded-2xl flex items-center justify-center text-purple-400 mb-6 shadow-inner border border-purple-500/20">
                              <BrainCircuit size={32} />
                          </div>
                          <h4 className="text-2xl font-bold text-white mb-4">Construir Autoridad AIO</h4>
                          <p className="text-gray-400 leading-relaxed">Propongo construir la estructura semántica necesaria para que <strong className="text-purple-300">ChatGPT y Gemini los recomiende a ustedes</strong> directamente ante el inversor extranjero.</p>
                      </div>
                  </div>

                  <div className="bg-slate-950 p-10 rounded-3xl border border-white/10 text-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950 to-slate-950"></div>
                      <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-8 relative z-10">La Evolución del Embudo</p>
                      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-3xl md:text-5xl font-black relative z-10">
                          <span className="text-slate-600">SEM</span>
                          <ArrowRight className="text-cyan-500 rotate-90 md:rotate-0" size={40}/>
                          <span className="text-cyan-400">SEO</span>
                          <ArrowRight className="text-purple-500 rotate-90 md:rotate-0" size={40}/>
                          <span className="text-purple-400 drop-shadow-[0_0_20px_rgba(168,85,247,0.6)]">AIO</span>
                      </div>
                  </div>
              </div>
            </div>
          )}

          {/* =========================================
              TAB 1: ANÁLISIS DE DEMANDA (Mercado)
             ========================================= */}
          {activeTab === 'market' && (
            <div className="animate-fade-in-up">
              
              {/* KPIs Globales */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-slate-950 p-6 rounded-2xl border border-white/5">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Búsquedas Mundiales</p>
                  <p className="text-4xl font-extrabold text-white">500.000</p>
                  <p className="text-xs text-cyan-400 mt-2">Mes / Inmuebles en Colombia</p>
                </div>
                <div className="bg-cyan-900/20 p-6 rounded-2xl border border-cyan-500/20">
                  <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2">Mercado Exterior</p>
                  <p className="text-4xl font-extrabold text-white">250.000</p>
                  <p className="text-xs text-cyan-200 mt-2">50% de la demanda es internacional</p>
                </div>
                <div className="bg-slate-950 p-6 rounded-2xl border border-white/5">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Foco EEUU</p>
                  <p className="text-4xl font-extrabold text-white">150.000</p>
                  <p className="text-xs text-gray-400 mt-2">27% del total generado en EEUU</p>
                </div>
              </div>

              {/* SECCIÓN: 5 NODOS REGIONALES */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-white mb-6">Los 5 Nodos de Autoridad Regionales</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                  {/* Nodo Andino */}
                  <div className="bg-slate-950 p-5 rounded-xl border border-white/10 relative group hover:border-blue-500/30 transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 bg-blue-900/20 rounded-lg text-blue-400"><Shield size={20}/></div>
                      <span className="text-2xl font-bold text-white">58k</span>
                    </div>
                    <h4 className="font-bold text-white mb-1">Nodo Andino</h4>
                    <p className="text-xs text-gray-500 mb-2">Bogotá, Sabana, Anapoima</p>
                    <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                       <div className="bg-blue-500 h-full w-[85%]"></div>
                    </div>
                  </div>

                  {/* Nodo Paisa */}
                  <div className="bg-slate-950 p-5 rounded-xl border border-white/10 relative group hover:border-purple-500/30 transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 bg-purple-900/20 rounded-lg text-purple-400"><Zap size={20}/></div>
                      <span className="text-2xl font-bold text-white">55k</span>
                    </div>
                    <h4 className="font-bold text-white mb-1">Nodo Paisa</h4>
                    <p className="text-xs text-gray-500 mb-2">Medellín, Poblado, Oriente</p>
                    <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                       <div className="bg-purple-500 h-full w-[80%]"></div>
                    </div>
                  </div>

                   {/* Nodo Valle */}
                   <div className="bg-slate-950 p-5 rounded-xl border border-white/10 relative group hover:border-orange-500/30 transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 bg-orange-900/20 rounded-lg text-orange-400"><Home size={20}/></div>
                      <span className="text-2xl font-bold text-white">30k</span>
                    </div>
                    <h4 className="font-bold text-white mb-1">Nodo Valle</h4>
                    <p className="text-xs text-gray-500 mb-2">Cali, Ciudad Jardín, Pance</p>
                    <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                       <div className="bg-orange-500 h-full w-[45%]"></div>
                    </div>
                    <div className="absolute top-2 right-2 px-2 py-0.5 bg-orange-500/20 text-orange-400 text-[9px] font-bold uppercase rounded-full border border-orange-500/30">
                      Remesas
                    </div>
                  </div>

                  {/* Nodo Caribe */}
                  <div className="bg-slate-950 p-5 rounded-xl border border-white/10 relative group hover:border-cyan-500/30 transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 bg-cyan-900/20 rounded-lg text-cyan-400"><Globe size={20}/></div>
                      <span className="text-2xl font-bold text-white">24k</span>
                    </div>
                    <h4 className="font-bold text-white mb-1">Nodo Caribe</h4>
                    <p className="text-xs text-gray-500 mb-2">Cartagena, Santa Marta</p>
                    <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                       <div className="bg-cyan-500 h-full w-[35%]"></div>
                    </div>
                  </div>

                  {/* Nodo Cafetero */}
                  <div className="bg-slate-950 p-5 rounded-xl border border-white/10 relative group hover:border-emerald-500/30 transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 bg-emerald-900/20 rounded-lg text-emerald-400"><Coffee size={20}/></div>
                      <span className="text-2xl font-bold text-white">18k</span>
                    </div>
                    <h4 className="font-bold text-white mb-1">Nodo Cafetero</h4>
                    <p className="text-xs text-gray-500 mb-2">Pereira, Manizales, Cerritos</p>
                    <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                       <div className="bg-emerald-500 h-full w-[25%]"></div>
                    </div>
                    <div className="absolute top-2 right-2 px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-[9px] font-bold uppercase rounded-full border border-emerald-500/30">
                      Wellness
                    </div>
                  </div>
                </div>
              </div>

              {/* --- EXPLORADOR DE MERCADO --- */}
              <div className="bg-slate-950 p-8 rounded-2xl border border-white/10 mb-8">
                  <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-white/10 pb-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-white flex items-center gap-2">
                        <Search className="text-cyan-400" /> Explorador de Mercado Real
                      </h3>
                      <p className="text-gray-400 text-sm">Datos de búsqueda reales (+100/mes) que validan la demanda.</p>
                    </div>
                    <div className="mt-4 md:mt-0 text-right">
                      <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Volumen Muestra</p>
                      <div className="text-3xl font-bold text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]">
                        {totalVolume.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  {/* Controles de Filtro */}
                  <div className="bg-slate-900 p-4 rounded-xl border border-white/10 mb-6 flex flex-col md:flex-row gap-4 justify-between items-center">
                    <div className="relative w-full md:w-1/3">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                      <input 
                        type="text" 
                        placeholder="Ej: luxury, medellin, fincas..." 
                        className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all text-sm"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
                      {['Todas', 'Inglés', 'Español', 'Medellín', 'Bogotá', 'Caribe', 'Eje Cafetero'].map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setActiveCategory(cat)}
                          className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors border ${
                            activeCategory === cat 
                              ? 'bg-cyan-500 text-slate-950 border-cyan-400' 
                              : 'bg-slate-800 text-gray-400 border-white/10 hover:border-cyan-500/50 hover:text-cyan-400'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Tabla de Datos */}
                  <div className="bg-slate-900 rounded-xl border border-white/10 overflow-hidden">
                    <div className="overflow-x-auto max-h-[400px] scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900">
                      <table className="w-full text-left border-collapse">
                        <thead className="sticky top-0 bg-slate-800 z-10 shadow-lg">
                          <tr>
                            <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Keyword (Lo que buscan)</th>
                            <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right cursor-pointer hover:text-cyan-400 transition-colors" onClick={() => setSortBy('volume')}>
                              Volumen <ArrowDown size={12} className="inline" />
                            </th>
                            <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-center">Idioma</th>
                            <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-center">Región</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                          {filteredData.map((row, index) => (
                            <tr key={index} className="hover:bg-white/5 transition-colors group cursor-default">
                              <td className="p-3 text-sm">
                                <p className="font-medium text-gray-300 group-hover:text-white transition-colors">{row.keyword}</p>
                              </td>
                              <td className="p-3 text-right font-mono text-cyan-400 text-sm">
                                {row.volume.toLocaleString()}
                              </td>
                              <td className="p-3 text-center">
                                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                  row.lang === 'Inglés' ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/20' : 'text-orange-400 bg-orange-500/10 border border-orange-500/20'
                                }`}>
                                  {row.lang}
                                </span>
                              </td>
                              <td className="p-3 text-center">
                                <span className="text-xs text-gray-500">{row.region}</span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
              </div>

            </div>
          )}

          {/* =========================================
              TAB 2: FUNNEL & ROI
             ========================================= */}
          {activeTab === 'funnel' && (
            <div className="animate-fade-in-up">
               <h2 className="text-3xl font-bold mb-4 text-white">Embudo de Conversión Optimizado</h2>
               <p className="text-gray-400 mb-12">Proyección actualizada con doble flujo (Inglés/Español) y pre-calificación financiera.</p>

               <div className="grid lg:grid-cols-1 gap-12 mb-16">
                  {/* Embudo Visual Detallado */}
                  <div className="space-y-4 max-w-4xl mx-auto w-full">
                     
                     {/* 1. Impresiones */}
                     <div className="relative">
                        <div className="bg-slate-950 p-4 rounded-xl border border-white/10 flex justify-between items-center z-10 relative">
                            <div className="flex items-center gap-3">
                                <Users className="text-gray-500" size={20}/>
                                <div>
                                    <span className="text-gray-400 font-bold block text-sm">Impresiones (Share 40%)</span>
                                    <span className="text-[10px] text-gray-600 uppercase">Ing: 70.800 | Esp: 44.000</span>
                                </div>
                            </div>
                            <span className="text-white font-bold text-xl">114.800</span>
                        </div>
                     </div>
                     <div className="flex justify-center"><ArrowDown className="text-gray-800" size={16} /></div>

                     {/* 2. Visitas Web */}
                     <div className="relative w-[95%] mx-auto">
                        <div className="bg-blue-900/10 p-4 rounded-xl border border-blue-500/20 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <Globe className="text-blue-500" size={20}/>
                                <div>
                                    <span className="text-blue-300 font-bold block text-sm">Visitas Web (CTR 8%)</span>
                                    <span className="text-[10px] text-blue-500/60 uppercase">Ing: 5.664 | Esp: 3.520</span>
                                </div>
                            </div>
                            <span className="text-white font-bold text-xl">9.184</span>
                        </div>
                     </div>
                     <div className="flex justify-center"><ArrowDown className="text-gray-800" size={16} /></div>

                     {/* 3. Visitas Reales */}
                     <div className="relative w-[85%] mx-auto">
                        <div className="bg-blue-900/20 p-4 rounded-xl border border-blue-400/30 flex justify-between items-center shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                            <div className="flex items-center gap-3">
                                <CheckCircle className="text-blue-400" size={20}/>
                                <div>
                                    <span className="text-blue-200 font-bold block text-sm">Visitas Reales (30%)</span>
                                    <span className="text-[10px] text-blue-300/60 uppercase">Filtrado de Rebote</span>
                                </div>
                            </div>
                            <span className="text-white font-bold text-xl">2.755</span>
                        </div>
                     </div>
                     <div className="flex justify-center"><ArrowDown className="text-gray-800" size={16} /></div>

                     {/* 4. Leads */}
                     <div className="relative w-[75%] mx-auto">
                        <div className="bg-indigo-900/20 p-4 rounded-xl border border-indigo-500/30 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <Users className="text-indigo-400" size={20}/>
                                <div>
                                    <span className="text-indigo-300 font-bold block text-sm">Leads Calificados (10%)</span>
                                    <span className="text-[10px] text-indigo-400/60 uppercase">Ing: 170 | Esp: 106</span>
                                </div>
                            </div>
                            <span className="text-white font-bold text-xl">276</span>
                        </div>
                     </div>
                     <div className="flex justify-center"><ArrowDown className="text-gray-800" size={16} /></div>

                     {/* 5. Cálculo Financiación */}
                     <div className="relative w-[65%] mx-auto">
                        <div className="bg-purple-900/20 p-4 rounded-xl border border-purple-500/30 flex justify-between items-center shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                            <div className="flex items-center gap-3">
                                <Calculator className="text-purple-400" size={20}/>
                                <div>
                                    <span className="text-purple-200 font-bold block text-sm">Pre-Aprobados (50%)</span>
                                    <span className="text-[10px] text-purple-300/60 uppercase">Ing: 85 | Esp: 53</span>
                                </div>
                            </div>
                            <span className="text-white font-bold text-xl">138</span>
                        </div>
                     </div>
                     <div className="flex justify-center"><ArrowDown className="text-gray-800" size={16} /></div>

                     {/* 6. VENTAS */}
                     <div className="relative w-[55%] mx-auto">
                        <div className="bg-emerald-600 p-6 rounded-2xl border border-emerald-400 flex justify-between items-center shadow-[0_0_30px_rgba(16,185,129,0.4)] transform hover:scale-105 transition-transform cursor-pointer">
                            <div>
                                <span className="text-slate-950 font-black text-xl block">VENTAS (20%)</span>
                                <span className="text-emerald-900 text-xs font-bold uppercase">Cierre sobre Aprobados</span>
                            </div>
                            <div className="text-right">
                                <span className="text-white font-black text-4xl block">28</span>
                                <span className="text-emerald-100 text-[10px] font-bold">17 Inglés / 11 Español</span>
                            </div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* EVOLUCIÓN TRÁFICO (GRÁFICA 24 MESES) */}
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

                {/* --- IMPACTO FINANCIERO A 24 MESES (INJECTED) --- */}
                <div className="mt-10 pt-8 border-t border-white/5">
                  <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                    <DollarSign className="text-emerald-400" size={20} />
                    Impacto Financiero Proyectado (Costo SEM vs Ventas)
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-white/10 text-gray-500 text-xs uppercase tracking-wider">
                          <th className="pb-3 font-bold">Mes</th>
                          <th className="pb-3 font-bold text-right">Inversión SEM</th>
                          <th className="pb-3 font-bold text-right">Visitas Totales</th>
                          <th className="pb-3 font-bold text-right text-emerald-400">Ventas Est.</th>
                          <th className="pb-3 font-bold text-right">CAC SEM</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5 text-sm">
                        <tr className="hover:bg-white/5 transition-colors">
                          <td className="py-4 font-bold text-white">Mes 1</td>
                          <td className="py-4 text-right text-red-400 font-mono">4.500€</td>
                          <td className="py-4 text-right text-gray-300 font-mono">9.184</td>
                          <td className="py-4 text-right font-bold text-emerald-400 font-mono">27</td>
                          <td className="py-4 text-right text-gray-400 font-mono">163,33€</td>
                        </tr>
                        <tr className="hover:bg-white/5 transition-colors">
                          <td className="py-4 font-bold text-white">Mes 6</td>
                          <td className="py-4 text-right text-orange-400 font-mono">4.050€</td>
                          <td className="py-4 text-right text-gray-300 font-mono">9.643</td>
                          <td className="py-4 text-right font-bold text-emerald-400 font-mono">28</td>
                          <td className="py-4 text-right text-gray-400 font-mono">140,00€</td>
                        </tr>
                        <tr className="hover:bg-white/5 transition-colors">
                          <td className="py-4 font-bold text-white">Mes 12</td>
                          <td className="py-4 text-right text-yellow-400 font-mono">2.700€</td>
                          <td className="py-4 text-right text-gray-300 font-mono">12.168</td>
                          <td className="py-4 text-right font-bold text-emerald-400 font-mono">36</td>
                          <td className="py-4 text-right text-gray-400 font-mono">73,97€</td>
                        </tr>
                        <tr className="hover:bg-white/5 transition-colors">
                          <td className="py-4 font-bold text-white">Mes 24</td>
                          <td className="py-4 text-right text-green-400 font-mono">1.350€</td>
                          <td className="py-4 text-right text-gray-300 font-mono">15.153</td>
                          <td className="py-4 text-right font-bold text-emerald-400 font-mono text-lg">45</td>
                          <td className="py-4 text-right text-white font-mono font-bold text-lg">29,70€</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* =========================================
              TAB 3: EXECUTION (Plan 12 Meses)
             ========================================= */}
          {activeTab === 'execution' && (
            <div className="animate-fade-in-up">
                <h2 className="text-3xl font-bold mb-12 text-center text-white">Hoja de Ruta 2026: Dominio del Mercado</h2>
                
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-cyan-500/20 before:to-transparent">
                  
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-cyan-500 bg-cyan-500/20 text-cyan-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                      <span className="font-bold">1</span>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-950 p-6 rounded-xl border border-white/10">
                      <h3 className="font-bold text-white text-lg mb-2">Fase 1: Auditoría y Cimientos AIO</h3>
                      <p className="text-sm text-gray-400 italic mb-4">Mes 1 - 2</p>
                      <ul className="text-sm text-gray-300 space-y-2">
                        <li className="flex items-center gap-2"><CheckCircle size={14} className="text-cyan-500"/> Definición de Proyectos y ROI por Mercado.</li>
                        <li className="flex items-center gap-2"><CheckCircle size={14} className="text-cyan-500"/> Despliegue de los 5 Nodos Satélites.</li>
                        <li className="flex items-center gap-2"><CheckCircle size={14} className="text-cyan-500"/> Estructuración Semántica (Schema) para Google & IA.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-blue-500 bg-blue-500/20 text-blue-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                      <span className="font-bold">2</span>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-950 p-6 rounded-xl border border-white/10">
                      <h3 className="font-bold text-white text-lg mb-2">Fase 2: Activación y Captación</h3>
                      <p className="text-sm text-gray-400 italic mb-4">Mes 3 - 4</p>
                      <ul className="text-sm text-gray-300 space-y-2">
                        <li className="flex items-center gap-2"><Zap size={14} className="text-blue-500"/> Lanzamiento de Campañas Hiper-segmentadas (Anglo vs Diáspora).</li>
                        <li className="flex items-center gap-2"><Zap size={14} className="text-blue-500"/> Implementación de Asistentes de IA de Venta.</li>
                        <li className="flex items-center gap-2"><Zap size={14} className="text-blue-500"/> Activación de Nodos de Autoridad en Google.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-emerald-500 bg-emerald-500/20 text-emerald-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                      <span className="font-bold">3</span>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-950 p-6 rounded-xl border border-white/10">
                      <h3 className="font-bold text-white text-lg mb-2">Fase 3: Optimización y Transferencia</h3>
                      <p className="text-sm text-gray-400 italic mb-4">Mes 5 - 12</p>
                      <ul className="text-sm text-gray-300 space-y-2">
                        <li className="flex items-center gap-2"><TrendingUp size={14} className="text-emerald-500"/> Escalado de inversión según ROI (28 ventas/mes).</li>
                        <li className="flex items-center gap-2"><TrendingUp size={14} className="text-emerald-500"/> Formación al equipo de ventas internacional.</li>
                        <li className="flex items-center gap-2"><TrendingUp size={14} className="text-emerald-500"/> Entrega de Autonomía de Gestión.</li>
                      </ul>
                    </div>
                  </div>

                </div>
            </div>
          )}

          {/* =========================================
              TAB 4: PROPOSAL (Propuesta y Manifiesto)
             ========================================= */}
          {activeTab === 'proposal' && (
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-12 text-center text-white">Propuesta de Valor y Compromiso</h2>

              <div className="bg-slate-950 rounded-2xl overflow-hidden mb-12 border border-white/10 shadow-2xl">
                <div className="p-8 border-b border-white/10 bg-slate-900/50 text-center">
                  <Handshake size={48} className="mx-auto text-cyan-400 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Manifiesto de Colaboración</h3>
                  <p className="text-gray-400 max-w-2xl mx-auto">Para dominar el mercado internacional, operamos bajo reglas de alta eficiencia. No soy un proveedor, soy tu Arquitecto de Crecimiento.</p>
                </div>
                <div className="grid md:grid-cols-2">
                  <div className="p-8 border-r border-white/10">
                    <h4 className="text-cyan-400 font-bold uppercase tracking-widest text-xs mb-6 flex items-center gap-2"><CheckCircle size={16}/> Mis Compromisos</h4>
                    <ul className="space-y-4 text-sm text-gray-300">
                      <li>• Producción ILIMITADA de Nodos de Autoridad (Landing, Micrositios).</li>
                      <li>• Obsesión por el objetivo de 28 ventas mensuales.</li>
                      <li>• Configuración técnica del ecosistema AIO para validación por IA.</li>
                      <li>• Reportes de Pipeline en tiempo real.</li>
                    </ul>
                  </div>
                  <div className="p-8 bg-slate-900/30">
                    <h4 className="text-red-400 font-bold uppercase tracking-widest text-xs mb-6 flex items-center gap-2"><AlertTriangle size={16}/> Tus Compromisos</h4>
                    <ul className="space-y-4 text-sm text-gray-300">
                      <li>• Compromiso de hierro de 12 meses de ejecución.</li>
                      <li>• Acceso total a inventario y proyecciones financieras.</li>
                      <li>• Cero Micro-management sobre el diseño técnico.</li>
                      <li>• Inversión en Ads de 4.500€/mes (Fase activación).</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-10 rounded-3xl border border-cyan-500/20 text-center">
                <p className="text-cyan-400 font-bold uppercase tracking-widest text-xs mb-4">Inversión Consultoría Estratégica</p>
                <div className="flex items-center justify-center gap-2 mb-8">
                  <span className="text-6xl font-black text-white">3.000€</span>
                  <span className="text-xl text-gray-500 font-medium">/mes</span>
                </div>
                <a href="https://wa.me/34655328878?text=Acepto%20el%20reto%20Inmobiliario" target="_blank" rel="noopener noreferrer" className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-12 py-5 rounded-full font-bold text-xl shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all inline-block hover:scale-105">
                  Iniciar Expansión Internacional
                </a>
                <p className="text-[10px] text-gray-600 mt-6 uppercase tracking-widest">Contrato anual cerrado. Exclusividad por zona geográfica disponible.</p>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default EstrategiaConstructoras;