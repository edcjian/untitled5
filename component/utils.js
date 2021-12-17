import request from "../request";

export const fetch = (url, params) => request.get(url, {
    params: params
})
