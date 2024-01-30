import React, {useEffect, useState} from 'react';
import {useBookmarksStore} from "@/stores/bookmarks.store";
import Spin from 'antd/es/spin';
import Tag from 'antd/es/tag';
import Typography from "antd/es/typography";

const { Title, Text } = Typography;

export const TabGroups = () => {
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

    if (loader) return <Spin spinning/>

    return (
        <>
            <Title level={5}>Tab groups</Title>
            {error && 'Error'}
            {tabGroups.length === 0 && 'empty'}
            {tabGroups.map((t) => (
                <div key={t.id}>
                    <Tag color={t.color} ><Text color={'black'}>{t.title}</Text></Tag>
                </div>
            ))}
        </>
    );
};
