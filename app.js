/* =========================================================
   ✅ FULL FINAL app.js
   - Dashboard + Projects + Clients + Resume + Contact
   - Projects: multi-image auto slider (left-right-left)
   - Projects: GitHub link support
   - Desc supports array -> bullet list
   - Clients mini shows ALL
========================================================= */

/* ================================
   ✅ DEFAULT DATA
================================ */
if (window.Chart && window.ChartDataLabels) {
  Chart.register(ChartDataLabels);
}
const DEFAULT_DATA = {
  profile: {
    name: "Gaurav Ravindra Pujari",

    summaryText: `Data Science and Analytics Professional with 1+ year of experience 
delivering 10+ end-to-end analytics and machine learning projects across Retail, FMCG, Pharmaceutical,
Venture Capital, and Marketing domains. Strong expertise in SQL, data cleaning, exploratory data analysis (EDA),
dashboard development, KPI reporting, and business intelligence solutions using Power BI and Tableau. 
Proven ability to translate complex datasets into actionable business insights, automate reporting workflows, 
and support data-driven decision-making for cross-functional stakeholders.`,

    email: "gauravpujari2002@gmail.com",
    phone: "+91 8483959447",
    linkedin: "https://www.linkedin.com/in/gaurav-pujari-90296a1ba",
    github: "https://github.com/Gaurav-pujari/",

    photo: "./Profile Photo.jpg",
  },

  stats: {
    completedProjects: 10,
    ongoingProjects: 1,
    dashboardsBuilt: 23,
    hoursDelivered: 1200,
    reportsAutomated: 23,
    domainBreakdown: {
      Pharma: 1,
      FMCG: 2,
      Retail: 2,
      Marketing: 1,
      "Venture Capital": 1,
      "Manufacturing & Packaging": 1,
    },
  },

  experience: [
    {
      id: "exp1",
      company: "Fire AI",
      title: "Associate Data Science & Analytics",
      location: "Mumbai, India",
      start: "03/2025",
      end: "10/2025",
      points: [
        "Delivered 10+ end-to-end analytics and reporting projects across Retail, FMCG, Pharma, Marketing, and Venture Capital",
        "Data cleaning, transformation, and validation using SQL and Excel to improve accuracy",
        "Built interactive dashboards in Power BI and Tableau for KPI tracking and performance monitoring",
        "Automated recurring MIS reports to reduce manual effort and turnaround time",
        "Performed EDA to identify trends, anomalies, and performance gaps",
      ],
      toolsUsed: [
        "Power BI",
        "Tableau",
        "SQL",
        "Python",
        "Excel",
        "PostgreSQL",
        "MySQL",
        "SQL Server",
      ],
    },
    {
      id: "exp2",
      company: "Fire AI",
      title: "Data Scientist Intern",
      location: "Pune, India",
      start: "10/2024",
      end: "03/2025",
      points: [
        "Built ML + analytics solutions: preprocessing, feature engineering, evaluation",
        "Improved model performance by 15–20% via tuning and feature optimization",
        "Demand forecasting + inventory optimization reducing excess inventory by ~18%",
        "Implemented monitoring and automated retraining workflows",
      ],
      toolsUsed: [
        "Python",
        "Machine Learning",
        "Time Series",
        "Regression",
        "Classification",
        "Clustering",
      ],
    },
  ],

  clients: [
    { id: "c1", name: "Noise", logo: "./Noise Logo.jpg" },
    { id: "c2", name: "Living Liquidz", logo: "./Living Liquidz.png" },
    { id: "c3", name: "Inflection Point Venture (IPV)", logo: "./ipventures.jpg"},
    { id: "c4", name: "GSN Groups", logo: "./gsn groups.png" },
    { id: "c5", name: "Coolfi", logo: "./coolfi.png" },
    { id: "c6", name: "Daffoworth Pharmaceutical Pvt Ltd", logo: "./daffoworth.jpg" },
  ],

  projects: [
    {
      id: "p1",
      title: "Marketing Analytics Report",
      desc: [
        "Built end-to-end marketing performance dashboard with drill-down analysis",
        "Created advanced DAX measures including MTD, YTD, ROAS, ROMI, CTR, CPC",
        "Enabled campaign performance tracking by region, product, and customer segment",
        "Improved marketing ROI visibility through interactive reporting",
      ],
      stack: ["Power BI", "DAX", "Excel"],
      images: ["./marketing 1.png", "./marketing2.png", "./marketing3.png"],
      github: "https://github.com/Gaurav-pujari",
    },

    {
      id: "p2",
      title: "Pharma Analytics Insights Dashboard",
      desc: [
        "Designed star-schema data model and performed full data cleansing",
        "Built MoM, DRR, ROMI, and Collection Efficiency metrics using DAX",
        "Delivered state-level and product-level performance dashboards",
      ],
      stack: ["Power BI", "DAX", "Excel"],
      images: ["./Pharma1.png", "./Pharma2.png", "./Pharma3.png", "./Pharma4.png"],
      github: "https://github.com/Gaurav-pujari",
    },

    {
      id: "p3",
      title: "UT Mart Sales Analytics Dashboard",
      desc: [
        "Developed interactive Tableau dashboard for category and region-wise sales analysis",
        "Created KPI metrics, trend visuals, and geo-maps for decision support",
        "Enabled drill-down insights for product and state performance",
      ],
      stack: ["Tableau", "Excel"],
      images: ["./UT MART.png"],
      github: "https://github.com/Gaurav-pujari",
    },

    {
      id: "p4",
      title: "Superstore Business Performance Dashboard",
      desc: [
        "Built KPI dashboards covering Sales, Profit, Orders, and Quantity metrics",
        "Added dynamic filters for region, segment, and category analysis",
        "Improved reporting usability and executive-level visibility",
      ],
      stack: ["Tableau", "Excel"],
      images: ["./Superstore1.png", "./superstore2.png", "./superstore3.png"],
      github: "https://github.com/Gaurav-pujari",
    },
  ],

  education: [
    { id: "edu1", degree: "Master of Computer Applications (MCA)", institute: "Sri Balaji University, Pune", year: "04/2025", score: "CGPA: 8.56" },
    { id: "edu2", degree: "Bachelor of Business Administration (Computer Applications)", institute: "Dr. D.Y. Patil ACS College, Pune", year: "04/2023", score: "CGPA: 9.48" },
  ],

  skills: {
    "BI Visualization Tools": ["Power BI", "Tableau", "Looker Studio", "Microsoft Excel"],
    Programming: ["Python", "SQL", "PL/SQL", "R programming"],
    Databases: ["PostgreSQL", "MySQL", "SQL Server", "ClickHouse"],
    "Big Data": ["Apache Spark", "PySpark"],
    "Other Tools": ["Git/GitHub", "Docker", "Amazon Web Services", "Google Cloud Platform"],
  },

  certifications: [
    "Databricks Certified Associate Developer for Apache Spark 3.0",
    "IBM Data Analyst Professional Certificate",
    "SQL Advanced Certificate",
    "SQL Intermediate Certificate",
  ],

  resume: {
    fileName: "Resume.pdf",
    fileUrl: "./assets/Resume.pdf",
    updatedOn: "2026-02-13",
  },
};

