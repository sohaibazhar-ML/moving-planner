import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seed...')

  // Create sample document items with translations
  const documentData = [
    {
      slug: 'passport',
      category: 'identity',
      order: 1,
      translations: {
        en: {
          title: 'Valid Passport',
          description: 'Your passport must be valid for at least 6 months beyond your planned stay.',
          whyNeeded: 'Required for identification and legal residence verification.',
          guidanceWhereToApply: 'Apply at your home country passport office before travel.',
          guidanceRequirements: 'Birth certificate, photo ID, passport photos, application fee.',
          guidanceCommonMistakes: 'Not checking expiration date; waiting until last minute to renew.',
        },
        de: {
          title: 'Gültiger Reisepass',
          description: 'Ihr Reisepass muss mindestens 6 Monate über Ihren geplanten Aufenthalt hinaus gültig sein.',
          whyNeeded: 'Erforderlich zur Identifizierung und Überprüfung des rechtmäßigen Aufenthalts.',
        },
        fr: {
          title: 'Passeport valide',
          description: 'Votre passeport doit être valide pendant au moins 6 mois après votre séjour prévu.',
          whyNeeded: 'Requis pour l\'identification et la vérification du séjour légal.',
        },
        it: {
          title: 'Passaporto valido',
          description: 'Il tuo passaporto deve essere valido per almeno 6 mesi oltre il tuo soggiorno previsto.',
          whyNeeded: 'Richiesto per l\'identificazione e la verifica della residenza legale.',
        },
      },
    },
    {
      slug: 'birth-certificate',
      category: 'identity',
      order: 2,
      translations: {
        en: {
          title: 'Birth Certificate',
          description: 'Official birth certificate, sometimes requiring apostille or translation.',
          whyNeeded: 'Proves identity and age for various administrative processes.',
        },
        de: {
          title: 'Geburtsurkunde',
          description: 'Offizielle Geburtsurkunde, manchmal mit Apostille oder Übersetzung.',
          whyNeeded: 'Nachweis der Identität und des Alters für verschiedene Verwaltungsprozesse.',
        },
        fr: {
          title: 'Acte de naissance',
          description: 'Certificat de naissance officiel, parfois nécessitant apostille ou traduction.',
          whyNeeded: 'Prouve l\'identité et l\'âge pour divers processus administratifs.',
        },
        it: {
          title: 'Certificato di nascita',
          description: 'Certificato di nascita ufficiale, talvolta richiedendo apostille o traduzione.',
          whyNeeded: 'Dimostra identità ed età per vari processi amministrativi.',
        },
      },
    },
    {
      slug: 'residence-permit',
      category: 'legal',
      order: 3,
      translations: {
        en: {
          title: 'Residence Permit',
          description: 'Legal authorization to live in the destination country.',
          whyNeeded: 'Essential for legal stay beyond tourist visa periods.',
          guidanceWhereToApply: 'Immigration office in destination country or embassy/consulate in home country.',
          guidanceRequirements: 'Passport, proof of income/employment, housing contract, health insurance.',
        },
        de: {
          title: 'Aufenthaltserlaubnis',
          description: 'Rechtliche Genehmigung zum Leben im Zielland.',
          whyNeeded: 'Wesentlich für legalen Aufenthalt über touristische Visa-Zeiträume hinaus.',
        },
        fr: {
          title: 'Permis de séjour',
          description: 'Autorisation légale de vivre dans le pays de destination.',
          whyNeeded: 'Essentiel pour un séjour légal au-delà des périodes de visa touristique.',
        },
        it: {
          title: 'Permesso di soggiorno',
          description: 'Autorizzazione legale per vivere nel paese di destinazione.',
          whyNeeded: 'Essenziale per un soggiorno legale oltre i periodi di visto turistico.',
        },
      },
    },
    {
      slug: 'health-insurance',
      category: 'health',
      order: 4,
      translations: {
        en: {
          title: 'Health Insurance',
          description: 'Proof of health insurance coverage valid in the destination country.',
          whyNeeded: 'Often mandatory for residence permits; ensures access to healthcare.',
          guidanceCommonMistakes: 'Buying travel insurance instead of proper health insurance; insufficient coverage amounts.',
        },
        de: {
          title: 'Krankenversicherung',
          description: 'Nachweis einer im Zielland gültigen Krankenversicherung.',
          whyNeeded: 'Oft obligatorisch für Aufenthaltserlaubnisse; sichert Zugang zur Gesundheitsversorgung.',
        },
        fr: {
          title: 'Assurance santé',
          description: 'Preuve d\'une couverture d\'assurance santé valide dans le pays de destination.',
          whyNeeded: 'Souvent obligatoire pour les permis de séjour; assure l\'accès aux soins de santé.',
        },
        it: {
          title: 'Assicurazione sanitaria',
          description: 'Prova di copertura assicurativa sanitaria valida nel paese di destinazione.',
          whyNeeded: 'Spesso obbligatorio per i permessi di soggiorno; garantisce l\'accesso all\'assistenza sanitaria.',
        },
      },
    },
    {
      slug: 'proof-of-address',
      category: 'housing',
      order: 5,
      translations: {
        en: {
          title: 'Proof of Address',
          description: 'Rental contract, utility bill, or housing registration showing your address.',
          whyNeeded: 'Required for bank accounts, official registrations, and residence permits.',
        },
        de: {
          title: 'Wohnsitznachweis',
          description: 'Mietvertrag, Stromrechnung oder Wohnsitzanmeldung mit Ihrer Adresse.',
          whyNeeded: 'Erforderlich für Bankkonten, amtliche Anmeldungen und Aufenthaltserlaubnisse.',
        },
        fr: {
          title: 'Justificatif de domicile',
          description: 'Contrat de location, facture de services publics ou enregistrement de logement montrant votre adresse.',
          whyNeeded: 'Requis pour les comptes bancaires, enregistrements officiels et permis de séjour.',
        },
        it: {
          title: 'Prova di indirizzo',
          description: 'Contratto di locazione, bolletta o registrazione abitativa che mostra il tuo indirizzo.',
          whyNeeded: 'Richiesto per conti bancari, registrazioni ufficiali e permessi di soggiorno.',
        },
      },
    },
  ]

  for (const doc of documentData) {
    const documentItem = await prisma.documentItem.create({
      data: {
        slug: doc.slug,
        category: doc.category,
        order: doc.order,
        isActive: true,
      },
    })

    for (const [lang, content] of Object.entries(doc.translations)) {
      await prisma.documentItemTranslation.create({
        data: {
          documentItemId: documentItem.id,
          language: lang,
          title: (content as any).title,
          description: (content as any).description,
          whyNeeded: (content as any).whyNeeded,
          guidanceWhereToApply: (content as any).guidanceWhereToApply || null,
          guidanceRequirements: (content as any).guidanceRequirements || null,
          guidanceCommonMistakes: (content as any).guidanceCommonMistakes || null,
        },
      })
    }

    console.log(`✅ Created document: ${doc.slug}`)
  }

  console.log('🎉 Seed completed successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

