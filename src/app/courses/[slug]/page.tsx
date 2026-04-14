import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Users, Award } from "lucide-react";
import SubpageHero from "@/components/ui/SubpageHero";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { COURSES, LECTURERS } from "@/data/constants";

export function generateStaticParams() {
  return COURSES.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = COURSES.find((c) => c.slug === slug);
  if (!course) return { title: "Course Not Found" };
  return {
    title: course.title,
    description: course.description,
  };
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = COURSES.find((c) => c.slug === slug);
  if (!course) notFound();

  const relatedCourses = COURSES.filter(
    (c) => c.audience === course.audience && c.slug !== course.slug
  ).slice(0, 3);

  return (
    <main>
      <SubpageHero title={course.title} subtitle={course.description} />

      <SectionWrapper bgVariant="dark">
        <Link
          href="/courses"
          className="inline-flex items-center gap-2 text-text-secondary hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={16} /> Back to All Courses
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="text-sm font-mono text-accent-cyan bg-accent-cyan/10 rounded px-3 py-1">
                {course.code}
              </span>
              <span className="text-sm text-text-secondary bg-bg-elevated rounded-full px-3 py-1">
                {course.audience}
              </span>
              {course.popular && (
                <span className="text-sm font-semibold text-accent-orange bg-accent-orange/10 rounded-full px-3 py-1">
                  Most Popular
                </span>
              )}
            </div>

            <h2 className="text-2xl font-bold mb-6">Course Overview</h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              {course.description} This comprehensive program is designed to
              provide in-depth knowledge and practical skills that can be
              immediately applied in professional hockey settings. Our
              internationally certified curriculum covers both theoretical
              foundations and hands-on applications.
            </p>

            <h2 className="text-2xl font-bold mb-6">What You&apos;ll Learn</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                "Scientific approach to the subject matter",
                "Practical application in real hockey settings",
                "Performance measurement and tracking",
                "International best practices and standards",
                "Case studies from professional hockey",
                "Hands-on workshop exercises",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Award size={16} className="text-accent-cyan mt-1 flex-shrink-0" />
                  <span className="text-text-secondary text-sm">{item}</span>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold mb-6">Your Lecturers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {LECTURERS.map((lecturer) => (
                <Card key={lecturer.name} className="text-center p-4">
                  <h4 className="text-sm font-bold mb-1">{lecturer.name}</h4>
                  <p className="text-xs text-text-secondary">{lecturer.title}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-bg-card rounded-2xl border border-bg-elevated p-6 sticky top-24">
              <p className="text-sm text-text-secondary mb-2">Course Price</p>
              <p className="text-4xl font-display font-bold text-accent-orange mb-6">
                &euro;{course.price}
              </p>

              <div className="flex flex-col gap-4 mb-6">
                <div className="flex items-center gap-3 text-text-secondary text-sm">
                  <Clock size={16} className="text-accent-cyan" />
                  5-day intensive program
                </div>
                <div className="flex items-center gap-3 text-text-secondary text-sm">
                  <Users size={16} className="text-accent-cyan" />
                  Small group (max 15 participants)
                </div>
                <div className="flex items-center gap-3 text-text-secondary text-sm">
                  <Award size={16} className="text-accent-cyan" />
                  HDC Certificate included
                </div>
              </div>

              <Button href="/contact" className="w-full mb-3">
                Enroll Now
              </Button>
              <Button href="/contact" variant="secondary" className="w-full">
                Ask a Question
              </Button>
            </div>
          </div>
        </div>

        {/* Related courses */}
        {relatedCourses.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Related Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedCourses.map((rc) => (
                <Link key={rc.slug} href={`/courses/${rc.slug}`} className="group">
                  <Card>
                    <span className="text-xs font-mono text-accent-cyan">{rc.code}</span>
                    <h3 className="text-base font-bold mt-2 mb-2 group-hover:text-accent-cyan transition-colors">
                      {rc.title}
                    </h3>
                    <p className="text-sm text-text-secondary line-clamp-2">{rc.description}</p>
                    <p className="text-xl font-display font-bold text-accent-orange mt-4">
                      &euro;{rc.price}
                    </p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </SectionWrapper>
    </main>
  );
}
