/**
 * Parses a string to extract "inner thoughts" contained within parentheses.
 * @param {string} text - The input text (e.g., "Main text (Inner thought)")
 * @returns {Object} - An object containing { main: string, inner: string | null }
 */
export function parseInnerThoughts(text) {
  if (!text) return { main: '', inner: null };

  // Regex to match content inside parentheses.
  // Using non-greedy prefix to capture the first set of parentheses start.
  const match = text.match(/^(.*?)[（\(](.*)[）\)](.*?)$/);

  if (match) {
    return {
      main: (match[1].trim() + match[3].trim()).trim(),
      inner: match[2].trim()
    };
  }

  return {
    main: text.trim(),
    inner: null
  };
}
