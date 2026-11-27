type DataLayerEvent = Record<string, unknown> & { event: string };

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

export function track(event: string, params: Record<string, unknown> = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params } satisfies DataLayerEvent);
}

const rules: { match: (url: URL) => boolean; event: string; params?: Record<string, unknown> }[] = [
  { match: u => u.hostname === "forms.gle" || u.hostname === "docs.google.com", event: "registration_form_click" },
  { match: u => u.hostname.endsWith("whatsapp.com") && u.pathname.startsWith("/channel"), event: "whatsapp_channel_click" },
  { match: u => u.hostname.endsWith("facebook.com"), event: "facebook_page_click" },
  { match: u => u.hostname === "chat.whatsapp.com", event: "whatsapp_group_click" },
  { match: u => u.hostname === "rzp.io" && u.pathname.includes("gi2dk7aW"), event: "fullstack_bootcamp_checkout_click", params: { value: 999, currency: "INR" } },
  { match: u => u.hostname === "rzp.io" || u.hostname.endsWith("razorpay.com"), event: "qissa_pack_click", params: { value: 499, currency: "INR" } },
];

export function initTracking() {
  document.addEventListener(
    "click",
    e => {
      const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a) return;
      let url: URL;
      try {
        url = new URL(a.href);
      } catch {
        return;
      }
      if (url.origin === location.origin) return;
      const rule = rules.find(r => r.match(url));
      const section = a.closest("section, header, footer, [data-track-area]");
      track(rule?.event ?? "outbound_click", {
        link_url: a.href,
        link_text: (a.textContent || a.getAttribute("aria-label") || "").trim().slice(0, 100),
        link_area: section?.getAttribute("data-track-area") || section?.tagName.toLowerCase() || "page",
        ...rule?.params,
      });
    },
    { capture: true }
  );
}
