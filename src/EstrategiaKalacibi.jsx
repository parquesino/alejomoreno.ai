import React, { useState, useMemo, useEffect } from 'react';
import { Search, BrainCircuit, MessageSquare, ArrowRight, Lock, Eye, Target, Zap, BarChart3, Globe, TrendingUp, Map, Filter, DollarSign, Shield, Cpu, Info, ArrowDown, List, CheckCircle, Rocket, Handshake, Users, AlertTriangle, TrendingDown, MousePointerClick, ShoppingCart, Banknote, PenTool, Layout, Settings, Briefcase, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const EstrategiaKalacibi = () => {
  const [activeTab, setActiveTab] = useState('journey');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todas');
  const [sortBy, setSortBy] = useState('volume');

  // --- DATASET KALACIBI ---
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
  const marketTotalVolume = 10000; // Fixed per prompt
  const avgCPC = "1,00";
  
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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] -z-10" />
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-bold tracking-wide uppercase text-emerald-400">Objetivo Estratégico 2026</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Ciberseguridad & Talento: <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">KALACIBI</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          De la consultoría de transformación al dominio digital. Una estrategia integral para capturar el mercado B2B.
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
              {tab === 'journey' && 'Estrategia Holística'}
              {tab === 'market' && 'Radar de Mercado'}
              {tab === 'projection' && 'Impacto de Negocio'}
              {tab === 'execution' && 'Plan de Transformación'}
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
              <h2 className="text-3xl font-bold mb-12 text-center text-white">El Ecosistema Kalacibi</h2>
              
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
                  <h2 className="text-3xl font-bold mb-2 text-white">Radar de Mercado</h2>
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

          {/* TAB 3: PROYECCIÓN (FUNNEL) */}
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

              {/* KPI CARD */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-900 p-6 rounded-xl border border-white/5">
                  <h4 className="text-gray-400 uppercase text-xs font-bold mb-2">Inversión en Ads (Mensual)</h4>
                  <div className="flex items-end gap-2">
                    <span className="text-3xl font-bold text-white">500€</span>
                    <span className="text-sm text-gray-500 mb-1">({traffic} clics x 1€)</span>
                  </div>
                </div>
                <div className="bg-emerald-900/10 p-6 rounded-xl border border-emerald-500/30">
                  <h4 className="text-emerald-400 uppercase text-xs font-bold mb-2">Coste por Adquisición (CAC)</h4>
                  <div className="flex items-end gap-2">
                    <span className="text-3xl font-bold text-emerald-400">~26€</span>
                    <span className="text-sm text-emerald-400/70 mb-1">/cliente cerrado</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Un CAC excepcionalmente bajo para el sector B2B.</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: EJECUCIÓN 12 MESES */}
          {activeTab === 'execution' && (
            <div className="animate-fade-in-up">
                <h2 className="text-3xl font-bold mb-8 text-center text-white">Hoja de Ruta de Transformación</h2>
                
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-emerald-500/20 before:to-transparent">
                
                {/* Phase 1: CONSULTORÍA (CRÍTICO) */}
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
                        <strong className="text-emerald-400">Sistema de Gestión de Talento:</strong> Implementación y optimización de recursos humanos.
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-300">
                        <Briefcase size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                        <strong className="text-emerald-400">Way of Work (WoW):</strong> Rediseño de procesos operativos para agilidad y escalabilidad.
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-300">
                        <Target size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                        <strong className="text-emerald-400">Alineación Estratégica 2026:</strong> Definición de OKRs corporativos.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Phase 2: INFRAESTRUCTURA */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-cyan-500 bg-cyan-500/20 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.5)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <span className="font-bold text-sm">2</span>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-950 p-6 rounded-xl border border-cyan-500/30 shadow-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-bold text-white text-lg">Fase 2: Infraestructura Digital</h3>
                        <span className="text-xs font-bold bg-cyan-900/30 text-cyan-400 px-3 py-1 rounded-full border border-cyan-500/30">MES 2 - 3</span>
                    </div>
                    <p className="text-sm text-gray-400 mb-4 italic">Construcción de los activos digitales necesarios para captar y convertir el tráfico.</p>
                    <ul className="space-y-2">
                       <li className="flex items-start gap-2 text-sm text-gray-300"><Layout size={16} className="text-cyan-500 mt-0.5"/> Desarrollo de Landing Pages B2B</li>
                       <li className="flex items-start gap-2 text-sm text-gray-300"><Zap size={16} className="text-cyan-500 mt-0.5"/> Automatización de CRM</li>
                       <li className="flex items-start gap-2 text-sm text-gray-300"><PenTool size={16} className="text-cyan-500 mt-0.5"/> Creación de Lead Magnets (Guías ISO)</li>
                    </ul>
                  </div>
                </div>

                {/* Phase 3: ESCALADO */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-blue-500 bg-blue-500/20 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.5)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <span className="font-bold text-sm">3</span>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-950 p-6 rounded-xl border border-blue-500/30 shadow-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-bold text-white text-lg">Fase 3: Tráfico y Ventas</h3>
                        <span className="text-xs font-bold bg-blue-900/30 text-blue-400 px-3 py-1 rounded-full border border-blue-500/30">MES 4+</span>
                    </div>
                    <p className="text-sm text-gray-400 mb-4 italic">Activación de campañas y optimización continua del embudo.</p>
                    <ul className="space-y-2">
                       <li className="flex items-start gap-2 text-sm text-gray-300"><Rocket size={16} className="text-blue-500 mt-0.5"/> Lanzamiento Google Ads (Keywords 1€ CPC)</li>
                       <li className="flex items-start gap-2 text-sm text-gray-300"><BarChart3 size={16} className="text-blue-500 mt-0.5"/> Análisis de Retorno y Ajuste</li>
                       <li className="flex items-start gap-2 text-sm text-gray-300"><Shield size={16} className="text-blue-500 mt-0.5"/> Consolidación de Autoridad de Marca</li>
                    </ul>
                  </div>
                </div>

                </div>
            </div>
          )}

          {/* TAB 5: PROPUESTA COMERCIAL */}
          {activeTab === 'proposal' && (
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Propuesta de Valor</h2>

              {/* Entregables */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {[
                  { icon: Users, color: "text-emerald-400", title: "Transformación Organizacional", desc: "Consultoría 'Way of Work' y gestión de talento para preparar la escala." },
                  { icon: Target, color: "text-cyan-400", title: "Estrategia B2B Precisa", desc: "Foco en keywords transaccionales de alto valor (ISO, Consultoría) a bajo coste." },
                  { icon: BarChart3, color: "text-blue-400", title: "Sistema de Ventas", desc: "Embudo optimizado para generar ~19 clientes/mes con alta rentabilidad." },
                ].map((item, i) => (
                   <div key={i} className="bg-slate-950 p-6 rounded-xl border border-white/10 hover:border-emerald-500/30 transition-all shadow-lg group">
                    <div className={`bg-slate-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${item.color} border border-white/5 group-hover:scale-110 transition-transform`}>
                      <item.icon size={24} />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-white">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Pricing & CTA */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-3xl border border-emerald-500/20 shadow-[0_0_50px_rgba(16,185,129,0.1)]">
                <div className="text-center md:text-right">
                  <p className="text-sm text-emerald-400 uppercase font-bold tracking-wide">Modelo de Partner</p>
                  <div className="flex items-baseline justify-center md:justify-end gap-1">
                    <span className="text-3xl font-bold text-white">Consultoría + Resultados</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Mes 1: Fee de Consultoría Estratégica</p>
                  <p className="text-xs text-gray-500">Mes 2+: Fee de Gestión + Inversión Ads</p>
                </div>
                
                <div className="h-16 w-px bg-white/10 hidden md:block"></div>

                <div className="text-center">
                  <a href="https://kalacibi.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xl font-bold py-4 px-12 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] transform hover:-translate-y-1 transition-all">
                    Iniciar Transformación
                  </a>
                  <p className="text-[10px] text-gray-500 mt-3 max-w-xs mx-auto">
                    Alineados con el Plan Estratégico 2026 de Kalacibi.
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
