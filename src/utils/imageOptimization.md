# Image Optimization Guidelines for Kondapalli Sheshagiri Rao Gallery

## Current Implementation

### CSS Classes for Image Quality
- `.high-quality-image`: Applies optimized rendering settings
- `.artwork-image`: Standard gallery image styling with hover effects
- `.hero-image`: Specialized styling for hero slider images
- `.image-container`: Responsive container with subtle design elements

### Responsive Breakpoints
- **Mobile (≤640px)**: Image height 250px
- **Tablet (641px-1024px)**: Image height 320px  
- **Desktop (≥1025px)**: Image height 350px

### Object-fit Strategy
- **Gallery**: `object-fit: contain` to show complete artworks
- **Hero**: `object-fit: contain` with background gradients for context
- **Background**: Subtle gradients prevent empty space from looking jarring

## Best Practices for New Images

### 1. Image Quality
- Minimum resolution: 1200px on longest side
- Preferred format: JPG for photographs, PNG for graphics with transparency
- Compression: 80-85% quality to balance file size and clarity

### 2. Aspect Ratios
- Portrait paintings: 3:4 aspect ratio preferred
- Landscape paintings: 4:3 aspect ratio preferred  
- Square compositions: 1:1 aspect ratio

### 3. Color Enhancement
```css
filter: contrast(1.05) saturate(1.1) brightness(1.02);
```
- Applied automatically via CSS classes
- Hover state: Enhanced contrast and saturation
- Hero images: Additional brightness adjustment for overlay compatibility

### 4. Loading Optimization
- Hero images: `loading="eager"`
- Gallery images: `loading="lazy"`
- Responsive sizes attribute for proper bandwidth usage

## Component Usage

### OptimizedImage Component
```tsx
<OptimizedImage
  src={artwork.image}
  alt={`${artwork.title} - ${artwork.description}`}
  className="artwork-image"
  aspectRatio="auto"
  objectFit="contain"
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
/>
```

### Featured Artwork Selection
Current featured pieces for hero slider:
1. Divine Lotus Maiden - Clear composition, excellent contrast
2. Goddess Durga - Powerful central figure, vibrant colors
3. Shakuntala - Emotional depth, complete figure visible
4. Telugu Thalli - Cultural significance, clear details

## Future Enhancements

### Automatic Quality Detection
- Implement image analysis to detect blurry or low-quality uploads
- Suggest optimal cropping for incomplete figures
- Auto-enhance contrast and saturation within acceptable ranges

### Progressive Loading
- Implement blur-to-sharp loading for better perceived performance
- Use placeholder images that match the artwork's color palette

### Art-Specific Optimizations
- Mythology category: Ensure divine figures are completely visible
- Folk life category: Preserve contextual background elements
- Nature category: Maintain natural color vibrancy
- Cultural category: Emphasize traditional costume and architectural details

## Error Handling
- Graceful fallbacks for failed image loads
- Maintain aspect ratios even when images fail
- Descriptive error messages respecting the cultural context

## Performance Metrics
- Target LCP (Largest Contentful Paint): <2.5s
- Hero image should load within first 1s
- Gallery images should load progressively as user scrolls