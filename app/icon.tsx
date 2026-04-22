import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 512, height: 512 };
export const contentType = 'image/png';

export default function Icon() {
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
                        fontSize: 240,
                        fontWeight: 800,
                        color: '#00a3bf',
                        backgroundColor: 'white',
                        width: 380,
                        height: 380,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '50%',
                        letterSpacing: '-12px',
                    }}
                >
                    BR
                </div>
            </div>
        ),
        { ...size }
    );
}
