import React, { useState } from "react";
import './JungPage.css'

const JungPage = () => {
    const [title, setTitle] = useState("")

    const onChangeHandler = (e) => {
        setTitle(e.target.value)
    }

    const back = () => {
        try{
            window.webkit?.messageHandlers.callbackHandler.postMessage(true);
        }catch(err){
            alert(err)
        }
    }

    const outLink = (link) => {
        try{
            window.webkit?.messageHandlers.callbackHandler.postMessage(link);
        }catch(err){
            alert(err)
        }
    }


    return <div className="jung">
        <h2>은정님 페이지</h2>

        <form>
            <input type="text" value={title} onChange={onChangeHandler} placeholder="화이팅..!!" />
        </form>
        
        <div>
            <button onClick={back}>Back</button>
            <button onClick={outLink('https://www.cashmore.avatye.com/')}>캐시모아</button>
            <button onClick={outLink('https://www.naver.com/')}>네이버</button>
        </div>
    </div>
}

export default JungPage