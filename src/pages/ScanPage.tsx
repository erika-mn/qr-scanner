import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserQRCodeReader } from '@zxing/browser';
import type { IScannerControls } from '@zxing/browser';
import { CornerFrame } from '../components/CornerFrame';

const ScanPage: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const controlsRef = useRef<IScannerControls | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const codeReader = new BrowserQRCodeReader();

        if (videoRef.current) {
            codeReader
                .decodeFromVideoDevice(
                    undefined,
                    videoRef.current,
                    (result, err, controls) => {
                        if (result) {
                            const qrText = result.getText();
                            console.log('QR Result:', qrText);

                            try {
                                const url = new URL(qrText);
                                const pageParam = url.searchParams.get('page');

                                if (pageParam === 'gauge') {
                                    navigate('/gauge');
                                } else if (pageParam === 'landing') {
                                    navigate('/landing');
                                } else {
                                    alert(
                                        'QR code has no valid page parameter.'
                                    );
                                }
                            } catch (e) {
                                console.error('Invalid QR code URL:', e);
                                alert('Scanned QR code is not a valid URL.');
                            }

                            controls?.stop();
                        }

                        if (err) {
                            console.warn('ZXing error:', err);
                        }

                        controlsRef.current = controls;
                    }
                )
                .catch((err) => console.error('Failed to start decode', err));
        }

        return () => {
            controlsRef.current?.stop();
        };
    }, [navigate]);

    return (
        <div className='flex flex-col w-full h-screen'>
            <h1 className='bg-blue-600 text-white font-semibold text-lg p-7'>
                Scan QR
            </h1>
            <video
                ref={videoRef}
                style={{
                    width: '100%',
                    height: 'calc(100vh - 60px)',
                    objectFit: 'cover',
                }}
                playsInline
                autoPlay
                muted
            />
            <CornerFrame />
        </div>
    );
};

export default ScanPage;
