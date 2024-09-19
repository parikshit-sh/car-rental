const Content = () => {
    return (
      <div className="w-full bg-[#121212] text-white p-6 sm:p-10 grid gap-10 md:grid-cols-2 lg:grid-cols-4 text-sm">
        {/* Brand Section */}
        <div className="col-span-1 mb-6">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4">Rentals</h1>
          <p className="text-gray-400">
            Discover the best rental services for all your needs. From cars to homes, find the best deals with us.
          </p>
        </div>
  
        {/* Quick Links Section */}
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <a href="#about" className="hover:underline">
            About Us
          </a>
          <a href="#services" className="hover:underline">
            Services
          </a>
          <a href="#contact" className="hover:underline">
            Contact Us
          </a>
          <a href="#privacy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#terms" className="hover:underline">
            Terms of Service
          </a>
          <a href="#support" className="hover:underline">
            Support
          </a>
        </div>
  
        {/* Services Section */}
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold mb-4">Services</h2>
          <a href="#rentals" className="hover:underline">
            Car Rentals
          </a>
          <a href="#home-rentals" className="hover:underline">
            Home Rentals
          </a>
          <a href="#equipment" className="hover:underline">
            Equipment Rentals
          </a>
          <a href="#corporate" className="hover:underline">
            Corporate Services
          </a>
          <a href="#leasing" className="hover:underline">
            Leasing Options
          </a>
        </div>
  
        {/* Contact and Social Section */}
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold mb-4">Contact</h2>
          <p className="text-gray-400">Call us: +123 456 7890</p>
          <p className="text-gray-400">Email: info@rentals.com</p>
          <div className="flex gap-4 mt-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Facebook
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Twitter
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Instagram
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              LinkedIn
            </a>
          </div>
        </div>
  
        {/* Footer Note Section */}
        <div className="col-span-full text-center mt-6 text-xs text-gray-500 border-t border-gray-700 pt-4">
          <p>© 2024 Rentals. All rights reserved.</p>
          <p className="mt-2">Designed with ❤️ by Rentals Team.</p>
        </div>
      </div>
    );
  };
  
  export default Content;
  