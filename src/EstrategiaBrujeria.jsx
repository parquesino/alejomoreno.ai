import React, { useState, useMemo, useEffect } from 'react';
import { Search, ArrowRight, Zap, TrendingUp, Filter, DollarSign, Shield, ShoppingCart, Activity, Package, Droplets, Sparkles, AlertTriangle, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const EstrategiaBrujeria = () => {
  const [activeTab, setActiveTab] = useState('journey');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todas');
  const [sortBy, setSortBy] = useState('volume');

  // --- DATASET REAL (Extraído de tu Keyword Research Q1 2026) ---
  const rawData = [
    // GENÉRICAS ALTO VOLUMEN (La Oportunidad AIO)
    { keyword: "shampoo de cebolla", volume: 14800, trend: "0%", cpc: "900" },
    { keyword: "crema de peinar", volume: 12100, trend: "-5%", cpc: "600" },
    { keyword: "shampoo de romero", volume: 9900, trend: "+22%", cpc: "850" },
    { keyword: "tratamiento capilar", volume: 8100, trend: "0%", cpc: "1100" },
    { keyword: "shampoo sin sal", volume: 6600, trend: "+15%", cpc: "700" },
    { keyword: "tónico capilar", volume: 5400, trend: "+10%", cpc: "1200" },
    { keyword: "termoprotector cabello", volume: 4400, trend: "+5%", cpc: "800" },
    { keyword: "shampoo gusano de seda", volume: 2900, trend: "-10%", cpc: "500" },
    { keyword: "repolarizador capilar", volume: 2400, trend: "0%", cpc: "800" },
    { keyword: "shampoo de aguacate", volume: 1900, trend: "0%", cpc: "650" },
    { keyword: "shampoo anticaspa", volume: 9900, trend: "+27%", cpc: "950" },
    { keyword: "crecimiento cabello", volume: 1900, trend: "+30%", cpc: "950" },
    
    // COMPETENCIA (Contexto de Batalla)
    { keyword: "anyeluz", volume: 33100, trend: "-18%", cpc: "1400" },
    { keyword: "kaba", volume: 27100, trend: "-55%", cpc: "1800" },
    { keyword: "la pocion", volume: 880, trend: "+26%", cpc: "1300" },
    { keyword: "milagros", volume: 8100, trend: "+5%", cpc: "1100" },
    { keyword: "click hair", volume: 6600, trend: "+22%", cpc: "1000" }
  ];

  const categorizeKeyword = (keyword) => {
    const k = keyword.toLowerCase();
    if (k.includes('anyeluz') || k.includes('kaba') || k.includes('pocion') || k.includes('milagros') || k.includes('click')) return 'Competencia';
    if (k.includes('cebolla') || k.includes('romero') || k.includes('gusano') || k.includes('aguacate')) return 'Ingrediente Mágico';
    if (k.includes('crecimiento') || k.includes('anticaida') || k.includes('repolarizador') || k.includes('tratamiento')) return 'Solución/Hechizo';
    if (k.includes('shampoo') || k.includes('crema') || k.includes('tonico')) return 'Producto Base';
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
    if (item.category === 'Competencia') return { score: 'Bajo', color: 'text-gray-400 bg-gray-500/10 border-gray-500/30' };
    if (item.category === 'Solución/Hechizo') return { score: 'Crítico', color: 'text-red-400 bg-red-500/10 border-red-500/30' };
    if (item.category === 'Ingrediente Mágico') return { score: 'Muy Alto', color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' };
    return { score: 'Alto', color: 'text-purple-400 bg-purple-500/10 border-purple-500/30' };
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
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Hechizos Digitales & Dominio AIO</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
          Cómo dejar de pelear por precio contra Kaba y Anyeluz, para dominar la categoría de <strong className="text-white">Ingredientes Naturales</strong> en Google y ChatGPT.
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
              {tab === 'market' && 'El Caldero (Data)'}
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
              <h2 className="text-3xl font-bold mb-12 text-center text-white">Los 3 Pilares del Despegue</h2>
              <div className="grid md:grid-cols-3 gap-8">
                
                {/* Pilar 1 */}
                <div className="bg-slate-950 p-6 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all group">
                  <div className="bg-slate-900 w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-6 text-purple-400 border border-white/5 group-hover:scale-110 transition-transform">
                    <Droplets size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white text-center">1. Dueños del Ingrediente</h3>
                  <p className="text-center text-gray-400 text-sm mb-4">
                    La data lo confirma: <strong>"Shampoo de Cebolla" (14.8k)</strong> y <strong>"Romero" (9.9k)</strong> son minas de oro sin dueño claro. No vendas marca, vende el ingrediente.
                  </p>
                </div>

                {/* Pilar 2 */}
                <div className="bg-slate-950 p-6 rounded-2xl border border-pink-500/30 relative transform md:-translate-y-4 shadow-[0_0_30px_rgba(236,72,153,0.1)]">
                  <div className="bg-pink-900/20 w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-6 text-pink-400 border border-pink-500/20">
                    <Sparkles size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white text-center">2. Rituales > Productos</h3>
                  <p className="text-center text-gray-400 text-sm mb-4">
                    Transformamos productos sueltos (Shampoo, Tónico) en "Rituales de Crecimiento". Aumentamos el Ticket Medio y la retención emocional.
                  </p>
                </div>

                {/* Pilar 3 */}
                <div className="bg-slate-950 p-6 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all group">
                  <div className="bg-slate-900 w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-6 text-purple-400 border border-white/5 group-hover:scale-110 transition-transform">
                    <Zap size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white text-center">3. Profecía AIO</h3>
                  <p className="text-center text-gray-400 text-sm mb-4">
                    Cuando una usuaria pregunte a la IA <em>"¿Qué sirve para recuperar el cabello quemado?"</em>, tu marca será la respuesta recomendada.
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
                  <h2 className="text-3xl font-bold mb-2 text-white">El Caldero de Data</h2>
                  <p className="text-gray-400">Análisis de 165,000+ búsquedas mensuales activas.</p>
                </div>
                <div className="mt-4 md:mt-0 text-right">
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Oportunidad Genérica</p>
                  <div className="text-3xl font-bold text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.4)]">64.000+</div>
                  <p className="text-xs text-gray-500">Búsquedas Mensuales Sin Marca (Tu Océano Azul)</p>
                </div>
              </div>

              {/* Filtros */}
              <div className="bg-slate-950 p-4 rounded-xl border border-white/10 mb-6 flex flex-col md:flex-row gap-4 justify-between items-center sticky top-0 z-10 shadow-xl">
                 <div className="relative w-full md:w-1/3">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                  <input 
                    type="text" 
                    placeholder="Filtrar hechizos..." 
                    className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
                  {['Todas', 'Ingrediente Mágico', 'Solución/Hechizo', 'Producto Base', 'Competencia'].map(cat => (
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
                <div className="overflow-x-auto max-h-[400px] scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900">
                  <table className="w-full text-left border-collapse">
                    <thead className="sticky top-0 bg-slate-900 z-10 shadow-lg">
                      <tr>
                        <th className="p-4 text-xs font-bold text-gray-500 uppercase">Keyword</th>
                        <th className="p-4 text-xs font-bold text-gray-500 uppercase text-right cursor-pointer hover:text-purple-400" onClick={() => setSortBy('volume')}>Volumen</th>
                        <th className="p-4 text-xs font-bold text-gray-500 uppercase text-center">Tendencia</th>
                        <th className="p-4 text-xs font-bold text-gray-500 uppercase text-center">Categoría</th>
                        <th className="p-4 text-xs font-bold text-purple-400 uppercase text-center">Potencial AIO</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {filteredData.map((row, i) => {
                        const aio = getAIOScore(row);
                        return (
                          <tr key={i} className="hover:bg-white/5 transition-colors group cursor-default">
                            <td className="p-4 font-semibold text-gray-300 group-hover:text-white transition-colors">{row.keyword}</td>
                            <td className="p-4 text-right font-mono text-purple-400">{row.volume.toLocaleString()}</td>
                            <td className="p-4 text-center">
                               <span className={`px-2 py-1 rounded text-xs font-bold ${row.trend.includes('-') ? 'text-red-400 bg-red-500/10' : row.trend === '0%' ? 'text-gray-500 bg-white/5' : 'text-emerald-400 bg-emerald-500/10'}`}>
                                {row.trend}
                              </span>
                            </td>
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
                    <h3 className="font-bold text-white text-lg mb-2">Fase 1: La Pócima (Infraestructura)</h3>
                    <p className="text-sm text-gray-400 mb-4 italic">Mes 1-3: Preparar la casa para recibir visitas.</p>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex gap-2"><Package size={16} className="text-purple-500"/> Landing Pages Específicas: "Shampoo de Cebolla" (No Home Page).</li>
                      <li className="flex gap-2"><Package size={16} className="text-purple-500"/> Configuración de Google Merchant Center (Shopping).</li>
                      <li className="flex gap-2"><Package size={16} className="text-purple-500"/> Auditoría UX: Reducir clics al checkout.</li>
                    </ul>
                  </div>
                </div>

                {/* Phase 2 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-pink-500 bg-pink-500/20 text-pink-400 shadow-[0_0_15px_rgba(236,72,153,0.5)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <span className="font-bold text-sm">2</span>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-950 p-6 rounded-xl border border-pink-500/30 shadow-lg">
                    <h3 className="font-bold text-white text-lg mb-2">Fase 2: El Conjuro (Tráfico AIO)</h3>
                    <p className="text-sm text-gray-400 mb-4 italic">Mes 4-8: Inundar el embudo con intención de compra.</p>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex gap-2"><Activity size={16} className="text-pink-500"/> Blog Estratégico: Responder "¿Qué shampoo sirve para el crecimiento?".</li>
                      <li className="flex gap-2"><Activity size={16} className="text-pink-500"/> Campañas de Shopping atacando genéricos ("Shampoo sin sal").</li>
                      <li className="flex gap-2"><Activity size={16} className="text-pink-500"/> Email Marketing: Recuperación de carrito "mágico".</li>
                    </ul>
                  </div>
                </div>

                 {/* Phase 3 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-emerald-500 bg-emerald-500/20 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.5)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <span className="font-bold text-sm">3</span>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-950 p-6 rounded-xl border border-emerald-500/30 shadow-lg">
                    <h3 className="font-bold text-white text-lg mb-2">Fase 3: El Aquelarre (Comunidad & Retención)</h3>
                    <p className="text-sm text-gray-400 mb-4 italic">Mes 9-12: Maximizar el LTV (Lifetime Value).</p>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex gap-2"><Sparkles size={16} className="text-emerald-500"/> Programa de Lealtad Gamificado.</li>
                      <li className="flex gap-2"><Sparkles size={16} className="text-emerald-500"/> Suscripciones de producto (Recurrencia mensual).</li>
                      <li className="flex gap-2"><Sparkles size={16} className="text-emerald-500"/> Dominio total de la SERP para ingredientes clave.</li>
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