import Hero from "@/components/sections/Hero";
import SocialProofMarquee from "@/components/sections/SocialProofMarquee";
import ValueProposition from "@/components/sections/ValueProposition";
import CourseCategories from "@/components/sections/CourseCategories";
import FeaturedCourses from "@/components/sections/FeaturedCourses";
import Lecturers from "@/components/sections/Lecturers";
import Certifications from "@/components/sections/Certifications";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <main>
      <Hero />
      <SocialProofMarquee />
      <ValueProposition />
      <CourseCategories />
      <FeaturedCourses />
      <Lecturers />
      <Certifications />
      <Testimonials />
      <CTASection />
    </main>
  );
}
