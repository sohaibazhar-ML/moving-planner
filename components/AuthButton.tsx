'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { getUIStrings, type SupportedLanguage } from '@/lib/i18n'

export function AuthButton({ lang }: { lang: SupportedLanguage }) {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const strings = getUIStrings(lang)

  useEffect(() => {
    const supabase = createClient()
    
    // Check initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
      setLoading(false)
    })

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
      setLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [])

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.refresh()
  }

  if (loading) {
    return null
  }

  if (user) {
    return (
      <button
        onClick={handleLogout}
        className="text-sm font-medium text-gray-700 hover:text-blue-600"
      >
        {strings.logout}
      </button>
    )
  }

  return (
    <>
      <Link
        href={`/login?lang=${lang}`}
        className="text-sm font-medium text-gray-700 hover:text-blue-600"
      >
        {strings.login}
      </Link>
      <Link
        href={`/signup?lang=${lang}`}
        className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
      >
        {strings.signup}
      </Link>
    </>
  )
}

