import { Api } from "./generated";

const mediaMtxUrl = process.env.MEDIAMTX_URL || "http://localhost";
const mediaMtxApiPort = process.env.MEDIAMTX_API_PORT || 9997;
const api = new Api({ baseUrl: `${mediaMtxUrl}:${mediaMtxApiPort}` });

export default api;
