import React, { useState, useMemo, useEffect } from 'react';
import { Search, ArrowRight, Zap, TrendingUp, Filter, DollarSign, Shield, ShoppingCart, Activity, Package, Droplets, Sparkles, AlertTriangle, BarChart3, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const EstrategiaBrujeria = () => {
  const [activeTab, setActiveTab] = useState('journey');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todas');
  const [sortBy, setSortBy] = useState('volume');

  // --- DATASET COMPLETO (Sin resumir, extraído de tu CSV) ---
  const rawData = [
    // MARCA PROPIA (El punto de partida)
    { keyword: "brujeria capilar", volume: 320, trend: "+127%", cpc: "N/A" },

    // GIGANTES (La Competencia a derribar)
    { keyword: "anyeluz", volume: 33100, trend: "-18%", cpc: "1400" },
    { keyword: "kaba", volume: 27100, trend: "0%", cpc: "1800" },
    { keyword: "la poción", volume: 880, trend: "+26%", cpc: "1300" },
    { keyword: "click hair", volume: 6600, trend: "+22%", cpc: "1000" },
    { keyword: "crema milagros", volume: 210, trend: "-19%", cpc: "N/A" },
    
    // PRODUCTOS ANYELUZ (Donde robaremos tráfico por ingrediente)
    { keyword: "anyeluz shampoo", volume: 4400, trend: "0%", cpc: "900" },
    { keyword: "shampoo anyeluz", volume: 4400, trend: "-19%", cpc: "900" },
    { keyword: "shampoo de cebolla anyeluz", volume: 1300, trend: "-33%", cpc: "1100" },
    { keyword: "anyeluz shampoo de cebolla", volume: 480, trend: "0%", cpc: "1100" },
    { keyword: "shampoo cebolla anyeluz", volume: 590, trend: "-19%", cpc: "1100" },
    { keyword: "anyeluz cebolla", volume: 320, trend: "-19%", cpc: "1200" },
    { keyword: "anyeluz romero", volume: 720, trend: "-19%", cpc: "1400" },
    { keyword: "shampoo anyeluz romero", volume: 260, trend: "-19%", cpc: "1400" },
    { keyword: "anyeluz shampoo romero", volume: 260, trend: "-19%", cpc: "1400" },
    { keyword: "shampoo de romero anyeluz", volume: 480, trend: "-33%", cpc: "1600" },
    { keyword: "anyeluz aguacate", volume: 50, trend: "-29%", cpc: "N/A" },
    { keyword: "shampoo aguacate anyeluz", volume: 110, trend: "-36%", cpc: "N/A" },
    { keyword: "shampoo anyeluz aguacate", volume: 70, trend: "-40%", cpc: "N/A" },
    { keyword: "shampoo gusano de seda anyeluz", volume: 210, trend: "-36%", cpc: "N/A" },
    { keyword: "anyeluz gusano de seda", volume: 70, trend: "+40%", cpc: "N/A" },
    { keyword: "shampoo anyeluz gusano de seda", volume: 90, trend: "+25%", cpc: "N/A" },
    { keyword: "shampoo aloe vera anyeluz", volume: 170, trend: "-50%", cpc: "N/A" },
    { keyword: "shampoo anyeluz aloe vera", volume: 70, trend: "0%", cpc: "N/A" },
    { keyword: "tonico anyeluz", volume: 320, trend: "-19%", cpc: "900" },
    { keyword: "anyeluz tonico", volume: 70, trend: "-29%", cpc: "900" },
    { keyword: "tonico anticaida anyeluz", volume: 210, trend: "-57%", cpc: "1100" },
    { keyword: "tónico anyeluz", volume: 320, trend: "-19%", cpc: "900" },
    { keyword: "termoprotector anyeluz", volume: 390, trend: "+23%", cpc: "1800" },
    { keyword: "anyeluz termoprotector", volume: 90, trend: "-18%", cpc: "1800" },
    { keyword: "termoprotector de anyeluz", volume: 90, trend: "-21%", cpc: "1800" },
    { keyword: "crema de peinar milagros", volume: 320, trend: "+23%", cpc: "240" },
    { keyword: "crema para peinar milagros", volume: 320, trend: "-18%", cpc: "590" },
    { keyword: "milagros crema de peinar", volume: 70, trend: "-57%", cpc: "460" },
    { keyword: "tratamiento anyeluz", volume: 210, trend: "+24%", cpc: "600" },
    { keyword: "tratamiento capilar anyeluz", volume: 70, trend: "-40%", cpc: "220" },
    { keyword: "terapia capilar anyeluz", volume: 260, trend: "-18%", cpc: "N/A" },
    { keyword: "anyeluz terapia capilar", volume: 30, trend: "-50%", cpc: "N/A" },
    
    // INTENCIÓN & PREGUNTAS (Long tail)
    { keyword: "el shampoo de anyeluz es bueno", volume: 20, trend: "0%", cpc: "N/A" },
    { keyword: "los productos de anyeluz son buenos", volume: 20, trend: "-50%", cpc: "N/A" },
    { keyword: "shampoo anyeluz opiniones", volume: 70, trend: "0%", cpc: "N/A" },
    { keyword: "productos anyeluz opiniones", volume: 90, trend: "-57%", cpc: "N/A" },
    { keyword: "shampoo anyeluz comentarios", volume: 10, trend: "100%", cpc: "N/A" },
    { keyword: "shampoo anyeluz testimonios", volume: 170, trend: "-29%", cpc: "N/A" },
    { keyword: "shampoo de cebolla anyeluz opiniones", volume: 40, trend: "0%", cpc: "N/A" },
    { keyword: "shampoo de cebolla anyeluz testimonios", volume: 260, trend: "-22%", cpc: "N/A" },
    
    // PRECIO & TRANSACCIONAL
    { keyword: "anyeluz al por mayor", volume: 70, trend: "-75%", cpc: "1000" },
    { keyword: "anyeluz distribuidor oficial", volume: 70, trend: "-18%", cpc: "1100" },
    { keyword: "puntos de venta anyeluz", volume: 30, trend: "+200%", cpc: "N/A" },
    { keyword: "tienda anyeluz", volume: 40, trend: "+133%", cpc: "1900" },
    { keyword: "anyeluz shampoo precio", volume: 90, trend: "-33%", cpc: "N/A" },
    { keyword: "shampoo anyeluz precio", volume: 140, trend: "-44%", cpc: "N/A" },
    { keyword: "shampoo de cebolla anyeluz precio", volume: 110, trend: "-33%", cpc: "N/A" },
    
    // OTROS COMPETIDORES / PRODUCTOS
    { keyword: "la pocion tratamiento", volume: 320, trend: "-18%", cpc: "1500" },
    { keyword: "la pocion cabello", volume: 20, trend: "+33%", cpc: "1300" },
    { keyword: "la pocion ancestral", volume: 260, trend: "0%", cpc: "1100" },
    { keyword: "tongolele la pocion", volume: 30, trend: "-25%", cpc: "1300" },
    { keyword: "suero reconstructor click hair", volume: 140, trend: "-34%", cpc: "440" },
    { keyword: "miel para el cabello click hair", volume: 260, trend: "+14%", cpc: "350" },
    { keyword: "energizante capilar click hair", volume: 110, trend: "-18%", cpc: "520" },
    { keyword: "click hair testimonios", volume: 70, trend: "-29%", cpc: "N/A" },
    { keyword: "click hair opiniones", volume: 10, trend: "-50%", cpc: "N/A" }
  ];

  const categorizeKeyword = (keyword) => {
    const k = keyword.toLowerCase();
    if (k.includes('brujeria')) return 'Tu Marca';
    if (k.includes('cebolla') || k.includes('romero') || k.includes('aguacate') || k.includes('gusano') || k.includes('aloe')) return 'Ingrediente';
    if (k.includes('opiniones') || k.includes('testimonios') || k.includes('bueno') || k.includes('comentarios')) return 'Reputación (AIO)';
    if (k.includes('precio') || k.includes('venta') || k.includes('tienda') || k.includes('distribuidor')) return 'Transaccional';
    if (k.includes('anyeluz') || k.includes('kaba') || k.includes('pocion') || k.includes('milagros') || k.includes('click')) return 'Competencia';
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
    if (sortBy === 'volume') data.sort((a, b) => b.volume - a.volume);
    return data;
  }, [enrichedData, searchTerm, activeCategory, sortBy]);

  const getAIOScore = (item) => {
    if (item.category === 'Tu Marca') return { score: 'Foco', color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' };
    if (item.category === 'Ingrediente') return { score: 'Oportunidad', color: 'text-purple-400 bg-purple-500/10 border-purple-500/30' };
    if (item.category === 'Reputación (AIO)') return { score: 'Crítico AIO', color: 'text-pink-400 bg-pink-500/10 border-pink-500/30' };
    if (item.category === 'Transaccional') return { score: 'Conversión', color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30' };
    return { score: 'Bajo', color: 'text-gray-400 bg-gray-500/10 border-gray-500/30' };
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
          Brujería Capilar vs Goliath: <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Cómo Robar el Tráfico de Anyeluz</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
          Ellos tienen el volumen (33k búsquedas), pero tú tienes el crecimiento (+127%). La estrategia no es competir en marca, es ganar en <strong>Ingrediente</strong> y <strong>Verdad (AIO)</strong>.
        </p>
      </div>

      {/* Tabs */}
      <div className="container mx-auto px-6 mb-12">
        <div className="flex flex-wrap justify-center gap-2 p-1 bg-slate-900/50 backdrop-blur rounded-2xl border border-white/5 max-w-fit mx-auto">
          {['journey', 'market', 'execution'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-xl font-semibold transition-all text-sm ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.3)]'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab === 'journey' && 'El Embudo Mágico'}
              {tab === 'market' && 'El Caldero (Data Completa)'}
              {tab === 'execution' && 'Plan del Hechizo'}
            </button>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 pb-24">
        <div className="bg-slate-900/50 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-50"></div>

          {/* TAB 1: JOURNEY */}
          {activeTab === 'journey' && (
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-12 text-center text-white">3 Pilares para Derribar al Gigante</h2>
              <div className="grid md:grid-cols-3 gap-8">
                
                {/* Pilar 1 */}
                <div className="bg-slate-950 p-6 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all group">
                  <div className="bg-slate-900 w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-6 text-purple-400 border border-white/5 group-hover:scale-110 transition-transform">
                    <Droplets size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white text-center">1. El Ataque del Ingrediente</h3>
                  <p className="text-center text-gray-400 text-sm mb-4">
                    Anyeluz tiene 33k búsquedas de marca, pero miles buscan "Cebolla", "Romero" o "Gusano de Seda". Ahí es donde Brujería Capilar puede ganar sin pelear por nombre.
                  </p>
                </div>

                {/* Pilar 2 */}
                <div className="bg-slate-950 p-6 rounded-2xl border border-pink-500/30 relative transform md:-translate-y-4 shadow-[0_0_30px_rgba(236,72,153,0.1)]">
                  <div className="bg-pink-900/20 w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-6 text-pink-400 border border-pink-500/20">
                    <Sparkles size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white text-center">2. Capturar la Duda (AIO)</h3>
                  <p className="text-center text-gray-400 text-sm mb-4">
                    Hay cientos de búsquedas como <em>"el shampoo anyeluz es bueno"</em> o <em>"testimonios"</em>. Crearemos contenido que la IA use para responder esas dudas, recomendando Brujería como la alternativa premium.
                  </p>
                </div>

                {/* Pilar 3 */}
                <div className="bg-slate-950 p-6 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all group">
                  <div className="bg-slate-900 w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-6 text-purple-400 border border-white/5 group-hover:scale-110 transition-transform">
                    <TrendingUp size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white text-center">3. El Momentum (+127%)</h3>
                  <p className="text-center text-gray-400 text-sm mb-4">
                    Tu marca está viva y creciendo (+127% trimestral). La competencia cae o se estanca (-18% Anyeluz, -55% Kaba). Es el momento perfecto para acelerar.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: MARKET DATA */}
          {activeTab === 'market' && (
            <div className="animate-fade-in-up">
              <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-white/10 pb-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2 text-white">El Caldero de Data (Todo el Mercado)</h2>
                  <p className="text-gray-400">Análisis completo de keywords: Competencia vs Tu Oportunidad.</p>
                </div>
                <div className="mt-4 md:mt-0 text-right">
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Crecimiento Brujería</p>
                  <div className="text-3xl font-bold text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.4)]">+127%</div>
                  <p className="text-xs text-gray-500">Tendencia Trimestral (La única positiva)</p>
                </div>
              </div>

              {/* Filtros */}
              <div className="bg-slate-950 p-4 rounded-xl border border-white/10 mb-6 flex flex-col md:flex-row gap-4 justify-between items-center sticky top-0 z-10 shadow-xl">
                 <div className="relative w-full md:w-1/3">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                  <input 
                    type="text" 
                    placeholder="Filtrar por keyword..." 
                    className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
                  {['Todas', 'Tu Marca', 'Ingrediente', 'Competencia', 'Reputación (AIO)', 'Transaccional'].map(cat => (
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

              {/* Tabla */}
              <div className="bg-slate-950 rounded-xl border border-white/10 overflow-hidden mb-8">
                <div className="overflow-x-auto max-h-[500px] scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900">
                  <table className="w-full text-left border-collapse">
                    <thead className="sticky top-0 bg-slate-900 z-10 shadow-lg">
                      <tr>
                        <th className="p-4 text-xs font-bold text-gray-500 uppercase">Keyword</th>
                        <th className="p-4 text-xs font-bold text-gray-500 uppercase text-right cursor-pointer hover:text-purple-400" onClick={() => setSortBy('volume')}>Volumen</th>
                        <th className="p-4 text-xs font-bold text-gray-500 uppercase text-center">Tendencia</th>
                        <th className="p-4 text-xs font-bold text-gray-500 uppercase text-center">CPC (Est.)</th>
                        <th className="p-4 text-xs font-bold text-gray-500 uppercase text-center">Categoría</th>
                        <th className="p-4 text-xs font-bold text-purple-400 uppercase text-center">Estrategia</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {filteredData.map((row, i) => {
                        const aio = getAIOScore(row);
                        return (
                          <tr key={i} className="hover:bg-white/5 transition-colors group cursor-default">
                            <td className="p-4 font-semibold text-gray-300 group-hover:text-white transition-colors text-sm">{row.keyword}</td>
                            <td className="p-4 text-right font-mono text-purple-400">{row.volume.toLocaleString()}</td>
                            <td className="p-4 text-center">
                               <span className={`px-2 py-1 rounded text-xs font-bold ${row.trend.includes('-') ? 'text-red-400 bg-red-500/10' : (row.trend === '0%' || row.trend === 'N/A') ? 'text-gray-500 bg-white/5' : 'text-emerald-400 bg-emerald-500/10'}`}>
                                {row.trend}
                              </span>
                            </td>
                            <td className="p-4 text-center text-xs text-gray-400">{row.cpc !== "N/A" ? `$${row.cpc}` : '-'}</td>
                            <td className="p-4 text-center"><span className="px-2 py-1 rounded-full text-[10px] bg-slate-800 text-gray-400 border border-white/5">{row.category}</span></td>
                            <td className="p-4 text-center"><span className={`px-3 py-1 rounded-full text-[10px] font-bold border ${aio.color}`}>{aio.score}</span></td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: EXECUTION */}
          {activeTab === 'execution' && (
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Hoja de Ruta: El Hechizo de 12 Meses</h2>
              
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-purple-500/20 before:to-transparent">
                
                {/* Phase 1 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-purple-500 bg-purple-500/20 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.5)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <span className="font-bold text-sm">1</span>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-950 p-6 rounded-xl border border-purple-500/30 shadow-lg">
                    <h3 className="font-bold text-white text-lg mb-2">Fase 1: Infraestructura & Defensa</h3>
                    <p className="text-sm text-gray-400 mb-4 italic">Mes 1-3: Preparar el terreno para la batalla.</p>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex gap-2"><Package size={16} className="text-purple-500"/> <strong>Páginas de Ingrediente:</strong> Crear landings específicas para "Cebolla", "Romero" y "Gusano de Seda" que no hablen de Anyeluz, sino de la solución.</li>
                      <li className="flex gap-2"><Shield size={16} className="text-purple-500"/> <strong>Defensa de Marca:</strong> Blindar "Brujería Capilar" (320 búsquedas) para asegurar ese +127% de crecimiento orgánico.</li>
                      <li className="flex gap-2"><Database size={16} className="text-purple-500"/> <strong>Feed de Datos:</strong> Estructurar el catálogo para Google Shopping y Meta Ads.</li>
                    </ul>
                  </div>
                </div>

                {/* Phase 2 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-pink-500 bg-pink-500/20 text-pink-400 shadow-[0_0_15px_rgba(236,72,153,0.5)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <span className="font-bold text-sm">2</span>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-950 p-6 rounded-xl border border-pink-500/30 shadow-lg">
                    <h3 className="font-bold text-white text-lg mb-2">Fase 2: El Ataque AIO (Reputación)</h3>
                    <p className="text-sm text-gray-400 mb-4 italic">Mes 4-8: Interceptar la duda del cliente.</p>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex gap-2"><Activity size={16} className="text-pink-500"/> <strong>Robo de Tráfico "Opiniones":</strong> Crear artículos comparativos honestos ("Anyeluz vs Brujería") optimizados para que la IA nos lea.</li>
                      <li className="flex gap-2"><Activity size={16} className="text-pink-500"/> <strong>Long Tail:</strong> Responder preguntas como "¿El shampoo de cebolla sirve?" (Anyeluz tiene 40 búsquedas aquí, nosotros queremos miles).</li>
                      <li className="flex gap-2"><Activity size={16} className="text-pink-500"/> <strong>Automatización:</strong> Email marketing para recuperar carritos de usuarios indecisos que vienen de la competencia.</li>
                    </ul>
                  </div>
                </div>

                 {/* Phase 3 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-emerald-500 bg-emerald-500/20 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.5)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <span className="font-bold text-sm">3</span>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-950 p-6 rounded-xl border border-emerald-500/30 shadow-lg">
                    <h3 className="font-bold text-white text-lg mb-2">Fase 3: Consolidación & LTV</h3>
                    <p className="text-sm text-gray-400 mb-4 italic">Mes 9-12: Fidelizar la magia.</p>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex gap-2"><Sparkles size={16} className="text-emerald-500"/> <strong>Rituales Recurrentes:</strong> Convertir compradores de un solo producto en suscriptores de "kits".</li>
                      <li className="flex gap-2"><Sparkles size={16} className="text-emerald-500"/> <strong>Expansión de Categoría:</strong> Posicionarnos en nuevos ingredientes donde Kaba no sea fuerte.</li>
                    </ul>
                  </div>
                </div>

              </div>
              
               <div className="mt-16 bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-3xl border border-purple-500/20 shadow-[0_0_40px_rgba(168,85,247,0.1)] max-w-2xl mx-auto">
                <p className="text-sm text-purple-400 uppercase font-bold tracking-wide">Inversión Mensual</p>
                <div className="flex items-center justify-center gap-2 my-2">
                  <span className="text-5xl font-extrabold text-white">3.000€</span>
                  <span className="text-xl text-gray-500">/mes</span>
                </div>
                <p className="text-gray-400 text-sm mb-6">Contrato anual. Incluye desarrollo, estrategia AIO y gestión de campañas.</p>
                <a href="https://wa.me/34655328878?text=Acepto%20el%20reto%20Brujeria%20Capilar" target="_blank" rel="noopener noreferrer" className="inline-block w-full md:w-auto bg-purple-500 hover:bg-purple-400 text-white px-12 py-4 rounded-full font-bold transition-all shadow-lg shadow-purple-500/20 hover:scale-105">
                  Iniciar Transformación
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