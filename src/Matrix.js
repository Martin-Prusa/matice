export class Matrix {
    matrix

    constructor(m) {
        this.matrix = m
    }

    times(matrix2) {
        if(this.matrix[0].length !== matrix2.matrix.length ) throw Error("E")

        let result = new Matrix([])

        for (let i = 0; i < this.matrix.length; i++) {
            result.matrix.push(new Array(matrix2.matrix[0].length).fill(0))
        }

        for (let i = 0; i < result.matrix.length; i++) {
            for (let j = 0; j < matrix2.matrix[0].length; j++) {
                result.matrix[i][j] = 0
                for (let k = 0; k < matrix2.matrix.length; k++) {
                    result.matrix[i][j] += (this.matrix[i][k] * matrix2.matrix[k][j])
                }
            }
        }

        return result
    }
}

