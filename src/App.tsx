/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  X,
  Plus,
  Minus,
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

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative w-full max-w-2xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 max-h-[80vh] overflow-y-auto"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        <h3 className="text-3xl font-bold mb-8 uppercase tracking-tight text-gold">{title}</h3>
        <div className="text-white/70 space-y-4 leading-relaxed font-light">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default function App() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "Do you offer a free trial for new members?",
      a: "Yes! We offer a complimentary 3-day pass for all Indore residents. This includes full access to our gym floor and a 30-minute consultation with one of our elite trainers."
    },
    {
      q: "What are your operating hours?",
      a: "We are open 24/7 for our Premium and Elite members. Regular membership hours are from 5:00 AM to 11:00 PM daily."
    },
    {
      q: "Do I need to bring my own towel and water?",
      a: "We provide complimentary premium towels and have high-quality alkaline water stations throughout the facility. You just need to bring your workout gear and determination!"
    },
    {
      q: "Are personal trainers included in the membership?",
      a: "While all members receive an initial orientation and workout plan, dedicated one-on-one personal training is available as an add-on service or included in our Elite membership tier."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => setFormStatus("success"), 1500);
  };

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
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
              <a 
                href="#contact"
                className="w-full sm:w-auto bg-gold text-black px-10 py-4 rounded-full text-lg font-bold uppercase tracking-widest hover:bg-gold-light transition-all shadow-[0_0_30px_rgba(212,175,55,0.3)] text-center"
              >
                Start Free Trial
              </a>
              <a 
                href="#membership"
                className="w-full sm:w-auto border border-white/20 hover:border-gold px-10 py-4 rounded-full text-lg font-bold uppercase tracking-widest transition-all text-center"
              >
                View Memberships
              </a>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <ChevronRight className="rotate-90 w-6 h-6" />
        </div>
      </section>

      {/* Trust Bar */}
      <motion.section 
        {...fadeIn}
        className="bg-white/5 border-y border-white/10 py-12"
      >
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
      </motion.section>

      {/* Services Grid */}
      <motion.section 
        {...fadeIn}
        id="services" 
        className="py-24 bg-black"
      >
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
      </motion.section>

      {/* About Us */}
      <motion.section 
        {...fadeIn}
        id="about" 
        className="py-24 bg-white/5 overflow-hidden"
      >
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
      </motion.section>

      {/* Membership Section */}
      <motion.section 
        {...fadeIn}
        id="membership"
        className="py-24 bg-black border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tighter">Membership Plans</h2>
            <div className="w-20 h-1 bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic",
                price: "₹1,999",
                period: "month",
                features: ["Access to Gym Floor", "Standard Equipment", "Locker Room Access", "1 Orientation Session"],
                popular: false
              },
              {
                name: "Premium",
                price: "₹3,499",
                period: "month",
                features: ["24/7 Gym Access", "All Group Classes", "Steam & Sauna", "Monthly Body Analysis", "Nutrition Guide"],
                popular: true
              },
              {
                name: "Elite",
                price: "₹5,999",
                period: "month",
                features: ["All Premium Features", "Personal Trainer (4 sessions)", "Private Locker", "Valet Parking", "Laundry Service"],
                popular: false
              }
            ].map((plan, idx) => (
              <div 
                key={idx} 
                className={`relative p-8 rounded-3xl border transition-all duration-500 hover:scale-105 ${plan.popular ? 'bg-gold/5 border-gold shadow-[0_0_40px_rgba(212,175,55,0.1)]' : 'bg-white/5 border-white/10'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-bold text-gold">{plan.price}</span>
                  <span className="text-white/40 text-sm">/{plan.period}</span>
                </div>
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-sm text-white/70">
                      <CheckCircle2 className="text-gold w-4 h-4 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href="#contact"
                  className={`block w-full py-4 rounded-xl font-bold uppercase tracking-widest text-center transition-all ${plan.popular ? 'bg-gold text-black hover:bg-gold-light' : 'border border-white/20 hover:border-gold hover:text-gold'}`}
                >
                  Choose Plan
                </a>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section 
        {...fadeIn}
        id="testimonials" 
        className="py-24 bg-black"
      >
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
      </motion.section>

      {/* FAQ Section */}
      <motion.section 
        {...fadeIn}
        id="faq"
        className="py-24 bg-black border-t border-white/5"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tighter">Common Questions</h2>
            <div className="w-20 h-1 bg-gold mx-auto" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="border border-white/10 rounded-2xl overflow-hidden transition-all duration-300"
                style={{ backgroundColor: openFaq === idx ? 'rgba(255,255,255,0.05)' : 'transparent' }}
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                >
                  <span className="text-lg font-bold uppercase tracking-tight">{faq.q}</span>
                  {openFaq === idx ? (
                    <Minus className="w-5 h-5 text-gold" />
                  ) : (
                    <Plus className="w-5 h-5 text-white/30" />
                  )}
                </button>
                <motion.div 
                  initial={false}
                  animate={{ height: openFaq === idx ? 'auto' : 0, opacity: openFaq === idx ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6 text-white/60 leading-relaxed">
                    {faq.a}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        {...fadeIn}
        id="contact" 
        className="py-24 bg-white/5"
      >
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
      </motion.section>

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
                <li><button onClick={() => setActiveModal('privacy')} className="hover:text-gold transition-colors text-left">Privacy Policy</button></li>
                <li><button onClick={() => setActiveModal('terms')} className="hover:text-gold transition-colors text-left">Terms of Service</button></li>
                <li><button onClick={() => setActiveModal('rules')} className="hover:text-gold transition-colors text-left">Membership Rules</button></li>
                <li><a href="#faq" className="hover:text-gold transition-colors">FAQs</a></li>
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
      <motion.a 
        href="https://wa.me/919876543210" 
        target="_blank" 
        rel="noopener noreferrer"
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] group flex items-center justify-center"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
        <span className="absolute right-full mr-4 bg-black/90 backdrop-blur-sm text-white px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none translate-x-4 group-hover:translate-x-0 border border-white/10">
          Chat with us
        </span>
        
        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none" />
      </motion.a>

      {/* Modals */}
      <Modal 
        isOpen={activeModal === 'privacy'} 
        onClose={() => setActiveModal(null)} 
        title="Privacy Policy"
      >
        <p>At PowerHouse Gym Indore, we are committed to protecting your personal information. We collect data such as your name, contact details, and health history to provide a safe and personalized fitness experience.</p>
        <p>Your data is stored securely and is never shared with third parties for marketing purposes. We use your information solely for membership management, billing, and ensuring your safety during workouts.</p>
        <p>By using our facilities, you consent to the collection and use of this information as outlined in this policy.</p>
      </Modal>

      <Modal 
        isOpen={activeModal === 'terms'} 
        onClose={() => setActiveModal(null)} 
        title="Terms of Service"
      >
        <p>Membership at PowerHouse Gym is subject to the following terms:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Members must be at least 18 years of age or have parental consent.</li>
          <li>Membership fees are non-refundable and must be paid in advance.</li>
          <li>PowerHouse Gym is not liable for any injuries sustained on the premises. Members exercise at their own risk.</li>
          <li>We reserve the right to terminate membership for violation of gym rules or misconduct.</li>
        </ul>
      </Modal>

      <Modal 
        isOpen={activeModal === 'rules'} 
        onClose={() => setActiveModal(null)} 
        title="Membership Rules"
      >
        <p>To ensure a premium experience for everyone, please follow these rules:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Proper athletic attire and clean indoor shoes are mandatory.</li>
          <li>Please re-rack all weights and equipment after use.</li>
          <li>Wipe down machines after use with the provided sanitizing wipes.</li>
          <li>Be respectful of other members; avoid excessive noise or dropping weights.</li>
          <li>Personal training by non-staff members is strictly prohibited.</li>
        </ul>
      </Modal>
    </div>
  );
}