/* ================================
   ✅ Storage
================================ */
const LS_KEY = "gaurav_static_site_data_v1";
const THEME_KEY = "gaurav_static_theme_v1";

/* ================================
   Helpers
================================ */
function getData() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return structuredClone(DEFAULT_DATA);

    const saved = JSON.parse(raw);

    return {
      ...structuredClone(DEFAULT_DATA),
      ...saved,
      profile: { ...DEFAULT_DATA.profile, ...(saved.profile || {}) },
      stats: { ...DEFAULT_DATA.stats, ...(saved.stats || {}) },
      resume: { ...DEFAULT_DATA.resume, ...(saved.resume || {}) },

      experience: Array.isArray(saved.experience) ? saved.experience : DEFAULT_DATA.experience,
      clients: Array.isArray(saved.clients) ? saved.clients : DEFAULT_DATA.clients,
      projects: Array.isArray(saved.projects) ? saved.projects : DEFAULT_DATA.projects,
      education: Array.isArray(saved.education) ? saved.education : DEFAULT_DATA.education,

      certifications: Array.isArray(saved.certifications) ? saved.certifications : DEFAULT_DATA.certifications,
      skills: saved.skills ? saved.skills : DEFAULT_DATA.skills,
    };
  } catch {
    return structuredClone(DEFAULT_DATA);
  }
}

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(THEME_KEY, theme);
}

