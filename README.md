# keatteoh.com

Portfolio homepage for Keat Teoh: the top three case studies, with the résumé and LinkedIn always one tap away.

Plain HTML and CSS, so there's no build step.

- `index.html`: the home page
- `work/<name>/index.html`: one page per case study (projects, market-maps, network, distru, greenslate, beyond-the-breakdown)
- `case.js`: tap-to-enlarge for case study images
- `styles.css`: styles (light and dark mode)
- `assets/Keat-Teoh-Resume.pdf`: the résumé linked from the page; replace this file to update it
- `assets/img/`: portrait and cover images; `assets/img/<name>/` holds each case study's images

Preview locally: `python3 -m http.server 8000`, then open http://localhost:8000
