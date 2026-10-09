const measurementId = "G-MFCVSF28XQ";
const analyticsWindow = window as Window & { dataLayer?: unknown[] };
const dataLayer = (analyticsWindow.dataLayer ??= []);

function gtag(..._args: unknown[]) {
  dataLayer.push(arguments);
}

gtag("js", new Date());
gtag("config", measurementId);

const script = document.createElement("script");
script.async = true;
script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
document.head.append(script);
