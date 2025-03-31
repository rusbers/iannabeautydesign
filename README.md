## Typography

- HEADINGS: Playfair Display Regular
- BODY: Montserrat / Roboto (light, medium, bold, semibold, regular, thin, extra light, light italic)
- ??? Open Sans (light, italic, light italic, bold)

## Colors

### Background

- Primary: #111 (deep black/charcoal)
- 'gold-gradient': 'linear-gradient(90deg, #F5E7C1 0%, #D4AF37 100%)'

### Accent colors:

black: "#111111",
gold: "#D4AF37",
brown: "#8B7355",
white: "#FFFFFF",
"gold-light": "#F5E7C1",
"dark-gray": "#222222",

## Animations

Subtle fade-ins, elegant text reveals, and a delicate gold particle effect

## ???

### Preheading

```tsx
<p className="text-ianna-gold/90 font-montserrat uppercase tracking-widest text-sm"></p>
```

### Hero Heading

```tsx
<h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
  <span className="block">Machiaj</span>
  <span className="bg-gold-gradient bg-clip-text text-transparent">Permanent</span>
</h1>
```

### Body text ???

```tsx
// This was used as a hero section text
<p className="text-ianna-white/80 text-lg"></p>
```

### Button

```tsx
<Button className="bg-ianna-gold hover:bg-ianna-gold/90 text-ianna-black font-medium rounded-full px-8 py-6 text-lg font-montserrat">
  Programează-te <ArrowRight className="ml-2 h-5 w-5" />
</Button>
```

## WTF

```html
<noscript></noscript>
```
