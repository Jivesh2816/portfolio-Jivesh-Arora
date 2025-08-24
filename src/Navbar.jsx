export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white z-50 shadow-xl py-6">
      <div className="flex justify-between items-center px-12">
        {/* Name with large text */}
        <div className="text-4xl font-bold text-blue-400">
          Jivesh Arora
        </div>

        {/* Navigation links with guaranteed spacing */}
        <div className="flex">
          <a 
            href="#home" 
            className="text-2xl hover:text-blue-400 transition-colors"
            style={{ marginRight: '80px' }} // 80px spacing
          >
            Home
          </a>
          <a 
            href="#about" 
            className="text-2xl hover:text-blue-400 transition-colors"
            style={{ marginRight: '80px' }} // 80px spacing
          >
            About
          </a>
          <a 
            href="#projects" 
            className="text-2xl hover:text-blue-400 transition-colors"
            style={{ marginRight: '80px' }} // 80px spacing
          >
            Projects
          </a>
          <a 
            href="#contact" 
            className="text-2xl hover:text-blue-400 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}