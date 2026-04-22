import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#001e3d',
                }}
            >
                <div
                    style={{
                        fontSize: 85,
                        fontWeight: 800,
                        color: '#00a3bf',
                        backgroundColor: 'white',
                        width: 135,
                        height: 135,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '50%',
                        letterSpacing: '-4px',
                    }}
                >
                    BR
                </div>
            </div>
        ),
        { ...size }
    );
}
