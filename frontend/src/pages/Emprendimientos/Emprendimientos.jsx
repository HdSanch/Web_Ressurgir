"use client"

import { useState, useEffect, useRef } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../components/ui/dialog"
import { Badge } from "../../components/ui/badge"
import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import {
  Heart,
  Share2,
  Award,
  Users,
  Palette,
  Scissors,
  Star,
  ArrowRight,
  ExternalLink,
  ShoppingCart,
} from "lucide-react"

// Animation hook for scroll-triggered effects
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    }, options)

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [options])

  return [ref, isIntersecting]
}

// Enhanced Category Button Component
const CategoryButton = ({ id, name, icon: Icon, activeCategory, setActiveCategory, count }) => {
  const isActive = activeCategory === id

  return (
    <button
      onClick={() => setActiveCategory(id)}
      className={`group relative flex items-center px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
        isActive
          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl shadow-blue-500/25"
          : "bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-lg border border-gray-200/50"
      }`}
    >
      <Icon
        className={`w-5 h-5 mr-3 transition-transform duration-300 ${isActive ? "rotate-12" : "group-hover:rotate-6"}`}
      />
      <span className="font-medium">{name}</span>
      {count && (
        <Badge
          variant={isActive ? "secondary" : "outline"}
          className={`ml-2 ${isActive ? "bg-white/20 text-white border-white/30" : ""}`}
        >
          {count}
        </Badge>
      )}
    </button>
  )
}

