'use client';

import Image from 'next/image';

export default function Portfolio() {
  const projectSections = [
    {
      title: "Modern Kitchens & Bathrooms",
      description: "Contemporary kitchen and bathroom designs with premium finishes",
      projects: [
        { src: "/images/project-01-marble-kitchen.jpg", alt: "Modern Marble Kitchen" },
        { src: "/images/project-08-luxury-kitchen.jpg", alt: "Luxury Kitchen Design" },
        { src: "/images/project-09-galley-kitchen.jpg", alt: "Galley Kitchen" },
        { src: "/images/project-07-kitchen-bathroom.jpg", alt: "Kitchen & Bathroom" },
        { src: "/images/project-15-kitchen-design.jpg", alt: "Premium Kitchen" },
        { src: "/images/project-21-kitchen-grey.jpg", alt: "Grey Kitchen Design" },
        { src: "/images/project-22-kitchen-white.jpg", alt: "White Kitchen" },
        { src: "/images/project-23-modern-kitchen.jpg", alt: "Modern Kitchen" },
        { src: "/images/project-25-kitchen-island.jpg", alt: "Kitchen Island Design" },
        { src: "/images/project-28-kitchen-grey2.jpg", alt: "Grey Kitchen Suite" },
        { src: "/images/project-34-kitchen-chef.jpg", alt: "Chef's Kitchen" },
        { src: "/images/project-38-kitchen-dining.jpg", alt: "Kitchen & Dining" },
        { src: "/images/project-41-kitchen-marble.jpg", alt: "Marble Kitchen" },
        { src: "/images/project-49-kitchen-premium.jpg", alt: "Premium Kitchen Suite" },
      ]
    },
    {
      title: "Extensions & Open Plan Living",
      description: "Spacious extensions with seamless indoor-outdoor living",
      projects: [
        { src: "/images/project-04-glass-doors.jpg", alt: "Glass Door Extension" },
        { src: "/images/project-06-modern-extension.jpg", alt: "Modern Extension" },
        { src: "/images/project-11-open-plan-extension.jpg", alt: "Open Plan Extension" },
        { src: "/images/project-12-extension-exterior.jpg", alt: "Extension Exterior" },
        { src: "/images/project-13-brick-extension.jpg", alt: "Brick Extension" },
        { src: "/images/project-17-extension-interior.jpg", alt: "Extension Interior" },
        { src: "/images/project-18-extension-interior2.jpg", alt: "Extension Interior 2" },
        { src: "/images/project-19-glass-sliding.jpg", alt: "Glass Sliding Doors" },
        { src: "/images/project-20-open-plan-glass.jpg", alt: "Open Plan with Glass" },
        { src: "/images/project-27-open-plan-living.jpg", alt: "Open Plan Living" },
        { src: "/images/project-36-open-plan.jpg", alt: "Contemporary Open Plan" },
        { src: "/images/project-37-extension-interior.jpg", alt: "Premium Extension" },
        { src: "/images/project-39-modern-extension.jpg", alt: "Modern Extension Design" },
        { src: "/images/project-48-extension-large.jpg", alt: "Large Extension Project" },
      ]
    },
    {
      title: "Entertainment & Living Spaces",
      description: "Premium entertainment rooms and luxury living areas",
      projects: [
        { src: "/images/project-02-entertainment-room.jpg", alt: "Entertainment Room" },
        { src: "/images/project-03-entertainment-media.jpg", alt: "Media Room" },
        { src: "/images/project-10-dining-space.jpg", alt: "Dining Space" },
        { src: "/images/project-14-dining-area.jpg", alt: "Dining Area" },
        { src: "/images/project-32-entertainment-space.jpg", alt: "Entertainment Space" },
        { src: "/images/project-33-kitchen-living.jpg", alt: "Kitchen Living Area" },
        { src: "/images/project-45-open-plan-dining.jpg", alt: "Open Plan Dining" },
        { src: "/images/project-50-living-space.jpg", alt: "Living Space Design" },
      ]
    },
    {
      title: "Solar & Sustainable Solutions",
      description: "Energy-efficient installations and sustainable design",
      projects: [
        { src: "/images/project-05-solar-panels-roof.jpg", alt: "Solar Panel Installation" },
        { src: "/images/project-29-extension-solar.jpg", alt: "Solar on Extension" },
        { src: "/images/project-43-solar-panels.jpg", alt: "Solar Panels" },
        { src: "/images/project-44-solar-aerial.jpg", alt: "Aerial Solar View" },
        { src: "/images/project-47-solar-panels2.jpg", alt: "Solar Panel Array" },
      ]
    },
    {
      title: "Full House Refurbishments",
      description: "Complete renovations and modernization projects",
      projects: [
        { src: "/images/project-24-kitchen-design.jpg", alt: "Full Refurbishment Kitchen" },
        { src: "/images/project-26-kitchen-modern2.jpg", alt: "Modern Refurb Kitchen" },
        { src: "/images/project-30-kitchen-sink.jpg", alt: "Kitchen Workspace" },
        { src: "/images/project-31-stairs.jpg", alt: "Stair Refurbishment" },
        { src: "/images/project-35-extension-exterior.jpg", alt: "Refurb Exterior" },
        { src: "/images/project-40-kitchen-white2.jpg", alt: "White Kitchen Refurb" },
        { src: "/images/project-42-kitchen-contemporary.jpg", alt: "Contemporary Refurb" },
        { src: "/images/project-46-kitchen-narrow.jpg", alt: "Kitchen Space Planning" },
      ]
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-gray-900 to-red-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Our Portfolio</h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Browse our extensive collection of completed projects showcasing our expertise in design, refurbishment, extensions, and sustainable solutions.
          </p>
        </div>
      </section>

      {/* Project Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {projectSections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                {/* Section Header */}
                <div className="mb-12">
                  <h2 className="text-4xl font-black text-gray-900 mb-3">{section.title}</h2>
                  <p className="text-xl text-gray-600">{section.description}</p>
                  <div className="w-20 h-1 bg-red-700 mt-4"></div>
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {section.projects.map((project, projectIdx) => (
                    <div
                      key={projectIdx}
                      className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer bg-gray-100"
                    >
                      <div className="relative w-full h-64 md:h-72">
                        <Image
                          src={project.src}
                          alt={project.alt}
                          fill
                          className="object-cover group-hover:brightness-110 transition-all duration-300"
                        />
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-start p-4">
                          <p className="text-white font-semibold text-sm">{project.alt}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Inspired by What You See?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Schedule a consultation to discuss your next project
          </p>
          <a
            href="/contact"
            className="bg-red-700 hover:bg-red-800 text-white px-10 py-4 rounded-lg font-bold transition duration-300 transform hover:scale-105 inline-block shadow-lg"
          >
            Get Your Free Consultation
          </a>
        </div>
      </section>
    </main>
  );
}
