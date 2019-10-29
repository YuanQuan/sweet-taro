import { MouseEvent,ComponentClass } from 'react'
import { ITouchEvent } from "@tarojs/components/types/common";

import StComponent from './base'

export interface StTextProps extends StComponent {


    className?: string

    numberOfLines?: boolean

    onClick?: (event: ITouchEvent) => any

}

declare const StText: ComponentClass<StTextProps>;

export default StText
