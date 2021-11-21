/*const converterPromise = new Promise((resolve, reject) => {
        if (arr.every(item => typeof item === String)) {
            resolve(arr.map((item) => item.toLocaleUpparCase()))
        } else {
            reject(Error('Not all elements are string type!'))
        }
    }
    )
;*/

const converterPromise = (arr) => { 
    return new Promise((resolve, reject) => {
    if (arr.every(item => typeof item === 'string')) {
        resolve(arr.map(item => item.toLocaleUpperCase()))
    } else {
        reject('Error: Not all elements are string type!')
    }
}
)};




// export default converterPromise;
export default converterPromise;