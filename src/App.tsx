/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Dumbbell, 
  Users, 
  Award, 
  CheckCircle2, 
  Instagram, 
  Facebook, 
  Twitter, 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle,
  ChevronRight,
  Star,
  Quote
} from "lucide-react";
import React, { useState } from "react";

export default function App() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => setFormStatus("success"), 1500);
  };

  return (
    <div className="min-h-screen selection:bg-gold selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
              <Dumbbell className="text-black w-6 h-6" />
            </div>
            <span className="text-xl font-display font-bold tracking-tighter uppercase">PowerHouse</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-white/70">
            <a href="#services" className="hover:text-gold transition-colors">Services</a>
            <a href="#about" className="hover:text-gold transition-colors">About</a>
            <a href="#testimonials" className="hover:text-gold transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
          </div>
          <a 
            href="#contact" 
            className="bg-gold text-black px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-gold-light transition-all transform hover:scale-105 active:scale-95"
          >
            Join Now
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
            alt="Gym Interior" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-gold font-medium tracking-[0.3em] uppercase text-sm mb-6">
              Premium Fitness in Indore
            </span>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-[0.9] tracking-tighter text-balance">
              UNLEASH YOUR <span className="text-gold italic">POTENTIAL</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
              Experience the pinnacle of fitness with world-class equipment, 
              expert trainers, and a community that drives you to greatness.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-gold text-black px-10 py-4 rounded-full text-lg font-bold uppercase tracking-widest hover:bg-gold-light transition-all shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                Start Free Trial
              </button>
              <button className="w-full sm:w-auto border border-white/20 hover:border-gold px-10 py-4 rounded-full text-lg font-bold uppercase tracking-widest transition-all">
                View Memberships
              </button>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <ChevronRight className="rotate-90 w-6 h-6" />
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white/5 border-y border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
            <div className="flex items-center justify-center gap-4 border-white/10 md:border-r">
              <Award className="text-gold w-8 h-8" />
              <div className="text-left">
                <p className="font-bold text-xl uppercase tracking-tighter">Certified Elite</p>
                <p className="text-white/50 text-xs uppercase tracking-widest">Global Standards</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 border-white/10 md:border-r">
              <Users className="text-gold w-8 h-8" />
              <div className="text-left">
                <p className="font-bold text-xl uppercase tracking-tighter">10+ Years</p>
                <p className="text-white/50 text-xs uppercase tracking-widest">Experience in Indore</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <CheckCircle2 className="text-gold w-8 h-8" />
              <div className="text-left">
                <p className="font-bold text-xl uppercase tracking-tighter">Local Favorite</p>
                <p className="text-white/50 text-xs uppercase tracking-widest">5000+ Active Members</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tighter">Our Expertise</h2>
            <div className="w-20 h-1 bg-gold mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Strength Training",
                desc: "Modern hammer strength equipment and free weights for maximum gains.",
                img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop",
                icon: <Dumbbell className="w-6 h-6" />
              },
              {
                title: "Personal Coaching",
                desc: "One-on-one sessions with certified trainers to reach your specific goals.",
                img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop",
                icon: <Users className="w-6 h-6" />
              },
              {
                title: "Cardio & HIIT",
                desc: "High-intensity interval training and advanced cardio machines.",
                img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop",
                icon: <Award className="w-6 h-6" />
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="group relative h-[450px] overflow-hidden rounded-2xl border border-white/10"
              >
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute bottom-0 p-8 w-full">
                  <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center mb-4 text-black">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 uppercase tracking-tight">{service.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-24 bg-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl" />
              <img 
                src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop" 
                alt="Gym Atmosphere" 
                className="relative z-10 rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-gold p-8 rounded-2xl z-20 hidden md:block">
                <p className="text-black font-bold text-4xl leading-none">15+</p>
                <p className="text-black/70 text-xs font-bold uppercase tracking-widest mt-1">Trainers</p>
              </div>
            </div>
            <div>
              <span className="text-gold font-medium tracking-[0.3em] uppercase text-sm mb-4 block">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 uppercase tracking-tighter leading-tight">
                Redefining Fitness <br /> in the heart of Indore
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Founded in 2015, PowerHouse Gym was born from a simple vision: to create a space 
                where luxury meets raw intensity. We believe that fitness is not just about 
                the body, but about the relentless pursuit of self-improvement.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "24/7 Access for Premium Members",
                  "Nutrition & Diet Consultation",
                  "Steam & Sauna Facilities",
                  "Complimentary Valet Parking"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-gold w-5 h-5" />
                    <span className="text-white/80 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="flex items-center gap-2 text-gold font-bold uppercase tracking-widest hover:gap-4 transition-all">
                Learn More About Us <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tighter">Member Stories</h2>
            <div className="w-20 h-1 bg-gold mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Rahul Sharma",
                role: "Business Owner",
                text: "The best gym in Indore, hands down. The equipment is top-notch and the atmosphere is incredibly motivating.",
                rating: 5
              },
              {
                name: "Priya Verma",
                role: "Yoga Instructor",
                text: "I love the personal training sessions here. My trainer really understands my goals and pushes me safely.",
                rating: 5
              },
              {
                name: "Amit Patel",
                role: "Software Engineer",
                text: "Clean, professional, and great community. The 24/7 access is a lifesaver for my busy schedule.",
                rating: 5
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white/5 p-8 rounded-2xl border border-white/10 relative group">
                <Quote className="absolute top-6 right-8 text-gold/20 w-12 h-12" />
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-white/70 italic mb-8 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-bold text-lg uppercase tracking-tight">{testimonial.name}</p>
                  <p className="text-gold text-xs font-medium uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 uppercase tracking-tighter">Get In Touch</h2>
              <p className="text-white/60 text-lg mb-10">
                Ready to transform? Visit us or send a message and our team will get back to you within 24 hours.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="text-gold w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold uppercase tracking-widest text-sm mb-1">Our Location</p>
                    <p className="text-white/60">123, Vijay Nagar, AB Road, Indore, MP 452010</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="text-gold w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold uppercase tracking-widest text-sm mb-1">Call Us</p>
                    <p className="text-white/60">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="text-gold w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold uppercase tracking-widest text-sm mb-1">Email Us</p>
                    <p className="text-white/60">info@powerhouseindore.com</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-12 h-64 bg-white/5 rounded-2xl border border-white/10 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-white/20 uppercase tracking-[0.3em] font-bold text-sm">
                  Google Maps Embed Placeholder
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1974&auto=format&fit=crop" 
                  alt="Map View" 
                  className="w-full h-full object-cover opacity-20"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="bg-black p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
              {formStatus === "success" ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="text-black w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 uppercase tracking-tight">Message Sent!</h3>
                  <p className="text-white/60 mb-8">We'll reach out to you shortly to schedule your visit.</p>
                  <button 
                    onClick={() => setFormStatus("idle")}
                    className="text-gold font-bold uppercase tracking-widest hover:underline"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">Full Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">Phone Number</label>
                      <input 
                        required
                        type="tel" 
                        placeholder="+91 00000 00000"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">Select Service</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-gold transition-colors appearance-none">
                      <option className="bg-black">Strength Training</option>
                      <option className="bg-black">Personal Coaching</option>
                      <option className="bg-black">Cardio & HIIT</option>
                      <option className="bg-black">Yoga & Flexibility</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">Message</label>
                    <textarea 
                      rows={4}
                      placeholder="Tell us about your fitness goals..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-gold transition-colors resize-none"
                    ></textarea>
                  </div>
                  <button 
                    disabled={formStatus === "submitting"}
                    className="w-full bg-gold text-black py-5 rounded-xl font-bold uppercase tracking-[0.2em] hover:bg-gold-light transition-all disabled:opacity-50"
                  >
                    {formStatus === "submitting" ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                  <Dumbbell className="text-black w-5 h-5" />
                </div>
                <span className="text-xl font-display font-bold tracking-tighter uppercase">PowerHouse</span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-8">
                The most premium fitness destination in Indore. We provide the tools, 
                you provide the will. Together, we achieve greatness.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold uppercase tracking-widest text-sm mb-6">Quick Links</h4>
              <ul className="space-y-4 text-white/50 text-sm uppercase tracking-wider">
                <li><a href="#" className="hover:text-gold transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-gold transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-gold transition-colors">About Us</a></li>
                <li><a href="#testimonials" className="hover:text-gold transition-colors">Success Stories</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-widest text-sm mb-6">Support</h4>
              <ul className="space-y-4 text-white/50 text-sm uppercase tracking-wider">
                <li><a href="#" className="hover:text-gold transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Membership Rules</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">FAQs</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-widest text-sm mb-6">Newsletter</h4>
              <p className="text-white/50 text-sm mb-6">Get fitness tips and exclusive offers.</p>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Email Address"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gold hover:text-white transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-white/30 text-xs font-bold uppercase tracking-widest">
            <p>© 2026 PowerHouse Gym Indore. All Rights Reserved.</p>
            <p>Designed with Passion for Fitness</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/919876543210" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 group"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-full mr-4 bg-black text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with us
        </span>
      </a>
    </div>
  );
}
