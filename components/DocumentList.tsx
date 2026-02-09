import React from 'react'
import { DocumentItemCard } from './DocumentItemCard'
import { EmptyState } from './EmptyState'
import { ErrorState } from './ErrorState'
import { normalizeLanguage } from '@/lib/i18n'

interface DocumentItem {
  id: string
  slug: string
  category: string | null
  order: number | null
  title: string
  description: string
  whyNeeded: string
  guidance: {
    whereToApply?: string | null
    requirements?: string | null
    commonMistakes?: string | null
  } | null
}

async function getDocuments(lang: string): Promise<DocumentItem[]> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
  try {
    const res = await fetch(`${baseUrl}/api/documents?lang=${lang}`, {
      cache: 'no-store', // Ensure fresh data
    })
    
    if (!res.ok) {
      throw new Error('Failed to fetch documents')
    }
    
    const data = await res.json()
    return data.items || []
  } catch (error) {
    console.error('Error fetching documents:', error)
    return []
  }
}

export async function DocumentList({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const params = await searchParams
  const lang = normalizeLanguage(params.lang)
  
  try {
    const documents = await getDocuments(lang)
    
    if (documents.length === 0) {
      return (
        <EmptyState
          title="No documents available"
          description="We're currently building this checklist. Please check back soon!"
        />
      )
    }

    // Group by category
    const grouped = documents.reduce((acc, doc) => {
      const category = doc.category || 'general'
      if (!acc[category]) {
        acc[category] = []
      }
      acc[category].push(doc)
      return acc
    }, {} as Record<string, DocumentItem[]>)

    const categoryLabels: Record<string, string> = {
      identity: '🪪 Identity Documents',
      legal: '⚖️ Legal Documents',
      health: '🏥 Health & Insurance',
      housing: '🏠 Housing & Residence',
      employment: '💼 Employment',
      general: '📋 General',
    }

    return (
      <div className="space-y-8">
        {Object.entries(grouped).map(([category, items]) => (
          <div key={category} className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
              {categoryLabels[category] || category}
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {items.map((doc) => (
                <DocumentItemCard key={doc.id} document={doc} />
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  } catch (error) {
    return (
      <ErrorState
        title="Unable to load documents"
        description="Please try refreshing the page. If the problem persists, contact support."
      />
    )
  }
}

