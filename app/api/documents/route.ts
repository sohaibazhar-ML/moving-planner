import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { normalizeLanguage } from '@/lib/i18n'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const lang = normalizeLanguage(searchParams.get('lang'))

    // Fetch all active document items with translations for the requested language
    const documents = await prisma.documentItem.findMany({
      where: {
        isActive: true,
      },
      include: {
        translations: {
          where: {
            language: lang,
          },
        },
      },
      orderBy: {
        order: 'asc',
      },
    })

    // Transform to API format
    const items = documents
      .filter((doc: any) => doc.translations.length > 0) // Only include documents with translations for this language
      .map((doc: any) => {
        const translation = doc.translations[0]
        return {
          id: doc.id,
          slug: doc.slug,
          category: doc.category,
          order: doc.order,
          title: translation.title,
          description: translation.description,
          whyNeeded: translation.whyNeeded,
          guidance: {
            whereToApply: translation.guidanceWhereToApply,
            requirements: translation.guidanceRequirements,
            commonMistakes: translation.guidanceCommonMistakes,
          },
        }
      })

    return NextResponse.json({ items }, { status: 200 })
  } catch (error) {
    console.error('Error fetching documents:', error)
    return NextResponse.json(
      { error: 'Failed to fetch documents' },
      { status: 500 }
    )
  }
}

