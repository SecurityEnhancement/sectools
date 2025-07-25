"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarInset,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarRail,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import {
    Shield,
    FileCheck,
    Settings,
    Zap,
    AlertTriangle,
    CheckCircle,
    Clock,
    BarChart3,
    Activity,
    Bell,
    LogOut,
    Home,
} from "lucide-react"
import Link from "next/link"
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    PieChart,
    Pie,
    Cell,
} from "recharts"

// Données fictives pour les graphiques
const vulnerabilityTrendData = [
    { month: "Jan", vulnerabilities: 45 },
    { month: "Fév", vulnerabilities: 52 },
    { month: "Mar", vulnerabilities: 38 },
    { month: "Avr", vulnerabilities: 41 },
    { month: "Mai", vulnerabilities: 35 },
    { month: "Juin", vulnerabilities: 28 },
]

const criticalityData = [
    { name: "Critique", value: 8, color: "#ef4444" },
    { name: "Élevée", value: 15, color: "#f97316" },
    { name: "Moyenne", value: 23, color: "#eab308" },
    { name: "Faible", value: 12, color: "#22c55e" },
]

const doraComplianceData = [
    { name: "Gouvernance", value: 85, color: "#3b82f6" },
    { name: "Gestion des risques", value: 92, color: "#06b6d4" },
    { name: "Résilience", value: 78, color: "#8b5cf6" },
    { name: "Gestion des tiers", value: 88, color: "#10b981" },
    { name: "Tests et audits", value: 95, color: "#f59e0b" },
]

const recentActivities = [
    {
        id: 1,
        type: "vulnerability",
        message: "Nouvelle vulnérabilité critique détectée",
        time: "Il y a 2h",
        icon: AlertTriangle,
        color: "text-red-500",
    },
    {
        id: 2,
        type: "dora",
        message: "Audit DORA complété avec succès",
        time: "Il y a 4h",
        icon: CheckCircle,
        color: "text-green-500",
    },
    {
        id: 3,
        type: "poc",
        message: "Test POC programmé pour demain",
        time: "Il y a 6h",
        icon: Clock,
        color: "text-blue-500",
    },
    {
        id: 4,
        type: "system",
        message: "Rapport mensuel généré",
        time: "Il y a 1j",
        icon: FileCheck,
        color: "text-gray-500",
    },
]

function AppSidebar() {
    const menuItems = [
        {
            title: "Dashboard",
            icon: Home,
            href: "/admin",
            isActive: true,
        },
        {
            title: "Vulnérabilité",
            icon: Shield,
            href: "/admin/vulnerability",
        },
        {
            title: "Conformité DORA",
            icon: FileCheck,
            href: "/admin/dora",
        },
        {
            title: "POC",
            icon: Settings,
            href: "/admin/poc",
        },
        {
            title: "Outil 4",
            icon: Zap,
            href: "/admin/tool-4",
        },
    ]

    return (
        <Sidebar>
            <SidebarHeader className="border-b border-blue-100 p-4">
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                        <Shield className="h-5 w-5 text-white" />
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-blue-900">SecTools</h2>
                        <p className="text-sm text-gray-500">Dashboard Client</p>
                    </div>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="text-blue-900 font-semibold">Outils de Sécurité</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menuItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild isActive={item.isActive}>
                                        <Link href={item.href} className="flex items-center space-x-3 p-3 rounded-lg transition-colors">
                                            <item.icon className="h-5 w-5" />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    )
}

