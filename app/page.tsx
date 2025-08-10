"use client"

import Image from 'next/image'
import { motion } from 'motion/react'
import { useState, useEffect } from 'react'

export default function Landing() {
  const [particles, setParticles] = useState<Array<{left: number, top: number, delay: number, duration: number}>>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Generate particles only on client side to avoid hydration mismatch
    const generatedParticles = Array.from({ length: 20 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2
    }))
    setParticles(generatedParticles)
    setMounted(true)
  }, [])

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-76px)] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero_image.png"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-10">
          {/* Floating Particles */}
          {mounted && particles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
              }}
            />
          ))}
          
          {/* Geometric SVG Elements */}
          <motion.svg
            className="absolute top-20 left-10 w-32 h-32 text-blue-400/20"
            viewBox="0 0 100 100"
            initial={{ rotate: 0, scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <polygon
              points="50,5 90,25 90,75 50,95 10,75 10,25"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </motion.svg>
          
          <motion.svg
            className="absolute bottom-32 right-16 w-24 h-24 text-purple-400/20"
            viewBox="0 0 100 100"
            initial={{ rotate: 0, scale: 0 }}
            animate={{ rotate: -360, scale: 1 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="10,5"
            />
          </motion.svg>
          
          <motion.svg
            className="absolute top-1/3 right-1/4 w-16 h-16 text-cyan-400/30"
            viewBox="0 0 100 100"
            initial={{ rotate: 0, opacity: 0 }}
            animate={{ rotate: 180, opacity: 1 }}
            transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          >
            <rect
              x="25"
              y="25"
              width="50"
              height="50"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              transform="rotate(45 50 50)"
            />
          </motion.svg>
          
          {/* Grid Pattern */}
          <motion.div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 2 }}
          />
          
          {/* Glowing Orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div
            className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>
        
        <motion.div 
          className="relative z-20 text-center max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {/* Tech Icons */}
            <div className="flex justify-center items-center gap-6 mb-8">
              <motion.div
                className="p-3 bg-blue-500/20 rounded-full backdrop-blur-sm border border-blue-400/30"
                whileHover={{ scale: 1.1, rotate: 5 }}
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.div>
              
              <motion.div
                className="p-3 bg-purple-500/20 rounded-full backdrop-blur-sm border border-purple-400/30"
                whileHover={{ scale: 1.1, rotate: -5 }}
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </motion.div>
              
              <motion.div
                className="p-3 bg-cyan-500/20 rounded-full backdrop-blur-sm border border-cyan-400/30"
                whileHover={{ scale: 1.1, rotate: 5 }}
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              >
                <svg className="w-8 h-8 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                  <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V9a1 1 0 00-1-1h-1v4.5a1.5 1.5 0 01-3 0V8a1 1 0 011-1z" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Automatiza tu negocio en la nube
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Transformamos tu empresa con soluciones tecnológicas innovadoras
            <br />
            <span className="text-lg text-blue-400">Desarrollo • Automatización • Consultoría</span>
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-2xl hover:shadow-blue-500/25"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              🚀 Comenzar ahora
            </motion.button>
            
            <motion.button 
              className="border-2 border-gray-400 hover:border-white text-gray-300 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              📞 Consulta gratis
            </motion.button>
          </motion.div>
          
          {/* Stats */}
          <motion.div
            className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">500+</div>
              <div className="text-sm text-gray-400">Proyectos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">98%</div>
              <div className="text-sm text-gray-400">Satisfacción</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">24/7</div>
              <div className="text-sm text-gray-400">Soporte</div>
            </div>
          </motion.div>
        </motion.div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Soluciones completas para impulsar tu negocio al siguiente nivel
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Automatizaciones",
                description: "Optimiza tus procesos con automatizaciones inteligentes que ahorran tiempo y recursos.",
                icon: "🤖"
              },
              {
                title: "Desarrollo Web",
                description: "Sitios web modernos y aplicaciones que destacan y convierten visitantes en clientes.",
                icon: "💻"
              },
              {
                title: "SEO & Posicionamiento",
                description: "Mejora tu visibilidad online y atrae más clientes con estrategias SEO efectivas.",
                icon: "📈"
              },
              {
                title: "Desarrollo a Medida",
                description: "Soluciones personalizadas que se adaptan perfectamente a las necesidades de tu negocio.",
                icon: "⚙️"
              },
              {
                title: "Consultoría",
                description: "Asesoramiento experto para tomar las mejores decisiones tecnológicas para tu empresa.",
                icon: "💡"
              },
              {
                title: "Soporte 24/7",
                description: "Acompañamiento continuo para garantizar el éxito de tus proyectos tecnológicos.",
                icon: "🛠️"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-blue-400">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-900/50">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            className="grid lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Sobre Nosotros
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Somos un equipo de expertos apasionados por la tecnología, dedicados a transformar 
                ideas en soluciones digitales innovadoras que impulsan el crecimiento de tu negocio.
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Con años de experiencia en el sector, hemos ayudado a cientos de empresas a 
                automatizar sus procesos, mejorar su presencia online y alcanzar sus objetivos digitales.
              </p>
              <motion.button 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Conoce más
              </motion.button>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-8 rounded-2xl border border-gray-700">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
                    <div className="text-gray-300">Proyectos Completados</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-400 mb-2">98%</div>
                    <div className="text-gray-300">Satisfacción Cliente</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                    <div className="text-gray-300">Soporte Técnico</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-yellow-400 mb-2">5+</div>
                    <div className="text-gray-300">Años Experiencia</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Testimonios reales de empresas que han transformado su negocio con nosotros
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                name: "María González",
                company: "TechStart SL",
                text: "Increíble trabajo. Automatizaron todos nuestros procesos y ahora somos 3x más eficientes.",
                rating: 5
              },
              {
                name: "Carlos Ruiz",
                company: "Innovate Corp",
                text: "El mejor equipo con el que hemos trabajado. Profesionales, rápidos y con resultados excepcionales.",
                rating: 5
              },
              {
                name: "Ana Martín",
                company: "Digital Plus",
                text: "Nuestro sitio web ahora convierte 5x más. El ROI ha sido impresionante desde el primer mes.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-blue-400">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-900/50">
        <div className="container mx-auto max-w-4xl">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              ¿Listo para transformar tu negocio?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Contáctanos hoy y descubre cómo podemos ayudarte a alcanzar tus objetivos
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-blue-400">Información de Contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-2xl mr-4">📧</span>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-gray-400">contacto@tuempresa.com</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-4">📱</span>
                    <div>
                      <div className="font-semibold">Teléfono</div>
                      <div className="text-gray-400">+34 123 456 789</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-4">📍</span>
                    <div>
                      <div className="font-semibold">Ubicación</div>
                      <div className="text-gray-400">Madrid, España</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6 text-purple-400">Envíanos un mensaje</h3>
                <form className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Tu nombre"
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  />
                  <input 
                    type="email" 
                    placeholder="Tu email"
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  />
                  <textarea 
                    placeholder="Tu mensaje"
                    rows={4}
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-none"
                  ></textarea>
                  <motion.button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-3 rounded-lg font-semibold transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Enviar mensaje
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} CloudNext. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}