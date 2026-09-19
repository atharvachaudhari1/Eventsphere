// import { useState, useEffect, useRef } from "react";
 
// // ─── DESIGN TOKENS ───────────────────────────────────────────────────────────
// const T = {
//   gold: "#C9A84C",
//   goldLight: "#F0D080",
//   goldDark: "#8B6914",
//   rose: "#E8A0B4",
//   roseDark: "#C4607A",
//   ink: "#1A1025",
//   inkMid: "#2D1F3D",
//   inkSoft: "#3D2F50",
//   muted: "#7B6890",
//   surface: "#F9F5FF",
//   surfaceCard: "#FFFFFF",
//   border: "#E8DFF5",
//   success: "#2ECC71",
//   warning: "#F39C12",
//   error: "#E74C3C",
//   gradient: "linear-gradient(135deg, #1A1025 0%, #2D1F3D 50%, #3D2F50 100%)",
//   gradientGold: "linear-gradient(135deg, #C9A84C 0%, #F0D080 50%, #C9A84C 100%)",
// };
 
// // ─── AI HELPER ───────────────────────────────────────────────────────────────
// async function callAI(systemPrompt, userMessage, onChunk) {
//   try {
//     const response = await fetch("https://api.anthropic.com/v1/messages", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         model: "claude-sonnet-4-6",
//         max_tokens: 1000,
//         stream: true,
//         system: systemPrompt,
//         messages: [{ role: "user", content: userMessage }],
//       }),
//     });
//     const reader = response.body.getReader();
//     const decoder = new TextDecoder();
//     let full = "";
//     while (true) {
//       const { done, value } = await reader.read();
//       if (done) break;
//       const lines = decoder.decode(value).split("\n");
//       for (const line of lines) {
//         if (line.startsWith("data: ")) {
//           try {
//             const d = JSON.parse(line.slice(6));
//             if (d.type === "content_block_delta" && d.delta?.text) {
//               full += d.delta.text;
//               onChunk && onChunk(full);
//             }
//           } catch {}
//         }
//       }
//     }
//     return full;
//   } catch (e) {
//     return "AI service unavailable. Please try again.";
//   }
// }
 
// // ─── MOCK DATA ────────────────────────────────────────────────────────────────
// const VENDORS = {
//   catering: [
//     { id: "c1", name: "Royal Feast Caterers", rating: 4.8, price: "high", city: "Chennai", speciality: "South Indian, Multi-cuisine", img: "🍽️", reviews: 142, verified: true },
//     { id: "c2", name: "Spice Garden", rating: 4.5, price: "medium", city: "Coimbatore", speciality: "Chettinad, North Indian", img: "🥘", reviews: 98, verified: true },
//     { id: "c3", name: "Budget Bites", rating: 4.1, price: "low", city: "Madurai", speciality: "Traditional South Indian", img: "🍛", reviews: 67, verified: false },
//   ],
//   decoration: [
//     { id: "d1", name: "Dream Decors", rating: 4.9, price: "high", city: "Chennai", speciality: "Floral, Theme decor", img: "🌸", reviews: 203, verified: true },
//     { id: "d2", name: "Elegant Events", rating: 4.6, price: "medium", city: "Trichy", speciality: "Modern, Minimalist", img: "✨", reviews: 115, verified: true },
//     { id: "d3", name: "Simple Setups", rating: 4.0, price: "low", city: "Salem", speciality: "Traditional decor", img: "🎊", reviews: 44, verified: false },
//   ],
//   photographer: [
//     { id: "p1", name: "Moments by Karthik", rating: 4.9, price: "high", city: "Chennai", speciality: "Candid, Cinematic", img: "📸", reviews: 178, verified: true },
//     { id: "p2", name: "Click & Capture", rating: 4.5, price: "medium", city: "Madurai", speciality: "Traditional, Candid", img: "🎥", reviews: 89, verified: true },
//     { id: "p3", name: "Budget Frames", rating: 3.9, price: "low", city: "Trichy", speciality: "Basic photography", img: "📷", reviews: 31, verified: false },
//   ],
//   makeup: [
//     { id: "m1", name: "Glam Studio by Priya", rating: 4.8, price: "high", city: "Chennai", speciality: "Bridal, HD Makeup", img: "💄", reviews: 156, verified: true },
//     { id: "m2", name: "Belle Artistry", rating: 4.4, price: "medium", city: "Coimbatore", speciality: "Bridal, Party makeup", img: "💅", reviews: 72, verified: true },
//     { id: "m3", name: "Natural Glow", rating: 4.0, price: "low", city: "Salem", speciality: "Natural makeup", img: "🌿", reviews: 28, verified: false },
//   ],
//   costume: [
//     { id: "cos1", name: "Silk Route Designers", rating: 4.7, price: "high", city: "Kanchipuram", speciality: "Silk sarees, Lehengas", img: "👗", reviews: 134, verified: true },
//     { id: "cos2", name: "Trendy Threads", rating: 4.3, price: "medium", city: "Chennai", speciality: "Designer wear", img: "👘", reviews: 88, verified: true },
//     { id: "cos3", name: "Affordable Fashion", rating: 3.8, price: "low", city: "Madurai", speciality: "Traditional wear", img: "🥻", reviews: 22, verified: false },
//   ],
//   returnGift: [
//     { id: "r1", name: "Gift Galaxy", rating: 4.6, price: "high", city: "Chennai", speciality: "Customized gifts, Hampers", img: "🎁", reviews: 99, verified: true },
//     { id: "r2", name: "Memory Makers", rating: 4.2, price: "medium", city: "Coimbatore", speciality: "Personalized gifts", img: "🎀", reviews: 55, verified: true },
//     { id: "r3", name: "Budget Giftz", rating: 3.7, price: "low", city: "Trichy", speciality: "Bulk gifts", img: "📦", reviews: 18, verified: false },
//   ],
// };
 
// const CATEGORIES = [
//   { key: "catering", label: "Catering", icon: "🍽️", desc: "From traditional feasts to multi-cuisine spreads" },
//   { key: "decoration", label: "Decoration", icon: "🌸", desc: "Transform venues into breathtaking spaces" },
//   { key: "photographer", label: "Photography", icon: "📸", desc: "Capture memories that last forever" },
//   { key: "makeup", label: "Makeup", icon: "💄", desc: "Look your absolute best on your special day" },
//   { key: "costume", label: "Costume Design", icon: "👗", desc: "Curated outfits for every occasion" },
//   { key: "returnGift", label: "Return Gifts", icon: "🎁", desc: "Make your guests feel cherished" },
// ];
 
// const DESIGN_CARDS = [
//   { key: "invitation", label: "Invitation Cards", icon: "💌", desc: "Design & print beautiful cards" },
//   { key: "stage", label: "Stage Decoration", icon: "🎭", desc: "AI-curated stage themes" },
//   { key: "mehandi", label: "Mehandi Design", icon: "🌿", desc: "Traditional & fusion patterns" },
//   { key: "dress", label: "Dress & Outfit", icon: "👗", desc: "Customize your perfect look" },
//   { key: "menu", label: "Menu Design", icon: "📋", desc: "Craft the perfect menu" },
//   { key: "returnGiftDesign", label: "Return Gift Ideas", icon: "🎁", desc: "Unique gifting concepts" },
//   { key: "jewel", label: "Jewellery", icon: "💎", desc: "Complement your attire" },
//   { key: "album", label: "Photo Album", icon: "📖", desc: "Curated album designs" },
// ];
 
// // ─── STYLES ──────────────────────────────────────────────────────────────────
// const S = {
//   app: { fontFamily: "'Segoe UI', system-ui, sans-serif", minHeight: "100vh", background: T.surface, color: T.ink },
//   navBar: { background: T.gradient, padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64, boxShadow: "0 4px 24px rgba(0,0,0,0.25)", position: "sticky", top: 0, zIndex: 100 },
//   logo: { fontFamily: "Georgia, serif", fontSize: 26, fontWeight: 700, color: T.goldLight, letterSpacing: 1 },
//   btn: (v = "gold") => ({
//     padding: "10px 22px", borderRadius: 10, border: "none", cursor: "pointer", fontWeight: 600, fontSize: 14,
//     background: v === "gold" ? T.gradientGold : v === "outline" ? "transparent" : v === "danger" ? T.error : T.inkMid,
//     color: v === "gold" ? T.ink : v === "outline" ? T.gold : "#fff",
//     border: v === "outline" ? `2px solid ${T.gold}` : "none",
//     transition: "all 0.2s", boxShadow: v === "gold" ? "0 4px 12px rgba(201,168,76,0.35)" : "none",
//   }),
//   card: { background: "#fff", borderRadius: 16, boxShadow: "0 2px 16px rgba(26,16,37,0.08)", border: `1px solid ${T.border}`, padding: 24, transition: "transform 0.2s, box-shadow 0.2s" },
//   input: { width: "100%", padding: "12px 16px", borderRadius: 10, border: `1.5px solid ${T.border}`, fontSize: 15, outline: "none", background: "#fff", boxSizing: "border-box", color: T.ink },
//   label: { fontSize: 13, fontWeight: 600, color: T.muted, marginBottom: 6, display: "block", textTransform: "uppercase", letterSpacing: 0.5 },
//   tag: (color) => ({ display: "inline-block", padding: "3px 10px", borderRadius: 20, fontSize: 12, fontWeight: 600, background: color === "gold" ? "#FFF8E1" : color === "green" ? "#E8F5E9" : "#FCE4EC", color: color === "gold" ? T.goldDark : color === "green" ? "#2E7D32" : T.roseDark }),
//   heroGrad: { background: T.gradient, padding: "60px 32px", textAlign: "center", color: "#fff" },
// };
 
// // ─── AUTH SCREEN ─────────────────────────────────────────────────────────────
// function AuthScreen({ onLogin }) {
//   const [mode, setMode] = useState("login"); // login | signup
//   const [role, setRole] = useState("user");
//   const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
 
//   // Simulated user DB
//   const USERS = { "user@demo.com": { password: "demo123", name: "Ananya Rajan", role: "user" }, "vendor@demo.com": { password: "demo123", name: "Rajesh Caterers", role: "vendor" } };
 
//   const handleSubmit = () => {
//     setError("");
//     if (mode === "login") {
//       const u = USERS[form.email];
//       if (!u || u.password !== form.password) return setError("Invalid email or password.");
//       if (u.role !== role) return setError(`This account is a ${u.role} account. Please select the correct role.`);
//       onLogin({ name: u.name, email: form.email, role: u.role });
//     } else {
//       if (!form.name || !form.email || !form.password) return setError("All fields are required.");
//       if (form.password !== form.confirm) return setError("Passwords do not match.");
//       onLogin({ name: form.name, email: form.email, role });
//     }
//   };
 
//   return (
//     <div style={{ minHeight: "100vh", background: T.gradient, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
//       <div style={{ background: "#fff", borderRadius: 24, padding: "48px 40px", width: "100%", maxWidth: 420, boxShadow: "0 24px 64px rgba(0,0,0,0.35)" }}>
//         <div style={{ textAlign: "center", marginBottom: 32 }}>
//           <div style={{ fontSize: 40, marginBottom: 8 }}></div>
//           <div style={{ fontFamily: "Georgia, serif", fontSize: 28, fontWeight: 700, color: T.ink }}>EventSphere</div>
//           <div style={{ color: T.muted, fontSize: 14, marginTop: 4 }}>Plan your perfect celebration</div>
//         </div>
 
//         {/* Role Toggle */}
//         <div style={{ display: "flex", background: T.surface, borderRadius: 12, padding: 4, marginBottom: 24, gap: 4 }}>
//           {["user", "vendor"].map(r => (
//             <button key={r} onClick={() => setRole(r)} style={{ flex: 1, padding: "10px", borderRadius: 9, border: "none", cursor: "pointer", fontWeight: 600, fontSize: 14, background: role === r ? T.gradientGold : "transparent", color: role === r ? T.ink : T.muted, transition: "all 0.2s" }}>
//               {r === "user" ? "👤 Customer" : "🏪 Vendor"}
//             </button>
//           ))}
//         </div>
 
//         {/* Mode Toggle */}
//         <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
//           {["login", "signup"].map(m => (
//             <button key={m} onClick={() => setMode(m)} style={{ flex: 1, padding: "8px", border: `2px solid ${mode === m ? T.gold : T.border}`, borderRadius: 9, cursor: "pointer", fontWeight: 600, background: mode === m ? "#FFF8E1" : "#fff", color: mode === m ? T.goldDark : T.muted }}>
//               {m === "login" ? "Sign In" : "Create Account"}
//             </button>
//           ))}
//         </div>
 
//         {mode === "signup" && (
//           <div style={{ marginBottom: 16 }}>
//             <label style={S.label}>Full Name</label>
//             <input style={S.input} placeholder="Your name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
//           </div>
//         )}
//         <div style={{ marginBottom: 16 }}>
//           <label style={S.label}>Email</label>
//           <input style={S.input} placeholder={role === "user" ? "user@demo.com" : "vendor@demo.com"} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
//         </div>
//         <div style={{ marginBottom: 16 }}>
//           <label style={S.label}>Password</label>
//           <input style={S.input} type="password" placeholder={mode === "login" ? "demo123" : "Create password"} value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />
//         </div>
//         {mode === "signup" && (
//           <div style={{ marginBottom: 16 }}>
//             <label style={S.label}>Confirm Password</label>
//             <input style={S.input} type="password" placeholder="Repeat password" value={form.confirm} onChange={e => setForm({ ...form, confirm: e.target.value })} />
//           </div>
//         )}
 
//         {error && <div style={{ background: "#FFF0F0", border: `1px solid ${T.error}`, borderRadius: 8, padding: "10px 14px", color: T.error, fontSize: 14, marginBottom: 16 }}>⚠️ {error}</div>}
 
//         <button style={{ ...S.btn("gold"), width: "100%", padding: "14px", fontSize: 16, borderRadius: 12 }} onClick={handleSubmit}>
//           {mode === "login" ? "Sign In →" : "Create Account →"}
//         </button>
 
//         <div style={{ marginTop: 16, padding: 12, background: T.surface, borderRadius: 10, fontSize: 12, color: T.muted }}>
//           <strong>Demo:</strong> user@demo.com / vendor@demo.com · password: demo123
//         </div>
//       </div>
//     </div>
//   );
// }
 
// // ─── NAVBAR ──────────────────────────────────────────────────────────────────
// function NavBar({ user, tab, setTab, onLogout }) {
//   const userTabs = ["Home", "Create Event", "Marketplace", "Event Planner", "Create Design"];
//   const vendorTabs = ["Dashboard", "Orders", "Profile"];
 
//   const tabs = user.role === "user" ? userTabs : vendorTabs;
//   return (
//     <nav style={S.navBar}>
//       <div style={S.logo}>EventSphere</div>
//       <div style={{ display: "flex", gap: 4 }}>
//         {tabs.map(t => (
//           <button key={t} onClick={() => setTab(t)} style={{ padding: "8px 16px", borderRadius: 8, border: "none", cursor: "pointer", fontWeight: 600, fontSize: 13, background: tab === t ? "rgba(201,168,76,0.25)" : "transparent", color: tab === t ? T.goldLight : "rgba(255,255,255,0.7)", transition: "all 0.2s" }}>
//             {t}
//           </button>
//         ))}
//       </div>
//       <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
//         <div style={{ textAlign: "right" }}>
//           <div style={{ color: T.goldLight, fontWeight: 600, fontSize: 14 }}>{user.name}</div>
//           <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 12 }}>{user.role === "vendor" ? "🏪 Vendor" : "👤 Customer"}</div>
//         </div>
//         <button onClick={onLogout} style={{ ...S.btn("outline"), padding: "7px 14px", fontSize: 13 }}>Sign Out</button>
//       </div>
//     </nav>
//   );
// }
 
// // ─── HOME TAB ────────────────────────────────────────────────────────────────
// function HomeTab({ user, setTab }) {
//   return (
//     <div>
//       <div style={S.heroGrad}>
//         <div style={{ fontSize: 20, color: T.goldLight, marginBottom: 8 }}>Welcome back, {user.name.split(" ")[0]} ✨</div>
//         <h1 style={{ fontFamily: "Georgia, serif", fontSize: 48, margin: "0 0 16px", fontWeight: 700 }}>Plan Your Dream Event</h1>
//         <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 18, maxWidth: 560, margin: "0 auto 32px" }}>From intimate gatherings to grand celebrations — powered by AI, perfected for you.</p>
//         <button style={{ ...S.btn("gold"), padding: "14px 36px", fontSize: 16, borderRadius: 14 }} onClick={() => setTab("Create Event")}>🎉 Create New Event</button>
//       </div>
 
