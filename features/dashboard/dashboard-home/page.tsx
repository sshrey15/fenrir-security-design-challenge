"use client"

import { useState } from "react"
import { PROJECT_INFO, SEVERITY_CARDS, SCAN_DATA } from "../../../config/home-dashboard-data"
import ProjectInfoBar from "./components/project-info-bar"
import SeverityCards from "./components/severity-cards"
import SearchFilterBar from "./components/search-filter-bar"
import type { ColumnKey, ActiveFilters } from "./components/search-filter-bar"
import ScanTable from "./components/scan-table"

const DEFAULT_COLUMNS: ColumnKey[] = ['name', 'type', 'status', 'progress', 'vulnerability', 'lastScan']

export default function ScanDashboard() {
  const [search, setSearch] = useState("")
  const [visibleColumns, setVisibleColumns] = useState<ColumnKey[]>(DEFAULT_COLUMNS)
  const [activeFilters, setActiveFilters] = useState<ActiveFilters>({ statuses: [], types: [] })

  const filteredData = SCAN_DATA.filter((row) => {
    // Search filter
    const matchesSearch =
      row.name.toLowerCase().includes(search.toLowerCase()) ||
      row.type.toLowerCase().includes(search.toLowerCase())

    // Status filter
    const matchesStatus =
      activeFilters.statuses.length === 0 || activeFilters.statuses.includes(row.status)

    // Type filter
    const matchesType =
      activeFilters.types.length === 0 || activeFilters.types.includes(row.type)

    return matchesSearch && matchesStatus && matchesType
  })

  return (
    <div className="space-y-6 font-sans">
<div className="bg-white dark:bg-[#151B23] rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800">
  <ProjectInfoBar info={PROJECT_INFO} />
  

  <div className="p-3 sm:p-6 pt-0 sm:pt-0">
    <SeverityCards cards={SEVERITY_CARDS} />
  </div>
</div>

      <div className="bg-white dark:bg-[#151B23] rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800">
        <div className="px-4 sm:px-6 pt-4 sm:pt-6">
          <SearchFilterBar
            search={search}
            onSearchChange={setSearch}
            visibleColumns={visibleColumns}
            onColumnsChange={setVisibleColumns}
            activeFilters={activeFilters}
            onFiltersChange={setActiveFilters}
          />
        </div>
        <div className="pt-4">
          <ScanTable
            data={filteredData}
            pageSize={15}
            totalScans={100}
            visibleColumns={visibleColumns}
          />
        </div>
      </div>
    </div>
  )
}