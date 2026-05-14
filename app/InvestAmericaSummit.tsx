"use client";
import { useState, useEffect } from "react";

const C = {
  bg: "#FFFFFF",
  bgSoft: "#F8F9FB",
  bgSection: "#F2F4F7",
  navy: "#0D1B2E",
  text: "#0D1B2E",
  textMid: "#3D4F63",
  textGray: "#6B7A8D",
  green: "#7DC142",
  greenDark: "#5A9E2A",
  greenPale: "#EEF7E6",
  red: "#E8334A",
  border: "#E2E8F0",
  borderDark: "#CBD5E1",
};

function useCountdown(target: string) {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    const tick = () => {
      const diff = new Date(target).getTime() - Date.now();
      if (diff <= 0) return;
      setT({ d: Math.floor(diff / 86400000), h: Math.floor((diff % 86400000) / 3600000), m: Math.floor((diff % 3600000) / 60000), s: Math.floor((diff % 60000) / 1000) });
    };
    tick(); const id = setInterval(tick, 1000); return () => clearInterval(id);
  }, [target]);
  return t;
}

const Pill = ({ children, dark }: { children: React.ReactNode; dark?: boolean }) => (
  <span style={{ display: "inline-flex", alignItems: "center", gap: 6, background: dark ? C.navy : "#F1F5F9", color: dark ? "#fff" : C.text, padding: "6px 16px", borderRadius: 999, fontSize: 13, fontWeight: 500 }}>{children}</span>
);

const GreenLabel = ({ children }: { children: React.ReactNode }) => (
  <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: C.green, marginBottom: 12 }}>{children}</div>
);

const Card = ({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) => (
  <div style={{ background: C.bg, border: `1px solid ${C.border}`, borderRadius: 16, padding: "28px 24px", ...style }}>{children}</div>
);

const AccentCard = ({ children }: { children: React.ReactNode }) => (
  <div style={{ background: C.bg, border: `1px solid ${C.border}`, borderLeft: `4px solid ${C.green}`, borderRadius: 12, padding: "20px 20px" }}>{children}</div>
);

const StatCard = ({ icon, value, label }: { icon: string; value: string; label: string }) => (
  <Card style={{ textAlign: "center", padding: "32px 20px" }}>
    <div style={{ fontSize: 32, marginBottom: 10 }}>{icon}</div>
    <div style={{ fontSize: 28, fontWeight: 800, color: C.text, marginBottom: 4 }}>{value}</div>
    <div style={{ fontSize: 13, color: C.textGray }}>{label}</div>
  </Card>
);

function NavBar() {
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(255,255,255,0.97)", borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 40px", height: 64, backdropFilter: "blur(8px)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ width: 36, height: 36, borderRadius: "50%", background: C.green, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 13, color: "#fff" }}>FS</div>
        <span style={{ fontWeight: 700, fontSize: 15, color: C.text }}>Freedom Summit</span>
      </div>
      <div style={{ display: "flex", gap: 36 }}>
        {["About", "Audience", "Agenda", "Pricing"].map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} style={{ color: C.textGray, fontSize: 14, fontWeight: 500, textDecoration: "none" }}>{l}</a>
        ))}
      </div>
      <div style={{ display: "flex", gap: 12 }}>
        <a href="#pricing" style={{ border: `1.5px solid ${C.border}`, borderRadius: 8, padding: "8px 20px", fontSize: 13, fontWeight: 600, color: C.text, textDecoration: "none", background: C.bg }}>View Packages</a>
        <a href="mailto:denis@fsummit.net" style={{ background: C.red, color: "#fff", padding: "8px 20px", borderRadius: 8, fontSize: 13, fontWeight: 700, textDecoration: "none" }}>Partner With Us</a>
      </div>
    </nav>
  );
}

