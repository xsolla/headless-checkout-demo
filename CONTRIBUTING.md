# Contributing to Headless Checkout Demo

Thanks for your interest in improving this demo. This guide covers how to set up
your environment, the conventions we follow, and how to get a change merged.

## Code of Conduct

This project follows the [Contributor Covenant](./CODE_OF_CONDUCT.md). By
participating, you agree to uphold it.

## Development setup

See the [Install](./README.md#install) section of the README for full setup. In short:

```bash
git clone https://github.com/xsolla/headless-checkout-demo.git
cd headless-checkout-demo
npm install
npm run dev
```

This project targets the Node.js version pinned in `.nvmrc` (22.14.0).

## Branch and commit conventions

- Branch off the default branch and use a short, descriptive branch name.
- Commit messages follow [Conventional Commits](https://www.conventionalcommits.org)
  (for example `fix: handle empty cart` or `feat: add saved cards`). This is
  enforced by commitlint via a Git hook.
- Prettier runs automatically on staged files via a pre-commit hook, so formatting
  is handled for you.

## Submitting a pull request

1. Make your change on a feature branch.
2. Run the checks locally before pushing:
   ```bash
   npm run lint
   npm run typescript
   npm run build
   ```
3. Open a pull request against the default branch. The PR template will guide you
   through the description.
4. A maintainer will review your change. Expect a round or two of feedback before
   it is merged.

## Questions

For questions about this demo, open a [GitHub Issue](https://github.com/xsolla/headless-checkout-demo/issues).
For Xsolla product and integration questions, see the
[Xsolla developer portal](https://developers.xsolla.com).
