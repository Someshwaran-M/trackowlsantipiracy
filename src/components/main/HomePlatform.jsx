
import React, { useState } from "react";

const navigation = [
  { id: "dashboard", label: "Dashboard", icon: "layers" },
  { id: "scan", label: "Live scanning", icon: "scan" },
  { id: "evidence", label: "Evidence", icon: "file" },
  { id: "reports", label: "Analytics", icon: "chart" },
];

const cases = [
  {
    id: "TW-1042",
    description: "Sample film · Release window",
    channel: "Website",
    status: "Verified",
    tone: "green",
  },
  {
    id: "TW-1043",
    description: "Sample event · Live broadcast",
    channel: "Video",
    status: "Submitted",
    tone: "amber",
  },
  {
    id: "TW-1044",
    description: "Sample brand · Logo misuse",
    channel: "Marketplace",
    status: "Review",
    tone: "blue",
  },
];

const stats = [
  { label: "Monitored assets", value: "2,480", change: "+12.8%" },
  { label: "Evidence verified", value: "186", change: "+8.4%" },
  { label: "Cases in review", value: "24", change: "Active" },
];

function Icon({ name, size = 18, className = "" }) {
  const paths = {
    layers: (
      <>
        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
      </>
    ),
    scan: (
      <>
        <path d="M8 3H5a2 2 0 0 0-2 2v3m13-5h3a2 2 0 0 1 2 2v3M3 16v3a2 2 0 0 0 2 2h3m8 0h3a2 2 0 0 0 2-2v-3" />
        <circle cx="12" cy="12" r="4" />
        <path d="M12 10v4m-2-2h4" />
      </>
    ),
    file: (
      <>
        <path d="M7 3h7l5 5v13H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
        <path d="M14 3v6h5M9 14h6m-6 4h6" />
      </>
    ),
    chart: (
      <>
        <path d="M3 3v18h18M7 14l4-4 4 3 5-7" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 20 6v5c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-3Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    lock: (
      <>
        <rect x="5" y="10" width="14" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      </>
    ),
    arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name] || paths.layers}
    </svg>
  );
}

