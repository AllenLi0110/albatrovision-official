const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const navLinks = [...document.querySelectorAll(".main-nav a")];
const langToggle = document.querySelector("[data-lang-toggle]");

const pageCopy = {
  zh: {
    "page.title": "AlbatroVision | 海洋電子觀察員與船隊監控平台",
    "page.description":
      "AlbatroVision 是專為海洋作業打造的影像稽核與電子觀察員平台，串接船隊狀態、Edge Gateway 證據、AI 事件與人工判讀流程。",
    "nav.platform": "平台",
    "nav.workflow": "工作流",
    "nav.demo": "Demo",
    "nav.scope": "MVP 範圍",
    "nav.contact": "聯絡",
    "nav.open": "開啟導覽",
    "nav.close": "關閉導覽",
    "lang.toggle": "切換為英文",
    "cta.demo": "預約 Demo",
    "hero.kicker": "海洋影像稽核與電子觀察員平台。",
    "hero.copy":
      "將 Jetson Edge Gateway 產生的錄影、AI 事件、船隊狀態與人工判讀集中在同一條時間線，讓觀察員從完整原始影像完成標記、審核與報告準備。",
    "hero.primaryCta": "預約海洋方案 Demo",
    "hero.secondaryCta": "看產品流程",
    "stats.camera": "鏡頭軌道",
    "stats.timeline": "共用證據時間線",
    "stats.fields": "EM 觀察員欄位已對齊",
    "strip.copy": "目前聚焦一個產品線：海洋電子觀察員與船隊監控。",
    "platform.title": "一套海洋方案，像產品套件一樣模組化展開",
    "platform.copy":
      "AlbatroVision 不是泛用 ERP，而是把船隊狀態、邊緣影像證據、人工稽核與報表準備放在同一個操作中心。網站呈現方式接近套件式官網，但產品內容只服務海洋作業。",
    "module.dashboard": "掌握船隻狀態、GPS、網路、魚艙溫度、近期事件與 Edge Gateway 健康狀態。",
    "module.edge": "接收 Jetson 上傳的錄影、事件、縮圖、片段與傳輸確認，保留來源與時間軸證據。",
    "module.analysis": "觀察員在完整原始影片上檢視 AI 事件、建立人工標記，保留官方可編輯判讀紀錄。",
    "module.reports": "把時間線中的人工標記轉成電子觀察員報告候選資料，支援 CSV、XLSX 與列印輸出。",
    "tour.heading": "從船隊監控到人工判讀，不切換工作脈絡",
    "tour.tab.dashboard": "儀表板",
    "tour.tab.review": "人工判讀",
    "tour.tab.reports": "報告",
    "workflow.title": "海洋證據進來後，判讀流程要一路走到底",
    "workflow.copy":
      "目前 MVP 的核心不是堆功能，而是驗證一條完整工作流：邊緣端產生證據、AlbatroVision 收斂資料、觀察員在同一條時間線上完成判讀，再準備電子觀察員報告。",
    "workflow.one.title": "Edge Gateway 上傳證據",
    "workflow.one.copy": "錄影 metadata、來源影片、AI 事件、偵測框、縮圖與傳輸狀態都以 gateway 身分寫入。",
    "workflow.two.title": "船隊狀態與影像合流",
    "workflow.two.copy": "Dashboard 把船舶、GPS、溫度、Camera lane 與事件摘要收斂成可掃描的操作畫面。",
    "workflow.three.title": "觀察員保留官方判讀",
    "workflow.three.copy": "AI 事件是原始證據；人工標記是正式紀錄，兩者並排顯示但不互相覆寫。",
    "workflow.four.title": "輸出報告候選資料",
    "workflow.four.copy": "報表工作區對齊 PM 電子觀察員欄位，讓目前可用資料和缺漏值都清楚呈現。",
    "demo.title": "海洋工作流預覽",
    "demo.copy":
      "這段 demo 展示現有海洋方案的操作節奏：Edge Gateway 產出證據、Dashboard 監控船況、觀察員檢視多鏡頭時間線，最後回到電子觀察員報表。",
    "demo.link": "安排一次完整 walkthrough",
    "scope.title": "現階段聚焦：海洋電子觀察員與船隊監控",
    "scope.copy":
      "AlbatroVision 現階段是 mock-first、本地可展示的產品原型，重點是驗證海洋影像稽核流程。產品敘事保留未來延展性，但不把 roadmap 包裝成已交付功能。",
    "scope.now.title": "現在可展示",
    "scope.now.one": "登入、RBAC、船隻切換與 vessel-scoped authorization",
    "scope.now.two": "Dashboard、Video Review、Human Analysis 與 Edge Monitoring",
    "scope.now.three": "Jetson Edge Gateway heartbeat、recording、event 與 source-video ingest",
    "scope.now.four": "電子觀察員欄位 catalog、報告候選與 CSV / XLSX / print output",
    "scope.no.title": "現在不宣稱",
    "scope.no.one": "正式雲端部署、SSO、production identity 或 billing",
    "scope.no.two": "真實 RTSP / NVR / ONVIF 串流與正式 AI 推論",
    "scope.no.three": "第三方漁業系統整合或正式法規申報提交",
    "scope.no.four": "完整 manager comment 與 durable report lifecycle",
    "scope.next.title": "可討論下一步",
    "scope.next.one": "船隊規模、資料保留、部署假設與 pilot 範圍",
    "scope.next.two": "正式 identity、source-video storage 與 report lifecycle",
    "scope.next.three": "目標市場的報告格式、欄位語系與作業術語",
    "scope.next.four": "合作夥伴 demo、投資人簡報或客戶 walkthrough",
    "contact.title": "從第一條海洋 workflow 開始對話",
    "contact.copy":
      "從清楚的海洋方案開始，評估船隊監控、edge evidence review 與 observer workflow 如何接到現有海洋作業，再依 pilot 需求擴充案例、部署與商務資訊。",
    "form.name": "姓名",
    "form.email": "Email",
    "form.topic": "想討論的方向",
    "form.option.placeholder": "請選擇",
    "form.option.demo": "產品 Demo",
    "form.option.partnership": "合作討論",
    "form.option.investor": "投資人簡報",
    "form.option.website": "官網文案調整",
    "form.topicRequired": "請選擇想討論的方向。",
    "form.message": "補充說明",
    "form.message.placeholder": "例如：想看完整 observer workflow，或需要英文版官網。",
    "form.submit": "建立聯絡郵件",
    "form.status": "已整理成郵件草稿，請在你的郵件 App 中確認後送出。",
    "form.defaultMessage": "我想討論 AlbatroVision 海洋方案。",
  },
  en: {
    "page.title": "AlbatroVision | Ocean EM Operations Platform",
    "page.description":
      "AlbatroVision is an ocean video review and electronic observer platform connecting fleet status, Edge Gateway evidence, AI events and human review workflows.",
    "nav.platform": "Platform",
    "nav.workflow": "Workflow",
    "nav.demo": "Demo",
    "nav.scope": "MVP Scope",
    "nav.contact": "Contact",
    "nav.open": "Open navigation",
    "nav.close": "Close navigation",
    "lang.toggle": "Switch to Chinese",
    "cta.demo": "Book a Demo",
    "hero.kicker": "An ocean video review and electronic observer platform.",
    "hero.copy":
      "AlbatroVision brings Jetson Edge Gateway recordings, AI events, vessel context and human review into one evidence timeline so observers can mark, verify and prepare reports from source video.",
    "hero.primaryCta": "Book an Ocean Demo",
    "hero.secondaryCta": "See the workflow",
    "stats.camera": "Camera lanes",
    "stats.timeline": "Shared evidence timeline",
    "stats.fields": "EM observer fields mapped",
    "strip.copy": "Focused on one product line today: ocean electronic observer workflows and fleet monitoring.",
    "platform.title": "One ocean solution, presented like a modular product suite",
    "platform.copy":
      "AlbatroVision is not a generic ERP. It brings vessel status, edge video evidence, human review and report preparation into one operations center for ocean workflows.",
    "module.dashboard": "Monitor vessel status, GPS, network state, fish hold temperature, recent events and Edge Gateway health.",
    "module.edge": "Receive Jetson recordings, events, thumbnails, clips and transfer acknowledgements while preserving source provenance.",
    "module.analysis": "Review AI events on complete source recordings and create official human-editable observer marks.",
    "module.reports": "Project observer marks into electronic observer report candidates with CSV, XLSX and print outputs.",
    "tour.heading": "Move from fleet monitoring to human review without losing context",
    "tour.tab.dashboard": "Dashboard",
    "tour.tab.review": "Human Analysis",
    "tour.tab.reports": "Reports",
    "workflow.title": "Evidence enters once, then follows the full review path",
    "workflow.copy":
      "The MVP validates one complete workflow: edge evidence is produced, AlbatroVision consolidates it, observers review it on one timeline, and report candidates are prepared from that evidence.",
    "workflow.one.title": "Edge Gateway uploads evidence",
    "workflow.one.copy":
      "Recording metadata, source video, AI events, detection boxes, thumbnails and transfer state are written under gateway identity.",
    "workflow.two.title": "Fleet context joins video evidence",
    "workflow.two.copy":
      "The dashboard turns vessel, GPS, temperature, camera lanes and event summaries into a scan-friendly operations view.",
    "workflow.three.title": "Observers keep the official judgement",
    "workflow.three.copy":
      "AI events remain raw machine evidence; human marks become the official record, displayed together without overwriting provenance.",
    "workflow.four.title": "Report candidates are prepared",
    "workflow.four.copy":
      "The reports workspace aligns available timeline data with electronic observer fields while making missing values visible.",
    "demo.title": "Ocean workflow preview",
    "demo.copy":
      "The demo shows the operating rhythm: Edge Gateway evidence, dashboard monitoring, multi-camera observer review and electronic observer report preparation.",
    "demo.link": "Schedule a complete walkthrough",
    "scope.title": "Current focus: ocean electronic observer workflows and fleet monitoring",
    "scope.copy":
      "AlbatroVision is currently a mock-first, locally demoable product prototype focused on validating ocean video review workflows. The story leaves room for the roadmap without presenting planned features as delivered.",
    "scope.now.title": "Available to demo now",
    "scope.now.one": "Login, RBAC, vessel switching and vessel-scoped authorization",
    "scope.now.two": "Dashboard, Video Review, Human Analysis and Edge Monitoring",
    "scope.now.three": "Jetson Edge Gateway heartbeat, recording, event and source-video ingest",
    "scope.now.four": "Electronic observer field catalog, report candidates and CSV / XLSX / print output",
    "scope.no.title": "Not claimed today",
    "scope.no.one": "Production cloud deployment, SSO, production identity or billing",
    "scope.no.two": "Real RTSP / NVR / ONVIF streaming or production AI inference",
    "scope.no.three": "Third-party fisheries integration or formal regulatory submission",
    "scope.no.four": "Complete manager comments or durable report lifecycle",
    "scope.next.title": "Good next conversations",
    "scope.next.one": "Fleet size, data retention, deployment assumptions and pilot scope",
    "scope.next.two": "Production identity, source-video storage and report lifecycle",
    "scope.next.three": "Target-market report formats, field language and operations terms",
    "scope.next.four": "Partner demos, investor briefings or customer walkthroughs",
    "contact.title": "Start with the first ocean workflow",
    "contact.copy":
      "Begin with the ocean solution, then evaluate how fleet monitoring, edge evidence review and observer workflows connect to existing operations before expanding pilot, deployment and commercial details.",
    "form.name": "Name",
    "form.email": "Email",
    "form.topic": "Topic",
    "form.option.placeholder": "Select one",
    "form.option.demo": "Product demo",
    "form.option.partnership": "Partnership",
    "form.option.investor": "Investor briefing",
    "form.option.website": "Website copy",
    "form.topicRequired": "Please choose a topic.",
    "form.message": "Message",
    "form.message.placeholder": "For example: I want to see the full observer workflow or need an English version.",
    "form.submit": "Create Email",
    "form.status": "Email draft prepared. Please review it in your mail app before sending.",
    "form.defaultMessage": "I would like to discuss the AlbatroVision ocean solution.",
  },
};

