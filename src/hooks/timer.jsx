import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'

// 制限時間
const LIMIT = 15
// 時間関数
export default function Timer() {
    // useState[引数、関数] ＝ 初期値
    const [timer, setTime] = useState(LIMIT)

    const reset = () => {
        // 時間ステートを初期値まで戻す
        setTime(LIMIT)
    }

    const tick = () => {
        console.log('tick')
        setTime((T) => (T === 0 ? LIMIT : T - 1))
    }
    
    useEffect(() => {
        console.log('clear')
        const timeId = setInterval(tick, 1000)
        return () => {
            console.log('cleaNUP')
            clearInterval(timeId)
        }
    }, [])

    return(
        <>
        <p>Time :{timer}</p>
        <Button onClick={reset}>Reset</Button>
        </>
    )
    // // 時間timeLeft(値)を更新
    // const tick = () => {
    //     // 無名関数 tickの宣言
    //     console.log('tick') // デバッグ
    //     // setTimeLeft関数（仮引数）三項演算子 引数の比較 xxx以下になれば、LIMIT - 1
    //     setTimeLeft((prevTime) => (prevTime <= 1 ? LIMIT : prevTime - 1))
    // }
    // // useEffect
    // useEffect(() => {
    //     // 時間IDの宣言 ＝ インターバル関数(時間更新変数, 0.5秒)
    //     const timerId = setInterval(tick, 500)
    //     return () => {
    //         // 副作用の解除
    //         clearInterval(timerId)
    //     }
    // }, [])

    // return (
    //     <div>
    //         <p>time: {timeLeft}</p>
    //         <Button variant='outline-primary' onClick={reset}>
    //             Reset
    //         </Button>
    //     </div>
    // )
}
