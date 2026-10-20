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
  { icon: FileText, label: 'Resume', href: 'https://drive.google.com/file/d/1TFWOIzQZNMV5Rt3KieD7KKLbTaGf-P66/view?usp=drive_link' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/priyanshsingh11' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/priyansh-singh-575a57289/' },
  { icon: Code2, label: 'LeetCode', href: 'https://leetcode.com/u/priyanshsingh11/' },
];

const promptLines = [
  { type: 'prompt', text: '>' },
  { type: 'prompt', text: '>' },
  { type: 'prompt', text: '>' },
  { type: 'action', text: "$ Drop a message. I'll respond before the next commit." }
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
    <section id="contact" className="py-8 md:py-12 px-4 md:px-16 bg-transparent">
      <div className="max-w-3xl mx-auto">

        {/* Terminal Header */}
        <div className="bg-[#1a1a1a] border-x-[2px] border-t-[2px] border-[#CF492C] px-3 py-1.5 flex flex-col sm:flex-row justify-between items-center rounded-t-sm shadow-[3px_0_0_0_#000] gap-1">
          <div className="flex items-center gap-2">
            <Terminal size={14} className="text-[#CF492C]" />
            <span className="font-body text-sm md:text-base tracking-wide text-[#CF492C] font-bold">
              {">_"} contact_terminal.exe
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#CF492C] rounded-full animate-pulse shadow-[0_0_12px_#CF492C]"></div>
            <span className="font-body text-xs md:text-sm text-[#CF492C] tracking-wide font-bold">encrypted_connection</span>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="bg-black/95 backdrop-blur-xl border-[2px] border-[#CF492C] shadow-[5px_5px_0_0_#000] md:shadow-[6px_6px_0_0_#000] relative overflow-hidden flex flex-col group transition-all duration-500 hover:shadow-[12px_12px_0_0_#CF492C/10]">

          {/* Scanline Effect */}
          <div className="absolute inset-0 pointer-events-none z-10 opacity-30"
            style={{
              background: 'linear-gradient(rgba(207, 73, 44, 0) 50%, rgba(207, 73, 44, 0.1) 50%), linear-gradient(90deg, rgba(207, 73, 44, 0.05), rgba(207, 73, 44, 0.02), rgba(207, 73, 44, 0.05))',
              backgroundSize: '100% 4px, 3px 100%'
            }}></div>

          <div className="p-4 md:p-6 relative z-20 flex flex-col lg:flex-row gap-4 md:gap-8">

            {/* Left Column: Prompts & Socials */}
            <div className="lg:w-1/2 flex flex-col">
              <div className="space-y-0.5 mb-4 md:mb-5">
                {promptLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`font-body text-sm md:text-base tracking-wide ${line.type === 'action' ? 'text-white' : 'text-[#CF492C]/80'} flex gap-2 leading-snug`}
                  >
                    <span className="font-bold">{line.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto pt-3 md:pt-4 border-t-[1px] border-[#CF492C]/30">
                <p className="font-body text-xs md:text-sm text-[#CF492C] mb-2 md:mb-3 tracking-wide font-bold">Communication Channels</p>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 border-[1px] border-[#CF492C]/40 hover:border-[#CF492C] hover:bg-[#CF492C]/20 transition-all group shadow-[2px_2px_0_0_#000] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                      title={social.label}
                    >
                      <social.icon size={14} className="text-[#CF492C] group-hover:scale-110 transition-transform" />
                    </a>
                  ))}
                  <a href="mailto:priyanshsingh855@gmail.com" className="p-1.5 border-[1px] border-[#CF492C]/40 hover:border-[#CF492C] hover:bg-[#CF492C]/20 transition-all group shadow-[2px_2px_0_0_#000] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]" title="Email">
                    <Mail size={14} className="text-[#CF492C] group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:w-1/2">
              <form onSubmit={handleSubmit} className="space-y-2.5 md:space-y-3">
                <div className="space-y-0.5">
                  <label className="font-body text-xs md:text-sm text-[#CF492C] tracking-wide font-bold">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter name..."
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-transparent border-b-[1px] border-[#CF492C]/30 px-1 py-1 font-body text-sm md:text-base text-white focus:outline-none focus:border-[#CF492C] transition-all placeholder:text-white/20 focus:bg-white/5"
                  />
                </div>

                <div className="space-y-0.5">
                  <label className="font-body text-xs md:text-sm text-[#CF492C] tracking-wide font-bold">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="Enter email..."
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-transparent border-b-[1px] border-[#CF492C]/30 px-1 py-1 font-body text-sm md:text-base text-white focus:outline-none focus:border-[#CF492C] transition-all placeholder:text-white/20 focus:bg-white/5"
                  />
                </div>

                <div className="space-y-0.5">
                  <label className="font-body text-xs md:text-sm text-[#CF492C] tracking-wide font-bold">Your Wish</label>
                  <textarea
                    required
                    rows={2}
                    placeholder="Compose message..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-transparent border-b-[1px] border-[#CF492C]/30 px-1 py-1 font-body text-sm md:text-base text-white focus:outline-none focus:border-[#CF492C] transition-all placeholder:text-white/20 focus:bg-white/5 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-[#CF492C] text-white p-1.5 md:p-2 font-body text-sm md:text-lg tracking-wide hover:bg-white hover:text-[#CF492C] transition-all disabled:opacity-50 flex items-center justify-center gap-2 shadow-[3px_3px_0_0_#000] md:shadow-[4px_4px_0_0_#000] active:shadow-none active:translate-x-[3px] active:translate-y-[3px] font-bold"
                >
                  {status === 'sending' ? (
                    <div className="flex items-center gap-3">
                      Encrypting... <Loader2 size={18} className="animate-spin" />
                    </div>
                  ) : status === 'success' ? (
                    "✓ Packet sent"
                  ) : status === 'error' ? (
                    "⚠ Retry later"
                  ) : (
                    <>
                      Transmit data <Send size={12} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          <div className="mt-auto px-3 py-1.5 border-t-[1px] border-[#CF492C]/20 bg-black/60 text-center">
            <p className="font-body text-xs md:text-sm text-[#CF492C]/50 tracking-wide font-bold">
              secure_transmission_protocol_v4.2.0 // encryption_active
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
