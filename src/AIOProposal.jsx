import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  Lock, 
  Zap, 
  Calendar, 
  TrendingUp,
  BrainCircuit,
  ArrowRight,
  ShieldCheck,
  Infinity,
  Database,
  LayoutGrid,
  Bot,
  X,
  Send
} from 'lucide-react';

const Logo = () => (
  <div className="flex items-center gap-2 group cursor-pointer">
    <div className="relative w-10 h-10 flex items-center justify-center">
      <svg viewBox="0 0 100 100" className="w-full h-full text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">
        <path d="M50 10 L85 90 L70 90 L50 40 L30 90 L15 90 Z" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="50" cy="15" r="4" fill="currentColor" />
      </svg>
    </div>
    <div className="flex flex-col">
      <span className="text-xl font-bold tracking-tight text-white leading-none">ALEJO<span className="text-gray-400">MORENO</span><span className="text-cyan-400">.ai</span></span>
      <span className="text-[0.6rem] tracking-[0.2em] text-cyan-400/80 uppercase">Propuesta AIO</span>
    </div>
  </div>
);

const PhaseCard = ({ number, title, duration, description, items }) => (
  <div className="relative pl-8 md:pl-0 border-l-2 border-cyan-500/20 md:border-none pb-12 last:pb-0">
    <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-slate-900 border-2 border-cyan-500 rounded-full z-10 shadow-[0_0_15px_rgba(34,211,238,0.4)]">
        <div className="w-full h-full flex items-center justify-center text-cyan-400 font-bold text-xs">{number}</div>
    </div>
    <div className="md:w-1/2 md:pr-12 md:text-right md:ml-auto relative group">
       {/* Mobile Dot */}
       <div className="md:hidden absolute top-0 -left-[37px] w-6 h-6 bg-slate-900 border-2 border-cyan-500 rounded-full z-10 flex items-center justify-center text-cyan-400 font-bold text-[10px]">{number}</div>
       
       <div className={`p-6 rounded-2xl bg-slate-900 border border-white/5 group-hover:border-cyan-500/30 transition-all duration-300 ${number % 2 === 0 ? 'md:mr-[calc(100%+3rem)] md:text-left' : ''}`}>
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between mb-4">
             <h3 className="text-xl font-bold text-white">{title}</h3>
             <span className="px-3 py-1 rounded-full bg-cyan-950/50 text-cyan-400 text-xs font-bold border border-cyan-500/20 flex items-center gap-1">
               <Calendar size={12} /> {duration}
             </span>
          </div>
          <p className="text-gray-400 text-sm mb-4 leading-relaxed">{description}</p>
          <ul className={`space-y-2 ${number % 2 === 0 ? '' : 'md:items-end'} flex flex-col`}>
            {items.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    {number % 2 !== 0 && <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-cyan-500"></span>}
                    <span className={`${number % 2 === 0 ? 'order-2' : 'order-1'}`}>{item}</span>
                    {(number % 2 === 0 || window.innerWidth < 768) && <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 order-1 md:order-1"></span>}
                </li>
            ))}
          </ul>
       </div>
    </div>
  </div>
);

