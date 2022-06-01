
const initState = 0
export default function countReducer(preState=initState,action){
    // 解构赋值，从action对象中获取元素type和data
    const {type,data} = action
    switch (type) {
        case 'increment':
            return preState + data
        case 'decrement':
            return preState - data
        default:
            return preState
    }
}