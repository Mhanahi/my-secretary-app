import { useState, useEffect, useRef } from "react";

const COLORS = {
  yellow:   "#C8A96E",
  lime:     "#A0785A",
  sky:      "#D4B896",
  teal:     "#8B5E3C",
  orange:   "#E8D5B7",
  blue:     "#6B3F2A",
  green:    "#F0E6D3",
  pink:     "#B8865A",
  purple:   "#7A4F35",
  bg:       "#FAF3E8",
  card:     "#FFF9F2",
  text:     "#3B1F0E",
  muted:    "#A08060",
};

// ── SVG Illustrations ─────────────────────────────────────────────────────────

function IlluStar({ size = 20, color = COLORS.yellow }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"
        fill={color} stroke={color} strokeWidth="1" strokeLinejoin="round"/>
    </svg>
  );
}

function IlluCheckCircle({ size = 20, color = COLORS.teal }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill={color} opacity="0.2"/>
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2"/>
      <path d="M7 12.5l3.5 3.5 6.5-7" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IlluCalendar({ size = 20, color = COLORS.sky }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="17" rx="3" fill={color} opacity="0.15" stroke={color} strokeWidth="1.8"/>
      <path d="M3 10h18" stroke={color} strokeWidth="1.8"/>
      <path d="M8 3v4M16 3v4" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <circle cx="8" cy="15" r="1.5" fill={color}/>
      <circle cx="12" cy="15" r="1.5" fill={color}/>
      <circle cx="16" cy="15" r="1.5" fill={color}/>
    </svg>
  );
}

function IlluBag({ size = 20, color = COLORS.orange }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="4" y="9" width="16" height="12" rx="2" fill={color} opacity="0.2" stroke={color} strokeWidth="1.8"/>
      <path d="M9 9V7a3 3 0 016 0v2" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M8 13h8" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

function IlluHeart({ size = 20, color = COLORS.lime }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 21C12 21 3 15 3 9a5 5 0 019-3 5 5 0 019 3c0 6-9 12-9 12z"
        fill={color} opacity="0.25" stroke={color} strokeWidth="1.8" strokeLinejoin="round"/>
    </svg>
  );
}

function IlluPeople({ size = 20, color = COLORS.blue }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="9" cy="7" r="3.5" fill={color} opacity="0.2" stroke={color} strokeWidth="1.8"/>
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="17" cy="8" r="2.5" stroke={color} strokeWidth="1.6"/>
      <path d="M21 20c0-2.8-1.8-5-4-5" stroke={color} strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}

function IlluBriefcase({ size = 20, color = COLORS.teal }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="9" width="18" height="12" rx="2" fill={color} opacity="0.15" stroke={color} strokeWidth="1.8"/>
      <path d="M8 9V7a4 4 0 018 0v2" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M3 14h18" stroke={color} strokeWidth="1.6"/>
      <rect x="10" y="12" width="4" height="4" rx="1" fill={color}/>
    </svg>
  );
}

function IlluSparkle({ size = 22, color = COLORS.yellow }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <path d="M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <circle cx="12" cy="12" r="3" fill={color}/>
    </svg>
  );
}

