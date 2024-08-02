import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import React, { useState } from 'react'
import explorer from '../data/FolderData'
import useTraverseTree from '../hooks/use-traverse-tree'
import Folder from '../components/Folder'
 
const FolderTree = () => {
  const [open, setOpen] = React.useState(false);
 
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const [explorerData, setExplorerData] = useState(explorer)
  
  const {insertNode} = useTraverseTree();

  const handleInsertNode = (folderId,item,isFolder)=>{
      const finalTree = insertNode(explorerData,folderId,item,isFolder);
      setExplorerData(finalTree);
  }
 
  return (
    <React.Fragment>
      <Button onClick={openDrawer}>Folder Tree</Button>
      <Drawer open={open} onClose={closeDrawer} className="p-4">
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Material Tailwind
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div className='explorer'>
        <div className="sidebar">
            <Folder handleInsertNode={handleInsertNode} explorer={explorerData} /> 
        </div>
    </div>
      </Drawer>
    </React.Fragment>
  );
}

export default FolderTree;