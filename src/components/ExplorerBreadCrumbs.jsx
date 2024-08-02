import { Breadcrumbs, useSelect } from "@material-tailwind/react";
import { currentNodeState } from "../recoil/recoil";
import { findPaths } from "../utils/findPath";
import { useRecoilValue } from "recoil";
import explorer from "../data/FolderData";
import { useEffect, useState } from "react";


const ExplorerBreadCrumbs = () => {
    const [paths, setPaths] = useState([]);
    const currentNode = useRecoilValue(currentNodeState);
    const targetName = "index.html";
    useEffect(()=>{
        const result = findPaths(explorer, targetName);
        const path = result.map((element, idx) => (
            <span key={idx}>
                <a href={`/${element}`} key={idx}>
                    {element}
                </a>
                {/* {idx < path.length - 1 && ' / '} Add a separator */}
            </span>
        ))
        setPaths(path)
    }, [])
    console.log(paths)


    return (
        <Breadcrumbs color="blue">
            {paths}
            <a href="">Explore</a>
        </Breadcrumbs>
    )
}
export default ExplorerBreadCrumbs;