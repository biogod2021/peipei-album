# Implementation Plan: Curation & Integration via Media-Explorer

## Phase 1: Research and Analysis of Media-Explorer
- [ ] Task: Analyze `media-explorer` data structure.
    - [ ] Explore `/Users/jay/LocalProjects/photo_project/media-explorer` to locate the database or JSON file storing tags.
    - [ ] Verify the file paths stored in the explorer align with the actual file system.
- [ ] Task: Conductor - User Manual Verification 'Phase 1' (Protocol in workflow.md)

## Phase 2: Tagging and Selection
- [ ] Task: Define narrative tags in `media-explorer`.
    - [ ] Map our 5 categories to specific tags (e.g., `daily`, `b-roll`, `her_pov`, `evidence`, `mirror`).
- [ ] Task: Identify and tag target photos.
    - [ ] Search for photos matching the "Supplement Plan" and apply tags within `media-explorer`.
- [ ] Task: Conductor - User Manual Verification 'Phase 2' (Protocol in workflow.md)

## Phase 3: Extraction and Integration
- [ ] Task: Extract tagged photos.
    - [ ] Write a small script or command to copy photos from their source to `peipei-album/public/assets/img/stories/`.
- [ ] Task: Normalize and Convert.
    - [ ] Ensure all extracted photos are `.jpg` and lowercase extensions.
    - [ ] Convert any remaining HEIC or other formats.
- [ ] Task: Conductor - User Manual Verification 'Phase 3' (Protocol in workflow.md)

## Phase 4: Final Validation
- [ ] Task: Verify narrative loop.
    - [ ] Check `public/assets/img/stories/` to ensure all 5 categories are represented.
- [ ] Task: Conductor - User Manual Verification 'Phase 4' (Protocol in workflow.md)
