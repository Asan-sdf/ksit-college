"use client";

import Link from "next/link";
import { useState } from "react";

type Language = "kz" | "ru";

type Program = {
  icon: string;
  title: string;
  details: string;
};

export default function ProgramsPage() {
  const [language, setLanguage] = useState<Language>("kz");

  const content = {
    kz: {
      logo: "Сервис және туризм колледжі",
      title: "2026 жылғы мамандықтар",
      back: "Басты бетке оралу",
      switcher: "KZ / RU",
      programs: [
        {
          icon: "🏨",
          title: "Қонақүй ісі",
          details: "Біліктілік: Қонақүй сервисін ұйымдастырушы",
        },
        {
          icon: "✈️",
          title: "Туризм",
          details: "Біліктілік: Туризм менеджері және бағыт үйлестіруші",
        },
        {
          icon: "🍽️",
          title: "Мейрамхана сервисі",
          details: "Біліктілік: Қоғамдық тамақтану сервис маманы",
        },
        {
          icon: "💼",
          title: "Сервис менеджменті",
          details: "Біліктілік: Қызмет көрсету саласының менеджері",
        },
        {
          icon: "🧾",
          title: "Кәсіпкерлік негіздері",
          details: "Біліктілік: Шағын бизнес жобаларын басқарушы",
        },
        {
          icon: "🌍",
          title: "Гид және экскурсия",
          details: "Біліктілік: Гид-экскурсовод",
        },
      ] as Program[],
    },
    ru: {
      logo: "Колледж сервиса и туризма",
      title: "Специальности на 2026 год",
      back: "Назад на главную",
      switcher: "RU / KZ",
      programs: [
        {
          icon: "🏨",
          title: "Гостиничное дело",
          details: "Квалификация: Организатор гостиничного сервиса",
        },
        {
          icon: "✈️",
          title: "Туризм",
          details: "Квалификация: Менеджер туризма и координатор маршрутов",
        },
        {
          icon: "🍽️",
          title: "Ресторанный сервис",
          details: "Квалификация: Специалист по сервису общественного питания",
        },
        {
          icon: "💼",
          title: "Менеджмент сервиса",
          details: "Квалификация: Менеджер сферы услуг",
        },
        {
          icon: "🧾",
          title: "Основы предпринимательства",
          details: "Квалификация: Руководитель проектов малого бизнеса",
        },
        {
          icon: "🌍",
          title: "Гид и экскурсовод",
          details: "Квалификация: Гид-экскурсовод",
        },
      ] as Program[],
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
      <nav
        style={{
          backgroundColor: "#0f2a66",
          color: "#ffffff",
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
          <div style={{ fontSize: "24px", fontWeight: 700, letterSpacing: "0.2px" }}>{t.logo}</div>
          <button
            onClick={() => setLanguage(language === "kz" ? "ru" : "kz")}
            style={{
              border: "1px solid rgba(255, 255, 255, 0.55)",
              borderRadius: "9999px",
              padding: "8px 14px",
              fontSize: "13px",
              fontWeight: 700,
              color: "#ffffff",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              cursor: "pointer",
            }}
          >
            {t.switcher}
          </button>
        </div>
      </nav>

      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "56px 24px 72px 24px" }}>
        <h1
          style={{
            textAlign: "center",
            fontSize: "40px",
            fontWeight: 800,
            margin: "0 0 36px 0",
            color: "#0f172a",
          }}
        >
          {t.title}
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "22px",
            marginBottom: "40px",
          }}
        >
          {t.programs.map((program) => (
            <article
              key={program.title}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                padding: "24px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 10px 24px rgba(15, 23, 42, 0.06)",
              }}
            >
              <div style={{ fontSize: "30px", marginBottom: "12px" }}>{program.icon}</div>
              <h2 style={{ margin: "0 0 10px 0", fontSize: "20px", color: "#0f172a" }}>{program.title}</h2>
              <p style={{ margin: 0, color: "#475569", lineHeight: 1.7 }}>{program.details}</p>
            </article>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link
            href="/"
            style={{
              textDecoration: "none",
              display: "inline-block",
              border: "1px solid #1e3a8a",
              borderRadius: "9999px",
              padding: "12px 26px",
              fontSize: "16px",
              fontWeight: 700,
              color: "#1e3a8a",
              backgroundColor: "#ffffff",
            }}
          >
            {t.back}
          </Link>
        </div>
      </main>
    </div>
  );
}
