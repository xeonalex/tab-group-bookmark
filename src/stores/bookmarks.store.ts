import create from "zustand";
import {produce} from "immer";
import {bookmarkWorker} from "@/helpers/bookmark-worker";

interface BookmarksStore {
    loading: boolean,
    folder?: chrome.bookmarks.BookmarkTreeNode,
    bookmarks?: chrome.bookmarks.BookmarkTreeNode[],
    folderCreated: boolean,
    loadExtensionFolder: () => Promise<void>
}
export const useBookmarksStore = create<BookmarksStore>((set) => ({
    loading: true,
    folder: undefined,
    folderCreated: false,
    loadExtensionFolder: async () => {
        const [folder, created] = await bookmarkWorker.getExtensionFolder()
        const children = await chrome.bookmarks.getChildren(folder.id)

        folder.children = children
        set(produce((s: BookmarksStore) => {
            s.folder = folder
            s.bookmarks = [folder, ...children]
            s.folderCreated = created
            s.loading = false
        }))
    },
}))
