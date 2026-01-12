import React, { useState, useMemo, useEffect } from 'react';
import { Search, BrainCircuit, MessageSquare, ArrowRight, Lock, Eye, Target, Zap, BarChart3, Globe, TrendingUp, Map, Filter, DollarSign, Shield, Cpu, Info, ArrowDown, List, CheckCircle, Rocket, Handshake, Users, AlertTriangle, TrendingDown, MousePointerClick, ShoppingCart, Banknote, PenTool, Layout, Settings, Briefcase, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const EstrategiaKalacibi = () => {
  const [activeTab, setActiveTab] = useState('journey');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todas');
  const [sortBy, setSortBy] = useState('volume');

  // --- DATASET KALACIBI (10k Total) ---
  const rawData = [
    { keyword: "incibe ciberseguridad", volume: 1000, trend: "0%", cpc: "1,00" },
    { keyword: "ciberseguridad empresas", volume: 1000, trend: "15%", cpc: "1,00" },
    { keyword: "empresas de ciberseguridad", volume: 720, trend: "10%", cpc: "1,00" },
    { keyword: "iso27000", volume: 590, trend: "0%", cpc: "1,00" },
    { keyword: "servicios de ciberseguridad", volume: 320, trend: "20%", cpc: "1,00" },
    { keyword: "ciberseguridad para empresas", volume: 320, trend: "20%", cpc: "1,00" },
    { keyword: "empresas de seguridad informatica", volume: 320, trend: "0%", cpc: "1,00" },
    { keyword: "seguridad informatica empresas", volume: 260, trend: "0%", cpc: "1,00" },
    { keyword: "ciberseguridad industrial", volume: 210, trend: "25%", cpc: "1,00" },
    { keyword: "empresa ciberseguridad españa", volume: 170, trend: "0%", cpc: "1,00" },
    { keyword: "enisa ciberseguridad", volume: 170, trend: "0%", cpc: "1,00" },
    { keyword: "cisco ciberseguridad", volume: 140, trend: "0%", cpc: "1,00" },
    { keyword: "servicios de seguridad informatica", volume: 140, trend: "0%", cpc: "1,00" },
    { keyword: "ciberseguridad para pymes", volume: 140, trend: "30%", cpc: "1,00" },
    { keyword: "ciberseguridad empresarial", volume: 140, trend: "15%", cpc: "1,00" },
    { keyword: "ciberseguridad para pyme", volume: 140, trend: "30%", cpc: "1,00" },
    { keyword: "incibe whatsapp", volume: 140, trend: "0%", cpc: "1,00" },
    { keyword: "servicios ciberseguridad", volume: 110, trend: "0%", cpc: "1,00" },
    { keyword: "tss ciberseguridad", volume: 90, trend: "0%", cpc: "1,00" },
    { keyword: "incibe antivirus", volume: 90, trend: "0%", cpc: "1,00" },
    { keyword: "ciberseguridad pymes", volume: 70, trend: "30%", cpc: "1,00" },
    { keyword: "telefonica ciberseguridad", volume: 70, trend: "0%", cpc: "1,00" },
    { keyword: "ciberseguridad telefonica", volume: 70, trend: "0%", cpc: "1,00" },
    { keyword: "cipher prosegur", volume: 70, trend: "0%", cpc: "1,00" },
    { keyword: "ciberseguridad corporativa", volume: 70, trend: "10%", cpc: "1,00" },
    { keyword: "csa ciberseguridad", volume: 70, trend: "0%", cpc: "1,00" },
    { keyword: "guardia civil ciberseguridad", volume: 70, trend: "0%", cpc: "1,00" },
    { keyword: "incibe instituto nacional de ciberseguridad", volume: 70, trend: "0%", cpc: "1,00" },
    { keyword: "pymes ciberseguridad", volume: 70, trend: "30%", cpc: "1,00" },
    { keyword: "servicios de ciberseguridad para empresas", volume: 70, trend: "20%", cpc: "1,00" },
    { keyword: "ciberseguridad google", volume: 50, trend: "0%", cpc: "1,00" },
    { keyword: "indra ciberseguridad", volume: 50, trend: "0%", cpc: "1,00" },
    { keyword: "google ciberseguridad", volume: 50, trend: "0%", cpc: "1,00" },
    { keyword: "ciberseguridad guardia civil", volume: 50, trend: "0%", cpc: "1,00" },
    { keyword: "incibe vulnerabilidades", volume: 50, trend: "0%", cpc: "1,00" },
    { keyword: "infojobs ciberseguridad", volume: 50, trend: "0%", cpc: "1,00" },
    { keyword: "seguridad informatica iso", volume: 50, trend: "0%", cpc: "1,00" },
    { keyword: "udemy ciberseguridad", volume: 50, trend: "0%", cpc: "1,00" },
    { keyword: "ciberseguridad y protección de datos", volume: 40, trend: "0%", cpc: "1,00" },
    { keyword: "compañias de ciberseguridad", volume: 40, trend: "0%", cpc: "1,00" },
    { keyword: "incibe particulares", volume: 40, trend: "0%", cpc: "1,00" },
    { keyword: "ciberseguridad empresas canarias", volume: 40, trend: "0%", cpc: "1,00" },
    { keyword: "ciberseguridad union europea", volume: 40, trend: "0%", cpc: "1,00" },
    { keyword: "kpmg ciberseguridad", volume: 40, trend: "0%", cpc: "1,00" },
    { keyword: "s2 ciberseguridad", volume: 40, trend: "0%", cpc: "1,00" },
    { keyword: "ibm ciberseguridad", volume: 30, trend: "0%", cpc: "1,00" },
    { keyword: "accenture ciberseguridad", volume: 30, trend: "0%", cpc: "1,00" },
    { keyword: "prosegur ciberseguridad", volume: 30, trend: "0%", cpc: "1,00" },
    { keyword: "ciberseguridad software", volume: 30, trend: "0%", cpc: "1,00" },
    { keyword: "ciberseguridad bbva", volume: 30, trend: "0%", cpc: "1,00" },
    { keyword: "ciberseguridad en pymes", volume: 30, trend: "30%", cpc: "1,00" },
    { keyword: "incibe empresas", volume: 30, trend: "0%", cpc: "1,00" },
    { keyword: "software ciberseguridad", volume: 30, trend: "0%", cpc: "1,00" },
    { keyword: "microsoft ciberseguridad", volume: 20, trend: "0%", cpc: "1,00" },
    { keyword: "ciberseguridad vodafone", volume: 20, trend: "0%", cpc: "1,00" },
    { keyword: "fortinet ciberseguridad", volume: 20, trend: "0%", cpc: "1,00" },
    { keyword: "mejores empresas de ciberseguridad", volume: 20, trend: "0%", cpc: "1,00" },
    { keyword: "orange ciberseguridad", volume: 20, trend: "0%", cpc: "1,00" },
    { keyword: "vodafone ciberseguridad", volume: 20, trend: "0%", cpc: "1,00" },
    { keyword: "aiuken ciberseguridad", volume: 20, trend: "0%", cpc: "1,00" },
    { keyword: "ciberseguridad avanzada", volume: 20, trend: "0%", cpc: "1,00" },
    { keyword: "ey ciberseguridad", volume: 20, trend: "0%", cpc: "1,00" },
    { keyword: "factum ciberseguridad", volume: 20, trend: "0%", cpc: "1,00" },
    { keyword: "gmv ciberseguridad", volume: 20, trend: "0%", cpc: "1,00" },
    { keyword: "incibe kit de concienciacion", volume: 20, trend: "0%", cpc: "1,00" },
    { keyword: "minsait ciberseguridad", volume: 20, trend: "0%", cpc: "1,00" },
    { keyword: "mnemo ciberseguridad", volume: 20, trend: "0%", cpc: "1,00" },
    { keyword: "pwc ciberseguridad", volume: 20, trend: "0%", cpc: "1,00" },
    { keyword: "servicios gestionados de ciberseguridad", volume: 20, trend: "25%", cpc: "1,00" },
    { keyword: "servicios seguridad informatica", volume: 20, trend: "0%", cpc: "1,00" },
    { keyword: "iso 27000", volume: 110, trend: "0%", cpc: "1,00" },
    { keyword: "iso 27000 download", volume: 10, trend: "0%", cpc: "1,00" },
    { keyword: "iso 27000 y 27001", volume: 10, trend: "0%", cpc: "1,00" },
    { keyword: "iso 27000 ciberseguridad", volume: 10, trend: "0%", cpc: "1,00" },
    { keyword: "sophos ciberseguridad", volume: 10, trend: "0%", cpc: "1,00" },
    { keyword: "empresas de seguridad cibernetica", volume: 10, trend: "0%", cpc: "1,00" },
    { keyword: "cuadrante de gartner ciberseguridad", volume: 10, trend: "0%", cpc: "1,00" },
    { keyword: "ciberseguridad microsoft", volume: 10, trend: "0%", cpc: "1,00" },
    { keyword: "ciberseguridad fortinet", volume: 10, trend: "0%", cpc: "1,00" },
    { keyword: "ciberseguridad ibm", volume: 10, trend: "0%", cpc: "1,00" },
    { keyword: "gartner ciberseguridad", volume: 10, trend: "0%", cpc: "1,00" },
    { keyword: "iso 27000 27001", volume: 10, trend: "0%", cpc: "1,00" },
    { keyword: "kaspersky ciberseguridad", volume: 10, trend: "0%", cpc: "1,00" },
    { keyword: "movistar ciberseguridad", volume: 10, trend: "0%", cpc: "1,00" },
    { keyword: "empresas que ofrecen servicios de ciberseguridad", volume: 10, trend: "20%", cpc: "1,00" },
    { keyword: "acciona ciberseguridad", volume: 10, trend: "0%", cpc: "1,00" },
    { keyword: "checkpoint ciberseguridad", volume: 10, trend: "0%", cpc: "1,00" },
    { keyword: "ciberseguridad blockchain", volume: 10, trend: "0%", cpc: "1,00" },
    { keyword: "ciberseguridad en entornos industriales", volume: 10, trend: "25%", cpc: "1,00" },
    { keyword: "ciberseguridad en las pymes", volume: 10, trend: "30%", cpc: "1,00" },
    { keyword: "ciberseguridad eset", volume: 10, trend: "0%", cpc: "1,00" },
    { keyword: "ciberseguridad indra", volume: 10, trend: "0%", cpc: "1,00" },
    { keyword: "ciberseguridad industrial e infraestructuras críticas", volume: 10, trend: "25%", cpc: "1,00" },
    { keyword: "ciberseguridad oesia", volume: 10, trend: "0%", cpc: "1,00" },
    { keyword: "ciberseguridad para micropymes y autónomos", volume: 10, trend: "30%", cpc: "1,00" },
    { keyword: "ciberseguridad prosegur", volume: 10, trend: "0%", cpc: "1,00" },
    { keyword: "ciberseguridad pwc", volume: 10, trend: "0%", cpc: "1,00" },
    { keyword: "ciberseguridad siemens", volume: 10, trend: "0%", cpc: "1,00" },
    { keyword: "ciberseguridad y ciberdefensa", volume: 10, trend: "0%", cpc: "1,00" },
    { keyword: "endesa ciberseguridad", volume: 10, trend: "0%", cpc: "1,00" },
    { keyword: "eset ciberseguridad", volume: 10, trend: "0%", cpc: "1,00" },
    { keyword: "eulen ciberseguridad", volume: 10, trend: "0%", cpc: "1,00" },
    { keyword: "everis ciberseguridad", volume: 10, trend: "0%", cpc: "1,00" },
    { keyword: "grupo sia ciberseguridad", volume: 10, trend: "0%", cpc: "1,00" },
    { keyword: "huawei ciberseguridad", volume: 10, trend: "0%", cpc: "1,00" },
    { keyword: "incibe seguridad informatica", volume: 10, trend: "0%", cpc: "1,00" },
    { keyword: "iso 27000 aenor", volume: 10, trend: "0%", cpc: "1,00" },
    { keyword: "iso 27000 empresas certificadas", volume: 10, trend: "0%", cpc: "1,00" },
    { keyword: "la ciberseguridad en las empresas", volume: 10, trend: "15%", cpc: "1,00" },
    { keyword: "las mejores empresas de ciberseguridad", volume: 10, trend: "0%", cpc: "1,00" },
    { keyword: "mejores empresas ciberseguridad", volume: 10, trend: "0%", cpc: "1,00" },
    { keyword: "observatorio de ciberseguridad", volume: 10, trend: "0%", cpc: "1,00" },
    { keyword: "para que sirve la ciberseguridad en las empresas", volume: 10, trend: "0%", cpc: "1,00" },
    { keyword: "s21sec soc", volume: 10, trend: "0%", cpc: "1,00" },
    { keyword: "scitum ciberseguridad", volume: 10, trend: "0%", cpc: "1,00" },
    { keyword: "securesoft gtd", volume: 0, trend: "0%", cpc: "1,00" },
    { keyword: "seguridad informatica empresarial", volume: 10, trend: "0%", cpc: "1,00" },
    { keyword: "sentinel ciberseguridad", volume: 10, trend: "0%", cpc: "1,00" },
    { keyword: "servicios de seguridad cibernética", volume: 10, trend: "0%", cpc: "1,00" },
    { keyword: "servicios gestionados ciberseguridad", volume: 10, trend: "20%", cpc: "1,00" },
    { keyword: "siemens ciberseguridad", volume: 10, trend: "0%", cpc: "1,00" },
    { keyword: "software seguridad informatica", volume: 10, trend: "0%", cpc: "1,00" },
    { keyword: "sonda ciberseguridad", volume: 10, trend: "0%", cpc: "1,00" },
    { keyword: "telefonica tech ciberseguridad", volume: 10, trend: "0%", cpc: "1,00" },
    { keyword: "thales ciberseguridad", volume: 10, trend: "0%", cpc: "1,00" }
  ];

  const categorizeKeyword = (keyword) => {
    const k = keyword.toLowerCase();
    if (k.includes('iso') || k.includes('normativa') || k.includes('27000') || k.includes('27001')) return 'Normativa ISO';
    if (k.includes('incibe') || k.includes('enisa') || k.includes('guardia civil')) return 'Institucional';
    if (k.includes('telefonica') || k.includes('indra') || k.includes('prosegur') || k.includes('cisco') || k.includes('ibm') || k.includes('google') || k.includes('kpmg') || k.includes('deloitte')) return 'Competencia';
    if (k.includes('servicios') || k.includes('consultoria') || k.includes('empresas') || k.includes('pymes') || k.includes('industrial') || k.includes('corporativa')) return 'Servicios B2B';
    if (k.includes('curso') || k.includes('udemy') || k.includes('dummies') || k.includes('aprender')) return 'Formación';
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
      data.sort((a, b) => b.category.localeCompare(a.category));
    }

    return data;
  }, [enrichedData, searchTerm, activeCategory, sortBy]);

  // Calculations based on the Prompt's Funnel
  const marketTotalVolume = 10000;
  
  // Funnel Math
  const impressions = marketTotalVolume;
  const ctr = 0.05;
  const traffic = impressions * ctr; // 500
  const bounceRate = 0.70;
  const retainedTraffic = traffic * (1 - bounceRate); // 150
  const leadRate = 0.25;
  const leads = retainedTraffic * leadRate; // 37.5 -> 38
  const closeRate = 0.50;
  const clients = leads * closeRate; // 19

  const aioOpportunitiesCount = filteredData.filter(item => {
    const score = (item.category === 'Servicios B2B' || item.category === 'Normativa ISO');
    return score;
  }).length;

  const getAIOScore = (item) => {
    if (item.category === 'Competencia') return { score: 'Crítico', color: 'text-red-400 bg-red-500/10 border-red-500/30' };
    if (item.category === 'Servicios B2B') return { score: 'Alto', color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30' };
    if (item.category === 'Normativa ISO') return { score: 'Muy Alto', color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' };
    if (item.category === 'Institucional') return { score: 'Medio', color: 'text-blue-400 bg-blue-500/10 border-blue-500/30' };
    return { score: 'Bajo', color: 'text-gray-400 bg-gray-500/10 border-gray-500/30' };
  };

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
          Estrategia AIO para <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">KALACIBI</span>
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
                  ? 'bg-gradient-to-r from-emerald-600 to-cyan-600 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)]'
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
          
          <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent opacity-50"></div>

          {/* TAB 1: JOURNEY */}
          {activeTab === 'journey' && (
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-12 text-center text-white">El Embudo de la Verdad: Kalacibi</h2>
              
              <div className="grid md:grid-cols-3 gap-8 relative">
                <div className="hidden md:block absolute top-12 left-[30%] w-[40%] h-0.5 bg-gradient-to-r from-emerald-900 to-cyan-900 -z-10"></div>

                {/* Step 01 */}
                <div className="bg-slate-950 p-6 rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-all group relative">
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-slate-900 text-emerald-400 w-10 h-10 rounded-full flex items-center justify-center font-bold border border-white/10 shadow-[0_0_15px_rgba(16,185,129,0.2)]">01</div>
                  <div className="text-center mt-4">
                    <div className="bg-slate-900 w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-6 text-emerald-400 border border-white/5 group-hover:scale-110 transition-transform">
                      <Briefcase size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">Transformación Interna</h3>
                    <p className="text-xs text-emerald-400 uppercase tracking-widest font-bold mb-4">Way of Work</p>
                    <div className="text-left bg-slate-900/50 p-4 rounded-xl border border-white/5 text-sm space-y-3">
                      <p className="font-semibold text-gray-300">Antes de vender, preparamos:</p>
                      <ul className="space-y-2 text-gray-400">
                        <li className="flex items-center gap-2"><CheckCircle size={14} className="text-emerald-500"/> Gestión de Talento</li>
                        <li className="flex items-center gap-2"><CheckCircle size={14} className="text-emerald-500"/> Cultura de Ciberseguridad</li>
                        <li className="flex items-center gap-2"><CheckCircle size={14} className="text-emerald-500"/> Alineación Plan 2026</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step 02 */}
                <div className="bg-slate-950 p-6 rounded-2xl border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.1)] relative transform md:-translate-y-4">
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-cyan-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg">02</div>
                  <div className="text-center mt-4">
                    <div className="bg-cyan-900/20 w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-6 text-cyan-400 border border-cyan-500/20">
                      <Shield size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">Autoridad B2B</h3>
                    <p className="text-xs text-cyan-400 uppercase tracking-widest font-bold mb-4">Posicionamiento Experto</p>
                    <div className="text-left bg-slate-900/50 p-4 rounded-xl border border-white/5 text-sm space-y-3">
                      <p className="font-semibold text-gray-300">Capturamos la demanda de:</p>
                      <div className="bg-slate-800/50 border border-white/5 p-2 rounded text-gray-400 text-xs italic">
                        "Implementación ISO 27000 para empresas"
                      </div>
                      <div className="bg-slate-800/50 border border-white/5 p-2 rounded text-gray-400 text-xs italic">
                        "Ciberseguridad industrial y servicios gestionados"
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 03 */}
                <div className="bg-slate-950 p-6 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all group relative">
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-slate-900 text-blue-400 w-10 h-10 rounded-full flex items-center justify-center font-bold border border-white/10 shadow-[0_0_15px_rgba(59,130,246,0.2)]">03</div>
                  <div className="text-center mt-4">
                    <div className="bg-slate-900 w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-6 text-blue-400 border border-white/5 group-hover:scale-110 transition-transform">
                      <Handshake size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">Cierre de Alto Valor</h3>
                    <p className="text-xs text-blue-400 uppercase tracking-widest font-bold mb-4">50% Tasa de Éxito</p>
                    <div className="text-left bg-slate-900/50 p-4 rounded-xl border border-white/5 text-sm space-y-3">
                      <p className="font-semibold text-gray-300">El Resultado:</p>
                      <div className="bg-blue-500/10 border border-blue-500/20 p-3 rounded text-blue-200 text-xs">
                        Leads cualificados que entienden el valor de la seguridad y buscan partners a largo plazo, no proveedores baratos.
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
                  <p className="text-gray-400">Análisis de la demanda B2B en Ciberseguridad.</p>
                </div>
                <div className="mt-4 md:mt-0 text-right">
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Mercado Objetivo</p>
                  <div className="text-3xl font-bold text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.4)]">10.000</div>
                  <p className="text-xs text-gray-500">Búsquedas Mensuales Activas</p>
                </div>
              </div>

              {/* Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-slate-800/50 p-5 rounded-xl border border-white/5">
                  <div className="flex items-center space-x-2 mb-2 text-gray-400">
                    <DollarSign size={18} />
                    <span className="text-xs font-bold uppercase tracking-wider">CPC Estimado</span>
                  </div>
                  <p className="text-3xl font-bold text-white">1,00€</p>
                  <p className="text-xs text-gray-500 mt-1">Coste por Clic</p>
                </div>

                <div className="bg-emerald-900/20 p-5 rounded-xl border border-emerald-500/20">
                  <div className="flex items-center space-x-2 mb-2 text-emerald-400">
                    <Briefcase size={18} />
                    <span className="text-xs font-bold uppercase tracking-wider">Foco B2B</span>
                  </div>
                  <p className="text-3xl font-bold text-white">Alto</p>
                  <p className="text-xs text-emerald-400 mt-1">Alta Intención de Compra</p>
                </div>

                 <div className="bg-cyan-900/20 p-5 rounded-xl border border-cyan-500/20">
                  <div className="flex items-center space-x-2 mb-2 text-cyan-400">
                    <Shield size={18} />
                    <span className="text-xs font-bold uppercase tracking-wider">Nicho ISO 27000</span>
                  </div>
                  <p className="text-3xl font-bold text-white">~800</p>
                  <p className="text-xs text-cyan-400 mt-1">Búsquedas Específicas Normativa</p>
                </div>
              </div>

              {/* Controls */}
              <div className="bg-slate-950 p-4 rounded-xl border border-white/10 mb-6 flex flex-col md:flex-row gap-4 justify-between items-center sticky top-0 z-10 shadow-xl">
                <div className="relative w-full md:w-1/3">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                  <input 
                    type="text" 
                    placeholder="Filtrar keywords..." 
                    className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
                  {['Todas', 'Servicios B2B', 'Normativa ISO', 'Competencia', 'Institucional', 'Formación'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-colors border ${
                        activeCategory === cat 
                          ? 'bg-emerald-500 text-slate-950 border-emerald-400' 
                          : 'bg-slate-900 text-gray-400 border-white/10 hover:border-emerald-500/50 hover:text-emerald-400'
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
                        <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right cursor-pointer hover:text-emerald-400 transition-colors" onClick={() => setSortBy('volume')}>
                          Volumen <ArrowDown size={12} className="inline" />
                        </th>
                        <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-center">Tendencia</th>
                        <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-center">Categoría</th>
                        <th className="p-4 text-xs font-bold text-emerald-500 uppercase tracking-wider text-center">Potencial</th>
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
                            <td className="p-4 text-right font-mono text-emerald-400">
                              {row.volume}
                            </td>
                            <td className="p-4 text-center text-xs text-gray-500">
                              {row.trend}
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
            </div>
          )}

          {/* TAB 3: PROYECCIÓN (FUNNEL & GRAPHS) */}
          {activeTab === 'projection' && (
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-2 text-white">Proyección de Impacto</h2>
              <p className="text-gray-400 mb-8">Embudo de conversión basado en métricas de alta eficiencia.</p>

              {/* FUNNEL VISUAL */}
              <div className="space-y-4 max-w-4xl mx-auto mb-12">
                  {/* Level 1: Mercado */}
                  <div className="relative">
                    <div className="bg-slate-800 text-white p-4 rounded-lg border border-white/10 flex justify-between items-center w-full">
                      <div className="flex items-center gap-3">
                        <Search size={20} className="text-gray-400"/>
                        <span className="font-bold text-gray-300">Búsquedas Totales (Mercado)</span>
                      </div>
                      <span className="text-xl font-extrabold text-white">10.000</span>
                    </div>
                    <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 text-gray-600"><ArrowDown size={20} /></div>
                  </div>

                  {/* Level 2: Tráfico */}
                  <div className="relative flex justify-center">
                    <div className="bg-blue-900/20 text-blue-100 p-4 rounded-lg border border-blue-500/20 flex justify-between items-center w-[90%] shadow-sm backdrop-blur-sm">
                      <div className="flex flex-col">
                        <span className="font-bold flex items-center gap-2 text-blue-300"><MousePointerClick size={18}/> Tráfico Web</span>
                        <span className="text-xs text-blue-400 font-semibold">5% CTR (Conservador)</span>
                      </div>
                      <span className="text-xl font-extrabold text-white">{traffic.toLocaleString()}</span>
                    </div>
                    <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 text-gray-600"><ArrowDown size={20} /></div>
                  </div>

                  {/* Level 3: Retención */}
                  <div className="relative flex justify-center">
                    <div className="bg-purple-900/20 text-purple-100 p-4 rounded-lg border border-purple-500/20 flex justify-between items-center w-[70%] shadow-md backdrop-blur-sm">
                      <div className="flex flex-col">
                        <span className="font-bold flex items-center gap-2 text-purple-300"><Eye size={18}/> Tráfico Retenido</span>
                        <span className="text-xs text-purple-400 font-semibold">70% Rebote (Filtrado Natural)</span>
                      </div>
                      <span className="text-xl font-extrabold text-white">{retainedTraffic.toLocaleString()}</span>
                    </div>
                    <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 text-gray-600"><ArrowDown size={20} /></div>
                  </div>

                   {/* Level 4: Leads */}
                  <div className="relative flex justify-center">
                    <div className="bg-cyan-900/20 text-cyan-100 p-4 rounded-lg border border-cyan-500/20 flex justify-between items-center w-[50%] shadow-md backdrop-blur-sm">
                      <div className="flex flex-col">
                        <span className="font-bold flex items-center gap-2 text-cyan-300"><Target size={18}/> Leads Generados</span>
                        <span className="text-xs text-cyan-400 font-semibold">25% Conversión (Alta Calidad)</span>
                      </div>
                      <span className="text-2xl font-extrabold text-white">{Math.round(leads)}</span>
                    </div>
                    <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 text-gray-600"><ArrowDown size={20} /></div>
                  </div>

                  {/* Level 5: Clientes */}
                  <div className="flex justify-center">
                    <div className="bg-emerald-600 text-slate-950 p-6 rounded-xl border border-emerald-400 flex justify-between items-center w-[35%] shadow-[0_0_25px_rgba(16,185,129,0.5)] transform scale-110">
                      <div className="flex flex-col">
                        <span className="font-bold flex items-center gap-2"><Handshake size={18}/> NUEVOS CLIENTES</span>
                        <span className="text-xs text-emerald-900 font-bold opacity-80">50% Tasa de Cierre</span>
                      </div>
                      <span className="text-3xl font-extrabold">{Math.round(clients)}</span>
                    </div>
                  </div>
              </div>

              {/* EVOLUCIÓN TRÁFICO (IGUAL A AYR) */}
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

              {/* SECCIÓN FINANCIERA SEM (CPC 0,40€) */}
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
                      <span className="text-4xl font-bold text-red-400">1,00€</span>
                      <span className="text-sm text-gray-500 mb-1">/clic</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Lo que paga tu competencia por ineficiencia.</p>
                  </div>
                  <div className="bg-emerald-900/10 p-6 rounded-xl border border-emerald-500/30 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-emerald-500 text-slate-950 text-[10px] font-bold px-2 py-1 rounded-bl-lg">AHORRO 60%</div>
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
                  <p className="text-sm font-bold text-gray-300 mb-4">Presupuesto Mensual Necesario (Para mantener {traffic} visitas)</p>
                  <div className="space-y-4">
                    
                    {/* Mes 1 */}
                    <div className="flex items-center gap-4 group">
                      <div className="w-16 text-xs text-gray-500 font-bold">Mes 1</div>
                      <div className="flex-1 bg-slate-900 h-8 rounded-full overflow-hidden relative border border-white/5">
                        <div className="bg-gradient-to-r from-red-500/80 to-red-600/80 h-full w-[100%]"></div>
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-white drop-shadow-md">200€</span>
                      </div>
                    </div>

                    {/* Mes 6 */}
                    <div className="flex items-center gap-4 group">
                      <div className="w-16 text-xs text-gray-500 font-bold">Mes 6</div>
                      <div className="flex-1 bg-slate-900 h-8 rounded-full overflow-hidden relative border border-white/5">
                        <div className="bg-gradient-to-r from-orange-500/80 to-orange-600/80 h-full w-[90%]"></div>
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-white drop-shadow-md">180€</span>
                      </div>
                    </div>

                    {/* Mes 12 */}
                    <div className="flex items-center gap-4 group">
                      <div className="w-16 text-xs text-gray-500 font-bold">Mes 12</div>
                      <div className="flex-1 bg-slate-900 h-8 rounded-full overflow-hidden relative border border-white/5">
                        <div className="bg-gradient-to-r from-yellow-500/80 to-yellow-600/80 h-full w-[60%]"></div>
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-bold text-white drop-shadow-md">120€</span>
                      </div>
                    </div>

                    {/* Mes 24 */}
                    <div className="flex items-center gap-4 group">
                      <div className="w-16 text-xs text-gray-500 font-bold">Mes 24</div>
                      <div className="flex-1 bg-slate-900 h-8 rounded-full overflow-hidden relative border border-white/5">
                        <div className="bg-gradient-to-r from-emerald-500/80 to-emerald-600/80 h-full w-[30%]"></div>
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-bold text-white drop-shadow-md">60€</span>
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

          {/* TAB 4: EJECUCIÓN 12 MESES (CON FASE DE TALENTO) */}
          {activeTab === 'execution' && (
            <div className="animate-fade-in-up">
                <h2 className="text-3xl font-bold mb-8 text-center text-white">Hoja de Ruta de Transformación</h2>
                
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-emerald-500/20 before:to-transparent">
                
                {/* Phase 1: TALENTO (NUEVO) */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-emerald-500 bg-emerald-500/20 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.5)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <span className="font-bold text-sm">1</span>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-950 p-6 rounded-xl border border-emerald-500/30 shadow-lg">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="font-bold text-white text-lg">Fase 1: Talento & Way of Work</h3>
                        <span className="text-xs font-bold bg-emerald-900/30 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/30">MES 1</span>
                    </div>
                    <p className="text-sm text-gray-400 mb-4 italic">Antes de escalar, transformamos. Consultoría estratégica para alinear la compañía con el Plan 2026.</p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-sm text-gray-300">
                        <Users size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                        <strong className="text-emerald-400">Gestión de Talento:</strong> Entrega de formatos y sistema de gestión de personas.
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-300">
                        <Briefcase size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                        <strong className="text-emerald-400">Way of Work (WoW):</strong> Definición de nuevos flujos de trabajo ágiles.
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-300">
                        <GraduationCap size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                        <strong className="text-emerald-400">Transferencia de Conocimiento:</strong> Estructura organizacional lista para crecer.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Phase 2: ESTRATEGIA AIO */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-cyan-500 bg-cyan-500/20 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.5)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <span className="font-bold text-sm">2</span>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-950 p-6 rounded-xl border border-cyan-500/30 shadow-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-bold text-white text-lg">Fase 2: Estrategia AIO & Setup</h3>
                        <span className="text-xs font-bold bg-cyan-900/30 text-cyan-400 px-3 py-1 rounded-full border border-cyan-500/30">MES 2 - 3</span>
                    </div>
                    <p className="text-sm text-gray-400 mb-4 italic">Auditoría profunda y diseño del futuro. No movemos un dedo sin un plan maestro.</p>
                    <ul className="space-y-2">
                       <li className="flex items-start gap-2 text-sm text-gray-300"><CheckCircle size={16} className="text-cyan-500 mt-0.5"/> Construcción del Plan Estratégico AIO</li>
                       <li className="flex items-start gap-2 text-sm text-gray-300"><CheckCircle size={16} className="text-cyan-500 mt-0.5"/> Definición de OKRs y KPIs de Negocio</li>
                       <li className="flex items-start gap-2 text-sm text-gray-300"><Rocket size={16} className="text-cyan-500 mt-0.5"/> Lanzamiento Campaña SEM (Tráfico Inmediato)</li>
                    </ul>
                  </div>
                </div>

                {/* Phase 3: CONSTRUCCIÓN */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-blue-500 bg-blue-500/20 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.5)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <span className="font-bold text-sm">3</span>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-950 p-6 rounded-xl border border-blue-500/30 shadow-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-bold text-white text-lg">Fase 3: Construcción Masiva</h3>
                        <span className="text-xs font-bold bg-blue-900/30 text-blue-400 px-3 py-1 rounded-full border border-blue-500/30">MES 4 - 5</span>
                    </div>
                    <p className="text-sm text-gray-400 mb-4 italic">Ejecución táctica intensiva. Construyo el 100% de los activos necesarios. Sin límites.</p>
                    <ul className="space-y-2">
                       <li className="flex items-start gap-2 text-sm text-gray-300"><PenTool size={16} className="text-blue-500 mt-0.5"/> Despliegue de Webs y Landing Pages</li>
                       <li className="flex items-start gap-2 text-sm text-gray-300"><Zap size={16} className="text-blue-500 mt-0.5"/> Configuración de Gems y Flows IA</li>
                       <li className="flex items-start gap-2 text-sm text-gray-300"><Layout size={16} className="text-blue-500 mt-0.5"/> Implementación de Dashboards</li>
                    </ul>
                  </div>
                </div>

                {/* Phase 4: OPTIMIZACIÓN */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-purple-500 bg-purple-500/20 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.5)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <span className="font-bold text-sm">4</span>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-950 p-6 rounded-xl border border-purple-500/30 shadow-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-bold text-white text-lg">Fase 4: Optimización & Vuelo</h3>
                        <span className="text-xs font-bold bg-purple-900/30 text-purple-400 px-3 py-1 rounded-full border border-purple-500/30">MES 6 - 12</span>
                    </div>
                    <p className="text-sm text-gray-400 mb-4 italic">Acompañamiento, medición y transferencia de conocimiento.</p>
                    <ul className="space-y-2">
                       <li className="flex items-start gap-2 text-sm text-gray-300"><BarChart3 size={16} className="text-purple-500 mt-0.5"/> Lectura conjunta de Dashboards</li>
                       <li className="flex items-start gap-2 text-sm text-gray-300"><MessageSquare size={16} className="text-purple-500 mt-0.5"/> Feedback de negocio y consultoría</li>
                       <li className="flex items-start gap-2 text-sm text-gray-300"><Settings size={16} className="text-purple-500 mt-0.5"/> Ajuste fino de algoritmos AIO</li>
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
                        "Producción ILIMITADA de activos (webs, apps, contenido) según estrategia.",
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
                        "Cero Micro-management: No pedir cambios estéticos en webs/apps.",
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
                  <p className="text-xs text-gray-500">Incluye todos los costes de desarrollo y automatización.</p>
                </div>
                
                <div className="h-16 w-px bg-white/10 hidden md:block"></div>

                <div className="text-center">
                  <a href="https://wa.me/34655328878?text=Acepto%20el%20reto%20Kalacibi" target="_blank" rel="noopener noreferrer" className="inline-block bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xl font-bold py-4 px-12 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transform hover:-translate-y-1 transition-all">
                    Acepto el Reto. Iniciemos.
                  </a>
                  <p className="text-[10px] text-gray-500 mt-3 max-w-xs mx-auto">
                    *Al hacer clic confirmas haber leído y aceptado los compromisos del manifiesto.
                  </p>
                </div>
              </div>

            </div>
          )}
          
          <div className="mt-12 pt-6 border-t border-white/5 text-center">
              <p className="text-xs text-gray-600 uppercase tracking-widest">Estrategia diseñada exclusivamente para Kalacibi por Alejo Moreno</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EstrategiaKalacibi;