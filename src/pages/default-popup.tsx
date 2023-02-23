import React, {useEffect, useMemo, useState} from "react";
import styles from '@/styles/pages/DefaultPopup.module.scss'
import classNames from "classnames";
import {Spin, Tag} from "antd";

export default function DefaultPopup() {
    const [tabGroups, setTabGroups] = useState<chrome.tabGroups.TabGroup[]>([])
    const [loader, setLoader] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    useEffect(() => {
        (async () => {
            try {
                setLoader(true)
                setTabGroups(await chrome.tabGroups.query({}))
                setLoader(false)
            } catch (e) {
                setError(true)
            }
        })()
    }, [])

    return (
        <div className={classNames(styles.container, 'p-m')}>
            {loader ? (
                <Spin spinning/>
            ) : (
                <>
                    <div>Tab groups: </div>
                    {error && 'Error'}
                    {tabGroups.length === 0 && 'empty'}
                    {tabGroups.map((t) => <Tag color={t.color} key={t.id}>{t.title}</Tag>)}
                </>
            )}

        </div>
    )
}
