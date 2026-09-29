# SISEKO V1 — Market Intelligence System

Creator/Mentor: **SISEKO TEDROSSY VATSHA**

Mobile-first market-monitoring and alert interface for demo trading and analysis. It never places trades.

## Data integrity
- BTCUSD uses Binance public REST candles and 24h ticker.
- XAUUSD, EURUSD, GBPUSD, USDJPY, NASDAQ and SP500 are explicitly OFFLINE until genuine adapters are connected.
- No fabricated live prices, news, broker state or signals.

## Local run
```bash
npm install
npm run build
npm run dev
npm run server
```

## Architecture
- `src/engine/` deterministic indicators and scanner logic
- `src/services/` market-data adapters
- `server/` persistent-backend boundary / health endpoints
- PWA manifest included in `public/`

A genuine 24/7 scanner requires persistent hosting, scheduled execution and a push-notification gateway. The UI states that requirement instead of pretending the phone browser is an always-on backend.

## Free Android APK build
A GitHub Actions workflow is included at `.github/workflows/android-apk.yml`.
For a no-charge route using GitHub-hosted standard runners, use a **public repository**; GitHub documents standard runner usage as free for public repositories. citeturn685402search0turn685402search6
The workflow produces `app-debug.apk` as a downloadable Actions artifact. GitHub documents workflow artifacts as a way to persist and share binary build outputs. citeturn685402search10
