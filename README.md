<div align="center">

# 🧠 memvid-mind

### **Claude Code finally remembers.**

*One file. Instant recall. Zero config.*

[![npm version](https://img.shields.io/npm/v/memvid-mind.svg)](https://www.npmjs.com/package/memvid-mind)
[![GitHub stars](https://img.shields.io/github/stars/memvid/memvid-mind?style=social)](https://github.com/memvid/memvid-mind)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[Installation](#-installation) • [How it Works](#-how-it-works) • [Commands](#-commands) • [FAQ](#-faq)



https://github.com/user-attachments/assets/b57cb3db-576b-4c1f-af92-95796ba3fb5b



</div>

---

## The Problem

```
You: "Hey Claude, remember when we fixed that auth bug?"

Claude: "I don't have memory of previous conversations."

You: "We literally spent 3 hours on this yesterday"

Claude: "I'd be happy to help you debug it from scratch!"
```

**200K context window. Zero memory between sessions.**

You're paying $200/month for a goldfish with a PhD.

---

## The Solution

```
You: "What did we decide about the auth system?"

Claude: "Last week we chose JWT over sessions because of your
microservices architecture. I also remember we had issues with
the refresh token rotation - here's what we fixed..."
```

**One plugin. One file. Claude remembers everything.**

---

## 🚀 Installation

**30 seconds. No config.**

```bash
# One-time setup (if you haven't used GitHub plugins before)
git config --global url."https://github.com/".insteadOf "git@github.com:"
```

Then in Claude Code:
```
/plugin marketplace add memvid/memvid-mind
/plugin install memvid-mind
```

Restart Claude Code. **Done.**

---

## 🔮 How it Works

After install, Claude stores memories in **one portable file**:

```
your-project/
└── .claude/
    └── mind.mv2   # Claude's brain. That's it.
```

### What Gets Captured

| When | What |
|------|------|
| **Session start** | Injects relevant context from past sessions |
| **While working** | Decisions, bugs found, solutions, file changes |
| **Session end** | Session summary for future recall |

### Why One File?

| Action | Result |
|--------|--------|
| `git commit` | Version control Claude's memory |
| `scp file user@server:` | Transfer to any machine |
| Send to teammate | Instant project onboarding |

**No database. No background service. No API keys. No cloud.**

---

## 📦 Commands

```bash
/mind stats                       # memory statistics
/mind search "authentication"     # find past context
/mind ask "why did we choose X?"  # ask your memory
/mind recent                      # what happened lately
```

---

## ⚡ Endless Mode

Claude hits context limits fast. memvid-mind compresses tool outputs ~20x:

```
Before:  Read (8K) + Edit (4K) + Bash (12K) = 24K tokens gone
After:   Read (400) + Edit (200) + Bash (600) = 1.2K tokens
```

Keeps errors, structure, key functions. Drops the noise.

Work longer without hitting limits.

---

## ❓ FAQ

<details>
<summary><b>Why is the .mv2 file ~4MB even when empty?</b></summary>

The `.mv2` format is designed for **instant operations** on files of any size. It pre-allocates:

- **Vector index** for semantic search (find memories by meaning, not just keywords)
- **Write-ahead log (WAL)** for crash-safe writes
- **Block-aligned storage** for O(1) random access

This is the same architecture used by SQLite, LevelDB, and other production databases. The 4MB overhead enables sub-millisecond operations whether you have 10 memories or 10 million.

*Think of it like an empty filing cabinet - it takes up space, but it's ready to organize thousands of documents instantly.*

</details>

<details>
<summary><b>How big does the file get?</b></summary>

~1KB per memory. 1000 memories ≈ 1MB additional. The base 4MB is fixed overhead.

</details>

<details>
<summary><b>Is my data private?</b></summary>

**100% local.** Nothing leaves your machine. No telemetry. No cloud sync. You own your data.

The `.mv2` file is just a file - encrypt it, back it up, delete it, share it. Your choice.

</details>

<details>
<summary><b>How fast is it?</b></summary>

Native Rust core via [memvid](https://github.com/memvid/memvid). Sub-millisecond operations:

- Search: < 1ms for 10K+ memories
- Insert: < 0.5ms
- Load context: < 5ms

</details>

<details>
<summary><b>Can I reset Claude's memory?</b></summary>

```bash
rm .claude/mind.mv2
```

Or use `/mind clear` (coming soon).

</details>

<details>
<summary><b>Does it work with multiple projects?</b></summary>

Yes! Each project gets its own `.claude/mind.mv2` file. Memories are project-scoped by default.

</details>

---

## 🔧 Configuration (Optional)

Create `.claude/mind.config.json`:

```json
{
  "memoryPath": ".claude/mind.mv2",
  "maxContextObservations": 20,
  "endlessMode": true
}
```

Most users don't need to configure anything.

---

## 🤝 Contributing

We love contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

**Quick wins:**
- Add to [awesome-claude-skills](https://github.com/travisvn/awesome-claude-skills)
- Star the repo ⭐
- Share on Twitter/X with a demo

---


<div align="center">

**MIT License** • Built on [memvid](https://github.com/memvid/memvid) — the single-file memory engine

[Report Bug](https://github.com/memvid/memvid-mind/issues) • [Request Feature](https://github.com/memvid/memvid-mind/issues)

</div>
