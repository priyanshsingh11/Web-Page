import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import {
  Send,
  Terminal,
  Mail,
  Github,
  Linkedin,
  FileText,
  Code2,
  Loader2
} from 'lucide-react';

const socialLinks = [
  { icon: FileText, label: 'RESUME', href: 'https://drive.google.com/file/d/15UHoMdkaeQBKOwC2MqH4lOLiaJ183iPI/view?usp=drive_link' },
  { icon: Github, label: 'GITHUB', href: 'https://github.com/priyanshsingh11' },
  { icon: Linkedin, label: 'LINKEDIN', href: 'https://www.linkedin.com/in/priyansh-singh-575a57289/' },
  { icon: Code2, label: 'LEETCODE', href: 'https://leetcode.com/u/priyanshsingh11/' },
];

const promptLines = [
  { type: 'prompt', text: '>' },
  { type: 'prompt', text: '>' },
  { type: 'prompt', text: '>' },
  { type: 'action', text: "$ DROP A MESSAGE. I'LL RESPOND BEFORE THE NEXT COMMIT." }
];

const ContactSection = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (status === 'sending') return;
    
    setStatus('sending');
    
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus('success');
      toast.success('Packet transmitted successfully!');
      setFormState({ name: '', email: '', message: '' });
      
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      toast.error('Transmission failed. Check API key/deployment.');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-16 px-4 md:px-16 bg-transparent">
      <div className="max-w-7xl mx-auto">

        {/* Terminal Header */}
        <div className="bg-[#1a1a1a] border-x-[2px] border-t-[2px] border-[#853A17] p-3 flex flex-col sm:flex-row justify-between items-center rounded-t-sm shadow-[4px_0_0_0_#000] md:shadow-[6px_0_0_0_#000] gap-2">
          <div className="flex items-center gap-4">
            <Terminal size={18} className="text-[#853A17]" />
            <span className="font-pixel text-[11px] md:text-xs tracking-[0.3em] text-[#853A17] uppercase font-bold">
              {">_"} CONTACT_TERMINAL.EXE
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#853A17] rounded-full animate-pulse shadow-[0_0_12px_#853A17]"></div>
            <span className="font-pixel text-[9px] md:text-[11px] text-[#853A17] tracking-[0.2em] uppercase font-bold">ENCRYPTED_CONNECTION</span>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="bg-black/95 backdrop-blur-xl border-[2px] border-[#853A17] min-h-[400px] md:min-h-[450px] shadow-[8px_8px_0_0_#000] md:shadow-[12px_12px_0_0_#000] relative overflow-hidden flex flex-col group transition-all duration-500 hover:shadow-[12px_12px_0_0_#853A17/10]">

          {/* Scanline Effect */}
          <div className="absolute inset-0 pointer-events-none z-10 opacity-30"
            style={{
              background: 'linear-gradient(rgba(133, 58, 23, 0) 50%, rgba(133, 58, 23, 0.1) 50%), linear-gradient(90deg, rgba(133, 58, 23, 0.05), rgba(133, 58, 23, 0.02), rgba(133, 58, 23, 0.05))',
              backgroundSize: '100% 4px, 3px 100%'
            }}></div>

          <div className="p-6 md:p-10 relative z-20 flex flex-col lg:flex-row gap-8 md:gap-16">

            {/* Left Column: Prompts & Socials */}
            <div className="lg:w-1/2 flex flex-col">
              <div className="space-y-3 md:space-y-4 mb-8 md:mb-12">
                {promptLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`font-pixel text-xs md:text-base tracking-widest ${line.type === 'action' ? 'text-white' : 'text-[#853A17]/80'} flex gap-3 leading-relaxed`}
                  >
                    <span className="font-bold">{line.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto pt-6 md:pt-8 border-t-[2px] border-[#853A17]/30">
                <p className="font-pixel text-[10px] md:text-xs text-[#853A17] mb-4 md:mb-6 tracking-[0.3em] uppercase font-bold">DIRECT_COMMS_CHANNELS</p>
                <div className="flex flex-wrap gap-4 md:gap-6">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 md:p-3 border-[2px] border-[#853A17]/40 hover:border-[#853A17] hover:bg-[#853A17]/20 transition-all group shadow-[3px_3px_0_0_#000] md:shadow-[4px_4px_0_0_#000] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                      title={social.label}
                    >
                      <social.icon size={20} className="text-[#853A17] group-hover:scale-110 transition-transform" />
                    </a>
                  ))}
                  <a href="mailto:priyanshsingh855@gmail.com" className="p-2.5 md:p-3 border-[2px] border-[#853A17]/40 hover:border-[#853A17] hover:bg-[#853A17]/20 transition-all group shadow-[3px_3px_0_0_#000] md:shadow-[4px_4px_0_0_#000] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]" title="EMAIL">
                    <Mail size={20} className="text-[#853A17] group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:w-1/2">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="space-y-2">
                  <label className="font-pixel text-[10px] md:text-xs text-[#853A17] uppercase tracking-[0.2em] font-bold">IDENTIFICATION_ID</label>
                  <input
                    type="text"
                    required
                    placeholder="ENTER NAME..."
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-transparent border-b-[2px] border-[#853A17]/30 p-2 font-pixel text-xs md:text-sm text-white focus:outline-none focus:border-[#853A17] transition-all placeholder:text-white/20 focus:bg-white/5"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-pixel text-[10px] md:text-xs text-[#853A17] uppercase tracking-[0.2em] font-bold">ENCRYPTED_EMAIL</label>
                  <input
                    type="email"
                    required
                    placeholder="ENTER EMAIL..."
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-transparent border-b-[2px] border-[#853A17]/30 p-2 font-pixel text-xs md:text-sm text-white focus:outline-none focus:border-[#853A17] transition-all placeholder:text-white/20 focus:bg-white/5"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-pixel text-[10px] md:text-xs text-[#853A17] uppercase tracking-[0.2em] font-bold">DATA_PACKET_CONTENT</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="COMPOSE MESSAGE..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-transparent border-b-[2px] border-[#853A17]/30 p-2 font-pixel text-xs md:text-sm text-white focus:outline-none focus:border-[#853A17] transition-all placeholder:text-white/20 focus:bg-white/5 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-[#853A17] text-white p-4 md:p-5 font-pixel text-xs md:text-base tracking-[0.3em] md:tracking-[0.4em] uppercase hover:bg-white hover:text-[#853A17] transition-all disabled:opacity-50 flex items-center justify-center gap-4 shadow-[6px_6px_0_0_#000] md:shadow-[10px_10px_0_0_#000] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] font-bold"
                >
                  {status === 'sending' ? (
                    <div className="flex items-center gap-3">
                      ENCRYPTING... <Loader2 size={18} className="animate-spin" />
                    </div>
                  ) : status === 'success' ? (
                    "✓ PACKET_SENT"
                  ) : status === 'error' ? (
                    "⚠ RETRY_LATER"
                  ) : (
                    <>
                      TRANSMIT_DATA <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          <div className="mt-auto p-4 border-t-[2px] border-[#853A17]/20 bg-black/60 text-center">
            <p className="font-pixel text-[8px] md:text-[10px] text-[#853A17]/50 tracking-[0.4em] md:tracking-[0.6em] uppercase font-bold">
              SECURE_TRANSMISSION_PROTOCOL_V4.2.0 // ENCRYPTION_ACTIVE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
