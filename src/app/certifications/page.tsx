import { Metadata } from "next";
import {
  BookOpen,
  GraduationCap,
  ClipboardCheck,
  Award,
  CheckCircle,
  Clock,
  Users,
  Globe,
  ShieldCheck,
  FileText,
} from "lucide-react";
import SubpageHero from "@/components/ui/SubpageHero";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedSection from "@/components/animations/AnimatedSection";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { CERTIFICATION_STEPS, COURSES } from "@/data/constants";

export const metadata: Metadata = {
  title: "Certifications — HDC Europe",
  description:
    "Earn your internationally recognized HDC certification. Structured paths for coaches, players, and hockey centers across Europe.",
};

const stepIcons = [BookOpen, GraduationCap, ClipboardCheck, Award];

const benefits = [
  {
    icon: Globe,
    title: "International Recognition",
    description:
      "HDC certification is backed by HDTS Group methodology, active in 50+ hockey centers across 20 countries.",
  },
  {
    icon: ShieldCheck,
    title: "Science-Driven Standards",
    description:
      "Every program is developed by Olympic-level sports scientists and university professors.",
  },
  {
    icon: Users,
    title: "Professional Network",
    description:
      "Join a community of certified coaches and professionals across 7+ European countries.",
  },
  {
    icon: FileText,
    title: "Practical Application",
    description:
      "Theory combined with hands-on workshops — leave with actionable protocols for immediate use.",
  },
];

const requirements = [
  "Minimum 18 years of age",
  "Active involvement in hockey (coaching, playing, or administration)",
  "Basic understanding of sports science principles",
  "Commitment to complete the full program duration",
  "Willingness to participate in practical assessments",
];

const coachCourses = COURSES.filter((c) => c.audience === "Coaches");
const playerCourses = COURSES.filter((c) => c.audience === "Players");

