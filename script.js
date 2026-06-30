const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const navLinks = [...document.querySelectorAll(".main-nav a")];
const langToggle = document.querySelector("[data-lang-toggle]");
const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

const pageCopy = {
  zh: {
    "page.title": "AlbatroVision | 海洋電子觀察員與船隊監控平台",
    "page.description":
      "AlbatroVision 是專為海洋作業打造的影像稽核與電子觀察員平台，串接船隊狀態、Edge Gateway 證據、AI 事件與人工判讀流程。",
    "nav.platform": "平台",
    "nav.workflow": "工作流",
    "nav.demo": "Demo",
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
    "hotspot.gateway.aria": "Edge Gateway 熱點",
    "hotspot.gateway.title": "Edge Gateway",
    "hotspot.gateway.copy": "Heartbeat、錄影與事件都保留來源脈絡。",
    "hotspot.timeline.aria": "觀察員時間線熱點",
    "hotspot.timeline.title": "觀察員時間線",
    "hotspot.timeline.copy": "AI 事件與人工標記對齊原始影片秒數。",
    "hotspot.report.aria": "電子觀察員報告熱點",
    "hotspot.report.title": "EM 報告",
    "hotspot.report.copy": "人工標記轉成結構化報告候選資料。",
    "status.vessel": "船隻狀態",
    "status.edge": "Edge 延遲",
    "status.cameras": "鏡頭在線",
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
    "readiness.one.kicker": "Pilot Ready",
    "readiness.one.title": "從一艘作業船開始",
    "readiness.one.copy": "用 dashboard、證據判讀與報告準備，定義一個範圍清楚的營運 pilot。",
    "readiness.two.kicker": "Operator Friendly",
    "readiness.two.title": "為重複判讀而設計",
    "readiness.two.copy": "密度適中的資訊、清楚狀態與快速切換，讓觀察員留在工作流裡。",
    "readiness.three.kicker": "Evidence First",
    "readiness.three.title": "來源影片保持核心",
    "readiness.three.copy": "每個標記、事件與報告候選資料，都回到同一條原始證據時間線。",
    "tour.heading": "從船隊監控到人工判讀，不切換工作脈絡",
    "tour.tab.dashboard": "儀表板",
    "tour.tab.review": "人工判讀",
    "tour.tab.reports": "報告",
    "workflow.title": "海洋證據進來後，判讀流程要一路走到底",
    "workflow.copy":
      "平台聚焦一條完整工作流：邊緣端產生證據、AlbatroVision 收斂資料、觀察員在同一條時間線上完成判讀，再準備電子觀察員報告。",
    "timeline.one.title": "錄影",
    "timeline.one.copy": "來源影片從船舶邊緣端進入。",
    "timeline.two.title": "偵測",
    "timeline.two.copy": "AI 事件附著到原始影片秒數。",
    "timeline.three.title": "判讀",
    "timeline.three.copy": "觀察員確認並建立人工標記。",
    "timeline.four.title": "報告",
    "timeline.four.copy": "候選欄位被整理成可輸出資料。",
    "workflow.one.title": "Edge Gateway 上傳證據",
    "workflow.one.copy": "錄影 metadata、來源影片、AI 事件、偵測框、縮圖與傳輸狀態都以 gateway 身分寫入。",
    "workflow.two.title": "船隊狀態與影像合流",
    "workflow.two.copy": "Dashboard 把船舶、GPS、溫度、Camera lane 與事件摘要收斂成可掃描的操作畫面。",
    "workflow.three.title": "觀察員保留官方判讀",
    "workflow.three.copy": "AI 事件是原始證據；人工標記是正式紀錄，兩者並排顯示但不互相覆寫。",
    "workflow.four.title": "輸出報告候選資料",
    "workflow.four.copy": "報表工作區對齊 PM 電子觀察員欄位，讓目前可用資料和缺漏值都清楚呈現。",
    "story.capture.kicker": "01 / 擷取",
    "story.capture.title": "證據從船舶邊緣端開始",
    "story.capture.copy": "錄影、縮圖與 AI 事件 metadata 會先被整理，才進入人工判讀時間線。",
    "story.align.kicker": "02 / 對齊",
    "story.align.title": "作業脈絡加入同一個時間",
    "story.align.copy": "GPS、鏡頭軌道、gateway 狀態與作業脈絡，都圍繞同一段來源影片秒數。",
    "story.decide.kicker": "03 / 判定",
    "story.decide.title": "人工判斷被明確保留",
    "story.decide.copy": "機器事件維持證據層；觀察員標記成為正式判讀層。",
    "story.visual.capture.title": "船隊儀表板",
    "story.visual.capture.caption": "人工判讀前，船況與 edge 狀態先被收斂。",
    "story.visual.align.title": "來源時間線",
    "story.visual.align.caption": "鏡頭與事件都對齊到同一段來源影片。",
    "story.visual.decide.title": "人工分析",
    "story.visual.decide.caption": "觀察員標記與 AI 事件並排保留。",
    "command.title": "為海洋證據打造的精簡指揮中心",
    "command.copy":
      "更完整的 command-center 視覺能傳達 AlbatroVision 不是概念頁，而是一個能承接船隻狀態、鏡頭軌道、證據進件與判讀準備的作業層。",
    "command.status.one": "作業船隻",
    "command.status.one.copy": "狀態正常",
    "command.status.two": "Edge Gateway",
    "command.status.two.copy": "同步健康度",
    "command.status.three": "鏡頭軌道",
    "command.status.three.copy": "全數在線",
    "command.map.kicker": "GPS 位置",
    "command.queue.kicker": "證據佇列",
    "command.queue.one": "錄影已上傳",
    "command.queue.two": "AI 事件已附加",
    "command.queue.three": "人工標記待確認",
    "scene.kicker": "3D 船舶脈絡",
    "scene.title": "一艘作業船周圍的鏡頭軌道",
    "scene.copy": "輕量 Three.js 場景搭配 canvas fallback，呈現鏡頭與證據軌道如何圍繞船舶工作流。",
    "demo.title": "海洋工作流預覽",
    "demo.copy":
      "這段 demo 展示現有海洋方案的操作節奏：Edge Gateway 產出證據、Dashboard 監控船況、觀察員檢視多鏡頭時間線，最後回到電子觀察員報表。",
    "demo.link": "安排一次完整 walkthrough",
    "demo.open": "開啟 workflow 預覽",
    "demo.open.aria": "開啟 demo 預覽",
    "demo.close": "關閉 demo 預覽",
    "demo.modal.title": "從船舶邊緣到報告，跟著證據走一遍",
    "demo.modal.copy": "用三個畫面快速看 AlbatroVision 目前海洋工作流。",
    "demo.step.dashboard": "儀表板",
    "demo.step.review": "人工判讀",
    "demo.step.reports": "報告",
    "demo.modal.dashboard.body": "船況、edge health 與鏡頭軌道在判讀前保持可見。",
    "demo.modal.review.body": "觀察員在同一條來源時間線上確認 AI 事件並建立人工標記。",
    "demo.modal.reports.body": "報告候選資料保留可用欄位與缺漏值，便於後續檢查。",
    "ctaBand.title": "準備把海洋證據放進同一條時間線嗎？",
    "ctaBand.copy": "第一次對話可以先對齊船隊範圍、來源影片處理方式與 observer report 期待。",
    "ctaBand.primary": "預約海洋 Demo",
    "ctaBand.secondary": "預覽工作流",
    "contact.title": "從第一條海洋 workflow 開始對話",
    "contact.copy":
      "從清楚的海洋方案開始，評估船隊監控、edge evidence review 與 observer workflow 如何接到現有海洋作業，再依 pilot 需求擴充案例、部署與商務資訊。",
    "contact.point.one": "海洋監控",
    "contact.point.two": "電子觀察員工作流",
    "contact.point.three": "Edge-to-cloud 證據判讀",
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
    "footer.copy": "海洋 EM 作業平台，服務船隊監控、edge evidence review 與 observer workflow。",
  },
  en: {
    "page.title": "AlbatroVision | Ocean EM Operations Platform",
    "page.description":
      "AlbatroVision is an ocean video review and electronic observer platform connecting fleet status, Edge Gateway evidence, AI events and human review workflows.",
    "nav.platform": "Platform",
    "nav.workflow": "Workflow",
    "nav.demo": "Demo",
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
    "hotspot.gateway.aria": "Edge Gateway hotspot",
    "hotspot.gateway.title": "Edge Gateway",
    "hotspot.gateway.copy": "Heartbeat, recordings and events arrive with source provenance.",
    "hotspot.timeline.aria": "Observer timeline hotspot",
    "hotspot.timeline.title": "Observer Timeline",
    "hotspot.timeline.copy": "AI events and human marks stay aligned to source video time.",
    "hotspot.report.aria": "Electronic observer report hotspot",
    "hotspot.report.title": "EM Reports",
    "hotspot.report.copy": "Observer marks become structured report candidates.",
    "status.vessel": "Vessel status",
    "status.edge": "Edge latency",
    "status.cameras": "Cameras online",
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
    "readiness.one.kicker": "Pilot Ready",
    "readiness.one.title": "Start with one active vessel",
    "readiness.one.copy": "Frame a contained operational pilot around dashboard, evidence review and report preparation.",
    "readiness.two.kicker": "Operator Friendly",
    "readiness.two.title": "Built for repeated review",
    "readiness.two.copy": "Dense screens, clear states and fast context shifts keep observers inside the work.",
    "readiness.three.kicker": "Evidence First",
    "readiness.three.title": "Source video stays central",
    "readiness.three.copy": "Every mark, event and candidate report remains tied to the original evidence timeline.",
    "tour.heading": "Move from fleet monitoring to human review without losing context",
    "tour.tab.dashboard": "Dashboard",
    "tour.tab.review": "Human Analysis",
    "tour.tab.reports": "Reports",
    "workflow.title": "Evidence enters once, then follows the full review path",
    "workflow.copy":
      "The platform centers on one complete workflow: edge evidence is produced, AlbatroVision consolidates it, observers review it on one timeline, and report candidates are prepared from that evidence.",
    "timeline.one.title": "Record",
    "timeline.one.copy": "Source video arrives from the vessel edge.",
    "timeline.two.title": "Detect",
    "timeline.two.copy": "AI events are attached to source seconds.",
    "timeline.three.title": "Review",
    "timeline.three.copy": "Observers verify and add human marks.",
    "timeline.four.title": "Report",
    "timeline.four.copy": "Candidate fields are prepared for export.",
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
    "story.capture.kicker": "01 / Capture",
    "story.capture.title": "Evidence starts at the vessel edge",
    "story.capture.copy": "Recordings, thumbnails and AI event metadata are bundled before the reviewer ever opens the timeline.",
    "story.align.kicker": "02 / Align",
    "story.align.title": "Context joins the same clock",
    "story.align.copy": "GPS, camera lane, gateway state and operations context line up around the same source-video seconds.",
    "story.decide.kicker": "03 / Decide",
    "story.decide.title": "Human judgement remains explicit",
    "story.decide.copy": "Machine events stay visible as evidence while observer marks become the official review layer.",
    "story.visual.capture.title": "Fleet Dashboard",
    "story.visual.capture.caption": "Live vessel context before human review.",
    "story.visual.align.title": "Source Timeline",
    "story.visual.align.caption": "Camera lanes and events align to one source recording.",
    "story.visual.decide.title": "Human Analysis",
    "story.visual.decide.caption": "Observer marks sit beside raw AI evidence.",
    "command.title": "A compact operations surface for ocean evidence",
    "command.copy":
      "A richer command-center view can communicate that AlbatroVision is not a brochure concept. It behaves like a real operating layer for vessel state, camera lanes, evidence intake and review readiness.",
    "command.status.one": "Active vessel",
    "command.status.one.copy": "Tracking normal",
    "command.status.two": "Edge Gateway",
    "command.status.two.copy": "Sync health",
    "command.status.three": "Camera lanes",
    "command.status.three.copy": "All online",
    "command.map.kicker": "GPS Position",
    "command.queue.kicker": "Evidence Queue",
    "command.queue.one": "Recording uploaded",
    "command.queue.two": "AI event attached",
    "command.queue.three": "Observer mark ready",
    "scene.kicker": "3D Vessel Context",
    "scene.title": "Camera lanes around one operating vessel",
    "scene.copy": "A lightweight Three.js scene, with a canvas fallback, shows how cameras and evidence lanes orbit the vessel workflow.",
    "demo.title": "Ocean workflow preview",
    "demo.copy":
      "The demo shows the operating rhythm: Edge Gateway evidence, dashboard monitoring, multi-camera observer review and electronic observer report preparation.",
    "demo.link": "Schedule a complete walkthrough",
    "demo.open": "Open workflow preview",
    "demo.open.aria": "Open demo preview",
    "demo.close": "Close demo preview",
    "demo.modal.title": "Follow the evidence from vessel edge to report",
    "demo.modal.copy": "A concise walkthrough of the current AlbatroVision ocean workflow.",
    "demo.step.dashboard": "Dashboard",
    "demo.step.review": "Human Review",
    "demo.step.reports": "Reports",
    "demo.modal.dashboard.body": "Vessel context, edge health and camera lanes stay visible before review.",
    "demo.modal.review.body": "Observers verify AI events and create human marks on one source timeline.",
    "demo.modal.reports.body": "Report candidates preserve available fields and missing values for review.",
    "ctaBand.title": "Ready to review ocean evidence in one timeline?",
    "ctaBand.copy": "Use the first call to align vessel scope, source-video handling and observer report expectations.",
    "ctaBand.primary": "Book an Ocean Demo",
    "ctaBand.secondary": "Preview workflow",
    "contact.title": "Start with the first ocean workflow",
    "contact.copy":
      "Begin with the ocean solution, then evaluate how fleet monitoring, edge evidence review and observer workflows connect to existing operations before expanding pilot, deployment and commercial details.",
    "contact.point.one": "Ocean monitoring",
    "contact.point.two": "Electronic observer workflow",
    "contact.point.three": "Edge-to-cloud evidence review",
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
    "footer.copy": "Ocean EM operations platform for fleet monitoring, edge evidence review and observer workflows.",
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

const storyItems = {
  capture: {
    image: "assets/dashboard-hero.png",
    alt: "AlbatroVision dashboard with vessel state and edge evidence context",
    titleKey: "story.visual.capture.title",
    captionKey: "story.visual.capture.caption",
  },
  align: {
    image: "assets/demo-preview.png",
    alt: "AlbatroVision synchronized video evidence preview",
    titleKey: "story.visual.align.title",
    captionKey: "story.visual.align.caption",
  },
  decide: {
    image: "assets/manual-review.png",
    alt: "AlbatroVision human analysis workspace for observer review",
    titleKey: "story.visual.decide.title",
    captionKey: "story.visual.decide.caption",
  },
};

const demoPreviewItems = {
  dashboard: {
    image: "assets/dashboard-hero.png",
    alt: "AlbatroVision dashboard walkthrough preview",
    titleKey: "tourItems.dashboard.title",
    bodyKey: "demo.modal.dashboard.body",
  },
  review: {
    image: "assets/manual-review.png",
    alt: "AlbatroVision human review walkthrough preview",
    titleKey: "tourItems.review.title",
    bodyKey: "demo.modal.review.body",
  },
  reports: {
    image: "assets/reports-workspace.png",
    alt: "AlbatroVision report workspace walkthrough preview",
    titleKey: "tourItems.reports.title",
    bodyKey: "demo.modal.reports.body",
  },
};

let currentLocale = getStoredLocale();
let activeTourKey = "dashboard";
let activeStoryKey = "capture";
let activeDemoStepKey = "dashboard";

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

  document.querySelectorAll("[data-i18n-aria-label]").forEach((node) => {
    node.setAttribute("aria-label", t(node.dataset.i18nAriaLabel));
  });

  syncCustomSelectLabels();

  if (langToggle) {
    langToggle.setAttribute("aria-label", t("lang.toggle"));
    langToggle.setAttribute("aria-pressed", String(locale === "en"));
    langToggle.classList.toggle("is-en", locale === "en");
  }

  syncNavLabel();
  renderTour(activeTourKey);
  renderStory(activeStoryKey);
  renderDemoStep(activeDemoStepKey);
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
  const tourMedia = tourImage.closest(".tour-media");

  tourTabs.forEach((tab) => {
    const isActive = tab.dataset.tourTab === key;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });

  if (!reduceMotionQuery.matches) {
    tourMedia?.classList.add("is-swapping");
  }

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

  if (!reduceMotionQuery.matches) {
    window.setTimeout(() => {
      tourMedia?.classList.remove("is-swapping");
    }, 160);
  }
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

const revealItems = [
  ...document.querySelectorAll(
    [
      ".solution-strip .strip-grid > *",
      ".section-heading",
      ".module-card",
      ".readiness-grid article",
      ".evidence-timeline",
      ".tour-copy",
      ".tour-media",
      ".flow-list li",
      ".story-card",
      ".story-visual",
      ".command-board",
      ".scene-panel",
      ".demo-copy",
      ".video-frame",
      ".contact-cta-inner",
      ".contact-layout > div",
      ".contact-form",
    ].join(", "),
  ),
];

if (!reduceMotionQuery.matches && revealItems.length > 0) {
  document.documentElement.classList.add("motion-ready");

  revealItems.forEach((item, index) => {
    item.classList.add("reveal-item");
    item.style.setProperty("--reveal-delay", `${(index % 4) * 70}ms`);
  });

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );

    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }
}

