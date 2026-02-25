import React, { useState, useMemo, useEffect } from 'react';
import { Search, BrainCircuit, MessageSquare, ArrowRight, Target, Zap, BarChart3, Globe, TrendingUp, Map, DollarSign, Shield, ArrowDown, CheckCircle, Rocket, Handshake, Users, AlertTriangle, MousePointerClick, ShoppingCart, Banknote, Layout, Settings, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const EstrategiaConstructoras = () => {
  const [activeTab, setActiveTab] = useState('market');

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
            <span className="text-xs font-bold tracking-wide uppercase text-cyan-400">Plan Director Inmobiliario 2026</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Vender Colombia al Mundo: <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Hegemonía Digital y AIO</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
          Estrategia para capturar la demanda internacional de Real Estate (500k búsquedas/mes) mediante Nodos de Autoridad y Validación por IA.
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="container mx-auto px-6 mb-12">
        <div className="flex flex-wrap justify-center gap-2 p-1 bg-slate-900/50 backdrop-blur rounded-2xl border border-white/5 max-w-fit mx-auto">
          {['market', 'funnel', 'execution', 'proposal'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-xl font-semibold transition-all text-sm ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-[0_0_20px_rgba(34,211,238,0.3)]'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
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
          
          {/* TAB 1: DEMANDA GLOBAL */}
          {activeTab === 'market' && (
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-3">
                <Globe className="text-cyan-400" /> El Mercado "Invisible"
              </h2>
              
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

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-slate-950 p-8 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-6">Segmentación por Idioma (Exterior)</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-400 font-bold">Inglés (Anglo/Expat)</span>
                        <span className="text-cyan-400 font-bold">177.000 búsquedas</span>
                      </div>
                      <div className="w-full bg-slate-900 h-3 rounded-full overflow-hidden">
                        <div className="bg-cyan-500 h-full w-[62%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-400 font-bold">Español (Diáspora)</span>
                        <span className="text-blue-400 font-bold">110.000 búsquedas</span>
                      </div>
                      <div className="w-full bg-slate-900 h-3 rounded-full overflow-hidden">
                        <div className="bg-blue-500 h-full w-[38%]"></div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 p-4 bg-cyan-900/10 border border-cyan-500/20 rounded-xl">
                    <p className="text-sm text-cyan-200 leading-relaxed italic">
                      "El comprador anglo es el segmento más desatendido por las constructoras locales, representando la mayor oportunidad de arbitraje digital."
                    </p>
                  </div>
                </div>

                <div className="bg-slate-950 p-8 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-6">Top Mercados Prioritarios</h3>
                  <div className="space-y-4">
                    {[
                      { country: 'EEUU', searches: '150.000', detail: '100k Inglés / 50k Español' },
                      { country: 'España', searches: '20.000', detail: 'Diáspora / Plan Retorno' },
                      { country: 'Canadá', searches: '15.000', detail: 'Perfil Inversor / Clima' },
                      { country: 'Colombia (Expats)', searches: '24.000', detail: 'Búsquedas Inglés desde origen' }
                    ].map((m, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg border border-white/5">
                        <div>
                          <p className="font-bold text-white">{m.country}</p>
                          <p className="text-[10px] text-gray-500 uppercase">{m.detail}</p>
                        </div>
                        <p className="text-cyan-400 font-mono font-bold">{m.searches}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: FUNNEL & ROI */}
          {activeTab === 'funnel' && (
            <div className="animate-fade-in-up">
               <h2 className="text-3xl font-bold mb-4 text-white">Embudo de Conversión Internacional</h2>
               <p className="text-gray-400 mb-12">Proyección basada en una inversión optimizada de 4.500€/mes.</p>

               <div className="grid md:grid-cols-2 gap-12 mb-16">
                  {/* Embudo Visual */}
                  <div className="space-y-4">
                     <div className="bg-slate-950 p-4 rounded-xl border border-white/10 flex justify-between items-center">
                        <span className="text-gray-400 font-bold">Impresiones (40% Share)</span>
                        <span className="text-white font-bold">114.800</span>
                     </div>
                     <div className="flex justify-center"><ArrowDown className="text-gray-700" size={20} /></div>
                     <div className="bg-blue-900/20 p-4 rounded-xl border border-blue-500/20 flex justify-between items-center w-[90%] mx-auto">
                        <span className="text-blue-300 font-bold">Visitas Web (8% CTR)</span>
                        <span className="text-white font-bold">9.184</span>
                     </div>
                     <div className="flex justify-center"><ArrowDown className="text-gray-700" size={20} /></div>
                     <div className="bg-indigo-900/20 p-4 rounded-xl border border-indigo-500/20 flex justify-between items-center w-[75%] mx-auto">
                        <span className="text-indigo-300 font-bold">Leads (10% Conv)</span>
                        <span className="text-white font-bold">275</span>
                     </div>
                     <div className="flex justify-center"><ArrowDown className="text-gray-700" size={20} /></div>
                     <div className="bg-emerald-600 p-6 rounded-2xl border border-emerald-400 flex justify-between items-center w-[60%] mx-auto shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                        <span className="text-slate-950 font-black text-xl">VENTAS</span>
                        <span className="text-slate-950 font-black text-3xl">14</span>
                     </div>
                  </div>

                  {/* Unit Economics */}
                  <div className="bg-slate-950 p-8 rounded-3xl border border-white/10 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/5 pb-4">Eficiencia Financiera</h3>
                      <div className="space-y-6">
                        <div className="flex justify-between items-end">
                          <p className="text-gray-500 text-xs uppercase font-bold">Inversión Ads Mensual</p>
                          <p className="text-3xl font-bold text-white">4.500€</p>
                        </div>
                        <div className="flex justify-between items-end">
                          <p className="text-gray-500 text-xs uppercase font-bold">CPL (Costo por Lead)</p>
                          <p className="text-3xl font-bold text-cyan-400">16,33€</p>
                        </div>
                        <div className="flex justify-between items-end">
                          <p className="text-gray-500 text-xs uppercase font-bold">CAC (Costo por Venta)</p>
                          <p className="text-3xl font-bold text-emerald-400">321,42€</p>
                        </div>
                        <div className="mt-8 pt-8 border-t border-white/5">
                           <div className="bg-slate-900 p-6 rounded-2xl">
                              <p className="text-xs text-gray-500 uppercase mb-2">Pipeline de Venta Est. (Mensual)</p>
                              <p className="text-4xl font-black text-white">$1.400.000<span className="text-sm font-normal text-gray-500 ml-2">USD</span></p>
                              <p className="text-[10px] text-emerald-500 mt-2 font-bold tracking-widest">AHORRO PUBLICITARIO: ~95% VS MÉTODOS TRADICIONALES</p>
                           </div>
                        </div>
                      </div>
                  </div>
               </div>
            </div>
          )}

          {/* TAB 3: EXECUTION */}
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
                        <li className="flex items-center gap-2"><CheckCircle size={14} className="text-cyan-500"/> Despliegue de Nodos Satélites (Inglés/Español).</li>
                        <li className="flex items-center gap-2"><CheckCircle size={14} className="text-cyan-500"/> Estructuración Semántica para IA (GEO).</li>
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
                        <li className="flex items-center gap-2"><Zap size={14} className="text-blue-500"/> Lanzamiento de Campañas Hiper-segmentadas.</li>
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
                        <li className="flex items-center gap-2"><TrendingUp size={14} className="text-emerald-500"/> Escalado de inversión según ROI (14 ventas/mes).</li>
                        <li className="flex items-center gap-2"><TrendingUp size={14} className="text-emerald-500"/> Formación al equipo de ventas internacional.</li>
                        <li className="flex items-center gap-2"><TrendingUp size={14} className="text-emerald-500"/> Entrega de Autonomía de Gestión.</li>
                      </ul>
                    </div>
                  </div>

                </div>
            </div>
          )}

          {/* TAB 4: PROPOSAL */}
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
                      <li>• Obsesión por el objetivo de 14 ventas mensuales.</li>
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