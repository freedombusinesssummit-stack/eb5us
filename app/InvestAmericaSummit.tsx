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
  redDark: "#C41E33",
  border: "#E2E8F0",
  borderDark: "#CBD5E1",
  // Hero dark palette
  heroBlack: "#0A0A0A",
  heroRed: "#B22234",
  heroRedBright: "#E8334A",
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
        <div style={{ width: 36, height: 36, borderRadius: "50%", background: C.heroRed, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 13, color: "#fff" }}>FS</div>
        <span style={{ fontWeight: 700, fontSize: 15, color: C.text }}>Freedom Summit</span>
      </div>
      <div style={{ display: "flex", gap: 36 }}>
        {["About", "Audience", "Agenda", "Pricing"].map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} style={{ color: C.textGray, fontSize: 14, fontWeight: 500, textDecoration: "none" }}>{l}</a>
        ))}
      </div>
      <div style={{ display: "flex", gap: 12 }}>
        <a href="#pricing" style={{ border: `1.5px solid ${C.border}`, borderRadius: 8, padding: "8px 20px", fontSize: 13, fontWeight: 600, color: C.text, textDecoration: "none", background: C.bg }}>View Packages</a>
        <a href="mailto:denis@fsummit.net" style={{ background: C.heroRed, color: "#fff", padding: "8px 20px", borderRadius: 8, fontSize: 13, fontWeight: 700, textDecoration: "none" }}>Partner With Us</a>
      </div>
    </nav>
  );
}