// Enhanced Entrepreneur Card Component
const EntrepreneurCard = ({ entrepreneur, index, setSelectedProduct }) => {
  const [cardRef, isVisible] = useIntersectionObserver({ threshold: 0.1 })
  const isEven = index % 2 === 0

  return (
    <div
      ref={cardRef}
      className={`transform transition-all duration-1000 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <Card className="group overflow-hidden bg-gradient-to-br from-white to-gray-50/50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl">
        <CardContent className="p-0">
          <div className={`flex flex-col lg:flex-row min-h-[500px] ${isEven ? "" : "lg:flex-row-reverse"}`}>
            {/* Entrepreneur Profile Section */}
            <div className="lg:w-2/5 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 via-purple-600/90 to-pink-600/90"></div>
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fillOpacity=&quot;0.1&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

              <div className="relative z-10 p-8 lg:p-12 h-full flex flex-col justify-center text-white">
                <div className="text-center">
                  <div className="relative mb-8">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-white/30 shadow-2xl">
                      <img
                        src={entrepreneur.imageUrl || "/placeholder.svg"}
                        alt={entrepreneur.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <Star className="w-4 h-4 text-yellow-800" fill="currentColor" />
                    </div>
                  </div>

                  <h2 className="text-2xl lg:text-3xl font-bold mb-3 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                    {entrepreneur.name}
                  </h2>

                  <Badge className="bg-white/20 text-white border-white/30 mb-4 px-4 py-1">{entrepreneur.role}</Badge>

                  <div className="flex items-center justify-center mb-6 text-blue-100">
                    <Award className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">{entrepreneur.yearsClean} años en recuperación</span>
                  </div>

                  <div className="flex flex-wrap gap-2 justify-center">
                    {entrepreneur.achievements.map((achievement, i) => (
                      <Badge key={i} variant="outline" className="bg-white/10 text-white border-white/30 text-xs">
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Products Section */}
            <div className="lg:w-3/5 p-8 lg:p-12">
              <div className="mb-8">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border-l-4 border-blue-500">
                  <p className="text-gray-700 leading-relaxed italic">"{entrepreneur.story}"</p>
                </div>
              </div>

              <div className="grid gap-6">
                {entrepreneur.products.map((product, productIndex) => (
                  <div
                    key={product.id}
                    className="group/product relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-1"
                    onClick={() => setSelectedProduct(product)}
                  >
                    <div className="flex flex-col sm:flex-row">
                      <div className="sm:w-1/3 relative overflow-hidden">
                        <div className="aspect-square sm:aspect-auto sm:h-full">
                          <img
                            src={product.imageSrc || "/placeholder.svg"}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover/product:scale-110"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/product:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      <div className="sm:w-2/3 p-6 flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover/product:text-blue-600 transition-colors">
                            {product.name}
                          </h3>
                          <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                          <div className="flex items-center text-sm text-blue-600 mb-4">
                            <Heart className="w-4 h-4 mr-2" />
                            <span className="italic">{product.impact}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                            <Badge variant="outline" className="text-green-600 border-green-200">
                              {product.availableSpots} disponibles
                            </Badge>
                          </div>
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full px-6"
                          >
                            Ver más
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Main Component
const PatientEntrepreneurship = () => {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [activeCategory, setActiveCategory] = useState("all")
  const [headerRef, headerVisible] = useIntersectionObserver({ threshold: 0.1 })

  const categories = [
    { id: "all", name: "Todos", icon: Users },
    { id: "art", name: "Arte y Creatividad", icon: Palette },
    { id: "crafts", name: "Artesanías", icon: Scissors },
  ]

  const emprendimientos = [
    {
      name: "Leslie Alexander",
      role: "Artista Visual",
      category: "art",
      story:
        "A través del arte, Leslie encontró un camino hacia la recuperación y el autodescubrimiento. Hoy, comparte su talento y experiencia para inspirar a otros en su viaje de sanación.",
      yearsClean: 3,
      achievements: ["Premio Local de Arte 2023", "Mentor de 5 estudiantes"],
      imageUrl: "/placeholder.svg?height=300&width=300",
      products: [
        {
          id: 1,
          name: "Retrato Personalizado",
          description:
            "Retratos únicos que capturan la esencia y el viaje personal de cada individuo, creados con técnicas mixtas y mucho corazón.",
          price: "$120.00",
          imageSrc: "/placeholder.svg?height=200&width=300",
          impact: "Cada compra contribuye a talleres de arte para pacientes en recuperación",
          availableSpots: 3,
        },
        {
          id: 2,
          name: "Taller de Arte Terapéutico",
          description:
            "Sesiones grupales de arte como herramienta de expresión y sanación emocional, guiadas por profesionales.",
          price: "$45.00/sesión",
          imageSrc: "/placeholder.svg?height=200&width=300",
          impact: "Las ganancias apoyan becas para terapia artística",
          availableSpots: 5,
        },
      ],
    },
    {
      name: "Michael Foster",
      role: "Artesano en Cuero",
      category: "crafts",
      story:
        "Michael transformó su pasión por el trabajo en cuero en un negocio próspero, demostrando que la recuperación puede ser el inicio de algo extraordinario y lleno de propósito.",
      yearsClean: 5,
      achievements: ["Certificación en Artesanía", "Mentor del Año 2023"],
      imageUrl: "/placeholder.svg?height=300&width=300",
      products: [
        {
          id: 3,
          name: "Cartera Artesanal",
          description: "Carteras hechas completamente a mano con cuero de alta calidad, cada una única y duradera.",
          price: "$85.00",
          imageSrc: "/placeholder.svg?height=200&width=300",
          impact: "Empleamos y capacitamos a personas en recuperación",
          availableSpots: 8,
        },
      ],
    },
  ]

  const filteredEntrepreneurs =
    activeCategory === "all" ? emprendimientos : emprendimientos.filter((e) => e.category === activeCategory)

  const getCategoryCount = (categoryId) => {
    if (categoryId === "all") return emprendimientos.length
    return emprendimientos.filter((e) => e.category === categoryId).length
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div 
          ref={headerRef}
          className={`max-w-7xl mx-auto text-center mb-20 transform transition-all duration-1000 ${
            headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-2 mb-6">
            <Heart className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-blue-800 font-medium">Historias de Transformación</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 leading-tight">
            Emprendimientos que Inspiran
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Celebramos el espíritu emprendedor y la resiliencia de nuestros pacientes. 
            Cada historia es un testimonio de esperanza, cada producto una obra de amor y determinación.
          </p>
        </div>

        {/* Categories Navigation */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(({ id, name, icon }) => (
              <CategoryButton 
                key={id} 
                id={id} 
                name={name} 
                icon={icon} 
                activeCategory={activeCategory} 
                setActiveCategory={setActiveCategory}
                count={getCategoryCount(id)}
              />
            ))}
          </div>
        </div>

        {/* Entrepreneurs Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {filteredEntrepreneurs.map((entrepreneur, index) => (
              <EntrepreneurCard
                key={entrepreneur.name}
                entrepreneur={entrepreneur}
                index={index}
                setSelectedProduct={setSelectedProduct}
              />
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="max-w-4xl mx-auto mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">¿Quieres ser parte de esta historia?</h2>
              <p className="text-xl mb-8 opacity-90">
                Apoya a nuestros emprendedores o únete a nuestros programas de capacitación
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8">
                  Explorar Productos
                  <ShoppingCart className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 rounded-full px-8">
                  Conocer Programas
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <Dialog open={Boolean(selectedProduct)} onOpenChange={() => setSelectedProduct(null)}>
          <DialogContent className="max-w-2xl rounded-3xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-gray-900">
                {selectedProduct?.name}
              </DialogTitle>
            </DialogHeader>
            {selectedProduct.imageSrc && (
              <div className="space-y-6">
                <img
                  src={selectedProduct.imageSrc || "/placeholder.svg"}
                  alt={selectedProduct.name}
                  className="w-full h-64 object-cover rounded-2xl"
                />
                <div>
                  <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
                  <div className="flex items-center text-sm text-blue-600 mb-4">
                    <Heart className="w-4 h-4 mr-2" />
                    <span className="italic">{selectedProduct.impact}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-blue-600">{selectedProduct.price}</span>
                    <Badge variant="outline" className="text-green-600 border-green-200">
                      {selectedProduct.availableSpots} disponibles
                    </Badge>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full">
                    Comprar Ahora
                    <ShoppingCart className="w-4 h-4 ml-2" />
                  </Button>
                  <Button variant="outline" className="rounded-full">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}

export default PatientEntrepreneurship