function initTheme() {
  const t = localStorage.getItem(THEME_KEY) || "dark";
  setTheme(t);

  const btn = document.querySelector("[data-theme-toggle]");
  if (btn) {
    btn.textContent = t === "dark" ? "Light" : "Dark";

    btn.onclick = () => {
      const next =
        document.documentElement.getAttribute("data-theme") === "dark"
          ? "light"
          : "dark";

      setTheme(next);
      btn.textContent = next === "dark" ? "Light" : "Dark";

      if (typeof renderDonut === "function") renderDonut();
    };
  }
}

function setActiveNav() {
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((a) => {
    const href = a.getAttribute("href");
    a.classList.toggle("active", href === path);
  });
}

function el(id) {
  return document.getElementById(id);
}

/* ================================
   Render List
================================ */
function renderList(items, container, type) {
  if (!container) return;
  container.innerHTML = "";

  items.forEach((item) => {
    const d = document.createElement("div");
    d.className = "item";

    /* ---------------- CLIENT ---------------- */
    if (type === "client") {
      d.innerHTML = `
        <div class="client-row">
          <img class="client-logo" src="${item.logo}" alt="${item.name}" />
          <div style="flex:1">
            <div class="item-title">${item.name}</div>
            <div class="item-meta">${(item.toolsUsed || []).join(" • ")}</div>
          </div>
        </div>

        <div class="badges">
          ${(item.toolsUsed || []).slice(0, 8).map((t) => `<span class="badge">${t}</span>`).join("")}
        </div>
      `;
    }

    /* ---------------- PROJECT ---------------- */
    else if (type === "project") {
      const imgs = Array.isArray(item.images) ? item.images : [];

      const sliderHtml =
        imgs.length > 0
          ? `
            <div class="proj-slider" data-slider="${item.id}">
              <button class="proj-btn left" aria-label="Previous">&#10094;</button>

              <div class="proj-track">
                ${imgs
                  .map(
                    (img) => `
                      <div class="proj-slide">
                        <img src="${img}" alt="${item.title}" loading="lazy" />
                      </div>
                    `
                  )
                  .join("")}
              </div>

              <button class="proj-btn right" aria-label="Next">&#10095;</button>
            </div>
          `
          : "";

      const githubHtml = item.github
        ? `
          <a class="proj-github" href="${item.github}" target="_blank" rel="noreferrer">
            🔗 View on GitHub
          </a>
        `
        : `<div class="proj-github muted">(GitHub link not added)</div>`;

      d.innerHTML = `
        ${sliderHtml}

        <div class="item-title" style="margin-top:12px">${item.title}</div>
        <div class="item-meta">${(item.stack || []).join(" • ")}</div>

        <div class="item-desc">
          ${
            Array.isArray(item.desc)
              ? `<ul class="desc-ul">${item.desc.map((x) => `<li>${x}</li>`).join("")}</ul>`
              : item.desc || ""
          }
        </div>

        <div class="badges">
          ${(item.stack || []).slice(0, 10).map((t) => `<span class="badge">${t}</span>`).join("")}
        </div>

        ${githubHtml}
      `;
    }

    /* ---------------- EDUCATION ---------------- */
    else if (type === "edu") {
      d.innerHTML = `
        <div class="item-title">${item.degree}</div>
        <div class="item-meta">${item.institute}</div>
        <div class="item-desc">${item.year} • ${item.score}</div>
      `;
    }

    /* ---------------- EXPERIENCE ---------------- */
    else if (type === "exp") {
      d.innerHTML = `
        <div class="item-title">${item.title}</div>
        <div class="item-meta">${item.company} • ${item.location} • ${item.start} - ${item.end}</div>

        <div class="item-desc">
          <ul style="margin:8px 0 0; padding-left:18px; color:var(--muted); line-height:1.7">
            ${(item.points || []).slice(0, 8).map((x) => `<li>${x}</li>`).join("")}
          </ul>

          <div class="badges">
            ${(item.toolsUsed || []).slice(0, 10).map((t) => `<span class="badge">${t}</span>`).join("")}
          </div>
        </div>
      `;
    }

    container.appendChild(d);
  });
}

