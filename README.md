# Project Overview

This is a **Week 2 CSS** project from the Onja coding bootcamp, specifically the **Saturday Project** for Week 6. Students learn to create responsive, visually appealing designs using only Tailwind CSS utility classes.

### 🎯 Learning Objectives
- Master Tailwind CSS utility classes
- Create responsive layouts that transform between mobile and desktop
- Implement complex visual effects (ripples, layered elements)
- Practice asymmetrical but balanced design principles
- Work with positioning, z-index, and transparency

### 🛠️ Technologies Used
- **HTML5** - Semantic structure
- **Tailwind CSS** - Utility-first styling via CDN
- **Responsive Design** - Mobile-first approach
- **Jest** - Testing framework with jsdom environment
- **Git Integration** - Automated branching and submission workflow

## 📂 Project Structure

```
zen_garden/
├── README.md           # Project overview (this file)
├── package.json        # Dependencies and test scripts
├── jest.config.js      # Jest testing configuration
├── scripts/
│   └── submit.sh       # Automated submission script
├── tests/              # Comprehensive test suite (107 tests)
│   ├── setup.js        # Test environment setup
│   ├── structure.test.js      # HTML structure tests
│   ├── content.test.js        # Content validation tests  
│   ├── styling.test.js        # CSS styling tests
│   ├── responsive.test.js     # Responsive design tests
│   ├── accessibility.test.js  # Accessibility tests
│   ├── generate-test-report.js # HTML report generator
│   └── test-results.html      # Generated test results (after running tests)
└── lab/
    ├── README.md       # Detailed implementation guide
    ├── index.html      # Main project file (starter template)
    ├── solution.html   # Complete solution (use as last resort)
    ├── content.md      # Content and text for the stones
    └── assets/
        ├── zen_garden_full.png    # Desktop design reference
        └── zen_garden_mobile.png  # Mobile design reference
```

## 🎯 Design Features

<img src="./lab/assets/zen_garden_full.png" alt="zen garden sample" width="600">
<img src="./lab/assets/zen_garden_mobile.png" alt="zen garden sample" width="200">

- **Three Wisdom Stones**: Interactive ripple effects with nested circular borders
- **Asymmetrical Layout**: Balanced positioning using viewport units
- **Curved Backgrounds**: Layered geometric shapes with z-index
- **Vertical Typography**: Stacked letter elements
- **Responsive Design**: Mobile-first approach with desktop enhancements
- **Color Harmony**: Stone-inspired palette with subtle transparency

## 🚀 Getting Started

1. **Navigate to `/lab/`** directory
2. **Read the implementation guide** in `/lab/README.md`
3. **Open `lab/index.html`** in your browser
4. **Edit `lab/index.html`** to implement the design
5. **Use the design images** in `/lab/assets/` as reference
6. **Check `lab/content.md`** for the text content
7. **Run tests** regularly to check your progress (see Testing section below)
8. **View `lab/solution.html`** only as a last resort

## 🧪 Testing & Submission

This project includes **107 comprehensive tests** covering:
- ✅ **Structure**: HTML semantic elements and layout
- ✅ **Responsive Design**: Mobile-first and desktop breakpoints  
- ✅ **Content**: All stone titles and descriptions
- ✅ **Styling**: Colors, positioning, and visual effects
- ✅ **Accessibility**: ARIA labels and semantic markup

### Running Tests

```bash
# Install dependencies (run once)
npm install

# Run all tests
npm test

# Run tests in watch mode (auto-rerun on changes)
npm run test:watch

# Generate test coverage report
npm run test:coverage
```

### Final Submission

When you're ready to submit your completed project:

```bash
npm run submit <your-github-username>
```

This will:
1. Install dependencies and run all tests
2. Generate a comprehensive test report
3. Create a temporary branch with your results
4. Commit and push your work with test metrics
5. Return you to the main branch

**📸 Important**: After completing the project, open `tests/test-results.html` in your browser and **take a screenshot** of the test results interface to add to your README as proof of completion!

## ⏰ Time Allocation
- **Total time**: 3.5 hours
- **Mobile-first**: Start with mobile layout
- **Desktop enhancement**: Add `md:` prefixes for larger screens
- **Testing**: Frequently check responsive behavior

## 📚 Resources

- **[Tailwind CSS Documentation](https://tailwindcss.com/docs/)** - Essential reference
- **Design Images**: Check `/lab/assets/` folder for visual guides
- **Content Reference**: See `lab/content.md` for all text content
- **Implementation Guide**: Detailed instructions in `/lab/README.md`

## 🏆 Success Criteria

- ✅ Responsive design works on mobile and desktop
- ✅ Three stones with 8-layer ripple effects
- ✅ Curved background elements properly layered
- ✅ Vertical text positioned correctly
- ✅ Matches the visual harmony of the reference design
- ✅ **All 107 tests passing** (run `npm test` to verify)
- ✅ **Test results screenshot** added to README upon completion

---

*Ready to find peace in pixels and tranquility in Tailwind? Navigate to the `/lab/` folder and let's begin the meditation.* 🧘

## 🧘 Project Philosophy

Remember: In meditation, the journey is more important than the destination. Take breaks, breathe deeply, and may your CSS be ever cascading.

Happy coding! 🪨✨