function Hero() {
  const t = useCountdown("2026-08-20T11:00:00-04:00");
  return (
    <section style={{ paddingTop: 100, paddingBottom: 64, maxWidth: 960, margin: "0 auto", padding: "100px 40px 64px" }}>
      <div style={{ display: "flex", gap: 10, marginBottom: 28, flexWrap: "wrap" }}>
        <Pill dark>August 20–21, 2026</Pill>
        <Pill dark>💻 Virtual Event</Pill>
        <Pill dark>🌐 Worldwide Online</Pill>
      </div>

      <h1 style={{ fontSize: "clamp(38px, 5.5vw, 68px)", fontWeight: 900, lineHeight: 1.05, color: C.text, marginBottom: 16, letterSpacing: -1 }}>
        Freedom Business Summit 2026<br />Invest America Edition 🇺🇸
      </h1>

      <p style={{ fontSize: 18, color: C.textMid, marginBottom: 28, maxWidth: 580, lineHeight: 1.6 }}>
        The Definitive Summit for EB-5 & E-2 Investor Visas — for Entrepreneurs Ready to Enter the U.S. Before the September 2026 Deadline.
      </p>

      <div style={{ marginBottom: 24 }}>
        {[
          "1 focused day — expert sessions from licensed EB-5 attorneys, Regional Center operators, and E-2 franchise specialists",
          "6 sessions — covering EB-5 due diligence, E-2 pathways, visa comparison, U.S. tax structuring & live investor case studies",
        ].map((txt, i) => (
          <div key={i} style={{ display: "flex", gap: 10, marginBottom: 10, alignItems: "flex-start" }}>
            <span style={{ color: C.green, fontSize: 18, marginTop: 2, flexShrink: 0 }}>•</span>
            <span style={{ fontSize: 16, fontWeight: 700, color: C.text }}>{txt}</span>
          </div>
        ))}
      </div>

      <div style={{ display: "inline-flex", alignItems: "center", gap: 14, border: `1px solid ${C.border}`, borderRadius: 12, padding: "14px 20px", marginBottom: 28, background: C.bgSoft }}>
        <div style={{ fontSize: 24 }}>🏛️</div>
        <div>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, color: C.green, textTransform: "uppercase" }}>Program Focus</div>
          <div style={{ fontSize: 14, fontWeight: 600, color: C.text }}>EB-5 Investor Visa · E-2 Treaty Investor · USCIS 2026</div>
        </div>
      </div>

      <div style={{ marginBottom: 36 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: C.navy, borderRadius: 999, padding: "8px 18px 8px 12px", marginBottom: 16 }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: C.red, display: "inline-block" }} />
          <span style={{ color: "#fff", fontSize: 13, fontWeight: 600 }}>Get Early Bird Access! Act Fast</span>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 2 }}>
          {[{ val: t.d, label: "days" }, { val: t.h, label: "hrs" }, { val: t.m, label: "min" }, { val: t.s, label: "sec" }].map(({ val, label }, i) => (
            <div key={label} style={{ display: "flex", alignItems: "flex-end", gap: 2 }}>
              {i > 0 && <span style={{ fontSize: 56, fontWeight: 900, color: C.red, lineHeight: 1, marginBottom: 20, margin: "0 2px 20px" }}>:</span>}
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 64, fontWeight: 900, color: C.text, lineHeight: 1 }}>{String(val).padStart(2, "0")}</div>
                <div style={{ fontSize: 12, color: C.textGray, marginTop: 4 }}>{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
        <a href="mailto:denis@fsummit.net" style={{ background: C.red, color: "#fff", padding: "14px 32px", borderRadius: 10, fontSize: 15, fontWeight: 700, textDecoration: "none" }}>Partner With Us →</a>
        <a href="#pricing" style={{ border: `1.5px solid ${C.border}`, background: C.bg, color: C.text, padding: "14px 32px", borderRadius: 10, fontSize: 15, fontWeight: 600, textDecoration: "none" }}>View Packages</a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" style={{ borderTop: `1px solid ${C.border}`, padding: "72px 40px", maxWidth: 960, margin: "0 auto" }}>
      <GreenLabel>About the Event</GreenLabel>
      <h2 style={{ fontSize: 36, fontWeight: 800, color: C.text, marginBottom: 20, letterSpacing: -0.5 }}>What is FBS Invest America Edition?</h2>
      <p style={{ fontSize: 17, color: C.textMid, lineHeight: 1.8, marginBottom: 16, maxWidth: 780 }}>
        FBS Invest America is a one-day virtual summit dedicated exclusively to the <strong>EB-5 Immigrant Investor Program</strong> and the <strong>E-2 Treaty Investor Visa</strong> — the two most direct pathways for foreign entrepreneurs and capital to enter the United States.
      </p>
      <p style={{ fontSize: 17, color: C.textMid, lineHeight: 1.8, marginBottom: 40, maxWidth: 780 }}>
        <strong>Morning sessions</strong> cover EB-5 due diligence, Regional Center selection, and USCIS 2026 policy updates. <strong>Afternoon sessions</strong> focus on E-2 strategy, franchise pathways, and post-visa U.S. tax structuring. Produced for high-intent investors from India, Vietnam, the UAE, Latin America, and China.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        <StatCard icon="🎯" value="500+" label="Expected Attendees" />
        <StatCard icon="📊" value="10.2K" label="Email Audience" />
        <StatCard icon="📬" value="40%+" label="Email Open Rate" />
        <StatCard icon="🌐" value="30+" label="Countries" />
        <StatCard icon="🎤" value="6" label="Sessions" />
        <StatCard icon="📅" value="1" label="Day Event" />
      </div>
    </section>
  );
}

