import React, { useState } from "react";

const MorePage =() => {

    const [fontColor, setFontColor] = useState(false)
    const [test, setTest] = useState("d")

    const redHeader = () => {
        setFontColor(false)
    }

    function blackHeader() {
        setFontColor(true)
        setTest("test")
    }

    const callNative = () => {
        try{
            window.webkit?.messageHandlers.callbackHandler.postMessage("MessageBody");
        }catch(err){
            alert(err)
        }
    }

    const swiftHandler = (message) => {
        window.webkit?.messageHandlers.swift.postMessage(message);
    }

    return <>
    <h2 style={{color:`${fontColor ? "red" : "black"}`}}>hi</h2>
    <div className="bottom">
        <button onClick={callNative}>네이티브 함수 호출</button>
        <button onClick={redHeader}>red</button>
        <button onClick={swiftHandler("swift")}>swift</button>
    </div>
    <div>{test === "test" ? test : "none"}</div>
    </>
}

export default MorePage