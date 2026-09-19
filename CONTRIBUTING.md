# CONTRIBUTING.md — EventSphere

Thank you for your interest in contributing to EventSphere! 🎉

## Getting Started

1. **Fork** the repository on GitHub
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/<your-username>/Eventsphere.git
   cd Eventsphere
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Set up your environment:**
   ```bash
   cp .env.example .env
   # Edit .env and add your VITE_GEMINI_API_KEY
   ```
5. **Start the dev server:**
   ```bash
   npm run dev
   ```

## Development Workflow

- Create a **feature branch** from `main`:
  ```bash
  git checkout -b feat/your-feature-name
  ```
- Make your changes with clear, focused commits
- Run lint before committing:
  ```bash
  npm run lint
  ```
- Push and open a **Pull Request**

## Commit Message Format

We follow [Conventional Commits](https://www.conventionalcommits.org/):

| Prefix | When to use |
|---|---|
| `feat:` | New feature |
| `fix:` | Bug fix |
| `docs:` | Documentation only |
| `style:` | Formatting, CSS |
| `refactor:` | Code restructure (no behavior change) |
| `chore:` | Build tools, deps, config |
| `perf:` | Performance improvement |

**Example:**
```
feat: add vendor filtering by city and price tier
```

## Code Style

- Use **functional components** and React hooks
- Prefer **named exports** over default exports for utilities
- Keep components **small and focused** — extract logic into hooks/utils
- Use **JSDoc comments** for exported functions
- Design tokens live in `src/constants.js` — don't hardcode colors

## Questions?

Open an issue or reach out to Team Arka. Happy contributing! 🚀
