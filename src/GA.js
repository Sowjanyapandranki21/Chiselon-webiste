// GA helper for page views
export const pageview = (url) => {
  if (window.gtag) {
    window.gtag('config', 'G-QJ9QZDWRJV', {
      page_path: url,
    });
  }
};

// GA helper for events
export const event = ({ action, category, label, value }) => {
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