document.documentElement.classList.add("entrance-ready");
window.requestAnimationFrame(() => {
  document.documentElement.classList.add("entrance-played");
});

const hero = document.querySelector(".hero");
const heroMedia = document.querySelector("[data-hero-media]");

if (hero && heroMedia && !reduceMotionQuery.matches) {
  let parallaxFrame = 0;

  const updateParallax = (event) => {
    if (parallaxFrame) return;
    parallaxFrame = window.requestAnimationFrame(() => {
      parallaxFrame = 0;
      const rect = hero.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 18;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 12;
      heroMedia.style.setProperty("--parallax-x", `${x.toFixed(2)}px`);
      heroMedia.style.setProperty("--parallax-y", `${y.toFixed(2)}px`);
    });
  };

  hero.addEventListener("pointermove", updateParallax);
  hero.addEventListener("pointerleave", () => {
    heroMedia.style.setProperty("--parallax-x", "0px");
    heroMedia.style.setProperty("--parallax-y", "0px");
  });
}

function initCurrentCanvas() {
  const canvas = document.querySelector("[data-current-canvas]");
  const context = canvas?.getContext("2d");
  if (!canvas || !context) return;

  let width = 0;
  let height = 0;
  let currentLines = [];
  let animationFrame = 0;

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = Math.max(1, Math.floor(rect.width));
    height = Math.max(1, Math.floor(rect.height));
    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    currentLines = Array.from({ length: Math.max(18, Math.floor(width / 58)) }, (_, index) => ({
      x: (index * 71) % width,
      y: (index * 43) % height,
      length: 90 + (index % 5) * 24,
      speed: 0.12 + (index % 4) * 0.035,
      alpha: 0.04 + (index % 5) * 0.014,
    }));
  };

  const draw = () => {
    context.clearRect(0, 0, width, height);
    currentLines.forEach((line) => {
      const gradient = context.createLinearGradient(line.x, line.y, line.x + line.length, line.y - 16);
      gradient.addColorStop(0, "rgba(200, 255, 244, 0)");
      gradient.addColorStop(0.48, `rgba(200, 255, 244, ${line.alpha})`);
      gradient.addColorStop(1, "rgba(143, 214, 62, 0)");

      context.strokeStyle = gradient;
      context.lineWidth = 1;
      context.beginPath();
      context.moveTo(line.x, line.y);
      context.bezierCurveTo(line.x + 28, line.y - 16, line.x + 58, line.y + 16, line.x + line.length, line.y - 6);
      context.stroke();

      if (!reduceMotionQuery.matches) {
        line.x += line.speed;
        line.y -= line.speed * 0.18;
        if (line.x > width + line.length) line.x = -line.length;
        if (line.y < -20) line.y = height + 20;
      }
    });

    if (!reduceMotionQuery.matches) {
      animationFrame = window.requestAnimationFrame(draw);
    }
  };

  resize();
  draw();

  const resizeObserver = new ResizeObserver(() => {
    window.cancelAnimationFrame(animationFrame);
    resize();
    draw();
  });
  resizeObserver.observe(canvas);
}