//       <div style={{ padding: "48px 32px" }}>
//         <div style={{ textAlign: "center", marginBottom: 40 }}>
//           <h2 style={{ fontFamily: "Georgia, serif", fontSize: 32, margin: "0 0 8px" }}>Everything for your celebration</h2>
//           <p style={{ color: T.muted }}>Browse our curated vendor marketplace</p>
//         </div>
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, maxWidth: 900, margin: "0 auto" }}>
//           {CATEGORIES.map(c => (
//             <div key={c.key} style={{ ...S.card, cursor: "pointer", textAlign: "center" }} onClick={() => setTab("Marketplace")}>
//               <div style={{ fontSize: 40, marginBottom: 12 }}>{c.icon}</div>
//               <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 6 }}>{c.label}</div>
//               <div style={{ color: T.muted, fontSize: 13 }}>{c.desc}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
 
// // ─── CREATE EVENT ─────────────────────────────────────────────────────────────
// function CreateEventTab({ event, setEvent }) {
//   const [saved, setSaved] = useState(false);
//   const [aiSuggestion, setAiSuggestion] = useState("");
//   const [loadingAI, setLoadingAI] = useState(false);
 
//   const handleSave = () => {
//     setSaved(true);
//     setTimeout(() => setSaved(false), 3000);
//   };
 
//   const getAISuggestion = async () => {
//     if (!event.type || !event.budget || !event.guestCount) return;
//     setLoadingAI(true);
//     setAiSuggestion("");
//     await callAI(
//       "You are an expert Indian wedding and event planner. Give concise, practical suggestions.",
//       `Event type: ${event.type}, Budget: ₹${event.budget}, Guests: ${event.guestCount}, Venue: ${event.venue || "TBD"}, Date: ${event.date || "TBD"}. Give 3 short key tips for this event.`,
//       (text) => setAiSuggestion(text)
//     );
//     setLoadingAI(false);
//   };
 
//   const fields = [
//     { key: "type", label: "Event Type", placeholder: "e.g. Wedding, Birthday, Reception...", type: "text" },
//     { key: "venue", label: "Venue", placeholder: "Venue name or location", type: "text" },
//     { key: "date", label: "Event Date", placeholder: "", type: "date" },
//     { key: "time", label: "Event Time", placeholder: "", type: "time" },
//     { key: "budget", label: "Total Budget (₹)", placeholder: "e.g. 500000", type: "number" },
//     { key: "guestCount", label: "Guest Count", placeholder: "Expected number of guests", type: "number" },
//     { key: "address", label: "Home Address (for sample delivery)", placeholder: "Full address for vendor samples", type: "text" },
//   ];
 
//   return (
//     <div style={{ padding: "40px 32px", maxWidth: 700, margin: "0 auto" }}>
//       <h2 style={{ fontFamily: "Georgia, serif", fontSize: 32, marginBottom: 8 }}>🎉 Create Your Event</h2>
//       <p style={{ color: T.muted, marginBottom: 32 }}>Fill in the details and let EventSphere do the magic.</p>
 
//       <div style={{ ...S.card }}>
//         <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
//           {fields.map(f => (
//             <div key={f.key} style={{ gridColumn: f.key === "address" ? "1 / -1" : "auto" }}>
//               <label style={S.label}>{f.label}</label>
//               <input style={S.input} type={f.type} placeholder={f.placeholder} value={event[f.key] || ""} onChange={e => setEvent({ ...event, [f.key]: e.target.value })} />
//             </div>
//           ))}
//         </div>
 
//         <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
//           <button style={S.btn("gold")} onClick={handleSave}>{saved ? "✅ Saved!" : "Save Event Details"}</button>
//           <button style={S.btn("outline")} onClick={getAISuggestion} disabled={loadingAI}>{loadingAI ? "🤖 Thinking..." : "✨ Get AI Tips"}</button>
//         </div>
 
//         {aiSuggestion && (
//           <div style={{ marginTop: 20, padding: 18, background: "#FFF8E1", borderRadius: 12, border: `1px solid ${T.goldLight}` }}>
//             <div style={{ fontWeight: 700, color: T.goldDark, marginBottom: 8 }}>✨ AI Planner Suggestions</div>
//             <div style={{ color: T.ink, fontSize: 14, lineHeight: 1.7, whiteSpace: "pre-wrap" }}>{aiSuggestion}</div>
//           </div>
//         )}
//       </div>
 
//       {event.type && (
//         <div style={{ marginTop: 20, ...S.card, background: "linear-gradient(135deg, #F9F5FF, #FFF8E1)" }}>
//           <div style={{ fontWeight: 700, marginBottom: 12, color: T.goldDark }}>📋 Event Summary</div>
//           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, fontSize: 14 }}>
//             {Object.entries(event).filter(([k, v]) => v).map(([k, v]) => (
//               <div key={k}><span style={{ color: T.muted, textTransform: "capitalize" }}>{k.replace(/([A-Z])/g, " $1")}: </span><strong>{k === "budget" ? `₹${Number(v).toLocaleString("en-IN")}` : v}</strong></div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
 
// // ─── MARKETPLACE ─────────────────────────────────────────────────────────────
// function MarketplaceTab({ selectedVendors, setSelectedVendors, event }) {
//   const [activeCategory, setActiveCategory] = useState(null);
//   const [priceFilter, setPriceFilter] = useState("all");
//   const [sortBy, setSortBy] = useState("rating");
 
//   const getVendors = () => {
//     if (!activeCategory) return [];
//     let v = [...(VENDORS[activeCategory] || [])];
//     if (priceFilter !== "all") v = v.filter(x => x.price === priceFilter);
//     if (sortBy === "rating") v.sort((a, b) => b.rating - a.rating);
//     else if (sortBy === "reviews") v.sort((a, b) => b.reviews - a.reviews);
//     return v;
//   };
 
//   const toggleVendor = (vendor) => {
//     const key = `${activeCategory}-${vendor.id}`;
//     setSelectedVendors(prev => {
//       const copy = { ...prev };
//       if (copy[key]) delete copy[key];
//       else copy[key] = { ...vendor, category: activeCategory };
//       return copy;
//     });
//   };
 
//   const isSelected = (vendor) => !!selectedVendors[`${activeCategory}-${vendor.id}`];
 
//   return (
//     <div style={{ padding: "32px" }}>
//       <h2 style={{ fontFamily: "Georgia, serif", fontSize: 32, marginBottom: 8 }}>🏪 Vendor Marketplace</h2>
//       <p style={{ color: T.muted, marginBottom: 28 }}>Browse and select vendors for your event. {Object.keys(selectedVendors).length > 0 && <span style={{ color: T.gold, fontWeight: 700 }}>{Object.keys(selectedVendors).length} vendor(s) selected</span>}</p>
 
//       {/* Category Grid */}
//       <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 32 }}>
//         {CATEGORIES.map(c => (
//           <button key={c.key} onClick={() => setActiveCategory(c.key === activeCategory ? null : c.key)}
//             style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 18px", borderRadius: 12, border: `2px solid ${activeCategory === c.key ? T.gold : T.border}`, background: activeCategory === c.key ? "#FFF8E1" : "#fff", cursor: "pointer", fontWeight: 600, fontSize: 14, color: activeCategory === c.key ? T.goldDark : T.ink, transition: "all 0.2s" }}>
//             {c.icon} {c.label}
//           </button>
//         ))}
//       </div>
 
//       {activeCategory && (
//         <>
//           {/* Filters */}
//           <div style={{ display: "flex", gap: 12, marginBottom: 24, alignItems: "center" }}>
//             <span style={{ color: T.muted, fontWeight: 600, fontSize: 13 }}>FILTER:</span>
//             {["all", "low", "medium", "high"].map(p => (
//               <button key={p} onClick={() => setPriceFilter(p)} style={{ padding: "6px 14px", borderRadius: 20, border: `1.5px solid ${priceFilter === p ? T.gold : T.border}`, background: priceFilter === p ? "#FFF8E1" : "#fff", cursor: "pointer", fontWeight: 600, fontSize: 13, color: priceFilter === p ? T.goldDark : T.muted, textTransform: "capitalize" }}>{p === "all" ? "All" : p === "low" ? "💚 Budget" : p === "medium" ? "🔵 Mid-range" : "⭐ Premium"}</button>
//             ))}
//             <span style={{ color: T.muted, fontWeight: 600, fontSize: 13, marginLeft: 8 }}>SORT:</span>
//             {["rating", "reviews"].map(s => (
//               <button key={s} onClick={() => setSortBy(s)} style={{ padding: "6px 14px", borderRadius: 20, border: `1.5px solid ${sortBy === s ? T.gold : T.border}`, background: sortBy === s ? "#FFF8E1" : "#fff", cursor: "pointer", fontWeight: 600, fontSize: 13, color: sortBy === s ? T.goldDark : T.muted, textTransform: "capitalize" }}>{s === "rating" ? "Top Rated" : "Most Reviewed"}</button>
//             ))}
//           </div>
 
//           {/* Vendor Cards */}
//           <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
//             {getVendors().map(vendor => {
//               const sel = isSelected(vendor);
//               return (
//                 <div key={vendor.id} style={{ ...S.card, border: `2px solid ${sel ? T.gold : T.border}`, background: sel ? "#FFFDF5" : "#fff", position: "relative" }}>
//                   {sel && <div style={{ position: "absolute", top: 12, right: 12, background: T.gradientGold, borderRadius: 20, padding: "3px 10px", fontSize: 12, fontWeight: 700, color: T.inkDark }}>✓ Selected</div>}
//                   <div style={{ fontSize: 36, marginBottom: 12 }}>{vendor.img}</div>
//                   <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 4 }}>{vendor.name}</div>
//                   <div style={{ color: T.muted, fontSize: 13, marginBottom: 8 }}>{vendor.speciality}</div>
//                   <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
//                     <span style={S.tag("gold")}>⭐ {vendor.rating}</span>
//                     <span style={S.tag("green")}>{vendor.reviews} reviews</span>
//                     <span style={S.tag(vendor.price === "high" ? "pink" : "gold")}>{vendor.price === "low" ? "💚 Budget" : vendor.price === "medium" ? "🔵 Mid" : "⭐ Premium"}</span>
//                     {vendor.verified && <span style={{ ...S.tag("green") }}>✓ Verified</span>}
//                   </div>
//                   <div style={{ color: T.muted, fontSize: 12, marginBottom: 14 }}>📍 {vendor.city}</div>
//                   <button style={{ ...S.btn(sel ? "danger" : "gold"), width: "100%" }} onClick={() => toggleVendor(vendor)}>
//                     {sel ? "Remove" : "Select Vendor"}
//                   </button>
//                 </div>
//               );
//             })}
//           </div>
//         </>
//       )}
 
//       {!activeCategory && Object.keys(selectedVendors).length > 0 && (
//         <div style={{ ...S.card, marginTop: 20 }}>
//           <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 16, color: T.goldDark }}>✅ Your Selected Vendors</div>
//           <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
//             {Object.values(selectedVendors).map(v => (
//               <div key={v.id} style={{ padding: 14, background: "#FFF8E1", borderRadius: 12, border: `1px solid ${T.goldLight}` }}>
//                 <div style={{ fontSize: 24 }}>{v.img}</div>
//                 <div style={{ fontWeight: 700, fontSize: 14, marginTop: 6 }}>{v.name}</div>
//                 <div style={{ color: T.muted, fontSize: 12, textTransform: "capitalize" }}>{v.category}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
 
// // ─── EVENT PLANNER (AI AGENT) ────────────────────────────────────────────────
// function EventPlannerTab({ event, selectedVendors }) {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [agentStatus, setAgentStatus] = useState({});
//   const bottomRef = useRef();
 
//   const vendorList = Object.values(selectedVendors);
 
//   useEffect(() => {
//     if (messages.length === 0) {
//       const intro = `Hello! I'm your AI Event Planner 🤖✨\n\nI can see you have ${vendorList.length} vendor(s) selected${event.type ? ` for your ${event.type}` : ""}${event.date ? ` on ${event.date}` : ""}.\n\nI can help you:\n• Confirm vendor appointments\n• Send reminders to vendors\n• Coordinate sample deliveries\n• Manage vendor communications\n\nWhat would you like me to do?`;
//       setMessages([{ role: "assistant", text: intro }]);
//     }
//   }, []);
 
//   useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);
 
//   const systemPrompt = `You are an AI event planner agent for EventSphere, an Indian wedding and event planning platform. 
// You help coordinate between customers and vendors. You are managing this event:
// - Event: ${event.type || "Not specified"}
// - Date: ${event.date || "Not specified"}
// - Time: ${event.time || "Not specified"}
// - Venue: ${event.venue || "Not specified"}
// - Budget: ₹${event.budget || "Not specified"}
// - Guests: ${event.guestCount || "Not specified"}
// - Address for samples: ${event.address || "Not specified"}
// Selected vendors: ${vendorList.map(v => `${v.name} (${v.category})`).join(", ") || "None"}
 
// Be helpful, professional, and concise. Simulate vendor confirmations and actions when asked. Always be encouraging and provide next steps.`;
 
//   const sendMessage = async () => {
//     if (!input.trim() || loading) return;
//     const userMsg = input.trim();
//     setInput("");
//     setMessages(prev => [...prev, { role: "user", text: userMsg }]);
//     setLoading(true);
 
//     let aiText = "";
//     setMessages(prev => [...prev, { role: "assistant", text: "", streaming: true }]);
//     await callAI(systemPrompt, userMsg, (text) => {
//       aiText = text;
//       setMessages(prev => {
//         const copy = [...prev];
//         copy[copy.length - 1] = { role: "assistant", text, streaming: true };
//         return copy;
//       });
//     });
//     setMessages(prev => {
//       const copy = [...prev];
//       copy[copy.length - 1] = { role: "assistant", text: aiText, streaming: false };
//       return copy;
//     });
//     setLoading(false);
//   };
 
//   const quickActions = ["Confirm all vendor appointments", "Send sample delivery request", "Remind vendors of event date", "Get event status summary"];
 
//   const simulateConfirm = (vendor) => {
//     setAgentStatus(prev => ({ ...prev, [vendor.id]: "confirmed" }));
//   };
 
//   return (
//     <div style={{ padding: "32px", display: "grid", gridTemplateColumns: "300px 1fr", gap: 24, maxHeight: "calc(100vh - 120px)" }}>
//       {/* Left panel */}
//       <div>
//         <div style={{ ...S.card, marginBottom: 16 }}>
//           <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 12, color: T.goldDark }}>📋 Event Details</div>
//           {event.type ? (
//             <div style={{ fontSize: 13, color: T.ink, lineHeight: 1.8 }}>
//               <div>🎉 <strong>{event.type}</strong></div>
//               {event.date && <div>📅 {event.date}</div>}
//               {event.time && <div>⏰ {event.time}</div>}
//               {event.venue && <div>📍 {event.venue}</div>}
//               {event.guestCount && <div>👥 {event.guestCount} guests</div>}
//               {event.budget && <div>💰 ₹{Number(event.budget).toLocaleString("en-IN")}</div>}
//             </div>
//           ) : <div style={{ color: T.muted, fontSize: 13 }}>No event created yet. Go to "Create Event" tab first.</div>}
//         </div>
 
//         <div style={S.card}>
//           <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 12, color: T.goldDark }}>🏪 Vendor Status</div>
//           {vendorList.length === 0 ? <div style={{ color: T.muted, fontSize: 13 }}>No vendors selected yet.</div> : vendorList.map(v => (
//             <div key={v.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 0", borderBottom: `1px solid ${T.border}` }}>
//               <div>
//                 <div style={{ fontSize: 12 }}>{v.img} {v.name}</div>
//                 <div style={{ fontSize: 11, color: T.muted, textTransform: "capitalize" }}>{v.category}</div>
//               </div>
//               {agentStatus[v.id] === "confirmed" ? (
//                 <span style={S.tag("green")}>✓ Confirmed</span>
//               ) : (
//                 <button onClick={() => simulateConfirm(v)} style={{ ...S.btn("gold"), padding: "4px 10px", fontSize: 11 }}>Confirm</button>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
 
