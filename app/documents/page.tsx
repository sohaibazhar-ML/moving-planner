import { Suspense } from 'react'
import { DocumentList } from '@/components/DocumentList'
import { LoadingState } from '@/components/LoadingState'

export default function DocumentsPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Settlement Document Checklist
          </h1>
          <p className="text-lg text-gray-600">
            Essential documents and steps for settling in a new area
          </p>
          <p className="text-sm text-gray-500 mt-2">
            ⓘ Requirements may vary by individual circumstances. This is general guidance.
          </p>
        </div>

        <Suspense fallback={<LoadingState message="Loading documents..." />}>
          <DocumentList searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  )
}

