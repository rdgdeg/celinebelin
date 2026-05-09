import { useState } from "react";
import { Phone, Mail, MapPin, MapPinned, Facebook } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/SectionHeader";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 bg-cream-alt">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-stretch">
          {/* Left: Form — même hauteur que la carte droite */}
          <div className="flex min-h-0 flex-col lg:h-full">
            <ScrollReveal>
              <SectionHeader
                label="Me contacter"
                title="Prenons contact"
                align="left"
                className="mb-8 lg:mb-10"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="flex min-h-0 flex-1 flex-col">
              <form
                onSubmit={handleSubmit}
                className="flex min-h-0 flex-1 flex-col gap-5"
              >
                <div className="grid shrink-0 gap-5 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Nom *"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl border border-warm-border bg-white text-warm-text placeholder:text-warm-text-light focus:outline-none focus:border-forest focus:ring-2 focus:ring-forest/20 transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Email *"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl border border-warm-border bg-white text-warm-text placeholder:text-warm-text-light focus:outline-none focus:border-forest focus:ring-2 focus:ring-forest/20 transition-all"
                  />
                </div>

                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full shrink-0 px-5 py-3.5 rounded-xl border border-warm-border bg-white text-warm-text focus:outline-none focus:border-forest focus:ring-2 focus:ring-forest/20 transition-all appearance-none cursor-pointer"
                >
                  <option value="">Sujet de votre message</option>
                  <option value="rdv">Demande de rendez-vous</option>
                  <option value="psy">Question psychologie</option>
                  <option value="animaux">Question soins animaux</option>
                  <option value="autre">Autre</option>
                </select>

                <textarea
                  placeholder="Votre message..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-[140px] w-full flex-1 resize-none rounded-xl border border-warm-border bg-white px-5 py-3.5 text-warm-text placeholder:text-warm-text-light focus:outline-none focus:border-forest focus:ring-2 focus:ring-forest/20 transition-all lg:min-h-[180px]"
                />

                <button
                  type="submit"
                  className="mt-auto inline-flex shrink-0 items-center self-start px-8 py-3.5 bg-forest text-sm font-semibold text-white rounded-full hover:bg-forest-light hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(45,106,79,0.28)] active:bg-forest-dark active:translate-y-0 transition-all duration-300"
                >
                  {submitted ? "Message envoyé !" : "Envoyer mon message"}
                </button>
              </form>
            </ScrollReveal>
          </div>

          {/* Right: Info */}
          <ScrollReveal direction="right" delay={0.2} className="flex min-h-0 lg:h-full">
            <div className="flex h-full min-h-[280px] w-full flex-col rounded-2xl border border-warm-border/60 bg-white p-8 shadow-[0_6px_28px_rgba(27,67,50,0.07)] lg:min-h-0 lg:p-10">
              <div className="flex flex-col gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-forest/10 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-forest" />
                  </div>
                  <div>
                    <p className="font-semibold text-warm-text">0479/46.24.29</p>
                    <p className="text-sm text-warm-text-secondary">
                      Du lundi au vendredi, 8h-19h
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-forest/10 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-forest" />
                  </div>
                  <div>
                    <p className="font-semibold text-warm-text">celine.belin@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-forest/10 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-forest" />
                  </div>
                  <div>
                    <p className="font-semibold text-warm-text">Le Trait d'Union</p>
                    <p className="text-sm text-warm-text-secondary">
                      Rue de la Station 34/1, 7830 Silly
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-forest/10 flex items-center justify-center shrink-0">
                    <MapPinned size={18} className="text-forest" />
                  </div>
                  <div>
                    <p className="font-semibold text-warm-text">Autres villes</p>
                    <p className="text-sm text-warm-text-secondary">
                      Mons · Péruwelz · Bernissart
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-forest/10 flex items-center justify-center shrink-0">
                    <Facebook size={18} className="text-forest" />
                  </div>
                  <div>
                    <a
                      href="https://www.facebook.com/C%C3%A9line-Belin-Psychologue-Coach-de-vie-253918965132820/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-warm-text hover:text-forest transition-colors"
                    >
                      Céline Belin Psychologue
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* CTA Banner */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 bg-gradient-to-r from-forest-dark to-forest rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_12px_40px_rgba(27,67,50,0.25)]">
            <p className="font-display text-xl md:text-2xl text-white text-center md:text-left">
              Prêt à commencer votre parcours ?
            </p>
            <a
              href="https://www.doctena.be/fr/specialite/psychologue/celine-belin-1886103"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white text-sm font-semibold rounded-full hover:bg-white hover:text-forest-dark transition-all duration-300 whitespace-nowrap"
            >
              Réserver sur Doctena
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
