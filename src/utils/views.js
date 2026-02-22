const KEY = "nb_views_v1";

function readMap() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function writeMap(map) {
  try {
    localStorage.setItem(KEY, JSON.stringify(map));
  } catch {
    // ignore
  }
}

export function getViews(slug, baseViews = 0) {
  if (!slug) return baseViews || 0;
  const map = readMap();
  const stored = map[slug];
  const v = typeof stored === "number" ? stored : undefined;
  return typeof v === "number" ? v : (baseViews || 0);
}

export function incrementViews(slug, baseViews = 0) {
  if (!slug) return baseViews || 0;

  const map = readMap();
  const current = typeof map[slug] === "number" ? map[slug] : (baseViews || 0);
  const next = current + 1;

  map[slug] = next;
  writeMap(map);

  return next;
}