export default function AdminDashboard() {
    const [notifications] = useState(3)

    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                {/* Header */}
                <header className="flex h-16 shrink-0 items-center gap-2 border-b border-blue-100 px-4 bg-white">
                    <SidebarTrigger className="-ml-1" />
                    <div className="flex-1" />
                    <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="sm" className="relative">
                            <Bell className="h-5 w-5" />
                            {notifications > 0 && (
                                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {notifications}
                </span>
                            )}
                        </Button>

                        {/* Nouveau bouton Super Admin */}
                        <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="border-red-200 text-red-600 hover:bg-red-50 bg-transparent"
                        >
                            <Link href="/admin/super">
                                <Shield className="h-4 w-4 mr-2" />
                                Mode Super Admin
                            </Link>
                        </Button>

                        <div className="flex items-center space-x-2">
                            <div className="text-right">
                                <p className="text-sm font-medium text-blue-900">Entreprise ABC</p>
                                <p className="text-xs text-gray-500">admin@entreprise-abc.com</p>
                            </div>
                            <Button variant="ghost" size="sm">
                                <LogOut className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <div className="flex flex-1 flex-col gap-4 p-6 bg-blue-50/30">
                    {/* Breadcrumb */}
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <span>Dashboard</span>
                    </div>

                    {/* Welcome Section */}
                    <div className="mb-6">
                        <h1 className="text-3xl font-bold text-blue-900 mb-2">Tableau de Bord</h1>
                        <p className="text-gray-600">Vue d'ensemble de votre sécurité informatique</p>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                        <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium text-gray-600">Vulnérabilités Actives</CardTitle>
                                <AlertTriangle className="h-4 w-4 text-red-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-red-600">58</div>
                                <p className="text-xs text-gray-500">
                                    <span className="text-red-500">+12%</span> par rapport au mois dernier
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium text-gray-600">Conformité DORA</CardTitle>
                                <CheckCircle className="h-4 w-4 text-green-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-green-600">87%</div>
                                <p className="text-xs text-gray-500">
                                    <span className="text-green-500">+5%</span> d'amélioration ce mois
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium text-gray-600">Tests POC</CardTitle>
                                <Activity className="h-4 w-4 text-blue-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-blue-600">3</div>
                                <p className="text-xs text-gray-500">2 en cours, 1 programmé</p>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium text-gray-600">Alertes Actives</CardTitle>
                                <Bell className="h-4 w-4 text-orange-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-orange-600">7</div>
                                <p className="text-xs text-gray-500">3 critiques, 4 moyennes</p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Charts Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                        {/* Vulnerability Trend Chart */}
                        <Card className="border-0 shadow-md">
                            <CardHeader>
                                <CardTitle className="text-lg font-semibold text-blue-900">Évolution des Vulnérabilités</CardTitle>
                                <CardDescription>Nombre de vulnérabilités détectées par mois</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ResponsiveContainer width="100%" height={300}>
                                    <LineChart data={vulnerabilityTrendData}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                                        <XAxis dataKey="month" stroke="#64748b" />
                                        <YAxis stroke="#64748b" />
                                        <Tooltip
                                            contentStyle={{
                                                backgroundColor: "white",
                                                border: "1px solid #e2e8f0",
                                                borderRadius: "8px",
                                            }}
                                        />
                                        <Line
                                            type="monotone"
                                            dataKey="vulnerabilities"
                                            stroke="#3b82f6"
                                            strokeWidth={3}
                                            dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>

                        {/* Criticality Distribution */}
                        <Card className="border-0 shadow-md">
                            <CardHeader>
                                <CardTitle className="text-lg font-semibold text-blue-900">Répartition par Criticité</CardTitle>
                                <CardDescription>Distribution des vulnérabilités par niveau de risque</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ResponsiveContainer width="100%" height={300}>
                                    <BarChart data={criticalityData}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                                        <XAxis dataKey="name" stroke="#64748b" />
                                        <YAxis stroke="#64748b" />
                                        <Tooltip
                                            contentStyle={{
                                                backgroundColor: "white",
                                                border: "1px solid #e2e8f0",
                                                borderRadius: "8px",
                                            }}
                                        />
                                        <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>
                    </div>

                    {/* DORA Compliance and Recent Activities */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* DORA Compliance Chart */}
                        <Card className="border-0 shadow-md">
                            <CardHeader>
                                <CardTitle className="text-lg font-semibold text-blue-900">Conformité DORA par Domaine</CardTitle>
                                <CardDescription>Pourcentage de conformité par pilier DORA</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ResponsiveContainer width="100%" height={300}>
                                    <PieChart>
                                        <Pie
                                            data={doraComplianceData}
                                            cx="50%"
                                            cy="50%"
                                            outerRadius={80}
                                            fill="#8884d8"
                                            dataKey="value"
                                            label={({ name, value }) => `${name}: ${value}%`}
                                        >
                                            {doraComplianceData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                    </PieChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>

                        {/* Recent Activities */}
                        <Card className="border-0 shadow-md">
                            <CardHeader>
                                <CardTitle className="text-lg font-semibold text-blue-900">Activités Récentes</CardTitle>
                                <CardDescription>Dernières actions et événements</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {recentActivities.map((activity) => (
                                        <div
                                            key={activity.id}
                                            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors"
                                        >
                                            <div className={`p-2 rounded-full bg-gray-100 ${activity.color}`}>
                                                <activity.icon className="h-4 w-4" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium text-gray-900">{activity.message}</p>
                                                <p className="text-xs text-gray-500">{activity.time}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-4 pt-4 border-t border-gray-200">
                                    <Button
                                        variant="outline"
                                        className="w-full text-blue-600 border-blue-200 hover:bg-blue-50 bg-transparent"
                                    >
                                        Voir toutes les activités
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Quick Actions */}
                    <Card className="border-0 shadow-md mt-6">
                        <CardHeader>
                            <CardTitle className="text-lg font-semibold text-blue-900">Actions Rapides</CardTitle>
                            <CardDescription>Accès direct aux fonctionnalités principales</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white h-auto p-4 flex-col space-y-2">
                                    <Link href="/admin/vulnerability">
                                        <Shield className="h-6 w-6" />
                                        <span>Analyser Vulnérabilités</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    variant="outline"
                                    className="border-blue-200 text-blue-600 hover:bg-blue-50 h-auto p-4 flex-col space-y-2 bg-transparent"
                                >
                                    <Link href="/admin/dora">
                                        <FileCheck className="h-6 w-6" />
                                        <span>Audit DORA</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    variant="outline"
                                    className="border-blue-200 text-blue-600 hover:bg-blue-50 h-auto p-4 flex-col space-y-2 bg-transparent"
                                >
                                    <Link href="/admin/poc">
                                        <Settings className="h-6 w-6" />
                                        <span>Lancer POC</span>
                                    </Link>
                                </Button>
                                <Button
                                    variant="outline"
                                    className="border-blue-200 text-blue-600 hover:bg-blue-50 h-auto p-4 flex-col space-y-2 bg-transparent"
                                >
                                    <BarChart3 className="h-6 w-6" />
                                    <span>Générer Rapport</span>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
