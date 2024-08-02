import { useState } from "react";
import ExplorerBreadCrumbs from "../components/ExplorerBreadCrumbs"
import FolderTree from "../components/FolderTree"
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";


const Explorer = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);


    return (
        <div className="h-screen  flex gap-5">
            <div className="sidebar w-[25%] border-r-2 h-full p-[2rem]">
                <FolderTree />
            </div>
            <div className="explorer-main w-full p-[2rem]">
                <div className="explorer-main-top flex justify-between w-full">
                    <ExplorerBreadCrumbs />
                    <div className="explorer-add-new flex gap-3">
                        <Button onClick={handleOpen}>Add File</Button>
                        <Button onClick={handleOpen}>Add Folder</Button>
                        <Dialog open={open} size="xs" handler={handleOpen}>
                            <form action="">
                                <DialogBody>
                                    <div className="max-w-2xl mx-auto">
                                        <label
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                            htmlFor="file_input"
                                        >
                                            Upload file
                                        </label>
                                        <input
                                            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                            id="file_input"
                                            type="file"
                                            // onChange={handleImageChange}
                                        />
                                    </div>
                                </DialogBody>
                                <DialogFooter className="flex gap-[1rem]">
                                    <Button type="submit">Upload</Button>
                                    <Button
                                        color="red"
                                        variant="outlined"
                                        onClick={handleUploadOpen}
                                    >
                                        Cancel
                                    </Button>
                                </DialogFooter>
                            </form>
                        </Dialog>
                    </div>
                </div>
                <div className="explorer-main-content">

                </div>
            </div>
        </div>
    )
}

export default Explorer