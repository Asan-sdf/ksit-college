"use client";

import { useState } from "react";

type Language = "kz" | "ru";

export default function ProgramsPage() {
  const [language, setLanguage] = useState<Language>("kz");

  const content = {
    kz: {
      logo: "Сервис және туризм колледжі",
      title: "2026 жылғы мамандықтар",
      back: "← Басты бетке оралу",
      programs: [
        {
          icon: "🏨",
          name: "Қонақүй ісі",
          details: "Қонақүй сервисі, орналастыруды басқару және клиентпен кәсіби коммуникация.",
        },
        {
          icon: "✈️",
          name: "Туризм",
          details: "Турөнім құрастыру, маршрут жоспарлау және туристік индустрия процестері.",
        },
        {
          icon: "🍽️",
          name: "Мейрамхана сервисі",
          details: "Қоғамдық тамақтану саласында қызмет көрсету стандарттары мен ұйымдастыру.",
        },
        {
          icon: "💼",
          name: "Сервис менеджменті",
          details: "Сервистік ұйымдарды басқару, командамен жұмыс және операциялық бақылау.",
        },
        {
          icon: "🧾",
          name: "Кәсіпкерлік негіздері",
          details: "Жеке бизнес ашу, қаржылық жоспарлау және нарықтық талдау негіздері.",
        },
        {
          icon: "🌍",
          name: "Гид және экскурсия",
          details: "Экскурсия өткізу, мәдени бағыттармен жұмыс және көпшілік алдында сөйлеу.",
        },
      ],
    },
    ru: {
      logo: "Колледж сервиса и туризма",
      title: "Специальности на 2026 год",
      back: "← Вернуться на главную",
      programs: [
        {
          icon: "🏨",
          name: "Гостиничное дело",
          details: "Отельный сервис, управление размещением и профессиональная коммуникация с гостями.",
        },
        {
          icon: "✈️",
          name: "Туризм",
          details: "Разработка турпродукта, планирование маршрутов и процессы туристической отрасли.",
        },
        {
          icon: "🍽️",
          name: "Ресторанный сервис",
          details: "Стандарты обслуживания в общественном питании и организация сервисных процессов.",
        },
        {
          icon: "💼",
          name: "Менеджмент сервиса",
          details: "Управление сервисными организациями, работа с командой и контроль операций.",
        },
        {
          icon: "🧾",
          name: "Основы предпринимательства",
          details: "Запуск собственного дела, финансовое планирование и базовая аналитика рынка.",
        },
        {
          icon: "🌍",
          name: "Гид и экскурсовод",
          details: "Проведение экскурсий, работа с культурными маршрутами и публичные выступления.",
        },
      ],
    },
  } as const;

  const t = content[language];

  return (
    <div
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        backgroundColor: "#f8fafc",
        color: "#0f172a",
        minHeight: "100vh",
      }}
    >
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <div style={{ animation: "fadeIn 0.6s ease-out" }}>
      <nav
        style={{
          backgroundColor: "#ffffff",
          color: "#000000",
          padding: "18px 0",
          boxShadow: "0 4px 16px rgba(15, 42, 102, 0.25)",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1150px",
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              fontSize: "24px",
              fontWeight: 700,
              letterSpacing: "0.2px",
            }}
          >
            <img src="/logo_college_1png.png" alt="College logo" style={{ height: "50px", width: "auto" }} />
            <span>{t.logo}</span>
          </div>
          <button
            onClick={() => setLanguage(language === "kz" ? "ru" : "kz")}
            style={{
              border: "1px solid #1f2937",
              borderRadius: "9999px",
              padding: "8px 14px",
              fontSize: "13px",
              fontWeight: 700,
              color: "#000000",
              backgroundColor: "transparent",
              cursor: "pointer",
            }}
          >
            {language === "kz" ? "KZ / RU" : "RU / KZ"}
          </button>
        </div>
      </nav>

      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 24px 64px 24px" }}>
        <h1 style={{ margin: "0 0 28px 0", fontSize: "clamp(30px, 5vw, 44px)", fontWeight: 800 }}>{t.title}</h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "18px",
            marginBottom: "30px",
          }}
        >
          {t.programs.map((program) => (
            <article
              key={program.name}
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #dbeafe",
                borderRadius: "16px",
                padding: "20px",
                boxShadow: "0 10px 24px rgba(30, 58, 138, 0.08)",
              }}
            >
              <div style={{ fontSize: "32px", marginBottom: "10px" }}>{program.icon}</div>
              <h2 style={{ margin: "0 0 10px 0", fontSize: "21px", color: "#1e3a8a" }}>{program.name}</h2>
              <p style={{ margin: 0, fontSize: "15px", lineHeight: 1.7, color: "#475569" }}>{program.details}</p>
            </article>
          ))}
        </div>

        <a
          href="/"
          style={{
            display: "inline-block",
            textDecoration: "none",
            border: "1px solid #1e3a8a",
            color: "#1e3a8a",
            backgroundColor: "#ffffff",
            borderRadius: "9999px",
            padding: "10px 18px",
            fontWeight: 700,
            fontSize: "14px",
          }}
        >
          {t.back}
        </a>
      </main>
      </div>
    </div>
  );
}
