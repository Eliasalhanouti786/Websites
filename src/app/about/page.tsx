"use client";
import Image from "next/image";

export default function About() {
  return (
    <main>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Page Title */}
        <h1 className="text-5xl font-bold mb-12 text-gray-900">About Us</h1>

        {/* Eamonn Profile Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <Image
              src="/images/ayman.jpg"
              alt="Eamonn"
              width={400}
              height={500}
              className="rounded-lg shadow-xl object-cover w-full h-auto"
              priority
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Eamonn</h2>
            <p className="text-xl text-red-700 font-semibold mb-6">
              Lead Designer & Project Manager, AMEX Construction and
              Developments Limited
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              With a PhD in Environmental Management & Sustainability and over
              25 years of professional experience in architecture, design, and
              construction management, Eamonn brings unparalleled expertise to
              every project. His vision is to create spaces that combine
              aesthetic excellence with sustainable, practical design.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {`Eamonn's career spans prestigious international positions including Senior Architect & Design Team Leader at Arenco Consultants in the UAE, and currently as Lecturer in Construction Management at GBS Manchester and Bath Spa University. His meticulous attention to detail, innovative problem-solving approach, and commitment to client satisfaction have made AMEX Construction the trusted choice for premium residential and commercial projects.`}
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              {`Every project reflects his personal vision—from initial concept through final execution. He doesn't just build spaces; he creates environments where functionality meets elegance, where sustainability meets luxury, and where his clients' dreams become reality.`}
            </p>
          </div>
        </div>

        {/* Education & Qualifications */}
        <div className="bg-gray-50 p-12 rounded-lg mb-20">
          <h3 className="text-3xl font-bold mb-8 text-gray-900">
            Education & Qualifications
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-6 text-gray-900">
                Academic Credentials
              </h4>
              <ul className="space-y-4 text-gray-700">
                <li className="border-l-4 border-red-700 pl-4">
                  <span className="font-semibold">
                    Ph.D. in Environmental Management & Sustainability
                  </span>
                  <p className="text-sm text-gray-600">
                    University of Greater Manchester, 2023
                  </p>
                </li>
                <li className="border-l-4 border-red-700 pl-4">
                  <span className="font-semibold">
                    MSc in Construction Project Management
                  </span>
                  <p className="text-sm text-gray-600">
                    University of Greater Manchester, 2017
                  </p>
                </li>
                <li className="border-l-4 border-red-700 pl-4">
                  <span className="font-semibold">
                    BSc in Architecture Engineering
                  </span>
                  <p className="text-sm text-gray-600">
                    University of Technology – Iraq, 1999
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-6 text-gray-900">
                Professional Memberships
              </h4>
              <ul className="space-y-4 text-gray-700">
                <li className="border-l-4 border-blue-900 pl-4">
                  <span className="font-semibold">MIEnvSc</span>
                  <p className="text-sm text-gray-600">
                    Institution of Environmental Sciences UK (Member No. 78262)
                  </p>
                </li>
                <li className="border-l-4 border-blue-900 pl-4">
                  <span className="font-semibold">ACIAT</span>
                  <p className="text-sm text-gray-600">
                    Chartered Institute of Architectural Technologists UK
                    (Member No. 031238)
                  </p>
                </li>
                <li className="border-l-4 border-blue-900 pl-4">
                  <span className="font-semibold">PBRS & PVRS</span>
                  <p className="text-sm text-gray-600">
                    Pearl Qualified Professional - Estidama Abu Dhabi Green
                    Building Rating System
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Expertise Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-8 text-gray-900">
            Core Expertise & Specializations
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-blue-50 rounded-lg">
              <h4 className="text-xl font-semibold mb-4 text-gray-900">
                Design & Planning
              </h4>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li>✓ Residential refurbishment design</li>
                <li>✓ Commercial project design</li>
                <li>✓ Space optimization & layout planning</li>
                <li>✓ Interior design & styling</li>
                <li>✓ 3D visualization & floor planning</li>
                <li>✓ Planning permissions & applications</li>
              </ul>
            </div>
            <div className="p-6 bg-red-50 rounded-lg">
              <h4 className="text-xl font-semibold mb-4 text-gray-900">
                Project Management
              </h4>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li>✓ Full project oversight</li>
                <li>✓ Contractor coordination & tendering</li>
                <li>✓ Quality assurance & compliance</li>
                <li>✓ Budget & timeline management</li>
                <li>✓ Health & safety promotion</li>
                <li>✓ Building control liaison</li>
              </ul>
            </div>
            <div className="p-6 bg-green-50 rounded-lg">
              <h4 className="text-xl font-semibold mb-4 text-gray-900">
                Sustainability & Innovation
              </h4>
              <ul className="space-y-3 text-gray-700 text-sm">
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
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-12 rounded-lg mb-20">
          <h3 className="text-3xl font-bold mb-8">
            Technical Skills & Software Proficiency
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4 text-blue-100">
                Design & Visualization Tools:
              </p>
              <p className="text-white font-semibold">
                AutoCAD 2D & 3D • 3D MAX • BIM • Adobe Photoshop • Architectural
                Visualization
              </p>
            </div>
            <div>
              <p className="mb-4 text-blue-100">Business & Analysis Tools:</p>
              <p className="text-white font-semibold">
                Microsoft Office Suite (Word, Excel, PowerPoint) • SPSS •
                Project Management Software
              </p>
            </div>
          </div>
        </div>

        {/* Experience Highlight */}
        <div className="border-l-4 border-red-700 pl-8 mb-20">
          <h3 className="text-3xl font-bold mb-6 text-gray-900">
            Professional Experience
          </h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-gray-900">
                Current Positions
              </h4>
              <p className="text-gray-700 mt-2">
                Lecturer in Construction Management at GBS Manchester & Bath Spa
                University (2024-present) • VHT Lecturer at School of
                Engineering, University of Greater Manchester (2023-present)
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-900">
                International Experience
              </h4>
              <p className="text-gray-700 mt-2">
                Senior Architect & Design Team Leader at Arenco Consultants, UAE
                (2005-2013) - managing multi-commercial and residential projects
                across Abu Dhabi and Gulf region • Architect Designer at Euro
                Engineering Consultancy, UAE (2002-2005)
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-900">
                Research & Publications
              </h4>
              <p className="text-gray-700 mt-2">
                Published researcher on sustainable construction and green
                building initiatives in the Gulf region • Official Reviewer for
                Journal of Civil, Construction and Environmental Engineering •
                Invited speaker at international conferences including ICSEWEN
                2023 in Doha
              </p>
            </div>
          </div>
        </div>

        {/* Company Mission */}
        <div className="text-center bg-blue-900 text-white p-12 rounded-lg">
          <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto">
            {`At AMEX Construction and Developments Limited, we believe every space has untapped potential. Led by Eamonn's vision and expertise, our mission is to unlock that potential through expertly informed design, meticulous craftsmanship, sustainable practices, and personalized service. We transform buildings into homes and workspaces that reflect our clients' values and aspirations.`}
          </p>
        </div>
      </div>
    </main>
  );
}
