import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  FileCheck,
  ArrowRight,
  ArrowLeft,
  Shield,
  CheckCircle,
  Clock,
  BarChart4,
  FileText,
  Lock,
  Layers,
  AlertTriangle,
} from "lucide-react"
import Link from "next/link"

export default function DoraCompliancePage() {
  const pillars = [
    {
      title: "Gouvernance",
      description: "Cadre de gestion des risques informatiques et responsabilités claires",
      icon: Layers,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Gestion des risques",
      description: "Identification, évaluation et atténuation des risques informatiques",
      icon: AlertTriangle,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Résilience opérationnelle",
      description: "Capacité à maintenir les services critiques en cas d'incident",
      icon: Shield,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Gestion des tiers",
      description: "Contrôle des risques liés aux fournisseurs de services informatiques",
      icon: FileCheck,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Tests et audits",
      description: "Évaluation régulière de l'efficacité des mesures de sécurité",
      icon: BarChart4,
      color: "bg-blue-50 text-blue-600",
    },
  ]

  const benefits = [
    {
      title: "Conformité réglementaire",
      description: "Respect des exigences légales et évitement des sanctions financières",
      icon: FileText,
    },
    {
      title: "Réduction des risques",
      description: "Identification et atténuation proactives des vulnérabilités",
      icon: AlertTriangle,
    },
    {
      title: "Continuité d'activité",
      description: "Maintien des opérations critiques même en cas d'incident",
      icon: Clock,
    },
    {
      title: "Protection des données",
      description: "Sécurisation des informations sensibles des clients et de l'entreprise",
      icon: Lock,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-900 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-300" />
              <h1 className="text-2xl font-bold">SecTools</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="hover:text-blue-300 transition-colors">
                Accueil
              </Link>
              <Link href="/vulnerability" className="hover:text-blue-300 transition-colors">
                Vulnérabilité
              </Link>
              <Link href="/dora-compliance" className="text-blue-300 transition-colors">
                Conformité DORA
              </Link>
              <Link href="/admin" className="hover:text-blue-300 transition-colors">
                Administration
              </Link>
            </nav>
            <Button
              variant="outline"
              className="border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-900 md:hidden bg-transparent"
            >
              Menu
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Link
                href="/"
                className="inline-flex items-center text-blue-600 mb-4 hover:text-blue-800 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour à l'accueil
              </Link>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Conformité DORA</h2>
              <p className="text-xl text-gray-600 mb-8">
                Notre solution vous aide à respecter le règlement européen sur la résilience opérationnelle numérique
                (DORA) pour le secteur financier, garantissant la sécurité et la stabilité de vos services numériques.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Évaluer votre conformité
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  En savoir plus
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
                <div className="relative bg-white rounded-xl shadow-xl p-8 border border-blue-100">
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-6">
                    <FileCheck className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">Qu'est-ce que DORA ?</h3>
                  <p className="text-gray-600 mb-6">
                    Le règlement DORA (Digital Operational Resilience Act) est un cadre réglementaire européen visant à
                    renforcer la résilience opérationnelle numérique du secteur financier face aux incidents
                    informatiques.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-700">Applicable à toutes les institutions financières</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-700">Entrée en vigueur en janvier 2025</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-700">Sanctions en cas de non-conformité</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DORA Pillars */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-blue-900 mb-4">Les 5 Piliers de DORA</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Notre solution couvre tous les aspects du règlement DORA pour assurer votre conformité totale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => {
              const IconComponent = pillar.icon
              return (
                <Card
                  key={index}
                  className="border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl text-blue-900">{pillar.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">{pillar.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-blue-900 mb-4">Calendrier de Mise en Conformité</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Les étapes clés pour se conformer au règlement DORA avant son entrée en vigueur
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform -translate-x-1/2"></div>

            <div className="space-y-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                  <h4 className="text-xl font-semibold text-blue-900 mb-2">Janvier 2023</h4>
                  <p className="text-gray-600">Publication du règlement DORA au Journal officiel de l'UE</p>
                </div>
                <div className="md:w-12 flex justify-center">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white z-10">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <p className="text-gray-600">Le règlement DORA est officiellement adopté par l'Union européenne</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0 md:order-1">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <p className="text-gray-600">Période de préparation pour les institutions financières</p>
                  </div>
                </div>
                <div className="md:w-12 flex justify-center">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white z-10">
                    <Clock className="h-5 w-5" />
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left md:order-0">
                  <h4 className="text-xl font-semibold text-blue-900 mb-2">2023-2024</h4>
                  <p className="text-gray-600">Mise en place des mesures de conformité</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                  <h4 className="text-xl font-semibold text-blue-900 mb-2">Janvier 2025</h4>
                  <p className="text-gray-600">Entrée en application du règlement DORA</p>
                </div>
                <div className="md:w-12 flex justify-center">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white z-10">
                    <AlertTriangle className="h-5 w-5" />
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <p className="text-gray-600">Date limite de conformité pour toutes les institutions financières</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0 md:order-1">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <p className="text-gray-600">Contrôles et audits réguliers par les autorités de régulation</p>
                  </div>
                </div>
                <div className="md:w-12 flex justify-center">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white z-10">
                    <BarChart4 className="h-5 w-5" />
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left md:order-0">
                  <h4 className="text-xl font-semibold text-blue-900 mb-2">Post-2025</h4>
                  <p className="text-gray-600">Surveillance continue de la conformité</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-blue-900 mb-4">Avantages de la Conformité DORA</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Au-delà de l'obligation réglementaire, la conformité DORA offre de nombreux avantages pour votre
              entreprise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-blue-900 mb-2">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Prêt à vous conformer à DORA ?</h3>
          <p className="text-blue-200 max-w-2xl mx-auto mb-8">
            Ne laissez pas la conformité DORA devenir un obstacle. Notre solution vous guide à chaque étape du
            processus.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-100">
              Évaluer votre conformité
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-blue-800 bg-transparent"
              asChild
            >
              <Link href="/">Retour à l'accueil</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-8 w-8 text-blue-300" />
                <h3 className="text-2xl font-bold">SecTools</h3>
              </div>
              <p className="text-blue-200 mb-4">
                Votre partenaire de confiance pour la sécurité d'entreprise. Protégez vos données et assurez votre
                conformité avec nos outils avancés.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-blue-200">
                <li>
                  <Link href="/vulnerability" className="hover:text-white transition-colors">
                    Analyse de Vulnérabilité
                  </Link>
                </li>
                <li>
                  <Link href="/dora-compliance" className="hover:text-white transition-colors">
                    Conformité DORA
                  </Link>
                </li>
                <li>
                  <Link href="/admin" className="hover:text-white transition-colors">
                    Administration
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-blue-200">
                <div className="flex items-center space-x-2">
                  <span>contact@sectools.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>+33 1 23 45 67 89</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>Paris, France</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
            <p>&copy; 2024 SecTools. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
