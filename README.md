# EnglishTech - Modern İngilizce Kursu Landing Page

Modern ve profesyonel İngilizce kursu için özel olarak tasarlanmış landing page uygulaması.

## 🚀 Özellikler

### 🎨 Modern Tasarım
- Responsive design (mobil, tablet, desktop uyumlu)
- Gradient renkler ve animasyonlar
- Hover efektleri ve mikrointeraksiyonlar
- Temiz ve profesyonel görünüm

### 🛠️ Teknoloji Stack'i
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

### 📱 Bileşenler
- **Header**: Sticky navigation ve mobil menü
- **Hero**: Etkileyici giriş bölümü ve istatistikler
- **Features**: 8 ana özellik sunumu
- **Courses**: 6 popüler kurs prezentasyonu
- **Testimonials**: Öğrenci başarı hikayeleri
- **Pricing**: 3 fiyatlandırma planı
- **Contact**: İletişim formu ve bilgileri
- **Footer**: Şirket bilgileri ve linkler

## 🏁 Hızlı Başlangıç

### Gereksinimler
- Node.js 18.0 veya üzeri
- npm veya yarn

### Kurulum

1. Projeyi klonlayın:
```bash
git clone [repository-url]
cd EnglishTech
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

4. Tarayıcınızda `http://localhost:3000` adresini açın

### Mevcut Komutlar

```bash
# Geliştirme sunucusunu başlat
npm run dev

# Production build oluştur
npm run build

# Production sunucusunu başlat
npm run start

# Linting kontrolü
npm run lint
```

## 📁 Proje Yapısı

```
EnglishTech/
├── src/
│   ├── app/
│   │   ├── globals.css      # Global stiller
│   │   ├── layout.tsx       # Ana layout
│   │   └── page.tsx         # Ana sayfa
│   └── components/
│       ├── Header.tsx       # Navigation
│       ├── Hero.tsx         # Hero bölümü
│       ├── Features.tsx     # Özellikler
│       ├── Courses.tsx      # Kurslar
│       ├── Testimonials.tsx # Yorumlar
│       ├── Pricing.tsx      # Fiyatlandırma
│       ├── Contact.tsx      # İletişim
│       └── Footer.tsx       # Footer
├── public/                  # Statik dosyalar
├── .github/
│   └── copilot-instructions.md
└── README.md
```

## 🎨 Tasarım Sistemi

### Renk Paleti
- **Primary**: Blue (#3b82f6)
- **Secondary**: Cyan (#0ea5e9)
- **Gradients**: Primary to Secondary
- **Neutral**: Gray scale

### Tipografi
- **Font**: Inter (Google Fonts)
- **Boyutlar**: text-sm, text-base, text-lg, text-xl, text-2xl, text-3xl, text-4xl

### Spacing
- **Padding**: p-4, p-6, p-8
- **Margin**: m-4, m-6, m-8
- **Gap**: gap-4, gap-6, gap-8

## 🔧 Özelleştirme

### Renk Değişikliği
`tailwind.config.js` dosyasında renk paletini özelleştirin:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Yeni primary renkler
      },
      secondary: {
        // Yeni secondary renkler
      }
    }
  }
}
```

### İçerik Değişikliği
Component dosyalarında ilgili verileri güncelleyin:

```typescript
// Örnek: Hero.tsx
const stats = [
  { icon: Users, value: '50K+', label: 'Aktif Öğrenci' },
  // ...
]
```

### Stil Değişikliği
`src/app/globals.css` dosyasında custom CSS sınıflarını düzenleyin:

```css
@layer components {
  .btn-primary {
    @apply bg-gradient-to-r from-primary-600 to-primary-700 ...;
  }
}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Önerilen)
1. Projeyi GitHub'a push edin
2. [Vercel](https://vercel.com) hesabı oluşturun
3. GitHub repository'nizi import edin
4. Otomatik deployment başlayacak

### Netlify
1. `npm run build` komutunu çalıştırın
2. `out` klasörünü Netlify'a yükleyin

### Diğer Platformlar
Next.js'in static export özelliği ile herhangi bir hosting platformunda çalışabilir.

## 📝 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit edin (`git commit -m 'Add amazing feature'`)
4. Push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📞 İletişim

- **E-posta**: info@englishtech.com
- **Telefon**: +90 (212) 555-0123
- **Adres**: Levent Mah. Büyükdere Cad. No:123, Şişli, İstanbul

## 🔮 Gelecek Özellikler

- [ ] Çoklu dil desteği
- [ ] Dark mode
- [ ] Blog sistemi
- [ ] Öğrenci paneli
- [ ] Ödeme entegrasyonu
- [ ] Canlı chat desteği
- [ ] Video galeri
- [ ] Sertifika doğrulama sistemi
# EnglishTech