initCurrentCanvas();

const hotspots = [...document.querySelectorAll("[data-hotspot]")];

hotspots.forEach((hotspot) => {
  hotspot.addEventListener("click", (event) => {
    event.stopPropagation();
    const willActivate = !hotspot.classList.contains("is-active");
    hotspots.forEach((item) => item.classList.remove("is-active"));
    hotspot.classList.toggle("is-active", willActivate);
  });
});

document.addEventListener("pointerdown", (event) => {
  if (hotspots.length === 0) return;
  const target = event.target;
  if (!(target instanceof Node)) return;
  if (hotspots.some((hotspot) => hotspot.contains(target))) return;
  hotspots.forEach((hotspot) => hotspot.classList.remove("is-active"));
});

const evidenceSteps = [...document.querySelectorAll("[data-evidence-step]")];
const timelineProgress = document.querySelector("[data-timeline-progress]");

function setEvidenceStep(index) {
  if (evidenceSteps.length === 0) return;
  evidenceSteps.forEach((step, stepIndex) => {
    const isActive = stepIndex <= index;
    step.classList.toggle("is-active", isActive);
    step.setAttribute("aria-current", stepIndex === index ? "step" : "false");
  });
  timelineProgress?.style.setProperty("--timeline-progress", `${(index / Math.max(1, evidenceSteps.length - 1)) * 100}%`);
}

