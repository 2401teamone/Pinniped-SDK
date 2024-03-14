import pnpd from "./pnpd.js";

export default function initialize(url, apiKey) {
  return new pnpd(url, apiKey);
}
