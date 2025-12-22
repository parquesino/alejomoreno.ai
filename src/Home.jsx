import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Añadido Link
import { 
  ArrowRight, 
  Menu, 
  X, 
  Target, 
  Rocket, 
  Cpu, 
  CheckCircle2, 
  BarChart3, 
  TrendingUp, 
  BrainCircuit, 
  Linkedin, 
  Mail, 
  Search, 
  Bot, 
  Globe, 
  Filter, 
  DollarSign, 
  Shield, 
  Network
} from 'lucide-react';

const PROFILE_IMAGE_URL = "https://raw.githubusercontent.com/parquesino/alejomoreno.ai/main/Copia%20de%20foto%20profesional%20alejo%20fondo%20gris.png"; 

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
      <span className="text-[0.6rem] tracking-[0.2em] text-cyan-400/80 uppercase">AI Growth Architect</span>
    </div>
  </Link>
);

const ServiceCard = ({ icon: Icon, title, subtitle, idealFor, description, route }) => {
  const navigate = useNavigate();

  return (
    <div 
      className="group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-cyan-500/50 transition-all duration-500 cursor-pointer" 
      onClick={() => {
        window.scrollTo(0,0);
        navigate(route);
      }}
    >
      <div className="absolute inset-0 bg-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative h-full bg-slate-900/90 backdrop-blur-sm p-8 rounded-xl border border-white/10 group-hover:border-cyan-500/30 flex flex-col">
        <div className="w-14 h-14 bg-slate-800 rounded-lg flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
          <Icon size={32} />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-cyan-400 text-sm font-medium mb-4 uppercase tracking-wider">{idealFor}</p>
        <p className="text-gray-400 mb-8 flex-grow leading-relaxed">
          {description}
        </p>
        <div className="flex items-center gap-2 text-white font-semibold group-hover:text-cyan-400 transition-colors mt-auto">
          Ver Propuesta Detallada <ArrowRight size={18} />
        </div>
      </div>
    </div>
  );
};

const FunnelStep = ({ icon: Icon, label, value, sub, width, isLast }) => (
  <div className="relative flex items-center mb-4 group">
    {!isLast && (
      <div className="absolute left-[1.65rem] top-12 h-8 w-0.5 bg-slate-700 group-hover:bg-cyan-500/50 transition-colors z-0"></div>
    )}
    <div className={`w-14 h-14 rounded-xl flex items-center justify-center z-10 border border-white/5 transition-all duration-300 ${isLast ? 'bg-cyan-500 text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.4)]' : 'bg-slate-800 text-gray-400 group-hover:text-cyan-400 group-hover:border-cyan-500/30'}`}>
      <Icon size={24} />
    </div>
    <div className="ml-6 flex-grow">
      <div className="flex items-center justify-between mb-1">
        <span className={`font-bold text-lg ${isLast ? 'text-cyan-400' : 'text-white'}`}>{value}</span>
        <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">{label}</span>
      </div>
      <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
        <div className={`h-full rounded-full transition-all duration-1000 ${isLast ? 'bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse' : 'bg-slate-600 group-hover:bg-cyan-500/50'}`} style={{ width: width }}></div>
      </div>
      <p className="text-xs text-gray-500 mt-1">{sub}</p>
    </div>
  </div>
);

