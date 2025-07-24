import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Settings,
    ArrowRight,
    ArrowLeft,
    Shield,
    CheckCircle,
    Lightbulb,
    Target,
    Zap,
    Users,
    Clock,
    BarChart3,
} from "lucide-react"
import Link from "next/link"

export default function PocPage() {
    const features = [
        {
            title: "Validation rapide",
            description: "Tests accélérés pour valider la faisabilité de vos solutions de sécurité",
            icon: Zap,
        },
        {
            title: "Environnement contrôlé",
            description: "Tests en environnement sécurisé sans impact sur votre production",
            icon: Shield,
        },
        {
            title: "Analyse des résultats",
            description: "Rapports détaillés avec recommandations et métriques de performance",
            icon: BarChart3,
        },
        {
            title: "Accompagnement expert",
            description: "Support technique et conseil tout au long du processus de validation",
            icon: Users,
        },
    ]

    const steps = [
        {
            number: "01",
            title: "Définition",
            description: "Analyse des besoins et définition des objectifs du POC",
            icon: Target,
        },
        {
            number: "02",
            title: "Conception",
            description: "Conception de l'architecture et du plan de test",
            icon: Lightbulb,
        },
        {
            number: "03",
            title: "Implémentation",
            description: "Mise en place de l'environnement de test et déploiement",
            icon: Settings,
        },
        {
            number: "04",
            title: "Validation",
            description: "Tests, mesures et validation des résultats obtenus",
            icon: CheckCircle,
        },
    ]

    const benefits = [
        {
            title: "Réduction des risques",
            description: "Validez vos solutions avant un déploiement complet en production",
            icon: Shield,
        },
        {
            title: "Optimisation des coûts",
            description: "Évitez les investissements coûteux dans des solutions inadaptées",
            icon: Target,
        },
        {
            title: "Accélération des projets",
            description: "Raccourcissez les cycles de développement grâce à une validation précoce",
            icon: Clock,
        },
        {
            title: "Prise de décision éclairée",
            description: "Disposez de données concrètes pour vos choix technologiques",
            icon: Lightbulb,
        },
    ]

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="bg-blue-900 text-white shadow-lg">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 group">
                            <Shield className="h-8 w-8 text-blue-300 transition-transform duration-300 group-hover:rotate-12" />
                            <h1 className="text-2xl font-bold">SecTools</h1>
                        </div>
                        <nav className="hidden md:flex space-x-8">
                            <Link href="/" className="hover:text-blue-300 transition-colors">
                                Accueil
                            </Link>
                            <Link href="/vulnerability" className="hover:text-blue-300 transition-colors">
                                Vulnérabilité
                            </Link>
                            <Link href="/dora-compliance" className="hover:text-blue-300 transition-colors">
                                Conformité DORA
                            </Link>
                            <Link href="/poc" className="text-blue-300 transition-colors">
                                POC
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
                            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Proof of Concept (POC)</h2>
                            <p className="text-xl text-gray-600 mb-8">
                                Validez vos solutions de sécurité avant leur déploiement complet. Notre service POC vous permet de
                                tester, mesurer et valider l'efficacité de vos outils de cybersécurité dans un environnement contrôlé.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    size="lg"
                                    className="bg-blue-600 hover:bg-blue-700 text-white hover:scale-105 transition-all duration-300"
                                >
                                    Lancer un POC
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent hover:scale-105 transition-all duration-300"
                                >
                                    En savoir plus
                                </Button>
                            </div>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            <div className="relative w-full max-w-md">
                                <div className="absolute inset-0 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
                                <div className="relative bg-white rounded-xl shadow-xl p-8 border border-blue-100 hover:shadow-2xl transition-all duration-300">
                                    <div className="flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-6">
                                        <Settings className="h-8 w-8 text-blue-600 animate-spin-slow" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-blue-900 mb-4">Pourquoi un POC ?</h3>
                                    <p className="text-gray-600 mb-6">
                                        Un Proof of Concept vous permet de valider la pertinence et l'efficacité de vos solutions de
                                        sécurité avant un investissement majeur.
                                    </p>
                                    <div className="space-y-3">
                                        <div className="flex items-center">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                            <span className="text-gray-700">Tests en environnement réel</span>
                                        </div>
                                        <div className="flex items-center">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                            <span className="text-gray-700">Validation des performances</span>
                                        </div>
                                        <div className="flex items-center">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                            <span className="text-gray-700">Réduction des risques d'investissement</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl font-bold text-blue-900 mb-4">Avantages de nos POC</h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Notre approche POC vous offre une validation complète et objective de vos solutions de sécurité
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => {
                            const IconComponent = feature.icon
                            return (
                                <Card
                                    key={index}
                                    className="border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                                >
                                    <CardHeader>
                                        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                            <IconComponent className="h-6 w-6 text-blue-600" />
                                        </div>
                                        <CardTitle className="text-xl text-blue-900">{feature.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-blue-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl font-bold text-blue-900 mb-4">Notre Méthodologie POC</h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Une approche structurée en quatre étapes pour garantir le succès de votre Proof of Concept
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => {
                            const IconComponent = step.icon
                            return (
                                <div key={index} className="relative">
                                    {index < steps.length - 1 && (
                                        <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-blue-200 -translate-x-1/2 z-0"></div>
                                    )}
                                    <div className="bg-white rounded-xl p-6 shadow-md relative z-10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4 text-white font-bold">
                                            {step.number}
                                        </div>
                                        <h4 className="text-xl font-semibold text-blue-900 mb-2">{step.title}</h4>
                                        <p className="text-gray-600">{step.description}</p>
                                        <div className="absolute top-6 right-6">
                                            <IconComponent className="h-6 w-6 text-blue-300" />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl font-bold text-blue-900 mb-4">Bénéfices Business</h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Un POC bien mené vous apporte des avantages concrets pour votre stratégie de cybersécurité
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {benefits.map((benefit, index) => {
                            const IconComponent = benefit.icon
                            return (
                                <div key={index} className="flex items-start space-x-4 group">
                                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <IconComponent className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors">
                                            {benefit.title}
                                        </h4>
                                        <p className="text-gray-600 group-hover:text-gray-800 transition-colors">{benefit.description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="py-20 bg-blue-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl font-bold text-blue-900 mb-4">Cas d'Usage Typiques</h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Découvrez les scenarios où un POC peut transformer votre approche de la cybersécurité
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <CardHeader>
                                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                                    <Shield className="h-6 w-6 text-green-600" />
                                </div>
                                <CardTitle className="text-xl text-blue-900">Nouvelle Solution de Sécurité</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-gray-600">
                                    Testez l'efficacité d'un nouvel outil de détection d'intrusion ou de protection contre les malwares
                                    avant son déploiement généralisé.
                                </CardDescription>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <CardHeader>
                                <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-4">
                                    <BarChart3 className="h-6 w-6 text-orange-600" />
                                </div>
                                <CardTitle className="text-xl text-blue-900">Migration Sécurisée</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-gray-600">
                                    Validez la sécurité et les performances lors d'une migration vers le cloud ou un changement
                                    d'infrastructure critique.
                                </CardDescription>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <CardHeader>
                                <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                                    <Users className="h-6 w-6 text-purple-600" />
                                </div>
                                <CardTitle className="text-xl text-blue-900">Formation et Sensibilisation</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-gray-600">
                                    Testez l'efficacité de nouveaux programmes de formation à la cybersécurité ou d'outils de
                                    sensibilisation des utilisateurs.
                                </CardDescription>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-blue-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="hover:scale-105 transition-transform duration-300">
                            <div className="text-4xl font-bold mb-2">85%</div>
                            <div className="text-blue-200">des POC permettent d'éviter des investissements inadaptés</div>
                        </div>
                        <div className="hover:scale-105 transition-transform duration-300">
                            <div className="text-4xl font-bold mb-2">3-6</div>
                            <div className="text-blue-200">semaines en moyenne pour un POC complet</div>
                        </div>
                        <div className="hover:scale-105 transition-transform duration-300">
                            <div className="text-4xl font-bold mb-2">40%</div>
                            <div className="text-blue-200">de réduction des coûts de déploiement après POC</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-3xl font-bold text-blue-900 mb-4">Prêt à lancer votre POC ?</h3>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                        Contactez nos experts pour définir ensemble le POC qui validera vos solutions de cybersécurité.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            className="bg-blue-600 hover:bg-blue-700 text-white hover:scale-105 transition-all duration-300"
                        >
                            Demander un POC
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent hover:scale-105 transition-all duration-300"
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
                                    <Link href="/poc" className="hover:text-white transition-colors">
                                        POC
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
