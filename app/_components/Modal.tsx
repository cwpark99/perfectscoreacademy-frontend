'use client';

import { CSSProperties, ReactNode, useState } from 'react';

export default function Modal({
    className,
    style,
    children,
    button,
}: {
    className?: string;
    style?: CSSProperties;
    children: ReactNode;
    button: ReactNode;
}) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <>
            <button
                className={className}
                style={style}
                onClick={() => setIsExpanded(true)}
            >
                {button}
            </button>
            {isExpanded ? (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        height: '100vh',
                        width: '100vw',

                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',

                        background: 'rgb(50, 50, 50, 0.7)',

                        cursor: 'pointer',
                        zIndex: 100,
                    }}
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsExpanded(false);
                    }}
                    onScroll={(e) => {
                        e.stopPropagation();
                    }}
                >
                    <div
                        style={{
                            cursor: 'default',
                            height: '500px',
                            width: '500px',
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {children}
                    </div>
                </div>
            ) : null}
        </>
    );
}
