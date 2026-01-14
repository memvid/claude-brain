---
description: Show recent memories and activity timeline
argument-hint: [count]
allowed-tools: Bash
---

# Recent Memories

Display the most recent memories and activity from Claude's persistent storage.

**Usage**: `/mind:recent [count]`

Execute the timeline script to show recent activity:

```bash
node "${CLAUDE_PLUGIN_ROOT}/dist/scripts/timeline.js" ${ARGUMENTS:-20}
```

## Examples
- `/mind:recent` - Show 20 most recent memories (default)
- `/mind:recent 10` - Show 10 most recent memories
- `/mind:recent 50` - Show 50 most recent memories

## Response Format
- Display memories in reverse chronological order (newest first)
- Convert timestamps to human-readable format
- Group by session or time period when helpful