const tourItems = {
  dashboard: {
    zh: {
      title: "船隊即時儀表板",
      body: "以船隻為核心顯示影像、定位、Edge Gateway、警示與作業摘要，第一眼回答「船現在是否正常」。",
      caption: "單一作業船隻的 operations dashboard。",
      metrics: ["船隻狀態、網路、GPS 與警示", "同步鏡頭預覽與 edge metadata", "給 fleet manager 與 observer 共用的作業脈絡"],
    },
    en: {
      title: "Live Fleet Dashboard",
      body: "Center the experience on one vessel with video context, location, Edge Gateway health, alerts and operations summaries.",
      caption: "Operations dashboard for one active vessel.",
      metrics: ["Vessel status, network, GPS and alerts", "Synced camera preview and edge metadata", "Fleet manager and observer friendly context"],
    },
    image: "assets/dashboard-hero.png",
    alt: "AlbatroVision dashboard showing vessel status, camera feeds, map and operations metrics",
  },
  review: {
    zh: {
      title: "人工判讀工作區",
      body: "觀察員在完整原始錄影上切換多鏡頭、檢視 AI 事件、建立人工標記，讓官方紀錄與原始證據並排保留。",
      caption: "以來源影片時間線為核心的 Human Analysis workspace。",
      metrics: ["AI 事件與觀察員標記共用來源影片秒數", "多鏡頭 focus-and-context playback", "人工標記不覆寫原始 AI 證據"],
    },
    en: {
      title: "Human Analysis Workspace",
      body: "Observers switch cameras, review AI events and create human marks on the complete source recording while preserving evidence provenance.",
      caption: "Human analysis workspace with a shared source-video timeline.",
      metrics: ["AI events and observer marks share source-relative seconds", "Multi-camera focus and context playback", "Human marks do not overwrite raw AI evidence"],
    },
    image: "assets/manual-review.png",
    alt: "AlbatroVision human analysis workspace with primary camera, synchronized camera thumbnails and observer mark form",
  },
  reports: {
    zh: {
      title: "電子觀察員報告",
      body: "報表工作區把可用的時間線資料投射到電子觀察員欄位，保留 null 值，協助團隊看見還缺哪些正式資料。",
      caption: "對齊 observer field catalog 的 report candidates。",
      metrics: ["PM observer field catalog 對齊群組與 catch rows", "支援 CSV、XLSX 與 browser print output", "依錄影日期範圍整理 report candidates"],
    },
    en: {
      title: "Electronic Observer Reports",
      body: "The reports workspace projects timeline evidence into observer fields and keeps null values visible so teams can see what is still missing.",
      caption: "Report candidates aligned with the observer field catalog.",
      metrics: ["PM observer field catalog mapped into groups and catch rows", "CSV, XLSX and browser print output for review", "Report candidates grouped by recording date range"],
    },
    image: "assets/reports-workspace.png",
    alt: "AlbatroVision electronic observer reports workspace with candidate list and report table",
  },
};