/* ================================
   Skills Rendering
================================ */
function renderSkills() {
  const data = getData();

  const techWrap = el("techSkillsWrap");
  const softWrap = el("softSkillsWrap");

  if (!techWrap && !softWrap) return;

  if (techWrap) techWrap.innerHTML = "";
  if (softWrap) softWrap.innerHTML = "";

  const skillsObj = data.skills || {};

  if (techWrap) {
    Object.keys(skillsObj).forEach((category) => {
      const group = document.createElement("div");
      group.className = "skill-group";

      group.innerHTML = `
        <div class="skill-title">${category}</div>
        <div class="badges">
          ${(skillsObj[category] || []).map((s) => `<span class="badge">${s}</span>`).join("")}
        </div>
      `;

      techWrap.appendChild(group);
    });
  }

  const softSkills = [
    "Stakeholder Communication & Insight Presentation",
    "Business Requirement Understanding",
    "Analytical Thinking & Problem Solving",
    "Attention to Detail & Data Accuracy Focus",
    "Cross-Functional Collaboration",
    "Report Storytelling & Data Interpretation",
    "Decision Support & Insight Translation",
    "Time Management & Delivery Ownership",
    "Team Collaboration",
    "Client Interaction & Requirement Clarification",
  ];

  if (softWrap) {
    softSkills.forEach((s) => {
      const badge = document.createElement("span");
      badge.className = "badge";
      badge.textContent = s;
      softWrap.appendChild(badge);
    });
  }
}

/* ================================
   Dashboard Donut
================================ */
let donutChart = null;

function renderDonut() {
  const data = getData();
  const labels = Object.keys(data.stats.domainBreakdown || {});
  const values = Object.values(data.stats.domainBreakdown || {});
  const theme = document.documentElement.getAttribute("data-theme") || "dark";

  const palette = ["#4e79a7", "#f28e2b", "#e15759", "#76b7b2", "#59a14f", "#edc949", "#af7aa1", "#ff9da7"];

  const ctx = document.getElementById("donut");
  if (!ctx) return;

  if (donutChart) donutChart.destroy();

  donutChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels,
      datasets: [
        {
          data: values,
          backgroundColor: labels.map((_, i) => palette[i % palette.length]),
          borderColor: theme === "dark" ? "#0b0f19" : "#ffffff",
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "70%",
    plugins: {
  legend: {
    position: "bottom",
    labels: {
      color: theme === "dark" ? "#ffffff" : "#111111",
      font: { size: 13, weight: "600" },
      padding: 14,
      boxWidth: 14,
      boxHeight: 14,
    },
  },

  tooltip: {
    enabled: true,
    titleColor: theme === "dark" ? "#ffffff" : "#111111",
    bodyColor: theme === "dark" ? "#ffffff" : "#111111",
    backgroundColor: theme === "dark" ? "#0b1220" : "#ffffff",
    borderColor: theme === "dark" ? "#1f2937" : "#e5e7eb",
    borderWidth: 1,
  },

  datalabels: {
    color: theme === "dark" ? "#ffffff" : "#111111",
    font: {
      weight: "900",
      size: 12,
    },
    formatter: (value, ctx) => {
      const dataArr = ctx.chart.data.datasets[0].data;
      const total = dataArr.reduce((a, b) => a + b, 0);
      const pct = ((value / total) * 100).toFixed(0);
      return pct + "%";
    },
  },
},

    },
  });
}

/* ================================
   Dashboard Page Render
================================ */
function renderDashboard() {
  const data = getData();
  const p = data.profile;
  const s = data.stats;

  if (el("kpi1")) el("kpi1").textContent = s.completedProjects ?? 0;
  if (el("kpi2")) el("kpi2").textContent = s.ongoingProjects ?? 0;
  if (el("kpi3")) el("kpi3").textContent = s.dashboardsBuilt ?? 0;
  if (el("kpi4")) el("kpi4").textContent = s.hoursDelivered ?? 0;

  if (el("name")) el("name").textContent = p.name;
  if (el("summaryText")) el("summaryText").textContent = p.summaryText;

  if (el("miniEmail")) el("miniEmail").textContent = p.email;
  if (el("miniPhone")) el("miniPhone").textContent = p.phone;

  const img = el("photo");
  if (img) img.src = p.photo;

  if (el("lnkLinkedIn")) el("lnkLinkedIn").href = p.linkedin;
  if (el("lnkGitHub")) el("lnkGitHub").href = p.github;
  if (el("lnkEmail")) el("lnkEmail").href = `mailto:${p.email}`;

  if (el("expList")) renderList(data.experience || [], el("expList"), "exp");
  if (el("eduList")) renderList(data.education || [], el("eduList"), "edu");

  if (el("certList")) {
    el("certList").innerHTML = "";
    (data.certifications || []).forEach((c) => {
      const d = document.createElement("div");
      d.className = "item";
      d.innerHTML = `<div class="item-title">${c}</div>`;
      el("certList").appendChild(d);
    });
  }

  if (el("clientMini")) renderList(data.clients || [], el("clientMini"), "client");

  if (el("projectMini"))
    renderList((data.projects || []).slice(0, 4), el("projectMini"), "project");

  renderSkills();
  renderDonut();

  initProjectSliders();
}

