# Data Model: Migrant Settlement Portal (MVP)

**Date**: 2026-02-09  
**Spec**: [spec.md](./spec.md)

## Entities

### User
Represents an authenticated account.

- **id**: unique identifier
- **email**: unique login identifier
- **preferredLanguage**: language code (one of supported languages)
- **createdAt / updatedAt**: timestamps

Notes:
- No progress or personalization is stored beyond preferred language for MVP.

### DocumentItem (Checklist Item)
Represents one commonly required document or step.

- **id**: unique identifier
- **slug**: stable identifier for routing/links
- **category**: optional grouping (e.g., identity, housing, employment, health)
- **order**: display ordering
- **isActive**: whether visible to end users
- **createdAt / updatedAt**: timestamps

### DocumentItemTranslation
Localized content for a DocumentItem.

- **id**: unique identifier
- **documentItemId**: reference to DocumentItem
- **language**: language code (e.g., en, de, fr, it)
- **title**: short label for the document/step
- **description**: plain-language explanation
- **whyNeeded**: rationale (“why it’s needed”)
- **guidanceWhereToApply**: optional guidance on where/how to apply
- **guidanceRequirements**: optional notes on what information is required
- **guidanceCommonMistakes**: optional common pitfalls to avoid
- **createdAt / updatedAt**: timestamps

## Relationships

- A **DocumentItem** has **many** **DocumentItemTranslation** rows (one per supported language).
- A **User** optionally stores **preferredLanguage**.

## Validation Rules

- Language code must be one of the supported languages configured for MVP.
- Each DocumentItem must have at least one active translation in the default language.
- Titles must be short and scannable; descriptions must be plain-language (avoid legal jargon).
- Guidance fields are optional, but if present must be actionable and non-technical.

## State / Visibility

- DocumentItems can be marked inactive so they do not appear in the public checklist.


