import React from "react";
import "../../styles/TechnologyLoadingSkeleton.css"
function TechnologyLoadingSkeleton(){
    return(
        <div className="skeletonTechnology">
            <div className="skeletonTechnology_statement"></div>
            <div className="skeletonTechnology_portraitContainer">
                <div className="skeletonTechnology_portrait"></div>
            </div>
            <div className="skeletonTechnology_nav"></div>
            <div className="skeletonTechnology_info">
                <div className="skeletonTechnology_paragraph"></div>
                <div className="skeletonTechnology_name"></div>
                <div className="skeletonTechnology_copy"></div>
            </div>
        </div>
    )
}
export{TechnologyLoadingSkeleton};