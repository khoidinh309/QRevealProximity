import { Text, TextStyle } from 'react-native'
import React from 'react'
import { StyleProp } from 'react-native';
interface Props {
    children?:
    | JSX.Element
    | JSX.Element[]
    | string
    | number
    | string[];
    style?: StyleProp<TextStyle>;
    request?: boolean
}

export default function AppText(props: Props) {
    const { children, style, request } = props
    const themes = 'default'
    return (
        <Text allowFontScaling={false} style={style}>{children}{request && <Text allowFontScaling={false} style={[{ color: '#F96472' }]}>*</Text>}</Text>
    )
}