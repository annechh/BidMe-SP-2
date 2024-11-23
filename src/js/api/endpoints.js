export const API_KEY = '7166711d-5e4e-46d3-8962-1865ce75a3e2';

export const API_BASE = 'https://v2.api.noroff.dev';

//

export const API_AUTH = `${API_BASE}/auth`;

export const API_LOGIN = `${API_AUTH}/login`;

export const API_REGISTER = `${API_AUTH}/register`;

//

export const API_LISTINGS = `${API_BASE}/auction/listings`;

export const API_LISTINGS_ID = `${API_BASE}/auction/listings/{id}`;

export const API_LISTINGS_SEARCH = `${API_BASE}/auction/listings/search`;

export const API_LISTINGS_ID_BIDS = `${API_BASE}/auction/listings/{id}/bids`;

//

export const API_PROFILES = `${API_BASE}/auction/profiles`;

export const API_PROFILES_NAME = `${API_BASE}/auction/profiles/{name}`;

export const API_PROFILES_SEARCH = `${API_BASE}/auction/profiles/search`;

export const API_PROFILES_NAME_LISTINGS = `${API_BASE}/auction/profiles/{name}/listings`;

export const API_PROFILES_NAME_BIDS = `${API_BASE}/auction/profiles/{name}/bids`;

export const API_PROFILES_NAME_WINS = `${API_BASE}/auction/profiles/{name}/wins`;

export const API_PROFILES_NAME_CREDITS = `${API_BASE}/auction/profiles/{name}/credits`;
