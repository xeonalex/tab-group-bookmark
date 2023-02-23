import React, {useEffect, useMemo, useState} from "react";

export default function DefaultPopup() {
    const [tabGroups, setTabGroups] = useState<chrome.tabGroups.TabGroup[]>([])

    useEffect(() => {
        (async () => {
            setTabGroups(await chrome.tabGroups.query({}))
        })()
    }, [])

    return (
        <>
            {tabGroups.map((t) => t.title)}
        </>
    )
}
