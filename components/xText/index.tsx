import Taro,{ Component } from '@tarojs/taro'
import { Text } from '@tarojs/components'
import './index.css'
import { ITouchEvent } from "@tarojs/components/types/common";

interface IProps {
    className?: string
    onClick?: (event: ITouchEvent) => any
    numberOfLines?: number
}

export default class XText extends Component<IProps,{}> {
    constructor() {
        super();
    }

    static options = {
        addGlobalClass: true
    };
    static defaultProps = {
        onClick: () => {
        }
    };

    onClick(e: any) {
        if (this.props.onClick) {
            this.props.onClick(e);
            e.stopPropagation && e.stopPropagation();
        }

    }

    render() {
        let className: string | undefined,numberOfLines: number | undefined;

        ({ className,numberOfLines } = this.props);
        let margeStyle: string = "";

        if (numberOfLines) {
            margeStyle += "-webkit-line-clamp:" + numberOfLines + ";";
            margeStyle += "overflow:hidden;";
            margeStyle += "-webkit-box-orient:vertical;";
            margeStyle += "display:-webkit-box;";
            margeStyle += "text-overflow:ellipsis;";
        }
        return <Text className={className} style={margeStyle}
                     onClick={this.onClick.bind(this)}>{this.props.children}</Text>
    }
}
