import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('UI Styles', () => {
  it('should use a handwritten font for photo annotations', () => {
    const cssPath = path.resolve(__dirname, '../styles/main.css');
    const cssContent = fs.readFileSync(cssPath, 'utf8');
    
    // Check if .photo-desc uses --font-accent or ZCOOL XiaoWei
    const photoDescMatch = cssContent.match(/\.photo-desc\s*\{[^}]+\}/);
    expect(photoDescMatch).not.toBeNull();
    
    const photoDescStyles = photoDescMatch[0];
    expect(photoDescStyles).toContain('font-family: var(--font-accent)');
  });

  it('should have a sticky-note component style', () => {
    const cssPath = path.resolve(__dirname, '../styles/main.css');
    const cssContent = fs.readFileSync(cssPath, 'utf8');
    
    // Check for .sticky-note class
    expect(cssContent).toContain('.sticky-note');
    
    // Match the exact .sticky-note block, not a nested one like .layout-polaroid .sticky-note
    const stickyNoteMatch = cssContent.match(/(?:^|\n)\.sticky-note\s*\{[^}]+\}/);
    expect(stickyNoteMatch).not.toBeNull();
    
    const stickyNoteStyles = stickyNoteMatch[0];
    expect(stickyNoteStyles).toContain('background:');
    expect(stickyNoteStyles).toContain('padding:');
    expect(stickyNoteStyles).toContain('transform: rotate');
  });

  it('should have styles for revealing inner thoughts', () => {
    const cssPath = path.resolve(__dirname, '../styles/main.css');
    const cssContent = fs.readFileSync(cssPath, 'utf8');
    
    expect(cssContent).toContain('.inner-thought-container');
    expect(cssContent).toContain('.inner-thought-text');
    expect(cssContent).toContain('opacity: 0');
    expect(cssContent).toContain(':hover .inner-thought-text');
  });
});
