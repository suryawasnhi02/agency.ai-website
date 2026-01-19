import { useEffect } from "react";

const TawkTo = () => {
  useEffect(() => {
    if (window.Tawk_API) return;

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://embed.tawk.to/696dc75f2bf6a3197bbcc1e8/1jfad5jvc";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    script.onload = () => {
      // 🔥 FORCE SHOW ON MOBILE
      window.Tawk_API.onLoad = function () {
        window.Tawk_API.showWidget();
      };
    };

    document.body.appendChild(script);
  }, []);

  return null;
};

export default TawkTo;
