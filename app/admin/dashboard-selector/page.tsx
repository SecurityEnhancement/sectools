"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Users, ArrowRight, Settings, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function DashboardSelector() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-red-50 flex items-center justify-center p-4">
            <div className="w-full max-w-4xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center space-x-2 mb-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                            <Shield className="h-8 w-8 text-white" />
                        </div>
                        <h1 className="text-4xl font-bold text-gray-900">SecTools</h1>
                    </div>
                    <p className="text-xl text-gray-600">Choisissez votre interface d'administration</p>
                </div>

                {/* Dashboard Options */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Client Dashboard */}
                    <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer">
                        <CardHeader className="text-center pb-4">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                <Shield className="h-10 w-10 text-blue-600" />
                            </div>
                            <CardTitle className="text-2xl text-blue-900 mb-2">Dashboard Client</CardTitle>
                            <CardDescription className="text-gray-600">
                                Interface utilisateur pour gérer vos outils de sécurité
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <span className="text-sm text-gray-700">Gestion des vulnérabilités</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <span className="text-sm text-gray-700">Conformité DORA</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <span className="text-sm text-gray-700">Tests POC</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <span className="text-sm text-gray-700">Rapports et analytics</span>
                                </div>
                            </div>

                            <Button
                                asChild
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white group-hover:scale-105 transition-all duration-300"
                                size="lg"
                            >
                                <Link href="/admin">
                                    Accéder au Dashboard
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Super Admin Dashboard */}
                    <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer">
                        <CardHeader className="text-center pb-4">
                            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                <Users className="h-10 w-10 text-red-600" />
                            </div>
                            <CardTitle className="text-2xl text-red-900 mb-2">Super Admin</CardTitle>
                            <CardDescription className="text-gray-600">
                                Interface d'administration pour gérer tous les clients
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                    <span className="text-sm text-gray-700">Gestion des clients</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                    <span className="text-sm text-gray-700">Configuration des services</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                    <span className="text-sm text-gray-700">Monitoring système</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                    <span className="text-sm text-gray-700">Analytics globales</span>
                                </div>
                            </div>

                            <Button
                                asChild
                                className="w-full bg-red-600 hover:bg-red-700 text-white group-hover:scale-105 transition-all duration-300"
                                size="lg"
                            >
                                <Link href="/admin/super">
                                    Accéder au Super Admin
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                    <Card className="border-0 shadow-md text-center">
                        <CardContent className="pt-6">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <BarChart3 className="h-6 w-6 text-green-600" />
                            </div>
                            <div className="text-2xl font-bold text-gray-900 mb-1">67</div>
                            <div className="text-sm text-gray-600">Clients Actifs</div>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-md text-center">
                        <CardContent className="pt-6">
                            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Shield className="h-6 w-6 text-orange-600" />
                            </div>
                            <div className="text-2xl font-bold text-gray-900 mb-1">1,247</div>
                            <div className="text-sm text-gray-600">Vulnérabilités Traitées</div>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-md text-center">
                        <CardContent className="pt-6">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Settings className="h-6 w-6 text-purple-600" />
                            </div>
                            <div className="text-2xl font-bold text-gray-900 mb-1">156</div>
                            <div className="text-sm text-gray-600">Tests POC Réalisés</div>
                        </CardContent>
                    </Card>
                </div>

                {/* Footer */}
                <div className="text-center mt-12 text-gray-500">
                    <p className="text-sm">Plateforme SecTools - Votre partenaire sécurité de confiance</p>
                </div>
            </div>
        </div>
    )
}
