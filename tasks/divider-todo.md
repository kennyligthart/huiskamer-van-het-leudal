# Task: Clean Up SectionDivider & Apply Site-Wide

## Summary

The `SectionDivider` component contains 15 divider variants (examples for the customer). The customer chose **'vine'**. All unused variants should be deleted, and dividers should be applied to all pages.

## Current State

- **SectionDivider.tsx**: 367 lines with 15 variants
- **Usage**: Only homepage (`index.tsx`) uses it - 4 instances with `variant="vine"`

## Proposed Changes

### Part 1: Clean Up SectionDivider.tsx

Delete 14 unused variants, keeping only `VineDivider`:

| Variant | Action |
|---------|--------|
| wave, angle, ornament, overlap, gradient, arc, zigzag, dots, brush, peaks, scallop, artdeco, doubleline, torn | DELETE |
| **vine** | KEEP |

**Result**: Simplify to `SectionDivider({ from, to })` - no variant prop needed (~50 lines)

### Part 2: Update Homepage

- Remove `DIVIDER_VARIANT` constant
- Remove `variant` prop from all `<SectionDivider>` calls

### Part 3: Add Dividers to Other Pages

| Page | Dividers to Add |
|------|-----------------|
| `/hotel` | 3 (Hero→Intro→Facilities→CTA) |
| `/restaurant` | 3 (Hero→Intro→Specialties→CTA) |
| `/over-ons` | 3 (Hero→History→Values→Location) |
| `/eetcafe` | ~3 |
| `/scooterverhuur` | ~2-3 |
| `/contact` | ~2 |
| `/evenementen/*` (7 pages) | ~2-3 each |

## Checklist

- [x] Clean up SectionDivider.tsx (remove 14 variants, simplify API)
- [x] Update index.tsx (remove variant prop and constant)
- [x] Add dividers to /hotel
- [x] Add dividers to /restaurant
- [x] Add dividers to /over-ons
- [x] Add dividers to /eetcafe
- [x] Add dividers to /scooterverhuur
- [x] Add dividers to /contact
- [x] Add dividers to /evenementen/* (7 pages)
- [ ] Visual verification

## Benefits

1. **~320 lines removed** from SectionDivider.tsx
2. **Simpler API** - no variant prop needed
3. **Visual consistency** across all pages
