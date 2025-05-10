"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const use_fetch_js_1 = require("../hooks/use-fetch.js");
function TaskUseFecth() {
    const { data, isLoading, error, refetch } = (0, use_fetch_js_1.useFetch)("https://jsonplaceholder.typicode.com/posts");
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("button", { onClick: () => refetch({
                        params: {
                            _limit: 3,
                        },
                    }), children: "\u041F\u0435\u0440\u0435\u0437\u0430\u043F\u0440\u043E\u0441\u0438\u0442\u044C" }) }), isLoading && "Загрузка...", error && "Произошла ошибка", data &&
                !isLoading &&
                data.map((item) => (0, jsx_runtime_1.jsx)("div", { children: item.title }, item.id))] }));
}
exports.default = TaskUseFecth;
