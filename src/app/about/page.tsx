"use client";
import Image from "next/image";

export default function About() {
  return (
    <main>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Page Title */}
        <h1 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-gray-900">About Us</h1>

        {/* Profile Section */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-20">
          <div>
            <Image
              src="/images/ayman.jpg"
              alt="Lead Designer"
              width={400}
              height={500}
              className="rounded-lg shadow-xl object-cover w-full h-auto"
              priority
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-900">
              Lead Designer & Project Manager
            </h2>
            <p className="text-lg md:text-xl text-red-700 font-semibold mb-4 md:mb-6">
              AMEX Construction and Developments Limited
            </p>

            <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6 leading-relaxed">
              With a PhD in Environmental and Sustainability Management and over
              25 years of professional experience in architecture, design, and
              construction management, our lead designer brings unparalleled
              expertise to every project. The vision is to create spaces that
              combine aesthetic excellence with sustainable, practical design.
            </p>

            <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6 leading-relaxed">
              Currently serving as a Lecturer at GBS, our lead designer combines
              academic expertise with hands-on construction experience.
              Meticulous attention to detail, innovative problem-solving, and
              commitment to client satisfaction have made AMEX Construction the
              trusted choice for premium residential and commercial projects.
            </p>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              {`Every project reflects a personal vision—from initial concept through final execution. We don't just build spaces; we create environments where functionality meets elegance, where sustainability meets luxury, and where our clients' dreams become reality.`}
            </p>
          </div>
        </div>

        {/* Education & Qualifications */}
        <div className="bg-gray-50 p-6 md:p-12 rounded-lg mb-12 md:mb-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-gray-900">
            Education & Qualifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div>
              <h4 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-gray-900">
                Academic Credentials
              </h4>
              <ul className="space-y-3 md:space-y-4 text-gray-700">
                <li className="border-l-4 border-red-700 pl-3 md:pl-4">
                  <span className="font-semibold text-sm md:text-base">
                    Ph.D. in Environmental and Sustainability Management
                  </span>
                </li>
                <li className="border-l-4 border-red-700 pl-3 md:pl-4">
                  <span className="font-semibold text-sm md:text-base">
                    MSc in Construction Project Management
                  </span>
                </li>
                <li className="border-l-4 border-red-700 pl-3 md:pl-4">
                  <span className="font-semibold text-sm md:text-base">
                    BSc in Architecture Engineering
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-gray-900 mt-6 md:mt-0">
                Professional Memberships
              </h4>
              <ul className="space-y-3 md:space-y-4 text-gray-700">
                <li className="border-l-4 border-blue-900 pl-3 md:pl-4">
                  <span className="font-semibold text-sm md:text-base">MIEnvSc</span>
                  <p className="text-xs md:text-sm text-gray-600">
                    Institution of Environmental Sciences UK
                  </p>
                </li>
                <li className="border-l-4 border-blue-900 pl-3 md:pl-4">
                  <span className="font-semibold text-sm md:text-base">ACIAT</span>
                  <p className="text-xs md:text-sm text-gray-600">
                    Chartered Institute of Architectural Technologists UK
                  </p>
                </li>
                <li className="border-l-4 border-blue-900 pl-3 md:pl-4">
                  <span className="font-semibold text-sm md:text-base">PBRS & PVRS</span>
                  <p className="text-xs md:text-sm text-gray-600">
                    Pearl Qualified Professional
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Expertise Section */}
        <div className="mb-12 md:mb-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-gray-900">
            Core Expertise & Specializations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <div className="p-4 md:p-6 bg-blue-50 rounded-lg">
              <h4 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-gray-900">
                Design & Planning
              </h4>
              <ul className="space-y-2 md:space-y-3 text-gray-700 text-xs md:text-sm">
                <li>✓ Residential refurbishment design</li>
                <li>✓ Commercial project design</li>
                <li>✓ Space optimization & layout planning</li>
                <li>✓ Interior design & styling</li>
                <li>✓ 3D visualization & floor planning</li>
                <li>✓ Planning permissions & applications</li>
              </ul>
            </div>
            <div className="p-4 md:p-6 bg-red-50 rounded-lg">
              <h4 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-gray-900">
                Project Management
              </h4>
              <ul className="space-y-2 md:space-y-3 text-gray-700 text-xs md:text-sm">
                <li>✓ Full project oversight</li>
                <li>✓ Contractor coordination & tendering</li>
                <li>✓ Quality assurance & compliance</li>
                <li>✓ Budget & timeline management</li>
                <li>✓ Health & safety promotion</li>
                <li>✓ Building control liaison</li>
              </ul>
            </div>
            <div className="p-4 md:p-6 bg-green-50 rounded-lg">
              <h4 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-gray-900">
                Sustainability & Innovation
              </h4>
              <ul className="space-y-2 md:space-y-3 text-gray-700 text-xs md:text-sm">
                <li>✓ Sustainable construction practices</li>
                <li>✓ Green building certification</li>
                <li>✓ Environmental management systems</li>
                <li>✓ Energy-efficient design solutions</li>
                <li>✓ BIM & advanced technologies</li>
                <li>✓ Research & development</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-6 md:p-12 rounded-lg mb-12 md:mb-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
            Technical Skills & Software Proficiency
          </h3>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div>
              <p className="mb-3 md:mb-4 text-blue-100 text-sm md:text-base">
                Design & Visualization Tools:
              </p>
              <p className="text-white font-semibold text-sm md:text-base">
                AutoCAD 2D & 3D • 3D MAX • BIM • Adobe Photoshop • Architectural
                Visualization
              </p>
            </div>
            <div>
              <p className="mb-3 md:mb-4 text-blue-100 text-sm md:text-base">Business & Analysis Tools:</p>
              <p className="text-white font-semibold text-sm md:text-base">
                Microsoft Office Suite (Word, Excel, PowerPoint) • SPSS •
                Project Management Software
              </p>
            </div>
          </div>
        </div>

        {/* Company Mission */}
        <div className="text-center bg-blue-900 text-white p-6 md:p-12 rounded-lg">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Our Mission</h3>
          <p className="text-base md:text-xl leading-relaxed max-w-3xl mx-auto">
            {`At AMEX Construction and Developments Limited, we believe every space has untapped potential. Our mission is to unlock that potential through expertly informed design, meticulous craftsmanship, sustainable practices, and personalized service. We transform buildings into homes and workspaces that reflect our clients' values and aspirations.`}
          </p>
        </div>
      </div>
    </main>
  );
}
