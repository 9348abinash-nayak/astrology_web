const PROKERALA_TOKEN_URL = "https://api.prokerala.com/token";
const PROKERALA_API_BASE = "https://api.prokerala.com/v2";

/**
 * Fetches an access token from Prokerala using Client Credentials flow.
 * Uses a proxy to bypass potential CORS issues during development.
 */
export const getProkeralaToken = async () => {
    const clientId = import.meta.env.VITE_PROKERALA_CLIENT_ID;
    const clientSecret = import.meta.env.VITE_PROKERALA_CLIENT_SECRET;

    if (!clientId || clientId === "YOUR_CLIENT_ID_HERE" || !clientId.match(/^[0-9a-f-]+$/)) {
        throw new Error("PROKERALA_NOT_CONFIGURED");
    }

    const body = new URLSearchParams({
        grant_type: "client_credentials",
        client_id: clientId,
        client_secret: clientSecret,
    });

    // Using corsproxy.io for the token endpoint as well
    const response = await fetch(`https://corsproxy.io/?${encodeURIComponent(PROKERALA_TOKEN_URL)}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body.toString(),
    });

    if (!response.ok) {
        const errorText = await response.text();
        console.error("Token Error Response:", errorText);
        throw new Error("Failed to obtain Prokerala access token.");
    }

    const data = await response.json();
    return data.access_token;
};

/**
 * Fetches daily horoscope for a given zodiac sign.
 */
export const fetchDailyHoroscopeFromProkerala = async (sign, lang = "or") => {
    const token = await getProkeralaToken();
    const datetime = new Date().toISOString();
    
    // Prokerala v2 Horoscope endpoint
    const apiUrl = `${PROKERALA_API_BASE}/astrology/horoscope/daily?zodiac_sign=${sign}&datetime=${datetime}&la=${lang}`;

    // Using corsproxy.io to bypass origin issues
    const response = await fetch(`https://corsproxy.io/?${encodeURIComponent(apiUrl)}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        const err = await response.json();
        console.error("Prokerala API Error Details:", err);
        throw new Error("Failed to fetch horoscope from Prokerala.");
    }

    const result = await response.json();
    return result.data;
};
