'use client'

import { useState } from 'react'

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

export function DocumentItemCard({ document }: { document: DocumentItem }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
      >
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {document.title}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2">
              {document.description}
            </p>
          </div>
          <svg
            className={`w-5 h-5 text-gray-400 flex-shrink-0 ml-4 transition-transform ${
              isExpanded ? 'transform rotate-180' : ''
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>

      {isExpanded && (
        <div className="px-6 pb-6 space-y-4 border-t border-gray-100 pt-4">
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-1">
              📝 Description
            </h4>
            <p className="text-sm text-gray-600">{document.description}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-1">
              ❓ Why is this needed?
            </h4>
            <p className="text-sm text-gray-600">{document.whyNeeded}</p>
          </div>

          {document.guidance?.whereToApply && (
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-1">
                📍 Where to apply
              </h4>
              <p className="text-sm text-gray-600">
                {document.guidance.whereToApply}
              </p>
            </div>
          )}

          {document.guidance?.requirements && (
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-1">
                📋 Requirements
              </h4>
              <p className="text-sm text-gray-600">
                {document.guidance.requirements}
              </p>
            </div>
          )}

          {document.guidance?.commonMistakes && (
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-1">
                ⚠️ Common mistakes to avoid
              </h4>
              <p className="text-sm text-gray-600">
                {document.guidance.commonMistakes}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

