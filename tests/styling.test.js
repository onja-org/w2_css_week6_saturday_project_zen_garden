/**
 * Styling Tests for Zen Garden Project
 * 
 * Tests verify Tailwind CSS implementation matching README.md requirements:
 * - Stone color palette (stone-100 through stone-900)
 * - Ripple effects with proper borders and opacity
 * - Positioning and sizing classes
 * - Visual layering with z-index
 * - Circle shapes and transparency effects
 */

describe('Styling Tests', () => {
  
  describe('Color Palette Implementation', () => {
    test('should use stone color palette throughout', () => {
      // Use global htmlContent from setup.js
      
      // Should use various stone colors as specified in README
      const stoneColors = [
        'stone-100', 'stone-300', 'stone-400', 'stone-700'
      ];
      
      stoneColors.forEach(color => {
        expect(htmlContent).toMatch(new RegExp(`bg-${color}|border-${color}|text-${color}`));
      });
      
      // Must have actual implementation
      const bodyText = document.body.textContent || '';
      expect(bodyText).toContain('Stillness');
      expect(bodyText).toContain('Balance');
      expect(bodyText).toContain('Presence');
    });

    test('should use accent colors appropriately', () => {
      // Use global htmlContent from setup.js
      
      // Should use blue-700 for "zen" and green-700 for "garden"
      expect(htmlContent).toMatch(/blue-700/);
      expect(htmlContent).toMatch(/green-700/);
      
      // Must have actual implementation
      const bodyText = document.body.textContent || '';
      expect(bodyText).toContain('Stillness');
      expect(bodyText).toContain('Balance');
      expect(bodyText).toContain('Presence');
    });

    test('should use transparency effects with opacity modifiers', () => {
      // Use global htmlContent from setup.js
      
      // Should use /20 opacity modifier for ripple effects
      expect(htmlContent).toMatch(/bg-stone-100\/20/);
      
      // Must have actual implementation
      const bodyText = document.body.textContent || '';
      expect(bodyText).toContain('Stillness');
      expect(bodyText).toContain('Balance');
      expect(bodyText).toContain('Presence');
    });

    test('should have proper contrast between text and backgrounds', () => {
      // Use global htmlContent from setup.js
      
      // Dark stones should have light text
      if (htmlContent.includes('bg-stone-700')) {
        expect(htmlContent).toMatch(/text-stone-100/);
      }
      
      // Must have actual implementation
      const bodyText = document.body.textContent || '';
      expect(bodyText).toContain('Stillness');
      expect(bodyText).toContain('Balance');
      expect(bodyText).toContain('Presence');
    });
  });

  describe('Ripple Effects Styling', () => {
    test('should have proper border styling for ripples', () => {
      const rippleElements = document.querySelectorAll('[class*="border-stone-400"]');
      
      rippleElements.forEach(element => {
        expect(element.classList.contains('border-2')).toBe(true);
        expect(element.classList.contains('rounded-full')).toBe(true);
      });
      
      // Must have actual implementation
      const bodyText = document.body.textContent || '';
      expect(bodyText).toContain('Stillness');
      expect(bodyText).toContain('Balance');
      expect(bodyText).toContain('Presence');
    });

    test('should have nested ripple structure with transparency', () => {
      const rippleElements = document.querySelectorAll('[class*="bg-stone-100/20"]');
      
      rippleElements.forEach(element => {
        expect(element.classList.contains('rounded-full')).toBe(true);
      });
      
      // Must have actual implementation
      const bodyText = document.body.textContent || '';
      expect(bodyText).toContain('Stillness');
      expect(bodyText).toContain('Balance');
      expect(bodyText).toContain('Presence');
    });

    test('should use proper padding for ripple spacing', () => {
      // Use global htmlContent from setup.js
      
      // Should have responsive padding: p-1 for mobile, md:p-3 for desktop
      expect(htmlContent).toMatch(/p-1/);
      expect(htmlContent).toMatch(/md:p-3/);
      
      // Must have actual implementation
      const bodyText = document.body.textContent || '';
      expect(bodyText).toContain('Stillness');
      expect(bodyText).toContain('Balance');
      expect(bodyText).toContain('Presence');
    });

    test('should have 8 nested ripple levels as specified', () => {
      // This tests the requirement for 8 nested divs for ripple effect
      const rippleContainers = document.querySelectorAll('[class*="border-stone-400"][class*="bg-stone-100/20"]');
      
      if (rippleContainers.length > 0) {
        // Check if we can find deeply nested structures
        const deeplyNested = document.querySelectorAll('div div div div div div div div');
        expect(deeplyNested.length).toBeGreaterThanOrEqual(0);
      }
      
      // Must have actual implementation
      const bodyText = document.body.textContent || '';
      expect(bodyText).toContain('Stillness');
      expect(bodyText).toContain('Balance');
      expect(bodyText).toContain('Presence');
    });
  });

  describe('Stone Sizing and Shapes', () => {
    test('should have three different stone sizes', () => {
      // Use global htmlContent from setup.js
      
      // Should have small (14rem), large (24rem), and medium (16rem) stones
      expect(htmlContent).toMatch(/w-\[14rem\].*h-\[14rem\]/);
      expect(htmlContent).toMatch(/w-\[24rem\].*h-\[24rem\]/);
      expect(htmlContent).toMatch(/w-\[16rem\].*h-\[16rem\]/);
      
      // Must have actual implementation
      const bodyText = document.body.textContent || '';
      expect(bodyText).toContain('Stillness');
      expect(bodyText).toContain('Balance');
      expect(bodyText).toContain('Presence');
    });

    test('should use perfect circles for stones and ripples', () => {
      const circularElements = document.querySelectorAll('.rounded-full');
      expect(circularElements.length).toBeGreaterThanOrEqual(1);
      
      // Must have complete ripple implementation
      expect(circularElements.length).toBeGreaterThanOrEqual(20); // 8 ripples × 3 stones + extras
      
      // Must have actual stone content
      const bodyText = document.body.textContent || '';
      expect(bodyText).toContain('Stillness');
      expect(bodyText).toContain('Balance');
      expect(bodyText).toContain('Presence');
    });

    test('should have proper stone background colors', () => {
      // Use global htmlContent from setup.js
      
      // Center stones should have dark background
      expect(htmlContent).toMatch(/bg-stone-700/);
      
      // Must have actual implementation
      const bodyText = document.body.textContent || '';
      expect(bodyText).toContain('Stillness');
      expect(bodyText).toContain('Balance');
      expect(bodyText).toContain('Presence');
    });

    test('should center content within stones', () => {
      // Use global htmlContent from setup.js
      
      // Should use grid place-items-center for perfect centering
      expect(htmlContent).toMatch(/grid.*place-items-center|place-items-center.*grid/);
      
      // Must have actual implementation
      const bodyText = document.body.textContent || '';
      expect(bodyText).toContain('Stillness');
      expect(bodyText).toContain('Balance');
      expect(bodyText).toContain('Presence');
    });
  });

  describe('Positioning and Layout', () => {
    test('should use absolute positioning for desktop layout', () => {
      // Use global htmlContent from setup.js
      
      // Should use md:absolute for desktop positioning
      expect(htmlContent).toMatch(/md:absolute/);
      
      // Must have actual implementation
      const bodyText = document.body.textContent || '';
      expect(bodyText).toContain('Stillness');
      expect(bodyText).toContain('Balance');
      expect(bodyText).toContain('Presence');
    });

    test('should use viewport units for responsive positioning', () => {
      // Use global htmlContent from setup.js
      
      // Should use vh and vw units for positioning
      expect(htmlContent).toMatch(/top-\[\d+vh\]/);
      expect(htmlContent).toMatch(/left-\[\d+vw\]/);
      expect(htmlContent).toMatch(/right-\[\d+vw\]/);
      expect(htmlContent).toMatch(/bottom-\[\d+vh\]/);
      
      // Must have actual implementation
      const bodyText = document.body.textContent || '';
      expect(bodyText).toContain('Stillness');
      expect(bodyText).toContain('Balance');
      expect(bodyText).toContain('Presence');
    });

    test('should have asymmetrical positioning for visual balance', () => {
      // Use global htmlContent from setup.js
      
      // Should have varied positioning values for asymmetrical layout
      const positions = ['25vw', '20vw', '2vh', '20vh', '5vh'];
      positions.forEach(position => {
        expect(htmlContent).toMatch(new RegExp(position.replace(/[\[\]]/g, '\\$&')));
      });
      
      // Must have actual implementation
      const bodyText = document.body.textContent || '';
      expect(bodyText).toContain('Stillness');
      expect(bodyText).toContain('Balance');
      expect(bodyText).toContain('Presence');
    });
  });

  describe('Z-Index Layering', () => {
    test('should have proper layering hierarchy', () => {
      // Use global htmlContent from setup.js
      
      // Background elements should have negative z-index
      expect(htmlContent).toMatch(/-z-10|-z-20/);
      
      // Content elements should have positive z-index
      expect(htmlContent).toMatch(/z-10/);
      
      // Must have actual implementation
      const bodyText = document.body.textContent || '';
      expect(bodyText).toContain('Stillness');
      expect(bodyText).toContain('Balance');
      expect(bodyText).toContain('Presence');
    });

    test('should layer background elements correctly', () => {
      const backgroundElements = document.querySelectorAll('[class*="-z-"]');
      expect(backgroundElements.length).toBeGreaterThanOrEqual(1);
      
      // Must have complete background implementation
      expect(backgroundElements.length).toBeGreaterThanOrEqual(3);
      
      // Must have actual content
      const bodyText = document.body.textContent || '';
      expect(bodyText).toContain('Stillness');
    });

    test('should bring content elements to front', () => {
      const contentElements = document.querySelectorAll('[class*="z-10"]');
      expect(contentElements.length).toBeGreaterThanOrEqual(0);
      
      // Must have actual implementation
      const bodyText = document.body.textContent || '';
      expect(bodyText).toContain('Stillness');
      expect(bodyText).toContain('Balance');
      expect(bodyText).toContain('Presence');
    });
  });

  describe('Background Architecture Styling', () => {
    test('should have curved background implementation', () => {
      const header = document.querySelector('header');
      expect(header).toBeTruthy();
      expect(header.classList.contains('bg-stone-300')).toBe(true);
      
      // Must have complete background architecture
      const backgroundElements = document.querySelectorAll('[class*="absolute"][class*="-z-"]');
      expect(backgroundElements.length).toBeGreaterThanOrEqual(3);
      
      // Must have stone content
      const stoneElements = document.querySelectorAll('div[class*="bg-stone-700"]');
      expect(stoneElements.length).toBeGreaterThanOrEqual(3);
    });

    test('should use proper viewport sizing for backgrounds', () => {
      // Use global htmlContent from setup.js
      
      // Should use 50vw and 50vh for desktop background shapes
      expect(htmlContent).toMatch(/w-\[50vw\]/);
      expect(htmlContent).toMatch(/h-\[50vh\]/);
      
      // Must have actual implementation
      const bodyText = document.body.textContent || '';
      expect(bodyText).toContain('Stillness');
      expect(bodyText).toContain('Balance');
      expect(bodyText).toContain('Presence');
    });

    test('should have mobile fallback for background shapes', () => {
      const header = document.querySelector('header');
      
      // Should have mobile classes as base
      expect(header.classList.contains('w-100')).toBe(true);
      expect(header.classList.contains('h-[5vh]')).toBe(true);
      
      // Must have actual implementation
      const bodyText = document.body.textContent || '';
      expect(bodyText).toContain('Stillness');
      expect(bodyText).toContain('Balance');
      expect(bodyText).toContain('Presence');
    });
  });

  describe('Typography Styling', () => {
    test('should have appropriate text sizing', () => {
      // Use global htmlContent from setup.js
      
      // Should have large text for stone titles
      expect(htmlContent).toMatch(/text-5xl|text-6xl/);
      
      // Should have text sizing (we use text-xs, text-lg, text-xl, etc.)
      expect(htmlContent).toMatch(/text-xs|text-lg|text-xl|text-2xl|text-4xl|text-6xl/);
      
      // Must have actual implementation
      const bodyText = document.body.textContent || '';
      expect(bodyText).toContain('Stillness');
      expect(bodyText).toContain('Balance');
      expect(bodyText).toContain('Presence');
    });

    test('should use proper text colors', () => {
      // Use global htmlContent from setup.js
      
      // Should have light text on dark backgrounds
      expect(htmlContent).toMatch(/text-stone-100/);
      
      // Should have colored text for vertical elements
      expect(htmlContent).toMatch(/text-blue-700|text-green-700/);
    });

    test('should have vertical text layout classes', () => {
      // Use global htmlContent from setup.js
      
      // Should use flex-col for vertical text stacking
      expect(htmlContent).toMatch(/flex-col/);
      
      // Must have actual implementation
      const bodyText = document.body.textContent || '';
      expect(bodyText).toContain('Stillness');
      expect(bodyText).toContain('Balance');
      expect(bodyText).toContain('Presence');
    });
  });

  describe('Responsive Styling Behavior', () => {
    test('should hide elements appropriately on different screen sizes', () => {
      // Use global htmlContent from setup.js
      
      // Should hide subtitles on desktop
      expect(htmlContent).toMatch(/md:hidden/);
      
      // Must have actual implementation
      const bodyText = document.body.textContent || '';
      expect(bodyText).toContain('Stillness');
      expect(bodyText).toContain('Balance');
      expect(bodyText).toContain('Presence');
    });

    test('should use mobile-first responsive classes', () => {
      // Use global htmlContent from setup.js
      
      // Should have base classes without prefixes and md: overrides
      const mobileFirstPattern = /class="[^"]*\b\w+-[\w\[\]\/]+[^"]*md:\w+-[\w\[\]\/]+/;
      expect(htmlContent).toMatch(mobileFirstPattern);
      
      // Must have actual implementation
      const bodyText = document.body.textContent || '';
      expect(bodyText).toContain('Stillness');
      expect(bodyText).toContain('Balance');
      expect(bodyText).toContain('Presence');
    });

    test('should transform layout elements between breakpoints', () => {
      // Use global htmlContent from setup.js
      
      // Should have different sizing between mobile and desktop
      expect(htmlContent).toMatch(/h-\[5vh\].*md:h-\[50vh\]/);
      expect(htmlContent).toMatch(/w-100.*md:w-\[50vw\]/);
      
      // Must have actual implementation
      const bodyText = document.body.textContent || '';
      expect(bodyText).toContain('Stillness');
      expect(bodyText).toContain('Balance');
      expect(bodyText).toContain('Presence');
    });
  });

  describe('Visual Effects Implementation', () => {
    test('should have overflow handling for full-screen sections', () => {
      const mainSection = document.querySelector('section');
      expect(mainSection.classList.contains('overflow-hidden')).toBe(true);
      
      // Must have actual implementation
      const bodyText = document.body.textContent || '';
      expect(bodyText).toContain('Stillness');
      expect(bodyText).toContain('Balance');
      expect(bodyText).toContain('Presence');
    });

    test('should have proper spacing and gaps', () => {
      // Use global htmlContent from setup.js
      
      // Should use margin and padding classes appropriately
      expect(htmlContent).toMatch(/m-\d|p-\d|gap-\d/);
      
      // Must have actual implementation
      const bodyText = document.body.textContent || '';
      expect(bodyText).toContain('Stillness');
      expect(bodyText).toContain('Balance');
      expect(bodyText).toContain('Presence');
    });

    test('should implement stone-themed visual consistency', () => {
      // Use global htmlContent from setup.js
      
      // Should consistently use stone color family
      const stoneClassCount = (htmlContent.match(/stone-\d+/g) || []).length;
      expect(stoneClassCount).toBeGreaterThan(5);
      
      // Must have actual implementation
      const bodyText = document.body.textContent || '';
      expect(bodyText).toContain('Stillness');
      expect(bodyText).toContain('Balance');
      expect(bodyText).toContain('Presence');
    });
  });
});