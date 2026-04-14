"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import SubpageHero from "@/components/ui/SubpageHero";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { CONTACT_INFO } from "@/data/constants";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  subject: z.enum(["course-inquiry", "certification", "partnership", "other"], {
    message: "Please select a subject",
  }),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const inputStyles =
  "w-full px-4 py-3 rounded-xl bg-bg-elevated border border-white/10 text-white placeholder:text-text-secondary focus:outline-none focus:border-accent-cyan/50 transition-colors";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Form submitted:", data);
    setIsSubmitted(true);
  };

  return (
    <main>
      <SubpageHero
        title="Get In Touch"
        subtitle="Have questions about our courses or certifications? We're here to help."
      />

      <SectionWrapper bgVariant="dark">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-bg-card rounded-2xl border border-success/30 p-12 text-center"
                >
                  <CheckCircle size={64} className="text-success mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-3">Message Sent!</h3>
                  <p className="text-text-secondary">
                    Thank you for reaching out. We&apos;ll get back to you within 24
                    hours.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <input
                        {...register("name")}
                        placeholder="Your full name"
                        className={inputStyles}
                      />
                      {errors.name && (
                        <p className="text-red-400 text-xs mt-1">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="your@email.com"
                        className={inputStyles}
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Phone
                      </label>
                      <input
                        {...register("phone")}
                        placeholder="+421..."
                        className={inputStyles}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Subject *
                      </label>
                      <select
                        {...register("subject")}
                        className={`${inputStyles} appearance-none`}
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select a subject
                        </option>
                        <option value="course-inquiry">Course Inquiry</option>
                        <option value="certification">Certification</option>
                        <option value="partnership">Partnership</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.subject && (
                        <p className="text-red-400 text-xs mt-1">
                          {errors.subject.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      {...register("message")}
                      rows={5}
                      placeholder="Tell us about your needs..."
                      className={`${inputStyles} resize-none`}
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button type="submit" size="lg">
                    Send Message
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Contact info sidebar */}
          <div className="lg:col-span-2">
            <div className="bg-bg-card rounded-2xl border border-bg-elevated p-8">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-center gap-4 text-text-secondary hover:text-white transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-brand-blue/20 flex items-center justify-center">
                    <Phone size={18} className="text-accent-cyan" />
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary">Phone</p>
                    <p className="text-white font-medium">{CONTACT_INFO.phone}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-4 text-text-secondary hover:text-white transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-brand-blue/20 flex items-center justify-center">
                    <Mail size={18} className="text-accent-cyan" />
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary">Email</p>
                    <p className="text-white font-medium">{CONTACT_INFO.email}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-text-secondary">
                  <div className="w-10 h-10 rounded-full bg-brand-blue/20 flex items-center justify-center">
                    <MapPin size={18} className="text-accent-cyan" />
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary">Address</p>
                    <p className="text-white font-medium">
                      {CONTACT_INFO.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-8 rounded-xl overflow-hidden border border-bg-elevated">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d85098.77521738982!2d17.0515!3d48.1486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c894e0c0e3c9b%3A0x400f7d1c6978bd0!2sBratislava!5e0!3m2!1sen!2ssk!4v1700000000000!5m2!1sen!2ssk"
                  width="100%"
                  height="200"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="HDC Europe location"
                />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