if (evidenceSteps.length > 0) {
  let evidenceIndex = 0;
  setEvidenceStep(evidenceIndex);

  if (!reduceMotionQuery.matches) {
    window.setInterval(() => {
      evidenceIndex = (evidenceIndex + 1) % evidenceSteps.length;
      setEvidenceStep(evidenceIndex);
    }, 1650);
  }
}

const liveCounters = [...document.querySelectorAll("[data-live-counter]")];

function updateLiveCounters() {
  liveCounters.forEach((counter) => {
    const min = Number(counter.dataset.min || counter.textContent || 0);
    const max = Number(counter.dataset.max || counter.textContent || min);
    const nextValue = Math.round(min + Math.random() * (max - min));
    counter.textContent = String(nextValue);
  });
}

if (liveCounters.length > 0 && !reduceMotionQuery.matches) {
  updateLiveCounters();
  window.setInterval(updateLiveCounters, 2200);
}

const storyCards = [...document.querySelectorAll("[data-story-card]")];
const storyImage = document.querySelector("[data-story-image]");
const storyTitle = document.querySelector("[data-story-title]");
const storyCaption = document.querySelector("[data-story-caption]");

function renderStory(key) {
  const item = storyItems[key];
  if (!item || !storyImage || !storyTitle || !storyCaption) return;

  activeStoryKey = key;
  storyCards.forEach((card) => {
    card.classList.toggle("is-active", card.dataset.storyCard === key);
  });
  storyImage.src = item.image;
  storyImage.alt = item.alt;
  storyTitle.textContent = t(item.titleKey);
  storyCaption.textContent = t(item.captionKey);
}

