import React, { useState, useMemo, useEffect } from 'react';
import { Search, BrainCircuit, MessageSquare, ArrowRight, Lock, Eye, Target, Zap, BarChart3, Globe, TrendingUp, Map, Filter, DollarSign, Shield, Cpu, Info, ArrowDown, List, CheckCircle, Rocket, Handshake, Users, AlertTriangle, TrendingDown, MousePointerClick, ShoppingCart, Banknote, PenTool, Layout, Settings, Briefcase, GraduationCap, Megaphone, Award, BookOpen } from 'lucide-react';
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
  
  // Funnel Math AIO
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
            <span className="text-xs font-bold tracking-wide uppercase text-emerald-400">Metodología Q1 2026</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Plan Director 2026: Hegemonía <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Digital, Operativa y Reputacional</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
          AIO + Gestión del Talento + Procesos de Nuevo Negocio + Liderazgo de Pensamiento (CISO 2026).
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

          {/* TAB 1: JOURNEY INTEGRAL (3 PILARES) */}
          {activeTab === 'journey' && (
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-12 text-center text-white">Los 3 Pilares del Crecimiento Kalacibi</h2>
              
              <div className="grid md:grid-cols-3 gap-8 relative">
                
                {/* Pilar 1: Operativa */}
                <div className="bg-slate-950 p-6 rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-all group relative">
                  <div className="text-center mt-4">
                    <div className="bg-slate-900 w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-6 text-emerald-400 border border-white/5 group-hover:scale-110 transition-transform">
                      <Briefcase size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">1. Operativa & Talento</h3>
                    <p className="text-xs text-emerald-400 uppercase tracking-widest font-bold mb-4">La Base</p>
                    <div className="text-left bg-slate-900/50 p-4 rounded-xl border border-white/5 text-sm space-y-3">
                      <p className="font-semibold text-gray-300">Preparación para Escalar:</p>
                      <ul className="space-y-2 text-gray-400">
                        <li className="flex items-center gap-2"><CheckCircle size={14} className="text-emerald-500"/> Way of Work (Agilidad)</li>
                        <li className="flex items-center gap-2"><CheckCircle size={14} className="text-emerald-500"/> Sistema de Talento</li>
                        <li className="flex items-center gap-2"><CheckCircle size={14} className="text-emerald-500"/> Cultura Corporativa</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Pilar 2: Demanda */}
                <div className="bg-slate-950 p-6 rounded-2xl border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.1)] relative transform md:-translate-y-4">
                  <div className="text-center mt-4">
                    <div className="bg-cyan-900/20 w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-6 text-cyan-400 border border-cyan-500/20">
                      <Zap size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">2. Motor de Demanda</h3>
                    <p className="text-xs text-cyan-400 uppercase tracking-widest font-bold mb-4">AIO + Nuevo Negocio</p>
                    <div className="text-left bg-slate-900/50 p-4 rounded-xl border border-white/5 text-sm space-y-3">
                      <p className="font-semibold text-gray-300">Captación y Respuesta:</p>
                      <ul className="space-y-2 text-gray-400">
                        <li className="flex items-center gap-2"><CheckCircle size={14} className="text-cyan-500"/> SEO/SEM (Inbound)</li>
                        <li className="flex items-center gap-2"><CheckCircle size={14} className="text-cyan-500"/> Procesos RFP (Outbound)</li>
                        <li className="flex items-center gap-2"><CheckCircle size={14} className="text-cyan-500"/> Dept. Nuevo Negocio</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Pilar 3: Reputación */}
                <div className="bg-slate-950 p-6 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all group relative">
                  <div className="text-center mt-4">
                    <div className="bg-slate-900 w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-6 text-blue-400 border border-white/5 group-hover:scale-110 transition-transform">
                      <Megaphone size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">3. Reputación & Autoridad</h3>
                    <p className="text-xs text-blue-400 uppercase tracking-widest font-bold mb-4">Discurso CISO 2026</p>
                    <div className="text-left bg-slate-900/50 p-4 rounded-xl border border-white/5 text-sm space-y-3">
                      <p className="font-semibold text-gray-300">Liderazgo de Mercado:</p>
                      <div className="bg-blue-500/10 border border-blue-500/20 p-3 rounded text-blue-200 text-xs">
                        "Construcción de un discurso único para CISOs y Plan de Medios para amplificar la voz de Kalacibi."
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
                  <h2 className="text-3xl font-bold mb-2 text-white">Explorador de Oportunidad AIO</h2>
                  <p className="text-gray-400">Datos para alimentar el Motor de Demanda Inbound.</p>
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

          {/* TAB 3: PROYECCIÓN (SPLIT SCREEN) */}
          {activeTab === 'projection' && (
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-2 text-white">Proyección de Impacto 2026</h2>
              <p className="text-gray-400 mb-12">Dos motores de crecimiento operando en paralelo: Inbound y Reputación.</p>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                  {/* COLUMNA A: MOTOR AIO (INBOUND) */}
                  <div className="bg-slate-950 p-6 rounded-2xl border border-cyan-500/20 shadow-lg">
                      <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                          <Zap size={24} className="text-cyan-400"/>
                          <h3 className="text-xl font-bold text-white">Motor Inbound (AIO)</h3>
                      </div>
                      
                      {/* FUNNEL */}
                      <div className="space-y-3">
                          <div className="flex justify-between text-sm">
                              <span className="text-gray-400">Mercado Total</span>
                              <span className="text-white font-bold">10.000</span>
                          </div>
                          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                              <div className="bg-cyan-500 w-full h-full"></div>
                          </div>
                          
                          <div className="flex justify-between text-sm mt-4">
                              <span className="text-gray-400">Tráfico (5% CTR)</span>
                              <span className="text-white font-bold">{traffic}</span>
                          </div>
                          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                              <div className="bg-cyan-500 w-[5%] h-full"></div>
                          </div>

                          <div className="flex justify-between text-sm mt-4">
                              <span className="text-gray-400">Leads (25% Conv)</span>
                              <span className="text-white font-bold">{Math.round(leads)}</span>
                          </div>
                          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                              <div className="bg-cyan-500 w-[1%] h-full"></div>
                          </div>

                           <div className="bg-emerald-900/20 p-4 rounded-lg border border-emerald-500/20 mt-6 text-center">
                              <p className="text-xs text-emerald-400 uppercase font-bold">Nuevos Clientes / Mes</p>
                              <p className="text-4xl font-extrabold text-white mt-2">{Math.round(clients)}</p>
                           </div>
                           <p className="text-center text-xs text-gray-500 mt-2">Coste Ads: ~200€/mes</p>
                      </div>
                  </div>

                  {/* COLUMNA B: MOTOR REPUTACIÓN (MEDIOS) */}
                  <div className="bg-slate-950 p-6 rounded-2xl border border-blue-500/20 shadow-lg">
                      <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                          <Megaphone size={24} className="text-blue-400"/>
                          <h3 className="text-xl font-bold text-white">Motor Reputación</h3>
                      </div>

                      <div className="space-y-6">
                           <div className="bg-slate-900 p-4 rounded-lg border border-white/5">
                               <div className="flex justify-between items-center">
                                   <span className="text-sm text-gray-400">Inversión Medios</span>
                                   <span className="text-xl font-bold text-white">800€<span className="text-xs font-normal text-gray-500">/mes</span></span>
                               </div>
                           </div>

                           <div className="bg-slate-900 p-4 rounded-lg border border-white/5">
                               <div className="flex justify-between items-center">
                                   <span className="text-sm text-gray-400">Activo Principal</span>
                                   <span className="text-sm font-bold text-blue-400">Manifiesto CISO 2026</span>
                               </div>
                           </div>

                           <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 p-6 rounded-xl border border-blue-500/30 text-center mt-4">
                              <p className="text-xs text-blue-300 uppercase font-bold">Pipeline Generado 2026</p>
                              <p className="text-4xl font-extrabold text-white mt-2">2.000.000€</p>
                              <p className="text-xs text-blue-300/60 mt-2">Objetivo de Valor de Contrato</p>
                           </div>
                      </div>
                  </div>
              </div>

              {/* EVOLUCIÓN TRÁFICO (MODIFICADO) */}
              <div className="bg-slate-950 p-8 rounded-2xl shadow-sm border border-white/10 mb-12">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <TrendingUp size={24} className="text-green-400" />
                  Evolución de Fuentes de Tráfico
                </h3>
                <p className="text-sm text-gray-400 mb-6">
                  Transición estratégica: Del pago (SEM) a la autonomía orgánica y reputacional.
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
                    <div className="w-full bg-indigo-500/20 h-[0%] rounded-t-sm relative transition-all border-x border-t border-indigo-500/30"></div>
                    <div className="w-full bg-cyan-500/20 h-[0%] relative transition-all border-x border-t border-cyan-500/30"></div>
                    <div className="w-full bg-purple-500/20 h-[0%] relative transition-all border-x border-t border-purple-500/30"></div>
                    <div className="w-full bg-slate-700 h-[100%] rounded-b-lg relative transition-all flex items-center justify-center text-white text-xs font-bold border border-white/10">SEM 100%</div>
                    <p className="mt-2 text-sm font-bold text-gray-400">Mes 1</p>
                  </div>

                  {/* Mes 6 */}
                  <div className="flex flex-col justify-end h-full group">
                    <div className="w-full bg-indigo-500 h-[10%] rounded-t-lg relative transition-all flex items-center justify-center text-white text-[10px] shadow-[0_0_10px_rgba(99,102,241,0.4)]">Dir 10%</div>
                    <div className="w-full bg-cyan-600 h-[10%] relative transition-all flex items-center justify-center text-white text-[10px] shadow-[0_0_10px_rgba(8,145,178,0.4)]">Org 10%</div>
                    <div className="w-full bg-purple-500/20 h-[0%] relative transition-all"></div>
                    <div className="w-full bg-slate-700 h-[80%] rounded-b-lg relative transition-all flex items-center justify-center text-white text-xs font-bold border border-white/10">SEM 80%</div>
                    <p className="mt-2 text-sm font-bold text-gray-400">Mes 6</p>
                  </div>

                  {/* Mes 12 */}
                  <div className="flex flex-col justify-end h-full group">
                    <div className="w-full bg-purple-600 h-[10%] rounded-t-lg relative transition-all flex items-center justify-center text-white text-[10px] shadow-[0_0_10px_rgba(147,51,234,0.4)]">AI 10%</div>
                    <div className="w-full bg-indigo-500 h-[15%] relative transition-all flex items-center justify-center text-white text-xs shadow-[0_0_10px_rgba(99,102,241,0.4)] z-10">Dir 15%</div>
                    <div className="w-full bg-cyan-600 h-[30%] relative transition-all flex items-center justify-center text-white text-xs shadow-[0_0_10px_rgba(8,145,178,0.4)] z-10">Org 30%</div>
                    <div className="w-full bg-slate-700 h-[45%] rounded-b-lg relative transition-all flex items-center justify-center text-white text-xs font-bold border border-white/10">SEM 45%</div>
                    <p className="mt-2 text-sm font-bold text-gray-400">Mes 12</p>
                  </div>

                  {/* Mes 24 */}
                  <div className="flex flex-col justify-end h-full group">
                    <div className="w-full bg-purple-600 h-[30%] rounded-t-lg relative transition-all flex items-center justify-center text-white text-xs font-bold shadow-[0_0_15px_rgba(147,51,234,0.4)] z-20">AI 30%</div>
                    <div className="w-full bg-indigo-500 h-[20%] relative transition-all flex items-center justify-center text-white text-xs font-bold shadow-[0_0_15px_rgba(99,102,241,0.4)] z-10">Dir 20%</div>
                    <div className="w-full bg-cyan-600 h-[40%] relative transition-all flex items-center justify-center text-white text-xs font-bold shadow-[0_0_15px_rgba(8,145,178,0.4)] z-10">Org 40%</div>
                    <div className="w-full bg-slate-700 h-[10%] rounded-b-lg relative transition-all flex items-center justify-center text-white text-xs">SEM 10%</div>
                    <p className="mt-2 text-sm font-bold text-gray-400">Mes 24</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap justify-center gap-6 mt-6 text-xs font-bold text-gray-400">
                  <div className="flex items-center gap-2"><div className="w-3 h-3 bg-slate-700 rounded-full border border-white/10"></div>SEM (Pago)</div>
                  <div className="flex items-center gap-2"><div className="w-3 h-3 bg-cyan-600 rounded-full shadow-[0_0_5px_rgba(8,145,178,0.8)]"></div>Orgánico (SEO)</div>
                  <div className="flex items-center gap-2"><div className="w-3 h-3 bg-purple-600 rounded-full shadow-[0_0_5px_rgba(147,51,234,0.8)]"></div>Tráfico IA (AIO)</div>
                  <div className="flex items-center gap-2"><div className="w-3 h-3 bg-indigo-500 rounded-full shadow-[0_0_5px_rgba(99,102,241,0.8)]"></div>Directo (Reputación)</div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 4: EJECUCIÓN 12 MESES (PLAN DIRECTOR) */}
          {activeTab === 'execution' && (
            <div className="animate-fade-in-up">
                <h2 className="text-3xl font-bold mb-8 text-center text-white">Hoja de Ruta: Plan Director 2026</h2>
                
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-emerald-500/20 before:to-transparent">
                
                {/* Phase 1: CIMIENTOS */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-emerald-500 bg-emerald-500/20 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.5)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <span className="font-bold text-sm">1</span>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-950 p-6 rounded-xl border border-emerald-500/30 shadow-lg">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="font-bold text-white text-lg">Fase 1: Cimientos Corporativos</h3>
                        <span className="text-xs font-bold bg-emerald-900/30 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/30">MES 1</span>
                    </div>
                    <p className="text-sm text-gray-400 mb-4 italic">Organización interna y definición de procesos clave.</p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-sm text-gray-300">
                        <Users size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                        <strong className="text-emerald-400">Talento & WoW:</strong> Entrega de formatos y sistema de gestión.
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-300">
                        <Target size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                        <strong className="text-emerald-400">Nuevo Negocio (Auditoría):</strong> Definición de flujos de respuesta RFPs.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Phase 2: CONSTRUCCIÓN */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-cyan-500 bg-cyan-500/20 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.5)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <span className="font-bold text-sm">2</span>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-950 p-6 rounded-xl border border-cyan-500/30 shadow-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-bold text-white text-lg">Fase 2: Activos & Discurso</h3>
                        <span className="text-xs font-bold bg-cyan-900/30 text-cyan-400 px-3 py-1 rounded-full border border-cyan-500/30">MES 2 - 3</span>
                    </div>
                    <p className="text-sm text-gray-400 mb-4 italic">Desarrollo técnico y narrativo.</p>
                    <ul className="space-y-2">
                       <li className="flex items-start gap-2 text-sm text-gray-300"><Layout size={16} className="text-cyan-500 mt-0.5"/> Despliegue Ecosistema AIO</li>
                       <li className="flex items-start gap-2 text-sm text-gray-300"><MessageSquare size={16} className="text-cyan-500 mt-0.5"/> <strong>Taller CISO 2026:</strong> Creación del discurso reputacional.</li>
                    </ul>
                  </div>
                </div>

                {/* Phase 3: LANZAMIENTO */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-blue-500 bg-blue-500/20 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.5)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <span className="font-bold text-sm">3</span>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-950 p-6 rounded-xl border border-blue-500/30 shadow-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-bold text-white text-lg">Fase 3: Activación Dual</h3>
                        <span className="text-xs font-bold bg-blue-900/30 text-blue-400 px-3 py-1 rounded-full border border-blue-500/30">MES 4 - 5</span>
                    </div>
                    <p className="text-sm text-gray-400 mb-4 italic">Encendemos motores.</p>
                    <ul className="space-y-2">
                       <li className="flex items-start gap-2 text-sm text-gray-300"><Rocket size={16} className="text-blue-500 mt-0.5"/> Lanzamiento Google Ads (Inbound)</li>
                       <li className="flex items-start gap-2 text-sm text-gray-300"><Megaphone size={16} className="text-blue-500 mt-0.5"/> <strong>Inicio Plan de Medios:</strong> Distribución del Manifiesto.</li>
                    </ul>
                  </div>
                </div>

                {/* Phase 4: CONSOLIDACIÓN */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-purple-500 bg-purple-500/20 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.5)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <span className="font-bold text-sm">4</span>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-950 p-6 rounded-xl border border-purple-500/30 shadow-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-bold text-white text-lg">Fase 4: Consolidación</h3>
                        <span className="text-xs font-bold bg-purple-900/30 text-purple-400 px-3 py-1 rounded-full border border-purple-500/30">MES 6 - 12</span>
                    </div>
                    <p className="text-sm text-gray-400 mb-4 italic">Medición de Pipeline y Ajuste.</p>
                    <ul className="space-y-2">
                       <li className="flex items-start gap-2 text-sm text-gray-300"><BarChart3 size={16} className="text-purple-500 mt-0.5"/> Medición de Pipeline de Reputación.</li>
                       <li className="flex items-start gap-2 text-sm text-gray-300"><Settings size={16} className="text-purple-500 mt-0.5"/> Optimización continua AIO.</li>
                    </ul>
                  </div>
                </div>

                </div>
            </div>
          )}

          {/* TAB 5: PROPUESTA COMERCIAL */}
          {activeTab === 'proposal' && (
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Propuesta de Valor Integral</h2>

              {/* Entregables */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {[
                  { icon: Users, color: "text-emerald-400", title: "Consultoría Talento", desc: "Formatos, Sistema de Gestión y Way of Work (Agilidad)." },
                  { icon: Target, color: "text-cyan-400", title: "Nuevo Negocio", desc: "Consultoría de procesos y flujos de respuesta RFP con Dirección." },
                  { icon: Megaphone, color: "text-blue-400", title: "Consultoría Reputación", desc: "Creación de Discurso CISO 2026 y Plan de Medios." },
                  { icon: Rocket, color: "text-purple-400", title: "Estrategia AIO", desc: "Implementación técnica completa del ecosistema digital." },
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
                        "Acompañamiento a Directores (Nuevo Negocio y Servicio).",
                        "Producción ILIMITADA de activos (webs, apps, contenido).",
                        "Obsesión por cumplir el objetivo de 2M€ Pipeline y 19 ventas mensuales de MCP.",
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
                        "Disponibilidad de Directores para talleres estratégicos.",
                        "Inversión en medios: 800€ Content Marketing + 200€ SEM mensual (fase activación).",
                        "Cero Micro-management.",
                        "Llaves del Reino: Acceso total.",
                        "Mentalidad Remote-First."
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
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-3xl border border-emerald-500/20 shadow-[0_0_50px_rgba(16,185,129,0.1)]">
                <div className="text-center md:text-right">
                  <p className="text-sm text-emerald-400 uppercase font-bold tracking-wide">Inversión Mensual</p>
                  <div className="flex items-baseline justify-center md:justify-end gap-1">
                    <span className="text-5xl font-extrabold text-white">3.000€</span>
                    <span className="text-xl text-gray-500 font-medium">/mes</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Contrato anual cerrado. Facturación mensual.</p>
                  <p className="text-xs text-gray-500">Incluye Consultoría + Desarrollo + Gestión.</p>
                </div>
                
                <div className="h-16 w-px bg-white/10 hidden md:block"></div>

                <div className="text-center">
                  <a href="https://wa.me/34655328878?text=Acepto%20el%20reto%20Kalacibi" target="_blank" rel="noopener noreferrer" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xl font-bold py-4 px-12 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] transform hover:-translate-y-1 transition-all">
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