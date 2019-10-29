

/**
 * json转为url地址
 * @param path
 * @param json
 */
let convertToUrl = (path: string, json: object): string => {
    const param = new Array(0);
    for (let key in json) {
        param.push(key + "=" + encodeURIComponent(json[key]));
    }
    if (param.length > 0) {
        return (
            path +
            (path.indexOf("?") > 0
                ? "&" + param.join("&")
                : "?" + param.join("&"))
        );
    }
    return path;
};
export default {
    convertToUrl
};
