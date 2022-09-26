import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import style from './style';



const CheckBox = ({ options = [], onChange, multiple = false }) => {
    const [selected, setSelected] = useState([])

    

    function toogle(id) {
        let index = selected.findIndex(
            (i) => i === id
        );
        let arrSelecteds = [...selected]

        if (index !== -1) {
            arrSelecteds.splice(index, 1);
        } else {
            multiple ? arrSelecteds.push(id) : (arrSelecteds = [id]);
        }

        setSelected(arrSelecteds)
    }

    useEffect(() => onChange(selected), [selected]);
    
    return (
        <View style={style.container}>
            {options.map((op, index) => (
                <View style={style.optContainer}>
                    <TouchableOpacity
                        style={style.outlineCircle}
                        onPress={
                            () => toogle(op?.id)
                        }>

                        {
                        selected.findIndex
                            (i => i === op.id) !== -1 ? (<View style={style.innerCircle}></View>) : null
                        }
                        
                    </TouchableOpacity>
                    <Text style={style.txtOption}> {op?.text}</Text>
                </View>
            ))}
        </View>
    )
}
export default CheckBox