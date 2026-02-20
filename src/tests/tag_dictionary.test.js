import { describe, it, expect } from 'vitest';
import fs from 'fs/promises';
import { join } from 'path';

describe('Tag Dictionary', () => {
  it('should be a valid JSON file with required categories', async () => {
    const dictPath = join(process.cwd(), 'agents/tag_dictionary.json');
    const content = await fs.readFile(dictPath, 'utf-8');
    const dict = JSON.parse(content);

    const requiredCategories = ['Subject', 'Composition', 'Scenery', 'Food'];
    
    requiredCategories.forEach(category => {
      expect(dict).toHaveProperty(category);
      expect(Array.isArray(dict[category])).toBe(true);
      expect(dict[category].length).toBeGreaterThan(0);
    });
  });

  it('should contain specific mandatory tags', async () => {
    const dictPath = join(process.cwd(), 'agents/tag_dictionary.json');
    const content = await fs.readFile(dictPath, 'utf-8');
    const dict = JSON.parse(content);

    expect(dict.Subject).toContain('person');
    expect(dict.Composition).toContain('single_portrait');
    expect(dict.Composition).toContain('couple_portrait');
    expect(dict.Composition).toContain('group_photo');
    expect(dict.Scenery).toContain('landscape');
    expect(dict.Food).toContain('food');
  });
});
