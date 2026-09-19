/**
 * EventSphere Constants
 * Centralised app-wide constant values.
 */

export const APP_NAME = "EventSphere";
export const APP_VERSION = "1.0.0";
export const APP_TAGLINE = "AI-Powered Event Planning Platform";

// ─── Design Tokens ────────────────────────────────────────────────────────────
export const COLORS = {
  gold:        "#C9A84C",
  goldLight:   "#F0D080",
  goldDark:    "#8B6914",
  rose:        "#E8A0B4",
  roseDark:    "#C4607A",
  ink:         "#1A1025",
  inkMid:      "#2D1F3D",
  inkSoft:     "#3D2F50",
  muted:       "#7B6890",
  surface:     "#F9F5FF",
  surfaceCard: "#FFFFFF",
  border:      "#E8DFF5",
  success:     "#2ECC71",
  warning:     "#F39C12",
  error:       "#E74C3C",
};

export const GRADIENTS = {
  main:   "linear-gradient(135deg, #1A1025 0%, #2D1F3D 50%, #3D2F50 100%)",
  gold:   "linear-gradient(135deg, #C9A84C 0%, #F0D080 50%, #C9A84C 100%)",
  card:   "linear-gradient(135deg, #2D1F3D 0%, #3D2F50 100%)",
  hero:   "linear-gradient(135deg, #1A1025 0%, #3D2F50 100%)",
};

// ─── Event Categories ─────────────────────────────────────────────────────────
export const EVENT_TYPES = [
  { id: "wedding",    label: "Wedding",          icon: "💍", color: "#E8A0B4" },
  { id: "birthday",   label: "Birthday Party",   icon: "🎂", color: "#F0D080" },
  { id: "corporate",  label: "Corporate Event",  icon: "🏢", color: "#7B6890" },
  { id: "engagement", label: "Engagement",       icon: "💒", color: "#E8A0B4" },
  { id: "babyshower", label: "Baby Shower",      icon: "👶", color: "#A0D8F0" },
  { id: "anniversary",label: "Anniversary",      icon: "🥂", color: "#C9A84C" },
  { id: "graduation", label: "Graduation",       icon: "🎓", color: "#2ECC71" },
  { id: "festival",   label: "Festival",         icon: "🪔", color: "#F39C12" },
];

// ─── Vendor Categories ────────────────────────────────────────────────────────
export const VENDOR_CATEGORIES = [
  { key: "catering",    label: "Catering",      icon: "🍽️" },
  { key: "decoration",  label: "Decoration",    icon: "🌸" },
  { key: "photographer",label: "Photography",   icon: "📸" },
  { key: "makeup",      label: "Makeup",        icon: "💄" },
  { key: "costume",     label: "Costume",       icon: "👗" },
  { key: "returnGift",  label: "Return Gifts",  icon: "🎁" },
  { key: "music",       label: "Music & DJ",    icon: "🎵" },
  { key: "venue",       label: "Venue",         icon: "🏛️" },
];

// ─── Price Tiers ──────────────────────────────────────────────────────────────
export const PRICE_TIERS = {
  low:    { label: "Budget",   icon: "💰",   color: "#2ECC71" },
  medium: { label: "Standard", icon: "💰💰",  color: "#F39C12" },
  high:   { label: "Premium",  icon: "💰💰💰", color: "#C9A84C" },
};

// ─── Cities ───────────────────────────────────────────────────────────────────
export const CITIES = [
  "Chennai", "Coimbatore", "Madurai", "Trichy",
  "Salem", "Tirunelveli", "Kanchipuram", "Vellore",
  "Erode", "Thanjavur",
];

// ─── AI Config ────────────────────────────────────────────────────────────────
export const GEMINI_MODEL = "gemini-2.5-flash";
export const GEMINI_STREAM_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:streamGenerateContent?alt=sse&key=`;
