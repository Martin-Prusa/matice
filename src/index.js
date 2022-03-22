import {Matrix} from "./Matrix";

window.onload = () => {
    //let m = new Matrix([[1, 2, 3],[4, 5, 6], [7, 8, 9]])
    //let m2 = new Matrix([[4, 2, 8],[10, 12, 4], [4, 5, 9]])

    //console.log(m.times(m2))

    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')

    let m = new Matrix([
        [1, -0.5, 0],
        [0.5, 1, 0],
        [0, 0, 1]
    ])

    let v = new Matrix([
        [1],
        [1],
        [1]
    ])

    let res = m.times(v)
    console.log(m.times(res))

    for (let i = 0; i < 400; i++) {
        res = m.times(res)
        ctx.beginPath()
        ctx.arc(res.matrix[0][0]+200,res.matrix[1][0]+200, 4, 0, 2 * Math.PI)
        ctx.stroke()
    }






}

const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}