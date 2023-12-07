import {
    data,
    test1,
    test2
} from './modules/01.mjs';

function fun(txt) {
    const lines = txt.trim().split('\n');

    const values = lines.map((line) => {
        const first = line.split('').find((v) => !Number.isNaN(Number(v)));
        const last = line.split('').findLast((v) => !Number.isNaN(Number(v)));
        return Number(first + last);
    });
    return values.reduce((s, v) => s + v);
}

fun(test1)