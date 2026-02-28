# Time Letter Project (时光书函)

A personalized vertical timeline story web gallery built for "家灏 & 佩佩" to document their journey together.

## Project Overview

*   **Purpose:** A visually rich, interactive web gallery that presents memories along a vertical timeline.
*   **Technologies:**
    *   **Bundler:** [Vite](https://vitejs.dev/)
    *   **Language:** Vanilla JavaScript (ES Modules)
    *   **Styling:** Vanilla CSS with modern typography (Google Fonts) and custom animations.
    *   **Templating:** [vite-plugin-handlebars](https://github.com/alexprey/vite-plugin-handlebars) (pre-configured).
    *   **Testing:** [Vitest](https://vitest.dev/).
    *   **Image Processing:** `sharp`, `exifr` (listed in dependencies).

## Project Structure

*   `src/`: Primary source directory (set as Vite root).
    *   `index.html`: Main entry point and layout.
    *   `main.js`: Core interactivity (animations, parallax, lightbox logic).
    *   `styles/`: CSS files, including `main.css` for the theme and layout.
    *   `assets/img/`: Local image assets.
    *   `tests/`: Test suite using Vitest.
*   `public/`: Static assets served directly (e.g., images used in the gallery).
*   `dist/`: Build output directory.

## Building and Running

*   **Development Server:**
    ```bash
    npm run dev
    ```
*   **Production Build:**
    ```bash
    npm run build
    ```
*   **Preview Build:**
    ```bash
    npm run preview
    ```
*   **Run Tests:**
    ```bash
    npm run test
    ```
*   **Deployment (GitHub Pages):**
    ```bash
    npm run deploy
    ```

## Development Conventions

*   **Vite Configuration:** The root is `src`, and the build output goes to `dist`. Public assets should be placed in `public/` and referenced in HTML/CSS starting with `/`.
*   **Animations:** Uses `IntersectionObserver` in `main.js` to trigger `.is-visible` classes on elements with `.animate-up` or `.animate-time`.
*   **Lightbox:** Clicking on `.time-photo` elements triggers a fullscreen lightbox.
*   **Tests:** Current tests in `src/tests/` reference a missing `agents/` directory and may require fixing or removal if that architecture was deprecated during the refactor.
*   **Naming:** File names and asset paths often use Chinese characters (e.g., `军训照片.jpg`), ensure environment support for UTF-8.

## TODOs / Known Issues

*   [ ] Fix or remove broken tests in `src/tests/` that reference the missing `agents/` directory.
*   [ ] Clean up `src/node_modules/` if it was accidentally tracked by git (as suggested by `git ls-files`).
