import styles from '@/styles/pages/DefaultPopup.module.scss'
import {Row, Col} from "antd/es/grid";
import {BookmarksStructure} from "@/components/BookmarksStructure/BookmarksStructure";
import {TabGroups} from "@/components/TabGroups/TabGroups";

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
