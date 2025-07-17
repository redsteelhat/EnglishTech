<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# EnglishTech Landing Page

Bu proje, modern İngilizce kursu için profesyonel bir landing page uygulamasıdır.

## Teknoloji Stack'i

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## Proje Yapısı

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── Header.tsx
    ├── Hero.tsx
    ├── Features.tsx
    ├── Courses.tsx
    ├── Testimonials.tsx
    ├── Pricing.tsx
    ├── Contact.tsx
    └── Footer.tsx
```

## Özellikler

- **Responsive Design**: Mobil, tablet ve desktop uyumlu
- **Modern UI**: Gradient renkler, animasyonlar, hover efektleri
- **SEO Optimized**: Meta tags, semantic HTML
- **Performance**: Next.js optimizasyonları
- **Accessibility**: ARIA labels, keyboard navigation

## Tasarım Renk Paleti

- **Primary**: Blue (#3b82f6)
- **Secondary**: Cyan (#0ea5e9)
- **Gradients**: Primary to Secondary
- **Neutral**: Gray scale

## Component Özellikleri

### Header
- Sticky navigation
- Mobile hamburger menu
- Smooth scroll navigation
- CTA button

### Hero
- Impressive hero section
- Statistics display
- Call-to-action buttons
- Interactive dashboard mockup

### Features
- 8 key features
- Icon-based presentation
- Hover animations
- Grid layout

### Courses
- 6 popular courses
- Course levels (Beginner, Intermediate, Advanced)
- Student count and ratings
- Course features

### Testimonials
- Student success stories
- 5-star ratings
- Professional roles
- Quote-based design

### Pricing
- 3 pricing tiers
- Feature comparison
- Popular plan highlighting
- Corporate solutions

### Contact
- Contact form
- Contact information
- FAQ section
- Form validation

### Footer
- Company information
- Quick links
- Social media links
- Contact details

## Geliştirme Notları

- Tüm componentler TypeScript ile yazılmıştır
- Client-side interactivity için 'use client' direktifi kullanılmıştır
- Tailwind CSS custom sınıfları globals.css içinde tanımlanmıştır
- Responsive design breakpoints: sm, md, lg, xl
- Performance için Next.js Image component kullanılabilir

## Deployment

Proje Next.js ile yapılandırılmıştır ve Vercel, Netlify veya herhangi bir hosting platformunda deploy edilebilir.

## Customization

- Renk paleti tailwind.config.js dosyasından değiştirilebilir
- Custom CSS sınıfları globals.css dosyasında tanımlıdır
- Component içeriği kolayca değiştirilebilir
- Form handling backend entegrasyonu eklenebilir