storyCards.forEach((card) => {
  card.addEventListener("click", () => renderStory(card.dataset.storyCard));
});

if ("IntersectionObserver" in window && storyCards.length > 0) {
  const storyObserver = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visibleEntry) {
        renderStory(visibleEntry.target.dataset.storyCard);
      }
    },
    { rootMargin: "-24% 0px -36% 0px", threshold: [0.24, 0.48, 0.72] },
  );

  storyCards.forEach((card) => storyObserver.observe(card));
}

const demoModal = document.querySelector("[data-demo-modal]");
const demoOpenButtons = [...document.querySelectorAll("[data-demo-open]")];
const demoCloseButtons = [...document.querySelectorAll("[data-demo-close]")];
const demoStepButtons = [...document.querySelectorAll("[data-demo-step]")];
const demoModalImage = document.querySelector("[data-demo-modal-image]");
const demoModalTitle = document.querySelector("[data-demo-modal-title]");
const demoModalBody = document.querySelector("[data-demo-modal-body]");
let lastFocusedElement = null;

function renderDemoStep(key) {
  const item = demoPreviewItems[key];
  const tourItem = tourItems[key]?.[currentLocale];
  if (!item || !tourItem || !demoModalImage || !demoModalTitle || !demoModalBody) return;

  activeDemoStepKey = key;
  demoStepButtons.forEach((button) => {
    const isActive = button.dataset.demoStep === key;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });
  demoModalImage.src = item.image;
  demoModalImage.alt = item.alt;
  demoModalTitle.textContent = tourItem.title;
  demoModalBody.textContent = t(item.bodyKey);
}

