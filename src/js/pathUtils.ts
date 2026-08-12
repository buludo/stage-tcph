/**
 * Prefix an internal path with the site base (e.g. /stage-tcph).
 * External URLs, anchors, and mailto/tel links are returned unchanged.
 */
export function withBase(path: string): string {
	if (!path || path.startsWith("#") || path.startsWith("mailto:") || path.startsWith("tel:")) {
		return path;
	}

	if (/^https?:\/\//i.test(path)) {
		return path;
	}

	const base = import.meta.env.BASE_URL.replace(/\/$/, "");

	if (path.startsWith(`${base}/`) || path === base || path === `${base}/`) {
		return path;
	}

	if (path === "/" || path === "") {
		return `${base}/`;
	}

	const normalized = path.startsWith("/") ? path : `/${path}`;
	return `${base}${normalized}`;
}

/** Normalize paths for active-link comparison. */
export function normalizePath(path: string): string {
	const trimmed = path.replace(/\/$/, "");
	return trimmed || "/";
}
