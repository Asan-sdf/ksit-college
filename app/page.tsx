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
      formTitle: "Өтінім қалдыру",
      formSubtitle: "Біз сізбен хабарласамыз",
      formNamePlaceholder: "Аты-жөні",
      formPhonePlaceholder: "Телефон нөмірі",
      formProgramPlaceholder: "Мамандықты таңдаңыз",
      formPrograms: ["Туризм", "Тамақтандыру технологиясы", "Қонақжайлылық", "IT", "Дизайн", "Сауда және маркетинг"],
      formSubmit: "Жіберу",
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
      formTitle: "Оставить заявку",
      formSubtitle: "Мы свяжемся с вами",
      formNamePlaceholder: "Ваше имя",
      formPhonePlaceholder: "Номер телефона",
      formProgramPlaceholder: "Выберите специальность",
      formPrograms: ["Туризм", "Технология питания", "Гостеприимство", "IT", "Дизайн", "Торговля и маркетинг"],
      formSubmit: "Отправить",
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
                <a key={link} href="#" style={{ color: "#000000", textDecoration: "none" }}>
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
            <button
              onClick={() => document.getElementById("application-form").scrollIntoView({ behavior: "smooth" })}
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

      <section
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

      <section id="application-form" style={{ backgroundColor: "#ffffff", padding: "64px 24px" }}>
        <div
          style={{
            maxWidth: "500px",
            margin: "0 auto",
            backgroundColor: "#ffffff",
            border: "1px solid #e2e8f0",
            borderRadius: "16px",
            padding: "30px 24px",
            boxShadow: "0 12px 28px rgba(15, 23, 42, 0.1)",
            textAlign: "center",
          }}
        >
          <h2 style={{ margin: "0 0 10px 0", fontSize: "30px", color: "#0f172a", fontWeight: 700 }}>{t.formTitle}</h2>
          <p style={{ margin: "0 0 24px 0", fontSize: "16px", color: "#475569" }}>{t.formSubtitle}</p>
          <form style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <input
              type="text"
              placeholder={t.formNamePlaceholder}
              style={{
                width: "100%",
                border: "1px solid #cbd5e1",
                borderRadius: "10px",
                padding: "12px 14px",
                fontSize: "15px",
                color: "#0f172a",
                outline: "none",
              }}
            />
            <input
              type="text"
              placeholder={t.formPhonePlaceholder}
              style={{
                width: "100%",
                border: "1px solid #cbd5e1",
                borderRadius: "10px",
                padding: "12px 14px",
                fontSize: "15px",
                color: "#0f172a",
                outline: "none",
              }}
            />
            <select
              defaultValue=""
              style={{
                width: "100%",
                border: "1px solid #cbd5e1",
                borderRadius: "10px",
                padding: "12px 14px",
                fontSize: "15px",
                color: "#0f172a",
                outline: "none",
                backgroundColor: "#ffffff",
              }}
            >
              <option value="" disabled>
                {t.formProgramPlaceholder}
              </option>
              {t.formPrograms.map((program) => (
                <option key={program} value={program}>
                  {program}
                </option>
              ))}
            </select>
            <button
              type="submit"
              style={{
                marginTop: "6px",
                border: "none",
                borderRadius: "10px",
                padding: "13px 16px",
                fontSize: "16px",
                fontWeight: 700,
                color: "#ffffff",
                backgroundColor: "#1d4ed8",
                cursor: "pointer",
              }}
            >
              {t.formSubmit}
            </button>
          </form>
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
