import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, Lock, BarChart3, Calendar, Users, Settings, ArrowRight, 
  ShieldCheck, FileText, Cpu, Bot, X, Send, Workflow
} from 'lucide-react';

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
      <span className="text-[0.6rem] tracking-[0.2em] text-cyan-400/80 uppercase">Fractional AI Director</span>
    </div>
  </Link>
);

const PhaseCard = ({ number, title, duration, description, items }) => {
  const isEven = number % 2 === 0;
  
  return (
    <div className="relative pl-8 md:pl-0 border-l-2 border-cyan-500/20 md:border-none pb-12 last:pb-0">
      <div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-slate-900 border-2 border-cyan-500 rounded-full z-10 shadow-[0_0_15px_rgba(34,211,238,0.4)] items-center justify-center text-cyan-400 font-bold text-xs">
        {number}
      </div>

      <div className={`md:w-1/2 relative group transition-all duration-300 ${isEven ? 'md:mr-auto md:pr-12 md:text-right' : 'md:ml-auto md:pl-12 md:text-left'}`}>
         
         <div className="md:hidden absolute top-0 -left-[37px] w-6 h-6 bg-slate-900 border-2 border-cyan-500 rounded-full z-10 flex items-center justify-center text-cyan-400 font-bold text-[10px]">
            {number}
         </div>
         
         <div className="p-6 rounded-2xl bg-slate-900 border border-white/5 group-hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
            <div className={`flex flex-col gap-4 mb-4 ${isEven ? 'md:flex-row-reverse items-center justify-between' : 'md:flex-row items-center justify-between'}`}>
               <h3 className="text-xl font-bold text-white">{title}</h3>
               <span className="px-3 py-1 rounded-full bg-cyan-950/50 text-cyan-400 text-xs font-bold border border-cyan-500/20 flex items-center gap-1 w-fit">
                 <Calendar size={12} /> {duration}
               </span>
            </div>
            
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">{description}</p>
            
            <ul className={`space-y-2 flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'}`}>
              {items.map((item, i) => (
                  <li key={i} className={`flex items-start gap-2 text-sm text-gray-300 ${isEven ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0 mt-1.5"></span>
                      <span>{item}</span>
                  </li>
              ))}
            </ul>
         </div>
      </div>
    </div>
  );
};

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', agencyName: '', role: '', teamSize: '', email: '' });
  if (!isOpen) return null;
  const handleChange = (e) => { const { name, value } = e.target; setFormData(prev => ({ ...prev, [name]: value })); };
  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hola Alejo, represento a una agencia y me interesa la intervención de Fractional AI Director. Acepto los compromisos.\n\n🏢 *Datos de la Agencia:*\n* Nombre: ${formData.name}\n* Agencia: ${formData.agencyName}\n* Rol: ${formData.role}\n* Equipo: ${formData.teamSize} personas\n* Correo: ${formData.email}\n\nQuedo a la espera para agendar la evaluación inicial.`;
    window.open(`https://wa.me/34655328878?text=${encodeURIComponent(message)}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-cyan-500/30 rounded-2xl w-full max-w-md relative shadow-[0_0_50px_rgba(34,211,238,0.1)] overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"><X size={24} /></button>
        <div className="p-8">
          <h3 className="text-2xl font-bold text-white mb-2">Transformación de Agencia</h3>
          <p className="text-sm text-gray-400 mb-6">Intervención operativa profunda. Déjanos tus datos corporativos.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div><label className="block text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">Tu Nombre</label><input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-gray-600" placeholder="Ej. Carlos Ruiz" /></div>
            <div><label className="block text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">Nombre de la Agencia</label><input type="text" name="agencyName" required value={formData.agencyName} onChange={handleChange} className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-gray-600" placeholder="Ej. Creativos 360" /></div>
            <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">Tu Rol</label><input type="text" name="role" required value={formData.role} onChange={handleChange} className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-gray-600" placeholder="CEO / COO" /></div>
                <div><label className="block text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">Tamaño Equipo</label><input type="text" name="teamSize" required value={formData.teamSize} onChange={handleChange} className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-gray-600" placeholder="Ej. 15" /></div>
            </div>
            <div><label className="block text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">Correo Corporativo</label><input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-gray-600" placeholder="carlos@agencia.com" /></div>
            <button type="submit" className="w-full mt-6 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] flex items-center justify-center gap-2 group">Solicitar Intervención <Send size={18} className="group-hover:translate-x-1 transition-transform" /></button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default function AgencyProposal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <nav className="w-full py-6 border-b border-white/5 bg-slate-950/50 backdrop-blur-md fixed z-50">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Logo />
          <a href="#pricing" className="text-sm font-bold text-white hover:text-cyan-400 transition-colors">Ver Inversión</a>
        </div>
      </nav>
      {/* AUMENTADO DE pt-40 A pt-48 PARA EVITAR EL SOLAPAMIENTO */}
      <header className="pt-48 pb-20 container mx-auto px-6 text-center relative">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full -z-10"></div>
        <div className="inline-block px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-400 text-sm font-bold tracking-widest uppercase mb-6 animate-fade-in-up">
            Fractional AI Director · Para Agencias
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Reingeniería Operativa<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">con Inteligencia Artificial</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
            Entro en tu agencia, audito tus procesos y reemplazo la "grasa" operativa por flujos de trabajo automatizados. 
            <strong className="text-white block mt-4">Aumenta tu margen, libera a tu talento senior y escala sin aumentar la nómina.</strong>
        </p>
      </header>
      <section className="py-16 border-y border-white/5 bg-slate-900/30">
          <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-slate-900 to-slate-800 p-8 rounded-2xl border border-cyan-500/20 shadow-2xl">
                  <div className="w-16 h-16 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-400 flex-shrink-0"><Settings size={32} /></div>
                  <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-white mb-2">El Problema de las Agencias: La No-Escalabilidad</h3>
                      <p className="text-gray-400">Vendes horas de personas. Para facturar más, necesitas más gente, y tu margen se mantiene plano. Mi intervención rompe esa ecuación: implementamos <span className="text-cyan-400 font-bold">Activos de IA y Automatización</span> que ejecutan el trabajo repetitivo, permitiendo que tu agencia escale beneficios, no costes.</p>
                  </div>
              </div>
          </div>
      </section>
      <section className="py-24 container mx-auto px-6 relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">Intervención de 12 Meses</h2>
          <div className="hidden md:block absolute top-40 left-1/2 w-0.5 h-[80%] bg-gradient-to-b from-cyan-500/50 to-transparent -translate-x-1/2 z-0"></div>
          <div className="space-y-12 max-w-4xl mx-auto">
              <PhaseCard number={1} title="Fase 1: Diagnóstico 'As-Is'" duration="Mes 1 - 2" description="Radiografía brutal de la realidad. Analizamos la rentabilidad real de cada servicio y la eficiencia de los procesos actuales." items={["Auditoría de offering, precios y rentabilidad real", "Mapa de procesos: Liderazgo, equipos y tecnología", "Identificación de cuellos de botella y costes ocultos", "Análisis de la pila tecnológica actual"]} />
              <PhaseCard number={2} title="Fase 2: Plan Estratégico & Cultura" duration="Mes 3 - 5" description="Diseño del futuro modelo operativo. Definimos cómo será la agencia impulsada por IA y alineamos a todos los stakeholders." items={["Construcción del Plan Estratégico a 1 año", "Diseño de nuevas herramientas propietarias", "Socialización del cambio: Accionistas, Dirección y Equipo", "Gestión del cambio cultural hacia la IA"]} />
              <PhaseCard number={3} title="Fase 3: Construcción & Despliegue" duration="Mes 6 - 8" description="La fábrica de software. Construyo e implemento las herramientas de IA y automatización que sustituirán los procesos manuales." items={["Desarrollo del 100% de herramientas de IA Generativa", "Creación de nuevos Manuales y Workflows automatizados", "Redefinición de Job Descriptions para el nuevo modelo", "Gestión de proyectos con metodología OKR"]} />
              <PhaseCard number={4} title="Fase 4: Gestión & Transferencia" duration="Mes 9 - 12" description="Acompañamiento directivo para asegurar la adopción. No me voy hasta que el equipo vuele solo con las nuevas herramientas." items={["Feedback de negocio y consultoría directiva", "Lectura conjunta de dashboards de rentabilidad", "Formación intensiva en gestión de las herramientas", "Entrega de la 'Gema Clon' estratégica"]} />
          </div>
      </section>
      <section className="py-24 bg-slate-900 border-y border-white/5">
          <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-white text-center mb-16">Infraestructura Entregada</h2>
              <div className="grid md:grid-cols-3 gap-6">
                  {[{ icon: Cpu, title: "Herramientas IA Propias", desc: "Desarrollo del 100% del software de IA necesario para la operación." }, { icon: FileText, title: "Manuales Operativos", desc: "Documentación y workflows actualizados para el trabajo con IA." }, { icon: Users, title: "Nuevos Roles (JD)", desc: "Redefinición de puestos de trabajo adaptados a la nueva realidad." }, { icon: Workflow, title: "Automatización Total", desc: "Flows que conectan CRM, Project Management y entregables." }, { icon: Bot, title: "Gemas Corporativas", desc: "Asistentes de IA entrenados con el know-how de la agencia." }, { icon: BarChart3, title: "Dashboard de Medición", desc: "Visualización en tiempo real de los KPIs definidos en el Plan Estratégico." }].map((item, i) => (
                      <div key={i} className="p-6 bg-slate-950 border border-white/5 rounded-xl hover:border-cyan-500/30 transition-all group"><item.icon className="text-cyan-500 mb-4 group-hover:scale-110 transition-transform" size={32} /><h4 className="text-lg font-bold text-white mb-2">{item.title}</h4><p className="text-gray-400 text-sm">{item.desc}</p></div>
                  ))}
              </div>
          </div>
      </section>
      <section className="py-24 container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Acuerdo de Transformación</h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">Cambiamos las ruedas del coche en marcha. Requiere precisión y compromiso absoluto de la dirección.</p>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="bg-slate-900/50 p-8 rounded-2xl border border-cyan-500/20 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500"></div><h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2"><ShieldCheck className="text-cyan-400" /> Mis Compromisos</h3>
                  <ul className="space-y-4">{["Producción ILIMITADA de herramientas, manuales y workflows necesarios.", "Inmersión total: Conoceré tu negocio mejor que tu equipo.", "Obsesión por los OKRs: Ejecución orientada a resultados medibles.", "Autonomía Final: Al mes 12, la agencia opera sola con el nuevo sistema.", "Tu Director de IA Virtual: Entrega de una Gema Clon estratégica para consultas futuras."].map((item, i) => (<li key={i} className="flex items-start gap-3 text-gray-300 text-sm"><CheckCircle2 className="text-cyan-500 shrink-0 mt-0.5" size={16} /><span>{item}</span></li>))}</ul>
              </div>
              <div className="bg-slate-900/50 p-8 rounded-2xl border border-red-500/20 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div><h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2"><Lock className="text-red-400" /> Compromisos de la Agencia</h3>
                  <ul className="space-y-4">{["Estabilidad: Sin cambios radicales en marca/precios durante la intervención.", "Blindaje Estratégico: El plan aprobado NO se cambia a mitad de camino.", "Respeto a la Obra: No pedir cambios en herramientas o manuales ya definidos.", "Acceso Total: Google Workspace, CRM, Finanzas, Ads, CMS (Llaves del reino).", "Mentalidad Remote-First: Cero reuniones presenciales.", "Transparencia de Datos: Entrega de insumos reales para medición."].map((item, i) => (<li key={i} className="flex items-start gap-3 text-gray-300 text-sm"><div className="w-4 h-4 rounded-full border border-red-500/50 flex items-center justify-center shrink-0 mt-0.5"><div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div></div><span>{item}</span></li>))}</ul>
              </div>
          </div>
      </section>
      <section id="pricing" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative border-t border-white/5">
          <div className="container mx-auto px-6 text-center">
              <div className="inline-block p-1 rounded-3xl bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 mb-12">
                  <div className="bg-slate-950 rounded-[22px] px-12 py-16">
                      <h3 className="text-gray-400 uppercase tracking-widest font-bold text-sm mb-4">Inversión Mensual</h3>
                      <div className="flex items-center justify-center gap-2 mb-6"><span className="text-6xl font-bold text-white">4.000€</span><span className="text-xl text-gray-500 self-end mb-2">/mes</span></div>
                      <p className="text-gray-400 mb-8 max-w-md mx-auto">Contrato anual de transformación.<br/>Reingeniería profunda de procesos y tecnología.</p>
                      <button onClick={() => setIsModalOpen(true)} className="inline-flex items-center gap-3 bg-white text-slate-950 px-8 py-4 rounded-full font-bold text-lg hover:bg-cyan-50 transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.2)] cursor-pointer">Iniciar Transformación <ArrowRight size={20} /></button>
                      <p className="mt-6 text-xs text-gray-600">*Al hacer clic confirmas haber leído y aceptado los compromisos del manifiesto.</p>
                  </div>
              </div>
          </div>
      </section>
      <footer className="py-8 text-center text-gray-600 text-sm border-t border-white/5"><p>© 2026 ALEJO MORENO.ai | Agency Transformation Program</p></footer>
    </div>
  );
}
