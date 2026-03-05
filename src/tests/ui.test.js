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
});
