export function loadScript(url: string) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.onload = function onload() {
      resolve();
    };
    script.onerror = function onerror() {
      reject();
    };
    script.src = url;
    if (!document || !document.head) return;
    document.head.appendChild(script);
  });
}