let currentLocale = getStoredLocale();
let activeTourKey = "dashboard";

function getStoredLocale() {
  try {
    const storedLocale = localStorage.getItem("albatrovision.locale");
    return storedLocale === "zh" || storedLocale === "en" ? storedLocale : "en";
  } catch {
    return "en";
  }
}

function saveLocale(locale) {
  try {
    localStorage.setItem("albatrovision.locale", locale);
  } catch {
    // Local storage can be unavailable in some embedded browser modes.
  }
}

function t(key) {
  return pageCopy[currentLocale][key] || pageCopy.en[key] || key;
}

function syncNavLabel() {
  if (!navToggle) return;
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-label", t(isOpen ? "nav.close" : "nav.open"));
}

function applyTranslations(locale) {
  currentLocale = locale;
  document.documentElement.lang = locale === "en" ? "en" : "zh-Hant";
  document.title = t("page.title");

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", t("page.description"));
  }

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.setAttribute("placeholder", t(node.dataset.i18nPlaceholder));
  });

  syncCustomSelectLabels();

  if (langToggle) {
    langToggle.setAttribute("aria-label", t("lang.toggle"));
    langToggle.setAttribute("aria-pressed", String(locale === "en"));
    langToggle.classList.toggle("is-en", locale === "en");
  }

  syncNavLabel();
  renderTour(activeTourKey);
}