const SatelliteNode = ({ url, positionClass, delay }) => (
  <div className={`absolute ${positionClass} z-20 transition-all duration-500 hover:scale-110 hover:z-30 hidden md:flex flex-col items-center`} style={{ animationDelay: `${delay}ms` }}>
    <div className="bg-slate-800/80 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 rounded-full px-3 py-1.5 shadow-lg flex items-center gap-2 cursor-default group">
      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></div>
      <span className="text-[10px] font-medium text-gray-400 group-hover:text-cyan-300 transition-colors whitespace-nowrap">{url}</span>
    </div>
    <div className="w-px h-8 bg-gradient-to-b from-cyan-500/20 to-transparent mt-1"></div>
  </div>
);

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToCaseStudy = () => {
    window.scrollTo(0,0);
    navigate('/caso-colombian-passport');
  };

  const companies = [
    { name: "ISPD", role: "Regional Director" },
    { name: "REBOLD", role: "Analysis Director" },
    { name: "ACCESO", role: "Director España" },
    { name: "ANTEVENIO", role: "Director Andina" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Logo />
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#problem" className="text-sm font-medium hover:text-cyan-400 transition-colors">La Nueva Era</a>
            <a href="#proof" className="text-sm font-medium hover:text-cyan-400 transition-colors">Evidencia Real</a>
            <a href="#services" className="text-sm font-medium hover:text-cyan-400 transition-colors">Servicios</a>
            <a href="#about" className="text-sm font-medium hover:text-cyan-400 transition-colors">Sobre Mí</a>
            <a 
              href="https://wa.me/34655328878?text=Hola%20Alejo%2C%20me%20gustar%C3%ADa%20agendar%20una%20Consultor%C3%ADa%20Estrat%C3%A9gica" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
            >
              Agendar Consultoría
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-950 pt-24 px-6 md:hidden">
          <div className="flex flex-col gap-6 text-xl">
            <a href="#problem" onClick={() => setIsMobileMenuOpen(false)}>La Nueva Era</a>
            <a href="#proof" onClick={() => setIsMobileMenuOpen(false)}>Evidencia Real</a>
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Servicios</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>Sobre Mí</a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 -z-10"></div>
        
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-xs font-medium tracking-wide uppercase text-cyan-400">Metodología Q1 2026</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-8 leading-tight">
            Google sigue siendo el Rey.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-600">Pero ya no gobierna solo.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 font-light">
            Ex-Directivo de grandes multinacionales en España y Colombia, te revela cómo unificar los dos mundos: <strong className="text-white">SEO para Google</strong> y <strong className="text-white">AIO para Gemini & ChatGPT</strong>.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href="https://wa.me/34655328878?text=Hola%20Alejo%2C%20quiero%20saber%20c%C3%B3mo%20dominar%20los%20dos%20mundos%20(Google%20%2B%20IA)%2C%20me%20interesa%20tu%20consultor%C3%ADa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] flex items-center justify-center gap-3"
            >
              Domina los dos mundos <ArrowRight size={20} />
            </a>
            <p className="text-sm text-gray-500">
              *Cupos limitados para Consultoría Estratégica
            </p>
          </div>
        </div>
      </header>

      {/* Authority Bar */}
      <div className="border-y border-white/5 bg-slate-900/30 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-8">
          <p className="text-center text-xs font-bold tracking-[0.2em] text-gray-500 mb-6 uppercase">
            Trayectoria directiva liderando estrategias en
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 grayscale opacity-60 hover:opacity-100 transition-opacity duration-500">
            {companies.map((company, index) => (
              <div key={index} className="flex flex-col items-center">
                <span className="text-xl md:text-2xl font-black text-white">{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <section id="problem" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                El SEO tradicional <br/>
                <span className="text-cyan-400">alimenta a la IA.</span><br/>
                Evoluciona al AIO.
              </h2>
              <div className="space-y-6 text-lg text-gray-300">
                <p>
                  Mi tesis es simple: <span className="text-white font-semibold">Si no existes en Google, eres invisible para la IA.</span>
                </p>
                <p>
                  Miles de millones de búsquedas siguen ocurriendo en Google. Es la fuente de datos primaria. Pero lo que ha cambiado drásticamente es la <strong>profundidad de la investigación</strong>.
                </p>
                <p>
                  Antes, explicar tu propuesta de valor compleja requería una venta consultiva humana. Hoy, el usuario se ahorra esa llamada porque <strong className="text-white">la IA hace el trabajo de consultor por ti</strong>... si sabes cómo hablarle.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-blue-600/10 blur-3xl rounded-full" />
              <div className="relative bg-slate-900 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-xl">
                <div className="text-center mb-8 border-b border-white/5 pb-4">
                  <span className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">El Nuevo Journey de Compra</span>
                </div>
                <div className="space-y-10 relative">
                  <div className="absolute left-[1.65rem] md:left-[2.15rem] top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-600 via-cyan-500 to-green-500 opacity-20"></div>
                  {/* Step 1 */}
                  <div className="relative pl-20 md:pl-24 group">
                    <div className="absolute left-0 top-0 w-14 h-14 md:w-16 md:h-16 bg-slate-800 border border-blue-500/30 rounded-2xl flex items-center justify-center text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)] group-hover:scale-110 transition-transform duration-300 z-10">
                      <Search size={28} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1 group-hover:text-blue-400 transition-colors">1. Captación Masiva (Google)</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        El usuario busca "soluciones empresariales". Google sigue siendo el rey del volumen. <span className="text-blue-300">Si rankeas aquí, los crawlers de la IA te encuentran.</span>
                      </p>
                    </div>
                  </div>
                  {/* Step 2 */}
                  <div className="relative pl-20 md:pl-24 group">
                    <div className="absolute left-0 top-0 w-14 h-14 md:w-16 md:h-16 bg-slate-800 border border-cyan-500/30 rounded-2xl flex items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.1)] group-hover:scale-110 transition-transform duration-300 z-10 bg-slate-900">
                      <BrainCircuit size={28} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1 group-hover:text-cyan-400 transition-colors">2. Investigación Profunda</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        El usuario pregunta: "¿Cuál es la mejor opción para mi caso específico?". <span className="text-cyan-300">La IA analiza tu contenido semántico</span> para entender tu autoridad.
                      </p>
                    </div>
                  </div>
                  {/* Step 3 */}
                  <div className="relative pl-20 md:pl-24 group">
                    <div className="absolute left-0 top-0 w-14 h-14 md:w-16 md:h-16 bg-slate-800 border border-green-500/30 rounded-2xl flex items-center justify-center text-green-400 shadow-[0_0_20px_rgba(34,197,94,0.1)] group-hover:scale-110 transition-transform duration-300 z-10 bg-slate-900">
                      <CheckCircle2 size={28} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1 group-hover:text-green-400 transition-colors">3. Venta Consultiva Automática</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                         <span className="text-green-300 font-medium">La IA vende por ti.</span> Entrega la respuesta sintetizada y persuasiva que cierra al cliente antes de que te contacte.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof/Case Study Section */}
      <section id="proof" className="py-24 bg-slate-900 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <span className="text-cyan-400 font-bold tracking-wider text-sm uppercase">Prueba de Concepto</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">No es teoría. Es mi realidad.</h2>
            <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
                En 2024 tenía una vida de directivo envidiable entre Madrid y Barcelona, trabajando para la mitad del Ibex35. Pero decidí cambiar ese éxito corporativo por una apuesta radical:
                <br className="hidden md:block" />
                <span className="text-white mt-4 block font-medium">
                  ¿Podría la IA darle a mi familia una vida libre y rentable en solo 12 meses?
                </span>
            </p>
            
            {/* LINK AL CASO DE ESTUDIO */}
            <div className="mt-8">
              <button 
                onClick={goToCaseStudy}
                className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-cyan-400 border border-cyan-500/30 px-6 py-3 rounded-full transition-all group cursor-pointer"
              >
                <Search size={18} /> Ver Análisis Detallado del Caso <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: The Funnel */}
            <div>
               <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                    <Filter className="text-cyan-400" /> El Embudo de la Verdad
                  </h3>
                  <span className="bg-slate-800 text-gray-400 text-xs font-bold px-3 py-1 rounded border border-white/10">Noviembre 2025</span>
               </div>
               
               <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/5 backdrop-blur-sm">
                 <FunnelStep icon={Search} label="Impresiones Google" value="65,000" sub="Captación Orgánica" width="100%" />
                 <FunnelStep icon={Bot} label="Consultas IA" value="9,000" sub="Búsqueda Profunda" width="60%" />
                 <FunnelStep icon={Globe} label="Tráfico Cualificado" value="337" sub="Aceptaron Cookies" width="30%" />
                 <FunnelStep icon={Target} label="Pipeline Generado" value="$23,000" sub="Oportunidades de Venta" width="45%" />
                 <FunnelStep icon={DollarSign} label="Ventas Cerradas" value="$10,000" sub="Facturación Mensual" width="25%" isLast={true} />
               </div>
            </div>

            {/* Right Column: Digital Asset Ecosystem */}
            <div className="relative h-[600px] md:h-[600px] flex items-center justify-center w-full cursor-pointer" onClick={goToCaseStudy}>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-[280px] h-[280px] md:w-[350px] md:h-[350px] border border-cyan-500/10 rounded-full"></div>
                    <div className="absolute w-[450px] h-[450px] md:w-[550px] md:h-[550px] border border-cyan-500/5 rounded-full border-dashed"></div>
                </div>

                <SatelliteNode url="colombianomadvisa.com" positionClass="-top-4 md:top-8 left-1/2 -translate-x-1/2" delay="0" />
                <SatelliteNode url="visanomadadigitalcolombia.com" positionClass="top-20 md:top-24 -right-4 md:right-4" delay="1000" />
                <SatelliteNode url="marriagevisacolombia.com" positionClass="top-1/2 -translate-y-1/2 -right-12 md:-right-6" delay="2000" />
                <SatelliteNode url="visaconyugecolombia.com" positionClass="bottom-20 md:bottom-24 -right-4 md:right-4" delay="3000" />
                <SatelliteNode url="rentistavisacolombia.com" positionClass="-bottom-4 md:bottom-8 left-1/2 -translate-x-1/2" delay="4000" />
                <SatelliteNode url="abogadosdemigracion.com" positionClass="bottom-20 md:bottom-24 -left-4 md:left-4" delay="5000" />
                <SatelliteNode url="colombiaretirementvisa.com.co" positionClass="top-20 md:top-24 -left-12 md:-left-8" delay="6000" />

                <div className="relative z-10 w-full max-w-[320px] flex flex-col gap-4">
                    <div className="text-center mb-2">
                         <span className="bg-cyan-900/40 text-cyan-300 px-4 py-1.5 rounded-full text-xs font-bold border border-cyan-500/30 uppercase tracking-widest shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                            <Network size={12} className="inline mr-2 mb-0.5" /> Nodos de Autoridad
                         </span>
                    </div>
                    <div className="group bg-slate-900/90 backdrop-blur-md rounded-xl border border-cyan-500/40 p-5 shadow-[0_0_40px_rgba(34,211,238,0.1)] flex items-center gap-4 hover:scale-105 transition-transform duration-300 relative overflow-hidden ring-1 ring-cyan-500/20">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="w-12 h-12 bg-cyan-950 rounded-lg flex items-center justify-center text-cyan-400 flex-shrink-0 border border-cyan-500/20">
                            <Globe size={24} />
                        </div>
                        <div className="overflow-hidden">
                            <h4 className="text-white font-bold text-base truncate">colombianpassport.com</h4>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                                <p className="text-[10px] text-gray-400 uppercase tracking-wider">Tráfico Internacional</p>
                            </div>
                        </div>
                    </div>
                    <div className="group bg-slate-900/90 backdrop-blur-md rounded-xl border border-blue-500/40 p-5 shadow-[0_0_40px_rgba(59,130,246,0.1)] flex items-center gap-4 hover:scale-105 transition-transform duration-300 relative overflow-hidden ring-1 ring-blue-500/20">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="w-12 h-12 bg-blue-950 rounded-lg flex items-center justify-center text-blue-400 flex-shrink-0 border border-blue-500/20">
                            <Shield size={24} />
                        </div>
                        <div className="overflow-hidden">
                            <h4 className="text-white font-bold text-base truncate">abogadosdemigracion.com.co</h4>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                                <p className="text-[10px] text-gray-400 uppercase tracking-wider">Autoridad Legal</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section (UPDATED LINKS) */}
      <section id="services" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">La Oferta High-Ticket</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              No vendo paquetes. Vendo intervenciones estratégicas para dominar el 2026.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={Target}
              title="Consultoría AIO"
              subtitle="Dual Search Strategy"
              idealFor="Para Marcas Líderes"
              description="Auditoría e implementación del protocolo GEO. Fortalecemos tu SEO técnico para Google y estructuramos tus datos semánticos para ser la única respuesta en Gemini."
              route="/propuesta-aio"
            />
            <ServiceCard 
              icon={Rocket}
              title='Mentoría "Exit"'
              subtitle="Business Builder"
              idealFor="Para Profesionales Senior"
              description="Te enseño a construir y gestionar negocios de nicho (como mi ecosistema real) potenciados con IA. Aprenderás a dominar el tráfico posicionando tus activos en Google, ChatGPT y Gemini."
              route="/mentoria-exit"
            />
            <ServiceCard 
              icon={BrainCircuit}
              title="Fractional AI Director"
              subtitle="Optimización Radical"
              idealFor="Para Agencias Boutique"
              description="Transformo tu estructura de costes. Automatizo la ejecución técnica para que tu talento senior se enfoque en estrategia, duplicando tu capacidad de entrega sin aumentar la nómina."
              route="/fractional-ai"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-900 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 relative group">
               <div className="absolute inset-0 bg-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
               <div className="relative bg-slate-800 aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center">
                    <img 
                        src={PROFILE_IMAGE_URL} 
                        alt="Alejo Moreno - AI Growth Architect"
                        className="w-full h-full object-cover object-top grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out" 
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent h-1/2 pointer-events-none"></div>
               </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <div className="inline-block px-3 py-1 bg-cyan-900/30 text-cyan-400 rounded-full text-xs font-bold tracking-wider uppercase mb-6">
                El Guía
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Soy Alejo Moreno.</h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Durante 13 años fui el directivo de importantes empresas de marketing y comunicación. Conozco la burocracia, los costes ocultos, los cuellos de botella y todo aquello que ahora la IA debería acelerar y mejorar.
                </p>
                <p>
                  Decidí romper con ese modelo para construir mis propios activos.
                </p>
                <p>
                  Hoy no te hablo desde la teoría, sino como dueño de un ecosistema de negocios digitales que facturan con autonomía. Opero en la intersección entre la <strong className="text-white">estrategia de negocio real</strong> y la <strong className="text-white">ejecución táctica con IA</strong>. Ayudo a líderes a construir imperios ligeros, sin nóminas infladas: solo estrategia pura y ejecución sintética.
                </p>
              </div>
              <div className="mt-10 pt-10 border-t border-white/10">
                <h4 className="font-bold text-white text-xl font-serif italic">Alejo Moreno</h4>
                <p className="text-cyan-400 text-sm tracking-widest uppercase mt-1">AI Growth Architect</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-cyan-500/5 blur-3xl -z-10" />
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">¿Listo para dominar el nuevo territorio?</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Como solopreneur, mi capacidad es limitada. Solo trabajo con <span className="text-white font-bold underline decoration-cyan-500 underline-offset-4">3 clientes estratégicos</span> a la vez para garantizar resultados.
          </p>
          <a 
            href="https://wa.me/34655328878?text=Hola%20Alejo%2C%20quiero%20solicitar%20una%20de%20las%203%20plazas%20estrat%C3%A9gicas%20disponibles" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block w-full md:w-auto bg-white text-slate-950 px-10 py-5 rounded-full font-bold text-xl transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105 hover:bg-cyan-50"
          >
            Solicitar una de las 3 plazas disponibles
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-white/5 pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <Logo />
            <div className="flex gap-6">
              <a href="https://www.linkedin.com/in/alejomoreno/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#0077b5] transition-all">
                <Linkedin size={20} />
              </a>
              <a href="https://wa.me/34655328878" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#25D366] transition-all">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.304-5.235c0-5.443 4.429-9.876 9.88-9.876 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.444-4.432 9.877-9.883 9.877"/></svg>
              </a>
              <a href="mailto:alejo@alejomoreno.ai" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-cyan-600 transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <p>© 2026 ALEJO MORENO.ai | Todos los derechos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-gray-400">Privacidad</a>
              <a href="#" className="hover:text-gray-400">Términos</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
