import { useState } from "react";
import Alert from "./Alert";

const Contact = () => {
  const [showAlert, setShowAlert] = useState(false);

  // Prevent form submission from refreshing the page
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowAlert(true);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <h2 className="text-4xl font-bold text-center mb-8 text-amber-700">
        Contact Us
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Have questions? Send us a message anytime.
      </p>

      <div className="max-w-xl mx-auto">
        <form className="grid gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            className="p-3 border rounded-lg"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 border rounded-lg"
            required
          />
          <textarea
            placeholder="Message"
            className="p-3 border rounded-lg h-32"
            required
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 bg-amber-700 text-white font-semibold rounded-lg hover:bg-amber-800 transition"
          >
            Contact Us
          </button>
        </form>
      </div>

      {showAlert && (
        <Alert
          message="This feature is not available yet, but it will be coming soon!"
          onClose={() => setShowAlert(false)}
        />
      )}
    </section>
  );
};

export default Contact;
