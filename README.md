# amar.jamale.org

Personal portfolio of **Amarnath Jamale**, Senior Platform Engineer.

Live at **[amar.jamale.org](https://amar.jamale.org/)**, served by GitHub Pages.

## Design

"Platform Console" is a single-page, dark engineering-console aesthetic inspired
by the tools of the trade (terminals, Kubernetes manifests, CI pipelines,
internal developer portals).

- **Zero frameworks, zero build step**: handwritten HTML, CSS, and vanilla JS.
- **Three files of code**: `index.html`, `assets/css/style.css`, `assets/js/main.js`.
- Career history rendered as a deployment pipeline; bio rendered as a
  Kubernetes-style `engineer.yaml` manifest; 404 rendered as a failed
  `kubectl get`.
- Respects `prefers-reduced-motion`, semantic HTML, JSON-LD structured data.

## Local development

No tooling required:

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

## License

Code is MIT licensed (see [LICENSE](LICENSE)). The content (text, résumé,
photos) is © Amarnath Jamale, all rights reserved.
