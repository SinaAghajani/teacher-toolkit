# 🎓 Teacher Toolkit

### جعبه‌ابزار دیجیتال معلم

**Teacher Toolkit** یک داشبورد مدرن و فارسی برای مدیریت و سازمان‌دهی فعالیت‌های آموزشی معلمان است؛ با تمرکز بر تجربه کاربری ساده، طراحی حرفه‌ای و دسترسی سریع به ابزارهای مورد نیاز کلاس.

این پروژه با **Next.js** و **React** ساخته شده و در حال حاضر به صورت **Frontend-only** و با داده‌های Mock توسعه داده شده است.

---

## ✨ درباره پروژه

مدیریت دانش‌آموزان، کلاس‌ها، آزمون‌ها، طرح درس، کاربرگ‌ها و تحلیل عملکرد می‌تواند بخش زیادی از زمان یک معلم را به خود اختصاص دهد.

Teacher Toolkit با هدف ایجاد یک محیط یکپارچه طراحی شده تا ابزارهای مهم آموزشی را در یک داشبورد ساده و منظم در اختیار معلم قرار دهد.

> 🎯 هدف پروژه: تبدیل ابزارهای پراکنده آموزشی به یک تجربه دیجیتال ساده، سریع و کاربردی.

---

## 🚀 امکانات

### 📊 داشبورد

- نمایش وضعیت کلی کلاس
- آمار دانش‌آموزان
- میانگین عملکرد
- فعالیت‌های اخیر
- خلاصه وضعیت آموزشی

### 👨‍🎓 مدیریت دانش‌آموزان

- فهرست دانش‌آموزان
- مشاهده پروفایل هر دانش‌آموز
- وضعیت تحصیلی
- عملکرد دروس
- میزان حضور و غیاب

### 🏫 مدیریت کلاس‌ها

- مشاهده کلاس‌ها
- اطلاعات پایه و مقطع
- تعداد دانش‌آموزان
- میانگین عملکرد کلاس
- مشاهده جزئیات هر کلاس

### 📝 آزمون‌ها

- فهرست آزمون‌ها
- وضعیت آزمون
- سطح دشواری
- مشاهده جزئیات آزمون
- نمایش نتایج

### 📚 طرح درس

- مدیریت طرح درس‌ها
- اهداف آموزشی
- فعالیت‌های آموزشی
- زمان‌بندی جلسات
- وضعیت اجرای طرح درس

### 📄 برگه تمرین

- مدیریت کاربرگ‌ها
- دسته‌بندی بر اساس درس
- سطح دشواری
- مشاهده جزئیات تمرین

### 📈 تحلیل و آمار

- تحلیل عملکرد دانش‌آموزان
- عملکرد دروس مختلف
- روند پیشرفت ماهانه
- میانگین‌های آموزشی
- نمایش داده‌ها به صورت نموداری

### ⚙️ تنظیمات

- اطلاعات معلم
- تنظیمات حساب
- تنظیمات رابط کاربری
- تنظیمات آموزشی

---

## 🎨 طراحی و تجربه کاربری

Teacher Toolkit با تمرکز ویژه روی تجربه کاربری طراحی شده است.

- 🇮🇷 رابط کاربری کاملاً فارسی
- ↔️ پشتیبانی کامل از RTL
- 🖥️ طراحی Responsive
- 📱 تجربه مناسب موبایل و دسکتاپ
- 🎨 رابط کاربری مدرن و مینیمال
- 🧭 Sidebar قابل باز و بسته شدن
- 📱 Mobile Sidebar
- 🔎 Header با قابلیت جستجو
- 🌓 طراحی آماده توسعه Theme
- ✨ انیمیشن‌های نرم و Micro-interaction
- 📊 نمایش داده‌ها با نمودارهای تعاملی

---

## 🛠️ تکنولوژی‌ها

| Technology    | Usage                 |
| ------------- | --------------------- |
| Next.js       | Application Framework |
| React         | UI Development        |
| TypeScript    | Type Safety           |
| Tailwind CSS  | Styling               |
| Zustand       | State Management      |
| Lucide React  | Icons                 |
| Recharts      | Data Visualization    |
| Framer Motion | Animations            |
| Vazirmatn     | Persian Typography    |

---

## 🏗️ معماری

پروژه با ساختاری ماژولار طراحی شده تا اضافه کردن قابلیت‌های جدید در آینده ساده باشد.

```text
                    Teacher Toolkit
                           │
            ┌──────────────┴──────────────┐
            │                             │
        Landing Page                 Dashboard
                                          │
              ┌───────────┬───────────────┼───────────────┐
              │           │               │               │
          Students     Classes         Quizzes        Lesson Plans
              │           │               │               │
              └───────────┴───────────────┼───────────────┘
                                          │
                              ┌───────────┴───────────┐
                              │                       │
                         Worksheets              Analytics
```

---

## 📦 نصب و اجرا

ابتدا Repository را Clone کنید:

```bash
git clone https://github.com/SinaAghajani/teacher-toolkit.git
```

و وارد پروژه شوید:

```bash
cd teacher-toolkit
```

سپس Dependencies را نصب کنید:

```bash
npm install
```

پروژه را در محیط Development اجرا کنید:

```bash
npm run dev
```

سپس به آدرس زیر بروید:

```text
http://localhost:3000
```

---

## 📌 وضعیت توسعه

این پروژه در حال توسعه است.

### Completed

- [x] Landing Page
- [x] Responsive Layout
- [x] RTL Interface
- [x] Dashboard
- [x] Sidebar
- [x] Collapsible Sidebar
- [x] Mobile Sidebar
- [x] Header
- [x] Students Management
- [x] Classes Management
- [x] Quizzes
- [x] Lesson Plans
- [x] Worksheets
- [x] Analytics
- [x] Settings
- [x] Mock Data Architecture

### Planned

- [ ] Authentication
- [ ] Backend API
- [ ] Database
- [ ] Real Student Management
- [ ] Real Quiz Management
- [ ] Attendance System
- [ ] Teacher Account Management
- [ ] File Upload
- [ ] Export Reports
- [ ] Advanced Analytics
- [ ] Notification System

---

## 🧠 فلسفه طراحی

Teacher Toolkit صرفاً یک داشبورد مدیریتی نیست.

تمرکز اصلی پروژه روی سه اصل است:

### 01 — Simplicity

ابزارهای آموزشی باید ساده و قابل فهم باشند.

### 02 — Productivity

معلم باید بتواند با کمترین تعداد کلیک به اطلاعات مورد نیاز خود دسترسی پیدا کند.

### 03 — Education First

رابط کاربری باید در خدمت فرآیند آموزش باشد، نه اینکه خودش تبدیل به یک مانع شود.

---

## 🔮 آینده پروژه

نسخه فعلی با داده‌های Mock پیاده‌سازی شده تا ابتدا تجربه کاربری، معماری Frontend و ساختار محصول شکل بگیرد.

در مراحل بعدی می‌توان پروژه را به یک سیستم کامل آموزشی با Backend، احراز هویت، دیتابیس و API تبدیل کرد.

معماری فعلی به گونه‌ای طراحی شده که این انتقال بدون بازنویسی کامل Frontend امکان‌پذیر باشد.

---

## 👨‍💻 Developer

**Sina Aghajani**

Frontend Developer & Educational Technology Enthusiast

- GitHub: [SinaAghajani](https://github.com/SinaAghajani)
- LinkedIn: [Sina Aghajani](https://www.linkedin.com/in/sina-aghajani1/)

---

## 📄 License

This project is currently developed for educational and portfolio purposes.

---

<p align="center">
  Built with ❤️ for teachers
</p>
