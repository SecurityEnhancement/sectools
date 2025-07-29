"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Shield, Eye, EyeOff, Mail, Lock, AlertCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        rememberMe: false,
    })
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
        // Clear error when user starts typing
        if (error) setError("")
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setError("")

        // Validation basique
        if (!formData.email || !formData.password) {
            setError("Veuillez remplir tous les champs")
            setIsLoading(false)
            return
        }

        if (!formData.email.includes("@")) {
            setError("Veuillez entrer une adresse email valide")
            setIsLoading(false)
            return
        }

        try {
            // Simulation d'une requête API
            await new Promise((resolve) => setTimeout(resolve, 2000))

            // Simulation d'une erreur pour la démo
            if (formData.email === "error@test.com") {
                throw new Error("Identifiants incorrects")
            }

            // Succès - redirection vers le dashboard
            console.log("Login successful:", formData)
            window.location.href = "/admin/dashboard-selector"
        } catch (err) {
            setError(err instanceof Error ? err.message : "Une erreur est survenue")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center space-x-2 mb-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                            <Shield className="h-8 w-8 text-white" />
                        </div>
                        <Link href="/" className="text-3xl font-bold text-blue-900 hover:text-blue-700 transition-colors">
                            SecTools
                        </Link>
                    </div>
                    <p className="text-gray-600">Connectez-vous à votre compte</p>
                </div>

                {/* Login Form */}
                <Card className="border-0 shadow-xl">
                    <CardHeader className="space-y-1 pb-6">
                        <CardTitle className="text-2xl font-bold text-center text-blue-900">Connexion</CardTitle>
                        <CardDescription className="text-center text-gray-600">
                            Accédez à votre plateforme de sécurité
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Error Alert */}
                            {error && (
                                <Alert className="border-red-200 bg-red-50">
                                    <AlertCircle className="h-4 w-4 text-red-600" />
                                    <AlertDescription className="text-red-700">{error}</AlertDescription>
                                </Alert>
                            )}

                            {/* Email Field */}
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                                    Adresse email
                                </Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="votre@email.com"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="pl-10 h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                                        disabled={isLoading}
                                    />
                                </div>
                            </div>

                            {/* Password Field */}
                            <div className="space-y-2">
                                <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                                    Mot de passe
                                </Label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                    <Input
                                        id="password"
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        className="pl-10 pr-10 h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                                        disabled={isLoading}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                        disabled={isLoading}
                                    >
                                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                    </button>
                                </div>
                            </div>

                            {/* Remember Me & Forgot Password */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        id="rememberMe"
                                        checked={formData.rememberMe}
                                        onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, rememberMe: checked as boolean }))}
                                        disabled={isLoading}
                                    />
                                    <Label htmlFor="rememberMe" className="text-sm text-gray-600 cursor-pointer">
                                        Se souvenir de moi
                                    </Label>
                                </div>
                                <Link href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
                                    Mot de passe oublié ?
                                </Link>
                            </div>

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <div className="flex items-center space-x-2">
                                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        <span>Connexion...</span>
                                    </div>
                                ) : (
                                    <div className="flex items-center space-x-2">
                                        <span>Se connecter</span>
                                        <ArrowRight className="h-4 w-4" />
                                    </div>
                                )}
                            </Button>
                        </form>
                    </CardContent>
                </Card>

                {/* Register Link */}
                <div className="text-center mt-6">
                    <p className="text-gray-600">
                        Pas encore de compte ?{" "}
                        <Link href="/register" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
                            Créer un compte
                        </Link>
                    </p>
                </div>

                {/* Back to Home */}
                <div className="text-center mt-4">
                    <Link href="/" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
                        ← Retour à l'accueil
                    </Link>
                </div>

                {/* Footer */}
                <div className="text-center mt-8 text-xs text-gray-500">
                    <p>© 2024 SecTools. Tous droits réservés.</p>
                    <div className="flex justify-center space-x-4 mt-2">
                        <Link href="/privacy" className="hover:text-gray-700 transition-colors">
                            Confidentialité
                        </Link>
                        <Link href="/terms" className="hover:text-gray-700 transition-colors">
                            Conditions
                        </Link>
                        <Link href="/support" className="hover:text-gray-700 transition-colors">
                            Support
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
