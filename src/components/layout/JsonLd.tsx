import { COURSES, CONTACT_INFO } from "@/data/constants";

function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "HDC Europe",
    alternateName: "Hockey Development Center Education",
    url: "https://eduprosport.com",
    logo: "https://eduprosport.com/images/logo/logo_hdceurope_header.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: CONTACT_INFO.phone,
      contactType: "customer service",
      email: CONTACT_INFO.email,
      areaServed: "Europe",
      availableLanguage: "English",
    },
    sameAs: [CONTACT_INFO.social.facebook, CONTACT_INFO.social.youtube],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bratislava",
      addressCountry: "SK",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function CoursesJsonLd() {
  const data = COURSES.map((course) => ({
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description,
    provider: {
      "@type": "Organization",
      name: "HDC Europe",
      url: "https://eduprosport.com",
    },
    offers: {
      "@type": "Offer",
      price: course.price,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
    },
    url: `https://eduprosport.com/courses/${course.slug}`,
  }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function JsonLd() {
  return (
    <>
      <OrganizationJsonLd />
      <CoursesJsonLd />
    </>
  );
}
