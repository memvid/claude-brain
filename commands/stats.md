---
description: Show memory statistics and storage information
allowed-tools: Bash
---

# Memory Statistics

Show statistics about Claude's persistent memory file including total memories, storage size, and recent activity.

**Usage**: `/mind:stats`

Execute the stats script:

```bash
node "${CLAUDE_PLUGIN_ROOT}/dist/scripts/stats.js"
```

## Response Format
- Convert Unix timestamps to human-readable (Xm ago, Xh ago, Xd ago)
- Summarize key findings in a table when appropriate
- If file was just created, tell the user memories will appear as they work