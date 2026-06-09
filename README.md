# Headless Checkout Demo

![License](https://img.shields.io/github/license/xsolla/headless-checkout-demo)
![Latest release](https://img.shields.io/github/v/release/xsolla/headless-checkout-demo)
![Build](https://img.shields.io/github/actions/workflow/status/xsolla/headless-checkout-demo/check.yml)

## Overview

Headless Checkout Demo is a React single-page app that shows how to build a fully
custom payment experience on top of the [Xsolla Pay Station SDK](https://www.npmjs.com/package/@xsolla/pay-station-sdk).
Instead of redirecting players to a hosted Pay Station, the headless flow keeps the
checkout inside your own UI so you control the layout, fields, and styling — the
payment step matches your game or store design.

It is intended for web developers evaluating or integrating Xsolla's headless
checkout. A live build is available at
[headless-checkout-demo-react.web.app](https://headless-checkout-demo-react.web.app/start-page).

## Requirements

- [Node.js](https://nodejs.org) 22.14.0 (pinned in `.nvmrc`)
- npm 10 or later (bundled with Node.js)
- An [Xsolla Publisher Account](https://publisher.xsolla.com) project with Pay Station
  enabled — only required if you point the demo at your own backend (see Usage). The
  default configuration runs against a shared demo token service.

## Install

```bash
git clone https://github.com/xsolla/headless-checkout-demo.git
cd headless-checkout-demo
npm install
```

## Usage

The demo ships with a working configuration in `.env.development`, so it runs out of
the box against a shared demo token service.

1. Start the dev server:
   ```bash
   npm run dev
   ```
2. Open http://localhost:4173 and step through the checkout from the start page.
3. (Optional) To run against your own Xsolla project, set the environment variables
   in `.env.development`:
   - `VITE_GET_TOKEN_URL` — endpoint that returns a Pay Station access token
   - `VITE_CDN_URL` — base URL for the demo assets
   - `VITE_RETURN_URL` — URL the flow returns to after payment

## Documentation

- Pay Station integration guide and API reference: [developers.xsolla.com/doc/pay-station](https://developers.xsolla.com/doc/pay-station/)
- Pay Station SDK package: [@xsolla/pay-station-sdk](https://www.npmjs.com/package/@xsolla/pay-station-sdk)

## Support

- **GitHub Issues:** [github.com/xsolla/headless-checkout-demo/issues](https://github.com/xsolla/headless-checkout-demo/issues)
- **Developer portal:** [developers.xsolla.com](https://developers.xsolla.com)

## License

MIT License. See [LICENSE](./LICENSE).