//       {/* Chat panel */}
//       <div style={{ ...S.card, display: "flex", flexDirection: "column", height: "calc(100vh - 180px)" }}>
//         <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 16, color: T.goldDark, display: "flex", alignItems: "center", gap: 8 }}>
//           🤖 AI Event Planner Agent
//           <span style={{ ...S.tag("green"), fontSize: 11 }}>● Online</span>
//         </div>
 
//         <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: 12, paddingRight: 4 }}>
//           {messages.map((m, i) => (
//             <div key={i} style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start" }}>
//               {m.role === "assistant" && <div style={{ width: 32, height: 32, borderRadius: "50%", background: T.gradientGold, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0, marginRight: 8 }}>🤖</div>}
//               <div style={{ maxWidth: "75%", padding: "12px 16px", borderRadius: m.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px", background: m.role === "user" ? T.gradient : "#F9F5FF", color: m.role === "user" ? "#fff" : T.ink, fontSize: 14, lineHeight: 1.7, whiteSpace: "pre-wrap" }}>
//                 {m.text || (m.streaming && <span style={{ color: T.muted }}>Thinking...</span>)}
//               </div>
//             </div>
//           ))}
//           <div ref={bottomRef} />
//         </div>
 
//         {/* Quick actions */}
//         <div style={{ display: "flex", gap: 8, flexWrap: "wrap", margin: "12px 0" }}>
//           {quickActions.map(a => (
//             <button key={a} onClick={() => { setInput(a); }} style={{ padding: "6px 12px", borderRadius: 20, border: `1px solid ${T.border}`, background: "#fff", cursor: "pointer", fontSize: 12, color: T.muted }}>{a}</button>
//           ))}
//         </div>
 
//         <div style={{ display: "flex", gap: 10 }}>
//           <input style={{ ...S.input, flex: 1 }} placeholder="Ask your AI planner anything..." value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && sendMessage()} />
//           <button style={{ ...S.btn("gold"), padding: "12px 20px", flexShrink: 0 }} onClick={sendMessage} disabled={loading}>
//             {loading ? "..." : "Send →"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
 
// // ─── CREATE DESIGN TAB ────────────────────────────────────────────────────────
// function CreateDesignTab({ event, selectedVendors }) {
//   const [activeCard, setActiveCard] = useState(null);
//   const [suggestions, setSuggestions] = useState("");
//   const [aiRecos, setAiRecos] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [selectedDesign, setSelectedDesign] = useState(null);
//   const [printMode, setPrintMode] = useState(false);
 
//   const getRecommendations = async () => {
//     if (!suggestions.trim()) return;
//     setLoading(true);
//     setAiRecos("");
//     const context = `Event: ${event.type || "Wedding"}, Budget: ₹${event.budget || "medium"}, Guests: ${event.guestCount || "100"}`;
//     await callAI(
//       `You are a creative Indian wedding design consultant. Give exactly 3 numbered design recommendations with brief descriptions. Be specific, visual, and culturally relevant.`,
//       `Design category: ${activeCard?.label}. Client suggestion: "${suggestions}". Event context: ${context}. Recommend 3 options with names and descriptions.`,
//       (text) => setAiRecos(text)
//     );
//     setLoading(false);
//   };
 
//   if (printMode && activeCard?.key === "invitation") {
//     return (
//       <div style={{ padding: 32, maxWidth: 600, margin: "0 auto" }}>
//         <button style={{ ...S.btn("outline"), marginBottom: 20 }} onClick={() => setPrintMode(false)}>← Back to Design</button>
//         <div style={{ background: T.gradient, padding: 48, borderRadius: 20, textAlign: "center", color: "#fff", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
//           <div style={{ fontFamily: "Georgia, serif", fontSize: 14, color: T.goldLight, letterSpacing: 3, marginBottom: 16 }}>WITH JOY WE ANNOUNCE</div>
//           <div style={{ fontFamily: "Georgia, serif", fontSize: 42, fontWeight: 700, color: T.goldLight, marginBottom: 8 }}>{event.type || "The Celebration"}</div>
//           <div style={{ color: "rgba(255,255,255,0.8)", fontSize: 16, marginBottom: 32 }}>of</div>
//           <div style={{ fontFamily: "Georgia, serif", fontSize: 28, color: "#fff", marginBottom: 32 }}>Your Family Name</div>
//           <div style={{ border: `1px solid ${T.goldLight}`, padding: "20px 32px", display: "inline-block", borderRadius: 12, marginBottom: 24 }}>
//             <div style={{ color: T.goldLight, fontSize: 16 }}>📅 {event.date || "Date TBD"} &nbsp;⏰ {event.time || "Time TBD"}</div>
//             <div style={{ color: "rgba(255,255,255,0.8)", marginTop: 8 }}>📍 {event.venue || "Venue TBD"}</div>
//           </div>
//           <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 13 }}>Selected design: {selectedDesign || "Classic Elegance"}</div>
//         </div>
//         <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
//           <button style={{ ...S.btn("gold"), flex: 1 }} onClick={() => window.print()}>🖨️ Print Card</button>
//           <button style={{ ...S.btn("outline"), flex: 1 }} onClick={() => setPrintMode(false)}>Edit Design</button>
//         </div>
//       </div>
//     );
//   }
 
//   return (
//     <div style={{ padding: 32 }}>
//       <h2 style={{ fontFamily: "Georgia, serif", fontSize: 32, marginBottom: 8 }}>🎨 Create & Design</h2>
//       <p style={{ color: T.muted, marginBottom: 32 }}>AI-powered design recommendations for every aspect of your event.</p>
 
//       {!activeCard ? (
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
//           {DESIGN_CARDS.map(card => (
//             <div key={card.key} style={{ ...S.card, cursor: "pointer", textAlign: "center", transition: "all 0.2s" }}
//               onClick={() => { setActiveCard(card); setSuggestions(""); setAiRecos(""); setSelectedDesign(null); }}>
//               <div style={{ fontSize: 40, marginBottom: 12 }}>{card.icon}</div>
//               <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 6 }}>{card.label}</div>
//               <div style={{ color: T.muted, fontSize: 13 }}>{card.desc}</div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div style={{ maxWidth: 700, margin: "0 auto" }}>
//           <button style={{ ...S.btn("outline"), marginBottom: 20 }} onClick={() => setActiveCard(null)}>← All Categories</button>
 
//           <div style={{ ...S.card }}>
//             <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
//               <div style={{ fontSize: 48 }}>{activeCard.icon}</div>
//               <div>
//                 <h3 style={{ margin: 0, fontFamily: "Georgia, serif", fontSize: 24 }}>{activeCard.label}</h3>
//                 <p style={{ margin: 0, color: T.muted }}>{activeCard.desc}</p>
//               </div>
//             </div>
 
//             <label style={S.label}>Your Suggestions & Preferences</label>
//             <textarea
//               style={{ ...S.input, height: 100, resize: "vertical", fontFamily: "inherit" }}
//               placeholder={`Describe your vision for ${activeCard.label.toLowerCase()}... e.g., colors, themes, styles, cultural preferences`}
//               value={suggestions}
//               onChange={e => setSuggestions(e.target.value)}
//             />
 
//             <button style={{ ...S.btn("gold"), marginTop: 12 }} onClick={getRecommendations} disabled={loading}>
//               {loading ? "🤖 Creating recommendations..." : "✨ Get AI Recommendations"}
//             </button>
 
//             {aiRecos && (
//               <div style={{ marginTop: 24 }}>
//                 <div style={{ fontWeight: 700, color: T.goldDark, marginBottom: 12 }}>🎨 AI Recommendations</div>
//                 <div style={{ background: "#FFF8E1", borderRadius: 12, padding: 18, border: `1px solid ${T.goldLight}`, whiteSpace: "pre-wrap", fontSize: 14, lineHeight: 1.8, color: T.ink, marginBottom: 16 }}>
//                   {aiRecos}
//                 </div>
 
//                 <label style={S.label}>Select Your Preferred Design</label>
//                 <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 16 }}>
//                   {["Option 1", "Option 2", "Option 3"].map(opt => (
//                     <button key={opt} onClick={() => setSelectedDesign(opt)} style={{ padding: "8px 18px", borderRadius: 20, border: `2px solid ${selectedDesign === opt ? T.gold : T.border}`, background: selectedDesign === opt ? "#FFF8E1" : "#fff", cursor: "pointer", fontWeight: 600, color: selectedDesign === opt ? T.goldDark : T.muted }}>
//                       {selectedDesign === opt ? "✓ " : ""}{opt}
//                     </button>
//                   ))}
//                 </div>
 
//                 {selectedDesign && (
//                   <div style={{ display: "flex", gap: 12 }}>
//                     <button style={S.btn("gold")} onClick={() => {
//                       // Simulate conveying to vendor
//                       alert(`✅ ${activeCard.label} design "${selectedDesign}" has been conveyed to the relevant vendor by your Event Planner Agent!`);
//                     }}>
//                       📤 Confirm & Send to Vendor
//                     </button>
//                     {activeCard.key === "invitation" && (
//                       <button style={S.btn("outline")} onClick={() => setPrintMode(true)}>🖨️ Preview & Print</button>
//                     )}
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
 
// // ─── VENDOR DASHBOARD ─────────────────────────────────────────────────────────
// function VendorDashboard({ user }) {
//   const [activeTab, setActiveTab] = useState("Dashboard");
 
//   const mockOrders = [
//     { id: "ORD001", customer: "Ananya Rajan", event: "Wedding", date: "2024-03-15", status: "pending", amount: 85000 },
//     { id: "ORD002", customer: "Meera Krishnan", event: "Reception", date: "2024-03-22", status: "confirmed", amount: 45000 },
//     { id: "ORD003", customer: "Divya Suresh", event: "Birthday", date: "2024-04-01", status: "sample_sent", amount: 12000 },
//   ];
 
//   const stats = [
//     { label: "Total Orders", value: "24", icon: "📋", color: T.gold },
//     { label: "Pending", value: "3", icon: "⏳", color: T.warning },
//     { label: "Confirmed", value: "18", icon: "✅", color: T.success },
//     { label: "Revenue", value: "₹4.2L", icon: "💰", color: T.roseDark },
//   ];
 
//   return (
//     <div style={{ padding: 32 }}>
//       <div style={{ marginBottom: 32 }}>
//         <h2 style={{ fontFamily: "Georgia, serif", fontSize: 32, marginBottom: 4 }}>Welcome, {user.name} 🏪</h2>
//         <p style={{ color: T.muted }}>Manage your orders and vendor profile</p>
//       </div>
 
//       <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 32 }}>
//         {stats.map(s => (
//           <div key={s.label} style={{ ...S.card, textAlign: "center" }}>
//             <div style={{ fontSize: 32, marginBottom: 8 }}>{s.icon}</div>
//             <div style={{ fontSize: 28, fontWeight: 700, color: s.color }}>{s.value}</div>
//             <div style={{ color: T.muted, fontSize: 13 }}>{s.label}</div>
//           </div>
//         ))}
//       </div>
 
//       <div style={S.card}>
//         <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 16, color: T.goldDark }}>📋 Recent Orders</div>
//         <table style={{ width: "100%", borderCollapse: "collapse" }}>
//           <thead>
//             <tr>
//               {["Order ID", "Customer", "Event", "Date", "Amount", "Status", "Action"].map(h => (
//                 <th key={h} style={{ padding: "10px 12px", textAlign: "left", borderBottom: `2px solid ${T.border}`, fontSize: 12, fontWeight: 700, color: T.muted, textTransform: "uppercase", letterSpacing: 0.5 }}>{h}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {mockOrders.map(order => (
//               <tr key={order.id} style={{ borderBottom: `1px solid ${T.border}` }}>
//                 <td style={{ padding: "14px 12px", fontWeight: 700, color: T.goldDark }}>{order.id}</td>
//                 <td style={{ padding: "14px 12px" }}>{order.customer}</td>
//                 <td style={{ padding: "14px 12px" }}>{order.event}</td>
//                 <td style={{ padding: "14px 12px", color: T.muted }}>{order.date}</td>
//                 <td style={{ padding: "14px 12px", fontWeight: 700 }}>₹{order.amount.toLocaleString("en-IN")}</td>
//                 <td style={{ padding: "14px 12px" }}>
//                   <span style={S.tag(order.status === "confirmed" ? "green" : order.status === "sample_sent" ? "gold" : "pink")}>
//                     {order.status === "pending" ? "⏳ Pending" : order.status === "confirmed" ? "✅ Confirmed" : "📦 Sample Sent"}
//                   </span>
//                 </td>
//                 <td style={{ padding: "14px 12px" }}>
//                   <button style={{ ...S.btn("gold"), padding: "6px 14px", fontSize: 13 }}>View</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
 
//       <div style={{ ...S.card, marginTop: 20 }}>
//         <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 16, color: T.goldDark }}>📬 Recent Messages from Event Planner</div>
//         {[
//           { from: "AI Planner (Ananya's Wedding)", msg: "Please confirm availability for March 15. Client is requesting sample delivery by March 1.", time: "2h ago", status: "new" },
//           { from: "AI Planner (Meera's Reception)", msg: "Your appointment has been confirmed. Please note the venue change to Grand Ballroom, Trichy.", time: "1d ago", status: "read" },
//         ].map((m, i) => (
//           <div key={i} style={{ padding: 16, borderRadius: 12, background: m.status === "new" ? "#FFF8E1" : T.surface, border: `1px solid ${m.status === "new" ? T.goldLight : T.border}`, marginBottom: 12 }}>
//             <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
//               <strong style={{ fontSize: 14 }}>🤖 {m.from}</strong>
//               <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
//                 {m.status === "new" && <span style={S.tag("gold")}>New</span>}
//                 <span style={{ color: T.muted, fontSize: 12 }}>{m.time}</span>
//               </div>
//             </div>
//             <p style={{ color: T.ink, fontSize: 14, margin: 0 }}>{m.msg}</p>
//             <button style={{ ...S.btn("gold"), padding: "6px 14px", fontSize: 13, marginTop: 10 }}>Reply</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
 
// // ─── ROOT APP ─────────────────────────────────────────────────────────────────
// export default function App() {
//   const [user, setUser] = useState(null);
//   const [tab, setTab] = useState("Home");
//   const [event, setEvent] = useState({});
//   const [selectedVendors, setSelectedVendors] = useState({});
 
//   if (!user) return <AuthScreen onLogin={(u) => { setUser(u); setTab(u.role === "vendor" ? "Dashboard" : "Home"); }} />;
 
//   const renderTab = () => {
//     if (user.role === "vendor") return <VendorDashboard user={user} />;
//     switch (tab) {
//       case "Home": return <HomeTab user={user} setTab={setTab} />;
//       case "Create Event": return <CreateEventTab event={event} setEvent={setEvent} />;
//       case "Marketplace": return <MarketplaceTab selectedVendors={selectedVendors} setSelectedVendors={setSelectedVendors} event={event} />;
//       case "Event Planner": return <EventPlannerTab event={event} selectedVendors={selectedVendors} />;
//       case "Create Design": return <CreateDesignTab event={event} selectedVendors={selectedVendors} />;
//       default: return <HomeTab user={user} setTab={setTab} />;
//     }
//   };
 
//   return (
//     <div style={S.app}>
//       <NavBar user={user} tab={tab} setTab={setTab} onLogout={() => { setUser(null); setEvent({}); setSelectedVendors({}); }} />
//       <div style={{ minHeight: "calc(100vh - 64px)" }}>{renderTab()}</div>
//     </div>
//   );
// }

/**
 * EventSphere — AI-Powered Indian Event Planning Platform
 * =========================================================
 * iQOO Hackathon 2026 · Team Arka!
 *
 * Tech Stack:
 *   - React 19 + Vite 8 (frontend)
 *   - Gemini 2.5 Flash (live AI via Google Generative Language API)
 *   - Frontend-only SPA with localStorage persistence
 *   - Demo role-based auth (user / vendor)
 *
 * Architecture:
 *   - callAI()         → Shared streaming AI helper (Gemini SSE)
 *   - AuthScreen       → Login / signup with role selector
 *   - NavBar           → Sticky top nav, role-aware tabs
 *   - HomeTab          → Landing page with category cards
 *   - CreateEventTab   → Event form + AI tips + AI Timeline
 *   - MarketplaceTab   → Vendor browser with search & filters
 *   - EventPlannerTab  → AI chat agent + Disruption Recovery
 *   - CreateDesignTab  → AI design recommendations + print preview
 *   - VendorDashboard  → Vendor overview, orders, messages
 *   - VendorOrdersPage → Full orders table with modal
 *   - VendorProfilePage→ Editable vendor profile
 *
 * AI Capabilities (all powered by Gemini 2.5 Flash):
 *   1. Event planning tips based on type, budget, guests
 *   2. AI event timeline (week-by-week countdown)
 *   3. AI planner chat with streaming responses
 *   4. Disruption recovery — vendor cancellation → ranked alternatives
 *   5. AI design recommendations (invitation, stage, menu, etc.)
 *
 * Note: Claude/Anthropic code is present in commented-out section (lines 1–833)
 *       from early exploration — not active. Gemini is the only live AI provider.
 */