function WhyPartner() {
  const items = [
    { icon: "⚖️", title: "EB-5 & E-2 Specialist Audience", body: "Every attendee self-selected into the EB-5 or E-2 track. No mixed audiences — only active investors evaluating U.S. entry." },
    { icon: "📡", title: "Real Intent Signals", body: "Data-driven summit capturing genuine investment intent. Every attendee is pre-qualified via our 12-question U.S. Investor Index survey." },
    { icon: "🌍", title: "Global Source Markets", body: "100% targeted distribution across India, Vietnam, UAE, Latin America, and China — the top EB-5/E-2 source markets worldwide." },
    { icon: "🔒", title: "Category Exclusivity", body: "One Regional Center. One immigration law firm. One franchise broker. One wealth manager. No direct competitors on the same stage." },
    { icon: "👔", title: "Decision-Maker Audience", body: "75%+ are founders and investors with direct authority over capital deployment. Not gatekept by assistants." },
  ];
  return (
    <section style={{ background: C.bgSection, padding: "72px 40px" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <GreenLabel>Why Partner with FBS</GreenLabel>
        <h2 style={{ fontSize: 36, fontWeight: 800, color: C.text, marginBottom: 40, letterSpacing: -0.5 }}>What Makes Us Different</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {items.map(({ icon, title, body }) => (
            <AccentCard key={title}>
              <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div style={{ fontSize: 24, lineHeight: 1, marginTop: 2 }}>{icon}</div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: C.text, marginBottom: 6 }}>{title}</div>
                  <div style={{ fontSize: 13, color: C.textGray, lineHeight: 1.65 }}>{body}</div>
                </div>
              </div>
            </AccentCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function KeyTopics() {
  const topics = [
    { icon: "🇺🇸", title: "EB-5 in 2026: What Changed & What Didn't", body: "USCIS policy post-EB-5 Reform Act, priority dates, targeted employment areas, and the current $800K minimum investment threshold." },
    { icon: "🏗️", title: "How to Evaluate a Regional Center", body: "7 signals that separate safe projects from distressed ones — SEC oversight, escrow structures, job creation tracking, and full due diligence." },
    { icon: "🤝", title: "EB-5 vs. E-2: Which Path Fits You", body: "Side-by-side comparison by capital required, timeline, treaty country eligibility, and permanent vs. temporary residency trade-offs." },
    { icon: "🏪", title: "The E-2 Playbook: Franchises, Acquisitions & Startups", body: "What qualifies as a 'substantial' E-2 investment, franchise brands approved for E-2, and how to structure a business acquisition for eligibility." },
    { icon: "📖", title: "Real Investors, Real Stories — Live Panel", body: "Investors who completed EB-5 and E-2 applications share real timelines, surprises, costs, and what they'd do differently." },
    { icon: "🏦", title: "After Approval: U.S. Banking, Tax & Wealth Structuring", body: "How new U.S. residents navigate FBAR obligations, PFIC rules, state tax selection, global banking access, and asset structuring." },
  ];
  return (
    <section style={{ background: C.bg, padding: "72px 40px" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <GreenLabel>Key Topics</GreenLabel>
        <h2 style={{ fontSize: 36, fontWeight: 800, color: C.text, marginBottom: 40, letterSpacing: -0.5 }}>6 Sessions Across 1 Day</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {topics.map(({ icon, title, body }) => (
            <Card key={title} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              <div style={{ fontSize: 28, lineHeight: 1, flexShrink: 0 }}>{icon}</div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: C.text, marginBottom: 6 }}>{title}</div>
                <div style={{ fontSize: 13, color: C.textGray, lineHeight: 1.65 }}>{body}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Audience() {
  return (
    <section id="audience" style={{ background: C.bgSection, padding: "72px 40px" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <GreenLabel>Audience Profile</GreenLabel>
        <h2 style={{ fontSize: 36, fontWeight: 800, color: C.text, marginBottom: 8, letterSpacing: -0.5 }}>Who's in the Room</h2>
        <p style={{ fontSize: 16, color: C.textGray, marginBottom: 40 }}>Blend of high-net-worth investor prospects (B2C) and specialized service providers (B2B).</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 48 }}>
          {[
            { pct: "65%", type: "B2C Clients", desc: "HNWIs, entrepreneurs, investors and families evaluating EB-5 or E-2 as their U.S. residency pathway", items: ["HNWIs with $200K–$1M+ investable capital", "Founders scaling into the U.S. market", "Families seeking U.S. education access", "Entrepreneurs evaluating franchise E-2"] },
            { pct: "35%", type: "B2B Partners", desc: "Service providers, law firms, and consultants seeking qualified referrals and pipeline from pre-scored investor leads", items: ["Immigration attorneys & EB-5 counsel", "Regional Center operators & project sponsors", "Franchise brokers for E-2 pathways", "U.S. wealth managers & tax advisors"] },
          ].map(({ pct, type, desc, items }) => (
            <Card key={type}>
              <div style={{ fontSize: 48, fontWeight: 900, color: C.text, lineHeight: 1, marginBottom: 4 }}>{pct}</div>
              <div style={{ fontSize: 12, fontWeight: 700, color: C.green, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 12 }}>{type}</div>
              <p style={{ fontSize: 13, color: C.textGray, marginBottom: 16, lineHeight: 1.6 }}>{desc}</p>
              {items.map(item => (
                <div key={item} style={{ display: "flex", gap: 8, marginBottom: 6, fontSize: 13, color: C.textMid }}>
                  <span style={{ color: C.green, fontWeight: 700 }}>✓</span> {item}
                </div>
              ))}
            </Card>
          ))}
        </div>

        <GreenLabel>Who Is This For?</GreenLabel>
        <h3 style={{ fontSize: 24, fontWeight: 800, color: C.text, marginBottom: 8 }}>Primary Source Markets</h3>
        <p style={{ fontSize: 15, color: C.textGray, marginBottom: 28 }}>FBS Invest America connects EB-5 Regional Centers, immigration attorneys, and E-2 franchise brokers with pre-qualified HNWIs from the world's top investor source markets.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 12 }}>
          {[
            { flag: "🇮🇳", country: "India", note: "EB-5 #1 demand source", pct: "28%" },
            { flag: "🇻🇳", country: "Vietnam", note: "High-intent SEA market", pct: "14%" },
            { flag: "🇦🇪", country: "Middle East", note: "E-2 treaty angle", pct: "13%" },
            { flag: "🇲🇽", country: "LATAM", note: "E-2 dominant corridor", pct: "16%" },
            { flag: "🇨🇳", country: "China", note: "EB-5 post-backlog", pct: "10%" },
            { flag: "🇨🇦", country: "Canada", note: "High NW, E-2 & EB-5 interest", pct: "11%" },
            { flag: "🇪🇺", country: "Europe", note: "HNWI diversification", pct: "8%" },
          ].map(({ flag, country, note, pct }) => (
            <Card key={country} style={{ textAlign: "center", padding: "18px 10px" }}>
              <div style={{ fontSize: 28, marginBottom: 8 }}>{flag}</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: C.text, marginBottom: 4 }}>{country}</div>
              <div style={{ fontSize: 18, fontWeight: 900, color: C.green, marginBottom: 4 }}>{pct}</div>
              <div style={{ fontSize: 10, color: C.textGray, lineHeight: 1.4 }}>{note}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Funnel() {
  return (
    <section style={{ background: C.bg, padding: "72px 40px" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <GreenLabel>FBS Intelligence · Funnel & Insights</GreenLabel>
        <h2 style={{ fontSize: 36, fontWeight: 800, color: C.text, marginBottom: 8, letterSpacing: -0.5 }}>FBS: U.S. Investor Index Funnel & Insights</h2>
        <p style={{ fontSize: 16, color: C.textGray, maxWidth: 680, lineHeight: 1.7, marginBottom: 48 }}>
          A purpose-built funnel — targeted ads → registration → U.S. Investor Mobility Index survey → segmented lead delivery — turns traffic into pre-qualified, opt-in investor prospects with HOT / WARM / COLD scoring.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", marginBottom: 48, border: `1px solid ${C.border}`, borderRadius: 12, overflow: "hidden" }}>
          {[
            { num: "01", label: "Traffic", desc: "Targeted video & static ads by geo, income bracket, and visa intent" },
            { num: "02", label: "Registration", desc: "High-converting summit signup with embedded qualification questions" },
            { num: "03", label: "Survey Funnel", desc: "U.S. Investor Index — scored by visa fit, capital range & timeline" },
            { num: "04", label: "Lead Delivery", desc: "HOT / WARM / COLD prospects delivered to partner CRM in 7 days" },
          ].map(({ num, label, desc }, i) => (
            <div key={label} style={{ padding: "28px 20px", borderRight: i < 3 ? `1px solid ${C.border}` : "none", position: "relative" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: C.green, letterSpacing: 2, marginBottom: 10 }}>{num}</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: C.text, marginBottom: 8 }}>{label}</div>
              <div style={{ fontSize: 13, color: C.textGray, lineHeight: 1.6 }}>{desc}</div>
              {i < 3 && (
                <div style={{ position: "absolute", right: -10, top: "50%", transform: "translateY(-50%)", width: 20, height: 20, borderRadius: "50%", background: C.green, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, zIndex: 2 }}>→</div>
              )}
            </div>
          ))}
        </div>

        <div style={{ border: `1px solid ${C.border}`, borderRadius: 12, overflow: "hidden" }}>
          <div style={{ padding: "14px 24px", background: C.bgSoft, borderBottom: `1px solid ${C.border}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <span style={{ fontSize: 12, fontWeight: 700, color: C.green, letterSpacing: 1.5, textTransform: "uppercase" }}>U.S. Investor Index</span>
              <span style={{ fontSize: 13, color: C.textGray, marginLeft: 12 }}>Partner Audience Intelligence · FBS Invest America 2026</span>
            </div>
            <span style={{ fontSize: 11, color: C.textGray }}>Full Consent · GDPR Compliant</span>
          </div>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
            <thead>
              <tr style={{ background: C.bgSoft, borderBottom: `1px solid ${C.border}` }}>
                {["Name", "Country", "Visa Track", "Capital", "Email", "Tier", "Score"].map(h => (
                  <th key={h} style={{ padding: "10px 16px", textAlign: "left", color: C.textGray, fontWeight: 600, fontSize: 11, letterSpacing: 0.5 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Raj K.", flag: "🇮🇳", country: "India", visa: "EB-5", capital: "$500K–$1M", email: "raj.k●●●@●●.in", tier: "HOT", score: 26 },
                { name: "Nguyen T.", flag: "🇻🇳", country: "Vietnam", visa: "EB-5", capital: "$500K–$800K", email: "nguyen.t●●●@●●.vn", tier: "HOT", score: 24 },
                { name: "Ahmed R.", flag: "🇦🇪", country: "UAE", visa: "E-2", capital: "$200K–$400K", email: "ahmed.r●●●@●●.ae", tier: "HOT", score: 21 },
                { name: "Maria G.", flag: "🇲🇽", country: "Mexico", visa: "E-2", capital: "$150K–$300K", email: "maria.g●●●@gmail.com", tier: "WARM", score: 16 },
                { name: "Wei L.", flag: "🇨🇳", country: "China", visa: "EB-5", capital: "$800K+", email: "wei.l●●●@●●.cn", tier: "HOT", score: 25 },
                { name: "Priya M.", flag: "🇮🇳", country: "India", visa: "EB-5", capital: "$500K–$1M", email: "priya.m●●●@●●.in", tier: "WARM", score: 14 },
              ].map(({ name, flag, country, visa, capital, email, tier, score }) => (
                <tr key={name} style={{ borderBottom: `1px solid ${C.border}` }}>
                  <td style={{ padding: "12px 16px", fontWeight: 600, color: C.text }}>{name}</td>
                  <td style={{ padding: "12px 16px", color: C.textGray }}>{flag} {country}</td>
                  <td style={{ padding: "12px 16px" }}>
                    <span style={{ background: visa === "EB-5" ? C.greenPale : "#FFF3E0", color: visa === "EB-5" ? C.greenDark : "#C77B00", padding: "3px 10px", borderRadius: 999, fontSize: 11, fontWeight: 700 }}>{visa}</span>
                  </td>
                  <td style={{ padding: "12px 16px", color: C.textGray }}>{capital}</td>
                  <td style={{ padding: "12px 16px", color: C.textGray }}>{email}</td>
                  <td style={{ padding: "12px 16px" }}>
                    <span style={{ background: tier === "HOT" ? "#FDEEF1" : tier === "WARM" ? "#FFF8E6" : "#F1F5F9", color: tier === "HOT" ? C.red : tier === "WARM" ? "#C77B00" : C.textGray, padding: "3px 10px", borderRadius: 999, fontSize: 11, fontWeight: 700 }}>{tier}</span>
                  </td>
                  <td style={{ padding: "12px 16px", fontWeight: 800, color: C.text }}>{score}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ padding: "12px 24px", background: C.bgSoft, borderTop: `1px solid ${C.border}`, fontSize: 12, color: C.textGray }}>
            500+ prospects · 60% HOT · 12 fields per record · ✓ Email + WhatsApp included · ☑ Consent compliant
          </div>
        </div>
      </div>
    </section>
  );
}

function Agenda() {
  const sessions = [
    { time: "11:00 AM", type: "Keynote", dur: "35 min", title: "EB-5 in 2026: What Changed, What Didn't, and What You Must Know Before Investing", tag: "EB-5 Foundation" },
    { time: "11:40 AM", type: "Keynote", dur: "35 min", title: "How to Evaluate a Regional Center: 7 Signals That Separate Safe Projects from Disasters", tag: "Due Diligence" },
    { time: "12:20 PM", type: "Keynote", dur: "35 min", title: "E-2 vs. EB-5: Which Path Fits Your Capital, Country & Timeline", tag: "Program Comparison" },
    { time: "1:00 PM", type: "Break", dur: "20 min", title: "Networking Break + Partner Showcase", tag: null },
    { time: "1:20 PM", type: "Keynote", dur: "35 min", title: "The E-2 Playbook: Franchises, Acquisitions & Startups That Qualify", tag: "E-2 Deep Dive" },
    { time: "2:00 PM", type: "Panel", dur: "60 min", title: "Real Investors, Real Stories — What EB-5 & E-2 Looked Like From the Inside", tag: "Live Panel" },
    { time: "3:05 PM", type: "Keynote", dur: "35 min", title: "After Approval: U.S. Banking, Tax & Wealth Structuring for New Residents", tag: "Post-Visa Strategy" },
  ];
  return (
    <section id="agenda" style={{ background: C.bgSection, padding: "72px 40px" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <GreenLabel>Summit Agenda</GreenLabel>
        <h2 style={{ fontSize: 36, fontWeight: 800, color: C.text, marginBottom: 8, letterSpacing: -0.5 }}>August 20, 2026 · 1-Day Format</h2>
        <p style={{ fontSize: 15, color: C.textGray, marginBottom: 36 }}>11:00 AM – 3:45 PM Eastern Time · Virtual · Worldwide Online</p>
        <div style={{ border: `1px solid ${C.border}`, borderRadius: 12, overflow: "hidden", background: C.bg }}>
          {sessions.map(({ time, type, dur, title, tag }, i) => (
            <div key={i} style={{ display: "flex", alignItems: "stretch", borderBottom: i < sessions.length - 1 ? `1px solid ${C.border}` : "none" }}>
              <div style={{ minWidth: 108, padding: "20px 16px", borderRight: `1px solid ${C.border}`, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: C.text }}>{time}</div>
                <div style={{ fontSize: 11, color: C.textGray, marginTop: 2 }}>{dur}</div>
              </div>
              <div style={{ width: 4, background: type === "Panel" ? C.red : type === "Break" ? C.border : C.green, flexShrink: 0 }} />
              <div style={{ flex: 1, padding: "20px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: type === "Panel" ? C.red : type === "Break" ? C.textGray : C.green, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 4 }}>{type}</div>
                  <div style={{ fontSize: 15, fontWeight: type === "Break" ? 500 : 700, color: type === "Break" ? C.textGray : C.text, lineHeight: 1.4 }}>{title}</div>
                </div>
                {tag && (
                  <span style={{ background: C.bgSoft, border: `1px solid ${C.border}`, color: C.textGray, padding: "4px 12px", borderRadius: 999, fontSize: 11, fontWeight: 600, whiteSpace: "nowrap", flexShrink: 0 }}>{tag}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EB5Explainer() {
  return (
    <section style={{ background: C.bg, padding: "72px 40px" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>

        {/* EB-5 Program Explainer */}
        <GreenLabel>Understanding the Program</GreenLabel>
        <h2 style={{ fontSize: 36, fontWeight: 800, color: C.text, marginBottom: 8, letterSpacing: -0.5 }}>
          What is EB-5? How Does It Work?
        </h2>
        <p style={{ fontSize: 16, color: C.textGray, maxWidth: 720, lineHeight: 1.75, marginBottom: 48 }}>
          The EB-5 Immigrant Investor Program allows foreign nationals to obtain a U.S. Green Card by investing capital into a qualifying U.S. business that creates American jobs. Created by Congress in 1990, it is the most direct capital-to-residency pathway in the United States.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 48 }}>
          {[
            {
              icon: "💵", title: "Minimum Investment",
              body: "$800,000 in a Targeted Employment Area (TEA) — rural or high-unemployment zones. $1,050,000 in standard areas. Most Regional Center projects qualify as TEA, making $800K the effective standard.",
            },
            {
              icon: "👷", title: "Job Creation Requirement",
              body: "Each investor must create or preserve at least 10 full-time U.S. jobs. In Regional Center investments, indirect and induced jobs count — making it significantly easier to satisfy this requirement.",
            },
            {
              icon: "🏛️", title: "Regional Center vs. Direct Investment",
              body: "95%+ of EB-5 investors use USCIS-designated Regional Centers — pooled investment vehicles that manage job creation compliance. Direct investment requires managing the business yourself.",
            },
            {
              icon: "📋", title: "The Path to Green Card",
              body: "File I-526E petition → Conditional Green Card (2 years) → File I-829 to remove conditions → Permanent Resident status. Total timeline: 3–7 years depending on country of birth and priority dates.",
            },
          ].map(({ icon, title, body }) => (
            <AccentCard key={title}>
              <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ fontSize: 28, lineHeight: 1, flexShrink: 0 }}>{icon}</div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: C.text, marginBottom: 8 }}>{title}</div>
                  <div style={{ fontSize: 13, color: C.textGray, lineHeight: 1.7 }}>{body}</div>
                </div>
              </div>
            </AccentCard>
          ))}
        </div>

        {/* EB-5 Process Timeline */}
        <div style={{ background: C.bgSoft, border: `1px solid ${C.border}`, borderRadius: 16, padding: "36px 40px", marginBottom: 64 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: C.green, letterSpacing: 2, textTransform: "uppercase", marginBottom: 20 }}>EB-5 Investor Journey — Typical Timeline</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 0, position: "relative" }}>
            <div style={{ position: "absolute", top: 20, left: "8%", right: "8%", height: 2, background: C.border, zIndex: 0 }} />
            {[
              { step: "01", label: "Source of Funds", time: "1–3 mo", desc: "Document capital origin with attorney" },
              { step: "02", label: "Select Project", time: "1–2 mo", desc: "Choose Regional Center & invest capital" },
              { step: "03", label: "File I-526E", time: "Immediate", desc: "USCIS petition filed; escrow released" },
              { step: "04", label: "USCIS Review", time: "12–30 mo", desc: "Petition processing & priority date" },
              { step: "05", label: "Conditional GC", time: "After approval", desc: "2-year conditional Green Card issued" },
              { step: "06", label: "Permanent GC", time: "+2 years", desc: "File I-829 to remove conditions" },
            ].map(({ step, label, time, desc }) => (
              <div key={step} style={{ textAlign: "center", padding: "0 8px", position: "relative", zIndex: 1 }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: C.green, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, margin: "0 auto 12px" }}>{step}</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: C.text, marginBottom: 4 }}>{label}</div>
                <div style={{ fontSize: 10, color: C.green, fontWeight: 700, marginBottom: 4 }}>{time}</div>
                <div style={{ fontSize: 11, color: C.textGray, lineHeight: 1.4 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Speaking Engagement Process */}
        <GreenLabel>For Partners & Speakers</GreenLabel>
        <h2 style={{ fontSize: 36, fontWeight: 800, color: C.text, marginBottom: 8, letterSpacing: -0.5 }}>
          How the Speaking Engagement Works
        </h2>
        <p style={{ fontSize: 16, color: C.textGray, maxWidth: 680, lineHeight: 1.75, marginBottom: 40 }}>
          Partners don't buy a speaking slot. They invest in a full-funnel pipeline engine — from audience targeting to scored lead delivery. Here's exactly what happens, week by week.
        </p>

        <div style={{ border: `1px solid ${C.border}`, borderRadius: 16, overflow: "hidden", marginBottom: 40 }}>
          {[
            {
              phase: "Phase 1", weeks: "Weeks 1–3", title: "Onboarding & Content Setup",
              color: C.green,
              items: [
                "Kick-off call to align on target audience, ICP, and key talking points",
                "Custom survey question block integrated into the FBS registration funnel",
                "Speaker bio, photo, and session title published on the event website",
                "Co-branded intro video recorded (optional) for pre-event promotion",
              ],
            },
            {
              phase: "Phase 2", weeks: "Weeks 4–8", title: "Pre-Event Promotion & Audience Building",
              color: "#3B82F6",
              items: [
                "Geo-targeted paid ads featuring your brand run across Meta and LinkedIn",
                "Dedicated email broadcasts to 10K+ audience list (2–4 sends depending on tier)",
                "Press release distributed to immigration, investment, and mobility media",
                "Social mentions using event hashtag with partner tags across FBS channels",
              ],
            },
            {
              phase: "Phase 3", weeks: "Event Day",
              title: "Live Keynote or Panel Session",
              color: C.red,
              items: [
                "30 or 45-minute live session streamed to registered attendees worldwide",
                "Partner logo displayed prominently throughout the live stream",
                "Q&A segment with attendees — real-time engagement with your ideal clients",
                "Session recording delivered within 48 hours for your own use",
              ],
            },
            {
              phase: "Phase 4", weeks: "Weeks 9–12", title: "Post-Event Lead Delivery & Intelligence",
              color: "#F59E0B",
              items: [
                "Full HOT / WARM / COLD scored lead list delivered via Airtable or CSV",
                "Behavioral data: which sessions attended, survey answers, visa interest, budget",
                "Dedicated post-event email broadcast to all attendees featuring your offer",
                "Branded post-event analytics report with audience insights and engagement data",
              ],
            },
          ].map(({ phase, weeks, title, color, items }) => (
            <div key={phase} style={{ display: "flex", borderBottom: phase !== "Phase 4" ? `1px solid ${C.border}` : "none" }}>
              <div style={{ width: 180, flexShrink: 0, padding: "28px 24px", borderRight: `1px solid ${C.border}`, background: C.bgSoft }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color, marginBottom: 6 }}>{phase}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: C.text, marginBottom: 4 }}>{weeks}</div>
                <div style={{ fontSize: 12, color: C.textGray, lineHeight: 1.4 }}>{title}</div>
              </div>
              <div style={{ flex: 1, padding: "28px 28px" }}>
                {items.map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, marginBottom: i < items.length - 1 ? 10 : 0, fontSize: 13, color: C.textMid, alignItems: "flex-start" }}>
                    <span style={{ color, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
                    <span style={{ lineHeight: 1.55 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* What you get summary */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {[
            { icon: "🎯", value: "500+", label: "Pre-qualified investor attendees" },
            { icon: "📊", value: "12", label: "Data fields per lead record" },
            { icon: "📧", value: "10K+", label: "Email audience reach" },
            { icon: "⚡", value: "7 days", label: "Lead delivery after event" },
          ].map(({ icon, value, label }) => (
            <div key={label} style={{ background: C.bgSoft, border: `1px solid ${C.border}`, borderRadius: 12, padding: "24px 20px", textAlign: "center" }}>
              <div style={{ fontSize: 28, marginBottom: 8 }}>{icon}</div>
              <div style={{ fontSize: 24, fontWeight: 900, color: C.text, marginBottom: 4 }}>{value}</div>
              <div style={{ fontSize: 12, color: C.textGray, lineHeight: 1.4 }}>{label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function Pricing() {
  const tiers = [
    { name: "Intelligence", price: "$1,950", tag: "Entry", features: ["Panel seat — 30 min", "Logo on event page", "Survey highlight data", "1 email broadcast", "Post-event analytics report", "Session attendee list"], cta: "Claim Slot" },
    { name: "Growth", price: "$3,450", tag: "Speaking", features: ["30-min keynote session", "Exclusive category lock", "Survey opt-in leads", "2 email broadcasts", "Session attendee list", "Post-event analytics report"], cta: "Claim Slot" },
    { name: "Strategic", price: "$5,950", tag: "Full Partner", highlight: true, features: ["45-min keynote + panel", "Co-branded survey module", "Full attendee + leads list", "4 email broadcasts", "Exclusive category lock", "Press release integration", "Post-event AMA session", "12-week integration"], cta: "Reserve This Tier" },
    { name: "Title Sponsor", price: "$9,500", tag: "Anchor", features: ['"Presented by" headline', "45-min keynote + panel", "Co-branded survey module", "All leads — complete list", "6 email broadcasts", "Sponsored video ad campaign", "Tier 1 media interview", "Co-organizer PR mention"], cta: "Enquire Now" },
  ];
  return (
    <section id="pricing" style={{ background: C.bg, padding: "72px 40px" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <GreenLabel>Partner Packages</GreenLabel>
        <h2 style={{ fontSize: 36, fontWeight: 800, color: C.text, marginBottom: 8, letterSpacing: -0.5 }}>Choose Your Position</h2>
        <p style={{ fontSize: 15, color: C.textGray, marginBottom: 16 }}>One partner per category. Exclusivity is structural — not a marketing promise.</p>
        <div style={{ display: "flex", gap: 8, marginBottom: 40, flexWrap: "wrap" }}>
          {["Only 1 EB-5 Regional Center", "Only 1 Immigration Law Firm", "Only 1 Franchise Broker", "Only 1 Wealth Manager"].map(t => (
            <span key={t} style={{ background: C.greenPale, color: C.greenDark, padding: "5px 14px", borderRadius: 999, fontSize: 12, fontWeight: 600 }}>✓ {t}</span>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {tiers.map(({ name, price, tag, features, highlight, cta }) => (
            <div key={name} style={{ background: highlight ? C.navy : C.bg, border: highlight ? `2px solid ${C.navy}` : `1px solid ${C.border}`, borderRadius: 16, padding: 24, position: "relative", display: "flex", flexDirection: "column" }}>
              {highlight && (
                <div style={{ position: "absolute", top: -1, left: "50%", transform: "translateX(-50%)", background: C.green, color: "#fff", fontSize: 10, fontWeight: 700, letterSpacing: 1.5, padding: "4px 16px", borderRadius: "0 0 8px 8px" }}>MOST POPULAR</div>
              )}
              <div style={{ marginTop: highlight ? 16 : 0, flex: 1 }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: highlight ? "rgba(255,255,255,0.45)" : C.textGray, marginBottom: 6 }}>{tag}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: highlight ? "#fff" : C.text, marginBottom: 4 }}>{name}</div>
                <div style={{ fontSize: 36, fontWeight: 900, color: highlight ? C.green : C.text, marginBottom: 16, lineHeight: 1 }}>{price}</div>
                <div style={{ height: 1, background: highlight ? "rgba(255,255,255,0.1)" : C.border, marginBottom: 16 }} />
                <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
                  {features.map(f => (
                    <div key={f} style={{ display: "flex", gap: 8, fontSize: 13, color: highlight ? "rgba(255,255,255,0.7)" : C.textMid, alignItems: "flex-start" }}>
                      <span style={{ color: C.green, fontWeight: 700, flexShrink: 0 }}>✓</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <a href="mailto:denis@fsummit.net" style={{ display: "block", textAlign: "center", background: highlight ? C.green : "transparent", border: `1.5px solid ${highlight ? C.green : C.borderDark}`, color: highlight ? "#fff" : C.text, padding: "11px 0", borderRadius: 8, fontSize: 13, fontWeight: 700, textDecoration: "none" }}>{cta} →</a>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 24, color: C.textGray, fontSize: 13 }}>
          Early bird pricing until June 15, 2026 · <a href="mailto:denis@fsummit.net" style={{ color: C.green, fontWeight: 600, textDecoration: "none" }}>Contact for custom packages</a>
        </div>
      </div>
    </section>
  );
}

function CTABlock() {
  return (
    <section style={{ background: C.navy, padding: "80px 40px" }}>
      <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontSize: 40, marginBottom: 20 }}>🇺🇸</div>
        <h2 style={{ fontSize: 40, fontWeight: 900, color: "#fff", marginBottom: 16, lineHeight: 1.15, letterSpacing: -0.5 }}>
          The September window is real.<br />
          <span style={{ color: C.green }}>Your spot is not guaranteed.</span>
        </h2>
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 17, lineHeight: 1.7, maxWidth: 500, margin: "0 auto 36px" }}>
          Register now for early access to FBS Invest America Summit. Free for qualified investors. Limited partner slots available.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 20 }}>
          <a href="https://tally.so" style={{ background: C.green, color: "#fff", padding: "16px 40px", borderRadius: 10, fontSize: 15, fontWeight: 700, textDecoration: "none" }}>Register Free →</a>
          <a href="mailto:denis@fsummit.net" style={{ border: "1.5px solid rgba(255,255,255,0.2)", color: "#fff", background: "transparent", padding: "16px 32px", borderRadius: 10, fontSize: 15, fontWeight: 600, textDecoration: "none" }}>Become a Partner</a>
        </div>
        <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 12 }}>Free for qualified investors · Service providers — contact for partner packages</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: C.navy, borderTop: "1px solid rgba(255,255,255,0.07)", padding: "24px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ width: 32, height: 32, borderRadius: "50%", background: C.green, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 12, color: "#fff" }}>FS</div>
        <span style={{ fontWeight: 700, fontSize: 14, color: "#fff" }}>Freedom Business Summit</span>
      </div>
      <div style={{ display: "flex", gap: 24 }}>
        {[["fsummit.net", "https://fsummit.net"], ["Malta Edition", "https://maltaedition.fsummit.net"], ["denis@fsummit.net", "mailto:denis@fsummit.net"]].map(([l, h]) => (
          <a key={l} href={h} style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, textDecoration: "none" }}>{l}</a>
        ))}
      </div>
      <div style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>© 2026 Freedom Business Summit · All Rights Reserved</div>
    </footer>
  );
}

export default function App() {
  return (
    <div style={{ background: C.bg, fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", color: C.text, minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        a { transition: opacity 0.15s; }
        a:hover { opacity: 0.8; }
      `}</style>
      <NavBar />
      <Hero />
      <About />
      <WhyPartner />
      <KeyTopics />
      <Audience />
      <Funnel />
      <Agenda />
      <EB5Explainer />
      <Pricing />
      <CTABlock />
      <Footer />
    </div>
  );
}
