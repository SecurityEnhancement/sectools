"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
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
    CheckCircle,
    Clock,
    AlertTriangle,
    Search,
    Download,
    Eye,
    Bell,
    LogOut,
    Home,
    ChevronLeft,
    ChevronRight,
    FileText,
    Upload,
    Calendar,
} from "lucide-react"
import Link from "next/link"
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"

// Données fictives pour la conformité DORA
const doraRequirements = [
    {
        id: "DORA-001",
        pillar: "Gouvernance",
        requirement: "Politique de gestion des risques informatiques",
        status: "Conforme",
        progress: 100,
        lastUpdate: "2024-01-15",
        evidence: "Politique_Risques_v2.1.pdf",
        nextReview: "2024-07-15",
    },
    {
        id: "DORA-002",
        pillar: "Gouvernance",
        requirement: "Responsabilités du conseil d'administration",
        status: "En cours",
        progress: 75,
        lastUpdate: "2024-01-10",
        evidence: "Charte_CA_v1.2.pdf",
        nextReview: "2024-03-15",
    },
    {
        id: "DORA-003",
        pillar: "Gestion des risques",
        requirement: "Cadre de gestion des risques informatiques",
        status: "Conforme",
        progress: 100,
        lastUpdate: "2024-01-12",
        evidence: "Cadre_Risques_IT.pdf",
        nextReview: "2024-06-12",
    },
    {
        id: "DORA-004",
        pillar: "Gestion des risques",
        requirement: "Identification des actifs critiques",
        status: "Non conforme",
        progress: 30,
        lastUpdate: "2024-01-08",
        evidence: "En attente",
        nextReview: "2024-02-08",
    },
    {
        id: "DORA-005",
        pillar: "Résilience opérationnelle",
        requirement: "Plan de continuité d'activité",
        status: "En cours",
        progress: 85,
        lastUpdate: "2024-01-14",
        evidence: "PCA_v3.0.pdf",
        nextReview: "2024-04-14",
    },
    {
        id: "DORA-006",
        pillar: "Gestion des tiers",
        requirement: "Évaluation des fournisseurs critiques",
        status: "Conforme",
        progress: 100,
        lastUpdate: "2024-01-13",
        evidence: "Eval_Fournisseurs.xlsx",
        nextReview: "2024-05-13",
    },
    {
        id: "DORA-007",
        pillar: "Tests et audits",
        requirement: "Tests de pénétration annuels",
        status: "En cours",
        progress: 60,
        lastUpdate: "2024-01-11",
        evidence: "Rapport_Pentest_Q4.pdf",
        nextReview: "2024-12-31",
    },
]

const complianceByPillar = [
    { name: "Gouvernance", value: 87, color: "#3b82f6", total: 15, compliant: 13 },
    { name: "Gestion des risques", value: 65, color: "#06b6d4", total: 20, compliant: 13 },
    { name: "Résilience", value: 92, color: "#8b5cf6", total: 12, compliant: 11 },
    { name: "Gestion des tiers", value: 78, color: "#10b981", total: 9, compliant: 7 },
    { name: "Tests et audits", value: 95, color: "#f59e0b", total: 8, compliant: 8 },
]

const complianceTrend = [
    { month: "Jan", conformite: 68 },
    { month: "Fév", conformite: 72 },
    { month: "Mar", conformite: 75 },
    { month: "Avr", conformite: 78 },
    { month: "Mai", conformite: 82 },
    { month: "Juin", conformite: 85 },
]

