import { describe, it, expect, vi, beforeEach } from 'vitest';
import { AsyncOrchestrator } from '../../agents/orchestrator.js';
import fs from 'fs/promises';
import path from 'path';

vi.mock('../../agents/gemini_client.js', () => {
  return {
    GeminiClient: vi.fn().mockImplementation(() => {
      return {
        prepareImage: vi.fn().mockResolvedValue('base64data'),
        generateJson: vi.fn().mockResolvedValue({ category: 'Keep', tags: ['person'] })
      };
    })
  };
});

describe('AsyncOrchestrator', () => {
  it('should include the tag dictionary in the prompt', async () => {
    const orchestrator = new AsyncOrchestrator(1);
    
    // Mock fs.readdir and fs.readFile
    vi.spyOn(fs, 'readdir').mockResolvedValue(['test.jpg']);
    vi.spyOn(fs, 'readFile').mockResolvedValue(JSON.stringify({ Subject: ['person'] }));

    await orchestrator.runFilteringWorkflow('/source', '/refs', 'Find people');

    expect(orchestrator.client.generateJson).toHaveBeenCalledWith(
      expect.objectContaining({
        prompt: expect.stringContaining('MANDATORY TAG DICTIONARY')
      })
    );
    expect(orchestrator.client.generateJson).toHaveBeenCalledWith(
      expect.objectContaining({
        prompt: expect.stringContaining('person')
      })
    );
  });
});
