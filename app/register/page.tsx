"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import {
    Shield,
    Eye,
    EyeOff,
    Mail,
    Lock,
    User,
    Building,
    Phone,
    AlertCircle,
    CheckCircle,
    ArrowRight,
    Users,
} from "lucide-react"
import Link from "next/link"

interface FormData {
    firstName: string
    lastName: string
    email: string
    phone: string
    company: string
    companySize: string
    password: string
    confirmPassword: string
    acceptTerms: boolean
    acceptMarketing: boolean
}

export default function RegisterPage() {
    const [currentStep, setCurrentStep] = useState(1)
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        companySize: "",
        password: "",
        confirmPassword: "",
        acceptTerms: false,
        acceptMarketing: false,
    })
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState<Partial<FormData>>({})

    const totalSteps = 3
    const progress = (currentStep / totalSteps) * 100

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
        // Clear error when user starts typing
        if (errors[name as keyof FormData]) {
            setErrors((prev) => ({ ...prev, [name]: "" }))
        }
    }

    const handleSelectChange = (name: string, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
        if (errors[name as keyof FormData]) {
            setErrors((prev) => ({ ...prev, [name]: "" }))
        }
    }

    const validateStep = (step: number): boolean => {
        const newErrors: Partial<FormData> = {}

        if (step === 1) {
            if (!formData.firstName.trim()) newErrors.firstName = "Le prénom est requis"
            if (!formData.lastName.trim()) newErrors.lastName = "Le nom est requis"
            if (!formData.email.trim()) {
                newErrors.email = "L'email est requis"
            } else if (!formData.email.includes("@")) {
                newErrors.email = "Email invalide"
            }
            if (!formData.phone.trim()) newErrors.phone = "Le téléphone est requis"
        }

        if (step === 2) {
            if (!formData.company.trim()) newErrors.company = "Le nom de l'entreprise est requis"
            if (!formData.companySize) newErrors.companySize = "La taille de l'entreprise est requise"
        }

        if (step === 3) {
            if (!formData.password) {
                newErrors.password = "Le mot de passe est requis"
            } else if (formData.password.length < 8) {
                newErrors.password = "Le mot de passe doit contenir au moins 8 caractères"
            }
            if (!formData.confirmPassword) {
                newErrors.confirmPassword = "Veuillez confirmer le mot de passe"
            } else if (formData.password !== formData.confirmPassword) {
                newErrors.confirmPassword = "Les mots de passe ne correspondent pas"
            }
            if (!formData.acceptTerms) {
                newErrors.acceptTerms = "Vous devez accepter les conditions d'utilisation" as any
            }
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const nextStep = () => {
        if (validateStep(currentStep)) {
            setCurrentStep((prev) => Math.min(prev + 1, totalSteps))
        }
    }

    const prevStep = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 1))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!validateStep(currentStep)) return

        setIsLoading(true)

        try {
            // Simulation d'une requête API
            await new Promise((resolve) => setTimeout(resolve, 2000))

            console.log("Registration successful:", formData)
            // Redirection vers la page de login avec message de succès
            window.location.href = "/login?registered=true"
        } catch (err) {
            setErrors({ email: "Une erreur est survenue lors de l'inscription" })
        } finally {
            setIsLoading(false)
        }
    }

    const getPasswordStrength = (password: string): { strength: number; label: string; color: string } => {
        let strength = 0
        if (password.length >= 8) strength += 25
        if (/[A-Z]/.test(password)) strength += 25
        if (/[0-9]/.test(password)) strength += 25
        if (/[^A-Za-z0-9]/.test(password)) strength += 25

        if (strength <= 25) return { strength, label: "Faible", color: "bg-red-500" }
        if (strength <= 50) return { strength, label: "Moyen", color: "bg-orange-500" }
        if (strength <= 75) return { strength, label: "Bon", color: "bg-yellow-500" }
        return { strength, label: "Excellent", color: "bg-green-500" }
    }

    const passwordStrength = getPasswordStrength(formData.password)

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
                    <p className="text-gray-600">Créez votre compte sécurisé</p>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                    <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span>
              Étape {currentStep} sur {totalSteps}
            </span>
                        <span>{Math.round(progress)}%</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                </div>

                {/* Registration Form */}
                <Card className="border-0 shadow-xl">
                    <CardHeader className="space-y-1 pb-6">
                        <CardTitle className="text-2xl font-bold text-center text-blue-900">
                            {currentStep === 1 && "Informations personnelles"}
                            {currentStep === 2 && "Informations entreprise"}
                            {currentStep === 3 && "Sécurité du compte"}
                        </CardTitle>
                        <CardDescription className="text-center text-gray-600">
                            {currentStep === 1 && "Commençons par vos informations de base"}
                            {currentStep === 2 && "Parlez-nous de votre entreprise"}
                            {currentStep === 3 && "Sécurisez votre compte"}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Step 1: Personal Information */}
                            {currentStep === 1 && (
                                <>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                                                Prénom *
                                            </Label>
                                            <div className="relative">
                                                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                                <Input
                                                    id="firstName"
                                                    name="firstName"
                                                    placeholder="Jean"
                                                    value={formData.firstName}
                                                    onChange={handleInputChange}
                                                    className="pl-10 h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                                                />
                                            </div>
                                            {errors.firstName && (
                                                <p className="text-xs text-red-600 flex items-center">
                                                    <AlertCircle className="h-3 w-3 mr-1" />
                                                    {errors.firstName}
                                                </p>
                                            )}
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                                                Nom *
                                            </Label>
                                            <Input
                                                id="lastName"
                                                name="lastName"
                                                placeholder="Dupont"
                                                value={formData.lastName}
                                                onChange={handleInputChange}
                                                className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                                            />
                                            {errors.lastName && (
                                                <p className="text-xs text-red-600 flex items-center">
                                                    <AlertCircle className="h-3 w-3 mr-1" />
                                                    {errors.lastName}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                                            Adresse email *
                                        </Label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="jean.dupont@entreprise.com"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="pl-10 h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                                            />
                                        </div>
                                        {errors.email && (
                                            <p className="text-xs text-red-600 flex items-center">
                                                <AlertCircle className="h-3 w-3 mr-1" />
                                                {errors.email}
                                            </p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                                            Téléphone *
                                        </Label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                            <Input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                placeholder="+33 1 23 45 67 89"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="pl-10 h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                                            />
                                        </div>
                                        {errors.phone && (
                                            <p className="text-xs text-red-600 flex items-center">
                                                <AlertCircle className="h-3 w-3 mr-1" />
                                                {errors.phone}
                                            </p>
                                        )}
                                    </div>
                                </>
                            )}

                            {/* Step 2: Company Information */}
                            {currentStep === 2 && (
                                <>
                                    <div className="space-y-2">
                                        <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                                            Nom de l'entreprise *
                                        </Label>
                                        <div className="relative">
                                            <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                            <Input
                                                id="company"
                                                name="company"
                                                placeholder="Mon Entreprise SAS"
                                                value={formData.company}
                                                onChange={handleInputChange}
                                                className="pl-10 h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                                            />
                                        </div>
                                        {errors.company && (
                                            <p className="text-xs text-red-600 flex items-center">
                                                <AlertCircle className="h-3 w-3 mr-1" />
                                                {errors.company}
                                            </p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="companySize" className="text-sm font-medium text-gray-700">
                                            Taille de l'entreprise *
                                        </Label>
                                        <Select
                                            value={formData.companySize}
                                            onValueChange={(value) => handleSelectChange("companySize", value)}
                                        >
                                            <SelectTrigger className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                                                <Users className="h-4 w-4 text-gray-400 mr-2" />
                                                <SelectValue placeholder="Sélectionnez la taille" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="1-10">1-10 employés</SelectItem>
                                                <SelectItem value="11-50">11-50 employés</SelectItem>
                                                <SelectItem value="51-200">51-200 employés</SelectItem>
                                                <SelectItem value="201-1000">201-1000 employés</SelectItem>
                                                <SelectItem value="1000+">Plus de 1000 employés</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        {errors.companySize && (
                                            <p className="text-xs text-red-600 flex items-center">
                                                <AlertCircle className="h-3 w-3 mr-1" />
                                                {errors.companySize}
                                            </p>
                                        )}
                                    </div>

                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <h4 className="font-medium text-blue-900 mb-2">Services recommandés :</h4>
                                        <ul className="text-sm text-blue-700 space-y-1">
                                            <li className="flex items-center">
                                                <CheckCircle className="h-4 w-4 mr-2" />
                                                Analyse de vulnérabilités
                                            </li>
                                            <li className="flex items-center">
                                                <CheckCircle className="h-4 w-4 mr-2" />
                                                Conformité DORA
                                            </li>
                                            <li className="flex items-center">
                                                <CheckCircle className="h-4 w-4 mr-2" />
                                                Tests POC personnalisés
                                            </li>
                                        </ul>
                                    </div>
                                </>
                            )}

                            {/* Step 3: Security */}
                            {currentStep === 3 && (
                                <>
                                    <div className="space-y-2">
                                        <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                                            Mot de passe *
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
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                            >
                                                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                            </button>
                                        </div>
                                        {formData.password && (
                                            <div className="space-y-2">
                                                <div className="flex items-center justify-between text-xs">
                                                    <span className="text-gray-600">Force du mot de passe</span>
                                                    <span
                                                        className={`font-medium ${passwordStrength.strength >= 75 ? "text-green-600" : passwordStrength.strength >= 50 ? "text-yellow-600" : "text-red-600"}`}
                                                    >
                            {passwordStrength.label}
                          </span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-2">
                                                    <div
                                                        className={`h-2 rounded-full transition-all duration-300 ${passwordStrength.color}`}
                                                        style={{ width: `${passwordStrength.strength}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                        )}
                                        {errors.password && (
                                            <p className="text-xs text-red-600 flex items-center">
                                                <AlertCircle className="h-3 w-3 mr-1" />
                                                {errors.password}
                                            </p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                                            Confirmer le mot de passe *
                                        </Label>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                            <Input
                                                id="confirmPassword"
                                                name="confirmPassword"
                                                type={showConfirmPassword ? "text" : "password"}
                                                placeholder="••••••••"
                                                value={formData.confirmPassword}
                                                onChange={handleInputChange}
                                                className="pl-10 pr-10 h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                            >
                                                {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                            </button>
                                        </div>
                                        {errors.confirmPassword && (
                                            <p className="text-xs text-red-600 flex items-center">
                                                <AlertCircle className="h-3 w-3 mr-1" />
                                                {errors.confirmPassword}
                                            </p>
                                        )}
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex items-start space-x-2">
                                            <Checkbox
                                                id="acceptTerms"
                                                checked={formData.acceptTerms}
                                                onCheckedChange={(checked) =>
                                                    setFormData((prev) => ({ ...prev, acceptTerms: checked as boolean }))
                                                }
                                                className="mt-1"
                                            />
                                            <Label htmlFor="acceptTerms" className="text-sm text-gray-600 cursor-pointer leading-relaxed">
                                                J'accepte les{" "}
                                                <Link href="/terms" className="text-blue-600 hover:text-blue-800 underline">
                                                    conditions d'utilisation
                                                </Link>{" "}
                                                et la{" "}
                                                <Link href="/privacy" className="text-blue-600 hover:text-blue-800 underline">
                                                    politique de confidentialité
                                                </Link>{" "}
                                                *
                                            </Label>
                                        </div>
                                        {errors.acceptTerms && (
                                            <p className="text-xs text-red-600 flex items-center">
                                                <AlertCircle className="h-3 w-3 mr-1" />
                                                {errors.acceptTerms}
                                            </p>
                                        )}

                                        <div className="flex items-start space-x-2">
                                            <Checkbox
                                                id="acceptMarketing"
                                                checked={formData.acceptMarketing}
                                                onCheckedChange={(checked) =>
                                                    setFormData((prev) => ({ ...prev, acceptMarketing: checked as boolean }))
                                                }
                                                className="mt-1"
                                            />
                                            <Label htmlFor="acceptMarketing" className="text-sm text-gray-600 cursor-pointer leading-relaxed">
                                                Je souhaite recevoir des informations sur les nouveautés et offres SecTools
                                            </Label>
                                        </div>
                                    </div>
                                </>
                            )}

                            {/* Navigation Buttons */}
                            <div className="flex justify-between pt-4">
                                {currentStep > 1 && (
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={prevStep}
                                        className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                                    >
                                        Précédent
                                    </Button>
                                )}

                                {currentStep < totalSteps ? (
                                    <Button type="button" onClick={nextStep} className="ml-auto bg-blue-600 hover:bg-blue-700 text-white">
                                        Suivant
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                ) : (
                                    <Button
                                        type="submit"
                                        className="ml-auto bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? (
                                            <div className="flex items-center space-x-2">
                                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                <span>Création...</span>
                                            </div>
                                        ) : (
                                            <div className="flex items-center space-x-2">
                                                <span>Créer mon compte</span>
                                                <CheckCircle className="h-4 w-4" />
                                            </div>
                                        )}
                                    </Button>
                                )}
                            </div>
                        </form>
                    </CardContent>
                </Card>

                {/* Login Link */}
                <div className="text-center mt-6">
                    <p className="text-gray-600">
                        Déjà un compte ?{" "}
                        <Link href="/login" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
                            Se connecter
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
