import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-amber-50 to-orange-50 border-t border-amber-200">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* ================= About Us ================= */}
          <div>
            {/* Title: Change to your project's "About Us" */}
            <h3 className="text-lg font-semibold text-amber-800 mb-4">
              {/* About Us */}
            </h3>
            <p className="text-gray-600">
              {/* Fill in your "About Us" introduction here, for example: Committed to xxx, making xxx more xxx */}
            </p>
          </div>

          {/* ================= Contact Information ================= */}
          <div>
            {/* Title: Contact Information */}
            <h3 className="text-lg font-semibold text-amber-800 mb-4">
              {/* Contact Information */}
            </h3>
            <div className="text-gray-600 space-y-2">
              <p>
                {/* Address: XXX Street, XXX District, XXX City, XXX Province */}
              </p>
              <p>
                {/* Phone: 010-XXXXXXX */}
              </p>
              <p>
                {/* Email: info@example.com */}
              </p>
            </div>
          </div>

          {/* ================= Business Hours / Other Information / Can be deleted ================= */}
          <div>
            {/* Title: Can be changed to "Business Hours" or "Service Hours" */}
            <h3 className="text-lg font-semibold text-amber-800 mb-4">
              {/* Business Hours */}
            </h3>
            <div className="text-gray-600 space-y-2">
              <p>
                {/* Monday to Friday: 9:00-18:00 */}
              </p>
              <p>
                {/* Please check announcements for weekends and public holidays */}
              </p>
              <p>
                {/* Other notes, such as "Advance booking required" */}
              </p>
            </div>
          </div>
        </div>

        {/* ================= Copyright Section ================= */}
        <div className="mt-8 pt-8 border-t border-amber-200 text-center text-gray-600">
          <p>
            {/* © {currentYear} Your Company or Organization Name */}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
