export const loadFontAwesome = async () => {
  if (document.querySelector('link[href*="font-awesome"]')) return;

  try {
    await import('../../public/fonts/fontawesome/css/all.min.css');
    console.log('Font Awesome loaded');
  } catch (error) {
    console.error('Error loading Font Awesome:', error);
  }
};
