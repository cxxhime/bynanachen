# 🌸 ByNanaChen Portfolio

> A modern, elegant portfolio website showcasing data science and web development projects with a distinctive pink aesthetic.

<img width="1470" height="878" alt="n1" src="https://github.com/user-attachments/assets/a66d19b1-736a-4f6b-adf2-d3100798ee8e" />
<img width="1470" height="879" alt="n2" src="https://github.com/user-attachments/assets/da596ab5-03d9-4573-9294-bf72fd0ca368" />
<img width="1470" height="878" alt="n3" src="https://github.com/user-attachments/assets/fadeabf7-36ab-48f8-ab1c-f50117dda60f" />
<img width="1470" height="879" alt="n4" src="https://github.com/user-attachments/assets/e87d5394-7479-4d20-b9e8-3012a8a222ec" />
<img width="1470" height="879" alt="n5" src="https://github.com/user-attachments/assets/e56baefc-9652-4891-8c83-e8c558c7c476" />
<img width="1470" height="879" alt="n6" src="https://github.com/user-attachments/assets/77c77aad-ac89-432b-8efe-8eabb4f1f9cf" />





## Features

-  **Unique Pink Aesthetic** - Distinctive branding with custom rose gradient theme
-  **Fully Responsive** - Mobile-first design that works on all devices  
-  **Custom Animations** - Smooth transitions and interactive hover effects
-  **Custom Cursor** - Glowing pink cursor with trailing effects
-  **Image Gallery** - Custom lightbox and carousel components
-  **Contact Form** - Integrated with Formspree for direct messaging
-  **Performance Optimized** - Pure HTML/CSS/JS for fast loading
-  **Accessible** - Semantic markup and keyboard navigation

## Tech Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

### Key Technologies:
- **Frontend**: Pure HTML5, CSS3, Vanilla JavaScript
- **Styling**: Custom CSS with modern features (Grid, Flexbox, CSS Variables)
- **Effects**: CSS Animations, Glassmorphism, Custom Cursor
- **Forms**: Formspree integration for contact functionality
- **Fonts**: Laviossa (headings) + Lora (body text)

## 🏗️ Project Structure

```
📁 portfolio/
├── 📄 index.html              # Landing page
├── 🎨 index.css               # Main styles
├── ⚡ script.js               # Interactive features
├── 🖱️ cursor.css             # Custom cursor styles
├── 📁 bio/                    # About me section
│   ├── bio.html
│   └── bio.css
├── 📁 contact/                # Contact page
│   ├── contact.html
│   └── contact.css
├── 📁 projet/                 # Projects section
│   ├── projets.html           # Projects overview
│   ├── projets.css
│   ├── p1.html                # Individual project pages
│   ├── p2.html
│   └── ...
├── 📁 css/                    # Reusable components
│   ├── carousel.css
│   └── lightbox.css
├── 📁 js/                     # JavaScript modules
│   ├── carousel.js
│   └── lightbox.js
└── 📁 font/                   # Custom fonts
    ├── Laviossa-Medium.otf
    └── Lora-VariableFont_wght.ttf
```

## Design Highlights

### Color Palette
- **Primary**: `#FFCDE0` (Signature Pink)
- **Background**: `#131212` (Deep Charcoal)  
- **Text**: `#fae0ea` (Soft Pink)
- **Accents**: Various pink gradients and transparencies

### Typography
- **Headings**: Laviossa (Custom, impactful)
- **Body**: Lora (Readable, elegant)
- **Responsive scaling**: Using `clamp()` for fluid typography

### Visual Effects
- Glassmorphism containers with backdrop blur
- Animated SVG background patterns
- Custom hover states with image reveals
- Smooth scrolling and transitions
- Status indicators for projects (orange/green dots)

## Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/cxxhime/portfolio.git
   cd portfolio
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in your browser
   open index.html
   # Or use a local server
   python -m http.server 8000
   ```

3. **Customize**
   - Update personal information in HTML files
   - Modify colors in CSS variables
   - Add your own projects and images
   - Configure Formspree for contact form

## 📱 Responsive Breakpoints

- **Desktop**: `1920px+` - Full experience with animations
- **Large**: `1280px-1919px` - Standard layout
- **Tablet**: `768px-1279px` - Adapted cards and navigation  
- **Mobile**: `<768px` - Simplified single-column layout

## 🔧 Customization

### Colors
Update the main color scheme by modifying CSS variables:
```css
:root {
  --primary-pink: #FFCDE0;
  --background: #131212;
  --text-light: #fae0ea;
}
```

### Projects
Add new projects by:
1. Creating a new `pX.html` file in `/projet/`
2. Adding the project card to `projets.html`
3. Including project preview on `index.html`

### Contact Form
Replace the Formspree action URL in `contact.html`:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

## Key Features Showcase

### Interactive Project Cards
- Hover effects reveal project images
- Status indicators (in progress vs completed)
- Smooth scaling animations
- Clickable navigation to detailed pages

### Custom Components
- **Lightbox**: Click any image for full-screen view
- **Carousel**: Navigate through project screenshots
- **Cursor**: Custom glowing cursor with trail effects
- **Animations**: Fade-in effects and smooth transitions

### Performance
- **No frameworks** - Pure vanilla code for optimal loading
- **Optimized images** - Proper sizing and lazy loading
- **Minimal dependencies** - Self-contained components
- **Progressive enhancement** - Works without JavaScript

## License

This project is open source and available under the [MIT License](LICENSE).

## Connect

- **LinkedIn**: [@cxxhime](https://linkedin.com/in/cxxhime)  
- **GitHub**: [@cxxhime](https://github.com/cxxhime)
- **Email**: bynanachen@outlook.com

---

<div align="center">

**Made with 💖 and lots of pink by Nana Chen**

*Passionate about turning data into stories that matter ✨*

</div>