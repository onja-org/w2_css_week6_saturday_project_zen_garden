require('@testing-library/jest-dom');

// Polyfills for Node.js environment
const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const fs = require('fs');
const path = require('path');

// Load HTML content once
const htmlPath = path.resolve(__dirname, '..', 'lab', 'index.html');
let htmlContent;

try {
  htmlContent = fs.readFileSync(htmlPath, 'utf8');
  // console.log('HTML loaded successfully, length:', htmlContent.length); // Removed for cleaner output
} catch (error) {
  console.error('Failed to load HTML file:', error);
  htmlContent = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Zen Garden</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="bg-stone-100">
    <section class="md:relative md:h-screen overflow-hidden">
      <!-- Fallback content -->
    </section>
  </body>
</html>`;
}

// Make HTML content available globally for tests
global.originalHtmlContent = htmlContent;

// Set up a new DOM for each test
beforeEach(() => {
  // Instead of replacing the entire DOM, inject our HTML into the existing one
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, 'text/html');
  
  // Replace the content of the existing document
  document.documentElement.innerHTML = doc.documentElement.innerHTML;
  
  // Set the lang attribute manually
  document.documentElement.setAttribute('lang', 'en');
  
  // Make the original HTML content available for string-based tests
  global.htmlContent = htmlContent;
  
  // Mock window.matchMedia for responsive testing
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});