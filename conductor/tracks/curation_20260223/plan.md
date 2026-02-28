# Implementation Plan: Curation & Integration via Media-Explorer

## Phase 1: Research and Analysis of Media-Explorer
- [x] Task: Analyze `media-explorer` data structure. [7e2bad2]
    - [x] Explore `/Users/jay/LocalProjects/photo_project/media-explorer` to locate the database or JSON file storing tags.
    - [x] Verify the file paths stored in the explorer align with the actual file system.
- [x] Task: Conductor - User Manual Verification 'Phase 1' (Protocol in workflow.md) [7e2bad2]

## Phase 2: Tagging and Selection
- [x] Task: Define narrative tags in `media-explorer`. [7e2bad2]
    - [x] Map our 5 categories to specific tags (e.g., `daily`, `b-roll`, `her_pov`, `evidence`, `mirror`).
- [x] Task: Identify and tag target photos. [7e2bad2]
    - [x] Search for photos matching the "Supplement Plan" and apply tags within `media-explorer`.
- [x] Task: Conductor - User Manual Verification 'Phase 2' (Protocol in workflow.md)

## Phase 3: Extraction and Integration
- [x] Task: Extract tagged photos. [7e2bad2]
    - [x] Write a small script or command to copy photos from their source to `peipei-album/public/assets/img/stories/`.
- [x] Task: Normalize and Convert. [7e2bad2]
    - [x] Ensure all extracted photos are `.jpg` and lowercase extensions.
    - [x] Convert any remaining HEIC or other formats.
- [x] Task: Conductor - User Manual Verification 'Phase 3' (Protocol in workflow.md)

## Phase 4: Final Validation
- [x] Task: Verify narrative loop.
    - [x] Check `public/assets/img/stories/` to ensure all 5 categories are represented.
- [x] Task: Conductor - User Manual Verification 'Phase 4' (Protocol in workflow.md)
