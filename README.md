<div align="center">

# Claude Brain

### Give Claude Code photographic memory.

[![GitHub stars](https://img.shields.io/github/stars/memvid/claude-brain?style=social)](https://github.com/memvid/claude-brain)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<br />

https://github.com/user-attachments/assets/b57cb3db-576b-4c1f-af92-95796ba3fb5b

<br />

**[Install in 30 seconds](#installation)** · [How it Works](#how-it-works) · [Commands](#commands)

</div>

<br />

## The Problem

```
You: "Remember that auth bug we fixed?"
Claude: "I don't have memory of previous conversations."
You: "We spent 3 hours on it yesterday"
Claude: "I'd be happy to help debug from scratch!"
```

**200K context window. Zero memory between sessions.**

You're paying for a goldfish with a PhD.

<br />

## The Fix

```
You: "What did we decide about auth?"
Claude: "We chose JWT over sessions for your microservices.
        The refresh token issue - here's exactly what we fixed..."
```

One file. Claude remembers everything.

<br />

## Installation

```bash
# In Claude Code
/plugin add marketplace memvid/claude-brain
```

Then: `/plugins` → Installed → **mind** Enable Plugin → Restart.

Done.

<br />

## How it Works

After install, Claude's memory lives in one file:

```
your-project/.claude/mind.mv2
```

That's it. No database. No cloud. No API keys.

**What gets captured:**
- Session context, decisions, bugs, solutions
- Auto-injected at session start
- Searchable anytime

**Why one file?**
- `git commit` → version control Claude's brain
- `scp` → transfer anywhere
- Send to teammate → instant onboarding

<br />

## Commands

```bash
/mind:mind search "auth bug"      # find past context
/mind:mind ask "why JWT?"         # query memory
/mind:mind recent                 # latest memories
/mind:mind stats                  # usage stats
```

<br />

## FAQ

<details>
<summary><b>How big is the file?</b></summary>

Empty: ~70KB. Grows ~1KB per memory. A year of use stays under 5MB.

</details>

<details>
<summary><b>Is it private?</b></summary>

100% local. Nothing leaves your machine. Ever.

</details>

<details>
<summary><b>How fast?</b></summary>

Sub-millisecond. Native Rust core. Searches 10K+ memories in <1ms.

</details>

<details>
<summary><b>Reset memory?</b></summary>

`rm .claude/mind.mv2`

</details>

<br />

---

<div align="center">

Built on **[memvid](https://github.com/memvid/memvid)** — the single-file memory engine

<br />

**If this saved you time, [star the repo](https://github.com/memvid/claude-brain)**

</div>
