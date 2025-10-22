
import React, { useState, useRef } from 'react';
import Input from '../components/common/Input';
import Label from '../components/common/Label';
import Button from '../components/common/Button';

const ImageResizer: React.FC<{ showToast: (message: string) => void }> = ({ showToast }) => {
    const [image, setImage] = useState<string | null>(null);
    const [originalDims, setOriginalDims] = useState({ w: 0, h: 0 });
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const [resizedImage, setResizedImage] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const img = new Image();
                img.onload = () => {
                    setOriginalDims({ w: img.width, h: img.height });
                    setWidth(String(img.width));
                    setHeight(String(img.height));
                    setImage(event.target?.result as string);
                    setResizedImage(null);
                };
                img.src = event.target?.result as string;
            };
            reader.readAsDataURL(file);
        }
    };
    
    const handleResize = () => {
        if (!image) return;
        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement('canvas');
            const w = parseInt(width, 10);
            const h = parseInt(height, 10);
            if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) {
                showToast('Please enter valid dimensions.');
                return;
            }
            canvas.width = w;
            canvas.height = h;
            const ctx = canvas.getContext('2d');
            ctx?.drawImage(img, 0, 0, w, h);
            setResizedImage(canvas.toDataURL());
        };
        img.src = image;
    };

    return (
        <div className="space-y-4">
            <Input type="file" accept="image/*" onChange={handleFileChange} ref={fileInputRef} />
            {image && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-4">
                         <div>
                            <p className="text-sm text-light-muted dark:text-gray-400">Original: {originalDims.w}x{originalDims.h}</p>
                            <img src={image} alt="Original" className="max-w-full rounded" />
                        </div>
                        <div className="flex items-center gap-2">
                            <Input type="number" placeholder="Width" value={width} onChange={e => setWidth(e.target.value)} />
                            <span>x</span>
                            <Input type="number" placeholder="Height" value={height} onChange={e => setHeight(e.target.value)} />
                        </div>
                        <Button onClick={handleResize}>Resize</Button>
                    </div>
                    <div>
                        {resizedImage ? (
                             <div>
                                <p className="text-sm text-light-muted dark:text-gray-400">Resized: {width}x{height}</p>
                                <img src={resizedImage} alt="Resized" className="max-w-full rounded" />
                                <a href={resizedImage} download="resized-image.png" className="block text-center w-full mt-2 p-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                                    Download Image
                                </a>
                            </div>
                        ) : (
                            <div className="h-full flex items-center justify-center bg-gray-200 dark:bg-gray-900 rounded">
                                <p className="text-light-muted dark:text-gray-400">Resized image will appear here</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageResizer;
