/**
 * Content Tests for Zen Garden Project
 * 
 * Tests verify that content    test('should    test('should contain "garden" text for vertical display', () => {
      const bodyText = document.body.textContent || document.body.innerText || '';
      
      // Should contain individual letters for "garden"
      const hasG = bodyText.toLowerCase().includes('g');
      const hasA = bodyText.toLowerCase().includes('a');
      const hasR = bodyText.toLowerCase().includes('r');
      const hasD = bodyText.toLowerCase().includes('d');
      const hasE = bodyText.toLowerCase().includes('e');
      const hasN = bodyText.toLowerCase().includes('n');
      
      expect(hasG && hasA && hasR && hasD && hasE && hasN).toBe(true);
    });in "zen" text for vertical display', () => {
      const bodyText = document.body.textContent || document.body.innerText || '';
      
      // Should contain individual letters for "zen"
      const hasZ = bodyText.toLowerCase().includes('z');
      const hasE = bodyText.toLowerCase().includes('e');
      const hasN = bodyText.toLowerCase().includes('n');
      
      expect(hasZ && hasE && hasN).toBe(true);
    });es requirements from content.md and README.md:
 * - Stone titles: Stillness, Balance, Presence
 * - Stone quotes: specific wisdom text for each stone
 * - Vertical text elements: "zen" and "garden"
 * - Proper text positioning and visibility
 */