function openDemoModal() {
  if (!demoModal) return;
  lastFocusedElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;
  demoModal.hidden = false;
  document.body.classList.add("modal-open");
  renderDemoStep(activeDemoStepKey);
  demoModal.querySelector("[data-demo-close]")?.focus();
}

function closeDemoModal() {
  if (!demoModal || demoModal.hidden) return;
  demoModal.hidden = true;
  document.body.classList.remove("modal-open");
  lastFocusedElement?.focus();
}

demoOpenButtons.forEach((button) => {
  button.addEventListener("click", openDemoModal);
});

demoCloseButtons.forEach((button) => {
  button.addEventListener("click", closeDemoModal);
});

demoStepButtons.forEach((button) => {
  button.addEventListener("click", () => renderDemoStep(button.dataset.demoStep));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeDemoModal();
  }
});

function startFallbackVesselScene(canvas) {
  const context = canvas.getContext("2d");
  if (!context) return { stop() {} };

  let width = 0;
  let height = 0;
  let frame = 0;
  let animationFrame = 0;
  let stopped = false;

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = Math.max(1, Math.floor(rect.width));
    height = Math.max(1, Math.floor(rect.height));
    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
  };

  const draw = () => {
    context.clearRect(0, 0, width, height);
    const centerX = width * 0.5;
    const centerY = height * 0.54;
    const pulse = reduceMotionQuery.matches ? 0 : Math.sin(frame * 0.026) * 10;

    context.strokeStyle = "rgba(200, 255, 244, 0.18)";
    context.lineWidth = 1;
    [0, 1, 2].forEach((index) => {
      context.beginPath();
      context.ellipse(centerX, centerY, 150 + index * 42 + pulse, 58 + index * 14, -0.18, 0, Math.PI * 2);
      context.stroke();
    });

    for (let index = 0; index < 4; index += 1) {
      const angle = frame * 0.008 + index * Math.PI * 0.5;
      const laneX = centerX + Math.cos(angle) * 170;
      const laneY = centerY + Math.sin(angle) * 70;
      context.strokeStyle = "rgba(28, 224, 207, 0.34)";
      context.beginPath();
      context.moveTo(centerX, centerY);
      context.lineTo(laneX, laneY);
      context.stroke();
      context.fillStyle = "#9dff58";
      context.beginPath();
      context.arc(laneX, laneY, 5, 0, Math.PI * 2);
      context.fill();
    }

    context.save();
    context.translate(centerX, centerY);
    context.rotate(-0.08);
    context.fillStyle = "#10282c";
    context.strokeStyle = "rgba(200, 255, 244, 0.68)";
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(-82, 20);
    context.lineTo(68, 20);
    context.lineTo(96, 0);
    context.lineTo(68, -20);
    context.lineTo(-82, -20);
    context.closePath();
    context.fill();
    context.stroke();
    context.fillStyle = "#1ce0cf";
    context.fillRect(-26, -13, 54, 26);
    context.fillStyle = "rgba(255, 255, 255, 0.82)";
    context.fillRect(34, -8, 24, 16);
    context.restore();

    frame += 1;
    if (!stopped && !reduceMotionQuery.matches) {
      animationFrame = window.requestAnimationFrame(draw);
    }
  };

  resize();
  draw();

  const resizeObserver = new ResizeObserver(() => {
    resize();
    draw();
  });
  resizeObserver.observe(canvas);

  return {
    stop() {
      stopped = true;
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
    },
  };
}