const setHeaderState = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

if (langToggle) {
  langToggle.addEventListener("click", () => {
    const nextLocale = currentLocale === "zh" ? "en" : "zh";
    saveLocale(nextLocale);
    applyTranslations(nextLocale);
  });
}

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const nextState = navToggle.getAttribute("aria-expanded") !== "true";
    navToggle.setAttribute("aria-expanded", String(nextState));
    nav.classList.toggle("is-open", nextState);
    document.body.classList.toggle("nav-open", nextState);
    syncNavLabel();
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
      document.body.classList.remove("nav-open");
      syncNavLabel();
    });
  });
}

const tourTitle = document.querySelector("[data-tour-title]");
const tourBody = document.querySelector("[data-tour-body]");
const tourImage = document.querySelector("[data-tour-image]");
const tourCaption = document.querySelector("[data-tour-caption]");
const tourMetrics = document.querySelector("[data-tour-metrics]");
const tourTabs = [...document.querySelectorAll("[data-tour-tab]")];

function renderTour(key) {
  const item = tourItems[key];
  const localizedItem = item?.[currentLocale];
  if (!item || !localizedItem || !tourTitle || !tourBody || !tourImage || !tourCaption || !tourMetrics) return;

  activeTourKey = key;

  tourTabs.forEach((tab) => {
    const isActive = tab.dataset.tourTab === key;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });

  tourTitle.textContent = localizedItem.title;
  tourBody.textContent = localizedItem.body;
  tourImage.src = item.image;
  tourImage.alt = item.alt;
  tourCaption.textContent = localizedItem.caption;
  tourMetrics.replaceChildren(
    ...localizedItem.metrics.map((metric) => {
      const li = document.createElement("li");
      li.textContent = metric;
      return li;
    }),
  );
}

tourTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    renderTour(tab.dataset.tourTab);
  });
});

const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window && sections.length > 0) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: "-38% 0px -48% 0px", threshold: 0.01 },
  );

  sections.forEach((section) => sectionObserver.observe(section));
}

const customSelects = [...document.querySelectorAll("[data-custom-select]")];

function customSelectParts(field) {
  return {
    trigger: field.querySelector("[data-custom-select-trigger]"),
    input: field.querySelector("[data-custom-select-input]"),
    value: field.querySelector("[data-custom-select-value]"),
    options: [...field.querySelectorAll("[data-custom-select-option]")],
    error: field.querySelector("[data-custom-select-error]"),
  };
}

function closeCustomSelects(exceptField = null) {
  customSelects.forEach((field) => {
    if (field === exceptField) return;
    const { trigger } = customSelectParts(field);
    field.classList.remove("is-open");
    trigger?.setAttribute("aria-expanded", "false");
  });
}

function syncCustomSelectLabels() {
  customSelects.forEach((field) => {
    const { input, options, value } = customSelectParts(field);
    if (!input || !value) return;

    const selectedOption = options.find((option) => option.dataset.value === input.value);
    value.textContent = selectedOption ? selectedOption.textContent.trim() : t("form.option.placeholder");
  });
}

function setCustomSelectValue(field, option) {
  const { error, input, options, trigger, value } = customSelectParts(field);
  if (!input || !value) return;

  input.value = option.dataset.value || "";
  value.textContent = option.textContent.trim();
  options.forEach((item) => {
    item.setAttribute("aria-selected", String(item === option));
  });
  field.classList.remove("has-error", "is-open");
  trigger?.setAttribute("aria-expanded", "false");
  if (error) {
    error.hidden = true;
  }
}

function focusCustomSelectOption(options, currentIndex, direction) {
  if (options.length === 0) return;
  const nextIndex = (currentIndex + direction + options.length) % options.length;
  options[nextIndex].focus();
}

function validateCustomSelects() {
  let isValid = true;

  customSelects.forEach((field) => {
    const { error, input, trigger } = customSelectParts(field);
    const hasValue = Boolean(input?.value);
    field.classList.toggle("has-error", !hasValue);

    if (error) {
      error.hidden = hasValue;
    }

    if (!hasValue) {
      isValid = false;
      trigger?.focus();
    }
  });

  return isValid;
}

customSelects.forEach((field) => {
  const { input, options, trigger } = customSelectParts(field);
  if (!trigger || !input) return;

  trigger.addEventListener("click", () => {
    const isOpen = field.classList.contains("is-open");
    closeCustomSelects(field);
    field.classList.toggle("is-open", !isOpen);
    trigger.setAttribute("aria-expanded", String(!isOpen));
  });

  trigger.addEventListener("keydown", (event) => {
    if (!["ArrowDown", "Enter", " "].includes(event.key)) return;
    event.preventDefault();
    closeCustomSelects(field);
    field.classList.add("is-open");
    trigger.setAttribute("aria-expanded", "true");

    const selectedIndex = Math.max(
      0,
      options.findIndex((option) => option.dataset.value === input.value),
    );
    options[selectedIndex]?.focus();
  });

  options.forEach((option, index) => {
    option.addEventListener("click", () => {
      setCustomSelectValue(field, option);
      trigger.focus();
    });

    option.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        field.classList.remove("is-open");
        trigger.setAttribute("aria-expanded", "false");
        trigger.focus();
      }

      if (event.key === "ArrowDown") {
        event.preventDefault();
        focusCustomSelectOption(options, index, 1);
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();
        focusCustomSelectOption(options, index, -1);
      }

      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        setCustomSelectValue(field, option);
        trigger.focus();
      }
    });
  });
});

document.addEventListener("pointerdown", (event) => {
  const target = event.target;
  if (!(target instanceof Node)) return;
  const openField = customSelects.find((field) => field.classList.contains("is-open"));
  if (!openField || openField.contains(target)) return;
  closeCustomSelects();
});

const contactForm = document.querySelector("[data-contact-form]");
const formStatus = document.querySelector("[data-form-status]");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!validateCustomSelects()) return;
    if (!contactForm.reportValidity()) return;

    const formData = new FormData(contactForm);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const topic = String(formData.get("topic") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const subject = `AlbatroVision inquiry: ${topic}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Topic: ${topic}`,
      "",
      message || t("form.defaultMessage"),
    ].join("\n");

    if (formStatus) {
      formStatus.textContent = t("form.status");
    }

    window.location.href = `mailto:allen@albatrovision.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  });
}

applyTranslations(currentLocale);
