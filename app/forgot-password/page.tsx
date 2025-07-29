"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Shield, Mail, ArrowLeft, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [error, setError] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setError("")

        // Validation
        if (!email) {
            setError("Veuillez entrer votre adresse email")
            setIsLoading(false)
            return
        }

        if (!email.includes("@")) {
            setError("Veuillez entrer une adresse email valide")
            setIsLoading(false)
            return
        }

        try {
            // Simulation d'une requête API
            await new Promise((resolve) => setTimeout(resolve, 2000))
            setIsSuccess(true)
        } catch (err) {
            setError("Une erreur est survenue. Veuillez réessayer.")
        } finally {
            setIsLoading(false)
        }
    }

    if (isSuccess) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center p-4">
                <div className="w-full max-w-md">
                    <div className="text-center mb-8">
                        <div className="flex items-center justify-center space-x-2 mb-4">
                            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center shadow-lg">
                                <CheckCircle className="h-8 w-8 text-white" />
                            </div>
                            <Link href="/" className="text-3xl font-bold text-blue-900 hover:text-blue-700 transition-colors">
                                SecTools
                            </Link>
                        </div>
                    </div>

                    <Card className="border-0 shadow-xl">
                        <CardHeader className="text-center pb-6">
                            <CardTitle className="text-2xl font-bold text-green-900">Email envoyé !</CardTitle>
                            <CardDescription className="text-gray-600">Vérifiez votre boîte de réception</CardDescription>
                        </CardHeader>
                        <CardContent className="text-center space-y-4">
                            <div className="bg-green-50 p-4 rounded-lg">
                                <p className="text-green-800 text-sm">
                                    Nous avons envoyé un lien de réinitialisation à <strong>{email}</strong>
                                </p>
                            </div>

                            <div className="text-sm text-gray-600 space-y-2">
                                <p>Le lien expirera dans 24 heures.</p>
                                <p>Pensez à vérifier vos spams si vous ne recevez pas l'email.</p>
                            </div>

                            <div className="space-y-3 pt-4">
                                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                                    <Link href="/login">Retour à la connexion</Link>
                                </Button>

                                <Button
                                    variant="outline"
                                    onClick={() => {
                                        setIsSuccess(false)
                                        setEmail("")
                                    }}
                                    className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                                >
                                    Renvoyer l'email
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Back to Home */}
                    <div className="text-center mt-6">
                        <Link href="/" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
                            ← Retour à l'accueil
                        </Link>
                    </div>
                </div>
            </div>
        )
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
                    <p className="text-gray-600">Réinitialisez votre mot de passe</p>
                </div>

                {/* Forgot Password Form */}
                <Card className="border-0 shadow-xl">
                    <CardHeader className="space-y-1 pb-6">
                        <CardTitle className="text-2xl font-bold text-center text-blue-900">Mot de passe oublié</CardTitle>
                        <CardDescription className="text-center text-gray-600">
                            Entrez votre email pour recevoir un lien de réinitialisation
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
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value)
                                            if (error) setError("")
                                        }}
                                        className="pl-10 h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                                        disabled={isLoading}
                                    />
                                </div>
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
                                        <span>Envoi en cours...</span>
                                    </div>
                                ) : (
                                    <div className="flex items-center space-x-2">
                                        <Mail className="h-4 w-4" />
                                        <span>Envoyer le lien</span>
                                    </div>
                                )}
                            </Button>

                            {/* Back to Login */}
                            <div className="text-center pt-4">
                                <Link
                                    href="/login"
                                    className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 transition-colors"
                                >
                                    <ArrowLeft className="h-4 w-4 mr-1" />
                                    Retour à la connexion
                                </Link>
                            </div>
                        </form>
                    </CardContent>
                </Card>

                {/* Back to Home */}
                <div className="text-center mt-6">
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
