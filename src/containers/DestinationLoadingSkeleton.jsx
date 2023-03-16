import React from "react";
import "../../styles/DestinationLoadingSkeletons.css"

function PlanetLoadingSkeleton(){
    return(
        <div className="skeleton">
            <div className="skeleton_statement"></div>
            <div className="skeleton_body">
                <div className="skeleton_container-planet">
                    <div className="skeleton_planet"></div>   
                </div>
                <div className="skeleton_info">
                    <p className="skeleton_nav"></p>
                    <p className="skeleton_name"></p>
                    <p className="skeleton_copy"></p>
                    <div className="skeleton_travel">
                        <p className="skeleton_travel-distance"></p>
                        <p className="skeleton_travel-time"></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export {PlanetLoadingSkeleton};