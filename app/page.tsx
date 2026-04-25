"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Language = "kz" | "ru";

export default function Home() {
  const [language, setLanguage] = useState<Language>("kz");

  useEffect(() => {
    const revealSections = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal-section")
    );

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const section = entry.target as HTMLElement;
          section.classList.add("is-visible");
          currentObserver.unobserve(section);
        });
      },
      {
        threshold: 0.2,
      }
    );

    revealSections.forEach((section, index) => {
      section.style.animationDelay = `${index * 0.1}s`;
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const content = {
    kz: {
      logo: "Сервис және туризм колледжі",
      nav: ["Мамандықтар", "Студенттік өмір"],
      heroTitle: "Болашағыңызды бізбен бірге құр",
      heroSubtitle: "Заманауи білім, практикалық дағдылар және табысты мансап",
      heroContactButton: "Байланыс",
      stats: [
        { value: "20+", label: "жыл тәжірибе" },
        { value: "15", label: "мамандық" },
        { value: "2000+", label: "студент" },
        { value: "96%", label: "жұмысқа орналасу" },
      ],
      chooseUsTitle: "Әр студент әрқашан назар орталығында",
      chooseUsFeatures: [
        {
          icon: "✓",
          title: "Сапалы білім",
          description: "нарықта сұранысқа ие түлектер, өзін-өзі дамытуға қабілетті",
        },
        {
          icon: "✈",
          title: "Шетелде тәжірибе",
          description: "мәдениетаралық коммуникация дағдылары",
        },
        {
          icon: "★",
          title: "100% жұмысқа орналасу",
          description: "серіктес компанияларда жұмыс орны",
        },
        {
          icon: "↑",
          title: "Кәсіби өсу",
          description: "мансаптық даму мүмкіндігі",
        },
      ],
      aboutTitle: "Біз туралы",
      aboutText:
        "Колледж еңбек нарығында сұранысқа ие, бәсекеге қабілетті мамандарды даярлайды. Біз заманауи теорияны практикалық тәжірибемен ұштастырып, нақты экономика үшін кәсіби кадрлар қалыптастырамыз.",
      aboutFeatures: [
        "🎓 Профессиональные преподаватели / Кәсіби оқытушылар",
        "🤝 Практика в компаниях / Компанияларда тәжірибе",
        "📜 Государственный диплом / Мемлекеттік диплом",
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
    },
    ru: {
      logo: "Колледж сервиса и туризма",
      nav: ["Специальности", "Студенческая жизнь"],
      heroTitle: "Создай своё будущее вместе с нами",
      heroSubtitle: "Современное образование, практические навыки и успешная карьера",
      heroContactButton: "Контакты",
      stats: [
        { value: "20+", label: "лет опыта" },
        { value: "15", label: "специальностей" },
        { value: "2000+", label: "студентов" },
        { value: "96%", label: "трудоустройство" },
      ],
      chooseUsTitle: "Каждый студент всегда в центре внимания",
      chooseUsFeatures: [
        {
          icon: "✓",
          title: "Качественное образование",
          description: "востребованные выпускники, способные к саморазвитию",
        },
        {
          icon: "✈",
          title: "Стажировка зарубежом",
          description: "развитие навыков межкультурной коммуникации",
        },
        {
          icon: "★",
          title: "100% трудоустройство",
          description: "конкурентоспособные выпускники для работодателей",
        },
        {
          icon: "↑",
          title: "Профессиональный рост",
          description: "возможность карьерного роста",
        },
      ],
      aboutTitle: "О нас",
      aboutText:
        "Колледж готовит конкурентоспособных специалистов, востребованных на рынке труда. Мы объединяем современную теоретическую подготовку с практическим опытом, формируя профессионалов для реальной экономики.",
      aboutFeatures: [
        "🎓 Профессиональные преподаватели / Кәсіби оқытушылар",
        "🤝 Практика в компаниях / Компанияларда тәжірибе",
        "📜 Государственный диплом / Мемлекеттік диплом",
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
        
        @keyframes revealUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .reveal-section {
          opacity: 0;
          transform: translateY(40px);
        }

        .reveal-section.is-visible {
          animation: revealUp 0.7s ease-out forwards;
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
                <a
                  key={link}
                  href={link === "Мамандықтар" || link === "Специальности" ? "/programs" : "#"}
                  style={{
                    color: "#000000",
                    textDecoration: "none",
                    border: "1px solid #1e3a8a",
                    borderRadius: "20px",
                    padding: "6px 14px",
                  }}
                >
                  {link}
                </a>
              ))}
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
        </div>
      </nav>

      <section
        style={{
          width: "100%",
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/orig.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
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
            <Link
              href="/contact"
              style={{
                textDecoration: "none",
                border: "1px solid #ffffff",
                borderRadius: "9999px",
                padding: "13px 28px",
                fontSize: "16px",
                fontWeight: 700,
                backgroundColor: "transparent",
                color: "#ffffff",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {t.heroContactButton}
            </Link>
          </div>
        </div>
      </section>

      <section className="reveal-section" style={{ backgroundColor: "#ffffff", padding: "58px 24px" }}>
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

      <section
        className="reveal-section"
        style={{
          backgroundColor: "#ffffff",
          padding: "0 24px 72px 24px",
          borderTop: "1px solid #f97316",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          }}
        >
          <div
            style={{
              backgroundColor: "#fdf6ec",
              color: "#0f172a",
              padding: "52px 36px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <h2 style={{ margin: 0, fontSize: "clamp(34px, 4.2vw, 50px)", lineHeight: 1.15, fontWeight: 800 }}>
              {t.chooseUsTitle}
            </h2>
          </div>
          <div style={{ backgroundColor: "#ffffff", padding: "36px 34px" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: "26px 24px",
              }}
            >
              {t.chooseUsFeatures.map((feature) => (
                <div
                  key={feature.title}
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    borderRadius: "0",
                    padding: "2px",
                  }}
                >
                  <div
                    style={{
                      width: "46px",
                      height: "46px",
                      borderRadius: "9999px",
                      backgroundColor: "#f97316",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "12px",
                    }}
                  >
                    <span style={{ color: "#ffffff", fontSize: "22px", fontWeight: "bold" }}>{feature.icon}</span>
                  </div>
                  <h3 style={{ margin: "0 0 8px 0", fontSize: "18px", color: "#0f172a", fontWeight: 700 }}>
                    {feature.title}
                  </h3>
                  <p style={{ margin: 0, color: "#475569", lineHeight: 1.6, fontSize: "15px" }}>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="reveal-section"
        style={{
          backgroundColor: "#eaf4ff",
          padding: "72px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "980px", margin: "0 auto" }}>
          <h2 style={{ margin: "0 0 16px 0", fontSize: "34px", color: "#0f172a" }}>{t.aboutTitle}</h2>
          <p
            style={{
              margin: "0 auto 34px auto",
              maxWidth: "860px",
              fontSize: "18px",
              lineHeight: 1.75,
              color: "#334155",
            }}
          >
            {t.aboutText}
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "18px",
            }}
          >
            {t.aboutFeatures.map((feature) => (
              <div
                key={feature}
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #cfe3ff",
                  borderRadius: "16px",
                  padding: "22px 18px",
                  boxShadow: "0 10px 24px rgba(30, 58, 138, 0.08)",
                  fontSize: "17px",
                  fontWeight: 600,
                  color: "#1e3a8a",
                }}
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="reveal-section" style={{ backgroundColor: "#ffffff", padding: "72px 24px" }}>
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
      </div>
    </div>
  );
}
