import { motion } from 'framer-motion'

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-lighter to-dark" />
        <div className="container-custom px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              TM Event Hire
            </h1>
            <p className="text-xl md:text-2xl text-grey-text mb-8">
              Premium Event Equipment Hire
            </p>
            <p className="text-grey-text max-w-2xl mx-auto mb-12">
              Transform your events with our premium marquee, furniture, and equipment hire services. 
              Perfect for weddings, parties, and corporate events.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="#contact"
                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
              >
                Get a Quote
              </a>
              <a
                href="#services"
                className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Our Services
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-32 bg-dark-lighter">
        <div className="container-custom px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Website Coming Soon
            </h2>
            <p className="text-grey-text">
              We're building something amazing. Check back soon for our full website launch!
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
