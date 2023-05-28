export const defaultFolderName = '__tab-transfer-extenstion'
class BookmarkWorker {
    async getExtensionFolder(): Promise<[folder: chrome.bookmarks.BookmarkTreeNode, created: boolean]> {
        const [folder] = await chrome.bookmarks.search({ title: defaultFolderName })

        if (folder) return [ folder, false ]

        return [ await chrome.bookmarks.create({ title: defaultFolderName }), true ]
    }
}

export const bookmarkWorker = new BookmarkWorker()