export default function CertificationsPage() {
  return (
    <main>
      <SubpageHero
        title="Your Path to Certification"
        subtitle="A clear, structured journey to becoming a certified hockey professional backed by HDTS Group methodology"
      />

      {/* Certification Steps */}
      <SectionWrapper bgVariant="dark">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            How It Works
          </h2>
          <p className="text-text-secondary text-center max-w-2xl mx-auto mb-12">
            Four steps from enrollment to certification
          </p>
        </AnimatedSection>

        <div className="relative">
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-bg-elevated">
            <div className="h-full bg-gradient-to-r from-brand-blue to-accent-cyan w-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {CERTIFICATION_STEPS.map((step, i) => {
              const Icon = stepIcons[i];
              return (
                <AnimatedSection key={step.step} delay={i * 0.15}>
                  <div className="text-center relative">
                    <div className="relative z-10 w-24 h-24 mx-auto mb-6 rounded-full bg-bg-card border-2 border-accent-cyan/30 flex items-center justify-center">
                      <Icon size={32} className="text-accent-cyan" />
                    </div>
                    <span className="text-xs font-display font-bold text-accent-cyan mb-2 block">
                      Step {step.step}
                    </span>
                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-text-secondary text-sm">
                      {step.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* Benefits */}
      <SectionWrapper bgVariant="card">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Why Get Certified?
          </h2>
          <p className="text-text-secondary text-center max-w-2xl mx-auto mb-12">
            What HDC certification means for your career
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, i) => (
            <AnimatedSection key={benefit.title} delay={i * 0.1}>
              <Card className="flex gap-4 p-6">
                <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 flex items-center justify-center flex-shrink-0">
                  <benefit.icon size={24} className="text-accent-cyan" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-text-secondary text-sm">
                    {benefit.description}
                  </p>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* Certification Paths */}
      <SectionWrapper bgVariant="dark">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Certification Paths
          </h2>
          <p className="text-text-secondary text-center max-w-2xl mx-auto mb-12">
            Choose the path that matches your role in hockey
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Coaches Path */}
          <AnimatedSection>
            <div className="bg-bg-card rounded-2xl border border-bg-elevated overflow-hidden">
              <div className="bg-gradient-to-r from-brand-blue/30 to-accent-cyan/10 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <GraduationCap size={24} className="text-accent-cyan" />
                  <h3 className="text-xl font-bold">Coach Certification</h3>
                </div>
                <p className="text-text-secondary text-sm">
                  6 specialized courses covering the complete coaching science
                  spectrum
                </p>
              </div>
              <div className="p-6">
                <div className="space-y-3 mb-6">
                  {coachCourses.map((course) => (
                    <div
                      key={course.code}
                      className="flex items-center justify-between py-2 border-b border-bg-elevated last:border-0"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-accent-cyan bg-accent-cyan/10 rounded px-2 py-0.5">
                          {course.code}
                        </span>
                        <span className="text-sm">{course.title}</span>
                      </div>
                      <span className="text-sm font-bold text-accent-orange">
                        &euro;{course.price}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-text-secondary">
                    <Clock size={14} className="inline mr-1" /> 5-day per course
                  </div>
                  <Button href="/courses?audience=Coaches" size="sm">
                    View Coach Courses
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Players Path */}
          <AnimatedSection delay={0.15}>
            <div className="bg-bg-card rounded-2xl border border-bg-elevated overflow-hidden">
              <div className="bg-gradient-to-r from-accent-cyan/20 to-brand-blue/10 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Users size={24} className="text-accent-cyan" />
                  <h3 className="text-xl font-bold">Player Programs</h3>
                </div>
                <p className="text-text-secondary text-sm">
                  Evidence-based training and nutrition for competitive hockey
                  players
                </p>
              </div>
              <div className="p-6">
                <div className="space-y-3 mb-6">
                  {playerCourses.map((course) => (
                    <div
                      key={course.code}
                      className="flex items-center justify-between py-2 border-b border-bg-elevated last:border-0"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-accent-cyan bg-accent-cyan/10 rounded px-2 py-0.5">
                          {course.code}
                        </span>
                        <span className="text-sm">{course.title}</span>
                      </div>
                      <span className="text-sm font-bold text-accent-orange">
                        &euro;{course.price}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="bg-bg-elevated/50 rounded-xl p-4 mb-6">
                  <p className="text-sm text-text-secondary">
                    <span className="text-accent-cyan font-semibold">
                      Coming Soon:
                    </span>{" "}
                    Programs for Hockey Centers and Parents are currently in
                    development.
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-text-secondary">
                    <Clock size={14} className="inline mr-1" /> Self-paced
                  </div>
                  <Button href="/courses?audience=Players" size="sm">
                    View Player Courses
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* Requirements */}
      <SectionWrapper bgVariant="card">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Requirements
            </h2>
            <p className="text-text-secondary mb-8">
              Our certification programs are open to anyone actively involved in
              hockey who meets these basic requirements:
            </p>
            <div className="space-y-4">
              {requirements.map((req) => (
                <div key={req} className="flex items-start gap-3">
                  <CheckCircle
                    size={20}
                    className="text-accent-cyan mt-0.5 flex-shrink-0"
                  />
                  <span className="text-text-secondary text-sm">{req}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-gradient-to-br from-brand-blue/20 to-accent-cyan/10 rounded-2xl p-10 border border-brand-blue/20">
              <h3 className="text-2xl font-bold mb-4">Assessment Format</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FileText
                    size={20}
                    className="text-accent-cyan mt-0.5 flex-shrink-0"
                  />
                  <div>
                    <p className="font-semibold text-sm">Theory Examination</p>
                    <p className="text-text-secondary text-sm">
                      Written test covering course materials and sports science
                      principles
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ClipboardCheck
                    size={20}
                    className="text-accent-cyan mt-0.5 flex-shrink-0"
                  />
                  <div>
                    <p className="font-semibold text-sm">
                      Practical Assessment
                    </p>
                    <p className="text-text-secondary text-sm">
                      Demonstration of skills in real training scenarios with
                      expert evaluation
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award
                    size={20}
                    className="text-accent-cyan mt-0.5 flex-shrink-0"
                  />
                  <div>
                    <p className="font-semibold text-sm">HDC Certificate</p>
                    <p className="text-text-secondary text-sm">
                      Upon passing both components, receive your official HDC
                      certification
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper bgVariant="dark">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Certified?
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto mb-8">
              Choose your certification path and join hockey professionals
              across 7+ European countries who trust HDC methodology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/courses" size="lg">
                Browse All Courses
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Ask a Question
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </SectionWrapper>
    </main>
  );
}
