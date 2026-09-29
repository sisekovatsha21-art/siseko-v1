import http from 'node:http';
import { URL } from 'node:url';

const port = Number(process.env.PORT || 8787);

const json = (res, code, body) => {
  res.writeHead(code, { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' });
  res.end(JSON.stringify(body));
};

const server = http.createServer((req, res) => {
  const url = new URL(req.url || '/', `http://${req.headers.host || 'localhost'}`);
  if (url.pathname === '/api/health') {
    return json(res, 200, {
      status: 'online',
      product: 'SISEKO V1',
      mode: 'manual-analysis-only',
      automated_execution: false
    });
  }
  if (url.pathname === '/api/scan/status') {
    return json(res, 200, {
      scanner: 'WAITING',
      persistent_backend: false,
      live_feeds: {
        BTCUSD: true,
        XAUUSD: false,
        EURUSD: false,
        GBPUSD: false,
        USDJPY: false,
        NASDAQ: false,
        SP500: false
      },
      message: 'Persistent scheduled scanning and push notifications require a continuously running deployment plus genuine market-data sources.'
    });
  }
  return json(res, 404, { error: 'not_found' });
});

server.listen(port, '0.0.0.0', () => {
  console.log(`SISEKO V1 API listening on ${port}`);
});
