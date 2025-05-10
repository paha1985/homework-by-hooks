"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFetch = void 0;
const react_1 = require("react");
const paramsFromObj = (obj) => {
    const params = [];
    for (const key in obj) {
        params.push(`${key}=${encodeURIComponent(String(obj[key]))}`);
    }
    const queryString = params.join("&");
    return queryString;
};
const useFetch = (url) => {
    const [data, setData] = (0, react_1.useState)(null);
    const [isLoading, setIsLoading] = (0, react_1.useState)(true);
    const [error, setError] = (0, react_1.useState)(null);
    const [fetchOptions, setFetchOptions] = (0, react_1.useState)({});
    const fetchData = (0, react_1.useCallback)(() => __awaiter(void 0, void 0, void 0, function* () {
        setError(null);
        setIsLoading(true);
        try {
            const urlWithParams = fetchOptions.params
                ? `${url}?${paramsFromObj(fetchOptions.params)}`
                : url;
            const response = yield fetch(urlWithParams);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = yield response.json();
            setData(result);
        }
        catch (e) {
            setError(e instanceof Error ? e : new Error(String(e)));
        }
        finally {
            setIsLoading(false);
        }
    }), [url, fetchOptions]);
    (0, react_1.useEffect)(() => {
        fetchData();
    }, [fetchData]);
    const refetch = (0, react_1.useCallback)((options) => {
        setFetchOptions(options || {});
    }, []);
    return { data, isLoading, error, refetch };
};
exports.useFetch = useFetch;