function IlluHome({ size = 22, color = COLORS.lime }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M3 12L12 3l9 9" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IlluTaskList({ size = 22, color = COLORS.lime }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="4" y="3" width="16" height="18" rx="3" fill={color} opacity="0.15" stroke={color} strokeWidth="1.8"/>
      <path d="M8 8h8M8 12h8M8 16h5" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

function IlluBot({ size = 28, color = COLORS.sky }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="4" y="8" width="16" height="12" rx="4" fill={color} opacity="0.2" stroke={color} strokeWidth="1.8"/>
      <circle cx="9" cy="13" r="1.8" fill={color}/>
      <circle cx="15" cy="13" r="1.8" fill={color}/>
      <path d="M9 17.5c.8.7 1.5 1 3 1s2.2-.3 3-1" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 8V5" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <circle cx="12" cy="4" r="1.5" fill={color}/>
      <path d="M4 14H2M22 14h-2" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

function IlluSun({ size = 28, color = COLORS.yellow }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="5" fill={color} opacity="0.3" stroke={color} strokeWidth="1.8"/>
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
        stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

const ILLU_MAP = {
  work:     <IlluBriefcase size={18} />,
  personal: <IlluHeart size={18} color={COLORS.pink} />,
  health:   <IlluHeart size={18} color={COLORS.lime} />,
  family:   <IlluPeople size={18} color={COLORS.purple} />,
  shopping: <IlluBag size={18} />,
  other:    <IlluSparkle size={18} color={COLORS.purple} />,
};

const initialTasks = [
  { id: 1, text: "Call the dentist", done: false, priority: "high", category: "health", due: "2026-03-12" },
  { id: 2, text: "Buy groceries", done: false, priority: "medium", category: "shopping", due: "2026-03-11" },
  { id: 3, text: "Send birthday card to Mom", done: true, priority: "high", category: "family", due: "2026-03-10" },
];

const initialEvents = [
  { id: 1, title: "Team standup", date: "2026-03-11", time: "09:00", color: COLORS.sky, category: "work" },
  { id: 2, title: "Yoga class", date: "2026-03-12", time: "07:30", color: COLORS.lime, category: "health" },
  { id: 3, title: "Lunch with Sarah", date: "2026-03-13", time: "12:30", color: COLORS.pink, category: "personal" },
  { id: 4, title: "Doctor appointment", date: "2026-03-15", time: "15:00", color: COLORS.purple, category: "health" },
];

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 17) return "Good afternoon";
  return "Good evening";
}

function Avatar({ name, size = 36 }) {
  const cols = [COLORS.yellow, COLORS.lime, COLORS.sky, COLORS.pink, COLORS.purple];
  const color = cols[name.charCodeAt(0) % cols.length];
  return (
    <div style={{ width: size, height: size, borderRadius: "50%", background: color, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: size * 0.4, color: "#fff", flexShrink: 0, fontFamily: "'Fredoka One', cursive", boxShadow: `0 3px 10px ${color}88` }}>
      {name[0].toUpperCase()}
    </div>
  );
}

function PriorityPill({ priority }) {
  const map = { high: { bg: COLORS.pink, label: "High" }, medium: { bg: COLORS.yellow, label: "Med" }, low: { bg: COLORS.lime, label: "Low" } };
  const { bg, label } = map[priority] || map.low;
  return (
    <span style={{ fontSize: 10, fontWeight: 700, background: bg + "44", color: COLORS.text, padding: "2px 7px", borderRadius: 20, fontFamily: "'Nunito', sans-serif" }}>{label}</span>
  );
}

// ── AI Chat ───────────────────────────────────────────────────────────────────
function AIChat({ onCommand }) {
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Hi! I'm your personal secretary. Tell me what you need — add tasks, schedule events, or just ask me anything!" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  async function send() {
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    setInput("");
    setMessages(m => [...m, { role: "user", text: userMsg }]);
    setLoading(true);
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: `You are a helpful, friendly personal secretary AI. Help the user manage calendar events and to-do tasks. No emojis in responses.

When adding a task, include:
ACTION: {"type":"add_task","text":"task text","priority":"high/medium/low","category":"work/personal/health/family/shopping/other","due":"YYYY-MM-DD or null"}

When adding a calendar event, include:
ACTION: {"type":"add_event","title":"event title","date":"YYYY-MM-DD","time":"HH:MM","category":"work/personal/health/family/other"}

Keep responses short, warm, and conversational. Today is ${new Date().toDateString()}.`,
          messages: [
            ...messages.map(m => ({ role: m.role === "assistant" ? "assistant" : "user", content: m.text })),
            { role: "user", content: userMsg }
          ]
        })
      });
      const data = await res.json();
      const text = data.content?.[0]?.text || "Sorry, I couldn't process that.";
      const actionMatch = text.match(/ACTION:\s*(\{.*?\})/s);
      if (actionMatch) { try { onCommand(JSON.parse(actionMatch[1])); } catch {} }
      setMessages(m => [...m, { role: "assistant", text: text.replace(/ACTION:\s*\{.*?\}/s, "").trim() }]);
    } catch {
      setMessages(m => [...m, { role: "assistant", text: "Something went wrong. Please try again." }]);
    }
    setLoading(false);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div style={{ flex: 1, overflowY: "auto", padding: "16px", display: "flex", flexDirection: "column", gap: 12 }}>
        {messages.map((m, i) => (
          <div key={i} style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start", gap: 8, alignItems: "flex-end" }}>
            {m.role === "assistant" && (
              <div style={{ width: 34, height: 34, borderRadius: "50%", background: `linear-gradient(135deg, ${COLORS.purple}, ${COLORS.pink})`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <IlluBot size={20} color="#fff" />
              </div>
            )}
            <div style={{
              maxWidth: "75%", padding: "10px 14px",
              borderRadius: m.role === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
              background: m.role === "user" ? `linear-gradient(135deg, ${COLORS.purple}, ${COLORS.pink})` : "#fff",
              color: m.role === "user" ? "#fff" : COLORS.text,
              fontSize: 14, lineHeight: 1.55, boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
              fontFamily: "'Nunito', sans-serif"
            }}>{m.text}</div>
          </div>
        ))}
        {loading && (
          <div style={{ display: "flex", gap: 8, alignItems: "flex-end" }}>
            <div style={{ width: 34, height: 34, borderRadius: "50%", background: `linear-gradient(135deg, ${COLORS.purple}, ${COLORS.pink})`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <IlluBot size={20} color="#fff" />
            </div>
            <div style={{ padding: "12px 16px", background: "#fff", borderRadius: "18px 18px 18px 4px", boxShadow: "0 2px 8px rgba(0,0,0,0.07)", display: "flex", gap: 5, alignItems: "center" }}>
              {[0,1,2].map(i => <span key={i} style={{ width: 7, height: 7, borderRadius: "50%", background: COLORS.sky, display: "inline-block", animation: `bounce 1s ${i*0.18}s infinite` }} />)}
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>
      <div style={{ padding: "12px 16px", borderTop: `1px solid ${COLORS.lime}44`, display: "flex", gap: 8 }}>
        <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && send()}
          placeholder='Try "Remind me to call mom Friday"'
          style={{ flex: 1, padding: "10px 16px", borderRadius: 24, border: `1.5px solid ${COLORS.sky}66`, outline: "none", fontSize: 14, fontFamily: "'Nunito', sans-serif", background: "#f5fbff", color: COLORS.text }}
        />
        <button onClick={send} style={{ width: 44, height: 44, borderRadius: "50%", border: "none", background: `linear-gradient(135deg, ${COLORS.purple}, ${COLORS.pink})`, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 4px 12px ${COLORS.sky}55` }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M22 2L11 13" stroke="white" strokeWidth="2.2" strokeLinecap="round"/><path d="M22 2L15 22l-4-9-9-4 20-7z" stroke="white" strokeWidth="2.2" strokeLinejoin="round"/></svg>
        </button>
      </div>
    </div>
  );
}

// ── Calendar ──────────────────────────────────────────────────────────────────
function CalendarView({ events, onAddEvent }) {
  const today = new Date();
  const [viewDate, setViewDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ title: "", date: "", time: "", category: "personal" });
  const year = viewDate.getFullYear(), month = viewDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells = [...Array(firstDay).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)];

  const getEventsForDay = d => {
    const ds = `${year}-${String(month+1).padStart(2,"0")}-${String(d).padStart(2,"0")}`;
    return events.filter(e => e.date === ds);
  };
  const isToday = d => d === today.getDate() && month === today.getMonth() && year === today.getFullYear();
  const upcoming = [...events].filter(e => e.date >= today.toISOString().split("T")[0]).sort((a,b) => a.date.localeCompare(b.date)).slice(0, 5);
  const inp = { padding: "9px 12px", borderRadius: 10, border: `1.5px solid ${COLORS.sky}44`, outline: "none", fontSize: 13, fontFamily: "'Nunito', sans-serif", width: "100%" };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
      <div style={{ background: "#fff", borderRadius: 22, padding: 20, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <button onClick={() => setViewDate(new Date(year, month-1, 1))} style={{ background: `${COLORS.purple}18`, border: "none", cursor: "pointer", width: 32, height: 32, borderRadius: "50%", color: COLORS.purple, fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center" }}>‹</button>
          <h3 style={{ margin: 0, fontFamily: "'Fredoka One', cursive", color: COLORS.text, fontSize: 17 }}>{MONTHS[month]} {year}</h3>
          <button onClick={() => setViewDate(new Date(year, month+1, 1))} style={{ background: `${COLORS.purple}18`, border: "none", cursor: "pointer", width: 32, height: 32, borderRadius: "50%", color: COLORS.purple, fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center" }}>›</button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 2, marginBottom: 6 }}>
          {DAYS.map(d => <div key={d} style={{ textAlign: "center", fontSize: 11, fontWeight: 700, color: COLORS.muted, padding: "3px 0", fontFamily: "'Nunito', sans-serif" }}>{d}</div>)}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 3 }}>
          {cells.map((d, i) => {
            const de = d ? getEventsForDay(d) : [];
            return (
              <div key={i} style={{ minHeight: 38, borderRadius: 10, padding: "3px 2px", background: isToday(d) ? `${COLORS.sky}22` : "transparent", border: `1.5px solid ${isToday(d) ? COLORS.sky : "transparent"}` }}>
                {d && <>
                  <div style={{ fontSize: 12, fontWeight: isToday(d) ? 800 : 400, color: isToday(d) ? COLORS.blue : COLORS.text, textAlign: "center", fontFamily: "'Nunito', sans-serif" }}>{d}</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 1, justifyContent: "center", marginTop: 1 }}>
                    {de.slice(0,3).map(e => <div key={e.id} style={{ width: 5, height: 5, borderRadius: "50%", background: e.color }} />)}
                  </div>
                </>}
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ background: "#fff", borderRadius: 22, padding: 20, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <IlluCalendar size={20} />
            <h3 style={{ margin: 0, fontFamily: "'Fredoka One', cursive", color: COLORS.text, fontSize: 16 }}>Upcoming</h3>
          </div>
          <button onClick={() => setShowForm(!showForm)} style={{ padding: "6px 14px", borderRadius: 20, border: "none", background: `linear-gradient(135deg, ${COLORS.purple}, ${COLORS.pink})`, color: "#fff", cursor: "pointer", fontSize: 12, fontWeight: 700, fontFamily: "'Nunito', sans-serif" }}>+ Add</button>
        </div>
        {showForm && (
          <div style={{ background: "#f5fbff", borderRadius: 14, padding: 14, marginBottom: 14, display: "flex", flexDirection: "column", gap: 8 }}>
            <input style={inp} placeholder="Event title" value={form.title} onChange={e => setForm(p => ({ ...p, title: e.target.value }))} />
            <input style={inp} type="date" value={form.date} onChange={e => setForm(p => ({ ...p, date: e.target.value }))} />
            <input style={inp} type="time" value={form.time} onChange={e => setForm(p => ({ ...p, time: e.target.value }))} />
            <select style={inp} value={form.category} onChange={e => setForm(p => ({ ...p, category: e.target.value }))}>
              {Object.keys(ILLU_MAP).map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            <button onClick={() => { onAddEvent(form); setShowForm(false); setForm({ title: "", date: "", time: "", category: "personal" }); }}
              style={{ padding: "9px", borderRadius: 10, border: "none", background: `linear-gradient(135deg, ${COLORS.purple}, ${COLORS.pink})`, color: "#fff", cursor: "pointer", fontWeight: 700, fontFamily: "'Nunito', sans-serif" }}>Save Event</button>
          </div>
        )}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {upcoming.length === 0 && <p style={{ color: COLORS.muted, fontSize: 13, textAlign: "center", fontFamily: "'Nunito', sans-serif" }}>No upcoming events</p>}
          {upcoming.map(e => (
            <div key={e.id} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", borderRadius: 14, background: `${e.color}18`, borderLeft: `3px solid ${e.color}` }}>
              <div style={{ flexShrink: 0 }}>{ILLU_MAP[e.category]}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 13, color: COLORS.text, fontFamily: "'Nunito', sans-serif" }}>{e.title}</div>
                <div style={{ fontSize: 11, color: COLORS.muted, fontFamily: "'Nunito', sans-serif" }}>{e.date} · {e.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Tasks ─────────────────────────────────────────────────────────────────────
function TasksView({ tasks, onToggle, onAdd }) {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ text: "", priority: "medium", category: "personal", due: "" });
  const pending = tasks.filter(t => !t.done);
  const done = tasks.filter(t => t.done);
  const inp = { padding: "9px 12px", borderRadius: 10, border: `1.5px solid ${COLORS.lime}66`, outline: "none", fontSize: 13, fontFamily: "'Nunito', sans-serif", width: "100%" };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
      <div style={{ background: "#fff", borderRadius: 22, padding: 20, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <IlluTaskList size={22} />
            <h3 style={{ margin: 0, fontFamily: "'Fredoka One', cursive", color: COLORS.text, fontSize: 18 }}>
              To-Do <span style={{ background: `${COLORS.orange}33`, color: "#b35a00", borderRadius: 20, padding: "2px 10px", fontSize: 13 }}>{pending.length}</span>
            </h3>
          </div>
          <button onClick={() => setShowForm(!showForm)} style={{ padding: "6px 14px", borderRadius: 20, border: "none", background: `linear-gradient(135deg, ${COLORS.yellow}, ${COLORS.orange})`, color: "#fff", cursor: "pointer", fontSize: 12, fontWeight: 700, fontFamily: "'Nunito', sans-serif" }}>+ Add</button>
        </div>
        {showForm && (
          <div style={{ background: "#f8fff4", borderRadius: 14, padding: 14, marginBottom: 14, display: "flex", flexDirection: "column", gap: 8 }}>
            <input style={inp} placeholder="What needs to be done?" value={form.text} onChange={e => setForm(p => ({ ...p, text: e.target.value }))} />
            <div style={{ display: "flex", gap: 8 }}>
              <select style={{ ...inp, flex: 1 }} value={form.priority} onChange={e => setForm(p => ({ ...p, priority: e.target.value }))}>
                <option value="high">High priority</option>
                <option value="medium">Medium priority</option>
                <option value="low">Low priority</option>
              </select>
              <select style={{ ...inp, flex: 1 }} value={form.category} onChange={e => setForm(p => ({ ...p, category: e.target.value }))}>
                {Object.keys(ILLU_MAP).map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <input style={inp} type="date" value={form.due} onChange={e => setForm(p => ({ ...p, due: e.target.value }))} />
            <button onClick={() => { onAdd(form); setShowForm(false); setForm({ text: "", priority: "medium", category: "personal", due: "" }); }}
              style={{ padding: "9px", borderRadius: 10, border: "none", background: `linear-gradient(135deg, ${COLORS.yellow}, ${COLORS.orange})`, color: "#fff", cursor: "pointer", fontWeight: 700, fontFamily: "'Nunito', sans-serif" }}>Save Task</button>
          </div>
        )}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {pending.length === 0 && (
            <div style={{ textAlign: "center", padding: "20px 0" }}>
              <IlluCheckCircle size={44} color={COLORS.teal} />
              <p style={{ color: COLORS.muted, fontSize: 13, marginTop: 10, fontFamily: "'Nunito', sans-serif" }}>All done! You're amazing!</p>
            </div>
          )}
          {pending.map(t => (
            <div key={t.id} onClick={() => onToggle(t.id)} style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 14px", borderRadius: 14, background: "#f8fff4", cursor: "pointer", border: `1.5px solid ${COLORS.lime}44` }}>
              <div style={{ width: 22, height: 22, borderRadius: "50%", border: `2.5px solid ${COLORS.lime}`, flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
                  <span style={{ fontWeight: 700, fontSize: 13, color: COLORS.text, fontFamily: "'Nunito', sans-serif" }}>{t.text}</span>
                  <PriorityPill priority={t.priority} />
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 4 }}>
                  {ILLU_MAP[t.category]}
                  <span style={{ fontSize: 11, color: COLORS.muted, fontFamily: "'Nunito', sans-serif" }}>{t.category}{t.due ? ` · Due ${t.due}` : ""}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {done.length > 0 && (
        <div style={{ background: "#fff", borderRadius: 22, padding: 20, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <IlluCheckCircle size={20} />
            <h3 style={{ margin: 0, fontFamily: "'Fredoka One', cursive", color: COLORS.muted, fontSize: 16 }}>Completed</h3>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
            {done.map(t => (
              <div key={t.id} onClick={() => onToggle(t.id)} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 14px", borderRadius: 14, background: `${COLORS.teal}12`, cursor: "pointer", opacity: 0.75 }}>
                <IlluCheckCircle size={20} />
                <span style={{ fontSize: 13, color: COLORS.muted, textDecoration: "line-through", fontFamily: "'Nunito', sans-serif" }}>{t.text}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ── Main App ──────────────────────────────────────────────────────────────────
export default function App() {
  const [tab, setTab] = useState("home");
  const [tasks, setTasks] = useState(initialTasks);
  const [events, setEvents] = useState(initialEvents);
  const user = { name: "Alex" };
  const today = new Date();
  const todayStr = today.toISOString().split("T")[0];
  const todayEvents = events.filter(e => e.date === todayStr);
  const pendingTasks = tasks.filter(t => !t.done);

  function handleAICommand(action) {
    const catColors = { work: COLORS.sky, personal: COLORS.pink, health: COLORS.lime, family: COLORS.purple, shopping: COLORS.orange, other: COLORS.yellow };
    if (action.type === "add_task") {
      setTasks(p => [...p, { id: Date.now(), text: action.text, done: false, priority: action.priority || "medium", category: action.category || "personal", due: action.due || "" }]);
    } else if (action.type === "add_event") {
      setEvents(p => [...p, { id: Date.now(), title: action.title, date: action.date, time: action.time, color: catColors[action.category] || COLORS.sky, category: action.category || "other" }]);
    }
  }

  const tabs = [
    { id: "home",     label: "Home",      Icon: ({ active }) => <IlluHome size={22} color={active ? COLORS.blue : COLORS.muted} /> },
    { id: "tasks",    label: "Tasks",     Icon: ({ active }) => <IlluTaskList size={22} color={active ? COLORS.teal : COLORS.muted} /> },
    { id: "calendar", label: "Calendar",  Icon: ({ active }) => <IlluCalendar size={22} color={active ? COLORS.sky : COLORS.muted} /> },
    { id: "chat",     label: "Secretary", Icon: ({ active }) => <IlluBot size={22} color={active ? COLORS.blue : COLORS.muted} /> },
  ];

  const stats = [
    { label: "Tasks left",    value: pendingTasks.length,               color: COLORS.pink, Illu: () => <IlluStar size={22} color={COLORS.pink} /> },
    { label: "Today",         value: todayEvents.length,                color: COLORS.purple, Illu: () => <IlluCalendar size={22} color={COLORS.purple} /> },
    { label: "Done",          value: tasks.filter(t => t.done).length,  color: COLORS.yellow, Illu: () => <IlluCheckCircle size={22} color={COLORS.yellow} /> },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: ${COLORS.bg}; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-thumb { background: ${COLORS.sky}55; border-radius: 4px; }
        @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }
        @keyframes fadeIn { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
      `}</style>

      <div style={{ maxWidth: 420, margin: "0 auto", minHeight: "100vh", display: "flex", flexDirection: "column", background: COLORS.bg, fontFamily: "'Nunito', sans-serif" }}>

        {/* Header */}
        <div style={{ padding: "22px 20px 18px", background: `linear-gradient(135deg, ${COLORS.purple}33, ${COLORS.pink}22, ${COLORS.yellow}33)`, borderBottom: `1px solid ${COLORS.purple}33` }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 2 }}>
                <IlluSun size={16} color={COLORS.yellow} />
                <p style={{ fontSize: 12, color: COLORS.muted, fontWeight: 700 }}>{getGreeting()}</p>
              </div>
              <h1 style={{ fontSize: 26, fontFamily: "'Fredoka One', cursive", color: COLORS.text, lineHeight: 1.1 }}>{user.name}</h1>
            </div>
            <Avatar name={user.name} size={46} />
          </div>
          <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
            {stats.map(s => (
              <div key={s.label} style={{ flex: 1, background: "#fff", borderRadius: 16, padding: "12px 8px", textAlign: "center", boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: 4 }}><s.Illu /></div>
                <div style={{ fontSize: 22, fontWeight: 800, color: s.color, fontFamily: "'Fredoka One', cursive", lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: 10, color: COLORS.muted, fontWeight: 700, marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div style={{ flex: 1, overflowY: "auto", padding: tab === "chat" ? 0 : "18px 16px 90px" }}>

          {tab === "home" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 16, animation: "fadeIn 0.3s ease" }}>
              <div style={{ background: "#fff", borderRadius: 22, padding: 18, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                  <IlluCalendar size={20} />
                  <h3 style={{ fontFamily: "'Fredoka One', cursive", color: COLORS.text, fontSize: 17, margin: 0 }}>Today's Schedule</h3>
                </div>
                {todayEvents.length === 0 ? (
                  <p style={{ color: COLORS.muted, fontSize: 13, textAlign: "center", padding: "10px 0", fontFamily: "'Nunito', sans-serif" }}>No events today — enjoy your free day!</p>
                ) : todayEvents.map(e => (
                  <div key={e.id} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 12px", borderRadius: 12, background: `${e.color}18`, borderLeft: `3px solid ${e.color}`, marginBottom: 8 }}>
                    {ILLU_MAP[e.category]}
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 13, color: COLORS.text, fontFamily: "'Nunito', sans-serif" }}>{e.title}</div>
                      <div style={{ fontSize: 11, color: COLORS.muted, fontFamily: "'Nunito', sans-serif" }}>{e.time}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ background: "#fff", borderRadius: 22, padding: 18, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                  <IlluStar size={20} color={COLORS.orange} />
                  <h3 style={{ fontFamily: "'Fredoka One', cursive", color: COLORS.text, fontSize: 17, margin: 0 }}>Priority Tasks</h3>
                </div>
                {pendingTasks.filter(t => t.priority === "high").slice(0, 3).map(t => (
                  <div key={t.id} onClick={() => setTasks(p => p.map(x => x.id === t.id ? { ...x, done: true } : x))} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", borderRadius: 14, background: `${COLORS.orange}12`, cursor: "pointer", border: `1px solid ${COLORS.orange}33`, marginBottom: 8 }}>
                    <div style={{ width: 20, height: 20, borderRadius: "50%", border: `2.5px solid ${COLORS.orange}`, flexShrink: 0 }} />
                    <span style={{ fontSize: 13, fontWeight: 700, color: COLORS.text, fontFamily: "'Nunito', sans-serif" }}>{t.text}</span>
                  </div>
                ))}
                {pendingTasks.filter(t => t.priority === "high").length === 0 && (
                  <div style={{ textAlign: "center", padding: "14px 0" }}>
                    <IlluCheckCircle size={36} color={COLORS.teal} />
                    <p style={{ color: COLORS.muted, fontSize: 13, marginTop: 8, fontFamily: "'Nunito', sans-serif" }}>No high priority tasks!</p>
                  </div>
                )}
              </div>

              <div onClick={() => setTab("chat")} style={{ background: `linear-gradient(135deg, ${COLORS.sky}33, ${COLORS.teal}22)`, borderRadius: 22, padding: 18, boxShadow: "0 4px 20px rgba(0,0,0,0.06)", cursor: "pointer", border: `1.5px solid ${COLORS.sky}44` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: `linear-gradient(135deg, ${COLORS.purple}, ${COLORS.pink})`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 4px 14px ${COLORS.sky}55`, flexShrink: 0 }}>
                    <IlluBot size={26} color="#fff" />
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Fredoka One', cursive", fontSize: 16, color: COLORS.text }}>Talk to your Secretary</div>
                    <div style={{ fontSize: 12, color: COLORS.muted, fontFamily: "'Nunito', sans-serif" }}>Add tasks or events with natural language</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {tab === "tasks" && (
            <div style={{ animation: "fadeIn 0.3s ease", paddingBottom: 80 }}>
              <TasksView tasks={tasks}
                onToggle={id => setTasks(p => p.map(t => t.id === id ? { ...t, done: !t.done } : t))}
                onAdd={form => setTasks(p => [...p, { id: Date.now(), text: form.text, done: false, priority: form.priority, category: form.category, due: form.due }])} />
            </div>
          )}

          {tab === "calendar" && (
            <div style={{ animation: "fadeIn 0.3s ease", paddingBottom: 80 }}>
              <CalendarView events={events} onAddEvent={form => {
                const catColors = { work: COLORS.sky, personal: COLORS.pink, health: COLORS.lime, family: COLORS.purple, shopping: COLORS.orange, other: COLORS.yellow };
                setEvents(p => [...p, { id: Date.now(), title: form.title, date: form.date, time: form.time, color: catColors[form.category] || COLORS.sky, category: form.category }]);
              }} />
            </div>
          )}

          {tab === "chat" && (
            <div style={{ height: "calc(100vh - 145px)", animation: "fadeIn 0.3s ease" }}>
              <AIChat onCommand={handleAICommand} />
            </div>
          )}
        </div>

        {/* Bottom Nav */}
        <div style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 420, background: "rgba(255,255,255,0.96)", backdropFilter: "blur(14px)", borderTop: `1px solid ${COLORS.lime}44`, padding: "8px 0 18px", display: "flex", justifyContent: "space-around" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3, background: tab === t.id ? `${COLORS.yellow}33` : "transparent", border: "none", cursor: "pointer", padding: "7px 18px", borderRadius: 16, transition: "all 0.2s" }}>
              <t.Icon active={tab === t.id} />
              <span style={{ fontSize: 10, fontWeight: 700, color: tab === t.id ? COLORS.blue : COLORS.muted, fontFamily: "'Nunito', sans-serif" }}>{t.label}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
