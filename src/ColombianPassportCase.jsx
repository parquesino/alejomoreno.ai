import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Globe, 
  Bot, 
  CheckCircle2, 
  ArrowRight, 
  Cpu, 
  Search, 
  MessageSquare,
  Award,
  Zap,
  Network,
  ShieldCheck,
  ExternalLink,
  Maximize2,
  X
} from 'lucide-react';

// --- CONFIGURACIÓN DE IMÁGENES ---
const IMAGES = {
  searchConsole: "/search-console.png", 
  aiRecommendation: "/ai-chat.png",
  aiTraffic: "/wix-bots.png",
  googleReviews: "/google-reviews.png"
};
// ------------------------------------------------------------------

const Logo = () => (
  // EL LOGO AHORA ES UN LINK A "/"
  <Link to="/" className="flex items-center gap-2 group cursor-pointer">
    <div className="relative w-10 h-10 flex items-center justify-center">
      <svg viewBox="0 0 100 100" className="w-full h-full text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">
        <path d="M50 10 L85 90 L70 90 L50 40 L30 90 L15 90 Z" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="50" cy="15" r="4" fill="currentColor" />
      </svg>
    </div>
    <div className="flex flex-col">
      <span className="text-xl font-bold tracking-tight text-white leading-none">ALEJO<span className="text-gray-400">MORENO</span><span className="text-cyan-400">.ai</span></span>
      <span className="text-[0.6rem] tracking-[0.2em] text-cyan-400/80 uppercase">Case Study</span>
    </div>
  </Link>
);

const StatCard = ({ icon: Icon, value, label, sub, trend }) => (
  <div className="bg-slate-900/50 border border-white/5 p-6 rounded-2xl relative overflow-hidden group hover:border-cyan-500/30 transition-all">
    <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-cyan-500/10 transition-colors"></div>
    <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-cyan-400">
                <Icon size={20} />
            </div>
            {trend && (
                <span className="text-green-400 text-xs font-bold bg-green-900/20 px-2 py-1 rounded-full border border-green-500/20">
                    {trend}
                </span>
            )}
        </div>
        <div className="text-3xl font-bold text-white mb-1">{value}</div>
        <div className="text-sm text-gray-400 font-medium uppercase tracking-wide mb-1">{label}</div>
        <div className="text-xs text-gray-500">{sub}</div>
    </div>
  </div>
);

