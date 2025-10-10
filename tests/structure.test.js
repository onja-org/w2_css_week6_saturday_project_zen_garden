describe('HTML Structure Tests', () => {
  describe('Document Structure', () => {
    test('should have proper HTML5 document structure', () => {
      expect(document.doctype.name).toBe('html');
      expect(document.documentElement.lang).toBe('en');
      expect(document.head.querySelector('meta[charset="UTF-8"]')).toBeTruthy();
      expect(document.head.querySelector('meta[name="viewport"]')).toBeTruthy();
      expect(document.title).toBe('Zen Garden');
      
      // Must have actual content implemented
      const bodyText = document.body.textContent || '';
      expect(bodyText).toContain('Stillness');
      expect(bodyText).toContain('Balance');
      expect(bodyText).toContain('Presence');
    });

    test('should include Tailwind CSS from CDN', () => {
      const tailwindScript = document.head.querySelector('script[src*="tailwindcss.com"]');
      expect(tailwindScript).toBeTruthy();
      
      // Must have actual content implemented
      const bodyText = document.body.textContent || '';
      expect(bodyText).toContain('Stillness');
      expect(bodyText).toContain('Balance');
      expect(bodyText).toContain('Presence');
    });

    test('should have body with stone background', () => {
      const body = document.body;
      expect(body.classList.contains('bg-stone-100')).toBe(true);
      
      // Must also have actual content implemented
      const bodyText = document.body.textContent || '';
      expect(bodyText).toContain('Stillness');
    });
  });

  describe('Main Section - Floating Stones', () => {
    let mainSection;
    
    beforeEach(() => {
      mainSection = document.querySelector('section');
    });

    test('should have main section with proper responsive classes', () => {
      expect(mainSection).toBeTruthy();
      expect(mainSection.classList.contains('md:relative')).toBe(true);
      expect(mainSection.classList.contains('md:h-screen')).toBe(true);
      expect(mainSection.classList.contains('overflow-hidden')).toBe(true);
      
      // Must have actual stone content implemented
      const stoneElements = document.querySelectorAll('div[class*="bg-stone-700"]');
      expect(stoneElements.length).toBeGreaterThanOrEqual(3);
    });
  });

  describe('Background Architecture', () => {
    test('should have header element as top-left background shape', () => {
      const header = document.querySelector('header');
      expect(header).toBeTruthy();
      
      // Check for required classes
      const expectedClasses = [
        'bg-stone-300', 'md:absolute', 'left-0', 'top-0', '-z-20'
      ];
      
      expectedClasses.forEach(className => {
        expect(header.classList.contains(className)).toBe(true);
      });
      
      // Must have complete background implementation
      const backgroundElements = document.querySelectorAll('[class*="absolute"][class*="-z-"]');
      expect(backgroundElements.length).toBeGreaterThanOrEqual(3);
    });

    test('should have background elements for curved design', () => {
      // Must have all background elements implemented, not just header
      const backgroundElements = document.querySelectorAll('[class*="absolute"][class*="-z-"]');
      expect(backgroundElements.length).toBeGreaterThanOrEqual(3); // header, bottom shape, circle
      
      // Must have the bottom-right dark shape
      const bottomRightElements = document.querySelectorAll('[class*="bg-stone-700"][class*="absolute"]');
      expect(bottomRightElements.length).toBeGreaterThanOrEqual(1);
      
      // Must have the large light circle overlay
      const circleOverlay = document.querySelectorAll('[class*="rounded-full"][class*="bg-stone-100"][class*="absolute"]');
      expect(circleOverlay.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe('Stone Elements', () => {
    test('should have exactly three stone containers with ripple effects', () => {
      // Look for elements that have the ripple structure (nested rounded divs)
      const stoneContainers = document.querySelectorAll('div[class*="rounded-full"][class*="border"]');
      expect(stoneContainers.length).toBeGreaterThanOrEqual(3);
    });

    test('should have ripple effect structure with nested divs', () => {
      // Must have proper 8-level nested structure for ripples
      const rippleContainers = document.querySelectorAll('div[class*="rounded-full"][class*="border"]');
      
      let hasProperNesting = false;
      rippleContainers.forEach(container => {
        const nestedDivs = container.querySelectorAll('div');
        if (nestedDivs.length >= 7) { // At least 7 nested divs for proper ripple effect
          hasProperNesting = true;
        }
      });
      
      expect(hasProperNesting).toBe(true);
      expect(rippleContainers.length).toBeGreaterThanOrEqual(3); // Three stone containers
    });

    test('should have stone content divs with proper styling', () => {
      // Must have all three center stone divs with actual content
      const stoneContent = document.querySelectorAll('div[class*="bg-stone-700"]');
      expect(stoneContent.length).toBeGreaterThanOrEqual(3);
      
      // Must contain actual stone titles
      const bodyText = document.body.textContent || '';
      expect(bodyText).toContain('Stillness');
      expect(bodyText).toContain('Balance');
      expect(bodyText).toContain('Presence');
    });
  });

  describe('Vertical Text Elements', () => {
    test('should have vertical text containers', () => {
      // Must have actual vertical text implementation
      const verticalTextContainers = document.querySelectorAll('div[class*="flex-col"]');
      expect(verticalTextContainers.length).toBeGreaterThanOrEqual(2);
      
      // Must contain actual zen and garden text
      const bodyText = document.body.textContent || '';
      expect(bodyText.toLowerCase()).toContain('z');
      expect(bodyText.toLowerCase()).toContain('e');
      expect(bodyText.toLowerCase()).toContain('n');
      expect(bodyText.toLowerCase()).toContain('g');
      expect(bodyText.toLowerCase()).toContain('a');
      expect(bodyText.toLowerCase()).toContain('r');
      expect(bodyText.toLowerCase()).toContain('d');
    });

    test('should have flex-col classes for vertical text layout', () => {
      // Must have actual flex-col implementation
      const flexColElements = document.querySelectorAll('[class*="flex-col"]');
      expect(flexColElements.length).toBeGreaterThanOrEqual(2);
      
      // Must have span elements for individual letters
      const spanElements = document.querySelectorAll('span');
      expect(spanElements.length).toBeGreaterThanOrEqual(9); // z,e,n + g,a,r,d,e,n = 9 letters
    });
  });

  describe('Responsive Classes', () => {
    test('should use md: prefixes for desktop-specific styling', () => {
      // Use global htmlContent from setup.js
      
      // Should contain md: prefix classes for responsive design
      expect(htmlContent).toMatch(/md:\w+/);
      
      // Must have actual content implementation
      const bodyText = document.body.textContent || '';
      expect(bodyText).toContain('Stillness');
      expect(bodyText).toContain('Balance');
      expect(bodyText).toContain('Presence');
    });

    test('should have mobile-first approach with md: breakpoint', () => {
      // Look for elements that have base classes and md: overrides
      const elementsWithMobile = document.querySelectorAll('[class*="p-1"], [class*="m-4"]');
      const mobileFirstClasses = [];
      
      elementsWithMobile.forEach(element => {
        if (element.className.includes('md:')) {
          mobileFirstClasses.push(element);
        }
      });
      
      // Should have both mobile base classes and desktop overrides
      expect(mobileFirstClasses.length).toBeGreaterThanOrEqual(1);
      
      // Must have complete stone implementation
      const stoneElements = document.querySelectorAll('div[class*="bg-stone-700"]');
      expect(stoneElements.length).toBeGreaterThanOrEqual(3);
    });
  });

  describe('Z-Index Layering', () => {
    test('should have proper z-index layering for background and content', () => {
      // Background elements should have negative z-index
      const backgroundElements = document.querySelectorAll('[class*="-z-"]');
      expect(backgroundElements.length).toBeGreaterThanOrEqual(1);
      
      // Content elements should have positive z-index
      const contentElements = document.querySelectorAll('[class*="z-10"]');
      expect(contentElements.length).toBeGreaterThanOrEqual(1);
      
      // Must have actual content in the stones
      const bodyText = document.body.textContent || '';
      expect(bodyText).toContain('Stillness');
      expect(bodyText).toContain('Balance');
      expect(bodyText).toContain('Presence');
    });
  });
});