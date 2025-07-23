"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, FileCheck, Settings, Zap, ArrowRight, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    // Animation au scroll
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll")
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("animate")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Vérifier immédiatement

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const services = [
    {
      title: "Vulnérabilité",
      description: "Détection et analyse des failles de sécurité",
      icon: Shield,
      color: "bg-blue-50 text-blue-600",
      href: "/vulnerability",
    },
    {
      title: "Conformité DORA",
      description: "Respect des réglementations financières",
      icon: FileCheck,
      color: "bg-blue-50 text-blue-600",
      href: "/dora-compliance",
    },
    {
      title: "Outil 3",
      description: "Placeholder pour futur service de sécurité",
      icon: Settings,
      color: "bg-gray-50 text-gray-400",
      href: "/admin/tool-3",
    },
    {
      title: "Outil 4",
      description: "Placeholder pour futur service de sécurité",
      icon: Zap,
      color: "bg-gray-50 text-gray-400",
      href: "/admin/tool-4",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header
        className={`bg-blue-900 text-white shadow-lg transition-all duration-1000 ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 group">
              <Shield className="h-8 w-8 text-blue-300 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
              <h1 className="text-2xl font-bold transition-colors duration-300 group-hover:text-blue-200">SecTools</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="hover:text-blue-300 transition-all duration-300 hover:scale-105 relative group">
                Accueil
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/admin"
                className="hover:text-blue-300 transition-all duration-300 hover:scale-105 relative group"
              >
                Gestion et Administration
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </nav>
            <Button
              variant="outline"
              className="border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-900 md:hidden bg-transparent transition-all duration-300 hover:scale-105"
            >
              Menu
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h2
            className={`text-5xl font-bold text-blue-900 mb-6 gradient-text transition-all duration-1000 ${isVisible ? "animate-fadeInUp" : "opacity-0 translate-y-10"}`}
          >
            Plateforme d'Outils de Sécurité d'Entreprise
          </h2>
          <p
            className={`text-xl text-gray-600 mb-8 max-w-3xl mx-auto transition-all duration-1000 animation-delay-200 ${isVisible ? "animate-fadeInUp" : "opacity-0 translate-y-10"}`}
          >
            SecTools vous offre une suite complète d'outils de sécurité pour protéger votre entreprise, assurer la
            conformité réglementaire et gérer efficacement vos risques cybersécurité.
          </p>
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 animation-delay-400 ${isVisible ? "animate-fadeInUp" : "opacity-0 translate-y-10"}`}
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg animate-pulse-glow"
            >
              Découvrir nos services
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Accéder à l'administration
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h3 className="text-3xl font-bold text-blue-900 mb-4">Nos Outils de Sécurité</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez notre gamme complète d'outils conçus pour répondre à tous vos besoins en matière de
              cybersécurité
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={index}
                  className={`group hover-lift border-0 shadow-md transition-all duration-500 animate-on-scroll`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`w-16 h-16 rounded-full ${service.color} flex items-center justify-center mx-auto mb-4 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 animate-float`}
                      style={{ animationDelay: `${index * 0.5}s` }}
                    >
                      <IconComponent className="h-8 w-8 transition-all duration-300" />
                    </div>
                    <CardTitle className="text-xl text-blue-900 transition-colors duration-300 group-hover:text-blue-700">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-gray-600 mb-6 transition-colors duration-300 group-hover:text-gray-800">
                      {service.description}
                    </CardDescription>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-blue-200 text-blue-600 hover:bg-blue-50 group-hover:border-blue-400 bg-transparent transition-all duration-300 hover:scale-105"
                    >
                      <Link href={service.href}>
                        Accéder
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Sécurité Avancée",
                description: "Protection multicouche avec les dernières technologies de cybersécurité",
              },
              {
                icon: FileCheck,
                title: "Conformité Garantie",
                description: "Respect automatique des réglementations DORA et autres standards",
              },
              {
                icon: Settings,
                title: "Gestion Centralisée",
                description: "Interface unique pour administrer tous vos outils de sécurité",
              },
            ].map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div
                  key={index}
                  className="text-center animate-on-scroll"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div
                    className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-500 hover:scale-110 hover:rotate-12 animate-float"
                    style={{ animationDelay: `${index * 0.7}s` }}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-blue-900 mb-2 transition-colors duration-300 hover:text-blue-700">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 transition-colors duration-300 hover:text-gray-800">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12 animate-on-scroll">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4 group">
                <Shield className="h-8 w-8 text-blue-300 transition-transform duration-300 group-hover:rotate-12" />
                <h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-blue-200">
                  SecTools
                </h3>
              </div>
              <p className="text-blue-200 mb-4 transition-colors duration-300 hover:text-white">
                Votre partenaire de confiance pour la sécurité d'entreprise. Protégez vos données et assurez votre
                conformité avec nos outils avancés.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 transition-colors duration-300 hover:text-blue-200">
                Services
              </h4>
              <ul className="space-y-2 text-blue-200">
                <li>
                  <Link
                    href="/vulnerability"
                    className="hover:text-white transition-all duration-300 hover:translate-x-2 inline-block"
                  >
                    Analyse de Vulnérabilité
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dora-compliance"
                    className="hover:text-white transition-all duration-300 hover:translate-x-2 inline-block"
                  >
                    Conformité DORA
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin"
                    className="hover:text-white transition-all duration-300 hover:translate-x-2 inline-block"
                  >
                    Administration
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 transition-colors duration-300 hover:text-blue-200">Contact</h4>
              <div className="space-y-2 text-blue-200">
                <div className="flex items-center space-x-2 transition-all duration-300 hover:text-white hover:translate-x-2">
                  <Mail className="h-4 w-4 transition-transform duration-300 hover:scale-110" />
                  <span>contact@sectools.com</span>
                </div>
                <div className="flex items-center space-x-2 transition-all duration-300 hover:text-white hover:translate-x-2">
                  <Phone className="h-4 w-4 transition-transform duration-300 hover:scale-110" />
                  <span>+33 1 23 45 67 89</span>
                </div>
                <div className="flex items-center space-x-2 transition-all duration-300 hover:text-white hover:translate-x-2">
                  <MapPin className="h-4 w-4 transition-transform duration-300 hover:scale-110" />
                  <span>Paris, France</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200 transition-colors duration-300 hover:text-white">
            <p>&copy; 2024 SecTools. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
