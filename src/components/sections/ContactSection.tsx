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
    <section id="contact" className="py-16 md:py-24 px-4 md:px-16 bg-transparent">
      <div className="max-w-6xl mx-auto">

        {/* Terminal Header */}
        <div className="bg-[#1a1a1a] border-x-[2px] border-t-[2px] border-[#853A17] p-3 flex flex-col sm:flex-row justify-between items-center rounded-t-sm shadow-[4px_0_0_0_#000] md:shadow-[8px_0_0_0_#000] gap-2">
          <div className="flex items-center gap-3">
            <Terminal size={14} className="text-[#853A17]" />
            <span className="font-pixel text-[9px] md:text-[10px] tracking-[0.2em] text-[#853A17] uppercase">
              {">_"} CONTACT_TERMINAL.EXE
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#853A17] rounded-full animate-pulse shadow-[0_0_8px_#853A17]"></div>
            <span className="font-pixel text-[8px] md:text-[10px] text-[#853A17] tracking-widest uppercase">ENCRYPTED_CONNECTION</span>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="bg-black/90 backdrop-blur-md border-[2px] border-[#853A17] min-h-[400px] md:min-h-[500px] shadow-[8px_8px_0_0_#000] md:shadow-[12px_12px_0_0_#000] relative overflow-hidden flex flex-col">

          {/* Scanline Effect */}
          <div className="absolute inset-0 pointer-events-none z-10 opacity-20"
            style={{
              background: 'linear-gradient(rgba(133, 58, 23, 0) 50%, rgba(133, 58, 23, 0.1) 50%), linear-gradient(90deg, rgba(133, 58, 23, 0.05), rgba(133, 58, 23, 0.02), rgba(133, 58, 23, 0.05))',
              backgroundSize: '100% 4px, 3px 100%'
            }}></div>

          <div className="p-6 md:p-12 relative z-20 flex flex-col lg:flex-row gap-10 md:gap-12">

            {/* Left Column: Prompts & Socials */}
            <div className="lg:w-1/2 flex flex-col">
              <div className="space-y-3 md:space-y-4 mb-8 md:mb-12">
                {promptLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`font-pixel text-[10px] md:text-sm tracking-widest ${line.type === 'action' ? 'text-white' : 'text-[#853A17]/60'} flex gap-2 leading-relaxed`}
                  >
                    <span>{line.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto pt-6 md:pt-10 border-t border-[#853A17]/20">
                <p className="font-pixel text-[8px] md:text-[9px] text-[#853A17]/40 mb-4 md:mb-6 tracking-widest uppercase">DIRECT_COMMS_CHANNELS</p>
                <div className="flex flex-wrap gap-3 md:gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 md:p-3 border-[1px] border-[#853A17]/30 hover:border-[#853A17] hover:bg-[#853A17]/10 transition-all group shadow-[3px_3px_0_0_#000] md:shadow-[4px_4px_0_0_#000] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                      title={social.label}
                    >
                      <social.icon size={16} className="text-[#853A17]/60 group-hover:text-[#853A17] transition-colors" />
                    </a>
                  ))}
                  <a href="mailto:priyanshsingh855@gmail.com" className="p-2.5 md:p-3 border-[1px] border-[#853A17]/30 hover:border-[#853A17] hover:bg-[#853A17]/10 transition-all group shadow-[3px_3px_0_0_#000] md:shadow-[4px_4px_0_0_#000] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]" title="EMAIL">
                    <Mail size={16} className="text-[#853A17]/60 group-hover:text-[#853A17] transition-colors" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:w-1/2">
              <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                <div className="space-y-2">
                  <label className="font-pixel text-[9px] md:text-[10px] text-[#853A17]/60 uppercase tracking-widest">IDENTIFICATION_ID</label>
                  <input
                    type="text"
                    required
                    placeholder="ENTER NAME..."
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-transparent border-b-[2px] border-[#853A17]/20 p-2 font-pixel text-[10px] md:text-xs text-white focus:outline-none focus:border-[#853A17] transition-colors placeholder:text-white/10"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-pixel text-[9px] md:text-[10px] text-[#853A17]/60 uppercase tracking-widest">ENCRYPTED_EMAIL</label>
                  <input
                    type="email"
                    required
                    placeholder="ENTER EMAIL..."
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-transparent border-b-[2px] border-[#853A17]/20 p-2 font-pixel text-[10px] md:text-xs text-white focus:outline-none focus:border-[#853A17] transition-colors placeholder:text-white/10"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-pixel text-[9px] md:text-[10px] text-[#853A17]/60 uppercase tracking-widest">DATA_PACKET_CONTENT</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="COMPOSE MESSAGE..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-transparent border-b-[2px] border-[#853A17]/20 p-2 font-pixel text-[10px] md:text-xs text-white focus:outline-none focus:border-[#853A17] transition-colors placeholder:text-white/10 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-[#853A17] text-white p-3.5 md:p-4 font-pixel text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase hover:bg-white hover:text-[#853A17] transition-all disabled:opacity-50 flex items-center justify-center gap-3 shadow-[6px_6px_0_0_#000] md:shadow-[8px_8px_0_0_#000] active:shadow-none active:translate-x-[3px] active:translate-y-[3px]"
                >
                  {status === 'sending' ? (
                    <div className="flex items-center gap-2">
                      ENCRYPTING... <Loader2 size={14} className="animate-spin" />
                    </div>
                  ) : status === 'success' ? (
                    "✓ PACKET_SENT"
                  ) : status === 'error' ? (
                    "⚠ RETRY_LATER"
                  ) : (
                    <>
                      TRANSMIT_DATA <Send size={14} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          <div className="mt-auto p-4 border-t border-[#853A17]/10 bg-black/40 text-center">
            <p className="font-pixel text-[7px] md:text-[8px] text-[#853A17]/30 tracking-[0.2em] md:tracking-[0.4em] uppercase">
              SECURE_TRANSMISSION_PROTOCOL_V4.2.0 // ENCRYPTION_ACTIVE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
