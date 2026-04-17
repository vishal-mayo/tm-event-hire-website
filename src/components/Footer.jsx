import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-dark-lighter py-16 border-t border-grey">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <span className="font-bold text-xl text-white">TM Event Hire</span>
            </Link>
            <p className="text-grey-text text-sm mb-6">Premium event equipment hire for weddings, parties, and corporate events.</p>
          </div>

          <div>
            <h4 className="font-bold text-lg text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-grey-text hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-grey-text hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/services" className="text-grey-text hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/gallery" className="text-grey-text hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-grey-text hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg text-white mb-6">Services</h4>
            <ul className="space-y-3">
              <li><span className="text-grey-text">Marquee Hire</span></li>
              <li><span className="text-grey-text">Furniture Hire</span></li>
              <li><span className="text-grey-text">Lighting & Sound</span></li>
              <li><span className="text-grey-text">Catering Equipment</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg text-white mb-6">Contact</h4>
            <ul className="space-y-3 text-grey-text">
              <li>Phone: Coming Soon</li>
              <li>Email: Coming Soon</li>
              <li>Location: UK</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-grey mt-12 pt-8 text-center text-grey-text text-sm">
          <p>&copy; {new Date().getFullYear()} TM Event Hire. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
