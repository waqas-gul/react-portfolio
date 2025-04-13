import { useParams, useNavigate } from "react-router-dom";
import { certificates } from "./Certificates"; // Import the certificates data
import { motion } from "framer-motion"; // Import motion for animations
import { FaBackward } from "react-icons/fa";

const CertificateDetails = () => {
  const { id } = useParams(); // Get the certificate ID from the URL
  const navigate = useNavigate(); // Hook for navigation
  const cert = certificates[parseInt(id)]; // Find the certificate by ID

  if (!cert) {
    return <div>Certificate not found!</div>;
  }

  // Function to handle the "Back to Certificates" button click
  const handleBackToCertificates = () => {
    // Navigate to the home page
    navigate("/");

    // After navigation, scroll to the Certificates section
    setTimeout(() => {
      const certificatesSection = document.getElementById("Certificates");
      if (certificatesSection) {
        certificatesSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Small delay to ensure the page has loaded
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col items-center py-16 bg-gray-200 dark:bg-gray-900 "
    >
      <div className="max-w-4xl w-full p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg mt-16">
        {/* Certificate Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full h-96 overflow-hidden rounded-lg mb-8"
        >
          <img
            src={cert.image} // Use the image from the certificate data
            alt={cert.title}
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </motion.div>

        {/* Certificate Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-4xl font-bold font-sans text-gray-800 dark:text-white mb-6 text-center"
        >
          {cert.title}
        </motion.h1>

        {/* Platform and Icon */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center justify-center space-x-4 mb-8"
        >
          <span className="text-3xl">{cert.icon2}</span>
          <p className="text-2xl font-mono text-gray-600 dark:text-gray-400">
            Platform: <span className="font-bold">{cert.platform}</span>
          </p>
        </motion.div>

        {/* Certificate Icon */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex justify-center mb-8"
        >
          <span className="text-8xl text-yellow-500">{cert.icon1}</span>
        </motion.div>

        {/* Additional Details */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="space-y-6"
        >
          <p className="text-lg font-mono text-gray-600 dark:text-gray-400">
            <strong className="text-yellow-500">Description:</strong> This
            certificate demonstrates proficiency in {cert.title}.
          </p>
          <p className="text-lg font-mono text-gray-600 dark:text-gray-400">
            <strong className="text-yellow-500">Issued By:</strong>{" "}
            {cert.platform}
          </p>
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mt-8 flex justify-center"
        >
          <button
            onClick={handleBackToCertificates}
            className="px-8 py-3 font-mono cursor-pointer shadow-lg hover:shadow-yellow-500 flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold rounded-full hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <FaBackward className="text-xl animate-bounce text-gray-700 transition-all duration-300 ease-in-out group-hover:translate-y-1" />{" "}
            Back to Certificates
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CertificateDetails;