// Componente EvidenceFrame actualizado con funcionalidad Click
const EvidenceFrame = ({ title, src, caption, onExpand }) => (
  <div 
    className="group relative cursor-zoom-in" 
    onClick={() => onExpand && onExpand(src, title)}
  >
    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
    <div className="relative bg-slate-900 rounded-xl overflow-hidden border border-white/10 shadow-2xl transition-transform group-hover:scale-[1.01]">
      {/* Barra de Navegador */}
      <div className="h-8 bg-slate-950 border-b border-white/5 flex items-center px-4 gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
        </div>
        <div className="flex-1 text-center">
          <span className="text-[10px] text-gray-500 font-mono">{title}</span>
        </div>
        <Maximize2 size={12} className="text-gray-600" />
      </div>
      
      {/* Imagen */}
      <div className="relative aspect-video bg-slate-800">
        <img 
          src={src} 
          alt={title} 
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500" 
        />
        {/* Overlay al hacer hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-black/20 backdrop-blur-[1px]">
            <span className="bg-black/80 text-white text-xs px-4 py-2 rounded-full border border-white/20 flex items-center gap-2 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
               <Maximize2 size={14} className="text-cyan-400" /> Ampliar Evidencia
            </span>
        </div>
      </div>
    </div>
    {caption && <p className="text-center text-xs text-gray-500 mt-3 italic">{caption}</p>}
  </div>
);

// Componente Lightbox (Visor a pantalla completa)
const ImageLightbox = ({ src, title, isOpen, onClose }) => {
  // Manejador de tecla ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[1000] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300" 
      onClick={onClose}
    >
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 text-white/70 hover:text-white hover:bg-white/10 p-2 rounded-full transition-all z-[1010]"
      >
        <X size={32} />
      </button>
      
      <div 
        className="relative max-w-full max-h-full flex flex-col items-center" 
        onClick={(e) => e.stopPropagation()} // Evita cerrar si clickeas la imagen
      >
         <img 
            src={src} 
            alt={title} 
            className="max-w-[90vw] max-h-[85vh] rounded-lg border border-white/10 shadow-2xl object-contain"
         />
         <div className="mt-4">
            <span className="text-gray-300 font-mono text-xs md:text-sm bg-black/50 px-4 py-2 rounded-full border border-white/10">
              {title}
            </span>
         </div>
      </div>
    </div>
  );
};

const SatelliteNode = ({ url, positionClass }) => (
  <div className={`absolute ${positionClass} z-20 flex flex-col items-center group`}>
    <div className="bg-slate-800/90 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 rounded-full px-3 py-1.5 shadow-lg flex items-center gap-2 cursor-default transition-all hover:scale-110">
      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></div>
      <span className="text-[10px] font-medium text-gray-300 whitespace-nowrap">{url}</span>
    </div>
  </div>
);

export default function ColombianPassportCase() {
  const [lightbox, setLightbox] = useState({ isOpen: false, src: '', title: '' });

  const openLightbox = (src, title) => {
    setLightbox({ isOpen: true, src, title });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      
      {/* Visor de Imágenes */}
      <ImageLightbox 
        isOpen={lightbox.isOpen} 
        src={lightbox.src} 
        title={lightbox.title} 
        onClose={() => setLightbox({ ...lightbox, isOpen: false })} 
      />

      {/* Nav */}
      <nav className="w-full py-6 border-b border-white/5 bg-slate-950/50 backdrop-blur-md fixed z-50">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Logo />
          <a href="#contact" className="text-sm font-bold text-white hover:text-cyan-400 transition-colors">Quiero Resultados Así</a>
        </div>
      </nav>

      {/* Hero */}
      <header className="pt-40 pb-20 container mx-auto px-6 relative">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full -z-10"></div>
        
        <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-900/20 text-green-400 text-xs font-bold tracking-widest uppercase mb-6">
                <CheckCircle2 size={14} /> Proyecto Real · Nov 2024 - Nov 2025
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                De Cero a Líder de Nicho <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Talento Senior + IA. Cero Juniors.</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Cómo <strong className="text-white">Colombian Passport</strong> pasó de no existir a ser recomendado por ChatGPT y facturar $10k/mes en su primer año, gracias a una estructura ligera de expertos senior y automatización.
            </p>
        </div>
      </header>

      {/* The Numbers (The Truth Funnel) */}
      <section className="py-12 border-y border-white/5 bg-slate-900/30">
          <div className="container mx-auto px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <StatCard 
                    icon={Search} 
                    value="65,000" 
                    label="Impresiones" 
                    sub="Captación Orgánica Google"
                    trend="Posición 60 ➔ 6"
                  />
                  <StatCard 
                    icon={Bot} 
                    value="9,000" 
                    label="Consultas IA" 
                    sub="Tráfico de Bots (Gemini/GPT)"
                    trend="AIO Dominance"
                  />
                  <StatCard 
                    icon={Zap} 
                    value="$23,000" 
                    label="Pipeline" 
                    sub="Oportunidades Generadas"
                  />
                  <StatCard 
                    icon={TrendingUp} 
                    value="$10,000" 
                    label="Facturación" 
                    sub="Ingreso Mensual Recurrente"
                    trend="Mes 12"
                  />
              </div>
          </div>
      </section>

      {/* Evidence 1: SEO Growth */}
      <section className="py-24 container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                  <EvidenceFrame 
                    title="google-search-console.png" 
                    src={IMAGES.searchConsole} 
                    caption="Gráfica real de Search Console: Crecimiento orgánico constante en 12 meses."
                    onExpand={openLightbox}
                  />
              </div>
              <div className="order-1 md:order-2">
                  <h2 className="text-3xl font-bold text-white mb-6">Dominio en Google</h2>
                  <p className="text-gray-400 text-lg leading-relaxed mb-6">
                      Comenzamos en la página 6 de Google. Mediante una arquitectura semántica precisa y contenido generado por nuestras "Gemas de IA", escalamos hasta la <strong>Posición 6</strong> para keywords transaccionales de alto valor.
                  </p>
                  <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-gray-300">
                          <CheckCircle2 className="text-green-500" size={18} />
                          <span>46.000 impresiones mensuales</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-300">
                          <CheckCircle2 className="text-green-500" size={18} />
                          <span>221.000 impresiones totales en el año</span>
                      </li>
                  </ul>
              </div>
          </div>
      </section>

      {/* Evidence 2: AI Recommendation (The Holy Grail) */}
      <section className="py-24 bg-slate-900 border-y border-white/5">
          <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                  <span className="text-cyan-400 font-bold tracking-widest text-sm uppercase">La Nueva Frontera</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">Validación AIO: La IA nos recomienda</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                      <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                          La mayoría de agencias luchan por el clic. Nosotros luchamos por la <strong>respuesta</strong>. 
                          Logramos que Gemini y ChatGPT identifiquen a <em>Colombian Passport</em> como una entidad de autoridad, recomendándola activamente a usuarios que buscan abogados.
                      </p>
                      
                      <div className="bg-slate-950 p-6 rounded-xl border border-white/10">
                          <div className="flex items-start gap-4 mb-4">
                              <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">U</div>
                              <p className="text-gray-400 text-sm italic">"I need a colombian immigration lawyer expert in digital nomad visas"</p>
                          </div>
                          <div className="flex items-start gap-4">
                              <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                  <Bot size={16} />
                              </div>
                              <div className="text-gray-200 text-sm">
                                  <p className="mb-2">Here are some recommended options:</p>
                                  <ul className="list-disc pl-4 space-y-1 text-green-300">
                                      <li>Nexo Legal</li>
                                      <li className="font-bold text-white bg-green-500/20 px-1 rounded">Colombian Passport - Immigration Lawyers</li>
                                      <li>Colombian Visa Services</li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="relative">
                      {/* Floating Badge */}
                      <div className="absolute -top-6 -right-6 bg-green-500 text-slate-950 font-bold px-4 py-2 rounded-full transform rotate-3 z-20 shadow-lg border border-white/20">
                          ¡Funciona!
                      </div>
                      <EvidenceFrame 
                        title="chatgpt-recommendation.png" 
                        src={IMAGES.aiRecommendation} 
                        caption="Captura real: ChatGPT recomendando nuestra firma junto a competidores históricos."
                        onExpand={openLightbox}
                      />
                  </div>
              </div>
          </div>
      </section>

      {/* Evidence 3: Operational Efficiency */}
      <section className="py-24 container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-white text-center mb-16">El Secreto: 9.000 Bots "Leyendo" nuestra Web</h2>
              
              <div className="relative bg-slate-950 rounded-2xl overflow-hidden border border-cyan-500/30 shadow-[0_0_60px_rgba(6,182,212,0.1)]">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500"></div>
                  
                  <div className="grid lg:grid-cols-3">
                      {/* Left: Context */}
                      <div className="p-8 lg:border-r border-white/10 flex flex-col justify-center">
                          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                              <Bot className="text-cyan-400" /> Tráfico de Máquinas
                          </h3>
                          <p className="text-sm text-gray-400 mb-6">
                              No son humanos. Son los crawlers de OpenAI, Gemini y Perplexity aprendiendo de nuestro contenido para luego usarlo en sus respuestas.
                          </p>
                          <div className="text-4xl font-bold text-white">9,000+</div>
                          <div className="text-xs text-cyan-400 uppercase tracking-widest mt-1">Hits de Bots IA / Mes</div>
                      </div>

                      {/* Right: The Screenshot */}
                      <div className="lg:col-span-2 p-8 bg-slate-900/50">
                          <EvidenceFrame 
                            title="wix-analytics-bot-traffic.jpg" 
                            src={IMAGES.aiTraffic} 
                            caption="Dashboard de Wix Analytics mostrando el tráfico segmentado por Bots de IA."
                            onExpand={openLightbox}
                          />
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* The Operational Miracle - REESTRUCTURADO */}
      <section className="py-24 bg-slate-900 border-y border-white/5">
          <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">La Nueva Firma Legal</h2>
              
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20">
                  
                  {/* The Old Way */}
                  <div className="opacity-40 grayscale scale-90">
                      <div className="text-6xl font-black text-gray-500 mb-2">Tradicional</div>
                      <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Estructura Pesada</div>
                      <div className="space-y-2 text-left text-sm text-gray-500 max-w-xs mx-auto">
                          <p>❌ Socios Seniors (Costosos)</p>
                          <p>❌ Ejército de Juniors (Ineficientes)</p>
                          <p>❌ Pasantes (Alta Rotación)</p>
                          <p>❌ Dpto. de Marketing Externo</p>
                      </div>
                  </div>

                  {/* VS */}
                  <div className="text-2xl font-bold text-cyan-500">VS</div>

                  {/* The New Way */}
                  <div className="relative">
                      <div className="absolute -inset-4 bg-cyan-500/10 rounded-3xl blur-xl"></div>
                      <div className="relative bg-slate-950 p-8 rounded-2xl border border-cyan-500/50 shadow-2xl">
                          <div className="text-5xl font-black text-white mb-2 flex justify-center items-center gap-3">
                              3 <span className="text-lg font-normal text-gray-400 self-end mb-2">Humanos Expertos</span>
                          </div>
                          <div className="text-3xl font-bold text-cyan-400 mb-6 flex justify-center items-center gap-2">
                              + 15 <span className="text-sm font-bold text-cyan-400 uppercase tracking-widest self-end mb-1">Gemas de IA (El "Staff")</span>
                          </div>
                          
                          <div className="space-y-3 text-left">
                              <div className="flex items-center gap-3 bg-slate-900 p-3 rounded border border-white/5">
                                  <ShieldCheck size={20} className="text-blue-400" />
                                  <span className="text-sm text-gray-300"><strong>Camila Ocampo (Ex-Big Law):</strong> Estrategia Legal Senior</span>
                              </div>
                              <div className="flex items-center gap-3 bg-slate-900 p-3 rounded border border-white/5">
                                  <TrendingUp size={20} className="text-green-400" />
                                  <span className="text-sm text-gray-300"><strong>Alejo Moreno:</strong> Director de Crecimiento & AIO</span>
                              </div>
                              <div className="flex items-center gap-3 bg-slate-900 p-3 rounded border border-white/5">
                                  <Cpu size={20} className="text-purple-400" />
                                  <span className="text-sm text-gray-300"><strong>IA Generativa:</strong> Ejecución de tareas junior y repetitivas</span>
                              </div>
                          </div>
                      </div>
                  </div>

              </div>
              
              <p className="mt-12 text-gray-400 max-w-3xl mx-auto leading-relaxed">
                  Fundada por <strong>Camila Ocampo Matiz</strong>, abogada experta que dejó una de las firmas más reputadas de Colombia para crear un modelo más ágil. 
                  <br/><br/>
                  La promesa fue clara: ella se dedica 100% a la abogacía de alto nivel, sin perder tiempo supervisando juniors. 
                  La IA se encarga de la operatividad y yo me encargo de que los clientes lleguen solos.
              </p>
          </div>
      </section>

      {/* Evidence 4: Human Satisfaction */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-white/5">
          <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold text-white mb-12">Y los humanos también nos aman</h2>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                  <div className="w-full max-w-md">
                      <EvidenceFrame 
                        title="google-maps-reviews.png" 
                        src={IMAGES.googleReviews} 
                        caption="Perfil de Google Business: 4.8 Estrellas con automatización total."
                        onExpand={openLightbox}
                      />
                  </div>
                  <div className="text-left max-w-md">
                      <div className="flex gap-1 mb-4">
                          {[1,2,3,4,5].map(i => <Award key={i} className="text-yellow-500 fill-yellow-500" size={24} />)}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">Calidad Humana, Ejecución Artificial</h3>
                      <p className="text-gray-400 leading-relaxed">
                          La IA se encarga de la burocracia, los documentos y el seguimiento. Eso nos permite enfocarnos en la estrategia del cliente. 
                          <br/><br/>
                          Resultado: <strong>42 Reseñas positivas</strong> en el primer año.
                      </p>
                  </div>
              </div>
          </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">¿Quieres replicar este modelo?</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Tengo la hoja de ruta exacta. Las herramientas, los prompts y la estrategia AIO.
          </p>
          <a 
            href="https://wa.me/34655328878?text=Hola%20Alejo%2C%20vi%20el%20caso%20de%20Colombian%20Passport%20y%20quiero%20aplicar%20AIO%20en%20mi%20negocio." 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-cyan-500 text-slate-950 px-10 py-5 rounded-full font-bold text-xl hover:bg-cyan-400 transition-all hover:scale-105 shadow-[0_0_30px_rgba(34,211,238,0.3)]"
          >
              Quiero mi propio Ecosistema <ArrowRight size={24} />
          </a>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-600 text-sm border-t border-white/5">
          <p>© 2026 ALEJO MORENO.ai | Case Study Series</p>
      </footer>

    </div>
  );
}
