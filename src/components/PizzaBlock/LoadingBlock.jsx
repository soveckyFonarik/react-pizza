import React from 'react'
import ContentLoader from "react-content-loader"

function LoadingBlock() {
    return (
        <ContentLoader
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="140" cy="140" r="140" />
            <rect x="0" y="297" rx="0" ry="0" width="280" height="31" />
            <rect x="0" y="350" rx="0" ry="0" width="138" height="45" />
            <rect x="139" y="350" rx="0" ry="0" width="138" height="45" />
            <rect x="0" y="400" rx="0" ry="0" width="92" height="45" />
            <rect x="93" y="400" rx="0" ry="0" width="92" height="45" />
            <rect x="186" y="400" rx="0" ry="0" width="92" height="45" />
        </ContentLoader>
    )
}

export default LoadingBlock
