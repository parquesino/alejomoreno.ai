import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, Lock, Rocket, Calendar, Target, Lightbulb, ArrowRight, 
  ShieldCheck, Laptop, Compass, Bot, X, Send 
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
      <span className="text-[0.6rem] tracking-[0.2em] text-cyan-400/80 uppercase">Mentoría Exit</span>
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
  const [formData, setFormData] = useState({ name: '', currentRole: '', email: '', startDate: '' });
  if (!isOpen) return null;
  const handleChange = (e) => { const { name, value } = e.target; setFormData(prev => ({ ...prev, [name]: value })); };
  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hola Alejo, he leído la propuesta EXIT y acepto los compromisos. Quiero construir mi negocio de nicho.\n\n🚀 *Datos del Candidato:*\n* Nombre: ${formData.name}\n* Rol Actual: ${formData.currentRole}\n* Correo: ${formData.email}\n* Fecha deseada de inicio: ${formData.startDate}\n\nQuedo a la espera de validar mi perfil.`;
    window.open(`https://wa.me/34655328878?text=${encodeURIComponent(message)}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-cyan-500/30 rounded-2xl w-full max-w-md relative shadow-[0_0_50px_rgba(34,211,238,0.1)] overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"><X size={24} /></button>
        <div className="p-8">
          <h3 className="text-2xl font-bold text-white mb-2">Solicitar Plaza "Exit"</h3>
          <p className="text-sm text-gray-400 mb-6">Esta mentoría requiere un perfil específico. Completa tus datos para validar tu candidatura.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div><label className="block text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">Tu Nombre</label><input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-gray-600" placeholder="Ej. Ana García" /></div>
            <div><label className="block text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">Tu Rol Actual / Experiencia</label><input type="text" name="currentRole" required value={formData.currentRole} onChange={handleChange} className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-gray-600" placeholder="Ej. Director de Marketing, Abogado..." /></div>
            <div><label className="block text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">Correo Personal</label><input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-gray-600" placeholder="ana@gmail.com" /></div>
            <div><label className="block text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">Fecha Deseada de Inicio</label><input type="date" name="startDate" required value={formData.startDate} onChange={handleChange} className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all [color-scheme:dark]" /></div>
            <button type="submit" className="w-full mt-6 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] flex items-center justify-center gap-2 group">Enviar Solicitud <Send size={18} className="group-hover:translate-x-1 transition-transform" /></button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default function ExitProposal() {
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
      <header className="pt-48 pb-20 container mx-auto px-6 text-center relative">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full -z-10"></div>
        <div className="inline-block px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-400 text-sm font-bold tracking-widest uppercase mb-6 animate-fade-in-up">
            Mentoría One-on-One · Solo 3 meses
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Diseña tu Salida.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Construye tu Libertad.</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
            Te enseño a convertir tu experiencia en un <strong>Negocio de Nicho rentable</strong> potenciado por IA. 
            Sin humo. Sin teoría académica. Solo la estrategia exacta que uso en mis propios activos.
        </p>
      </header>
      <section className="py-16 border-y border-white/5 bg-slate-900/30">
          <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-slate-900 to-slate-800 p-8 rounded-2xl border border-cyan-500/20 shadow-2xl">
                  <div className="w-16 h-16 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-400 flex-shrink-0"><Rocket size={32} /></div>
                  <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-white mb-2">De la Idea a la Ejecución en 90 días</h3>
                      <p className="text-gray-400">No te doy peces, te enseño a construir la piscifactoría. Al terminar, tendrás un ecosistema digital en vivo, una estrategia AIO funcionando y una<span className="text-cyan-400 font-bold"> "Gema Clon"</span> entrenada con mi cerebro estratégico para guiarte cuando la mentoría termine.</p>
                  </div>
              </div>
          </div>
      </section>
      <section className="py-24 container mx-auto px-6 relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">Sprint de 3 Meses</h2>
          <div className="hidden md:block absolute top-40 left-1/2 w-0.5 h-[80%] bg-gradient-to-b from-cyan-500/50 to-transparent -translate-x-1/2 z-0"></div>
          <div className="space-y-12 max-w-4xl mx-auto">
              <PhaseCard number={1} title="Mes 1: Definición & Validación" duration="30 Días" description="Encontramos tu nicho rentable. Analizamos los mercados digitales y usamos IA Generativa para validar qué negocio se adapta a tus capacidades e intereses reales." items={["Auditoría de tus habilidades y pasiones", "Análisis de viabilidad de ideas con IA", "Estudio del potencial embudo (impresiones, leads, ventas)", "Definición final del modelo de negocio"]} />
              <PhaseCard number={2} title="Mes 2: Construcción del Ecosistema" duration="30 Días" description="Manos a la obra. Te enseño paso a paso a construir la infraestructura digital necesaria para que tu negocio exista y opere." items={["Construcción de Web y activos digitales con IA", "Configuración de herramientas (CRM, Analytics)", "Creación de la 'Forma de Trabajar Virtuosa'", "Integración de automatizaciones básicas"]} />
              <PhaseCard number={3} title="Mes 3: Dominación AIO & SEO" duration="30 Días" description="Tráfico y visibilidad. Implementamos la estrategia para que tu negocio sea encontrado por humanos (Google) y por máquinas (ChatGPT/Gemini)." items={["Estrategia de contenidos SEO tradicional", "Optimización para Motores de Respuesta (AIO)", "Entrega de la 'Gema Clon' estratégica", "Plan de vuelo para los siguientes 12 meses"]} />
          </div>
      </section>
      <section className="py-24 container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Pacto de Caballeros</h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">Esta mentoría requiere honestidad radical. Yo pongo mi cerebro y experiencia; tú pones la ejecución y los recursos.</p>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="bg-slate-900/50 p-8 rounded-2xl border border-cyan-500/20 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500"></div><h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2"><ShieldCheck className="text-cyan-400" /> Mi Promesa de Valor</h3>
                  <ul className="space-y-4">{["Feedback Sincero: Si tu idea no es viable, te lo diré antes de que gastes un euro.", "Análisis de Datos Reales: Proyecciones objetivas de tráfico y ventas, sin cuentos.", "Transferencia de Conocimiento: Te enseño a usar la IA para construir, no lo hago 'caja negra'.", "Plan Estratégico a Medida: Diseñado para tus fortalezas, no una plantilla genérica.", "Tu 'Gema Clon' personal: Te llevas mi cerebro digitalizado para consultas futuras."].map((item, i) => (<li key={i} className="flex items-start gap-3 text-gray-300 text-sm"><CheckCircle2 className="text-cyan-500 shrink-0 mt-0.5" size={16} /><span>{item}</span></li>))}</ul>
              </div>
              <div className="bg-slate-900/50 p-8 rounded-2xl border border-red-500/20 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div><h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2"><Lock className="text-red-400" /> Tus Deberes (No Negociables)</h3>
                  <ul className="space-y-4">{["Compromiso de 3 meses: No abandonar cuando la curva de aprendizaje suba.", "Confianza Ciega: Creer en el nicho y el plan que definamos juntos.", "Inversión en Herramientas: Tú pagas tus dominios, hosting, APIs y software.", "Disciplina Diaria: Aplicar la metodología de trabajo sin excusas.", "Cero Presencialidad: Todo ocurre en digital, optimizando el tiempo.", "Foco: Asistir a las reuniones y ejecutar las tareas entre sesiones."].map((item, i) => (<li key={i} className="flex items-start gap-3 text-gray-300 text-sm"><div className="w-4 h-4 rounded-full border border-red-500/50 flex items-center justify-center shrink-0 mt-0.5"><div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div></div><span>{item}</span></li>))}</ul>
              </div>
          </div>
      </section>
      <section id="pricing" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative border-t border-white/5">
          <div className="container mx-auto px-6 text-center">
              <div className="inline-block p-1 rounded-3xl bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 mb-12">
                  <div className="bg-slate-950 rounded-[22px] px-12 py-16">
                      <h3 className="text-gray-400 uppercase tracking-widest font-bold text-sm mb-4">Inversión Mensual</h3>
                      <div className="flex items-center justify-center gap-2 mb-6"><span className="text-6xl font-bold text-white">2.500€</span><span className="text-xl text-gray-500 self-end mb-2">/mes</span></div>
                      <p className="text-gray-400 mb-8 max-w-md mx-auto">Programa intensivo de 3 meses.<br/>Tu pasaporte a la independencia profesional.</p>
                      <button onClick={() => setIsModalOpen(true)} className="inline-flex items-center gap-3 bg-white text-slate-950 px-8 py-4 rounded-full font-bold text-lg hover:bg-cyan-50 transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.2)] cursor-pointer">Validar mi Candidatura <ArrowRight size={20} /></button>
                      <p className="mt-6 text-xs text-gray-600">*Plazas muy limitadas debido a la intensidad del 1-on-1.</p>
                  </div>
              </div>
          </div>
      </section>
      <footer className="py-8 text-center text-gray-600 text-sm border-t border-white/5"><p>© 2026 ALEJO MORENO.ai | Exit Mentorship Program</p></footer>
    </div>
  );
}
