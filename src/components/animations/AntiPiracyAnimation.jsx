
import React, { useEffect, useState } from "react";
import {
  Activity,
  CheckCircle2,
  Globe2,
  Radar,
  ScanSearch,
  ShieldCheck,
  ShieldAlert,
  Target,
  Zap,
  LockKeyhole,
  ArrowRight,
} from "lucide-react";

const scenes = [
  { id: "radar", label: "Threat Radar", number: "01" },
  { id: "discovery", label: "Content Discovery", number: "02" },
  { id: "protection", label: "Rights Protection", number: "03" },
  { id: "takedown", label: "Protection Flow", number: "04" },
];

const sources = [
  {
    label: "Video platforms",
    detail: "Content monitoring",
    icon: ScanSearch,
  },
  {
    label: "Web & social",
    detail: "Digital intelligence",
    icon: Globe2,
  },
  {
    label: "Brand assets",
    detail: "Rights verification",
    icon: ShieldCheck,
  },
  {
    label: "Live streams",
    detail: "Threat detection",
    icon: Activity,
  },
];

function ThreatRadar() {
  const threats = [
    { x: "70%", y: "22%", delay: "0s" },
    { x: "27%", y: "30%", delay: ".5s" },
    { x: "38%", y: "73%", delay: "1s" },
    { x: "78%", y: "69%", delay: "1.4s" },
    { x: "54%", y: "18%", delay: ".8s" },
    { x: "19%", y: "58%", delay: "1.7s" },
  ];

  return (
    <div className="to-visual to-radar">
      <div className="to-radar-orbit">
        <span className="to-radar-ring ring-a" />
        <span className="to-radar-ring ring-b" />
        <span className="to-radar-ring ring-c" />
        <span className="to-radar-cross horizontal" />
        <span className="to-radar-cross vertical" />
        <span className="to-radar-sweep" />

        {threats.map((point, index) => (
          <span
            key={index}
            className={`to-threat-dot ${
              index % 2 ? "warning" : ""
            }`}
            style={{
              left: point.x,
              top: point.y,
              animationDelay: point.delay,
            }}
          />
        ))}

        <span className="to-radar-center">
          <Radar size={25} />
        </span>
      </div>

      <div className="to-float-label radar-label-one">
        <span className="to-status-dot danger" />
        Unauthorized copy
      </div>

      <div className="to-float-label radar-label-two">
        <span className="to-status-dot" />
        Scan active
      </div>

      <div className="to-radar-caption">
        <span className="to-caption-line" />
        DIGITAL THREAT INTELLIGENCE
      </div>
    </div>
  );
}

function ContentDiscovery() {
  return (
    <div className="to-visual to-discovery">
      <svg
        className="to-connection-lines"
        viewBox="0 0 500 300"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <line x1="250" y1="150" x2="100" y2="65" />
        <line x1="250" y1="150" x2="400" y2="65" />
        <line x1="250" y1="150" x2="100" y2="240" />
        <line x1="250" y1="150" x2="400" y2="240" />
        <circle cx="100" cy="65" r="4" />
        <circle cx="400" cy="65" r="4" />
        <circle cx="100" cy="240" r="4" />
        <circle cx="400" cy="240" r="4" />
      </svg>

      <div className="to-discovery-core">
        <ScanSearch size={32} strokeWidth={1.6} />
        <span>SCAN</span>
      </div>

      {sources.map((source, index) => {
        const Icon = source.icon;

        return (
          <div
            key={source.label}
            className={`to-source source-${index + 1}`}
          >
            <span className="to-source-icon">
              <Icon size={19} strokeWidth={1.7} />
            </span>

            <span className="to-source-copy">
              <strong>{source.label}</strong>
              <small>{source.detail}</small>
            </span>

            <span className="to-source-pulse" />
          </div>
        );
      })}

      <div className="to-discovery-footer">
        <span className="to-status-dot" />
        Scanning digital channels
      </div>
    </div>
  );
}

