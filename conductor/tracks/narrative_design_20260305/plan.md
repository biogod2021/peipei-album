# Implementation Plan: Comprehensive Narrative Design (Scrapbook Edition)

## Phase 1: Scrapbook UI & Interaction Foundation
- [x] Task: Select and Implement Handwritten-Style Fonts. [833c2a9]
- [x] Task: Implement the "Sticky Note" CSS Component. [8648e08]
- [~] Task: Implement "Revealing Inner-Thought" Logic & Tests.
    - [ ] Write a text-parsing utility with tests to split filename text into "Main" and "Inner" (parentheses) parts.
    - [ ] Implement the hover/tap logic to reveal the inner monologue with a "scratch" or "ink-reveal" effect.
- [ ] Task: Conductor - User Manual Verification 'Phase 1' (Protocol in workflow.md)

## Phase 2: Data Migration & Manual Curation
- [ ] Task: Systematically Map "Chapter Intro" Stories.
    - [ ] Read all `Untitled.txt` files and migrate their content into `narrative_config.js`.
- [ ] Task: Enrich Photo Metadata with "Sticky Note" Text.
    - [ ] For each photo, move the filename description into the `narrative_config.js` entry.
- [ ] Task: Implement "Foodie Highlighter" Stamp.
    - [ ] Design a "Delicious" stamp (SVG or CSS).
    - [ ] Logic to automatically apply the stamp if keywords like "吃", "面", "火锅" are present.
- [ ] Task: Conductor - User Manual Verification 'Phase 2' (Protocol in workflow.md)

## Phase 3: Narrative Power-Ups (Particles & Mirrors)
- [ ] Task: Implement the "Emoji Particle System" & Tests.
    - [ ] Write tests for the keyword-to-emoji triggers.
    - [ ] Implement a lightweight particle emitter that bursts emojis from the scroll-target.
- [ ] Task: Implement the "Mirror Comparison" Component.
    - [ ] Design the "Mirror Moment" component for comparing 2025 vs 2026.
    - [ ] Manually map and implement at least 3 pairs (Guangzhou 2025 vs 2026).
- [ ] Task: Conductor - User Manual Verification 'Phase 3' (Protocol in workflow.md)

## Phase 4: Final Polish & Optimization
- [ ] Task: Mobile Performance Audit and Animation Tuning.
- [ ] Task: Final Narrative Review & Emotional Arc Tuning.
- [ ] Task: Conductor - User Manual Verification 'Phase 4' (Protocol in workflow.md)