function startThreeVesselScene(THREE, canvas, webglContext) {
  const originalConsoleError = console.error;
  console.error = (...args) => {
    if (String(args[0] || "").startsWith("THREE.WebGLRenderer")) return;
    originalConsoleError(...args);
  };

  let renderer;

  try {
    renderer = new THREE.WebGLRenderer({ canvas, context: webglContext, alpha: true, antialias: true });
  } finally {
    console.error = originalConsoleError;
  }

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  camera.position.set(0, 4.8, 8);
  camera.lookAt(0, 0, 0);

  scene.add(new THREE.AmbientLight(0x9eece4, 1.4));
  const keyLight = new THREE.DirectionalLight(0xffffff, 2.4);
  keyLight.position.set(3, 6, 5);
  scene.add(keyLight);

  const vessel = new THREE.Group();
  const hullMaterial = new THREE.MeshStandardMaterial({ color: 0x123034, roughness: 0.58, metalness: 0.18 });
  const accentMaterial = new THREE.MeshStandardMaterial({ color: 0x1ce0cf, roughness: 0.35, metalness: 0.24 });
  const lightMaterial = new THREE.MeshBasicMaterial({ color: 0x9dff58 });

  const hull = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.42, 1.05), hullMaterial);
  hull.position.y = -0.12;
  vessel.add(hull);

  const bow = new THREE.Mesh(new THREE.ConeGeometry(0.55, 0.95, 4), hullMaterial);
  bow.rotation.z = -Math.PI / 2;
  bow.position.x = 2.02;
  bow.position.y = -0.12;
  vessel.add(bow);

  const deck = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.42, 0.68), accentMaterial);
  deck.position.set(-0.2, 0.36, 0);
  vessel.add(deck);

  const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 1.25, 12), accentMaterial);
  mast.position.set(0.48, 1.02, 0);
  vessel.add(mast);
  scene.add(vessel);

  const laneMaterial = new THREE.LineBasicMaterial({ color: 0x1ce0cf, transparent: true, opacity: 0.48 });
  const markers = [];
  for (let index = 0; index < 4; index += 1) {
    const points = [new THREE.Vector3(0, 0.35, 0), new THREE.Vector3(Math.cos(index * 1.57) * 3.2, 0.2, Math.sin(index * 1.57) * 1.7)];
    const lane = new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), laneMaterial);
    scene.add(lane);
    const marker = new THREE.Mesh(new THREE.SphereGeometry(0.08, 16, 16), lightMaterial);
    scene.add(marker);
    markers.push({ marker, angle: index * 1.57 });
  }

  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(2.4, 0.01, 8, 100),
    new THREE.MeshBasicMaterial({ color: 0xc8fff4, transparent: true, opacity: 0.18 }),
  );
  ring.rotation.x = Math.PI / 2;
  scene.add(ring);

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    const width = Math.max(1, Math.floor(rect.width));
    const height = Math.max(1, Math.floor(rect.height));
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(canvas);
  resize();

  renderer.setAnimationLoop(() => {
    const time = performance.now() * 0.001;
    vessel.rotation.y = Math.sin(time * 0.35) * 0.18;
    ring.rotation.z = time * 0.18;
    markers.forEach(({ marker, angle }) => {
      marker.position.set(Math.cos(time * 0.7 + angle) * 3.2, 0.22, Math.sin(time * 0.7 + angle) * 1.7);
    });
    renderer.render(scene, camera);
  });
}

