# 🪨 Zen Garden - Implementation Guide

*Welcome to your zen garden meditation. Find peace in pixels and tranquility in Tailwind.*

## 🎨 What You're Building

<img src="../assets/zen_garden_full.png" alt="zen garden sample" width="600">
<img src="../assets/zen_garden_mobile.png" alt="zen garden sample" width="200">

A meditative interface featuring stones with ripple effects, asymmetrical balanced layout, curved backgrounds, and responsive design that transforms gracefully between mobile and desktop.

## 🚀 Quick Start

1. **Open `index.html`** in your browser
2. **Edit `index.html`** to implement the design
3. **Use the design images** above as reference
4. **Check `content.md`** for the text content
5. **View `solution.html`** only as a last resort

## ⏰ Time Allocation
- **Total time**: 3.5 hours
- **Mobile-first**: Start with mobile layout
- **Desktop enhancement**: Add `md:` prefixes for larger screens
- **Testing**: Frequently check responsive behavior

---

## 📖 Implementation Guide

### 🎨 Color Palette

Embrace the calm with these stone-inspired colors:

```
STONE SHADES: stone-100, stone-300, stone-400, stone-700
ACCENT BLUE: blue-700
ACCENT GREEN: green-700
TRANSPARENCY: Use /20 for 20% opacity (e.g., bg-stone-100/20)
```

## 🏗 Required Elements

### 1. Background Architecture
- Curved dark sections using geometric shapes
- Layered elements with z-index
- A large light circle creating visual flow

### 2. Three Wisdom Stones
Each stone needs:
- **Ripple effect**: 8 nested circular borders (yes, 8!)
- **Different sizes**: Small (14rem), Large (24rem), Medium (16rem)
- **Positioned asymmetrically** on desktop
- **Responsive behavior**: Stack vertically on mobile

### 3. Vertical Text Elements
- "zen" in the top-right (blue)
- "garden" in the bottom-left (green)
- Individual letters stacked vertically

### 4. Content
```
Stillness: "In quietude, clarity emerges"
Balance: "Harmony found in asymmetry"
Presence: "This moment, perfectly imperfect"
```
(Hide subtitles on desktop with `md:hidden`)

## 💡 Pro Tips

- **Start with mobile**, then add `md:` prefixes for desktop styles
- **Ripples are just nested divs** with borders and padding
- **Use `rounded-full`** to make perfect circles
- **Position with `md:absolute`** and viewport units (like `top-[20vh]`)
- **Layer with z-index**: content (z-10), backgrounds (-z-10, -z-20)
- **Test responsiveness** frequently - this design transforms significantly

## 🚀 Helpful Tailwind Classes

```css
/* Positioning */
relative, absolute, top-[20vh], right-[25vw], bottom-[5vh], left-[20vw]

/* Sizing */
w-[14rem], h-[14rem], w-[50vw], h-[50vh]

/* Spacing */
p-1, p-3, m-4, gap-2

/* Flexbox/Grid */
flex, flex-col, items-center, grid, place-items-center

/* Visual */
rounded-full, border-2, bg-stone-700, text-stone-100
bg-stone-100/20 (transparency!)

/* Responsive */
md: prefix for desktop styles
```

## 🧘 Stretch Goals (Optional)

Finished early? Try building a pond section underneath the stones. Use your imagination -- maybe some floating leaves or a subtle water ripple effect.

---

Remember: In meditation, the journey is more important than the destination. Take breaks, breathe deeply, and may your CSS be ever cascading.

Happy coding! 🪨✨
