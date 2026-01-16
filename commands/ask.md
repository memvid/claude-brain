---
description: Ask questions about memories and get context-aware answers
argument-hint: <question>
allowed-tools: Bash
---

# Memory Question

Ask Claude's memory system questions about past work, decisions, and context.

**Usage**: `/mind:ask <question>`

Execute the ask script with user's question:

```bash
node "${CLAUDE_PLUGIN_ROOT}/dist/scripts/ask.js" "$ARGUMENTS"
```

## Examples
- `/mind:ask Why did we choose React?` - Get context about technology decisions
- `/mind:ask What was the CORS solution?` - Recall specific solutions
- `/mind:ask How did we fix the authentication bug?` - Get details about past fixes

## Response Format
- Provide context-aware answers based on stored memories
- Reference specific memories when applicable
- Include timestamps for referenced information