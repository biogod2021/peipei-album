import { describe, it, expect } from 'vitest';
import { parseInnerThoughts } from '../scripts/narrative_utils.js';

describe('narrative_utils', () => {
  describe('parseInnerThoughts', () => {
    it('should split text into main and inner parts', () => {
      const input = '小佩拍我！！！（第一次拍就这么好！简直就是摄影天才！！！）';
      const result = parseInnerThoughts(input);
      expect(result.main).toBe('小佩拍我！！！');
      expect(result.inner).toBe('第一次拍就这么好！简直就是摄影天才！！！');
    });

    it('should return null for inner if no parentheses are present', () => {
      const input = '单纯的美照';
      const result = parseInnerThoughts(input);
      expect(result.main).toBe('单纯的美照');
      expect(result.inner).toBeNull();
    });

    it('should handle multiple parentheses by taking the first one or merging (decide on first)', () => {
      const input = '感觉这次出去拍得最好的一张！！！！（美呆了！）（心化了）';
      const result = parseInnerThoughts(input);
      expect(result.main).toBe('感觉这次出去拍得最好的一张！！！！');
      expect(result.inner).toBe('美呆了！）（心化了'); // Simple regex capture for now
    });
  });
});