function canUseWebGL() {
  try {
    const testCanvas = document.createElement("canvas");
    return Boolean(testCanvas.getContext("webgl2") || testCanvas.getContext("webgl"));
  } catch {
    return false;
  }
}

function getVesselWebGLContext(canvas) {
  const options = { alpha: true, antialias: true };
  try {
    return canvas.getContext("webgl2", options) || canvas.getContext("webgl", options);
  } catch {
    return null;
  }
}

function replaceSceneCanvas(canvas) {
  const fallbackCanvas = canvas.cloneNode(false);
  canvas.replaceWith(fallbackCanvas);
  return fallbackCanvas;
}

function initVesselScene() {
  const canvas = document.querySelector("[data-vessel-scene]");
  if (!canvas) return;

  if (reduceMotionQuery.matches || !canUseWebGL()) {
    startFallbackVesselScene(canvas);
    return;
  }

  let sceneStarted = false;
  const startFallback = (targetCanvas = canvas) => {
    if (sceneStarted) return;
    sceneStarted = true;
    startFallbackVesselScene(targetCanvas);
  };
  const importTimeout = new Promise((_, reject) => {
    window.setTimeout(() => reject(new Error("Three.js import timed out")), 1800);
  });

  Promise.race([import("https://unpkg.com/three@0.165.0/build/three.module.js"), importTimeout])
    .then((THREE) => {
      if (sceneStarted) return;
      const webglContext = getVesselWebGLContext(canvas);
      if (!webglContext) {
        startFallback();
        return;
      }

      try {
        startThreeVesselScene(THREE, canvas, webglContext);
        sceneStarted = true;
      } catch {
        startFallback(replaceSceneCanvas(canvas));
      }
    })
    .catch(() => {
      startFallback();
    });
}

initVesselScene();

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
