'use client'

import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { LanguageSwitcher } from './LanguageSwitcher'
import { AuthButton } from './AuthButton'
import { getUIStrings, normalizeLanguage } from '@/lib/i18n'

export function Navbar() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const lang = normalizeLanguage(searchParams.get('lang'))
  const strings = getUIStrings(lang)

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link 
              href={`/?lang=${lang}`}
              className="text-xl font-bold text-blue-600 hover:text-blue-700"
            >
              Moving Planner
            </Link>
            <div className="hidden md:flex space-x-4">
              <Link
                href={`/?lang=${lang}`}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  pathname === '/' 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {strings.home}
              </Link>
              <Link
                href={`/documents?lang=${lang}`}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  pathname === '/documents'
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {strings.documents}
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <AuthButton lang={lang} />
          </div>
        </div>
      </div>
    </nav>
  )
}

