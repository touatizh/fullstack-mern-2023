import React, {useState} from 'react'
import "./Tabs.css"

const Tabs = ({setOfTabs}) => {

    const [activeInd, setActiveInd] = useState(0)
    const [clickedTab, setClickedTab] = useState("")
    const [showContent, setShowContent] = useState(true)

    const handleClick = (index, callback) => {
        setShowContent(false)

        setTimeout(() => {
            setActiveInd(index)
            setShowContent(true)
            if (callback) {
            setClickedTab(callback())
        }
        }, 500)
    }
    return (
        <>
            <div className="tabs">
                {setOfTabs.map((tab, index) => (
                    <button
                    key={index}
                    className={activeInd === index ? "tab active" : "tab"}
                    onClick={ () => handleClick(index, tab.callback)}
                    >
                        {tab.label}
                    </button>
                ))
                }
            </div>
            
            {
                setOfTabs[activeInd].content ?
                <div className={`content ${showContent ? "show" : ""}`}>
                    {setOfTabs[activeInd].content} <br />
                    {setOfTabs[activeInd].callback ? clickedTab:""}
                </div>
                : "No content to show"
            }
        </>
    )
}

export default Tabs