/**
 * Responsive Design Tests for Zen Garden Project
 * 
 * All tests require complete implementation to pass.
 */

describe('Responsive Design Tests', () => {
  
  describe('Mobile Layout (Default)', () => {
    test('should have mobile-first base classes without md: prefix', () => {
      const header = document.querySelector('header');
      expect(header).toBeTruthy();
      
      // Should have base mobile classes
      expect(header.classList.contains('w-100')).toBe(true);
      expect(header.classList.contains('h-[5vh]')).toBe(true);
      
      // Must have actual implementation
      const bodyText = document.body.textContent || "";
      expect(bodyText).toContain("Stillness");
      expect(bodyText).toContain("Balance");
      expect(bodyText).toContain("Presence");
    });

    test('should stack stones vertically on mobile', () => {
      // Must have actual stone implementation
      const stoneElements = document.querySelectorAll('div[class*="bg-stone-700"]');
      expect(stoneElements.length).toBeGreaterThanOrEqual(3);
      
      // Must have actual content
      const bodyText = document.body.textContent || "";
      expect(bodyText).toContain("Stillness");
    });

    test('should use smaller padding on mobile', () => {
      // Must have ripple implementation with proper padding
      const rippleElements = document.querySelectorAll('[class*="p-1"]');
      expect(rippleElements.length).toBeGreaterThanOrEqual(3);
      
      // Must have actual content
      const bodyText = document.body.textContent || "";
      expect(bodyText).toContain("Stillness");
    });

    test('should have mobile margins for vertical text', () => {
      // Must have vertical text implementation
      const verticalTextElements = document.querySelectorAll('[class*="flex-col"]');
      expect(verticalTextElements.length).toBeGreaterThanOrEqual(2);
      
      // Must contain zen and garden text
      const bodyText = document.body.textContent || "";
      expect(bodyText.toLowerCase()).toContain("z");
      expect(bodyText.toLowerCase()).toContain("e");
      expect(bodyText.toLowerCase()).toContain("n");
    });
  });

  describe('Desktop Layout (md: breakpoint)', () => {
    test('should have desktop-specific viewport sizing', () => {
      const header = document.querySelector('header');
      expect(header).toBeTruthy();
      
      // Should have desktop viewport classes
      expect(header.classList.contains('md:w-[50vw]')).toBe(true);
      expect(header.classList.contains('md:h-[50vh]')).toBe(true);
      
      // Must have complete background implementation
      const backgroundElements = document.querySelectorAll('[class*="absolute"][class*="-z-"]');
      expect(backgroundElements.length).toBeGreaterThanOrEqual(3);
    });

    test('should have absolute positioning on desktop', () => {
      // Must have stone elements with proper positioning
      const stoneElements = document.querySelectorAll('[class*="md:absolute"]');
      expect(stoneElements.length).toBeGreaterThanOrEqual(3);
      
      // Must have actual stone content
      const bodyText1 = document.body.textContent || "";
      expect(bodyText1).toContain("Stillness");
      expect(bodyText1).toContain("Balance");
      expect(bodyText1).toContain("Presence");
    });

    test('should have main section with full screen height on desktop', () => {
      const mainSection = document.querySelector('section');
      expect(mainSection.classList.contains('md:h-screen')).toBe(true);
      expect(mainSection.classList.contains('md:relative')).toBe(true);
      
      // Must have stone implementation
      const stoneElements = document.querySelectorAll('div[class*="bg-stone-700"]');
      expect(stoneElements.length).toBeGreaterThanOrEqual(3);
    });

    test('should use larger padding on desktop', () => {
      // Must have ripple elements with desktop padding
      const rippleElements = document.querySelectorAll('[class*="md:p-3"]');
      expect(rippleElements.length).toBeGreaterThanOrEqual(3);
      
      // Must have actual content
      const bodyText2 = document.body.textContent || "";
      expect(bodyText2).toContain("Stillness");
    });
  });

  describe('Viewport Units Usage', () => {
    test('should use viewport width units for horizontal positioning', () => {
      // Must have elements using vw units
      expect(htmlContent).toMatch(/\d+vw/);
      
      // Must have actual implementation
      const bodyText3 = document.body.textContent || "";
      expect(bodyText3).toContain("Stillness");
    });

    test('should use viewport height units for vertical positioning', () => {
      // Must have elements using vh units
      expect(htmlContent).toMatch(/\d+vh/);
      
      // Must have actual implementation
      const bodyText4 = document.body.textContent || "";
      expect(bodyText4).toContain("Stillness");
    });

    test('should use rem units for stone sizing', () => {
      // Must have stone sizing implementation
      expect(htmlContent).toMatch(/\d+rem/);
      
      // Must have actual stone content
      const stoneElements = document.querySelectorAll('div[class*="bg-stone-700"]');
      expect(stoneElements.length).toBeGreaterThanOrEqual(3);
    });
  });

  describe('Responsive Text Behavior', () => {
    test('should hide subtitles on desktop with md:hidden', () => {
      // Must have subtitle implementation
      expect(htmlContent).toMatch(/md:hidden/);
      
      // Must have actual quotes
      const bodyText5 = document.body.textContent || "";
      expect(bodyText5).toContain("In quietude, clarity emerges");
      expect(bodyText5).toContain("Harmony found in asymmetry");
    });

    test('should have responsive text sizing', () => {
      // Must have responsive text classes
      expect(htmlContent).toMatch(/text-\w+/); // Base mobile size
      expect(htmlContent).toMatch(/md:text-\w+/); // Desktop override
      
      // Must have actual content
      const bodyText6 = document.body.textContent || "";
      expect(bodyText6).toContain("Stillness");
    });
  });

  describe('Responsive Positioning', () => {
    test('should have asymmetrical positioning on desktop', () => {
      // Must have positioned stone elements
      const positionedElements = document.querySelectorAll('[class*="md:absolute"]');
      expect(positionedElements.length).toBeGreaterThanOrEqual(3);
      
      // Must have actual content
      const stoneElements = document.querySelectorAll('div[class*="bg-stone-700"]');
      expect(stoneElements.length).toBeGreaterThanOrEqual(3);
    });

    test('should position vertical text in corners', () => {
      // Must have vertical text implementation
      const verticalTextElements = document.querySelectorAll('[class*="flex-col"]');
      expect(verticalTextElements.length).toBeGreaterThanOrEqual(2);
      
      // Must contain actual text
      const bodyText7 = document.body.textContent || "";
      expect(bodyText7.toLowerCase()).toContain("z");
      expect(bodyText7.toLowerCase()).toContain("g");
      expect(bodyText7.toLowerCase()).toContain("a");
      expect(bodyText7.toLowerCase()).toContain("r");
      expect(bodyText7.toLowerCase()).toContain("d");
      expect(bodyText7.toLowerCase()).toContain("e");
      expect(bodyText7.toLowerCase()).toContain("n");
    });
  });

  describe('Responsive Transform Behavior', () => {
    test('should transform background shapes between mobile and desktop', () => {
      const header = document.querySelector('header');
      expect(header).toBeTruthy();
      
      // Should have both mobile bar and desktop shape classes
      expect(header.classList.contains('w-100')).toBe(true); // Mobile bar
      expect(header.classList.contains('md:w-[50vw]')).toBe(true); // Desktop shape
      
      // Must have complete background implementation
      const backgroundElements = document.querySelectorAll('[class*="absolute"][class*="-z-"]');
      expect(backgroundElements.length).toBeGreaterThanOrEqual(3);
    });

    test('should transform stone layout from vertical stack to positioned', () => {
      // Must have stones with mobile base and desktop positioning
      const stoneElements = document.querySelectorAll('[class*="md:absolute"]');
      expect(stoneElements.length).toBeGreaterThanOrEqual(3);
      
      // Must have actual stone content
      const bodyText8 = document.body.textContent || "";
      expect(bodyText8).toContain("Stillness");
      expect(bodyText8).toContain("Balance");
      expect(bodyText8).toContain("Presence");
    });
  });

  describe('Breakpoint Consistency', () => {
    test('should consistently use md: prefix for desktop styles', () => {
      // Must have md: prefixes throughout
      expect(htmlContent).toMatch(/md:\w+/);
      
      // Must have actual implementation
      const bodyText9 = document.body.textContent || "";
      expect(bodyText9).toContain("Stillness");
    });

    test('should not use other breakpoint prefixes', () => {
      // Should only use md: for this project
      expect(htmlContent).not.toMatch(/\b(sm|lg|xl|2xl):/);
      
      // Must have actual content
      const bodyText10 = document.body.textContent || "";
      expect(bodyText10).toContain("Stillness");
    });
  });
});