import { useState, useEffect, useRef } from "react";

// ─── DESIGN TOKENS ───────────────────────────────────────────────────────────
// Central colour palette — all components import from T so changing one value
// updates the entire UI consistently (single source of truth for the design system)
const T = {
  gold: "#C9A84C",         // primary accent — buttons, highlights
  goldLight: "#F0D080",    // navbar text, hero headings
  goldDark: "#8B6914",     // labels, card headings
  rose: "#E8A0B4",         // secondary accent (unused but reserved)
  roseDark: "#C4607A",     // revenue stat colour
  ink: "#1A1025",          // dark base — primary text
  inkMid: "#2D1F3D",       // navbar background mid-stop
  inkSoft: "#3D2F50",      // navbar background end-stop
  muted: "#7B6890",        // secondary/placeholder text
  surface: "#F9F5FF",      // page background — off-white purple tint
  surfaceCard: "#FFFFFF",  // card surfaces
  border: "#E8DFF5",       // subtle purple-tinted borders
  success: "#2ECC71",      // confirmed status, positive indicators
  warning: "#F39C12",      // pending status, budget warning
  error: "#E74C3C",        // danger actions, error states, disruption button
  // Dark-to-purple gradient used for navbar, hero, modals, and footer
  gradient: "linear-gradient(135deg, #1A1025 0%, #2D1F3D 50%, #3D2F50 100%)",
  // Gold shimmer gradient used for primary CTA buttons and selected states
  gradientGold: "linear-gradient(135deg, #C9A84C 0%, #F0D080 50%, #C9A84C 100%)",
};
 
// ─── AI HELPER (GEMINI) — Real Streaming ─────────────────────────────────────
// Uses Gemini 2.5 Flash via Google Generative Language API.
// Streaming mode (alt=sse) delivers tokens word-by-word for ChatGPT-like UX.
// onChunk(text) is called on every token so the UI re-renders incrementally.
// Falls back gracefully if API key is missing or network fails.
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

async function callAI(systemPrompt, userMessage, onChunk) {
  // Guard: show a clear error if the .env key is not set
  if (!API_KEY) {
    const msg = "⚠️ Gemini API key missing! Add VITE_GEMINI_API_KEY to your .env file.";
    onChunk && onChunk(msg);
    return msg;
  }
  try {
    // Use streaming endpoint for word-by-word output (SSE)
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:streamGenerateContent?alt=sse&key=${API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ role: "user", parts: [{ text: `${systemPrompt}\n\n${userMessage}` }] }],
        }),
      }
    );
    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      const msg = `❌ API Error ${response.status}: ${err?.error?.message || response.statusText}`;
      onChunk && onChunk(msg);
      return msg;
    }
    // Read the SSE stream chunk by chunk and accumulate tokens
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let full = "";
    let buffer = ""; // holds incomplete lines between chunks
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      // Split on newlines; keep the last incomplete line in the buffer
      const lines = buffer.split("\n");
      buffer = lines.pop() ?? "";
      for (const line of lines) {
        if (!line.startsWith("data: ")) continue;
        const raw = line.slice(6).trim();
        if (raw === "[DONE]") continue; // stream finished signal
        try {
          const parsed = JSON.parse(raw);
          // Extract the text delta from the candidates array
          const chunk = parsed?.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
          if (chunk) { full += chunk; onChunk && onChunk(full); }
        } catch { /* skip malformed SSE frames — non-fatal */ }
      }
    }
    // Edge case: empty response (content filtered or quota hit)
    if (!full) { full = "No response generated."; onChunk && onChunk(full); }
    return full;
  } catch (e) {
    // Network-level failure (offline, CORS, etc.)
    const msg = `❌ Network error: ${e.message}`;
    onChunk && onChunk(msg);
    return msg;
  }
}
// ─── MOCK DATA ────────────────────────────────────────────────────────────────
// Seeded vendor database used by the Marketplace tab.
// In production this would be fetched from a real backend API.
// Each vendor has: id, name, rating (1-5), price tier, city, speciality, emoji icon,
// review count, and verification status.
const VENDORS = {
  // Catering vendors across Tamil Nadu cities
  catering: [
    { id: "c1", name: "Royal Feast Caterers", rating: 4.8, price: "high", city: "Chennai", speciality: "South Indian, Multi-cuisine", img: "🍽️", reviews: 142, verified: true },
    { id: "c2", name: "Spice Garden", rating: 4.5, price: "medium", city: "Coimbatore", speciality: "Chettinad, North Indian", img: "🥘", reviews: 98, verified: true },
    { id: "c3", name: "Budget Bites", rating: 4.1, price: "low", city: "Madurai", speciality: "Traditional South Indian", img: "🍛", reviews: 67, verified: false },
  ],
  // Decoration vendors for all event types
  decoration: [
    { id: "d1", name: "Dream Decors", rating: 4.9, price: "high", city: "Chennai", speciality: "Floral, Theme decor", img: "🌸", reviews: 203, verified: true },
    { id: "d2", name: "Elegant Events", rating: 4.6, price: "medium", city: "Trichy", speciality: "Modern, Minimalist", img: "✨", reviews: 115, verified: true },
    { id: "d3", name: "Simple Setups", rating: 4.0, price: "low", city: "Salem", speciality: "Traditional decor", img: "🎊", reviews: 44, verified: false },
  ],
  // Photography & videography vendors
  photographer: [
    { id: "p1", name: "Moments by Karthik", rating: 4.9, price: "high", city: "Chennai", speciality: "Candid, Cinematic", img: "📸", reviews: 178, verified: true },
    { id: "p2", name: "Click & Capture", rating: 4.5, price: "medium", city: "Madurai", speciality: "Traditional, Candid", img: "🎥", reviews: 89, verified: true },
    { id: "p3", name: "Budget Frames", rating: 3.9, price: "low", city: "Trichy", speciality: "Basic photography", img: "📷", reviews: 31, verified: false },
  ],
  // Bridal & event makeup artists
  makeup: [
    { id: "m1", name: "Glam Studio by Priya", rating: 4.8, price: "high", city: "Chennai", speciality: "Bridal, HD Makeup", img: "💄", reviews: 156, verified: true },
    { id: "m2", name: "Belle Artistry", rating: 4.4, price: "medium", city: "Coimbatore", speciality: "Bridal, Party makeup", img: "💅", reviews: 72, verified: true },
    { id: "m3", name: "Natural Glow", rating: 4.0, price: "low", city: "Salem", speciality: "Natural makeup", img: "🌿", reviews: 28, verified: false },
  ],
  // Costume & outfit designers (focus on silk sarees, lehengas)
  costume: [
    { id: "cos1", name: "Silk Route Designers", rating: 4.7, price: "high", city: "Kanchipuram", speciality: "Silk sarees, Lehengas", img: "👗", reviews: 134, verified: true },
    { id: "cos2", name: "Trendy Threads", rating: 4.3, price: "medium", city: "Chennai", speciality: "Designer wear", img: "👘", reviews: 88, verified: true },
    { id: "cos3", name: "Affordable Fashion", rating: 3.8, price: "low", city: "Madurai", speciality: "Traditional wear", img: "🥻", reviews: 22, verified: false },
  ],
  // Return gift vendors for guest appreciation
  returnGift: [
    { id: "r1", name: "Gift Galaxy", rating: 4.6, price: "high", city: "Chennai", speciality: "Customized gifts, Hampers", img: "🎁", reviews: 99, verified: true },
    { id: "r2", name: "Memory Makers", rating: 4.2, price: "medium", city: "Coimbatore", speciality: "Personalized gifts", img: "🎀", reviews: 55, verified: true },
    { id: "r3", name: "Budget Giftz", rating: 3.7, price: "low", city: "Trichy", speciality: "Bulk gifts", img: "📦", reviews: 18, verified: false },
  ],
};
 
// Marketplace category definitions — drives both the filter buttons and the home page grid
const CATEGORIES = [
  { key: "catering", label: "Catering", icon: "🍽️", desc: "From traditional feasts to multi-cuisine spreads" },
  { key: "decoration", label: "Decoration", icon: "🌸", desc: "Transform venues into breathtaking spaces" },
  { key: "photographer", label: "Photography", icon: "📸", desc: "Capture memories that last forever" },
  { key: "makeup", label: "Makeup", icon: "💄", desc: "Look your absolute best on your special day" },
  { key: "costume", label: "Costume Design", icon: "👗", desc: "Curated outfits for every occasion" },
  { key: "returnGift", label: "Return Gifts", icon: "🎁", desc: "Make your guests feel cherished" },
];
 
// Design category cards shown in the Create Design tab
// Each triggers an AI recommendation flow specific to that design domain
const DESIGN_CARDS = [
  { key: "invitation", label: "Invitation Cards", icon: "💌", desc: "Design & print beautiful cards" },
  { key: "stage", label: "Stage Decoration", icon: "🎭", desc: "AI-curated stage themes" },
  { key: "mehandi", label: "Mehandi Design", icon: "🌿", desc: "Traditional & fusion patterns" },
  { key: "dress", label: "Dress & Outfit", icon: "👗", desc: "Customize your perfect look" },
  { key: "menu", label: "Menu Design", icon: "📋", desc: "Craft the perfect menu" },
  { key: "returnGiftDesign", label: "Return Gift Ideas", icon: "🎁", desc: "Unique gifting concepts" },
  { key: "jewel", label: "Jewellery", icon: "💎", desc: "Complement your attire" },
  { key: "album", label: "Photo Album", icon: "📖", desc: "Curated album designs" },
];
 
// ─── SHARED STYLES ────────────────────────────────────────────────────────────
// S is a shared style object used across all components.
// Using inline styles (instead of CSS classes) keeps everything co-located and
// avoids class-name collisions in a single-file architecture.
const S = {
  // Full-page app wrapper
  app: { fontFamily: "'Segoe UI', system-ui, sans-serif", minHeight: "100vh", background: T.surface, color: T.ink },
  // Sticky dark navbar with gold logo
  navBar: { background: T.gradient, padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64, boxShadow: "0 4px 24px rgba(0,0,0,0.25)", position: "sticky", top: 0, zIndex: 100 },
  logo: { fontFamily: "Georgia, serif", fontSize: 26, fontWeight: 700, color: T.goldLight, letterSpacing: 1 },
  btn: (v = "gold") => ({
    padding: "10px 22px", borderRadius: 10, border: "none", cursor: "pointer", fontWeight: 600, fontSize: 14,
    background: v === "gold" ? T.gradientGold : v === "outline" ? "transparent" : v === "danger" ? T.error : T.inkMid,
    color: v === "gold" ? T.ink : v === "outline" ? T.gold : "#fff",
    border: v === "outline" ? `2px solid ${T.gold}` : "none",
    transition: "all 0.2s", boxShadow: v === "gold" ? "0 4px 12px rgba(201,168,76,0.35)" : "none",
  }),
  card: { background: "#fff", borderRadius: 16, boxShadow: "0 2px 16px rgba(26,16,37,0.08)", border: `1px solid ${T.border}`, padding: 24, transition: "transform 0.2s, box-shadow 0.2s" },
  input: { width: "100%", padding: "12px 16px", borderRadius: 10, border: `1.5px solid ${T.border}`, fontSize: 15, outline: "none", background: "#fff", boxSizing: "border-box", color: T.ink },
  label: { fontSize: 13, fontWeight: 600, color: T.muted, marginBottom: 6, display: "block", textTransform: "uppercase", letterSpacing: 0.5 },
  tag: (color) => ({ display: "inline-block", padding: "3px 10px", borderRadius: 20, fontSize: 12, fontWeight: 600, background: color === "gold" ? "#FFF8E1" : color === "green" ? "#E8F5E9" : "#FCE4EC", color: color === "gold" ? T.goldDark : color === "green" ? "#2E7D32" : T.roseDark }),
  heroGrad: { background: T.gradient, padding: "60px 32px", textAlign: "center", color: "#fff" },
};
 
