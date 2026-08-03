# MCP v2 遷移指南

> 本文以 MCP 2026-07-28 protocol revision 與 Python／TypeScript SDK 2.x 為基準。不同 Client、Server 與 SDK 可能尚未完整支援所有新能力；執行前請確認實際版本。

## 版本基準

| 層級 | 版本／狀態 | 來源 |
|---|---|---|
| Protocol | 2026-07-28 stable revision | [MCP specification changelog](https://modelcontextprotocol.io/specification/2026-07-28/changelog) |
| Python SDK | v2.0.0；v1 maintenance mode | [Python SDK v2.0.0](https://github.com/modelcontextprotocol/python-sdk/releases/tag/v2.0.0) |
| TypeScript SDK | core v2.0.0 | [TypeScript SDK core v2.0.0](https://github.com/modelcontextprotocol/typescript-sdk/releases/tag/%40modelcontextprotocol/core%402.0.0) |

## 主要變更

### Stateful → stateless transport

新版移除 Streamable HTTP 的 protocol-level session 與 `Mcp-Session-Id`。Client 不應把 session id 當成跨 request 的必要協定狀態；新版能力與版本資訊改由每次 request 的 metadata／implementation 協議處理。

### Handshake 變更

舊版常見流程：

```text
initialize → notifications/initialized → tools/list → tools/call
```

新版 migration 時，必須依 SDK 與 Server 實作確認實際流程；不要直接把舊版 handshake 程式碼複製到 v2。`server/discover`、新的 request metadata 與能力協商可能取代部分舊流程。

### Tasks、subscriptions 與 multi-round-trip

- Tasks 不再視為核心協定中的單一固定流程，需確認使用的 extension 與 SDK 支援範圍。
- 新版 subscriptions 與 `subscriptions/listen` 行為不可直接等同舊版 GET／session 模式。
- Multi Round-Trip Requests 會影響 timeout、重試、取消與狀態紀錄；每一輪都要保留 correlation 與錯誤輸出。

## 遷移 checklist

- [ ] 固定 protocol、SDK、Client 與 Server 版本。
- [ ] 確認 Client／Server 是否支援 2026-07-28 revision。
- [ ] 移除對 `Mcp-Session-Id` 的硬依賴，或保留明確的舊版相容層。
- [ ] 重新測試 initialize／discover、tools/list、tools/call、錯誤與取消。
- [ ] 重新驗證 OAuth issuer、scope、redirect 與 credential path。
- [ ] 檢查 cache 欄位與 request body size 限制。
- [ ] 對 Tasks、subscriptions、Sampling、Roots、Logging 與 HTTP+SSE 標示 stable／deprecated／extension 狀態。
- [ ] 執行官方 conformance tests；不要以一次成功 handshake 取代完整驗證。

## 最小驗證紀錄

```text
Protocol revision：
Client／Server：
SDK 與版本：
OS／runtime：
Transport：
initialize／discover：
tools/list：
tools/call：
OAuth／authorization：
Multi-round-trip／cancel：
Conformance 結果：
已知不相容：
rollback／舊版相容方案：
```

## 安全提醒

MCP Server 是外部工具與資料來源，不是可信任的「AI 感官」。每個 Server 都要單獨評估：

- 可讀取的檔案與 secrets
- 可寫入的資料與外部 API
- network egress 與 proxy
- OAuth scope 與 credential 保存位置
- tool output 是否可能包含 prompt injection

搭配 [MCP-GUIDE.md](MCP-GUIDE.md)、[AI-CODING-SECURITY.md](AI-CODING-SECURITY.md) 與 [VALIDATION-SOP.md](VALIDATION-SOP.md) 使用。