function StatusBadge({ tone, children }) {
  const styles = {
    green: "bg-[#B7F500]/15 text-[#587C00]",
    amber: "bg-amber-50 text-amber-700",
    blue: "bg-sky-50 text-sky-700",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-2 py-1 text-[9px] font-medium ${
        styles[tone] || styles.green
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {children}
    </span>
  );
}

function DashboardPanel() {
  return (
    <>
      <div className="grid grid-cols-3 gap-2.5">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="min-w-0 rounded-2xl border border-[#E5EBDD] bg-white p-3 transition duration-300 hover:-translate-y-0.5 hover:border-[#B7F500] hover:shadow-md sm:p-4"
          >
            <p className="text-[9px] leading-relaxed text-[#78816F] sm:text-[10px]">
              {stat.label}
            </p>
            <p className="mt-2 text-lg font-semibold tracking-tight text-[#172016] sm:text-2xl">
              {stat.value}
            </p>
            <p className="mt-1.5 text-[9px] font-medium text-[#638800]">
              {stat.change}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <div className="mb-3 flex items-center justify-between gap-2">
          <h4 className="text-xs font-semibold text-[#172016]">
            Recent enforcement cases
          </h4>
          <span className="text-[9px] text-[#8A9383]">Sample records</span>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-[#E5EBDD]">
          <div className="min-w-[360px]">
            <div className="grid grid-cols-[1.4fr_0.7fr_auto] gap-2 bg-[#F5F8F0] px-3 py-3">
              {["Case / asset", "Channel", "Status"].map((item) => (
                <span
                  key={item}
                  className="text-[9px] font-medium text-[#78816F]"
                >
                  {item}
                </span>
              ))}
            </div>

            {cases.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-[1.4fr_0.7fr_auto] items-center gap-2 border-t border-[#EDF0E8] px-3 py-3 transition hover:bg-[#FAFCF7]"
              >
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold text-[#20291D]">
                    {item.id}
                  </p>
                  <p className="mt-1 truncate text-[9px] text-[#818A7B]">
                    {item.description}
                  </p>
                </div>
                <span className="text-[9px] text-[#687361]">
                  {item.channel}
                </span>
                <StatusBadge tone={item.tone}>{item.status}</StatusBadge>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function ScanPanel() {
  return (
    <div className="grid gap-4 sm:grid-cols-[1fr_0.9fr]">
      <div className="relative flex min-h-[220px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-[#E0E9D4] bg-gradient-to-br from-[#F5F9ED] to-white">
        <div className="scan-orbit absolute h-36 w-36 rounded-full border border-[#A4D51C]/40" />
        <div className="scan-orbit scan-delay absolute h-24 w-24 rounded-full border border-[#A4D51C]/50" />

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#B7F500] text-[#172016] shadow-[0_8px_25px_rgba(183,245,0,0.25)]">
          <Icon name="scan" size={26} />
        </div>

        <p className="mt-5 text-sm font-semibold text-[#172016]">
          Monitoring engine
        </p>
        <p className="mt-1 text-[10px] text-[#78816F]">
          Scanning workflow preview
        </p>

        <div className="mt-4 flex items-center gap-2 text-[10px] text-[#638800]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#91C900]" />
          Interface demonstration
        </div>
      </div>

      <div className="space-y-3">
        {[
          ["01", "Asset discovery", "Identify monitored assets"],
          ["02", "Content matching", "Review potential matches"],
          ["03", "Threat assessment", "Evaluate findings"],
        ].map(([num, title, desc], i) => (
          <div
            key={num}
            className="flex items-start gap-3 rounded-2xl border border-[#E5EBDD] bg-white p-3"
          >
            <span
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-[10px] font-semibold ${
                i === 0
                  ? "bg-[#B7F500]/25 text-[#526F00]"
                  : "bg-[#F3F6EE] text-[#77816E]"
              }`}
            >
              {num}
            </span>
            <div>
              <p className="text-[11px] font-semibold text-[#20291D]">
                {title}
              </p>
              <p className="mt-1 text-[9px] leading-relaxed text-[#818A7B]">
                {desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EvidencePanel() {
  return (
    <div className="space-y-3">
      {[
        ["Evidence package", "TW-1042", "Verified", "green"],
        ["Submission record", "TW-1043", "Submitted", "amber"],
        ["Review history", "TW-1044", "In review", "blue"],
      ].map(([title, id, status, tone]) => (
        <div
          key={id}
          className="flex items-center gap-3 rounded-2xl border border-[#E5EBDD] bg-white p-4 transition hover:border-[#B7F500] hover:shadow-sm"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F0F6E6] text-[#638800]">
            <Icon name="file" size={19} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold text-[#20291D]">{title}</p>
            <p className="mt-1 text-[10px] text-[#818A7B]">{id}</p>
          </div>
          <StatusBadge tone={tone}>{status}</StatusBadge>
        </div>
      ))}

      <p className="pt-2 text-[10px] leading-relaxed text-[#818A7B]">
        Illustrative evidence records. Actual evidence depends on the connected
        workflow.
      </p>
    </div>
  );
}

function ReportsPanel() {
  const bars = [36, 56, 42, 73, 51, 86, 64, 95, 67, 80, 57, 91];

  return (
    <div className="rounded-2xl border border-[#E5EBDD] bg-white p-4 sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold text-[#20291D]">
            Monitoring activity
          </p>
          <p className="mt-1 text-[10px] text-[#818A7B]">
            Illustrative activity distribution
          </p>
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F0F6E6] text-[#638800]">
          <Icon name="chart" />
        </div>
      </div>

      <div className="mt-8 flex h-36 items-end gap-2">
        {bars.map((height, i) => (
          <div key={i} className="flex h-full flex-1 items-end">
            <div
              className="report-bar w-full rounded-t-md bg-gradient-to-t from-[#8DBB00] to-[#C6F75B] transition hover:brightness-95"
              style={{
                height: `${height}%`,
                animationDelay: `${i * 55}ms`,
              }}
            />
          </div>
        ))}
      </div>

      <div className="mt-3 flex justify-between text-[9px] text-[#818A7B]">
        <span>Period start</span>
        <span>Period end</span>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-[#F5F8F0] p-3">
          <p className="text-[10px] text-[#78816F]">Evidence records</p>
          <p className="mt-2 text-xl font-semibold text-[#172016]">186</p>
        </div>
        <div className="rounded-xl bg-[#F5F8F0] p-3">
          <p className="text-[10px] text-[#78816F]">Open reviews</p>
          <p className="mt-2 text-xl font-semibold text-[#172016]">24</p>
        </div>
      </div>
    </div>
  );
}

function WorkspacePreview() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const active = navigation.find((item) => item.id === activeTab);

  return (
    <div className="overflow-hidden rounded-[24px] border border-[#E0E7D9] bg-white shadow-[0_24px_70px_rgba(46,64,29,0.09)]">
      <div className="flex items-center justify-between gap-3 border-b border-[#E9EDE3] bg-[#FCFDF9] px-4 py-3.5 sm:px-5">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#B7F500] text-[#172016]">
            <Icon name="shield" size={19} />
          </div>
          <div className="min-w-0">
            <p className="text-[11px] font-bold tracking-[0.12em] text-[#172016]">
              TRACKOWLS
            </p>
            <p className="mt-0.5 text-[9px] text-[#87907E]">
              Protection workspace
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-[#E0E9D4] bg-[#F4F8EB] px-2.5 py-1.5">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#91C900]" />
          <span className="text-[9px] font-medium text-[#587800]">
            System preview
          </span>
        </div>
      </div>

      <div className="flex min-h-[400px] sm:min-h-[455px]">
        <aside className="flex w-[54px] shrink-0 flex-col items-center gap-3 border-r border-[#E9EDE3] bg-[#FAFCF7] py-5 sm:w-[66px]">
          {navigation.map((item) => {
            const selected = activeTab === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(item.id)}
                title={item.label}
                aria-label={item.label}
                aria-pressed={selected}
                className={`group relative flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 sm:h-11 sm:w-11 ${
                  selected
                    ? "bg-[#B7F500] text-[#172016] shadow-[0_5px_15px_rgba(183,245,0,0.2)]"
                    : "text-[#89927F] hover:bg-[#EEF4E5] hover:text-[#526F00]"
                }`}
              >
                {selected && (
                  <span className="absolute -left-[8px] h-5 w-[3px] rounded-full bg-[#86B900] sm:-left-[9px]" />
                )}
                <Icon name={item.icon} size={19} />
              </button>
            );
          })}

          <div className="mt-auto flex h-9 w-9 items-center justify-center rounded-xl border border-[#E5EBDD] bg-white text-[#829071]">
            <Icon name="lock" size={16} />
          </div>
        </aside>

        <div className="min-w-0 flex-1 p-3 sm:p-5">
          <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#688C0A]">
                {active.label} · TrackOwls
              </p>
              <h3 className="mt-2 text-base font-semibold tracking-tight text-[#172016] sm:text-xl">
                {activeTab === "dashboard"
                  ? "Your cases. One clear view."
                  : activeTab === "scan"
                    ? "See potential threats sooner."
                    : activeTab === "evidence"
                      ? "Every record, traceable."
                      : "Insights with context."}
              </h3>
              <p className="mt-1.5 max-w-md text-[10px] leading-relaxed text-[#818A7B] sm:text-[11px]">
                {activeTab === "dashboard"
                  ? "An organized overview of monitored assets and case activity."
                  : activeTab === "scan"
                    ? "A visual preview of the content monitoring workflow."
                    : activeTab === "evidence"
                      ? "Review records and follow the history of each case."
                      : "Explore a sample view of monitoring and evidence activity."}
              </p>
            </div>

            <span className="rounded-lg border border-[#E5EBDD] bg-[#FAFCF7] px-2.5 py-2 text-[9px] text-[#818A7B]">
              Demo interface
            </span>
          </div>

          <div key={activeTab} className="panel-enter">
            {activeTab === "dashboard" && <DashboardPanel />}
            {activeTab === "scan" && <ScanPanel />}
            {activeTab === "evidence" && <EvidencePanel />}
            {activeTab === "reports" && <ReportsPanel />}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-[#E9EDE3] bg-[#FCFDF9] px-4 py-3 sm:px-5">
        <div className="flex min-w-0 items-center gap-2">
          <Icon name="shield" size={14} className="shrink-0 text-[#688C0A]" />
          <span className="truncate text-[9px] text-[#78816F]">
            Digital content protection
          </span>
        </div>
        <span className="shrink-0 text-[9px] text-[#A0A797]">
          Illustrative data
        </span>
      </div>
    </div>
  );
}

function MapPreview() {
  const nodes = [
    { id: "n1", x: 83, y: 75, label: "01" },
    { id: "n2", x: 207, y: 112, label: "02" },
    { id: "n3", x: 321, y: 55, label: "03" },
    { id: "n4", x: 424, y: 106, label: "04" },
    { id: "n5", x: 537, y: 62, label: "05" },
  ];

  const routes = [
    { id: "r1", d: "M83 75 Q145 39 207 112" },
    { id: "r2", d: "M207 112 Q270 139 321 55" },
    { id: "r3", d: "M321 55 Q378 34 424 106" },
    { id: "r4", d: "M424 106 Q488 130 537 62" },
    { id: "r5", d: "M83 75 Q310 183 537 62" },
    { id: "r6", d: "M207 112 Q321 177 424 106" },
  ];

  return (
    <div className="relative mt-5 overflow-hidden rounded-[24px] border border-[#DFE8D6] bg-white shadow-[0_18px_55px_rgba(53,73,32,0.07)]">
      <style>{`
        @keyframes owls-route-flow {
          to { stroke-dashoffset: -90; }
        }
        @keyframes owls-pulse {
          0%, 100% { opacity: .35; transform: scale(.85); }
          50% { opacity: 1; transform: scale(1.35); }
        }
        @keyframes owls-sweep {
          0% { transform: translateX(-130%); opacity: 0; }
          15% { opacity: .5; }
          85% { opacity: .5; }
          100% { transform: translateX(130%); opacity: 0; }
        }
        @keyframes owls-panel-enter {
          from { opacity: 0; transform: translateY(7px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes owls-bar-rise {
          from { transform: scaleY(.2); opacity: .3; }
          to { transform: scaleY(1); opacity: .9; }
        }
        .owls-route {
          stroke-dasharray: 7 11;
          animation: owls-route-flow 3.2s linear infinite;
        }
        .owls-route-slow {
          stroke-dasharray: 3 13;
          animation: owls-route-flow 5s linear infinite;
        }
        .owls-node-pulse {
          transform-box: fill-box;
          transform-origin: center;
          animation: owls-pulse 2.3s ease-in-out infinite;
        }
        .owls-map-sweep {
          animation: owls-sweep 7s ease-in-out infinite;
        }
        .panel-enter {
          animation: owls-panel-enter .32s ease-out both;
        }
        .scan-orbit {
          animation: owls-pulse 3s ease-in-out infinite;
        }
        .scan-delay {
          animation-delay: .8s;
        }
        .report-bar {
          transform-origin: bottom;
          animation: owls-bar-rise .65s ease-out both;
        }
        @media (prefers-reduced-motion: reduce) {
          .owls-route, .owls-route-slow, .owls-node-pulse,
          .owls-map-sweep, .panel-enter, .scan-orbit, .report-bar {
            animation: none !important;
          }
        }
      `}</style>

      <div className="pointer-events-none absolute -right-20 -top-28 h-64 w-64 rounded-full bg-[#B7F500]/[0.14] blur-[90px]" />
      <div className="pointer-events-none absolute -bottom-28 -left-16 h-56 w-56 rounded-full bg-[#B7F500]/[0.10] blur-[80px]" />

      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 px-4 pt-5 sm:px-6 sm:pt-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#8EBF00]" />
            <span className="text-[9px] font-bold uppercase tracking-[0.19em] text-[#668B00]">
              Global intelligence
            </span>
          </div>
          <h3 className="mt-2 text-lg font-semibold tracking-tight text-[#172016] sm:text-xl">
            One world. Connected protection.
          </h3>
          <p className="mt-1 max-w-md text-[10px] leading-relaxed text-[#77816F] sm:text-[11px]">
            Five monitoring points connected through an animated digital
            protection network.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-[#E0E9D4] bg-[#F6F9F0] px-3 py-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#91C900] opacity-50" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#91C900]" />
          </span>
          <span className="text-[9px] font-medium text-[#587800]">
            Network active
          </span>
        </div>
      </div>

      <div className="relative mt-2 h-[230px] sm:h-[285px]">
        {/* Visible world map background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "linear-gradient(rgba(117,151,79,.10) 1px, transparent 1px), linear-gradient(90deg, rgba(117,151,79,.10) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        <svg
          viewBox="0 0 620 200"
          preserveAspectRatio="xMidYMid meet"
          className="absolute inset-0 h-full w-full"
          role="img"
          aria-label="World map with five monitoring locations and animated connecting routes"
        >
          <defs>
            <linearGradient id="owlsLightLand" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#DDEBCB" />
              <stop offset="100%" stopColor="#EEF4E6" />
            </linearGradient>

            <radialGradient id="owlsLightGlow">
              <stop offset="0%" stopColor="#B7F500" stopOpacity=".65" />
              <stop offset="100%" stopColor="#B7F500" stopOpacity="0" />
            </radialGradient>

            <clipPath id="owlsLightMapClip">
              <rect x="0" y="0" width="620" height="200" />
            </clipPath>
          </defs>

          {/* Clearly visible continent silhouettes */}
          <g
            clipPath="url(#owlsLightMapClip)"
            fill="url(#owlsLightLand)"
            stroke="#B8CCA5"
            strokeWidth="1"
            strokeLinejoin="round"
          >
            {/* North America */}
            <path d="M39 43 56 29 81 26 97 34 112 29 131 40 146 55 155 70 143 83 128 86 122 104 109 119 103 143 91 151 83 132 75 120 70 102 54 91 43 72 32 64Z" />

            {/* Central America */}
            <path d="M118 112 135 116 147 128 141 136 131 130Z" />

            {/* South America */}
            <path d="M143 137 162 141 173 156 169 172 160 189 152 199 143 181 140 164 132 151Z" />

            {/* Europe */}
            <path d="M267 45 280 35 293 39 302 32 318 38 323 48 335 47 345 57 339 68 324 72 314 82 301 80 294 67 281 65 273 56Z" />

            {/* Africa */}
            <path d="M294 87 311 82 330 91 340 107 335 126 323 146 313 163 303 154 296 133 285 116 283 99Z" />

            {/* Asia */}
            <path d="M334 43 350 34 373 36 389 29 414 35 435 31 456 39 479 36 503 47 524 43 546 55 563 68 554 81 534 82 518 91 499 85 483 96 465 90 450 102 433 96 418 106 400 99 388 87 368 87 352 77 338 68Z" />

            {/* India */}
            <path d="M393 94 406 96 414 112 409 129 402 136 396 121 390 108Z" />

            {/* Southeast Asia */}
            <path d="M435 111 451 116 461 126 453 132 443 125Z" />

            {/* Japan */}
            <path d="M531 88 537 94 535 104 530 99Z" />

            {/* Australia */}
            <path d="M472 143 490 137 509 144 518 158 510 171 492 175 478 165 468 153Z" />

            {/* Greenland */}
            <path d="M158 22 173 14 189 20 185 37 173 45 161 36Z" />
          </g>

          {/* Soft geographic grid */}
          <g
            clipPath="url(#owlsLightMapClip)"
            stroke="#8EAA70"
            strokeWidth=".6"
            strokeOpacity=".28"
            fill="none"
          >
            <path d="M20 50H600M20 100H600M20 150H600" />
            <path d="M100 12V190M200 12V190M300 12V190M400 12V190M500 12V190" />
          </g>

          {/* Animated connections */}
          <g
            clipPath="url(#owlsLightMapClip)"
            fill="none"
            strokeLinecap="round"
          >
            {routes.map((route, i) => (
              <g key={route.id}>
                <path
                  d={route.d}
                  stroke="#9CCB32"
                  strokeWidth="2.8"
                  strokeOpacity=".18"
                />
                <path
                  d={route.d}
                  stroke="#80AF00"
                  strokeWidth="1.5"
                  strokeOpacity=".9"
                  className={i % 2 === 0 ? "owls-route" : "owls-route-slow"}
                  style={{ animationDelay: `${i * -0.7}s` }}
                />
              </g>
            ))}

            {routes.map((route, i) => (
              <circle key={`particle-${route.id}`} r="3" fill="#7DAE00">
                <animateMotion
                  dur={`${3.2 + i * 0.45}s`}
                  repeatCount="indefinite"
                  begin={`${i * -0.7}s`}
                  path={route.d}
                />
              </circle>
            ))}
          </g>

          {/* Five map markers */}
          {nodes.map((node, i) => (
            <g key={node.id}>
              <circle
                cx={node.x}
                cy={node.y}
                r="23"
                fill="url(#owlsLightGlow)"
                className="owls-node-pulse"
                style={{ animationDelay: `${i * 0.35}s` }}
              />
              <circle
                cx={node.x}
                cy={node.y}
                r="9"
                fill="#FFFFFF"
                stroke="#80AF00"
                strokeWidth="1.7"
              />
              <circle cx={node.x} cy={node.y} r="4" fill="#8BBE00" />
              <text
                x={node.x}
                y={node.y - 15}
                fill="#587800"
                fontSize="9"
                fontWeight="700"
                textAnchor="middle"
              >
                {node.label}
              </text>
            </g>
          ))}

          {/* A moving scanning beam */}
          <g className="owls-map-sweep" opacity=".55">
            <path
              d="M0 0V200"
              stroke="#84B500"
              strokeWidth="1.5"
            />
            <path
              d="M0 0V200"
              stroke="#B7F500"
              strokeWidth="16"
              strokeOpacity=".13"
            />
          </g>
        </svg>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white/80 to-transparent" />
      </div>

      <div className="relative z-10 grid grid-cols-3 border-t border-[#E7EDDF] bg-[#FCFDF9] sm:grid-cols-5">
        {[
          ["05", "Network points"],
          ["LIVE", "Route activity"],
          ["24/7", "Monitoring model"],
          ["01", "Connected network"],
          ["SECURE", "Protection focus"],
        ].map(([value, label], i) => (
          <div
            key={label}
            className={`px-3 py-3.5 sm:px-4 sm:py-4 ${
              i > 2 ? "hidden sm:block" : ""
            } ${i > 0 ? "border-l border-[#E7EDDF]" : ""}`}
          >
            <p className="text-xs font-bold tracking-tight text-[#587800] sm:text-sm">
              {value}
            </p>
            <p className="mt-1 text-[8px] leading-relaxed text-[#818A7B] sm:text-[9px]">
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function HomePlatform() {
  return (
    <section
      id="home-platform"
      className="relative isolate w-full overflow-hidden bg-[#F8FAF5] font-['Roboto',sans-serif] text-[#172016]"
    >
      <div className="pointer-events-none absolute -left-48 top-20 h-[420px] w-[420px] rounded-full bg-[#B7F500]/[0.12] blur-[120px]" />
      <div className="pointer-events-none absolute -right-48 bottom-10 h-[440px] w-[440px] rounded-full bg-[#B7F500]/[0.09] blur-[130px]" />

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.76fr_1.24fr] lg:gap-14 lg:px-12 lg:py-28">
        <div className="min-w-0">
          <div className="mb-6 flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#DDE8CE] bg-white text-[#648800] shadow-sm">
              <Icon name="shield" size={18} />
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#648800]">
              The TrackOwls platform
            </span>
          </div>

          <h2 className="max-w-[520px] text-[38px] font-semibold leading-[1.1] tracking-[-0.055em] text-[#172016] sm:text-5xl lg:text-[58px]">
            See the threat.
            <br />
            <span className="text-[#648800]">Own the response.</span>
          </h2>

          <p className="mt-6 max-w-[430px] text-[13px] leading-[1.95] text-[#697363] sm:text-sm">
            Bring digital asset monitoring, evidence management, case
            workflows, and enforcement reporting into one connected protection
            experience.
          </p>

          <div className="mt-8 space-y-5">
            {[
              {
                icon: "layers",
                title: "Connected case management",
                desc: "Keep findings, assets, and response workflows together.",
              },
              {
                icon: "file",
                title: "Traceable evidence",
                desc: "Maintain a structured record of findings and actions.",
              },
              {
                icon: "chart",
                title: "Actionable reporting",
                desc: "Turn case activity into clear, organized insights.",
              },
            ].map((feature) => (
              <div key={feature.title} className="group flex items-start gap-4">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#E0E8D7] bg-white text-[#648800] shadow-sm transition duration-300 group-hover:border-[#B7F500] group-hover:bg-[#F0F8DF]">
                  <Icon name={feature.icon} size={18} />
                </div>
                <div>
                  <h3 className="text-[12px] font-semibold text-[#20291D] sm:text-[13px]">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 max-w-[350px] text-[11px] leading-[1.8] text-[#77816F] sm:text-xs">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="/platform"
            className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#B7F500] px-5 py-3.5 text-[11px] font-bold text-[#172016] transition duration-300 hover:bg-[#C9FA36] hover:shadow-[0_8px_25px_rgba(137,184,0,0.18)]"
          >
            Explore the platform
            <Icon
              name="arrow"
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

          <div className="mt-8 flex items-center gap-3 text-[10px] text-[#818A7B]">
            <Icon name="lock" size={14} className="text-[#648800]" />
            Designed for structured digital protection workflows
          </div>
        </div>

        <div className="min-w-0">
          <WorkspacePreview />
          <MapPreview />
        </div>
      </div>

      <style>{`
        @keyframes owls-panel-enter {
          from { opacity: 0; transform: translateY(7px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes owls-pulse {
          0%, 100% { opacity: .35; transform: scale(.85); }
          50% { opacity: 1; transform: scale(1.35); }
        }
        @keyframes owls-bar-rise {
          from { transform: scaleY(.2); opacity: .3; }
          to { transform: scaleY(1); opacity: .9; }
        }
        .panel-enter {
          animation: owls-panel-enter .32s ease-out both;
        }
        .scan-orbit {
          animation: owls-pulse 3s ease-in-out infinite;
        }
        .scan-delay {
          animation-delay: .8s;
        }
        .report-bar {
          transform-origin: bottom;
          animation: owls-bar-rise .65s ease-out both;
        }
        @media (prefers-reduced-motion: reduce) {
          .panel-enter, .scan-orbit, .report-bar {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}

export default HomePlatform;