function AppSidebar() {
    const menuItems = [
        {
            title: "Dashboard",
            icon: Home,
            href: "/admin",
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
            isActive: true,
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

function getStatusColor(status: string) {
    switch (status) {
        case "Conforme":
            return "bg-green-100 text-green-800 border-green-200"
        case "En cours":
            return "bg-blue-100 text-blue-800 border-blue-200"
        case "Non conforme":
            return "bg-red-100 text-red-800 border-red-200"
        default:
            return "bg-gray-100 text-gray-800 border-gray-200"
    }
}

function getPillarColor(pillar: string) {
    switch (pillar) {
        case "Gouvernance":
            return "bg-blue-100 text-blue-800 border-blue-200"
        case "Gestion des risques":
            return "bg-cyan-100 text-cyan-800 border-cyan-200"
        case "Résilience opérationnelle":
            return "bg-purple-100 text-purple-800 border-purple-200"
        case "Gestion des tiers":
            return "bg-green-100 text-green-800 border-green-200"
        case "Tests et audits":
            return "bg-yellow-100 text-yellow-800 border-yellow-200"
        default:
            return "bg-gray-100 text-gray-800 border-gray-200"
    }
}

export default function DoraComplianceAdmin() {
    const [searchTerm, setSearchTerm] = useState("")
    const [pillarFilter, setPillarFilter] = useState("all")
    const [statusFilter, setStatusFilter] = useState("all")
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 5

    const filteredRequirements = doraRequirements.filter((req) => {
        const matchesSearch =
            req.requirement.toLowerCase().includes(searchTerm.toLowerCase()) ||
            req.id.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesPillar = pillarFilter === "all" || req.pillar === pillarFilter
        const matchesStatus = statusFilter === "all" || req.status === statusFilter

        return matchesSearch && matchesPillar && matchesStatus
    })

    const totalPages = Math.ceil(filteredRequirements.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const paginatedRequirements = filteredRequirements.slice(startIndex, startIndex + itemsPerPage)

    const overallCompliance = Math.round(
        complianceByPillar.reduce((acc, pillar) => acc + pillar.value, 0) / complianceByPillar.length,
    )

    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                {/* Header */}
                <header className="flex h-16 shrink-0 items-center gap-2 border-b border-blue-100 px-4 bg-white">
                    <SidebarTrigger className="-ml-1" />
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Link href="/admin" className="hover:text-blue-600">
                            Dashboard
                        </Link>
                        <span>/</span>
                        <span className="text-blue-600">Conformité DORA</span>
                    </div>
                    <div className="flex-1" />
                    <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="sm" className="relative">
                            <Bell className="h-5 w-5" />
                            <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
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
                    {/* Page Header */}
                    <div className="mb-6">
                        <h1 className="text-3xl font-bold text-blue-900 mb-2">Conformité DORA</h1>
                        <p className="text-gray-600">Suivi de votre conformité au règlement européen DORA</p>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                        <Card className="border-0 shadow-md">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium text-gray-600">Conformité Globale</CardTitle>
                                <FileCheck className="h-4 w-4 text-blue-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-blue-600">{overallCompliance}%</div>
                                <Progress value={overallCompliance} className="mt-2" />
                                <p className="text-xs text-gray-500 mt-1">
                                    <span className="text-green-500">+3%</span> ce mois
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-md">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium text-gray-600">Exigences Conformes</CardTitle>
                                <CheckCircle className="h-4 w-4 text-green-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-green-600">52</div>
                                <p className="text-xs text-gray-500">Sur 64 exigences totales</p>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-md">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium text-gray-600">En cours</CardTitle>
                                <Clock className="h-4 w-4 text-orange-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-orange-600">8</div>
                                <p className="text-xs text-gray-500">Actions en cours</p>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-md">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium text-gray-600">Non conformes</CardTitle>
                                <AlertTriangle className="h-4 w-4 text-red-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-red-600">4</div>
                                <p className="text-xs text-gray-500">Nécessitent une action</p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Charts */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                        <Card className="border-0 shadow-md">
                            <CardHeader>
                                <CardTitle className="text-lg font-semibold text-blue-900">Conformité par Pilier</CardTitle>
                                <CardDescription>Pourcentage de conformité pour chaque pilier DORA</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ResponsiveContainer width="100%" height={300}>
                                    <BarChart data={complianceByPillar}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                                        <XAxis dataKey="name" stroke="#64748b" angle={-45} textAnchor="end" height={80} />
                                        <YAxis stroke="#64748b" />
                                        <Tooltip
                                            formatter={(value, name) => [`${value}%`, "Conformité"]}
                                            labelFormatter={(label) => `Pilier: ${label}`}
                                        />
                                        <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-md">
                            <CardHeader>
                                <CardTitle className="text-lg font-semibold text-blue-900">Évolution de la Conformité</CardTitle>
                                <CardDescription>Progression de votre conformité DORA dans le temps</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ResponsiveContainer width="100%" height={300}>
                                    <PieChart>
                                        <Pie
                                            data={[
                                                { name: "Conforme", value: 52, color: "#22c55e" },
                                                { name: "En cours", value: 8, color: "#f97316" },
                                                { name: "Non conforme", value: 4, color: "#ef4444" },
                                            ]}
                                            cx="50%"
                                            cy="50%"
                                            outerRadius={80}
                                            fill="#8884d8"
                                            dataKey="value"
                                            label={({ name, value }) => `${name}: ${value}`}
                                        >
                                            <Cell fill="#22c55e" />
                                            <Cell fill="#f97316" />
                                            <Cell fill="#ef4444" />
                                        </Pie>
                                        <Tooltip />
                                    </PieChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Pillar Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                        {complianceByPillar.map((pillar, index) => (
                            <Card key={index} className="border-0 shadow-md">
                                <CardHeader className="pb-3">
                                    <div className="flex items-center justify-between">
                                        <CardTitle className="text-lg font-semibold text-blue-900">{pillar.name}</CardTitle>
                                        <Badge className={getPillarColor(pillar.name)}>{pillar.value}%</Badge>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        <Progress value={pillar.value} className="h-2" />
                                        <div className="flex justify-between text-sm text-gray-600">
                                            <span>{pillar.compliant} conformes</span>
                                            <span>{pillar.total - pillar.compliant} restantes</span>
                                        </div>
                                        <div className="text-xs text-gray-500">{pillar.total} exigences au total</div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Requirements Table */}
                    <Card className="border-0 shadow-md">
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle className="text-lg font-semibold text-blue-900">Exigences DORA</CardTitle>
                                    <CardDescription>Détail des exigences et de leur statut de conformité</CardDescription>
                                </div>
                                <div className="flex space-x-2">
                                    <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50 bg-transparent">
                                        <Upload className="h-4 w-4 mr-2" />
                                        Importer preuves
                                    </Button>
                                    <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50 bg-transparent">
                                        <Download className="h-4 w-4 mr-2" />
                                        Rapport complet
                                    </Button>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col md:flex-row gap-4 mb-6">
                                <div className="flex-1">
                                    <div className="relative">
                                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                        <Input
                                            placeholder="Rechercher par ID ou exigence..."
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            className="pl-10"
                                        />
                                    </div>
                                </div>
                                <Select value={pillarFilter} onValueChange={setPillarFilter}>
                                    <SelectTrigger className="w-full md:w-48">
                                        <SelectValue placeholder="Pilier" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">Tous les piliers</SelectItem>
                                        <SelectItem value="Gouvernance">Gouvernance</SelectItem>
                                        <SelectItem value="Gestion des risques">Gestion des risques</SelectItem>
                                        <SelectItem value="Résilience opérationnelle">Résilience opérationnelle</SelectItem>
                                        <SelectItem value="Gestion des tiers">Gestion des tiers</SelectItem>
                                        <SelectItem value="Tests et audits">Tests et audits</SelectItem>
                                    </SelectContent>
                                </Select>
                                <Select value={statusFilter} onValueChange={setStatusFilter}>
                                    <SelectTrigger className="w-full md:w-48">
                                        <SelectValue placeholder="Statut" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">Tous les statuts</SelectItem>
                                        <SelectItem value="Conforme">Conforme</SelectItem>
                                        <SelectItem value="En cours">En cours</SelectItem>
                                        <SelectItem value="Non conforme">Non conforme</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Table */}
                            <div className="rounded-md border border-gray-200">
                                <Table>
                                    <TableHeader>
                                        <TableRow className="bg-gray-50">
                                            <TableHead className="font-semibold text-gray-900">ID</TableHead>
                                            <TableHead className="font-semibold text-gray-900">Pilier</TableHead>
                                            <TableHead className="font-semibold text-gray-900">Exigence</TableHead>
                                            <TableHead className="font-semibold text-gray-900">Statut</TableHead>
                                            <TableHead className="font-semibold text-gray-900">Progression</TableHead>
                                            <TableHead className="font-semibold text-gray-900">Preuves</TableHead>
                                            <TableHead className="font-semibold text-gray-900">Prochaine révision</TableHead>
                                            <TableHead className="font-semibold text-gray-900">Actions</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {paginatedRequirements.map((req) => (
                                            <TableRow key={req.id} className="hover:bg-blue-50/50">
                                                <TableCell className="font-medium text-blue-600">{req.id}</TableCell>
                                                <TableCell>
                                                    <Badge className={getPillarColor(req.pillar)}>{req.pillar}</Badge>
                                                </TableCell>
                                                <TableCell className="max-w-xs">
                                                    <div className="truncate" title={req.requirement}>
                                                        {req.requirement}
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <Badge className={getStatusColor(req.status)}>{req.status}</Badge>
                                                </TableCell>
                                                <TableCell>
                                                    <div className="flex items-center space-x-2">
                                                        <Progress value={req.progress} className="w-16 h-2" />
                                                        <span className="text-sm text-gray-600">{req.progress}%</span>
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    {req.evidence !== "En attente" ? (
                                                        <div className="flex items-center space-x-1">
                                                            <FileText className="h-4 w-4 text-blue-500" />
                                                            <span className="text-sm text-blue-600 truncate max-w-24" title={req.evidence}>
                                {req.evidence}
                              </span>
                                                        </div>
                                                    ) : (
                                                        <span className="text-sm text-gray-400">En attente</span>
                                                    )}
                                                </TableCell>
                                                <TableCell>
                                                    <div className="flex items-center space-x-1">
                                                        <Calendar className="h-4 w-4 text-gray-400" />
                                                        <span className="text-sm text-gray-600">{req.nextReview}</span>
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <div className="flex space-x-2">
                                                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0" title="Voir détails">
                                                            <Eye className="h-4 w-4" />
                                                        </Button>
                                                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0" title="Marquer conforme">
                                                            <CheckCircle className="h-4 w-4" />
                                                        </Button>
                                                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0" title="Ajouter preuve">
                                                            <Upload className="h-4 w-4" />
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
                                    Affichage de {startIndex + 1} à {Math.min(startIndex + itemsPerPage, filteredRequirements.length)} sur{" "}
                                    {filteredRequirements.length} résultats
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
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
