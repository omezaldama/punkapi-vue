import { snakeize, camelize } from 'casing';

function sanitizeQueryParams(params) {
    let sanitizedParams = {};
    for (const key in params) {
        let value = params?.[key]?.toString()?.trim();
        if (value) {
            if (value.match(/\d{4}-\d{2}/)) {
                value = `${value.substring(5, 7)}-${value.substring(0, 4)}`;
            }
            value = value.replaceAll(/\s+/g, '_');
            sanitizedParams[key] = value;
        }
    }
    return sanitizedParams;
}

const RequestsService = {
    get: function(path, queryParams) {
        const sanitizedParams = sanitizeQueryParams(queryParams);
        const camelParams = snakeize(sanitizedParams);
        let url = new URL(path);
        url.search = new URLSearchParams(camelParams).toString();
        return fetch(url)
        .then(resp => resp.json())
        .then(resp => camelize(resp));
    },
}

export default RequestsService;