// ─── AUTH SCREEN ─────────────────────────────────────────────────────────────
function AuthScreen({ onLogin }) {
  const [mode, setMode] = useState("login"); // login | signup
  const [role, setRole] = useState("user");
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
 
  // Simulated user DB
  const USERS = { "user@demo.com": { password: "demo123", name: "Ananya Rajan", role: "user" }, "vendor@demo.com": { password: "demo123", name: "Rajesh Caterers", role: "vendor" } };
 
  const handleSubmit = () => {
    setError("");
    if (mode === "login") {
      const u = USERS[form.email];
      if (!u || u.password !== form.password) return setError("Invalid email or password.");
      if (u.role !== role) return setError(`This account is a ${u.role} account. Please select the correct role.`);
      onLogin({ name: u.name, email: form.email, role: u.role });
    } else {
      if (!form.name || !form.email || !form.password) return setError("All fields are required.");
      if (form.password !== form.confirm) return setError("Passwords do not match.");
      onLogin({ name: form.name, email: form.email, role });
    }
  };
 
  return (
    <div style={{ minHeight: "100vh", background: T.gradient, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
      <div style={{ background: "#fff", borderRadius: 24, padding: "48px 40px", width: "100%", maxWidth: 420, boxShadow: "0 24px 64px rgba(0,0,0,0.35)" }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{ fontSize: 40, marginBottom: 8 }}></div>
          <div style={{ fontFamily: "Georgia, serif", fontSize: 28, fontWeight: 700, color: T.ink }}>EventSphere</div>
          <div style={{ color: T.muted, fontSize: 14, marginTop: 4 }}>Plan your perfect celebration</div>
        </div>
 
        {/* Role Toggle */}
        <div style={{ display: "flex", background: T.surface, borderRadius: 12, padding: 4, marginBottom: 24, gap: 4 }}>
          {["user", "vendor"].map(r => (
            <button key={r} onClick={() => setRole(r)} style={{ flex: 1, padding: "10px", borderRadius: 9, border: "none", cursor: "pointer", fontWeight: 600, fontSize: 14, background: role === r ? T.gradientGold : "transparent", color: role === r ? T.ink : T.muted, transition: "all 0.2s" }}>
              {r === "user" ? "👤 Customer" : "🏪 Vendor"}
            </button>
          ))}
        </div>
 
        {/* Mode Toggle */}
        <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
          {["login", "signup"].map(m => (
            <button key={m} onClick={() => setMode(m)} style={{ flex: 1, padding: "8px", border: `2px solid ${mode === m ? T.gold : T.border}`, borderRadius: 9, cursor: "pointer", fontWeight: 600, background: mode === m ? "#FFF8E1" : "#fff", color: mode === m ? T.goldDark : T.muted }}>
              {m === "login" ? "Sign In" : "Create Account"}
            </button>
          ))}
        </div>
 
        {mode === "signup" && (
          <div style={{ marginBottom: 16 }}>
            <label style={S.label}>Full Name</label>
            <input style={S.input} placeholder="Your name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
          </div>
        )}
        <div style={{ marginBottom: 16 }}>
          <label style={S.label}>Email</label>
          <input style={S.input} placeholder={role === "user" ? "user@demo.com" : "vendor@demo.com"} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label style={S.label}>Password</label>
          <input style={S.input} type="password" placeholder={mode === "login" ? "demo123" : "Create password"} value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />
        </div>
        {mode === "signup" && (
          <div style={{ marginBottom: 16 }}>
            <label style={S.label}>Confirm Password</label>
            <input style={S.input} type="password" placeholder="Repeat password" value={form.confirm} onChange={e => setForm({ ...form, confirm: e.target.value })} />
          </div>
        )}
 
        {error && <div style={{ background: "#FFF0F0", border: `1px solid ${T.error}`, borderRadius: 8, padding: "10px 14px", color: T.error, fontSize: 14, marginBottom: 16 }}>⚠️ {error}</div>}
 
        <button style={{ ...S.btn("gold"), width: "100%", padding: "14px", fontSize: 16, borderRadius: 12 }} onClick={handleSubmit}>
          {mode === "login" ? "Sign In →" : "Create Account →"}
        </button>
 
        <div style={{ marginTop: 16, padding: 12, background: T.surface, borderRadius: 10, fontSize: 12, color: T.muted }}>
          <strong>Demo:</strong> user@demo.com / vendor@demo.com · password: demo123
        </div>
      </div>
    </div>
  );
}
 
// ─── NAVBAR ──────────────────────────────────────────────────────────────────
// Role-aware sticky top navigation bar.
// - Users get the full 5-tab experience (Home → Design)
// - Vendors get a 3-tab admin console (Dashboard, Orders, Profile)
// The active tab is highlighted with a gold-tinted background pill.
function NavBar({ user, tab, setTab, onLogout }) {
  // Tab lists are role-gated — vendors never see the event planning flow
  const userTabs = ["Home", "Create Event", "Marketplace", "Event Planner", "Create Design"];
  const vendorTabs = ["Dashboard", "Orders", "Profile"];

  const tabs = user.role === "user" ? userTabs : vendorTabs;
  return (
    <nav style={S.navBar}>
      <div style={S.logo}>EventSphere</div>
      <div style={{ display: "flex", gap: 4 }}>
        {tabs.map(t => (
          <button key={t} onClick={() => setTab(t)} style={{ padding: "8px 16px", borderRadius: 8, border: "none", cursor: "pointer", fontWeight: 600, fontSize: 13, background: tab === t ? "rgba(201,168,76,0.25)" : "transparent", color: tab === t ? T.goldLight : "rgba(255,255,255,0.7)", transition: "all 0.2s" }}>
            {t}
          </button>
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ textAlign: "right" }}>
          <div style={{ color: T.goldLight, fontWeight: 600, fontSize: 14 }}>{user.name}</div>
          <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 12 }}>{user.role === "vendor" ? "🏪 Vendor" : "👤 Customer"}</div>
        </div>
        <button onClick={onLogout} style={{ ...S.btn("outline"), padding: "7px 14px", fontSize: 13 }}>Sign Out</button>
      </div>
    </nav>
  );
}
 
// ─── HOME TAB ────────────────────────────────────────────────────────────────
function HomeTab({ user, setTab }) {
  return (
    <div>
      <div style={S.heroGrad}>
        <div style={{ fontSize: 20, color: T.goldLight, marginBottom: 8 }}>Welcome back, {user.name.split(" ")[0]} ✨</div>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: 48, margin: "0 0 16px", fontWeight: 700 }}>Plan Your Dream Event</h1>
        <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 18, maxWidth: 560, margin: "0 auto 32px" }}>From intimate gatherings to grand celebrations — powered by AI, perfected for you.</p>
        <button style={{ ...S.btn("gold"), padding: "14px 36px", fontSize: 16, borderRadius: 14 }} onClick={() => setTab("Create Event")}>🎉 Create New Event</button>
      </div>
 
      <div style={{ padding: "48px 32px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: 32, margin: "0 0 8px" }}>Everything for your celebration</h2>
          <p style={{ color: T.muted }}>Browse our curated vendor marketplace</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, maxWidth: 900, margin: "0 auto" }}>
          {CATEGORIES.map(c => (
            <div key={c.key} style={{ ...S.card, cursor: "pointer", textAlign: "center" }} onClick={() => setTab("Marketplace")}>
              <div style={{ fontSize: 40, marginBottom: 12 }}>{c.icon}</div>
              <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 6 }}>{c.label}</div>
              <div style={{ color: T.muted, fontSize: 13 }}>{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
 
// ─── CREATE EVENT ─────────────────────────────────────────────────────────────
function CreateEventTab({ event, setEvent }) {
  const [saved, setSaved] = useState(false);
  const [aiSuggestion, setAiSuggestion] = useState("");
  const [loadingAI, setLoadingAI] = useState(false);
 
  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };
 
  const getAISuggestion = async () => {
    if (!event.type || !event.budget || !event.guestCount) return;
    setLoadingAI(true);
    setAiSuggestion("");
    await callAI(
      "You are an expert Indian wedding and event planner. Give concise, practical suggestions.",
      `Event type: ${event.type}, Budget: ₹${event.budget}, Guests: ${event.guestCount}, Venue: ${event.venue || "TBD"}, Date: ${event.date || "TBD"}. Give 3 short key tips for this event.`,
      (text) => setAiSuggestion(text)
    );
    setLoadingAI(false);
  };
 
  const fields = [
    { key: "type", label: "Event Type", placeholder: "e.g. Wedding, Birthday, Reception...", type: "text" },
    { key: "venue", label: "Venue", placeholder: "Venue name or location", type: "text" },
    { key: "date", label: "Event Date", placeholder: "", type: "date" },
    { key: "time", label: "Event Time", placeholder: "", type: "time" },
    { key: "budget", label: "Total Budget (₹)", placeholder: "e.g. 500000", type: "number" },
    { key: "guestCount", label: "Guest Count", placeholder: "Expected number of guests", type: "number" },
    { key: "address", label: "Home Address (for sample delivery)", placeholder: "Full address for vendor samples", type: "text" },
  ];
 
  return (
    <div style={{ padding: "40px 32px", maxWidth: 700, margin: "0 auto" }}>
      <h2 style={{ fontFamily: "Georgia, serif", fontSize: 32, marginBottom: 8 }}>🎉 Create Your Event</h2>
      <p style={{ color: T.muted, marginBottom: 32 }}>Fill in the details and let EventSphere do the magic.</p>
 
      <div style={{ ...S.card }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          {fields.map(f => (
            <div key={f.key} style={{ gridColumn: f.key === "address" ? "1 / -1" : "auto" }}>
              <label style={S.label}>{f.label}</label>
              <input style={S.input} type={f.type} placeholder={f.placeholder} value={event[f.key] || ""} onChange={e => setEvent({ ...event, [f.key]: e.target.value })} />
            </div>
          ))}
        </div>
 
        <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
          <button style={S.btn("gold")} onClick={handleSave}>{saved ? "✅ Saved!" : "Save Event Details"}</button>
          <button style={S.btn("outline")} onClick={getAISuggestion} disabled={loadingAI}>{loadingAI ? "🤖 Thinking..." : "✨ Get AI Tips"}</button>
        </div>
 
        {aiSuggestion && (
          <div style={{ marginTop: 20, padding: 18, background: "#FFF8E1", borderRadius: 12, border: `1px solid ${T.goldLight}` }}>
            <div style={{ fontWeight: 700, color: T.goldDark, marginBottom: 8 }}>✨ AI Planner Suggestions</div>
            <div style={{ color: T.ink, fontSize: 14, lineHeight: 1.7, whiteSpace: "pre-wrap" }}>{aiSuggestion}</div>
          </div>
        )}
      </div>
 
      {event.type && (
        <div style={{ marginTop: 20, ...S.card, background: "linear-gradient(135deg, #F9F5FF, #FFF8E1)" }}>
          <div style={{ fontWeight: 700, marginBottom: 12, color: T.goldDark }}>📋 Event Summary</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, fontSize: 14 }}>
            {Object.entries(event).filter(([k, v]) => v).map(([k, v]) => (
              <div key={k}><span style={{ color: T.muted, textTransform: "capitalize" }}>{k.replace(/([A-Z])/g, " $1")}: </span><strong>{k === "budget" ? `₹${Number(v).toLocaleString("en-IN")}` : v}</strong></div>
            ))}
          </div>
        </div>
      )}

      {event.type && event.date && <AITimelineCard event={event} />}
    </div>
  );
}

