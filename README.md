# 🌿 Surya Herbal - Premium AI-Driven Botanical Catalog

Surya Herbal adalah platform katalog produk herbal modern yang mengintegrasikan desain premium bertema botani dengan kecerdasan buatan (AI) otonom untuk riset pasar dan konsultasi kesehatan.

![Surya Herbal Preview](public/bg-herbal.png)

## ✨ Fitur Utama

- **Premium Botanical UI**: Desain berbasis *Glassmorphism* dengan palet warna alam yang menenangkan, animasi halus menggunakan Framer Motion, dan dukungan penuh Mode Gelap.
- **AI Autonomous Agent**: Agen cerdas yang mampu melakukan riset pasar secara otonom, memberikan saran pengembangan bisnis, dan membantu pemecahan masalah teknis.
- **Human-in-the-Loop Approval**: Sistem persetujuan untuk setiap tindakan otonom AI sebelum dieksekusi ke database.
- **Advanced Data Management**: Manajemen produk relasional (kategori, bahan, variasi harga) menggunakan PostgreSQL.
- **Smart Health Consultant**: Chatbot AI yang berperan sebagai ahli herbal digital untuk merekomendasikan produk berdasarkan keluhan pengguna.
- **Interactive Dashboard**: Visualisasi statistik real-time dan monitor aktivitas AI.

## 🚀 Teknologi

### Frontend
- **React 19** (Vite)
- **Tailwind CSS** (Styling)
- **Framer Motion** (Animations)
- **Zustand** (State Management)
- **React Router 7** (Routing)
- **Lucide React** (Icons)

### Backend
- **Node.js & Express 5**
- **PostgreSQL** (Database)
- **OpenAI GPT-4o-Mini** (AI Engine)
- **RESTful API** dengan transaksi database aman.

## 🛠️ Instalasi

1. **Clone repositori**
   ```bash
   git clone [url-repo]
   cd herbal-katalog
   ```

2. **Instal dependensi**
   ```bash
   npm install
   ```

3. **Konfigurasi Environment**
   Salin `.env.example` ke `.env` dan isi variabel yang diperlukan:
   ```env
   OPENAI_API_KEY=your_api_key_here
   PG_CONNECTION_STRING=your_postgresql_connection_string
   ```

4. **Inisialisasi Database**
   ```bash
   npm run seed
   ```

5. **Jalankan Aplikasi**
   ```bash
   npm run dev
   ```

## 📈 Pengembangan Masa Depan
- Integrasi Payment Gateway untuk pemesanan langsung.
- Dukungan Multi-bahasa (I18n).
- Mobile Application (React Native).
- Sistem Prediksi Stok berbasis Machine Learning.

---
Dibuat dengan ❤️ untuk ekosistem Herbal Indonesia.
