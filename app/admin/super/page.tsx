"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
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
    Users,
    Settings,
    BarChart3,
    Activity,
    DollarSign,
    Eye,
    Edit,
    Trash2,
    Plus,
    Search,
    Download,
    Bell,
    LogOut,
    Home,
    ChevronLeft,
    ChevronRight,
    UserCheck,
    AlertCircle,
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
    PieChart,
    Pie,
    Cell,
} from "recharts"

// Données fictives pour les clients
const clients = [
    {
        id: 1,
        company: "Entreprise ABC",
        contact: "admin@abc.com",
        services: ["Vulnérabilité", "DORA", "POC"],
        status: "Actif",
        lastLogin: "2024-01-15",
        plan: "Premium",
    },
    {
        id: 2,
        company: "TechCorp Ltd",
        contact: "security@techcorp.com",
        services: ["Vulnérabilité", "DORA"],
        status: "Actif",
        lastLogin: "2024-01-14",
        plan: "Standard",
    },
    {
        id: 3,
        company: "SecureBank SA",
        contact: "it@securebank.fr",
        services: ["DORA", "POC"],
        status: "Suspendu",
        lastLogin: "2024-01-10",
        plan: "Enterprise",
    },
    {
        id: 4,
        company: "DataFlow Inc",
        contact: "admin@dataflow.com",
        services: ["Vulnérabilité"],
        status: "Actif",
        lastLogin: "2024-01-13",
        plan: "Basic",
    },
]

const monthlyData = [
    { month: "Jan", clients: 45, revenue: 125000 },
    { month: "Fév", clients: 52, revenue: 142000 },
    { month: "Mar", clients: 48, revenue: 138000 },
    { month: "Avr", clients: 61, revenue: 165000 },
    { month: "Mai", clients: 55, revenue: 158000 },
    { month: "Juin", clients: 67, revenue: 185000 },
]

const serviceUsageData = [
    { name: "Vulnérabilité", value: 45, color: "#3b82f6" },
    { name: "DORA", value: 38, color: "#06b6d4" },
    { name: "POC", value: 22, color: "#8b5cf6" },
    { name: "Outil 4", value: 8, color: "#10b981" },
]

