import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <main>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-gray-900">
              Get in Touch
            </h1>
            <p className="text-base md:text-xl text-gray-600 mb-8 md:mb-12">
              {`Ready to start your next project? Reach out to the AMEX team for a free consultation and project quote.`}
            </p>

            <div className="space-y-6 md:space-y-8">
              <div>
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
                  Email
                </h3>
                <a
                  href="mailto:Eamonn@amexltd.co.uk"
                  className="text-red-700 hover:text-red-800 text-base md:text-lg break-all"
                >
                  Eamonn@amexltd.co.uk
                </a>
              </div>

              <div>
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
                  Phone
                </h3>
                <a
                  href="tel:+447449397233"
                  className="text-red-700 hover:text-red-800 text-base md:text-lg"
                >
                  +44 7449 397233
                </a>
              </div>

              <div>
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
                  Location
                </h3>
                <p className="text-gray-700 text-sm md:text-base">Manchester, UK</p>
              </div>

              <div className="bg-blue-50 p-4 md:p-6 rounded-lg">
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
                  Typical Response Time
                </h3>
                <p className="text-gray-700 text-sm md:text-base">
                  {`We'll respond to your inquiry within 24 hours during business days.`}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
