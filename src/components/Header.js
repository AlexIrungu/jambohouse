const Header = () => (
    <header className="bg-green-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-4">
          <img 
            src="/api/placeholder/100/50" 
            alt="Jambo Holidays Logo" 
            className="h-12"
          />
          <nav className="space-x-6">
            <a href="#" className="hover:text-green-300">Home</a>
            <a href="#" className="hover:text-green-300">About</a>
            <a href="#" className="hover:text-green-300">Packages</a>
            <a href="#" className="hover:text-green-300">Contact</a>
          </nav>
        </div>
        <button className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded">
          Book Now
        </button>
      </div>
    </header>
  );