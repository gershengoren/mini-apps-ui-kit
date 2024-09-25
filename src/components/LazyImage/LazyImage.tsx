import React, { useState } from 'react';

export const LazyImage = ({
    src,
    placeholder,
    alt,
    height,
}: {
    src: string;
    placeholder: string;
    alt: string;
    height: number;
}) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    return (
        <React.Fragment>
            <img
                src={placeholder}
                alt={alt}
                style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: height,
                    display: !isImageLoaded ? 'block' : 'none',
                }}
            />
            <img
                src={src}
                alt={alt}
                style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: height,
                    display: isImageLoaded ? 'block' : 'none',
                }}
                onLoad={() => {
                    setIsImageLoaded(true);
                }}
            />
        </React.Fragment>
    );
};
