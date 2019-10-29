import Taro,{ Component } from '@tarojs/taro'
import { Text } from 'react-native'
import './index.css'
import { ITouchEvent } from "@tarojs/components/types/common";

interface IProps {
    className?: string
    onClick?: (event: ITouchEvent) => any
    numberOfLines?: number
    style?: any
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
        const { numberOfLines } = this.props;

        return <Text numberOfLines={numberOfLines} style={this.props["style"]} >{this.props.children}</Text>
    }
}
