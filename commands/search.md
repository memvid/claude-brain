---
description: Search memories for specific content or patterns
argument-hint: <query> [limit]
allowed-tools: Bash
---

# Memory Search

Search through Claude's persistent memories for specific content, patterns, or keywords.

**Usage**: `/mind:search <query> [limit]`

Execute the search script with user's query:

```bash
node "${CLAUDE_PLUGIN_ROOT}/dist/scripts/find.js" "$ARGUMENTS" 10
```

## Examples
- `/mind:search authentication` - Find memories related to authentication
- `/mind:search "database schema"` - Search for exact phrase
- `/mind:search API errors` - Find memories about API errors

## Response Format
- Show matching memories with relevance scores
- Include timestamps (convert to human-readable format)
- Highlight matched keywords in context