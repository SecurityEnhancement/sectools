"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Calendar } from "@/components/ui/calendar"
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
    AlertTriangle,
    Search,
    Download,
    Eye,
    Bell,
    LogOut,
    Home,
    ChevronLeft,
    ChevronRight,
    Play,
    Pause,
    CalendarIcon,
    FileText,
    Target,
    Activity,
    Plus,
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

// Données fictives pour les POC
const pocTests = [
    {
        id: "POC-001",
        name: "Test de pénétration réseau",
        type: "Pentest",
        status: "Terminé",
        progress: 100,
        startDate: "2024-01-01",
        endDate: "2024-01-15",
        duration: "14 jours",
        scope: "Infrastructure réseau",
        findings: 12,
        severity: "Élevée",
        nextTest: "2024-07-01",
    },
    {
        id: "POC-002",
        name: "Validation solution EDR",
        type: "Validation",
        status: "En cours",
        progress: 65,
        startDate: "2024-01-10",
        endDate: "2024-01-25",
        duration: "15 jours",
        scope: "Endpoints Windows/Linux",
        findings: 8,
        severity: "Moyenne",
        nextTest: "-",
    },
    {
        id: "POC-003",
        name: "Test de continuité d'activité",
        type: "Résilience",
        status: "Programmé",
        progress: 0,
        startDate: "2024-02-01",
        endDate: "2024-02-05",
        duration: "5 jours",
        scope: "Services critiques",
        findings: 0,
        severity: "-",
        nextTest: "-",
    },
    {
        id: "POC-004",
        name: "Audit sécurité application web",
        type: "Audit",
        status: "En cours",
        progress: 30,
        startDate: "2024-01-20",
        endDate: "2024-02-10",
        duration: "21 jours",
        scope: "Application e-commerce",
        findings: 3,
        severity: "Critique",
        nextTest: "-",
    },
    {
        id: "POC-005",
        name: "Test de phishing ciblé",
        type: "Social Engineering",
        status: "Terminé",
        progress: 100,
        startDate: "2023-12-15",
        endDate: "2023-12-22",
        duration: "7 jours",
        scope: "Employés département finance",
        findings: 25,
        severity: "Élevée",
        nextTest: "2024-06-15",
    },
]

const pocTypeData = [
    { name: "Pentest", value: 35, color: "#ef4444" },
    { name: "Validation", value: 25, color: "#3b82f6" },
    { name: "Résilience", value: 20, color: "#8b5cf6" },
    { name: "Audit", value: 15, color: "#10b981" },
    { name: "Social Engineering", value: 5, color: "#f59e0b" },
]

const monthlyPocData = [
    { month: "Jan", tests: 8, findings: 45 },
    { month: "Fév", tests: 6, findings: 32 },
    { month: "Mar", tests: 10, findings: 58 },
    { month: "Avr", tests: 7, findings: 41 },
    { month: "Mai", tests: 9, findings: 52 },
    { month: "Juin", tests: 12, findings: 67 },
]

const upcomingTests = [
    {
        id: "POC-006",
        name: "Test de récupération après sinistre",
        date: "2024-02-15",
        type: "Résilience",
        duration: "3 jours",
    },
    {
        id: "POC-007",
        name: "Audit sécurité mobile",
        date: "2024-02-20",
        type: "Audit",
        duration: "10 jours",
    },
    {
        id: "POC-008",
        name: "Test d'intrusion physique",
        date: "2024-03-01",
        type: "Pentest",
        duration: "2 jours",
    },
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
        },
        {
            title: "POC",
            icon: Settings,
            href: "/admin/poc",
            isActive: true,
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
        case "Terminé":
            return "bg-green-100 text-green-800 border-green-200"
        case "En cours":
            return "bg-blue-100 text-blue-800 border-blue-200"
        case "Programmé":
            return "bg-orange-100 text-orange-800 border-orange-200"
        case "Annulé":
            return "bg-red-100 text-red-800 border-red-200"
        default:
            return "bg-gray-100 text-gray-800 border-gray-200"
    }
}

function getTypeColor(type: string) {
    switch (type) {
        case "Pentest":
            return "bg-red-100 text-red-800 border-red-200"
        case "Validation":
            return "bg-blue-100 text-blue-800 border-blue-200"
        case "Résilience":
            return "bg-purple-100 text-purple-800 border-purple-200"
        case "Audit":
            return "bg-green-100 text-green-800 border-green-200"
        case "Social Engineering":
            return "bg-yellow-100 text-yellow-800 border-yellow-200"
        default:
            return "bg-gray-100 text-gray-800 border-gray-200"
    }
}

function getSeverityColor(severity: string) {
    switch (severity) {
        case "Critique":
            return "bg-red-100 text-red-800 border-red-200"
        case "Élevée":
            return "bg-orange-100 text-orange-800 border-orange-200"
        case "Moyenne":
            return "bg-yellow-100 text-yellow-800 border-yellow-200"
        case "Faible":
            return "bg-green-100 text-green-800 border-green-200"
        default:
            return "bg-gray-100 text-gray-800 border-gray-200"
    }
}