function RightsProtection() {
  return (
    <div className="to-visual to-protection">
      <div className="to-protection-orbit orbit-one" />
      <div className="to-protection-orbit orbit-two" />
      <div className="to-protection-orbit orbit-three" />

      <div className="to-protection-glow" />

      <div className="to-protection-shield">
        <ShieldCheck size={65} strokeWidth={1.4} />
        <span className="to-shield-check">
          <CheckCircle2 size={20} />
        </span>
      </div>

      <div className="to-protection-label protection-one">
        <span className="to-status-dot" />
        Rights verified
      </div>

      <div className="to-protection-label protection-two">
        <span className="to-status-dot" />
        Content protected
      </div>

      <div className="to-protection-label protection-three">
        <LockKeyhole size={14} />
        IP SECURITY
      </div>

      <div className="to-protection-footer">
        <span>RIGHTS INTELLIGENCE</span>
        <strong>Protection in focus.</strong>
      </div>
    </div>
  );
}

function ProtectionFlow() {
  const steps = [
    {
      title: "DETECT",
      subtitle: "Identify threats",
      icon: ScanSearch,
      type: "warning",
      status: "IDENTIFIED",
    },
    {
      title: "VERIFY",
      subtitle: "Validate rights",
      icon: ShieldAlert,
      type: "neutral",
      status: "VERIFIED",
    },
    {
      title: "PROTECT",
      subtitle: "Enforce action",
      icon: CheckCircle2,
      type: "success",
      status: "PROTECTION",
    },
  ];

  return (
    <div className="to-visual to-flow">
      <div className="to-flow-track">
        <span className="to-flow-track-progress" />
        <span className="to-flow-signal signal-one" />
        <span className="to-flow-signal signal-two" />
        <span className="to-flow-signal signal-three" />
      </div>

      <div className="to-flow-nodes">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <React.Fragment key={step.title}>
              <div className={`to-flow-node ${step.type}`}>
                <div className="to-flow-icon">
                  <Icon size={24} strokeWidth={1.8} />
                </div>

                <strong>{step.title}</strong>
                <span>{step.subtitle}</span>
                <small>{step.status}</small>
              </div>

              {index < steps.length - 1 && (
                <ArrowRight
                  className="to-flow-arrow"
                  size={18}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>

      <div className="to-flow-footer">
        <span className="to-status-dot" />
        Intelligence-led enforcement workflow
      </div>
    </div>
  );
}

function AntiPiracyAnimation() {
  const [activeScene, setActiveScene] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveScene((current) => (current + 1) % scenes.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  const currentScene = scenes[activeScene];

  return (
    <div className="track-intelligence-animation">
      <div className="to-panel-glow glow-one" />
      <div className="to-panel-glow glow-two" />
      <div className="to-panel-grid" />

      <div className="to-panel-header">
        <div className="to-brand-mark">
          <Radar size={20} strokeWidth={1.8} />
        </div>

        <div className="to-panel-heading">
          <strong>TRACKOWLS</strong>
          <span>ANTI-PIRACY INTELLIGENCE</span>
        </div>

        <div className="to-live-badge">
          <span className="to-status-dot" />
          LIVE
        </div>
      </div>

      <div className="to-panel-divider" />

      <div className="to-scene-heading">
        <div>
          <span className="to-scene-eyebrow">
            PROTECTION SYSTEM / {currentScene.number}
          </span>

          <h3>{currentScene.label}</h3>
        </div>

        <span className="to-scene-number">
          {currentScene.number}
          <span>/ 04</span>
        </span>
      </div>

      <div className="to-scene-viewport" key={currentScene.id}>
        {activeScene === 0 && <ThreatRadar />}
        {activeScene === 1 && <ContentDiscovery />}
        {activeScene === 2 && <RightsProtection />}
        {activeScene === 3 && <ProtectionFlow />}
      </div>

      <div className="to-panel-divider" />

      <div className="to-panel-footer">
        <div className="to-footer-metric">
          <span className="to-footer-icon">
            <Activity size={16} />
          </span>
          <div>
            <small>MONITORING</small>
            <strong>Continuous</strong>
          </div>
        </div>

        <div className="to-footer-metric">
          <span className="to-footer-icon">
            <Target size={16} />
          </span>
          <div>
            <small>INTELLIGENCE</small>
            <strong>Evidence-led</strong>
          </div>
        </div>

        <div className="to-footer-metric">
          <span className="to-footer-icon">
            <Zap size={16} />
          </span>
          <div>
            <small>PROTECTION</small>
            <strong>Rights-focused</strong>
          </div>
        </div>
      </div>

      <div className="to-panel-progress">
        {scenes.map((scene, index) => (
          <button
            key={scene.id}
            type="button"
            aria-label={`Show ${scene.label}`}
            aria-pressed={activeScene === index}
            className={activeScene === index ? "active" : ""}
            onClick={() => setActiveScene(index)}
          />
        ))}
      </div>

      <style>{`
        .track-intelligence-animation {
          --to-lime: #a8d900;
          --to-lime-dark: #668900;
          --to-lime-soft: #789e08;
          --to-navy: #14283b;
          --to-panel: #ffffff;
          --to-muted: #64748b;
          --to-line: #e1e8ee;

          position: relative;
          isolation: isolate;
          width: 100%;
          max-width: 610px;
          min-width: 0;
          margin: 0 auto;
          overflow: hidden;
          border: 1px solid #dce5ec;
          border-radius: 18px;
          background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
          color: var(--to-navy);
          font-family: "Roboto", sans-serif;
          box-shadow: 0 22px 60px rgba(25, 45, 65, 0.12);
        }

        .track-intelligence-animation *,
        .track-intelligence-animation *::before,
        .track-intelligence-animation *::after {
          box-sizing: border-box;
        }

        .to-panel-glow {
          position: absolute;
          z-index: -2;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          filter: blur(70px);
          pointer-events: none;
        }

        .to-panel-glow.glow-one {
          top: 5%;
          right: -80px;
          background: rgba(168, 217, 0, 0.15);
          animation: to-glow 7s ease-in-out infinite alternate;
        }

        .to-panel-glow.glow-two {
          bottom: 5%;
          left: -90px;
          background: rgba(38, 160, 140, 0.09);
        }

        .to-panel-grid {
          position: absolute;
          inset: 0;
          z-index: -1;
          opacity: 0.42;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(104, 137, 0, 0.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(104, 137, 0, 0.055) 1px, transparent 1px);
          background-size: 32px 32px;
          mask-image: linear-gradient(to bottom, black, transparent 95%);
        }

        .to-panel-header {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 17px 20px;
        }

        .to-brand-mark {
          display: flex;
          width: 39px;
          height: 39px;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          border: 1px solid #d5e9a0;
          border-radius: 10px;
          color: #557700;
          background: #f1f8dc;
        }

        .to-panel-heading {
          display: flex;
          min-width: 0;
          flex: 1;
          flex-direction: column;
          gap: 4px;
        }

        .to-panel-heading strong {
          color: #14283b;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.14em;
        }

        .to-panel-heading span {
          color: #64748b;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 0.12em;
        }

        .to-live-badge {
          display: flex;
          align-items: center;
          gap: 7px;
          flex-shrink: 0;
          padding: 7px 10px;
          border: 1px solid #d9e9b1;
          border-radius: 6px;
          color: #527300;
          background: #f4f9e7;
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 0.13em;
        }

        .to-status-dot {
          display: inline-block;
          width: 7px;
          height: 7px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #85b900;
          box-shadow: 0 0 8px rgba(133, 185, 0, 0.3);
          animation: to-status-pulse 1.8s ease-in-out infinite;
        }

        .to-status-dot.danger {
          background: #e28a26;
          box-shadow: 0 0 8px rgba(226, 138, 38, 0.3);
        }

        .to-panel-divider {
          height: 1px;
          background: var(--to-line);
        }

        .to-scene-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 19px 22px 0;
        }

        .to-scene-eyebrow {
          color: #6c9000;
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 0.12em;
        }

        .to-scene-heading h3 {
          margin: 6px 0 0;
          color: #14283b;
          font-size: clamp(17px, 2.3vw, 22px);
          font-weight: 850;
          letter-spacing: -0.035em;
        }

        .to-scene-number {
          color: #6c9000;
          font-size: 22px;
          font-weight: 900;
          letter-spacing: -0.06em;
        }

        .to-scene-number span {
          margin-left: 3px;
          color: #8290a0;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0;
        }

        .to-scene-viewport {
          position: relative;
          height: 320px;
          min-width: 0;
          animation: to-scene-in 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .to-visual {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        /* THREAT RADAR */

        .to-radar-orbit {
          position: absolute;
          top: 49%;
          left: 50%;
          width: min(230px, 58%);
          aspect-ratio: 1;
          transform: translate(-50%, -50%);
          border: 1px solid rgba(112, 151, 0, 0.28);
          border-radius: 50%;
          background: radial-gradient(circle, rgba(168, 217, 0, 0.12), transparent 70%);
        }

        .to-radar-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          aspect-ratio: 1;
          border: 1px solid rgba(112, 151, 0, 0.24);
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }

        .to-radar-ring.ring-a { width: 76%; }
        .to-radar-ring.ring-b { width: 49%; }

        .to-radar-ring.ring-c {
          width: 22%;
          border-color: rgba(112, 151, 0, 0.4);
        }

        .to-radar-cross {
          position: absolute;
          background: rgba(112, 151, 0, 0.2);
        }

        .to-radar-cross.horizontal {
          top: 50%;
          left: 0;
          width: 100%;
          height: 1px;
        }

        .to-radar-cross.vertical {
          top: 0;
          left: 50%;
          width: 1px;
          height: 100%;
        }

        .to-radar-sweep {
          position: absolute;
          inset: 0;
          overflow: hidden;
          border-radius: 50%;
        }

        .to-radar-sweep::before {
          position: absolute;
          top: 0;
          left: 50%;
          width: 50%;
          height: 50%;
          content: "";
          transform-origin: bottom left;
          background: conic-gradient(
            from 0deg,
            rgba(168, 217, 0, 0.38),
            rgba(168, 217, 0, 0.09) 45%,
            transparent 75%
          );
          animation: to-radar-spin 4s linear infinite;
        }

        .to-radar-center {
          position: absolute;
          top: 50%;
          left: 50%;
          display: flex;
          width: 49px;
          height: 49px;
          align-items: center;
          justify-content: center;
          transform: translate(-50%, -50%);
          border: 1px solid #d1e59b;
          border-radius: 50%;
          color: #608300;
          background: #ffffff;
          box-shadow: 0 5px 20px rgba(90, 120, 0, 0.12);
        }

        .to-threat-dot {
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #7aa900;
          box-shadow: 0 0 10px rgba(122, 169, 0, 0.45);
          animation: to-threat-pulse 2s ease-in-out infinite;
        }

        .to-threat-dot.warning {
          background: #e28a26;
          box-shadow: 0 0 10px rgba(226, 138, 38, 0.45);
        }

        .to-float-label {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 9px 11px;
          border: 1px solid #e0e7ed;
          border-radius: 7px;
          color: #26384b;
          background: rgba(255, 255, 255, 0.96);
          box-shadow: 0 5px 18px rgba(22, 40, 55, 0.07);
          font-size: 9px;
          font-weight: 800;
        }

        .radar-label-one {
          top: 17%;
          right: 5%;
        }

        .radar-label-two {
          bottom: 15%;
          left: 5%;
        }

        .to-radar-caption {
          position: absolute;
          bottom: 17px;
          left: 50%;
          display: flex;
          align-items: center;
          gap: 8px;
          transform: translateX(-50%);
          white-space: nowrap;
          color: #64748b;
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 0.12em;
        }

        .to-caption-line {
          width: 19px;
          height: 2px;
          background: #8dbb00;
        }

        /* CONTENT DISCOVERY */

        .to-connection-lines {
          position: absolute;
          inset: 8% 5%;
          width: 90%;
          height: 84%;
          overflow: visible;
        }

        .to-connection-lines line {
          stroke: rgba(112, 151, 0, 0.35);
          stroke-width: 1.3;
          stroke-dasharray: 5 6;
          animation: to-line-dash 7s linear infinite;
        }

        .to-connection-lines circle {
          fill: #8dbb00;
          filter: drop-shadow(0 0 4px rgba(141, 187, 0, 0.4));
        }

        .to-discovery-core {
          position: absolute;
          top: 50%;
          left: 50%;
          z-index: 3;
          display: flex;
          width: 84px;
          height: 84px;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          transform: translate(-50%, -50%);
          border: 1px solid #cfe39a;
          border-radius: 50%;
          color: #638700;
          background: radial-gradient(circle, #ffffff, #f2f8df);
          box-shadow: 0 5px 28px rgba(104, 145, 0, 0.12);
          animation: to-core-pulse 3s ease-in-out infinite;
        }

        .to-discovery-core span {
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 0.16em;
        }

        .to-source {
          position: absolute;
          z-index: 2;
          display: flex;
          max-width: 45%;
          align-items: center;
          gap: 7px;
          animation: to-source-float 3.5s ease-in-out infinite;
        }

        .source-1 { top: 9%; left: 4%; }
        .source-2 { top: 9%; right: 3%; animation-delay: 0.6s; }
        .source-3 { bottom: 14%; left: 4%; animation-delay: 1s; }
        .source-4 { right: 3%; bottom: 14%; animation-delay: 1.5s; }

        .to-source-icon {
          display: flex;
          width: 33px;
          height: 33px;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          border: 1px solid #dce9bc;
          border-radius: 50%;
          color: #638700;
          background: #f5f9e9;
        }

        .to-source-copy {
          display: flex;
          min-width: 0;
          flex-direction: column;
          gap: 4px;
        }

        .to-source-copy strong {
          color: #23364a;
          font-size: 9px;
          font-weight: 900;
          white-space: nowrap;
        }

        .to-source-copy small {
          color: #64748b;
          font-size: 7px;
          white-space: nowrap;
        }

        .to-source-pulse {
          position: absolute;
          right: -2px;
          bottom: -2px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #8dbb00;
          box-shadow: 0 0 7px rgba(141, 187, 0, 0.4);
        }

        .to-discovery-footer,
        .to-flow-footer {
          position: absolute;
          bottom: 13px;
          left: 50%;
          display: flex;
          align-items: center;
          gap: 8px;
          transform: translateX(-50%);
          white-space: nowrap;
          color: #64748b;
          font-size: 8px;
          font-weight: 800;
        }

        /* RIGHTS PROTECTION */

        .to-protection {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .to-protection-glow {
          position: absolute;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background: rgba(168, 217, 0, 0.14);
          filter: blur(38px);
          animation: to-glow 4s ease-in-out infinite alternate;
        }

        .to-protection-orbit {
          position: absolute;
          width: 235px;
          height: 130px;
          border: 1px solid rgba(112, 151, 0, 0.22);
          border-radius: 50%;
          animation: to-orbit 14s linear infinite;
        }

        .to-protection-orbit.orbit-two {
          width: 190px;
          height: 245px;
          border-color: rgba(36, 160, 125, 0.2);
          animation-direction: reverse;
          animation-duration: 18s;
        }

        .to-protection-orbit.orbit-three {
          width: 285px;
          height: 185px;
          border-color: rgba(112, 151, 0, 0.14);
          animation-duration: 22s;
        }

        .to-protection-shield {
          position: relative;
          z-index: 2;
          display: flex;
          width: 112px;
          height: 126px;
          align-items: center;
          justify-content: center;
          color: #739c00;
          filter: drop-shadow(0 5px 12px rgba(112, 151, 0, 0.16));
          animation: to-shield-float 3.4s ease-in-out infinite;
        }

        .to-shield-check {
          position: absolute;
          right: 5px;
          bottom: 15px;
          display: flex;
          width: 30px;
          height: 30px;
          align-items: center;
          justify-content: center;
          border: 1px solid #d3e7a4;
          border-radius: 50%;
          color: #648900;
          background: #ffffff;
        }

        .to-protection-label {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 7px;
          color: #304257;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.02em;
        }

        .protection-one { top: 19%; left: 7%; }
        .protection-two { right: 5%; bottom: 23%; }

        .protection-three {
          top: 20%;
          right: 6%;
          color: #648900;
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 0.12em;
        }

        .to-protection-footer {
          position: absolute;
          bottom: 14px;
          left: 50%;
          display: flex;
          align-items: center;
          flex-direction: column;
          gap: 5px;
          transform: translateX(-50%);
          white-space: nowrap;
        }

        .to-protection-footer span {
          color: #64748b;
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 0.12em;
        }

        .to-protection-footer strong {
          color: #14283b;
          font-size: 12px;
          font-weight: 900;
        }

        /* PROTECTION FLOW */

        .to-flow {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .to-flow-track {
          position: absolute;
          top: 43%;
          right: 12%;
          left: 12%;
          height: 2px;
          background: linear-gradient(
            90deg,
            #e7a04d,
            #9dc900,
            #3cae83
          );
        }

        .to-flow-track-progress {
          position: absolute;
          inset: 0;
          transform-origin: left;
          background: #8dbb00;
          animation: to-flow-progress 3.5s ease-in-out infinite alternate;
        }

        .to-flow-signal {
          position: absolute;
          top: 50%;
          width: 7px;
          height: 7px;
          transform: translateY(-50%);
          border-radius: 50%;
          background: #83b500;
          box-shadow: 0 0 10px rgba(131, 181, 0, 0.4);
          animation: to-flow-signal 2.8s linear infinite;
        }

        .to-flow-signal.signal-two { animation-delay: 0.9s; }
        .to-flow-signal.signal-three { animation-delay: 1.8s; }

        .to-flow-nodes {
          position: relative;
          z-index: 2;
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: space-evenly;
          padding: 0 3%;
        }

        .to-flow-node {
          display: flex;
          width: 28%;
          min-width: 0;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .to-flow-icon {
          display: flex;
          width: 57px;
          height: 57px;
          align-items: center;
          justify-content: center;
          border: 1px solid #d4e4ae;
          border-radius: 50%;
          color: #668a00;
          background: #f5f9e9;
          box-shadow: 0 5px 20px rgba(60, 80, 30, 0.07);
          animation: to-node-pulse 2.6s ease-in-out infinite;
        }

        .to-flow-node.warning .to-flow-icon {
          border-color: #f0d5b5;
          color: #c87920;
          background: #fff8ef;
        }

        .to-flow-node.success .to-flow-icon {
          border-color: #b9e5d4;
          color: #218960;
          background: #effaf5;
        }

        .to-flow-node strong {
          margin-top: 13px;
          color: #24364a;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.1em;
        }

        .to-flow-node > span {
          margin-top: 5px;
          color: #64748b;
          font-size: 8px;
        }

        .to-flow-node small {
          margin-top: 9px;
          color: #668a00;
          font-size: 7px;
          font-weight: 900;
          letter-spacing: 0.08em;
        }

        .to-flow-node.warning small { color: #b96b19; }
        .to-flow-node.success small { color: #218960; }

        .to-flow-arrow {
          position: relative;
          z-index: 3;
          flex-shrink: 0;
          margin: 0 -5px;
          color: #779d00;
        }

        /* FOOTER */

        .to-panel-footer {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
          padding: 16px 18px;
          background: rgba(242, 246, 249, 0.8);
        }

        .to-footer-metric {
          display: flex;
          min-width: 0;
          align-items: center;
          gap: 8px;
        }

        .to-footer-icon {
          display: flex;
          width: 31px;
          height: 31px;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          border: 1px solid #dce9bd;
          border-radius: 8px;
          color: #638700;
          background: #f7faed;
        }

        .to-footer-metric > div {
          display: flex;
          min-width: 0;
          flex-direction: column;
          gap: 5px;
        }

        .to-footer-metric small {
          color: #64748b;
          font-size: 7px;
          font-weight: 900;
          letter-spacing: 0.08em;
        }

        .to-footer-metric strong {
          overflow: hidden;
          color: #24364a;
          font-size: 9px;
          font-weight: 900;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .to-panel-progress {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 12px 0 15px;
        }

        .to-panel-progress button {
          width: 18px;
          height: 4px;
          padding: 0;
          border: 0;
          border-radius: 99px;
          background: #d7e0e7;
          cursor: pointer;
          transition: width 0.3s ease, background 0.3s ease;
        }

        .to-panel-progress button:hover {
          background: #a9c76b;
        }

        .to-panel-progress button.active {
          width: 35px;
          background: #8dbb00;
          box-shadow: 0 0 8px rgba(141, 187, 0, 0.2);
        }

        /* ANIMATIONS */

        @keyframes to-scene-in {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes to-radar-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes to-threat-pulse {
          0%, 100% {
            opacity: 0.5;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.35);
          }
        }

        @keyframes to-status-pulse {
          0%, 100% { opacity: 0.65; }
          50% { opacity: 1; }
        }

        @keyframes to-core-pulse {
          0%, 100% {
            box-shadow: 0 5px 22px rgba(104, 145, 0, 0.08);
          }
          50% {
            box-shadow: 0 5px 35px rgba(104, 145, 0, 0.2);
          }
        }

        @keyframes to-line-dash {
          to { stroke-dashoffset: -44; }
        }

        @keyframes to-source-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }

        @keyframes to-orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes to-shield-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }

        @keyframes to-flow-progress {
          from { transform: scaleX(0.35); }
          to { transform: scaleX(1); }
        }

        @keyframes to-flow-signal {
          0% { left: 0; opacity: 0; }
          12% { opacity: 1; }
          88% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }

        @keyframes to-node-pulse {
          0%, 100% {
            box-shadow: 0 5px 15px rgba(60, 80, 30, 0.05);
          }
          50% {
            box-shadow: 0 5px 24px rgba(104, 145, 0, 0.14);
          }
        }

        @keyframes to-glow {
          from {
            opacity: 0.55;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1.08);
          }
        }

        /* TABLET AND DESKTOP */

        @media (min-width: 640px) {
          .to-panel-header {
            padding: 19px 23px;
          }

          .to-scene-heading {
            padding: 21px 25px 0;
          }

          .to-panel-footer {
            padding: 18px 22px;
            gap: 13px;
          }

          .to-scene-viewport {
            height: 345px;
          }
        }

        /* MOBILE */

        @media (max-width: 420px) {
          .track-intelligence-animation {
            border-radius: 13px;
          }

          .to-panel-header {
            padding: 13px 12px;
            gap: 8px;
          }

          .to-brand-mark {
            width: 32px;
            height: 32px;
          }

          .to-panel-heading strong {
            font-size: 10px;
          }

          .to-panel-heading span {
            font-size: 7px;
            letter-spacing: 0.06em;
          }

          .to-live-badge {
            padding: 6px 7px;
            font-size: 7px;
          }

          .to-scene-heading {
            padding: 15px 13px 0;
          }

          .to-scene-eyebrow {
            font-size: 7px;
            letter-spacing: 0.06em;
          }

          .to-scene-heading h3 {
            font-size: 16px;
          }

          .to-scene-viewport {
            height: 285px;
          }

          .to-radar-orbit {
            width: 190px;
          }

          .to-float-label {
            padding: 6px 7px;
            font-size: 8px;
          }

          .to-source {
            gap: 5px;
          }

          .to-source-icon {
            width: 26px;
            height: 26px;
          }

          .to-source-icon svg {
            width: 15px;
          }

          .to-source-copy strong {
            font-size: 8px;
          }

          .to-source-copy small {
            font-size: 6px;
          }

          .to-discovery-core {
            width: 70px;
            height: 70px;
          }

          .to-protection-orbit.orbit-three {
            width: 240px;
          }

          .to-protection-label {
            font-size: 8px;
          }

          .to-flow-icon {
            width: 45px;
            height: 45px;
          }

          .to-flow-icon svg {
            width: 19px;
          }

          .to-flow-node strong {
            font-size: 8px;
          }

          .to-flow-node > span {
            font-size: 7px;
          }

          .to-flow-node small {
            font-size: 6px;
          }

          .to-flow-arrow {
            width: 12px;
            margin: 0 -4px;
          }

          .to-panel-footer {
            padding: 12px 10px;
            gap: 6px;
          }

          .to-footer-metric {
            gap: 5px;
          }

          .to-footer-icon {
            width: 24px;
            height: 24px;
          }

          .to-footer-icon svg {
            width: 12px;
          }

          .to-footer-metric small {
            font-size: 6px;
            letter-spacing: 0.02em;
          }

          .to-footer-metric strong {
            font-size: 7px;
          }
        }

        @media (max-width: 350px) {
          .to-source-copy small {
            white-space: normal;
          }

          .to-source {
            max-width: 48%;
          }

          .to-panel-footer {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .to-footer-metric {
            justify-content: flex-start;
          }

          .to-footer-metric small,
          .to-footer-metric strong {
            font-size: 9px;
          }

          .to-scene-viewport {
            height: 300px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .track-intelligence-animation *,
          .track-intelligence-animation *::before,
          .track-intelligence-animation *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </div>
  );
}

export default AntiPiracyAnimation;
