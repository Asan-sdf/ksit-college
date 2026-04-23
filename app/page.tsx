"use client";

import { useState } from "react";

type Language = "kz" | "ru";

export default function Home() {
  const [language, setLanguage] = useState<Language>("kz");

  const content = {
    kz: {
      logo: "Сервис және туризм колледжі",
      nav: ["Басты бет", "Мамандықтар", "Қабылдау", "Студенттік өмір", "Байланыс"],
      heroTitle: "Болашағыңызды бізбен бірге құр",
      heroSubtitle: "Заманауи білім, практикалық дағдылар және табысты мансап",
      heroPrimaryButton: "Құжат тапсыру",
      heroSecondaryButton: "Мамандықтарды көру",
      stats: [
        { value: "20+", label: "жыл тәжірибе" },
        { value: "15", label: "мамандық" },
        { value: "2000+", label: "студент" },
        { value: "96%", label: "жұмысқа орналасу" },
      ],
      programsTitle: "Біздің мамандықтар",
      programs: [
        {
          icon: "🏨",
          title: "Қонақүй ісі",
          description: "Қонақүй сервисі, басқару және клиентпен жұмыс дағдыларын меңгеру.",
        },
        {
          icon: "✈️",
          title: "Туризм",
          description: "Турөнім әзірлеу, бағыт құрастыру және туристік индустрия негіздері.",
        },
        {
          icon: "🍽️",
          title: "Мейрамхана сервисі",
          description: "Қоғамдық тамақтану саласында сапалы қызмет көрсету стандарттары.",
        },
        {
          icon: "💼",
          title: "Сервис менеджменті",
          description: "Қызмет көрсету ұйымдарын тиімді басқару және процестерді жоспарлау.",
        },
        {
          icon: "🧾",
          title: "Кәсіпкерлік негіздері",
          description: "Өз бизнесіңді бастауға арналған заманауи қаржылық және нарықтық білім.",
        },
        {
          icon: "🌍",
          title: "Гид және экскурсия",
          description: "Тарихи-мәдени бағыттармен жұмыс және кәсіби экскурсия жүргізу.",
        },
      ],
      newsTitle: "Жаңалықтар",
      news: [
        {
          title: "Ашық есік күні өтеді",
          description: "Болашақ талапкерлерге арналған арнайы бағдарлама және кампус туры.",
        },
        {
          title: "Өндірістік тәжірибе басталды",
          description: "Студенттер серіктес компанияларда нақты жобалармен жұмыс істеуде.",
        },
        {
          title: "Халықаралық серіктестік кеңейді",
          description: "Туризм және сервис саласындағы жаңа білім беру жобалары іске қосылды.",
        },
      ],
      ctaTitle: "Мансапқа сенімді қадам жасаңыз",
      ctaSubtitle: "Қабылдау ашық. Бүгіннен бастап болашағыңызды бірге жоспарлайық.",
      ctaButton: "Өтінім беру",
      footer: "© 2026 Сервис және туризм колледжі. Барлық құқықтар қорғалған.",
    },
    ru: {
      logo: "Колледж сервиса и туризма",
      nav: ["Главная", "Специальности", "Поступление", "Студенческая жизнь", "Контакты"],
      heroTitle: "Создай своё будущее вместе с нами",
      heroSubtitle: "Современное образование, практические навыки и успешная карьера",
      heroPrimaryButton: "Подать документы",
      heroSecondaryButton: "Смотреть специальности",
      stats: [
        { value: "20+", label: "лет опыта" },
        { value: "15", label: "специальностей" },
        { value: "2000+", label: "студентов" },
        { value: "96%", label: "трудоустройство" },
      ],
      programsTitle: "Наши специальности",
      programs: [
        {
          icon: "🏨",
          title: "Гостиничное дело",
          description: "Подготовка в сфере отельного сервиса, управления и клиентского опыта.",
        },
        {
          icon: "✈️",
          title: "Туризм",
          description: "Разработка маршрутов, турпродуктов и практические навыки отрасли.",
        },
        {
          icon: "🍽️",
          title: "Ресторанный сервис",
          description: "Стандарты качественного обслуживания и организация сервиса питания.",
        },
        {
          icon: "💼",
          title: "Менеджмент сервиса",
          description: "Эффективное управление сервисными процессами и командами.",
        },
        {
          icon: "🧾",
          title: "Основы предпринимательства",
          description: "Финансовая грамотность и запуск собственных проектов в сфере услуг.",
        },
        {
          icon: "🌍",
          title: "Гид и экскурсовод",
          description: "Проведение экскурсий и работа с культурно-историческими маршрутами.",
        },
      ],
      newsTitle: "Новости",
      news: [
        {
          title: "День открытых дверей",
          description:
            "Для абитуриентов подготовлена насыщенная программа и экскурсия по кампусу.",
        },
        {
          title: "Старт производственной практики",
          description: "Студенты проходят практику у партнеров и работают над реальными задачами.",
        },
        {
          title: "Новые международные проекты",
          description:
            "Расширено сотрудничество с образовательными организациями в сфере туризма.",
        },
      ],
      ctaTitle: "Сделайте уверенный шаг к карьере",
      ctaSubtitle: "Прием открыт. Начните путь к успешному будущему уже сегодня.",
      ctaButton: "Подать заявку",
      footer: "© 2026 Колледж сервиса и туризма. Все права защищены.",
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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: "20px",
              flexWrap: "wrap",
              flex: "1 1 560px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "16px",
                fontSize: "15px",
                fontWeight: 500,
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {t.nav.map((link) => (
                <a key={link} href="#" style={{ color: "#ffffff", textDecoration: "none" }}>
                  {link}
                </a>
              ))}
            </div>
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
              {language === "kz" ? "KZ / RU" : "RU / KZ"}
            </button>
          </div>
        </div>
      </nav>

      <section
        style={{
          width: "100%",
          background: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)",
          color: "#ffffff",
          padding: "96px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "clamp(34px, 6vw, 52px)",
              fontWeight: 800,
              lineHeight: 1.1,
              margin: "0 0 20px 0",
            }}
          >
            {t.heroTitle}
          </h1>
          <p
            style={{
              fontSize: "clamp(16px, 2.4vw, 19px)",
              lineHeight: 1.7,
              maxWidth: "760px",
              margin: "0 auto 34px auto",
              opacity: 0.95,
            }}
          >
            {t.heroSubtitle}
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "14px", flexWrap: "wrap" }}>
            <button
              style={{
                border: "none",
                borderRadius: "9999px",
                padding: "13px 28px",
                fontSize: "16px",
                fontWeight: 700,
                backgroundColor: "#ffffff",
                color: "#1e3a8a",
                cursor: "pointer",
                boxShadow: "0 10px 20px rgba(15, 23, 42, 0.2)",
              }}
            >
              {t.heroPrimaryButton}
            </button>
            <button
              style={{
                border: "1px solid rgba(255, 255, 255, 0.65)",
                borderRadius: "9999px",
                padding: "13px 28px",
                fontSize: "16px",
                fontWeight: 700,
                backgroundColor: "rgba(255, 255, 255, 0.12)",
                color: "#ffffff",
                cursor: "pointer",
              }}
            >
              {t.heroSecondaryButton}
            </button>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#ffffff", padding: "58px 24px" }}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
            gap: "18px",
          }}
        >
          {t.stats.map((item) => (
            <div
              key={item.label}
              style={{
                textAlign: "center",
                border: "1px solid #e2e8f0",
                borderRadius: "16px",
                padding: "24px 16px",
                boxShadow: "0 12px 28px rgba(15, 23, 42, 0.06)",
                backgroundColor: "#ffffff",
              }}
            >
              <div style={{ fontSize: "34px", fontWeight: 800, color: "#1e3a8a", marginBottom: "8px" }}>
                {item.value}
              </div>
              <div style={{ fontSize: "16px", color: "#475569", fontWeight: 500 }}>{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: "#f1f5f9", padding: "74px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "34px", margin: "0 0 40px 0", color: "#0f172a" }}>
            {t.programsTitle}
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "22px",
            }}
          >
            {t.programs.map((program) => (
              <div
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
                <h3 style={{ margin: "0 0 10px 0", fontSize: "20px", color: "#0f172a" }}>{program.title}</h3>
                <p style={{ margin: 0, color: "#475569", lineHeight: 1.7 }}>{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#ffffff", padding: "72px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "34px", margin: "0 0 36px 0", color: "#0f172a" }}>
            {t.newsTitle}
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "22px",
            }}
          >
            {t.news.map((item) => (
              <article
                key={item.title}
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "16px",
                  padding: "24px",
                  boxShadow: "0 10px 24px rgba(15, 23, 42, 0.05)",
                }}
              >
                <h3 style={{ margin: "0 0 12px 0", fontSize: "20px", color: "#0f172a" }}>{item.title}</h3>
                <p style={{ margin: 0, color: "#475569", lineHeight: 1.7 }}>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#1d4ed8", padding: "54px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", color: "#ffffff", textAlign: "center" }}>
          <h2 style={{ margin: "0 0 12px 0", fontSize: "34px", fontWeight: 700 }}>{t.ctaTitle}</h2>
          <p style={{ margin: "0 0 24px 0", fontSize: "18px", opacity: 0.95 }}>{t.ctaSubtitle}</p>
          <button
            style={{
              border: "none",
              borderRadius: "9999px",
              backgroundColor: "#ffffff",
              color: "#1d4ed8",
              padding: "12px 28px",
              fontSize: "16px",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            {t.ctaButton}
          </button>
        </div>
      </section>

      <footer style={{ backgroundColor: "#0f172a", color: "#cbd5e1", padding: "30px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center", fontSize: "15px" }}>
          {t.footer}
        </div>
      </footer>
    </div>
  );
}