export default function PocAdmin() {
    const [searchTerm, setSearchTerm] = useState("")
    const [typeFilter, setTypeFilter] = useState("all")
    const [statusFilter, setStatusFilter] = useState("all")
    const [currentPage, setCurrentPage] = useState(1)
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
    const itemsPerPage = 5

    const filteredTests = pocTests.filter((test) => {
        const matchesSearch =
            test.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            test.id.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesType = typeFilter === "all" || test.type === typeFilter
        const matchesStatus = statusFilter === "all" || test.status === statusFilter

        return matchesSearch && matchesType && matchesStatus
    })

    const totalPages = Math.ceil(filteredTests.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const paginatedTests = filteredTests.slice(startIndex, startIndex + itemsPerPage)

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
                        <span className="text-blue-600">POC</span>
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
                        <h1 className="text-3xl font-bold text-blue-900 mb-2">Proof of Concept (POC)</h1>
                        <p className="text-gray-600">Gestion et suivi de vos tests de sécurité et validations</p>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                        <Card className="border-0 shadow-md">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium text-gray-600">Tests Actifs</CardTitle>
                                <Activity className="h-4 w-4 text-blue-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-blue-600">3</div>
                                <p className="text-xs text-gray-500">2 en cours, 1 programmé</p>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-md">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium text-gray-600">Tests Terminés</CardTitle>
                                <CheckCircle className="h-4 w-4 text-green-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-green-600">15</div>
                                <p className="text-xs text-gray-500">
                                    <span className="text-green-500">+3</span> ce mois
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-md">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium text-gray-600">Findings Critiques</CardTitle>
                                <AlertTriangle className="h-4 w-4 text-red-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-red-600">8</div>
                                <p className="text-xs text-gray-500">Nécessitent une action</p>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-md">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium text-gray-600">Taux de Réussite</CardTitle>
                                <Target className="h-4 w-4 text-green-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-green-600">87%</div>
                                <p className="text-xs text-gray-500">Objectifs atteints</p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Charts and Calendar */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                        <Card className="border-0 shadow-md lg:col-span-2">
                            <CardHeader>
                                <CardTitle className="text-lg font-semibold text-blue-900">Activité POC Mensuelle</CardTitle>
                                <CardDescription>Nombre de tests et findings par mois</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ResponsiveContainer width="100%" height={300}>
                                    <LineChart data={monthlyPocData}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                                        <XAxis dataKey="month" stroke="#64748b" />
                                        <YAxis stroke="#64748b" />
                                        <Tooltip />
                                        <Line type="monotone" dataKey="tests" stroke="#3b82f6" strokeWidth={2} name="Tests" />
                                        <Line type="monotone" dataKey="findings" stroke="#ef4444" strokeWidth={2} name="Findings" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-md">
                            <CardHeader>
                                <CardTitle className="text-lg font-semibold text-blue-900">Calendrier des Tests</CardTitle>
                                <CardDescription>Planification des prochains POC</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Calendar
                                    mode="single"
                                    selected={selectedDate}
                                    onSelect={setSelectedDate}
                                    className="rounded-md border"
                                />
                            </CardContent>
                        </Card>
                    </div>

                    {/* Type Distribution and Upcoming Tests */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                        <Card className="border-0 shadow-md">
                            <CardHeader>
                                <CardTitle className="text-lg font-semibold text-blue-900">Répartition par Type</CardTitle>
                                <CardDescription>Distribution des tests par catégorie</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ResponsiveContainer width="100%" height={300}>
                                    <PieChart>
                                        <Pie
                                            data={pocTypeData}
                                            cx="50%"
                                            cy="50%"
                                            outerRadius={80}
                                            fill="#8884d8"
                                            dataKey="value"
                                            label={({ name, value }) => `${name}: ${value}%`}
                                        >
                                            {pocTypeData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                    </PieChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-md">
                            <CardHeader>
                                <CardTitle className="text-lg font-semibold text-blue-900">Tests Programmés</CardTitle>
                                <CardDescription>Prochains tests à venir</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {upcomingTests.map((test) => (
                                        <div key={test.id} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                                            <div className="flex-1">
                                                <h4 className="font-medium text-blue-900">{test.name}</h4>
                                                <div className="flex items-center space-x-4 mt-1">
                                                    <Badge className={getTypeColor(test.type)}>{test.type}</Badge>
                                                    <span className="text-sm text-gray-600">{test.duration}</span>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="flex items-center text-sm text-gray-600">
                                                    <CalendarIcon className="h-4 w-4 mr-1" />
                                                    {test.date}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                                        <Plus className="h-4 w-4 mr-2" />
                                        Programmer un nouveau test
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Tests Table */}
                    <Card className="border-0 shadow-md">
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle className="text-lg font-semibold text-blue-900">Liste des Tests POC</CardTitle>
                                    <CardDescription>Historique et suivi de tous vos tests de sécurité</CardDescription>
                                </div>
                                <div className="flex space-x-2">
                                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                                        <Plus className="h-4 w-4 mr-2" />
                                        Nouveau Test
                                    </Button>
                                    <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50 bg-transparent">
                                        <Download className="h-4 w-4 mr-2" />
                                        Exporter
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
                                            placeholder="Rechercher par nom ou ID..."
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            className="pl-10"
                                        />
                                    </div>
                                </div>
                                <Select value={typeFilter} onValueChange={setTypeFilter}>
                                    <SelectTrigger className="w-full md:w-48">
                                        <SelectValue placeholder="Type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">Tous les types</SelectItem>
                                        <SelectItem value="Pentest">Pentest</SelectItem>
                                        <SelectItem value="Validation">Validation</SelectItem>
                                        <SelectItem value="Résilience">Résilience</SelectItem>
                                        <SelectItem value="Audit">Audit</SelectItem>
                                        <SelectItem value="Social Engineering">Social Engineering</SelectItem>
                                    </SelectContent>
                                </Select>
                                <Select value={statusFilter} onValueChange={setStatusFilter}>
                                    <SelectTrigger className="w-full md:w-48">
                                        <SelectValue placeholder="Statut" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">Tous les statuts</SelectItem>
                                        <SelectItem value="Terminé">Terminé</SelectItem>
                                        <SelectItem value="En cours">En cours</SelectItem>
                                        <SelectItem value="Programmé">Programmé</SelectItem>
                                        <SelectItem value="Annulé">Annulé</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Table */}
                            <div className="rounded-md border border-gray-200">
                                <Table>
                                    <TableHeader>
                                        <TableRow className="bg-gray-50">
                                            <TableHead className="font-semibold text-gray-900">ID</TableHead>
                                            <TableHead className="font-semibold text-gray-900">Nom du Test</TableHead>
                                            <TableHead className="font-semibold text-gray-900">Type</TableHead>
                                            <TableHead className="font-semibold text-gray-900">Statut</TableHead>
                                            <TableHead className="font-semibold text-gray-900">Progression</TableHead>
                                            <TableHead className="font-semibold text-gray-900">Durée</TableHead>
                                            <TableHead className="font-semibold text-gray-900">Findings</TableHead>
                                            <TableHead className="font-semibold text-gray-900">Sévérité Max</TableHead>
                                            <TableHead className="font-semibold text-gray-900">Actions</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {paginatedTests.map((test) => (
                                            <TableRow key={test.id} className="hover:bg-blue-50/50">
                                                <TableCell className="font-medium text-blue-600">{test.id}</TableCell>
                                                <TableCell className="max-w-xs">
                                                    <div className="truncate" title={test.name}>
                                                        {test.name}
                                                    </div>
                                                    <div className="text-xs text-gray-500">{test.scope}</div>
                                                </TableCell>
                                                <TableCell>
                                                    <Badge className={getTypeColor(test.type)}>{test.type}</Badge>
                                                </TableCell>
                                                <TableCell>
                                                    <Badge className={getStatusColor(test.status)}>{test.status}</Badge>
                                                </TableCell>
                                                <TableCell>
                                                    <div className="flex items-center space-x-2">
                                                        <Progress value={test.progress} className="w-16 h-2" />
                                                        <span className="text-sm text-gray-600">{test.progress}%</span>
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <div className="text-sm">
                                                        <div>{test.duration}</div>
                                                        <div className="text-xs text-gray-500">
                                                            {test.startDate} - {test.endDate}
                                                        </div>
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <span className="font-medium">{test.findings}</span>
                                                </TableCell>
                                                <TableCell>
                                                    {test.severity !== "-" ? (
                                                        <Badge className={getSeverityColor(test.severity)}>{test.severity}</Badge>
                                                    ) : (
                                                        <span className="text-gray-400">-</span>
                                                    )}
                                                </TableCell>
                                                <TableCell>
                                                    <div className="flex space-x-2">
                                                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0" title="Voir détails">
                                                            <Eye className="h-4 w-4" />
                                                        </Button>
                                                        {test.status === "En cours" && (
                                                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0" title="Pause">
                                                                <Pause className="h-4 w-4" />
                                                            </Button>
                                                        )}
                                                        {test.status === "Programmé" && (
                                                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0" title="Démarrer">
                                                                <Play className="h-4 w-4" />
                                                            </Button>
                                                        )}
                                                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0" title="Rapport">
                                                            <FileText className="h-4 w-4" />
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
                                    Affichage de {startIndex + 1} à {Math.min(startIndex + itemsPerPage, filteredTests.length)} sur{" "}
                                    {filteredTests.length} résultats
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