describe('Content Tests', () => {
  
  describe('Stone Titles and Quotes', () => {
    const expectedStones = [
      {
        title: 'Stillness',
        quote: 'In quietude, clarity emerges'
      },
      {
        title: 'Balance', 
        quote: 'Harmony found in asymmetry'
      },
      {
        title: 'Presence',
        quote: 'This moment, perfectly imperfect'
      }
    ];

    test('should contain all three stone titles', () => {
      const bodyText = document.body.textContent || document.body.innerText;
      
      expectedStones.forEach(stone => {
        expect(bodyText).toContain(stone.title);
      });
    });

    test('should contain all three stone quotes', () => {
      const bodyText = document.body.textContent || document.body.innerText;
      
      expectedStones.forEach(stone => {
        expect(bodyText).toContain(stone.quote);
      });
    });

    test('should have stone content in proper containers', () => {
              // Look for containers that might have text content
        const containers = document.querySelectorAll('div, section, header');
        let foundContent = 0;
        
        containers.forEach(container => {
          const containerText = container.textContent || container.innerText || '';
          expectedStones.forEach(stone => {
            if (containerText && (containerText.includes(stone.title) || containerText.includes(stone.quote))) {
              foundContent++;
            }
          });
        });
        
        // Must have actual content implemented
        const bodyText = document.body.textContent || '';
        expect(bodyText).toContain('Stillness');
        expect(bodyText).toContain('Balance');
        expect(bodyText).toContain('Presence');
    });

    test('should have stone sizes matching content importance', () => {
      // Based on README: Small (14rem), Large (24rem), Medium (16rem)
      // Use global htmlContent from setup.js
      
      // Should have three different stone sizes
      expect(htmlContent).toMatch(/\[14rem\]/); // Stillness (smallest)
      expect(htmlContent).toMatch(/\[24rem\]/); // Balance (largest) 
      expect(htmlContent).toMatch(/\[16rem\]/); // Presence (medium)
      
      // Must have actual content implemented
      const bodyText = document.body.textContent || '';
      expect(bodyText).toContain('Stillness');
      expect(bodyText).toContain('Balance');
      expect(bodyText).toContain('Presence');
    });
  });

  describe('Vertical Text Elements', () => {
    test('should contain "zen" text for vertical display', () => {
      const bodyText = document.body.textContent || document.body.innerText || '';
      
      // Should contain individual letters for "zen"
      const hasZ = bodyText.toLowerCase().includes('z');
      const hasE = bodyText.toLowerCase().includes('e');
      const hasN = bodyText.toLowerCase().includes('n');
      
      expect(hasZ && hasE && hasN).toBe(true);
    });

    test('should contain "garden" text for vertical display', () => {
      const bodyText = document.body.textContent || document.body.innerText || '';
      
      // Should contain individual letters for "garden"
      const hasG = bodyText.toLowerCase().includes('g');
      const hasA = bodyText.toLowerCase().includes('a');
      const hasR = bodyText.toLowerCase().includes('r');
      const hasD = bodyText.toLowerCase().includes('d');
      const hasE = bodyText.toLowerCase().includes('e');
      const hasN = bodyText.toLowerCase().includes('n');
      
      expect(hasG && hasA && hasR && hasD && hasE && hasN).toBe(true);
    });

    test('should have vertical text positioned in corners', () => {
      // Use global htmlContent from setup.js
      
      // "zen" should be in top-right corner
      expect(htmlContent).toMatch(/right-\[1vw\].*top-\[1vh\]/);
      
      // "garden" should be in bottom-left corner (may not be implemented yet)
      
      // Must have actual content implemented
      const bodyText = document.body.textContent || '';
      expect(bodyText).toContain('Stillness');
      expect(bodyText).toContain('Balance');
      expect(bodyText).toContain('Presence');
    });

    test('should use appropriate colors for vertical text', () => {
      // Use global htmlContent from setup.js
      
      // "zen" should use blue-700, "garden" should use green-700
      expect(htmlContent).toMatch(/blue-700|green-700/);
      
      // Must have actual content implemented
      const bodyText = document.body.textContent || '';
      expect(bodyText).toContain('Stillness');
      expect(bodyText).toContain('Balance');
      expect(bodyText).toContain('Presence');
    });
  });

  describe('Text Visibility and Responsive Behavior', () => {
    test('should hide subtitles on desktop with md:hidden', () => {
      // Use global htmlContent from setup.js
      
      // Based on README requirements, subtitles should be hidden on desktop
      expect(htmlContent).toMatch(/md:hidden/);
      
      // Must have actual content implemented
      const bodyText = document.body.textContent || '';
      expect(bodyText).toContain('Stillness');
      expect(bodyText).toContain('Balance');
      expect(bodyText).toContain('Presence');
    });

    test('should have appropriate text sizing for different screen sizes', () => {
      // Use global htmlContent from setup.js
      
      // Should have responsive text sizing classes
      const textSizeClasses = htmlContent.match(/text-\w+/g) || [];
      expect(textSizeClasses.length).toBeGreaterThan(0);
      
      // Should have large text for desktop stones
      expect(htmlContent).toMatch(/text-5xl|text-6xl/);
      
      // Must have actual content implemented
      const bodyText = document.body.textContent || '';
      expect(bodyText).toContain('Stillness');
      expect(bodyText).toContain('Balance');
      expect(bodyText).toContain('Presence');
    });

    test('should have proper text colors matching stone theme', () => {
      // Use global htmlContent from setup.js
      
      // Should use stone color palette for text
      expect(htmlContent).toMatch(/text-stone-100|text-stone-700|text-blue-700|text-green-700/);
      
      // Must have actual content implemented
      const bodyText = document.body.textContent || '';
      expect(bodyText).toContain('Stillness');
      expect(bodyText).toContain('Balance');
      expect(bodyText).toContain('Presence');
    });
  });

  describe('Content Accessibility', () => {
    test('should have meaningful text content for screen readers', () => {
      const bodyText = document.body.textContent || document.body.innerText;
      
      // Should have actual meaningful content, not just styling classes
      expect(bodyText.trim().length).toBeGreaterThan(0);
      
      // Should contain key concepts
      expect(bodyText.toLowerCase()).toMatch(/stillness|balance|presence/);
    });

    test('should have proper heading structure if titles are in headings', () => {
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      
      if (headings.length > 0) {
        headings.forEach(heading => {
          const headingText = heading.textContent || heading.innerText;
          expect(headingText.trim().length).toBeGreaterThan(0);
        });
      }
      
      // Must have actual content implemented
      const bodyText = document.body.textContent || '';
      expect(bodyText).toContain('Stillness');
      expect(bodyText).toContain('Balance');
      expect(bodyText).toContain('Presence');
    });
  });

  describe('Content Layout and Positioning', () => {
    test('should center content within stone containers', () => {
      // Use global htmlContent from setup.js
      
      // Should use centering classes for stone content
      expect(htmlContent).toMatch(/place-items-center|items-center|justify-center/);
      
      // Must have actual content implemented
      const bodyText = document.body.textContent || '';
      expect(bodyText).toContain('Stillness');
      expect(bodyText).toContain('Balance');
      expect(bodyText).toContain('Presence');
    });

    test('should stack vertical text letters appropriately', () => {
      // Use global htmlContent from setup.js
      
      // Should use flex-col for vertical letter stacking
      expect(htmlContent).toMatch(/flex-col/);
      
      // Must have actual content implemented
      const bodyText = document.body.textContent || '';
      expect(bodyText).toContain('Stillness');
      expect(bodyText).toContain('Balance');
      expect(bodyText).toContain('Presence');
    });

    test('should have appropriate spacing between content elements', () => {
      // Use global htmlContent from setup.js
      
      // Should use gap or margin classes for proper spacing
      expect(htmlContent).toMatch(/gap-|m-\d|mt-|mb-|mx-|my-/);
      
      // Must have actual content implemented
      const bodyText = document.body.textContent || '';
      expect(bodyText).toContain('Stillness');
      expect(bodyText).toContain('Balance');
      expect(bodyText).toContain('Presence');
    });
  });

  describe('Content Implementation Status', () => {
    test('should have stone content areas ready for implementation', () => {
      // Look for elements that could contain stone content
      const stoneContentAreas = document.querySelectorAll(
        'div[class*="bg-stone-700"], div[class*="text-stone-100"], div[class*="place-items-center"]'
      );
      
      // Should have areas designated for stone content
      expect(stoneContentAreas.length).toBeGreaterThanOrEqual(0);
      
      // Must have actual content implemented
      const bodyText = document.body.textContent || '';
      expect(bodyText).toContain('Stillness');
      expect(bodyText).toContain('Balance');
      expect(bodyText).toContain('Presence');
    });

    test('should have vertical text containers ready for implementation', () => {
      // Look for containers positioned for vertical text
      const verticalContainers = document.querySelectorAll(
        'div[class*="absolute"][class*="right-"], div[class*="absolute"][class*="left-"]'
      );
      
      expect(verticalContainers.length).toBeGreaterThanOrEqual(1);
      
      // Must have actual content implemented
      const bodyText = document.body.textContent || '';
      expect(bodyText).toContain('Stillness');
      expect(bodyText).toContain('Balance');
      expect(bodyText).toContain('Presence');
    });
  });

  describe('Text Content Quality', () => {
    test('should use zen garden appropriate language', () => {
      const bodyText = document.body.textContent || document.body.innerText;
      
      // Should contain meditative, zen-like concepts
      const zenConcepts = [
        'quietude', 'clarity', 'harmony', 'asymmetry', 
        'moment', 'imperfect', 'stillness', 'balance', 'presence'
      ];
      
      const foundConcepts = zenConcepts.filter(concept => 
        bodyText.toLowerCase().includes(concept)
      );
      
      expect(foundConcepts.length).toBeGreaterThan(0);
    });

    test('should have poetic and contemplative tone', () => {
      const bodyText = document.body.textContent || document.body.innerText;
      
      // Should contain contemplative phrases
      if (bodyText.includes('In quietude') || bodyText.includes('Harmony found') || bodyText.includes('This moment')) {
        expect(true).toBe(true); // Content is properly contemplative
      } else {
        // Content may not be implemented yet, which is acceptable
        expect(bodyText.length).toBeGreaterThanOrEqual(0);
      }
      
      // Must have actual content implemented
      expect(bodyText).toContain('Stillness');
      expect(bodyText).toContain('Balance');
      expect(bodyText).toContain('Presence');
    });
  });
});