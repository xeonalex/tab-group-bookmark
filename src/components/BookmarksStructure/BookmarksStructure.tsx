import React, {useEffect} from 'react';
import {useBookmarksStore} from "@/stores/bookmarks.store";
import {defaultFolderName} from "@/helpers/bookmark-worker";

import Alert from 'antd/es/alert';
import Empty from 'antd/es/empty';
import Spin from 'antd/es/spin';
import Tree from 'antd/es/tree';
import Typography from 'antd/es/typography';

const { Title } = Typography;

export const BookmarksStructure = () => {
    const loading = useBookmarksStore((s) => s.loading)
    const folderCreated = useBookmarksStore((s) => s.folderCreated)
    const tree = useBookmarksStore((s): any => s.folder ? [s.folder] : [])
    const childBookmarks = useBookmarksStore((s) => s.folder?.children || [])
    const loadExtensionFolder = useBookmarksStore((s) => s.loadExtensionFolder)

    useEffect(() => {
        loadExtensionFolder()
    }, [])

    if (loading) return <Spin spinning/>

    return (
        <div>
            <Title level={5}>Extension bookmarks</Title>
            {folderCreated && (
                <Alert
                    message={`Extension folder ${defaultFolderName} - created`}
                    type="success"
                    showIcon
                    closable
                />
            )}
            {childBookmarks.length === 0
                ? <Empty description={'No groups were exported to bookmarks'} />
                : (
                    <Tree
                        showLine={true}
                        defaultExpandParent={true}
                        fieldNames={{
                            key: 'id'
                        }}
                        treeData={tree}
                    />
                )
            }
        </div>
    );
};