function SuperAdminSidebar() {
    const menuItems = [
        {
            title: "Dashboard",
            icon: Home,
            href: "/admin/super",
            isActive: true,
        },
        {
            title: "Gestion Clients",
            icon: Users,
            href: "/admin/super/clients",
        },
        {
            title: "Gestion Services",
            icon: Settings,
            href: "/admin/super/services",
        },
        {
            title: "Logs Système",
            icon: Activity,
            href: "/admin/super/logs",
        },
        {
            title: "Paramètres",
            icon: Settings,
            href: "/admin/super/settings",
        },
    ]

    return (
        <Sidebar>
            <SidebarHeader className="border-b border-red-100 p-4">
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                        <Shield className="h-5 w-5 text-white" />
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-red-900">SecTools</h2>
                        <p className="text-sm text-gray-500">Super Admin</p>
                    </div>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="text-red-900 font-semibold">Administration</SidebarGroupLabel>
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

function getStatusColor(status: string) {
    switch (status) {
        case "Actif":
            return "bg-green-100 text-green-800 border-green-200"
        case "Suspendu":
            return "bg-red-100 text-red-800 border-red-200"
        case "Inactif":
            return "bg-gray-100 text-gray-800 border-gray-200"
        default:
            return "bg-gray-100 text-gray-800 border-gray-200"
    }
}

function getPlanColor(plan: string) {
    switch (plan) {
        case "Enterprise":
            return "bg-purple-100 text-purple-800 border-purple-200"
        case "Premium":
            return "bg-blue-100 text-blue-800 border-blue-200"
        case "Standard":
            return "bg-green-100 text-green-800 border-green-200"
        case "Basic":
            return "bg-gray-100 text-gray-800 border-gray-200"
        default:
            return "bg-gray-100 text-gray-800 border-gray-200"
    }
}

export default function SuperAdminDashboard() {
    const [searchTerm, setSearchTerm] = useState("")
    const [statusFilter, setStatusFilter] = useState("all")
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 5

    const filteredClients = clients.filter((client) => {
        const matchesSearch =
            client.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
            client.contact.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesStatus = statusFilter === "all" || client.status === statusFilter

        return matchesSearch && matchesStatus
    })

    const totalPages = Math.ceil(filteredClients.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const paginatedClients = filteredClients.slice(startIndex, startIndex + itemsPerPage)

    return (
        <SidebarProvider>
            <SuperAdminSidebar />
            <SidebarInset>
                {/* Header */}
                <header className="flex h-16 shrink-0 items-center gap-2 border-b border-red-100 px-4 bg-white">
                    <SidebarTrigger className="-ml-1" />
                    <div className="flex items-center space-x-2">
                        <Badge className="bg-red-100 text-red-800 border-red-200">Mode Super Admin</Badge>

                        {/* Nouveau bouton retour dashboard client */}
                        <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="border-blue-200 text-blue-600 hover:bg-blue-50 bg-transparent"
                        >
                            <Link href="/admin">
                                <Home className="h-4 w-4 mr-2" />
                                Dashboard Client
                            </Link>
                        </Button>
                    </div>
                    <div className="flex-1" />
                    <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="sm" className="relative">
                            <Bell className="h-5 w-5" />
                            <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                5
              </span>
                        </Button>
                        <div className="flex items-center space-x-2">
                            <div className="text-right">
                                <p className="text-sm font-medium text-red-900">Super Admin</p>
                                <p className="text-xs text-gray-500">admin@sectools.com</p>
                            </div>
                            <Button variant="ghost" size="sm">
                                <LogOut className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <div className="flex flex-1 flex-col gap-4 p-6 bg-red-50/30">
                    {/* Page Header */}
                    <div className="mb-6">
                        <h1 className="text-3xl font-bold text-red-900 mb-2">Dashboard Super Admin</h1>
                        <p className="text-gray-600">Vue d'ensemble de la plateforme SecTools</p>
                    </div>

                    {/* Global Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                        <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium text-gray-600">Clients Actifs</CardTitle>
                                <Users className="h-4 w-4 text-blue-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-blue-600">67</div>
                                <p className="text-xs text-gray-500">
                                    <span className="text-green-500">+8%</span> ce mois
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium text-gray-600">Revenus Mensuels</CardTitle>
                                <DollarSign className="h-4 w-4 text-green-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-green-600">185K€</div>
                                <p className="text-xs text-gray-500">
                                    <span className="text-green-500">+12%</span> vs mois dernier
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium text-gray-600">Utilisation Système</CardTitle>
                                <Activity className="h-4 w-4 text-orange-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-orange-600">78%</div>
                                <p className="text-xs text-gray-500">Charge serveur moyenne</p>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium text-gray-600">Incidents</CardTitle>
                                <AlertCircle className="h-4 w-4 text-red-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-red-600">3</div>
                                <p className="text-xs text-gray-500">Incidents actifs</p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Charts Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                        {/* Revenue and Clients Trend */}
                        <Card className="border-0 shadow-md">
                            <CardHeader>
                                <CardTitle className="text-lg font-semibold text-red-900">Évolution Clients & Revenus</CardTitle>
                                <CardDescription>Croissance mensuelle des clients et revenus</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ResponsiveContainer width="100%" height={300}>
                                    <LineChart data={monthlyData}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                                        <XAxis dataKey="month" stroke="#64748b" />
                                        <YAxis yAxisId="left" stroke="#64748b" />
                                        <YAxis yAxisId="right" orientation="right" stroke="#64748b" />
                                        <Tooltip />
                                        <Line
                                            yAxisId="left"
                                            type="monotone"
                                            dataKey="clients"
                                            stroke="#3b82f6"
                                            strokeWidth={3}
                                            name="Clients"
                                        />
                                        <Line
                                            yAxisId="right"
                                            type="monotone"
                                            dataKey="revenue"
                                            stroke="#22c55e"
                                            strokeWidth={3}
                                            name="Revenus (€)"
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>

                        {/* Service Usage Distribution */}
                        <Card className="border-0 shadow-md">
                            <CardHeader>
                                <CardTitle className="text-lg font-semibold text-red-900">Utilisation des Services</CardTitle>
                                <CardDescription>Répartition de l'utilisation par service</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ResponsiveContainer width="100%" height={300}>
                                    <PieChart>
                                        <Pie
                                            data={serviceUsageData}
                                            cx="50%"
                                            cy="50%"
                                            outerRadius={80}
                                            fill="#8884d8"
                                            dataKey="value"
                                            label={({ name, value }) => `${name}: ${value}`}
                                        >
                                            {serviceUsageData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                    </PieChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Client Management Section */}
                    <Card className="border-0 shadow-md">
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle className="text-lg font-semibold text-red-900">Gestion des Clients</CardTitle>
                                    <CardDescription>Liste et gestion des clients de la plateforme</CardDescription>
                                </div>
                                <Button className="bg-red-600 hover:bg-red-700 text-white">
                                    <Plus className="h-4 w-4 mr-2" />
                                    Nouveau Client
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col md:flex-row gap-4 mb-6">
                                <div className="flex-1">
                                    <div className="relative">
                                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                        <Input
                                            placeholder="Rechercher par entreprise ou contact..."
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            className="pl-10"
                                        />
                                    </div>
                                </div>
                                <Select value={statusFilter} onValueChange={setStatusFilter}>
                                    <SelectTrigger className="w-full md:w-48">
                                        <SelectValue placeholder="Statut" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">Tous les statuts</SelectItem>
                                        <SelectItem value="Actif">Actif</SelectItem>
                                        <SelectItem value="Suspendu">Suspendu</SelectItem>
                                        <SelectItem value="Inactif">Inactif</SelectItem>
                                    </SelectContent>
                                </Select>
                                <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50 bg-transparent">
                                    <Download className="h-4 w-4 mr-2" />
                                    Exporter
                                </Button>
                            </div>

                            {/* Clients Table */}
                            <div className="rounded-md border border-gray-200">
                                <Table>
                                    <TableHeader>
                                        <TableRow className="bg-gray-50">
                                            <TableHead className="font-semibold text-gray-900">Entreprise</TableHead>
                                            <TableHead className="font-semibold text-gray-900">Contact</TableHead>
                                            <TableHead className="font-semibold text-gray-900">Services</TableHead>
                                            <TableHead className="font-semibold text-gray-900">Plan</TableHead>
                                            <TableHead className="font-semibold text-gray-900">Statut</TableHead>
                                            <TableHead className="font-semibold text-gray-900">Dernière Connexion</TableHead>
                                            <TableHead className="font-semibold text-gray-900">Actions</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {paginatedClients.map((client) => (
                                            <TableRow key={client.id} className="hover:bg-red-50/50">
                                                <TableCell className="font-medium text-red-600">{client.company}</TableCell>
                                                <TableCell>{client.contact}</TableCell>
                                                <TableCell>
                                                    <div className="flex flex-wrap gap-1">
                                                        {client.services.map((service) => (
                                                            <Badge key={service} variant="outline" className="text-xs">
                                                                {service}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <Badge className={getPlanColor(client.plan)}>{client.plan}</Badge>
                                                </TableCell>
                                                <TableCell>
                                                    <Badge className={getStatusColor(client.status)}>{client.status}</Badge>
                                                </TableCell>
                                                <TableCell>{client.lastLogin}</TableCell>
                                                <TableCell>
                                                    <div className="flex space-x-2">
                                                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0" title="Voir détails">
                                                            <Eye className="h-4 w-4" />
                                                        </Button>
                                                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0" title="Modifier">
                                                            <Edit className="h-4 w-4" />
                                                        </Button>
                                                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0" title="Accéder au dashboard">
                                                            <UserCheck className="h-4 w-4" />
                                                        </Button>
                                                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-red-600" title="Supprimer">
                                                            <Trash2 className="h-4 w-4" />
                                                        </Button>
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>

                            {/* Pagination */}
                            <div className="flex items-center justify-between mt-4">
                                <div className="text-sm text-gray-500">
                                    Affichage de {startIndex + 1} à {Math.min(startIndex + itemsPerPage, filteredClients.length)} sur{" "}
                                    {filteredClients.length} résultats
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                                        disabled={currentPage === 1}
                                    >
                                        <ChevronLeft className="h-4 w-4" />
                                    </Button>
                                    <span className="text-sm text-gray-600">
                    Page {currentPage} sur {totalPages}
                  </span>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                                        disabled={currentPage === totalPages}
                                    >
                                        <ChevronRight className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* System Performance */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <Card className="border-0 shadow-md">
                            <CardHeader>
                                <CardTitle className="text-lg font-semibold text-red-900">Performance Système</CardTitle>
                                <CardDescription>Métriques en temps réel</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-600">CPU</span>
                                        <span className="text-sm font-medium">45%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: "45%" }}></div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-600">Mémoire</span>
                                        <span className="text-sm font-medium">67%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-orange-600 h-2 rounded-full" style={{ width: "67%" }}></div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-600">Stockage</span>
                                        <span className="text-sm font-medium">23%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-green-600 h-2 rounded-full" style={{ width: "23%" }}></div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-md">
                            <CardHeader>
                                <CardTitle className="text-lg font-semibold text-red-900">Activité Récente</CardTitle>
                                <CardDescription>Dernières actions administratives</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm text-gray-900">Nouveau client ajouté</p>
                                            <p className="text-xs text-gray-500">Il y a 2h</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm text-gray-900">Mise à jour système</p>
                                            <p className="text-xs text-gray-500">Il y a 4h</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm text-gray-900">Alerte performance</p>
                                            <p className="text-xs text-gray-500">Il y a 6h</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-md">
                            <CardHeader>
                                <CardTitle className="text-lg font-semibold text-red-900">Actions Rapides</CardTitle>
                                <CardDescription>Raccourcis administratifs</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white justify-start">
                                        <Plus className="h-4 w-4 mr-2" />
                                        Ajouter un client
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="w-full border-red-200 text-red-600 hover:bg-red-50 justify-start bg-transparent"
                                    >
                                        <Settings className="h-4 w-4 mr-2" />
                                        Configuration système
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="w-full border-red-200 text-red-600 hover:bg-red-50 justify-start bg-transparent"
                                    >
                                        <BarChart3 className="h-4 w-4 mr-2" />
                                        Rapport global
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="w-full border-red-200 text-red-600 hover:bg-red-50 justify-start bg-transparent"
                                    >
                                        <Activity className="h-4 w-4 mr-2" />
                                        Logs système
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
