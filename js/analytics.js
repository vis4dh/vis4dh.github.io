// Google Analytics 4. Replace the ID below with your Measurement ID (G-XXXXXXXXXX).
const GA_MEASUREMENT_ID = 'G-N5L5YC1E78';

if (GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID);
}