// Componente del Formulario Modal
const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    startDate: ''
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construimos el mensaje formateado para WhatsApp
    const message = `Hola Alejo, he leído la propuesta AIO y acepto los compromisos. Quiero iniciar el proceso.
    
📝 *Datos del Proyecto:*
* Nombre: ${formData.name}
* Empresa: ${formData.company}
* Correo Corporativo: ${formData.email}
* Fecha deseada de inicio: ${formData.startDate}

Quedo a la espera de tus instrucciones.`;

    const whatsappUrl = `https://wa.me/34655328878?text=${encodeURIComponent(message)}`;
    
    // Abrimos WhatsApp en una nueva pestaña
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-cyan-500/30 rounded-2xl w-full max-w-md relative shadow-[0_0_50px_rgba(34,211,238,0.1)] overflow-hidden">
        
        {/* Decoración de fondo */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
        >
          <X size={24} />
        </button>

        <div className="p-8">
          <h3 className="text-2xl font-bold text-white mb-2">Formalizar Interés</h3>
          <p className="text-sm text-gray-400 mb-6">Completa tus datos para enviarme la solicitud oficial por WhatsApp.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">Tu Nombre</label>
              <input 
                type="text" 
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-gray-600"
                placeholder="Ej. Juan Pérez"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">Nombre de la Empresa</label>
              <input 
                type="text" 
                name="company"
                required
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-gray-600"
                placeholder="Ej. Tech Solutions SL"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">Correo Corporativo</label>
              <input 
                type="email" 
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-gray-600"
                placeholder="juan@empresa.com"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">Fecha Deseada de Inicio</label>
              <input 
                type="date" 
                name="startDate"
                required
                value={formData.startDate}
                onChange={handleChange}
                className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all [color-scheme:dark]"
              />
            </div>

            <button 
              type="submit"
              className="w-full mt-6 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] flex items-center justify-center gap-2 group"
            >
              Enviar Solicitud <Send size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default function AIOProposal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Nav */}
      <nav className="w-full py-6 border-b border-white/5 bg-slate-950/50 backdrop-blur-md fixed z-50">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Logo />
          <a href="#pricing" className="text-sm font-bold text-white hover:text-cyan-400 transition-colors">Ver Inversión</a>
        </div>
      </nav>

      {/* Hero */}
      <header className="pt-40 pb-20 container mx-auto px-6 text-center relative">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full -z-10"></div>
        
        <div className="inline-block px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-400 text-sm font-bold tracking-widest uppercase mb-6 animate-fade-in-up">
            Servicio High-Ticket · Plazas Limitadas
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Intervención Estratégica <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">AIO & Ecosistema Digital</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
            No es solo consultoría. Es la construcción, despliegue y automatización de todo tu negocio digital. 
            <strong className="text-white block mt-4">En 12 meses, te entrego las llaves de un imperio autónomo y me voy.</strong>
        </p>
      </header>

      {/* The Promise (Autonomous) */}
      <section className="py-16 border-y border-white/5 bg-slate-900/30">
          <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-slate-900 to-slate-800 p-8 rounded-2xl border border-cyan-500/20 shadow-2xl">
                  <div className="w-16 h-16 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-400 flex-shrink-0">
                      <BrainCircuit size={32} />
                  </div>
                  <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-white mb-2">Objetivo Final: Tu Autonomía Total</h3>
                      <p className="text-gray-400">
                          Al finalizar el mes 12, mi objetivo es ser innecesario. Te entregaré un ecosistema optimizado con IA, flujos de trabajo virtuosos y una 
                          <span className="text-cyan-400 font-bold"> "Gema Clon"</span> entrenada con mi cerebro estratégico para que tu equipo tenga un consultor 24/7, incluso cuando yo ya no esté.
                      </p>
                  </div>
              </div>
          </div>
      </section>

      {/* Roadmap / Timeline */}
      <section className="py-24 container mx-auto px-6 relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">Hoja de Ruta: 12 Meses</h2>
          
          {/* Vertical Line */}
          <div className="hidden md:block absolute top-40 left-1/2 w-0.5 h-[80%] bg-gradient-to-b from-cyan-500/50 to-transparent -translate-x-1/2 z-0"></div>

          <div className="space-y-12 max-w-4xl mx-auto">
              <PhaseCard 
                number={1}
                title="Fase 1: Estrategia Pura"
                duration="Mes 1 - 2"
                description="Auditoría profunda y diseño del futuro. No movemos un dedo sin un plan maestro."
                items={[
                    "Construcción del Plan Estratégico (1 año)",
                    "Definición de OKRs y KPIs",
                    "Arquitectura del Ecosistema",
                    "Selección de Nichos y Tácticas AIO"
                ]}
              />
              <PhaseCard 
                number={2}
                title="Fase 2: Construcción Masiva"
                duration="Mes 3 - 4"
                description="Ejecución táctica intensiva. Construyo el 100% de los activos necesarios. Sin límites."
                items={[
                    "Despliegue de Webs, Apps y Dominios",
                    "Configuración de Gems y Flows",
                    "Gestión de proyectos con metodología OKR",
                    "Implementación de Dashboards"
                ]}
              />
              <PhaseCard 
                number={3}
                title="Fase 3: Optimización & Vuelo"
                duration="Mes 5 - 12"
                description="Acompañamiento, medición y transferencia de conocimiento. Aseguramos que el motor funcione solo."
                items={[
                    "Lectura conjunta de Dashboards",
                    "Feedback de negocio y consultoría",
                    "Formación intensiva al equipo",
                    "Ajuste fino de algoritmos AIO"
                ]}
              />
          </div>
      </section>

      {/* Deliverables Grid */}
      <section className="py-24 bg-slate-900 border-y border-white/5">
          <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-white text-center mb-16">Entregables Tangibles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                  {[
                      { icon: LayoutGrid, title: "Plan Estratégico", desc: "La biblia de tu negocio por 1 año. Objetivos, tácticas y métricas." },
                      { icon: Infinity, title: "Ecosistema Ilimitado", desc: "Dominios, Webs y Apps. Creamos tantas como la estrategia requiera. Sin coste extra." },
                      { icon: Bot, title: "Gems & Flows IA", desc: "Automatizaciones y asistentes personalizados para el trabajo diario." },
                      { icon: Database, title: "Dashboard Central", desc: "Medición en tiempo real. Datos unificados, verdad absoluta." },
                      { icon: TrendingUp, title: "Posicionamiento AIO", desc: "Dominio en Google, ChatGPT y Gemini simultáneamente." },
                      { icon: BrainCircuit, title: "Tu Propio 'Alejo'", desc: "Entrega de una IA entrenada con mi metodología para consultas futuras." },
                  ].map((item, i) => (
                      <div key={i} className="p-6 bg-slate-950 border border-white/5 rounded-xl hover:border-cyan-500/30 transition-all group">
                          <item.icon className="text-cyan-500 mb-4 group-hover:scale-110 transition-transform" size={32} />
                          <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                          <p className="text-gray-400 text-sm">{item.desc}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* The Manifesto (Commitments) */}
      <section className="py-24 container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-4">El Manifiesto de Colaboración</h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">Para que esto funcione, operamos bajo reglas estrictas. No soy un proveedor, soy un socio estratégico temporal.</p>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              
              {/* Alejo's Commitments */}
              <div className="bg-slate-900/50 p-8 rounded-2xl border border-cyan-500/20 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500"></div>
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                      <ShieldCheck className="text-cyan-400" /> Mis Compromisos
                  </h3>
                  <ul className="space-y-4">
                      {[
                          "Producción ILIMITADA de activos (webs, apps, contenido) según estrategia.",
                          "Profundidad total en el conocimiento de tu industria.",
                          "Obsesión por cumplir el 100% de los OKRs.",
                          "Solo pido el tiempo estrictamente necesario.",
                          "Garantía de Autonomía: Te entrego el sistema funcionando al mes 12."
                      ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                              <CheckCircle2 className="text-cyan-500 shrink-0 mt-0.5" size={16} />
                              <span>{item}</span>
                          </li>
                      ))}
                  </ul>
              </div>

              {/* Client's Commitments */}
              <div className="bg-slate-900/50 p-8 rounded-2xl border border-red-500/20 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                      <Lock className="text-red-400" /> Tus Compromisos (No Negociables)
                  </h3>
                  <ul className="space-y-4">
                      {[
                          "Compromiso de hierro: 12 meses sin abandono.",
                          "Confianza Radical: El plan estratégico NO se cambia.",
                          "Estabilidad: Sin cambios bruscos en marca/precios durante el proceso.",
                          "Cero Micro-management: No pedir cambios estéticos en webs/apps.",
                          "Llaves del Reino: Acceso total (Hosting, Ads, CRM, Data).",
                          "Mentalidad Remote-First: Cero reuniones presenciales.",
                          "Paciencia Estratégica: Los KPIs llegan cuando el plan lo indica."
                      ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                              <div className="w-4 h-4 rounded-full border border-red-500/50 flex items-center justify-center shrink-0 mt-0.5">
                                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                              </div>
                              <span>{item}</span>
                          </li>
                      ))}
                  </ul>
              </div>

          </div>
      </section>

      {/* Pricing & CTA */}
      <section id="pricing" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative border-t border-white/5">
          <div className="container mx-auto px-6 text-center">
              <div className="inline-block p-1 rounded-3xl bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 mb-12">
                  <div className="bg-slate-950 rounded-[22px] px-12 py-16">
                      <h3 className="text-gray-400 uppercase tracking-widest font-bold text-sm mb-4">Inversión Mensual</h3>
                      <div className="flex items-center justify-center gap-2 mb-6">
                          <span className="text-6xl font-bold text-white">3.000€</span>
                          <span className="text-xl text-gray-500 self-end mb-2">/mes</span>
                      </div>
                      <p className="text-gray-400 mb-8 max-w-md mx-auto">
                          Contrato anual cerrado. Facturación mensual.<br/>
                          Incluye todos los costes de desarrollo y automatización.
                      </p>
                      
                      {/* BOTÓN ACTUALIZADO: ABRE EL MODAL */}
                      <button 
                        onClick={() => setIsModalOpen(true)}
                        className="inline-flex items-center gap-3 bg-white text-slate-950 px-8 py-4 rounded-full font-bold text-lg hover:bg-cyan-50 transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.2)] cursor-pointer"
                      >
                          Acepto el Reto. Iniciemos. <ArrowRight size={20} />
                      </button>
                      
                      <p className="mt-6 text-xs text-gray-600">
                          *Al hacer clic confirmas haber leído y aceptado los compromisos del manifiesto.
                      </p>
                  </div>
              </div>
          </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-600 text-sm border-t border-white/5">
          <p>© 2026 ALEJO MORENO.ai | AIO Strategic Proposal</p>
      </footer>

    </div>
  );
}
