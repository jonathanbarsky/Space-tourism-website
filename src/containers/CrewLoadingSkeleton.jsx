import React from "react";
import "../../styles/CrewLoadingSkeleton.css"

function CrewLoadingSkeleton(){
    return(
        <div className="skeletonCrew">
            <div className="skeletonCrew_statement"></div>
            <div className="skeletonCrew_portraitContainer">
                <div className="skeletonCrew_portrait-head"></div>
                <div className="skeletonCrew_portrait-body"></div>
            </div>
            <div className="skeletonCrew_nav"></div>
            <div className="skeletonCrew_info">
                <div className="skeletonCrew_rank"></div>
                <div className="skeletonCrew_name"></div>
                <div className="skeletonCrew_copy"></div>
            </div>
        </div>
    )
}
export{ CrewLoadingSkeleton };