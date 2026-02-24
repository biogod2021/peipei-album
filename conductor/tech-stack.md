# Tech Stack: 时光书函 (Time Letter)

## Core Technologies
- **Language:** JavaScript (ES Modules)
- **Frontend Foundations:** Vanilla JS, CSS3, HTML5
- **Templating:** [Handlebars](https://handlebarsjs.com/) (via `vite-plugin-handlebars`)
- **Build Tool:** [Vite](https://vitejs.dev/)

## Core Libraries & Utilities
- **Photo Metadata:** [exifr](https://github.com/MikeKAs666/exifr) - Used for extracting GPS and date data from photos.
- **Image Processing:** [sharp](https://sharp.pixelplumbing.com/) - Used for high-performance image resizing and format conversion (e.g., WebP).
- **File Matching:** [fast-glob](https://github.com/mrmlnc/fast-glob) - Used for efficient file scanning.
- **Data Persistence:** [sqlite3](https://github.com/TryGhost/node-sqlite3) - Node.js driver for SQLite database.

## Development & Deployment
- **Testing:** [Vitest](https://vitest.dev/)
- **Deployment:** [gh-pages](https://github.com/tschaub/gh-pages) - Deployment to GitHub Pages.
