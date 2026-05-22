import { useEffect } from "react";

export function AnalyticsBeacon() {
  useEffect(() => {
    const token = import.meta.env.VITE_CF_ANALYTICS_TOKEN;
    if (!token || document.querySelector("script[data-cf-beacon]")) {
      return;
    }

    const script = document.createElement("script");
    script.defer = true;
    script.src = "https://static.cloudflareinsights.com/beacon.min.js";
    script.dataset.cfBeacon = JSON.stringify({ token });
    document.head.appendChild(script);
  }, []);

  return null;
}