// ─── AI TIMELINE CARD ─────────────────────────────────────────────────────────
function AITimelineCard({ event }) {
  const [timeline, setTimeline] = useState("");
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState(false);

  const generate = async () => {
    setLoading(true);
    setTimeline("");
    await callAI(
      "You are an expert Indian event coordinator. Generate a precise week-by-week countdown checklist for the event. Use this format for each item: '⏱ [X weeks/days before]: [action]'. Be practical, specific, and cover vendor confirmations, deliveries, guest communication, day-of logistics. Give 8-10 milestones.",
      `Event: ${event.type}, Date: ${event.date}, Venue: ${event.venue || "TBD"}, Guests: ${event.guestCount || "TBD"}, Budget: ₹${event.budget || "TBD"}`,
      (text) => setTimeline(text)
    );
    setGenerated(true);
    setLoading(false);
  };

  return (
    <div style={{ marginTop: 20, ...S.card, border: `2px solid ${T.goldLight}` }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: generated ? 16 : 0 }}>
        <div>
          <div style={{ fontWeight: 700, color: T.goldDark, fontSize: 16 }}>📅 AI Event Timeline</div>
          {!generated && <div style={{ color: T.muted, fontSize: 13, marginTop: 4 }}>Auto-generate a week-by-week countdown plan for your event</div>}
        </div>
        <button style={{ ...S.btn("gold"), padding: "10px 20px" }} onClick={generate} disabled={loading}>
          {loading ? "⏳ Generating..." : generated ? "🔄 Regenerate" : "✨ Generate Timeline"}
        </button>
      </div>
      {timeline && (
        <div style={{ background: T.surface, borderRadius: 12, padding: 16 }}>
          {timeline.split("\n").filter(l => l.trim()).map((line, i) => (
            <div key={i} style={{ display: "flex", gap: 12, padding: "8px 0", borderBottom: i < timeline.split("\n").filter(l=>l.trim()).length - 1 ? `1px solid ${T.border}` : "none", fontSize: 14, color: T.ink, lineHeight: 1.6 }}>
              <span style={{ flexShrink: 0 }}>{line.startsWith("⏱") ? "" : "•"}</span>
              <span style={{ whiteSpace: "pre-wrap" }}>{line}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
 
// ─── MARKETPLACE ─────────────────────────────────────────────────────────────
// Vendor discovery and selection hub.
// Users browse vendors by category, filter by price tier, sort by rating/reviews,
// and search by name/speciality/city. Selected vendors are stored in parent state
// (with localStorage persistence) and carried into the Event Planner AI agent context.
function MarketplaceTab({ selectedVendors, setSelectedVendors, event }) {
  const [activeCategory, setActiveCategory] = useState(null); // which category tab is active
  const [priceFilter, setPriceFilter] = useState("all");      // "all" | "low" | "medium" | "high"
  const [sortBy, setSortBy] = useState("rating");              // "rating" | "reviews"
  const [search, setSearch] = useState("");
 
  const getVendors = () => {
    if (!activeCategory) return [];
    let v = [...(VENDORS[activeCategory] || [])];
    if (priceFilter !== "all") v = v.filter(x => x.price === priceFilter);
    if (search.trim()) {
      const q = search.toLowerCase();
      v = v.filter(x => x.name.toLowerCase().includes(q) || x.speciality.toLowerCase().includes(q) || x.city.toLowerCase().includes(q));
    }
    if (sortBy === "rating") v.sort((a, b) => b.rating - a.rating);
    else if (sortBy === "reviews") v.sort((a, b) => b.reviews - a.reviews);
    return v;
  };
 
  const toggleVendor = (vendor) => {
    const key = `${activeCategory}-${vendor.id}`;
    setSelectedVendors(prev => {
      const copy = { ...prev };
      if (copy[key]) delete copy[key];
      else copy[key] = { ...vendor, category: activeCategory };
      return copy;
    });
  };
 
  const isSelected = (vendor) => !!selectedVendors[`${activeCategory}-${vendor.id}`];
 
  return (
    <div style={{ padding: "32px" }}>
      <h2 style={{ fontFamily: "Georgia, serif", fontSize: 32, marginBottom: 8 }}>🏪 Vendor Marketplace</h2>
      <p style={{ color: T.muted, marginBottom: 28 }}>Browse and select vendors for your event. {Object.keys(selectedVendors).length > 0 && <span style={{ color: T.gold, fontWeight: 700 }}>{Object.keys(selectedVendors).length} vendor(s) selected</span>}</p>
 
      {/* Category Grid */}
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 32 }}>
        {CATEGORIES.map(c => (
          <button key={c.key} onClick={() => setActiveCategory(c.key === activeCategory ? null : c.key)}
            style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 18px", borderRadius: 12, border: `2px solid ${activeCategory === c.key ? T.gold : T.border}`, background: activeCategory === c.key ? "#FFF8E1" : "#fff", cursor: "pointer", fontWeight: 600, fontSize: 14, color: activeCategory === c.key ? T.goldDark : T.ink, transition: "all 0.2s" }}>
            {c.icon} {c.label}
          </button>
        ))}
      </div>
 
      {activeCategory && (
        <>
          {/* Search bar */}
          <div style={{ marginBottom: 20 }}>
            <input
              style={{ ...S.input, maxWidth: 400, background: "#fff", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
              placeholder={`🔍 Search ${CATEGORIES.find(c => c.key === activeCategory)?.label}...`}
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          {/* Filters */}
          <div style={{ display: "flex", gap: 12, marginBottom: 24, alignItems: "center" }}>
            <span style={{ color: T.muted, fontWeight: 600, fontSize: 13 }}>FILTER:</span>
            {["all", "low", "medium", "high"].map(p => (
              <button key={p} onClick={() => setPriceFilter(p)} style={{ padding: "6px 14px", borderRadius: 20, border: `1.5px solid ${priceFilter === p ? T.gold : T.border}`, background: priceFilter === p ? "#FFF8E1" : "#fff", cursor: "pointer", fontWeight: 600, fontSize: 13, color: priceFilter === p ? T.goldDark : T.muted, textTransform: "capitalize" }}>{p === "all" ? "All" : p === "low" ? "💚 Budget" : p === "medium" ? "🔵 Mid-range" : "⭐ Premium"}</button>
            ))}
            <span style={{ color: T.muted, fontWeight: 600, fontSize: 13, marginLeft: 8 }}>SORT:</span>
            {["rating", "reviews"].map(s => (
              <button key={s} onClick={() => setSortBy(s)} style={{ padding: "6px 14px", borderRadius: 20, border: `1.5px solid ${sortBy === s ? T.gold : T.border}`, background: sortBy === s ? "#FFF8E1" : "#fff", cursor: "pointer", fontWeight: 600, fontSize: 13, color: sortBy === s ? T.goldDark : T.muted, textTransform: "capitalize" }}>{s === "rating" ? "Top Rated" : "Most Reviewed"}</button>
            ))}
          </div>
 
          {/* Vendor Cards */}
          {getVendors().length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 20px", color: T.muted }}>
              <div style={{ fontSize: 48, marginBottom: 12 }}>🔍</div>
              <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 6 }}>No vendors found</div>
              <div style={{ fontSize: 14 }}>Try adjusting your search or filters</div>
            </div>
          ) : (
            <>
              <div style={{ color: T.muted, fontSize: 13, marginBottom: 14, fontWeight: 600 }}>
                {getVendors().length} vendor{getVendors().length !== 1 ? "s" : ""} found
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
                {getVendors().map(vendor => {
                  const sel = isSelected(vendor);
                  return (
                    <div key={vendor.id} style={{ ...S.card, border: `2px solid ${sel ? T.gold : T.border}`, background: sel ? "#FFFDF5" : "#fff", position: "relative" }}>
                      {sel && <div style={{ position: "absolute", top: 12, right: 12, background: T.gradientGold, borderRadius: 20, padding: "3px 10px", fontSize: 12, fontWeight: 700, color: T.inkDark }}>✓ Selected</div>}
                      <div style={{ fontSize: 36, marginBottom: 12 }}>{vendor.img}</div>
                      <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 4 }}>{vendor.name}</div>
                      <div style={{ color: T.muted, fontSize: 13, marginBottom: 8 }}>{vendor.speciality}</div>
                      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
                        <span style={S.tag("gold")}>⭐ {vendor.rating}</span>
                        <span style={S.tag("green")}>{vendor.reviews} reviews</span>
                        <span style={S.tag(vendor.price === "high" ? "pink" : "gold")}>{vendor.price === "low" ? "💚 Budget" : vendor.price === "medium" ? "🔵 Mid" : "⭐ Premium"}</span>
                        {vendor.verified && <span style={{ ...S.tag("green") }}>✓ Verified</span>}
                      </div>
                      <div style={{ color: T.muted, fontSize: 12, marginBottom: 14 }}>📍 {vendor.city}</div>
                      <button style={{ ...S.btn(sel ? "danger" : "gold"), width: "100%" }} onClick={() => toggleVendor(vendor)}>
                        {sel ? "Remove" : "Select Vendor"}
                      </button>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </>
      )}
 
      {!activeCategory && Object.keys(selectedVendors).length > 0 && (
        <div style={{ ...S.card, marginTop: 20 }}>
          <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 16, color: T.goldDark }}>✅ Your Selected Vendors</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
            {Object.values(selectedVendors).map(v => (
              <div key={v.id} style={{ padding: 14, background: "#FFF8E1", borderRadius: 12, border: `1px solid ${T.goldLight}` }}>
                <div style={{ fontSize: 24 }}>{v.img}</div>
                <div style={{ fontWeight: 700, fontSize: 14, marginTop: 6 }}>{v.name}</div>
                <div style={{ color: T.muted, fontSize: 12, textTransform: "capitalize" }}>{v.category}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
 
// ─── EVENT PLANNER (AI AGENT) ────────────────────────────────────────────────
// The AI-powered coordination hub — powered by Gemini 2.5 Flash with real SSE streaming.
//
// Key capabilities:
//   • Conversational AI chat with full event + vendor context in system prompt
//   • Quick-action buttons for common tasks (confirm vendors, send samples, etc.)
//   • 🚨 Disruption Recovery: "Vendor cancelled" triggers a dependency-aware recovery
//     flow — Gemini identifies affected tasks, assesses timeline impact, ranks alternatives
//   • agentStatus tracks per-vendor confirmation state (confirmed/pending)
//   • bottomRef scrolls chat to latest message automatically
function EventPlannerTab({ event, selectedVendors }) {
  const [messages, setMessages] = useState([]);   // chat history array: { role, text, streaming }
  const [input, setInput] = useState("");          // current input field value
  const [loading, setLoading] = useState(false);   // true while AI is generating
  const [agentStatus, setAgentStatus] = useState({}); // vendorId → "confirmed" | undefined
  const bottomRef = useRef(); // ref used to scroll to bottom of chat on new messages
 
  const vendorList = Object.values(selectedVendors);
 
  useEffect(() => {
    if (messages.length === 0) {
      const intro = `Hello! I'm your AI Event Planner 🤖✨\n\nI can see you have ${vendorList.length} vendor(s) selected${event.type ? ` for your ${event.type}` : ""}${event.date ? ` on ${event.date}` : ""}.\n\nI can help you:\n• Confirm vendor appointments\n• Send reminders to vendors\n• Coordinate sample deliveries\n• Manage vendor communications\n\nWhat would you like me to do?`;
      setMessages([{ role: "assistant", text: intro }]);
    }
  }, []);
 
  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);
 
  const systemPrompt = `You are an AI event planner agent for EventSphere, an Indian wedding and event planning platform. 
You help coordinate between customers and vendors. You are managing this event:
- Event: ${event.type || "Not specified"}
- Date: ${event.date || "Not specified"}
- Time: ${event.time || "Not specified"}
- Venue: ${event.venue || "Not specified"}
- Budget: ₹${event.budget || "Not specified"}
- Guests: ${event.guestCount || "Not specified"}
- Address for samples: ${event.address || "Not specified"}
Selected vendors: ${vendorList.map(v => `${v.name} (${v.category})`).join(", ") || "None"}

DISRUPTION RECOVERY CAPABILITY: If the user mentions a vendor cancellation, dropout, or disruption, act as a dependency-aware event operations agent. Walk through: (1) identify the affected tasks/milestones, (2) assess impact on the event timeline, (3) recommend 2-3 ranked alternative vendors from the marketplace with reasoning (cost, proximity, rating), (4) provide a clear recovery action plan with deadlines. Be decisive and structured — use numbered steps.

Be helpful, professional, and concise. Simulate vendor confirmations and actions when asked. Always be encouraging and provide next steps.`;
 
  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", text: userMsg }]);
    setLoading(true);
 
    let aiText = "";
    setMessages(prev => [...prev, { role: "assistant", text: "", streaming: true }]);
    await callAI(systemPrompt, userMsg, (text) => {
      aiText = text;
      setMessages(prev => {
        const copy = [...prev];
        copy[copy.length - 1] = { role: "assistant", text, streaming: true };
        return copy;
      });
    });
    setMessages(prev => {
      const copy = [...prev];
      copy[copy.length - 1] = { role: "assistant", text: aiText, streaming: false };
      return copy;
    });
    setLoading(false);
  };
 
  const quickActions = [
    "Confirm all vendor appointments",
    "Send sample delivery request",
    "Remind vendors of event date",
    "Get event status summary",
    "🚨 Vendor cancelled — find alternatives",
  ];
 
  const simulateConfirm = (vendor) => {
    setAgentStatus(prev => ({ ...prev, [vendor.id]: "confirmed" }));
  };
 
  return (
    <div style={{ padding: "32px", display: "grid", gridTemplateColumns: "300px 1fr", gap: 24, maxHeight: "calc(100vh - 120px)" }}>
      {/* Left panel */}
      <div>
        <div style={{ ...S.card, marginBottom: 16 }}>
          <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 12, color: T.goldDark }}>📋 Event Details</div>
          {event.type ? (
            <div style={{ fontSize: 13, color: T.ink, lineHeight: 1.8 }}>
              <div>🎉 <strong>{event.type}</strong></div>
              {event.date && <div>📅 {event.date}</div>}
              {event.time && <div>⏰ {event.time}</div>}
              {event.venue && <div>📍 {event.venue}</div>}
              {event.guestCount && <div>👥 {event.guestCount} guests</div>}
              {event.budget && <div>💰 ₹{Number(event.budget).toLocaleString("en-IN")}</div>}
            </div>
          ) : <div style={{ color: T.muted, fontSize: 13 }}>No event created yet. Go to "Create Event" tab first.</div>}
        </div>
 
        <div style={S.card}>
          <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 12, color: T.goldDark }}>🏪 Vendor Status</div>
          {vendorList.length === 0 ? <div style={{ color: T.muted, fontSize: 13 }}>No vendors selected yet.</div> : vendorList.map(v => (
            <div key={v.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 0", borderBottom: `1px solid ${T.border}` }}>
              <div>
                <div style={{ fontSize: 12 }}>{v.img} {v.name}</div>
                <div style={{ fontSize: 11, color: T.muted, textTransform: "capitalize" }}>{v.category}</div>
              </div>
              {agentStatus[v.id] === "confirmed" ? (
                <span style={S.tag("green")}>✓ Confirmed</span>
              ) : (
                <button onClick={() => simulateConfirm(v)} style={{ ...S.btn("gold"), padding: "4px 10px", fontSize: 11 }}>Confirm</button>
              )}
            </div>
          ))}
        </div>

        {/* Budget Tracker */}
        {event.budget && (
          <div style={{ ...S.card, marginTop: 16 }}>
            <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 12, color: T.goldDark }}>💰 Budget Tracker</div>
            {(() => {
              const total = Number(event.budget) || 0;
              const tierCost = { high: 0.35, medium: 0.2, low: 0.1 };
              const spent = vendorList.reduce((sum, v) => sum + total * (tierCost[v.price] || 0.2), 0);
              const pct = Math.min(100, Math.round((spent / total) * 100));
              const remaining = total - spent;
              return (
                <>
                  <div style={{ fontSize: 12, color: T.muted, marginBottom: 6 }}>
                    Estimated: <strong style={{ color: pct > 80 ? T.error : T.success }}>₹{Math.round(spent).toLocaleString("en-IN")}</strong>
                  </div>
                  <div style={{ background: T.border, borderRadius: 20, height: 8, overflow: "hidden", marginBottom: 8 }}>
                    <div style={{ height: "100%", width: `${pct}%`, background: pct > 80 ? `linear-gradient(90deg, ${T.warning}, ${T.error})` : T.gradientGold, borderRadius: 20 }} />
                  </div>
                  <div style={{ fontSize: 12, color: T.muted }}>
                    Remaining: <strong>₹{Math.round(remaining).toLocaleString("en-IN")}</strong> ({100 - pct}%)
                  </div>
                </>
              );
            })()}
          </div>
        )}
      </div>

      {/* Chat panel */}
      <div style={{ ...S.card, display: "flex", flexDirection: "column", height: "calc(100vh - 180px)" }}>
        <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 16, color: T.goldDark, display: "flex", alignItems: "center", gap: 8 }}>
          🤖 AI Event Planner Agent
          <span style={{ ...S.tag("green"), fontSize: 11 }}>● Online</span>
        </div>
 
        <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: 12, paddingRight: 4 }}>
          {messages.map((m, i) => (
            <div key={i} style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start" }}>
              {m.role === "assistant" && <div style={{ width: 32, height: 32, borderRadius: "50%", background: T.gradientGold, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0, marginRight: 8 }}>🤖</div>}
              <div style={{ maxWidth: "75%", padding: "12px 16px", borderRadius: m.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px", background: m.role === "user" ? T.gradient : "#F9F5FF", color: m.role === "user" ? "#fff" : T.ink, fontSize: 14, lineHeight: 1.7, whiteSpace: "pre-wrap" }}>
                {m.text || (m.streaming && <span style={{ color: T.muted }}>Thinking...</span>)}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>
 
        {/* Quick actions */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", margin: "12px 0" }}>
          {quickActions.map(a => {
            const isDisruption = a.startsWith("🚨");
            return (
              <button key={a} onClick={async () => {
                setInput(a);
                if (!loading) {
                  const userMsg = a;
                  setInput("");
                  setMessages(prev => [...prev, { role: "user", text: userMsg }]);
                  setLoading(true);
                  let aiText = "";
                  setMessages(prev => [...prev, { role: "assistant", text: "", streaming: true }]);
                  await callAI(systemPrompt, userMsg, (text) => {
                    aiText = text;
                    setMessages(prev => {
                      const copy = [...prev];
                      copy[copy.length - 1] = { role: "assistant", text, streaming: true };
                      return copy;
                    });
                  });
                  setMessages(prev => {
                    const copy = [...prev];
                    copy[copy.length - 1] = { role: "assistant", text: aiText, streaming: false };
                    return copy;
                  });
                  setLoading(false);
                }
              }} style={{
                padding: "6px 12px", borderRadius: 20, cursor: "pointer", fontSize: 12, fontWeight: isDisruption ? 700 : 400,
                border: `1px solid ${isDisruption ? T.error : T.border}`,
                background: isDisruption ? "#FFF0F0" : "#fff",
                color: isDisruption ? T.error : T.muted,
              }}>{a}</button>
            );
          })}
        </div>
 
        <div style={{ display: "flex", gap: 10 }}>
          <input style={{ ...S.input, flex: 1 }} placeholder="Ask your AI planner anything..." value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && sendMessage()} />
          <button style={{ ...S.btn("gold"), padding: "12px 20px", flexShrink: 0 }} onClick={sendMessage} disabled={loading}>
            {loading ? "..." : "Send →"}
          </button>
        </div>
      </div>
    </div>
  );
}
 
// ─── CREATE DESIGN TAB ────────────────────────────────────────────────────────
function CreateDesignTab({ event, selectedVendors }) {
  const [activeCard, setActiveCard] = useState(null);
  const [suggestions, setSuggestions] = useState("");
  const [aiRecos, setAiRecos] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [printMode, setPrintMode] = useState(false);
 
  const getRecommendations = async () => {
    if (!suggestions.trim()) return;
    setLoading(true);
    setAiRecos("");
    const context = `Event: ${event.type || "Wedding"}, Budget: ₹${event.budget || "medium"}, Guests: ${event.guestCount || "100"}`;
    await callAI(
      `You are a creative Indian wedding design consultant. Give exactly 3 numbered design recommendations with brief descriptions. Be specific, visual, and culturally relevant.`,
      `Design category: ${activeCard?.label}. Client suggestion: "${suggestions}". Event context: ${context}. Recommend 3 options with names and descriptions.`,
      (text) => setAiRecos(text)
    );
    setLoading(false);
  };
 
  if (printMode && activeCard?.key === "invitation") {
    return (
      <div style={{ padding: 32, maxWidth: 600, margin: "0 auto" }}>
        <button style={{ ...S.btn("outline"), marginBottom: 20 }} onClick={() => setPrintMode(false)}>← Back to Design</button>
        <div style={{ background: T.gradient, padding: 48, borderRadius: 20, textAlign: "center", color: "#fff", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
          <div style={{ fontFamily: "Georgia, serif", fontSize: 14, color: T.goldLight, letterSpacing: 3, marginBottom: 16 }}>WITH JOY WE ANNOUNCE</div>
          <div style={{ fontFamily: "Georgia, serif", fontSize: 42, fontWeight: 700, color: T.goldLight, marginBottom: 8 }}>{event.type || "The Celebration"}</div>
          <div style={{ color: "rgba(255,255,255,0.8)", fontSize: 16, marginBottom: 32 }}>of</div>
          <div style={{ fontFamily: "Georgia, serif", fontSize: 28, color: "#fff", marginBottom: 32 }}>Your Family Name</div>
          <div style={{ border: `1px solid ${T.goldLight}`, padding: "20px 32px", display: "inline-block", borderRadius: 12, marginBottom: 24 }}>
            <div style={{ color: T.goldLight, fontSize: 16 }}>📅 {event.date || "Date TBD"} &nbsp;⏰ {event.time || "Time TBD"}</div>
            <div style={{ color: "rgba(255,255,255,0.8)", marginTop: 8 }}>📍 {event.venue || "Venue TBD"}</div>
          </div>
          <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 13 }}>Selected design: {selectedDesign || "Classic Elegance"}</div>
        </div>
        <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
          <button style={{ ...S.btn("gold"), flex: 1 }} onClick={() => window.print()}>🖨️ Print Card</button>
          <button style={{ ...S.btn("outline"), flex: 1 }} onClick={() => setPrintMode(false)}>Edit Design</button>
        </div>
      </div>
    );
  }
 
  return (
    <div style={{ padding: 32 }}>
      <h2 style={{ fontFamily: "Georgia, serif", fontSize: 32, marginBottom: 8 }}>🎨 Create & Design</h2>
      <p style={{ color: T.muted, marginBottom: 32 }}>AI-powered design recommendations for every aspect of your event.</p>
 
      {!activeCard ? (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          {DESIGN_CARDS.map(card => (
            <div key={card.key} style={{ ...S.card, cursor: "pointer", textAlign: "center", transition: "all 0.2s" }}
              onClick={() => { setActiveCard(card); setSuggestions(""); setAiRecos(""); setSelectedDesign(null); }}>
              <div style={{ fontSize: 40, marginBottom: 12 }}>{card.icon}</div>
              <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 6 }}>{card.label}</div>
              <div style={{ color: T.muted, fontSize: 13 }}>{card.desc}</div>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <button style={{ ...S.btn("outline"), marginBottom: 20 }} onClick={() => setActiveCard(null)}>← All Categories</button>
 
          <div style={{ ...S.card }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
              <div style={{ fontSize: 48 }}>{activeCard.icon}</div>
              <div>
                <h3 style={{ margin: 0, fontFamily: "Georgia, serif", fontSize: 24 }}>{activeCard.label}</h3>
                <p style={{ margin: 0, color: T.muted }}>{activeCard.desc}</p>
              </div>
            </div>
 
            <label style={S.label}>Your Suggestions & Preferences</label>
            <textarea
              style={{ ...S.input, height: 100, resize: "vertical", fontFamily: "inherit" }}
              placeholder={`Describe your vision for ${activeCard.label.toLowerCase()}... e.g., colors, themes, styles, cultural preferences`}
              value={suggestions}
              onChange={e => setSuggestions(e.target.value)}
            />
 
            <button style={{ ...S.btn("gold"), marginTop: 12 }} onClick={getRecommendations} disabled={loading}>
              {loading ? "🤖 Creating recommendations..." : "✨ Get AI Recommendations"}
            </button>
 
            {aiRecos && (
              <div style={{ marginTop: 24 }}>
                <div style={{ fontWeight: 700, color: T.goldDark, marginBottom: 12 }}>🎨 AI Recommendations</div>
                <div style={{ background: "#FFF8E1", borderRadius: 12, padding: 18, border: `1px solid ${T.goldLight}`, whiteSpace: "pre-wrap", fontSize: 14, lineHeight: 1.8, color: T.ink, marginBottom: 16 }}>
                  {aiRecos}
                </div>
 
                <label style={S.label}>Select Your Preferred Design</label>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 16 }}>
                  {["Option 1", "Option 2", "Option 3"].map(opt => (
                    <button key={opt} onClick={() => setSelectedDesign(opt)} style={{ padding: "8px 18px", borderRadius: 20, border: `2px solid ${selectedDesign === opt ? T.gold : T.border}`, background: selectedDesign === opt ? "#FFF8E1" : "#fff", cursor: "pointer", fontWeight: 600, color: selectedDesign === opt ? T.goldDark : T.muted }}>
                      {selectedDesign === opt ? "✓ " : ""}{opt}
                    </button>
                  ))}
                </div>
 
                {selectedDesign && (
                  <div style={{ display: "flex", gap: 12 }}>
                    <button style={S.btn("gold")} onClick={() => {
                      // Simulate conveying to vendor
                      alert(`✅ ${activeCard.label} design "${selectedDesign}" has been conveyed to the relevant vendor by your Event Planner Agent!`);
                    }}>
                      📤 Confirm & Send to Vendor
                    </button>
                    {activeCard.key === "invitation" && (
                      <button style={S.btn("outline")} onClick={() => setPrintMode(true)}>🖨️ Preview & Print</button>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
 
// ─── VENDOR DASHBOARD ─────────────────────────────────────────────────────────
function VendorDashboard({ user }) {
  const [orders, setOrders] = useState([
    { id: "ORD001", customer: "Ananya Rajan", event: "Wedding", date: "2024-03-15", status: "pending", amount: 85000, guests: 250, venue: "Grand Palace, Chennai", phone: "+91 98765 43210", email: "ananya@example.com", note: "Requesting sample delivery by March 1st. Prefers South Indian menu." },
    { id: "ORD002", customer: "Meera Krishnan", event: "Reception", date: "2024-03-22", status: "confirmed", amount: 45000, guests: 150, venue: "Grand Ballroom, Trichy", phone: "+91 87654 32109", email: "meera@example.com", note: "Confirmed. Venue changed to Grand Ballroom. Needs vegetarian options." },
    { id: "ORD003", customer: "Divya Suresh", event: "Birthday", date: "2024-04-01", status: "sample_sent", amount: 12000, guests: 60, venue: "Home venue, Salem", phone: "+91 76543 21098", email: "divya@example.com", note: "Sample food parcel sent on Feb 20. Awaiting feedback." },
  ]);

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [replyText, setReplyText] = useState("");
  const [replyingTo, setReplyingTo] = useState(null);
  const [toastMsg, setToastMsg] = useState("");

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(""), 3000);
  };

  const updateStatus = (orderId, newStatus) => {
    setOrders(prev => prev.map(o => o.id === orderId ? { ...o, status: newStatus } : o));
    if (selectedOrder?.id === orderId) setSelectedOrder(prev => ({ ...prev, status: newStatus }));
    const labels = { confirmed: "✅ Order Confirmed", sample_sent: "📦 Sample Marked as Sent", completed: "🎉 Order Completed" };
    showToast(labels[newStatus] || "Status updated");
  };

  const stats = [
    { label: "Total Orders", value: orders.length + 21, icon: "📋", color: T.gold },
    { label: "Pending", value: orders.filter(o => o.status === "pending").length, icon: "⏳", color: T.warning },
    { label: "Confirmed", value: orders.filter(o => o.status === "confirmed").length + 16, icon: "✅", color: T.success },
    { label: "Revenue", value: "₹4.2L", icon: "💰", color: T.roseDark },
  ];

  const statusConfig = {
    pending:      { label: "⏳ Pending",     color: "pink",  next: [{ label: "✅ Confirm Order", status: "confirmed" }, { label: "📦 Send Sample", status: "sample_sent" }] },
    confirmed:    { label: "✅ Confirmed",   color: "green", next: [{ label: "📦 Send Sample", status: "sample_sent" }, { label: "🎉 Mark Complete", status: "completed" }] },
    sample_sent:  { label: "📦 Sample Sent", color: "gold",  next: [{ label: "✅ Confirm Order", status: "confirmed" }, { label: "🎉 Mark Complete", status: "completed" }] },
    completed:    { label: "🎉 Completed",  color: "green", next: [] },
  };

  const messages = [
    { from: "AI Planner (Ananya's Wedding)", orderId: "ORD001", msg: "Please confirm availability for March 15. Client is requesting sample delivery by March 1.", time: "2h ago", status: "new" },
    { from: "AI Planner (Meera's Reception)", orderId: "ORD002", msg: "Your appointment has been confirmed. Please note the venue change to Grand Ballroom, Trichy.", time: "1d ago", status: "read" },
  ];

  return (
    <div style={{ padding: 32 }}>
      {/* Toast */}
      {toastMsg && (
        <div style={{ position: "fixed", top: 80, right: 24, background: T.inkMid, color: "#fff", padding: "12px 20px", borderRadius: 12, fontWeight: 600, fontSize: 14, zIndex: 999, boxShadow: "0 8px 24px rgba(0,0,0,0.3)", border: `1px solid ${T.gold}` }}>
          {toastMsg}
        </div>
      )}

      {/* Order Detail Modal */}
      {selectedOrder && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(26,16,37,0.7)", zIndex: 500, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}
          onClick={e => e.target === e.currentTarget && setSelectedOrder(null)}>
          <div style={{ background: "#fff", borderRadius: 24, width: "100%", maxWidth: 580, maxHeight: "90vh", overflowY: "auto", boxShadow: "0 24px 64px rgba(0,0,0,0.4)" }}>
            {/* Modal Header */}
            <div style={{ background: T.gradient, padding: "24px 28px", borderRadius: "24px 24px 0 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ color: T.goldLight, fontWeight: 700, fontSize: 20, fontFamily: "Georgia, serif" }}>{selectedOrder.id}</div>
                <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, marginTop: 2 }}>{selectedOrder.event} · {selectedOrder.date}</div>
              </div>
              <button onClick={() => setSelectedOrder(null)} style={{ background: "rgba(255,255,255,0.15)", border: "none", color: "#fff", borderRadius: 8, padding: "8px 14px", cursor: "pointer", fontSize: 18, fontWeight: 700 }}>✕</button>
            </div>

            <div style={{ padding: 28 }}>
              {/* Status Badge + Actions */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24, flexWrap: "wrap", gap: 12 }}>
                <span style={{ ...S.tag(statusConfig[selectedOrder.status]?.color || "gold"), fontSize: 14, padding: "6px 14px" }}>
                  {statusConfig[selectedOrder.status]?.label}
                </span>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  {statusConfig[selectedOrder.status]?.next.map(action => (
                    <button key={action.status} style={{ ...S.btn("gold"), padding: "8px 16px", fontSize: 13 }}
                      onClick={() => updateStatus(selectedOrder.id, action.status)}>
                      {action.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Customer Details */}
              <div style={{ ...S.card, marginBottom: 16, background: T.surface }}>
                <div style={{ fontWeight: 700, fontSize: 14, color: T.goldDark, marginBottom: 12 }}>👤 Customer Details</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, fontSize: 14 }}>
                  <div><span style={{ color: T.muted }}>Name: </span><strong>{selectedOrder.customer}</strong></div>
                  <div><span style={{ color: T.muted }}>Event: </span><strong>{selectedOrder.event}</strong></div>
                  <div><span style={{ color: T.muted }}>Phone: </span><strong>{selectedOrder.phone}</strong></div>
                  <div><span style={{ color: T.muted }}>Email: </span><strong style={{ fontSize: 12 }}>{selectedOrder.email}</strong></div>
                  <div><span style={{ color: T.muted }}>Guests: </span><strong>{selectedOrder.guests}</strong></div>
                  <div><span style={{ color: T.muted }}>Amount: </span><strong style={{ color: T.success }}>₹{selectedOrder.amount.toLocaleString("en-IN")}</strong></div>
                  <div style={{ gridColumn: "1/-1" }}><span style={{ color: T.muted }}>Venue: </span><strong>{selectedOrder.venue}</strong></div>
                </div>
              </div>

              {/* Notes */}
              <div style={{ ...S.card, marginBottom: 16, background: "#FFF8E1", border: `1px solid ${T.goldLight}` }}>
                <div style={{ fontWeight: 700, fontSize: 14, color: T.goldDark, marginBottom: 8 }}>📝 Notes</div>
                <div style={{ fontSize: 14, color: T.ink, lineHeight: 1.7 }}>{selectedOrder.note}</div>
              </div>

              {/* Quick Actions */}
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a href={`tel:${selectedOrder.phone}`} style={{ ...S.btn("outline"), textDecoration: "none", padding: "8px 16px", fontSize: 13 }}>📞 Call Customer</a>
                <a href={`mailto:${selectedOrder.email}`} style={{ ...S.btn("outline"), textDecoration: "none", padding: "8px 16px", fontSize: 13 }}>✉️ Email Customer</a>
                {selectedOrder.status !== "completed" && (
                  <button style={{ ...S.btn("danger"), padding: "8px 16px", fontSize: 13 }}
                    onClick={() => { updateStatus(selectedOrder.id, "completed"); setSelectedOrder(null); }}>
                    🎉 Mark Complete
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <div style={{ marginBottom: 32 }}>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 32, marginBottom: 4 }}>Welcome, {user.name} 🏪</h2>
        <p style={{ color: T.muted }}>Manage your orders and vendor profile</p>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 32 }}>
        {stats.map(s => (
          <div key={s.label} style={{ ...S.card, textAlign: "center" }}>
            <div style={{ fontSize: 32, marginBottom: 8 }}>{s.icon}</div>
            <div style={{ fontSize: 28, fontWeight: 700, color: s.color }}>{s.value}</div>
            <div style={{ color: T.muted, fontSize: 13 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Orders Table */}
      <div style={S.card}>
        <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 16, color: T.goldDark }}>📋 Recent Orders</div>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              {["Order ID", "Customer", "Event", "Date", "Amount", "Status", "Action"].map(h => (
                <th key={h} style={{ padding: "10px 12px", textAlign: "left", borderBottom: `2px solid ${T.border}`, fontSize: 12, fontWeight: 700, color: T.muted, textTransform: "uppercase", letterSpacing: 0.5 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id} style={{ borderBottom: `1px solid ${T.border}`, cursor: "pointer" }}
                onMouseEnter={e => e.currentTarget.style.background = T.surface}
                onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                <td style={{ padding: "14px 12px", fontWeight: 700, color: T.goldDark }}>{order.id}</td>
                <td style={{ padding: "14px 12px" }}>{order.customer}</td>
                <td style={{ padding: "14px 12px" }}>{order.event}</td>
                <td style={{ padding: "14px 12px", color: T.muted }}>{order.date}</td>
                <td style={{ padding: "14px 12px", fontWeight: 700 }}>₹{order.amount.toLocaleString("en-IN")}</td>
                <td style={{ padding: "14px 12px" }}>
                  <span style={S.tag(statusConfig[order.status]?.color || "gold")}>
                    {statusConfig[order.status]?.label}
                  </span>
                </td>
                <td style={{ padding: "14px 12px" }}>
                  <button style={{ ...S.btn("gold"), padding: "6px 14px", fontSize: 13 }}
                    onClick={() => setSelectedOrder(order)}>
                    View →
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Messages */}
      <div style={{ ...S.card, marginTop: 20 }}>
        <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 16, color: T.goldDark }}>📬 Recent Messages from Event Planner</div>
        {messages.map((m, i) => (
          <div key={i} style={{ padding: 16, borderRadius: 12, background: m.status === "new" ? "#FFF8E1" : T.surface, border: `1px solid ${m.status === "new" ? T.goldLight : T.border}`, marginBottom: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
              <strong style={{ fontSize: 14 }}>🤖 {m.from}</strong>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                {m.status === "new" && <span style={S.tag("gold")}>New</span>}
                <span style={{ color: T.muted, fontSize: 12 }}>{m.time}</span>
              </div>
            </div>
            <p style={{ color: T.ink, fontSize: 14, margin: "0 0 10px" }}>{m.msg}</p>
            {replyingTo === i ? (
              <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                <input
                  style={{ ...S.input, flex: 1, fontSize: 13, padding: "8px 12px" }}
                  placeholder="Type your reply..."
                  value={replyText}
                  onChange={e => setReplyText(e.target.value)}
                  onKeyDown={e => {
                    if (e.key === "Enter" && replyText.trim()) {
                      showToast("✉️ Reply sent successfully!");
                      setReplyingTo(null);
                      setReplyText("");
                    }
                  }}
                  autoFocus
                />
                <button style={{ ...S.btn("gold"), padding: "8px 16px", fontSize: 13 }}
                  onClick={() => {
                    if (replyText.trim()) {
                      showToast("✉️ Reply sent successfully!");
                      setReplyingTo(null);
                      setReplyText("");
                    }
                  }}>Send</button>
                <button style={{ ...S.btn("outline"), padding: "8px 12px", fontSize: 13 }}
                  onClick={() => { setReplyingTo(null); setReplyText(""); }}>Cancel</button>
              </div>
            ) : (
              <div style={{ display: "flex", gap: 8 }}>
                <button style={{ ...S.btn("gold"), padding: "6px 14px", fontSize: 13 }}
                  onClick={() => setReplyingTo(i)}>Reply</button>
                <button style={{ ...S.btn("outline"), padding: "6px 14px", fontSize: 13 }}
                  onClick={() => setSelectedOrder(orders.find(o => o.id === m.orderId))}>View Order</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
 
// ─── VENDOR ORDERS PAGE ───────────────────────────────────────────────────────
function VendorOrdersPage({ user }) {
  const [orders] = useState([
    { id: "ORD001", customer: "Ananya Rajan",   event: "Wedding",   date: "2024-03-15", status: "pending",     amount: 85000, guests: 250, venue: "Grand Palace, Chennai",    phone: "+91 98765 43210", email: "ananya@example.com",  note: "Prefers South Indian menu. Sample by March 1." },
    { id: "ORD002", customer: "Meera Krishnan", event: "Reception", date: "2024-03-22", status: "confirmed",   amount: 45000, guests: 150, venue: "Grand Ballroom, Trichy",   phone: "+91 87654 32109", email: "meera@example.com",   note: "Venue changed. Needs vegetarian options." },
    { id: "ORD003", customer: "Divya Suresh",   event: "Birthday",  date: "2024-04-01", status: "sample_sent", amount: 12000, guests: 60,  venue: "Home venue, Salem",        phone: "+91 76543 21098", email: "divya@example.com",   note: "Sample sent Feb 20. Awaiting feedback." },
    { id: "ORD004", customer: "Priya Nair",     event: "Engagement",date: "2024-04-10", status: "completed",   amount: 30000, guests: 100, venue: "Lakeview Hall, Kochi",     phone: "+91 65432 10987", email: "priya@example.com",   note: "Completed successfully. Great feedback received." },
    { id: "ORD005", customer: "Kavya Sharma",   event: "Baby Shower",date: "2024-04-18",status: "pending",     amount: 18000, guests: 40,  venue: "Private Residence, Trichy",phone: "+91 54321 09876", email: "kavya@example.com",   note: "Themed baby shower. Pink and white decor requested." },
  ]);

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [filterStatus, setFilterStatus] = useState("all");
  const [search, setSearch] = useState("");
  const [orderStatuses, setOrderStatuses] = useState({});
  const [toastMsg, setToastMsg] = useState("");

  const showToast = (msg) => { setToastMsg(msg); setTimeout(() => setToastMsg(""), 3000); };

  const getStatus = (o) => orderStatuses[o.id] || o.status;

  const updateStatus = (id, newStatus) => {
    setOrderStatuses(prev => ({ ...prev, [id]: newStatus }));
    if (selectedOrder?.id === id) setSelectedOrder(prev => ({ ...prev, status: newStatus }));
    const labels = { confirmed: "✅ Confirmed", sample_sent: "📦 Sample Sent", completed: "🎉 Completed" };
    showToast(labels[newStatus] || "Updated");
  };

  const statusConfig = {
    pending:     { label: "⏳ Pending",     color: "pink",  next: [{ label: "✅ Confirm", status: "confirmed" }, { label: "📦 Sample Sent", status: "sample_sent" }] },
    confirmed:   { label: "✅ Confirmed",   color: "green", next: [{ label: "📦 Sample Sent", status: "sample_sent" }, { label: "🎉 Complete", status: "completed" }] },
    sample_sent: { label: "📦 Sample Sent", color: "gold",  next: [{ label: "✅ Confirm", status: "confirmed" }, { label: "🎉 Complete", status: "completed" }] },
    completed:   { label: "🎉 Completed",   color: "green", next: [] },
  };

  const filtered = orders.filter(o => {
    const st = getStatus(o);
    const matchStatus = filterStatus === "all" || st === filterStatus;
    const q = search.toLowerCase();
    const matchSearch = !q || o.customer.toLowerCase().includes(q) || o.event.toLowerCase().includes(q) || o.id.toLowerCase().includes(q);
    return matchStatus && matchSearch;
  });

  return (
    <div style={{ padding: 32 }}>
      {toastMsg && (
        <div style={{ position: "fixed", top: 80, right: 24, background: T.inkMid, color: "#fff", padding: "12px 20px", borderRadius: 12, fontWeight: 600, fontSize: 14, zIndex: 999, boxShadow: "0 8px 24px rgba(0,0,0,0.3)", border: `1px solid ${T.gold}` }}>
          {toastMsg}
        </div>
      )}

      {selectedOrder && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(26,16,37,0.7)", zIndex: 500, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}
          onClick={e => e.target === e.currentTarget && setSelectedOrder(null)}>
          <div style={{ background: "#fff", borderRadius: 24, width: "100%", maxWidth: 560, maxHeight: "90vh", overflowY: "auto", boxShadow: "0 24px 64px rgba(0,0,0,0.4)" }}>
            <div style={{ background: T.gradient, padding: "24px 28px", borderRadius: "24px 24px 0 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ color: T.goldLight, fontWeight: 700, fontSize: 20 }}>{selectedOrder.id}</div>
                <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 13 }}>{selectedOrder.event} · {selectedOrder.date}</div>
              </div>
              <button onClick={() => setSelectedOrder(null)} style={{ background: "rgba(255,255,255,0.15)", border: "none", color: "#fff", borderRadius: 8, padding: "8px 14px", cursor: "pointer", fontSize: 18 }}>✕</button>
            </div>
            <div style={{ padding: 28 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20, flexWrap: "wrap", gap: 10 }}>
                <span style={{ ...S.tag(statusConfig[getStatus(selectedOrder)]?.color || "gold"), fontSize: 14, padding: "6px 14px" }}>
                  {statusConfig[getStatus(selectedOrder)]?.label}
                </span>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {statusConfig[getStatus(selectedOrder)]?.next.map(a => (
                    <button key={a.status} style={{ ...S.btn("gold"), padding: "8px 14px", fontSize: 13 }} onClick={() => updateStatus(selectedOrder.id, a.status)}>{a.label}</button>
                  ))}
                </div>
              </div>
              <div style={{ ...S.card, background: T.surface, marginBottom: 14 }}>
                <div style={{ fontWeight: 700, color: T.goldDark, marginBottom: 10, fontSize: 14 }}>👤 Customer Details</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, fontSize: 14 }}>
                  <div><span style={{ color: T.muted }}>Name: </span><strong>{selectedOrder.customer}</strong></div>
                  <div><span style={{ color: T.muted }}>Event: </span><strong>{selectedOrder.event}</strong></div>
                  <div><span style={{ color: T.muted }}>Phone: </span><strong>{selectedOrder.phone}</strong></div>
                  <div><span style={{ color: T.muted }}>Email: </span><strong style={{ fontSize: 12 }}>{selectedOrder.email}</strong></div>
                  <div><span style={{ color: T.muted }}>Guests: </span><strong>{selectedOrder.guests}</strong></div>
                  <div><span style={{ color: T.muted }}>Amount: </span><strong style={{ color: T.success }}>₹{selectedOrder.amount.toLocaleString("en-IN")}</strong></div>
                  <div style={{ gridColumn: "1/-1" }}><span style={{ color: T.muted }}>Venue: </span><strong>{selectedOrder.venue}</strong></div>
                </div>
              </div>
              <div style={{ ...S.card, background: "#FFF8E1", border: `1px solid ${T.goldLight}`, marginBottom: 14 }}>
                <div style={{ fontWeight: 700, color: T.goldDark, marginBottom: 6, fontSize: 14 }}>📝 Notes</div>
                <div style={{ fontSize: 14, color: T.ink, lineHeight: 1.7 }}>{selectedOrder.note}</div>
              </div>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a href={`tel:${selectedOrder.phone}`} style={{ ...S.btn("outline"), textDecoration: "none", fontSize: 13, padding: "8px 14px" }}>📞 Call</a>
                <a href={`mailto:${selectedOrder.email}`} style={{ ...S.btn("outline"), textDecoration: "none", fontSize: 13, padding: "8px 14px" }}>✉️ Email</a>
              </div>
            </div>
          </div>
        </div>
      )}

      <div style={{ marginBottom: 28 }}>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 32, marginBottom: 4 }}>📋 All Orders</h2>
        <p style={{ color: T.muted }}>Full history of your orders</p>
      </div>

      {/* Search + Filter */}
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center", marginBottom: 24 }}>
        <input style={{ ...S.input, maxWidth: 280 }} placeholder="🔍 Search by name, event, ID..." value={search} onChange={e => setSearch(e.target.value)} />
        <div style={{ display: "flex", gap: 8 }}>
          {["all", "pending", "confirmed", "sample_sent", "completed"].map(s => (
            <button key={s} onClick={() => setFilterStatus(s)} style={{ padding: "8px 14px", borderRadius: 20, border: `1.5px solid ${filterStatus === s ? T.gold : T.border}`, background: filterStatus === s ? "#FFF8E1" : "#fff", cursor: "pointer", fontWeight: 600, fontSize: 12, color: filterStatus === s ? T.goldDark : T.muted, textTransform: "capitalize" }}>
              {s === "all" ? "All" : s === "sample_sent" ? "Sample Sent" : s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>
        <div style={{ color: T.muted, fontSize: 13, fontWeight: 600 }}>{filtered.length} order{filtered.length !== 1 ? "s" : ""}</div>
      </div>

      <div style={S.card}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "60px 20px", color: T.muted }}>
            <div style={{ fontSize: 40, marginBottom: 10 }}>📭</div>
            <div style={{ fontWeight: 700, fontSize: 18 }}>No orders found</div>
            <div style={{ fontSize: 14 }}>Try changing your filter or search</div>
          </div>
        ) : (
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>{["Order ID", "Customer", "Event", "Date", "Guests", "Amount", "Status", "Action"].map(h => (
                <th key={h} style={{ padding: "10px 12px", textAlign: "left", borderBottom: `2px solid ${T.border}`, fontSize: 12, fontWeight: 700, color: T.muted, textTransform: "uppercase", letterSpacing: 0.5 }}>{h}</th>
              ))}</tr>
            </thead>
            <tbody>
              {filtered.map(order => (
                <tr key={order.id} style={{ borderBottom: `1px solid ${T.border}` }}
                  onMouseEnter={e => e.currentTarget.style.background = T.surface}
                  onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                  <td style={{ padding: "14px 12px", fontWeight: 700, color: T.goldDark }}>{order.id}</td>
                  <td style={{ padding: "14px 12px" }}>{order.customer}</td>
                  <td style={{ padding: "14px 12px" }}>{order.event}</td>
                  <td style={{ padding: "14px 12px", color: T.muted }}>{order.date}</td>
                  <td style={{ padding: "14px 12px", color: T.muted }}>{order.guests}</td>
                  <td style={{ padding: "14px 12px", fontWeight: 700 }}>₹{order.amount.toLocaleString("en-IN")}</td>
                  <td style={{ padding: "14px 12px" }}>
                    <span style={S.tag(statusConfig[getStatus(order)]?.color || "gold")}>{statusConfig[getStatus(order)]?.label}</span>
                  </td>
                  <td style={{ padding: "14px 12px" }}>
                    <button style={{ ...S.btn("gold"), padding: "6px 14px", fontSize: 13 }} onClick={() => setSelectedOrder({ ...order, status: getStatus(order) })}>View →</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

// ─── VENDOR PROFILE PAGE ──────────────────────────────────────────────────────
function VendorProfilePage({ user }) {
  const [profile, setProfile] = useState({
    name: user.name,
    category: "Catering",
    city: "Chennai",
    phone: "+91 98765 43210",
    email: user.email || "vendor@demo.com",
    bio: "We are a premium catering service specializing in South Indian and multi-cuisine events across Tamil Nadu. With over 10 years of experience, we bring authentic flavors to every occasion.",
    speciality: "South Indian, Multi-cuisine, Chettinad",
    priceRange: "medium",
    experience: "10",
    website: "www.rajeshcaterers.com",
  });
  const [saved, setSaved] = useState(false);
  const [toastMsg, setToastMsg] = useState("");

  const showToast = (msg) => { setToastMsg(msg); setTimeout(() => setToastMsg(""), 3000); };

  const handleSave = () => {
    setSaved(true);
    showToast("✅ Profile saved successfully!");
    setTimeout(() => setSaved(false), 3000);
  };

  const Field = ({ label, field, type = "text", options }) => (
    <div>
      <label style={S.label}>{label}</label>
      {options ? (
        <select style={{ ...S.input }} value={profile[field]} onChange={e => setProfile({ ...profile, [field]: e.target.value })}>
          {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      ) : type === "textarea" ? (
        <textarea style={{ ...S.input, height: 100, resize: "vertical", fontFamily: "inherit" }} value={profile[field]} onChange={e => setProfile({ ...profile, [field]: e.target.value })} />
      ) : (
        <input style={S.input} type={type} value={profile[field]} onChange={e => setProfile({ ...profile, [field]: e.target.value })} />
      )}
    </div>
  );

  return (
    <div style={{ padding: 32, maxWidth: 780, margin: "0 auto" }}>
      {toastMsg && (
        <div style={{ position: "fixed", top: 80, right: 24, background: T.inkMid, color: "#fff", padding: "12px 20px", borderRadius: 12, fontWeight: 600, fontSize: 14, zIndex: 999, boxShadow: "0 8px 24px rgba(0,0,0,0.3)", border: `1px solid ${T.gold}` }}>
          {toastMsg}
        </div>
      )}

      <div style={{ marginBottom: 28 }}>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 32, marginBottom: 4 }}>👤 Vendor Profile</h2>
        <p style={{ color: T.muted }}>Keep your profile up to date to attract more customers</p>
      </div>

      {/* Profile Card Preview */}
      <div style={{ ...S.card, background: T.gradient, color: "#fff", marginBottom: 28, display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
        <div style={{ width: 72, height: 72, borderRadius: "50%", background: T.gradientGold, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, flexShrink: 0 }}>🏪</div>
        <div>
          <div style={{ fontFamily: "Georgia, serif", fontSize: 22, fontWeight: 700, color: T.goldLight }}>{profile.name}</div>
          <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, marginTop: 4 }}>{profile.category} · {profile.city}</div>
          <div style={{ display: "flex", gap: 8, marginTop: 8, flexWrap: "wrap" }}>
            <span style={{ ...S.tag("gold"), fontSize: 11 }}>✓ Verified</span>
            <span style={{ ...S.tag("green"), fontSize: 11 }}>⭐ 4.8 Rating</span>
            <span style={{ ...S.tag("gold"), fontSize: 11 }}>{profile.experience} yrs experience</span>
          </div>
        </div>
      </div>

      <div style={S.card}>
        <div style={{ fontWeight: 700, fontSize: 18, color: T.goldDark, marginBottom: 24 }}>✏️ Edit Profile</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <Field label="Business Name" field="name" />
          <Field label="Category" field="category" options={[
            { value: "Catering", label: "🍽️ Catering" },
            { value: "Decoration", label: "🌸 Decoration" },
            { value: "Photography", label: "📸 Photography" },
            { value: "Makeup", label: "💄 Makeup" },
            { value: "Costume", label: "👗 Costume Design" },
            { value: "Return Gifts", label: "🎁 Return Gifts" },
          ]} />
          <Field label="City" field="city" />
          <Field label="Phone" field="phone" type="tel" />
          <Field label="Email" field="email" type="email" />
          <Field label="Website" field="website" />
          <Field label="Years of Experience" field="experience" type="number" />
          <Field label="Price Range" field="priceRange" options={[
            { value: "low", label: "💚 Budget" },
            { value: "medium", label: "🔵 Mid-range" },
            { value: "high", label: "⭐ Premium" },
          ]} />
          <div style={{ gridColumn: "1/-1" }}>
            <Field label="Speciality" field="speciality" />
          </div>
          <div style={{ gridColumn: "1/-1" }}>
            <Field label="About / Bio" field="bio" type="textarea" />
          </div>
        </div>

        <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
          <button style={{ ...S.btn("gold"), padding: "12px 28px", fontSize: 15 }} onClick={handleSave}>
            {saved ? "✅ Saved!" : "💾 Save Profile"}
          </button>
          <button style={{ ...S.btn("outline"), padding: "12px 20px", fontSize: 15 }} onClick={() => showToast("👁️ Profile preview opened")}>
            👁️ Preview Public Profile
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── ROOT APP ─────────────────────────────────────────────────────────────────
// Application root — owns all shared state and handles routing.
//
// State persistence strategy: all key state is lazy-initialized from localStorage
// and synced back via useEffect on every change. This means data survives page
// refresh, which is critical for a smooth hackathon demo without backend storage.
//
// Routing: renderTab() switches between user and vendor views based on role.
// Vendor role bypasses the user flow entirely and renders the admin console.
export default function App() {
  // Lazy initializers read from localStorage — falls back to null/{} if not set
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem("es_user") || "null"); } catch { return null; }
  });
  const [tab, setTab] = useState(() => localStorage.getItem("es_tab") || "Home");
  const [event, setEvent] = useState(() => {
    try { return JSON.parse(localStorage.getItem("es_event") || "{}"); } catch { return {}; }
  });
  const [selectedVendors, setSelectedVendors] = useState(() => {
    try { return JSON.parse(localStorage.getItem("es_vendors") || "{}"); } catch { return {}; }
  });

  // Persist to localStorage on every change
  useEffect(() => { localStorage.setItem("es_user", JSON.stringify(user)); }, [user]);
  useEffect(() => { localStorage.setItem("es_tab", tab); }, [tab]);
  useEffect(() => { localStorage.setItem("es_event", JSON.stringify(event)); }, [event]);
  useEffect(() => { localStorage.setItem("es_vendors", JSON.stringify(selectedVendors)); }, [selectedVendors]);

  const handleLogout = () => {
    setUser(null); setEvent({}); setSelectedVendors({}); setTab("Home");
    localStorage.removeItem("es_user"); localStorage.removeItem("es_tab");
    localStorage.removeItem("es_event"); localStorage.removeItem("es_vendors");
  };

  if (!user) return <AuthScreen onLogin={(u) => { setUser(u); setTab(u.role === "vendor" ? "Dashboard" : "Home"); }} />;
 
  const renderTab = () => {
    if (user.role === "vendor") {
      switch (tab) {
        case "Dashboard": return <VendorDashboard user={user} />;
        case "Orders":    return <VendorOrdersPage user={user} />;
        case "Profile":   return <VendorProfilePage user={user} />;
        default:          return <VendorDashboard user={user} />;
      }
    }
    switch (tab) {
      case "Home": return <HomeTab user={user} setTab={setTab} />;
      case "Create Event": return <CreateEventTab event={event} setEvent={setEvent} />;
      case "Marketplace": return <MarketplaceTab selectedVendors={selectedVendors} setSelectedVendors={setSelectedVendors} event={event} />;
      case "Event Planner": return <EventPlannerTab event={event} selectedVendors={selectedVendors} />;
      case "Create Design": return <CreateDesignTab event={event} selectedVendors={selectedVendors} />;
      default: return <HomeTab user={user} setTab={setTab} />;
    }
  };
 
  return (
    <div style={S.app}>
      <NavBar user={user} tab={tab} setTab={setTab} onLogout={handleLogout} />
      <div style={{ minHeight: "calc(100vh - 64px)" }}>{renderTab()}</div>
      <footer style={{ background: T.gradient, color: "rgba(255,255,255,0.6)", padding: "28px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16, fontSize: 13 }}>
        <div>
          <div style={{ fontFamily: "Georgia, serif", fontSize: 18, fontWeight: 700, color: T.goldLight, marginBottom: 4 }}>✨ EventSphere</div>
          <div>Plan your perfect celebration — powered by Gemini AI</div>
        </div>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          <span>🍽️ Catering</span>
          <span>🌸 Decor</span>
          <span>📸 Photography</span>
          <span>💄 Makeup</span>
          <span>🎁 Gifts</span>
        </div>
        <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 12 }}>© 2025 EventSphere · Made with 💛 by Team Arka!</div>
      </footer>
    </div>
  );
}