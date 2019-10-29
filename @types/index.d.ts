import { PureComponent } from "react";
// export { default as XPage } from "./page";
// export { default as XPageStatusBar } from "./xPage/xPageStatusBar/index";
// export { default as XScrollView } from "./xScrollView/index";
// export { default as XButton } from "./xButton/index";
// export { default as XVideo } from "./xVideo/index";
// export { default as XImage } from "./xImage/index";
// export { default as XView } from "./xView/index";


export { default as XText } from "./text";
// export { default as XToast } from "./xToast/index";
// export { default as XWebView } from "./xWebView/index";
// export { default as XImageBackground } from "./xImageBackground/index";
// export { default as XOfficialAccount } from "./xOfficialAccount/index";
// export { default as XLoading } from "./xLoading/index";
// export { default as XGoldBtn } from "./xGoldBtn/index";
// export { default as XAuth } from "./xAuth/index";
// export { default as NewGoldBox } from "./newGoldBox/index";


export = SweetTaro
export as namespace SweetTaro
declare namespace SweetTaro {
    function convertToUrl(path: string,json: object): string  ;

    class XComponent<P = {}, S = {}> extends PureComponent<P, S> {}
}