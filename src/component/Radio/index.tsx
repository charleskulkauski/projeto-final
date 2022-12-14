//Button Radio, estilo em si
import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import style from "./style";

const Radio = ({
    options = [],
    horizontal = false,
    onChangeSelect,
    selected

}) => {

    return (
        <View style={horizontal ? style.horizontal : style.vertical}>
            {
                options.map((opt, index) => (
                    <TouchableOpacity
                        onPress={
                            //Arrow function
                            () => onChangeSelect(opt, index)
                        }
                        //Referência do estilo aplicado no style.tsx e importado pra cá
                        style={[style.optContainer, {marginLeft: horizontal ? 50 : 35, marginBottom: horizontal ? 0 : 12}]}
                    >

                        <View
                        //Circula de fora envolve o circulo selecionado de dentro
                            style={style.outlineCircle}
                        >
                            {selected == index && <View style={style.innerCircle} />}
                        </View>

                        <Text style={[style.txtOption, { color: selected == index ? '#6C63FF' : '#000' }]}>
                            {opt}
                        </Text>

                    </TouchableOpacity>
                ))
            }
            <Text>

            </Text>
        </View>

    )
}

export default Radio;