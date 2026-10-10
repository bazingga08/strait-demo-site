# Strait demo client

A pretend customer web app ("Hilltop Shoes", a made-up shop used in examples) for trying Strait: connect a workspace with a publishable key, resolve a deferred link the way the SDK does on first launch, and send conversion events. It is a static site: `index.html` (the demo), `open.html` (tap a link in the browser), `fingerprint.html` (browser-side fingerprint check) and `privacy.html` (privacy policy for the Strait Link test app).

## Look

Strait design system v5, dark first with a matching light theme (System / Light / Dark switch in the
header; a stored choice is applied before the first paint). `strait-tokens.css`, `strait-ui.css` and
`strait-parts.css` are copied unchanged from the brand repo (`brand/tokens`, `brand/ui`); page chrome is
in `assets/demo.css`. Fonts are self-hosted in `assets/fonts` (no request to Google). Steps follow the
1/2/3 rail; each request is printed as a receipt on warm paper with a health chip (glyph + word); the
activity list sits beside the steps on wide screens. Sample data is labelled (Hilltop Shoes is made up).

## Support

Questions or a bug? Talk to the Strait team: support@straitlink.in (replies within 1 working day) or open a GitHub issue. Security: security@straitlink.in.
