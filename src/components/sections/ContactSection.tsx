import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Linkedin, Github, Instagram, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
    }, 1000);
  };

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/priyanshsingh11' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/priyansh-singh-575a57289/' },
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/xpriyanshsingh/' },
    { icon: Mail, label: 'Email', href: 'mailto:priyanshsingh855@gmail.com' },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen py-32 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-[200px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">Get in Touch</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4 mb-6">
            Let's Build <span className="text-gradient">Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have an exciting project in mind? I'd love to hear about it. Let's create something extraordinary.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-display font-semibold mb-8">
              Connect With Me
            </h3>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors duration-300">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">priyanshsingh855@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors duration-300">
                <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Open to Remote & Relocation</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="group w-12 h-12 rounded-2xl glass-card flex items-center justify-center hover:border-primary/50 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </a>
              ))}
            </div>

            {/* Availability Badge */}
            <div className="mt-12 inline-flex items-center gap-3 glass-card px-6 py-4 rounded-2xl">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
              </span>
              <span className="text-sm font-medium">Currently available for new opportunities</span>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card p-12 rounded-3xl text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/10 flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-display font-semibold mb-2">Message Sent!</h3>
                <p className="text-muted-foreground mb-6">
                  Thank you for reaching out. I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-primary hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10 rounded-3xl">
                <div className="space-y-6">
                  {/* Name Field */}
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="peer w-full px-4 py-4 bg-muted/30 border border-border rounded-xl text-foreground placeholder-transparent focus:outline-none focus:border-primary transition-all duration-300"
                      placeholder="Your Name"
                    />
                    <label
                      htmlFor="name"
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${formState.name || focusedField === 'name'
                        ? '-top-2.5 text-xs text-primary bg-card px-2'
                        : 'top-4 text-muted-foreground'
                        }`}
                    >
                      Your Name
                    </label>
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="peer w-full px-4 py-4 bg-muted/30 border border-border rounded-xl text-foreground placeholder-transparent focus:outline-none focus:border-primary transition-all duration-300"
                      placeholder="Email Address"
                    />
                    <label
                      htmlFor="email"
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${formState.email || focusedField === 'email'
                        ? '-top-2.5 text-xs text-primary bg-card px-2'
                        : 'top-4 text-muted-foreground'
                        }`}
                    >
                      Email Address
                    </label>
                  </div>

                  {/* Message Field */}
                  <div className="relative">
                    <textarea
                      id="message"
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={5}
                      className="peer w-full px-4 py-4 bg-muted/30 border border-border rounded-xl text-foreground placeholder-transparent focus:outline-none focus:border-primary transition-all duration-300 resize-none"
                      placeholder="Your Message"
                    />
                    <label
                      htmlFor="message"
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${formState.message || focusedField === 'message'
                        ? '-top-2.5 text-xs text-primary bg-card px-2'
                        : 'top-4 text-muted-foreground'
                        }`}
                    >
                      Your Message
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="group w-full py-4 rounded-xl bg-gradient-primary text-primary-foreground font-semibold text-lg flex items-center justify-center gap-2 hover:shadow-glow-lg transition-all duration-300"
                  >
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
