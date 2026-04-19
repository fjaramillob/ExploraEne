---
description: How to use the installed Superpowers methodology and skills
---

# Superpowers Workflow

You have now installed the **Superpowers** skills. This methodology transforms how you (as an AI coding agent) work, moving from ad-hoc coding to a disciplined engineering process.

## 🚀 Getting Started

The entry point for any task when Superpowers is installed is the `using-superpowers` skill.

1. **Before ANY response or action**: Invoke the `using-superpowers` skill to determine which specialized skills apply.
2. **Brainstorming**: If the task is not yet fully defined or lacks a design, use the `brainstorming` skill first.
3. **Planning**: Once the design is approved, use the `writing-plans` skill to create a detailed, task-by-task plan.
4. **Execution**: Use `subagent-driven-development` or `executing-plans` to work through the tasks systematically.
5. **Testing**: Always use the `test-driven-development` skill during implementation (Red-Green-Refactor).
6. **Review**: Periodically use `requesting-code-review` to ensure quality.

## 🛠 installed Skills

The following skills are now available in `.agent/skills/`:

- `brainstorming`: Socratic design refinement and specification creation.
- `writing-plans`: Breaking down complex features into 2-5 minute tasks.
- `subagent-driven-development`: High-speed task execution with automated review.
- `test-driven-development`: Strict Red-Green-Refactor development cycle.
- `systematic-debugging`: A 4-phase process for finding and fixing root causes.
- `using-git-worktrees`: managing isolated development environments.
- `finishing-a-development-branch`: Verification and merging workflow.
- ... and several others.

## ⚠️ Critical Reminder

If there is even a **1% chance** a skill might apply, you **MUST** invoke it. Do not rationalize your way out of discipline.

Ready to start? Ask your human partner to clarify their first goal, and start with `using-superpowers`.
