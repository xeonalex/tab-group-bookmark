import React from "react";
import styles from '@/styles/pages/DefaultPopup.module.scss'
import classNames from "classnames";
import {BookmarksStructure} from "@/components/BookmarksStructure/BookmarksStructure";
import {TabGroups} from "@/components/TabGroups/TabGroups";
import {Col, Row} from "antd";

export default function DefaultPopup() {
    return (
        <Row>
            <Col span={12}>
                <TabGroups />
            </Col>
            <Col span={12}>
                <BookmarksStructure />
            </Col>
        </Row>
    )
}