/* ================================
   Clients Page
================================ */
function renderClientsPage() {
  const data = getData();
  const wrap = el("clientsList");
  if (!wrap) return;

  renderList(data.clients || [], wrap, "client");
}

/* ================================
   Projects Page
================================ */
function renderProjectsPage() {
  const data = getData();
  const wrap = el("projectsList");
  if (!wrap) return;

  renderList(data.projects || [], wrap, "project");

  initProjectSliders();
}

/* ================================
   Resume Page
================================ */
function renderResumePage() {
  const data = getData();
  const r = data.resume || {};

  if (el("resumeName")) el("resumeName").textContent = r.fileName || "Resume.pdf";
  if (el("resumeUpdated")) el("resumeUpdated").textContent = r.updatedOn || "-";

  if (el("resumeLink")) el("resumeLink").href = r.fileUrl || "./Resume.pdf";
  if (el("resumeDownload")) el("resumeDownload").href = r.fileUrl || "./Resume.pdf";

  // ✅ Preview 1
  if (el("resumeImg1")) {
    el("resumeImg1").src = r.previewImg1 || "./Resume_page-0001.jpg";
  }

  // ✅ Preview 2
  if (el("resumeImg2")) {
    el("resumeImg2").src = r.previewImg2 || "./Resume_page-0002.jpg";
  }
}



/* ================================
   Contact Page
================================ */
function renderContactPage() {
  const data = getData();
  const p = data.profile;

  if (el("contactEmail")) el("contactEmail").textContent = p.email;
  if (el("contactPhone")) el("contactPhone").textContent = p.phone;

  if (el("contactLinkedIn")) el("contactLinkedIn").href = p.linkedin;
  if (el("contactGitHub")) el("contactGitHub").href = p.github;

  if (el("contactMailBtn")) el("contactMailBtn").href = `mailto:${p.email}`;
}

/* =========================================================
   ✅ REAL SLIDER (Auto + Arrows + Pause)
========================================================= */
function initProjectSliders() {
  document.querySelectorAll(".proj-slider").forEach((slider) => {
    const track = slider.querySelector(".proj-track");
    const leftBtn = slider.querySelector(".proj-btn.left");
    const rightBtn = slider.querySelector(".proj-btn.right");

    if (!track) return;

    // Arrow scroll
    const step = 420;

    if (leftBtn) {
      leftBtn.onclick = () => {
        track.scrollBy({ left: -step, behavior: "smooth" });
      };
    }

    if (rightBtn) {
      rightBtn.onclick = () => {
        track.scrollBy({ left: step, behavior: "smooth" });
      };
    }

    // Auto scroll
    let direction = 1;
    let paused = false;

    slider.addEventListener("mouseenter", () => (paused = true));
    slider.addEventListener("mouseleave", () => (paused = false));
    slider.addEventListener("touchstart", () => (paused = true), { passive: true });
    slider.addEventListener("touchend", () => (paused = false), { passive: true });

    function autoStep() {
      if (!paused) {
        track.scrollLeft += 0.8 * direction;

        if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 2) {
          direction = -1;
        }
        if (track.scrollLeft <= 0) {
          direction = 1;
        }
      }
      requestAnimationFrame(autoStep);
    }

    requestAnimationFrame(autoStep);
  });
}

/* ================================
   Boot
================================ */
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  setActiveNav();

  const page = document.body.getAttribute("data-page");

  if (page === "dashboard") renderDashboard();
  if (page === "clients") renderClientsPage();
  if (page === "projects") renderProjectsPage();
  if (page === "resume") renderResumePage();
  if (page === "contact") renderContactPage();

  initProjectSliders();
});
