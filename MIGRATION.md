# RECELLÉCLORE GitHub migration — first draft

This branch contains a responsive, static **first draft** of the brand website from https://recelleclore.co.kr/.

## Current coverage
- Single-page sections: Home, About, Technology, Product, Recell Lab, Q&A, Contact
- Mobile navigation; mailto for business inquiries
- No live purchase/checkout capability
- Editorial copy adapted from the existing public website

## Not yet migrated
- Actual brand/product photographs, fonts, downloadable assets, original layout details, sliders/animations
- All blog articles and reviews; lab links still point to Imweb temporarily
- Historical URL-specific pages, SEO redirects, privacy/terms pages
- Backend ecommerce, member, order, payment, and inventory data

**Do not switch DNS or cancel the Imweb subscription until these items have been audited.** The product mockup in this draft is an explicitly labeled CSS placeholder, not a product photo.

## Preview after merge
In GitHub Settings > Pages, choose Deploy from a branch, branch main and /(root). For branch preview, use a preview deployment or a local HTTP server. There is no automatically active GitHub Pages URL yet.

## Migration checklist
1. Inventory all public pages and their original URL slugs.
2. Export authorized images/assets and replace placeholders.
3. Decide whether shopping functionality will be retained or redirected to another commerce service.
4. Rebuild/redirect old URLs before DNS switch; update sitemap and metadata.
5. Validate mobile navigation, forms, accessibility, images, outbound links and legal disclosures.
6. Configure custom domain and TLS only after approval; leave Imweb running until cutover confirmed.