function Hero() {
  const t = useCountdown("2026-07-27T11:00:00-04:00");
  return (
    <section style={{ background: C.bg, paddingTop: 64, borderBottom: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "72px 40px 64px" }}>
        <div style={{ display: "flex", gap: 10, marginBottom: 28, flexWrap: "wrap" }}>
          <Pill dark>July 27–28, 2026</Pill>
          <Pill dark>💻 Virtual Event</Pill>
          <Pill dark>🌐 Worldwide Online</Pill>
        </div>

        <h1 style={{ fontSize: "clamp(38px, 5.5vw, 68px)", fontWeight: 900, lineHeight: 1.05, color: C.text, marginBottom: 16, letterSpacing: -1 }}>
          Freedom Business Summit 2026<br />
          Invest America Edition 🇺🇸
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
              <span style={{ color: C.heroRed, fontSize: 18, marginTop: 2, flexShrink: 0 }}>•</span>
              <span style={{ fontSize: 16, fontWeight: 700, color: C.text }}>{txt}</span>
            </div>
          ))}
        </div>

        <div style={{ display: "inline-flex", alignItems: "center", gap: 14, border: `1px solid ${C.border}`, borderRadius: 12, padding: "14px 20px", marginBottom: 28, background: C.bgSoft }}>
          <div style={{ fontSize: 24 }}>🏛️</div>
          <div>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, color: C.heroRed, textTransform: "uppercase" }}>Single Jurisdiction Focus</div>
            <div style={{ fontSize: 14, fontWeight: 600, color: C.text }}>US Inbound · EB-5 Investor Visa · E-2 Treaty · USCIS 2026</div>
          </div>
        </div>

        <div style={{ marginBottom: 36 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: C.navy, borderRadius: 999, padding: "8px 18px 8px 12px", marginBottom: 16 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: C.heroRed, display: "inline-block" }} />
            <span style={{ color: "#fff", fontSize: 13, fontWeight: 600 }}>Get Early Bird Access! Act Fast</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 2 }}>
            {[{ val: t.d, label: "days" }, { val: t.h, label: "hrs" }, { val: t.m, label: "min" }, { val: t.s, label: "sec" }].map(({ val, label }, i) => (
              <div key={label} style={{ display: "flex", alignItems: "flex-end", gap: 2 }}>
                {i > 0 && <span style={{ fontSize: 56, fontWeight: 900, color: C.heroRed, lineHeight: 1, margin: "0 2px 20px" }}>:</span>}
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 64, fontWeight: 900, color: C.text, lineHeight: 1 }}>{String(val).padStart(2, "0")}</div>
                  <div style={{ fontSize: 12, color: C.textGray, marginTop: 4 }}>{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <a href="mailto:denis@fsummit.net" style={{ background: C.heroRed, color: "#fff", padding: "14px 32px", borderRadius: 10, fontSize: 15, fontWeight: 700, textDecoration: "none" }}>Partner With Us →</a>
          <a href="#pricing" style={{ border: `1.5px solid ${C.border}`, background: C.bg, color: C.text, padding: "14px 32px", borderRadius: 10, fontSize: 15, fontWeight: 600, textDecoration: "none" }}>View Packages</a>
        </div>
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

function Speakers() {
  const speakers = [
    { initials: "JR", name: "James Rowling", role: "Senior EB-5 Immigration Attorney", firm: "Rowling Immigration Law · New York", tag: "EB-5 Legal" },
    { initials: "SK", name: "Sunita Kapoor", role: "Regional Center Director", firm: "Capital USA Partners · Los Angeles", tag: "Regional Center" },
    { initials: "MC", name: "Marco Chen", role: "E-2 Franchise & Business Consultant", firm: "AmeriVenture Group · Miami", tag: "E-2 Strategy" },
    { initials: "AL", name: "Anna Liebowitz", role: "International Tax & Wealth Structuring", firm: "Global Wealth Advisors · New York", tag: "Tax & Structuring" },
    { initials: "DR", name: "David Reyes", role: "EB-5 Policy & Compliance Expert", firm: "U.S. Immigration Policy Institute", tag: "USCIS Policy" },
    { initials: "PM", name: "Priya Mehta", role: "Cross-Border Wealth Manager", firm: "Meridian Family Office · Singapore", tag: "Investor Profile" },
  ];
  return (
    <section style={{ background: C.bgSection, padding: "72px 40px" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <GreenLabel>Featured Speakers</GreenLabel>
        <h2 style={{ fontSize: 36, fontWeight: 800, color: C.text, marginBottom: 8, letterSpacing: -0.5 }}>
          Practitioners, Not Theorists
        </h2>
        <p style={{ fontSize: 15, color: C.textGray, marginBottom: 12, maxWidth: 620 }}>
          Every speaker has closed real EB-5 and E-2 deals. No academics. No generalists. Single focus: <strong style={{ color: C.text }}>U.S. Inbound — EB-5 Investor Flow.</strong>
        </p>

        {/* Single jurisdiction badge */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: C.bg, border: `1.5px solid ${C.green}`, borderRadius: 10, padding: "10px 20px", marginBottom: 40 }}>
          <span style={{ fontSize: 20 }}>🇺🇸</span>
          <div>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, color: C.green, textTransform: "uppercase" }}>Single Jurisdiction Focus</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: C.text }}>US Inbound · EB-5 Immigrant Investor Program</div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 24 }}>
          {speakers.map(({ initials, name, role, firm, tag }) => (
            <div key={name} style={{
              background: C.bg,
              border: `1px solid ${C.border}`,
              borderRadius: 12,
              padding: "24px 20px",
              display: "flex", gap: 16, alignItems: "flex-start",
              transition: "border-color 0.2s",
            }}>
              <div style={{
                width: 48, height: 48, borderRadius: "50%",
                background: C.greenPale,
                border: `1.5px solid ${C.green}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 14, fontWeight: 800, color: C.greenDark,
                flexShrink: 0,
              }}>{initials}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 2 }}>{name}</div>
                <div style={{ fontSize: 12, color: C.textGray, marginBottom: 8, lineHeight: 1.4 }}>{role}</div>
                <div style={{ fontSize: 11, color: C.textMid, marginBottom: 8 }}>{firm}</div>
                <span style={{
                  background: C.bgSoft, border: `1px solid ${C.border}`,
                  color: C.textGray, padding: "3px 10px", borderRadius: 999,
                  fontSize: 10, fontWeight: 600,
                }}>{tag}</span>
              </div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 13, color: C.textGray, textAlign: "center" }}>
          Full speaker lineup announced June 2026 · <a href="mailto:denis@fsummit.net" style={{ color: C.green, fontWeight: 600, textDecoration: "none" }}>Apply to speak →</a>
        </p>
      </div>
    </section>
  );
}

function Agenda() {
  const sessions = [
    { time: "11:00 AM", type: "Keynote", dur: "45 min", title: "EB-5 in 2026: What Changed, What Didn't, and What You Must Know Before Investing", tag: "EB-5 Foundation" },
    { time: "11:50 AM", type: "Keynote", dur: "45 min", title: "How to Evaluate a Regional Center: 7 Signals That Separate Safe Projects from Disasters", tag: "Due Diligence" },
    { time: "12:40 PM", type: "Keynote", dur: "45 min", title: "E-2 vs. EB-5: Which Path Fits Your Capital, Country & Timeline", tag: "Program Comparison" },
    { time: "1:30 PM", type: "Keynote", dur: "45 min", title: "The E-2 Playbook: Franchises, Acquisitions & Startups That Qualify", tag: "E-2 Deep Dive" },
    { time: "2:20 PM", type: "Panel", dur: "60 min", title: "Real Investors, Real Stories — What EB-5 & E-2 Looked Like From the Inside", tag: "Live Panel" },
    { time: "3:25 PM", type: "Keynote", dur: "45 min", title: "After Approval: U.S. Banking, Tax & Wealth Structuring for New Residents", tag: "Post-Visa Strategy" },
  ];
  return (
    <section id="agenda" style={{ background: C.bgSection, padding: "72px 40px" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <GreenLabel>Summit Agenda</GreenLabel>
        <h2 style={{ fontSize: 36, fontWeight: 800, color: C.text, marginBottom: 8, letterSpacing: -0.5 }}>July 27, 2026 · 1-Day Format</h2>
        <p style={{ fontSize: 15, color: C.textGray, marginBottom: 36 }}>11:00 AM – 4:10 PM Eastern Time · Virtual · Worldwide Online</p>
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
  return (
    <section id="pricing" style={{ background: C.bgSection, padding: "72px 40px" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>

        {/* Header */}
        <GreenLabel>Engagement Options</GreenLabel>
        <h2 style={{ fontSize: 36, fontWeight: 800, color: C.text, marginBottom: 8, letterSpacing: -0.5 }}>
          Speaking & Partnership Engagement
        </h2>
        <p style={{ fontSize: 15, color: C.textMid, marginBottom: 6 }}>
          For this event we allocated <strong>6 speaking slots only</strong>.
        </p>
        <p style={{ fontSize: 15, color: C.textGray, marginBottom: 32 }}>
          6 slots per event. Every partner gets qualified leads, audience data, and thought leadership positioning.
        </p>

        {/* Value callout box */}
        <div style={{
          border: `1.5px solid ${C.green}`,
          borderRadius: 12,
          padding: "20px 28px",
          marginBottom: 40,
          background: C.bg,
        }}>
          <div style={{ fontSize: 14, color: C.textMid, marginBottom: 4 }}>
            Speakers & Partners don't invest into "Speaking Slot".
          </div>
          <div style={{ fontSize: 15, fontWeight: 600, color: C.text }}>
            You invest to get{" "}
            <span style={{ color: C.green }}>Audience Insights</span>
            {" "}and access to{" "}
            <span style={{ color: C.green }}>High-Intent Pre-Qualified Prospects.</span>
          </div>
        </div>

        {/* Animated price boxes — light bg, black/red accents */}
        <style>{`
          @keyframes shimmerLight {
            0% { transform: translateX(-100%) skewX(-15deg); }
            100% { transform: translateX(350%) skewX(-15deg); }
          }
          @keyframes floatUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .price-card-1 { animation: floatUp 0.5s ease 0.1s forwards; opacity: 0; }
          .price-card-2 { animation: floatUp 0.5s ease 0.22s forwards; opacity: 0; }
          .price-card-1:hover, .price-card-2:hover { transform: translateY(-3px); box-shadow: 0 12px 40px rgba(0,0,0,0.1) !important; }
          .shimmer-red {
            position: absolute; top: 0; left: 0; right: 0; bottom: 0;
            background: linear-gradient(90deg, transparent 0%, rgba(178,34,52,0.06) 50%, transparent 100%);
            width: 50%; animation: shimmerLight 4s infinite 0.5s; pointer-events: none;
          }
          .shimmer-dark {
            position: absolute; top: 0; left: 0; right: 0; bottom: 0;
            background: linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.03) 50%, transparent 100%);
            width: 50%; animation: shimmerLight 4.5s infinite 1s; pointer-events: none;
          }
          .price-btn-red { transition: background 0.2s, transform 0.15s !important; }
          .price-btn-red:hover { background: #9e1a2a !important; transform: scale(1.01); }
          .price-btn-outline:hover { background: #f5f5f5 !important; }
        `}</style>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 48 }}>

          {/* Card 1 — Speaking & Visibility — white bg, dark accents */}
          <div className="price-card-1" style={{
            background: C.bg,
            border: `1.5px solid ${C.border}`,
            borderRadius: 20, overflow: "hidden",
            display: "flex", flexDirection: "column",
            position: "relative",
            boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
            transition: "transform 0.25s ease, box-shadow 0.25s ease",
          }}>
            <div className="shimmer-dark" />

            {/* Diagonal lines — subtle */}
            <svg style={{ position: "absolute", top: 0, right: 0, opacity: 0.06, pointerEvents: "none" }} width="200" height="200" viewBox="0 0 200 200">
              {[0,18,36,54,72,90,108,126].map(i => <line key={i} x1={200-i} y1="0" x2="200" y2={i} stroke="#0D0D0D" strokeWidth="1.5"/>)}
              {[0,18,36,54,72,90,108].map(i => <line key={`b${i}`} x1={92-i} y1="0" x2="200" y2={108+i} stroke="#0D0D0D" strokeWidth="1.5"/>)}
            </svg>

            <div style={{ padding: "28px 28px 24px", flex: 1 }}>
              <div style={{ marginBottom: 18 }}>
                <span style={{ background: "#F1F5F9", color: C.textGray, fontSize: 10, fontWeight: 700, padding: "4px 12px", borderRadius: 999, letterSpacing: 1, textTransform: "uppercase" }}>Limited Slots Per Industry</span>
              </div>
              <div style={{ fontSize: 21, fontWeight: 800, color: C.text, marginBottom: 4, letterSpacing: -0.3 }}>Speaking & Visibility</div>
              <div style={{ fontSize: 12, color: C.textGray, marginBottom: 20, letterSpacing: 0.5 }}>Per speaking slot</div>
              <p style={{ fontSize: 13, color: C.textMid, lineHeight: 1.7, marginBottom: 22 }}>
                <strong>Pay-per-speaking-slot with light branding.</strong> Best for companies wanting to test the audience and collect leads without full sponsorship.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                {["30-min keynote or panel seat", "Logo on event page + live stream", "Session attendee list (opted-in)", "Survey highlight data", "1 dedicated email broadcast", "Post-event analytics report", "Exclusive category lock"].map(f => (
                  <div key={f} style={{ display: "flex", gap: 10, fontSize: 13, color: C.textMid, alignItems: "center" }}>
                    <span style={{ width: 16, height: 16, borderRadius: "50%", background: "#F1F5F9", border: `1.5px solid ${C.borderDark}`, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 8, color: C.text, fontWeight: 900, flexShrink: 0 }}>✓</span>
                    {f}
                  </div>
                ))}
              </div>
            </div>

            {/* Price footer */}
            <div style={{ background: "#F8F9FB", borderTop: `1px solid ${C.border}`, padding: "22px 28px" }}>
              <div style={{ fontSize: 10, color: C.textGray, letterSpacing: 2, textTransform: "uppercase", marginBottom: 4 }}>Speaking · Early Bird</div>
              <div style={{ fontSize: 44, fontWeight: 900, color: C.text, letterSpacing: -2, lineHeight: 1, marginBottom: 4 }}>$2,150</div>
              <div style={{ fontSize: 12, color: C.textGray, marginBottom: 18 }}>Standard (June 15th): <span style={{ textDecoration: "line-through" }}>$2,950</span></div>
              <a href="mailto:denis@fsummit.net" className="price-btn-outline" style={{ display: "block", textAlign: "center", background: C.bg, border: `1.5px solid ${C.borderDark}`, color: C.text, padding: "13px 0", borderRadius: 10, fontSize: 13, fontWeight: 700, textDecoration: "none", transition: "background 0.2s" }}>Claim Speaking Slot →</a>
            </div>
          </div>

          {/* Card 2 — Brand Integration — light red tint bg, red accent */}
          <div className="price-card-2" style={{
            background: "#FFF8F8",
            border: `1.5px solid ${C.heroRed}30`,
            borderRadius: 20, overflow: "hidden",
            display: "flex", flexDirection: "column",
            position: "relative",
            boxShadow: `0 4px 24px rgba(178,34,52,0.08)`,
            transition: "transform 0.25s ease, box-shadow 0.25s ease",
          }}>
            <div className="shimmer-red" />

            {/* Red top accent bar */}
            <div style={{ height: 4, background: `linear-gradient(90deg, ${C.heroRed}, #e8334a)` }} />

            {/* Diagonal lines — red tint */}
            <svg style={{ position: "absolute", top: 0, right: 0, opacity: 0.08, pointerEvents: "none" }} width="200" height="200" viewBox="0 0 200 200">
              {[0,18,36,54,72,90,108,126].map(i => <line key={i} x1={200-i} y1="0" x2="200" y2={i} stroke={C.heroRed} strokeWidth="1.5"/>)}
              {[0,18,36,54,72,90,108].map(i => <line key={`b${i}`} x1={92-i} y1="0" x2="200" y2={108+i} stroke={C.heroRed} strokeWidth="1.5"/>)}
            </svg>

            <div style={{ padding: "28px 28px 24px", flex: 1 }}>
              <div style={{ marginBottom: 18 }}>
                <span style={{ background: `${C.heroRed}15`, color: C.heroRed, fontSize: 10, fontWeight: 700, padding: "4px 12px", borderRadius: 999, letterSpacing: 1, textTransform: "uppercase", border: `1px solid ${C.heroRed}30` }}>Only ONE Brand Partner Per Event</span>
              </div>
              <div style={{ fontSize: 21, fontWeight: 800, color: C.text, marginBottom: 4, letterSpacing: -0.3 }}>Brand Integration Partnership</div>
              <div style={{ fontSize: 12, color: C.textGray, marginBottom: 20, letterSpacing: 0.5 }}>8–12 weeks integration</div>
              <p style={{ fontSize: 13, color: C.textMid, lineHeight: 1.7, marginBottom: 22 }}>
                8–12 weeks integrated presence with <strong>Co-Created Content, Thought Leadership + Summit Exposure + Lead Generation + PR & Media Coverage.</strong>
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                {["45-min keynote + panel participation", "Co-branded survey module", "Full attendee + scored leads list", "4–6 dedicated email broadcasts", "Geo-targeted paid ad integration", "Press release distribution", "Thought leadership article series", "Post-event AMA session", "Branded full post-event analytics report", "Exclusive category lock — no competitors"].map(f => (
                  <div key={f} style={{ display: "flex", gap: 10, fontSize: 13, color: C.textMid, alignItems: "center" }}>
                    <span style={{ width: 16, height: 16, borderRadius: "50%", background: `${C.heroRed}12`, border: `1.5px solid ${C.heroRed}50`, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 8, color: C.heroRed, fontWeight: 900, flexShrink: 0 }}>✓</span>
                    {f}
                  </div>
                ))}
              </div>
            </div>

            {/* Price footer */}
            <div style={{ background: `${C.heroRed}08`, borderTop: `1px solid ${C.heroRed}20`, padding: "22px 28px" }}>
              <div style={{ fontSize: 10, color: C.heroRed, letterSpacing: 2, textTransform: "uppercase", marginBottom: 4, fontWeight: 700 }}>Strategic · Early Bird</div>
              <div style={{ fontSize: 44, fontWeight: 900, color: C.text, letterSpacing: -2, lineHeight: 1, marginBottom: 4 }}>$5,950</div>
              <div style={{ fontSize: 12, color: C.textGray, marginBottom: 18 }}>Standard (June 15th): <span style={{ textDecoration: "line-through" }}>$6,950</span></div>
              <a href="mailto:denis@fsummit.net" className="price-btn-red" style={{ display: "block", textAlign: "center", background: C.heroRed, color: "#fff", padding: "13px 0", borderRadius: 10, fontSize: 13, fontWeight: 800, textDecoration: "none" }}>Claim Brand Integration Slot →</a>
            </div>
          </div>

        </div>

        {/* Partners Engagement — 3-column breakdown */}
        <div style={{ background: C.bg, border: `1px solid ${C.border}`, borderRadius: 16, padding: "36px 40px", marginBottom: 40 }}>
          <GreenLabel>Partners Engagement</GreenLabel>
          <h3 style={{ fontSize: 24, fontWeight: 800, color: C.text, marginBottom: 8, letterSpacing: -0.3 }}>Partners Engagement</h3>
          <p style={{ fontSize: 14, color: C.textGray, marginBottom: 32, maxWidth: 640, lineHeight: 1.65 }}>
            Our partners get direct access to real data on audience behavior, investment interests, and mobility trends — the kind of intelligence that drives deals.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0, borderRadius: 12, overflow: "hidden", border: `1px solid ${C.border}` }}>
            {[
              {
                label: "Pre Event Exposure",
                bg: C.green, color: "#fff",
                items: [
                  "Geo-targeted video ads (Impressions & CPM)",
                  "Press release metrics and reach",
                  "Registration driven by ads (UTM)",
                  "CTR to landing page",
                ],
              },
              {
                label: "Event Brand Awareness",
                bg: "#FEF9C3", color: "#713F12",
                items: [
                  "Keynote or panel talk",
                  "Partner logo during live-stream",
                  "Free lead offer (ebook, consult, QR scan)",
                  "Social mentions using event hashtag",
                  "Live session viewers",
                ],
              },
              {
                label: "Post Event Engagement",
                bg: "#EFF6FF", color: "#1E40AF",
                items: [
                  "Full attendee survey",
                  "Behavior and interest data",
                  "Dedicated email broadcast and articles",
                  "Number of qualified leads",
                  "Open and click CTR data",
                ],
              },
            ].map(({ label, bg, color, items }) => (
              <div key={label} style={{ padding: "24px 24px", borderRight: label !== "Post Event Engagement" ? `1px solid ${C.border}` : "none" }}>
                <div style={{
                  display: "inline-block",
                  background: bg, color,
                  fontSize: 12, fontWeight: 800,
                  padding: "6px 16px", borderRadius: 999,
                  marginBottom: 20,
                }}>{label}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {items.map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: 10, fontSize: 13, color: C.textMid, alignItems: "flex-start" }}>
                      <span style={{ color: C.textGray, fontWeight: 700, flexShrink: 0, minWidth: 16 }}>{i + 1}.</span>
                      <span style={{ lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Timeline bar */}
          <div style={{ marginTop: 32, textAlign: "center" }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: C.text, marginBottom: 16 }}>
              Partnership Engagement Timeline 8–12 Weeks (From Pre to Post Event)
            </div>
            <div style={{ position: "relative", height: 12, borderRadius: 999, overflow: "hidden", marginBottom: 8 }}>
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to right, #7DC142, #A3D977, #BEE08A, #C8E6A0, #B8D9CC, #93C5D8, #6BAED6)",
              }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: 11, color: C.textGray }}>Week 1</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: C.green }}>Pre Event</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#B45309" }}>Event Day</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 11, color: C.textGray }}>Week 12</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#1E40AF" }}>Post Event</div>
              </div>
            </div>
            <div style={{ fontSize: 12, color: C.textGray, marginTop: 8 }}>
              Brand Integration includes full 8–12 week presence — not just the event day
            </div>
          </div>
        </div>

        {/* Exclusivity tags */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
          {["Only 1 EB-5 Regional Center", "Only 1 Immigration Law Firm", "Only 1 Franchise Broker", "Only 1 Wealth Manager"].map(t => (
            <span key={t} style={{ background: C.greenPale, color: C.greenDark, padding: "5px 14px", borderRadius: 999, fontSize: 12, fontWeight: 600 }}>✓ {t}</span>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 20, color: C.textGray, fontSize: 13 }}>
          Early bird pricing until June 15, 2026 ·{" "}
          <a href="mailto:denis@fsummit.net" style={{ color: C.green, fontWeight: 600, textDecoration: "none" }}>Contact for custom packages</a>
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
      <Speakers />
      <Agenda />
      <EB5Explainer />
      <Pricing />
      <CTABlock />
      <Footer />
    </div>
  );
}
