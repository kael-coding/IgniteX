import { useState } from "react";
import Alert from "./Alert";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = () => {
    setShowAlert(true);
  };
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#home"
          className="text-2xl font-extrabold text-amber-700 tracking-wide"
        >
          IgniteX
        </a>

        <ul className="hidden md:flex items-center gap-10 text-lg font-medium">
          <li>
            <a href="#home" className="hover:text-amber-500">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-amber-500">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-amber-500">
              Contact
            </a>
          </li>
          <li>
            <button
              onClick={handleSubmit}
              className="bg-amber-700 text-white px-5 py-2 rounded-lg hover:bg-amber-600 transition-colors duration-300 font-semibold shadow-md"
            >
              Shop
            </button>
          </li>
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl text-amber-700"
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t">
          <ul className="flex flex-col text-lg px-6 py-4 gap-4">
            <li>
              <a href="#home" className="py-2 border-b">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="py-2 border-b">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="py-2">
                Contact
              </a>
            </li>
            <li>
              <button
                onClick={handleSubmit}
                className="w-full bg-amber-700 text-white px-5 py-2 rounded-lg hover:bg-amber-600 transition-colors duration-300 font-semibold shadow-md"
              >
                Shop
              </button>
            </li>
          </ul>
        </div>
      )}
      {showAlert && (
        <Alert
          message="This feature is not available yet, but it will be coming soon!"
          onClose={() => setShowAlert(false)}
        />
      )}
    </nav>
  );
}

export default Navbar;
