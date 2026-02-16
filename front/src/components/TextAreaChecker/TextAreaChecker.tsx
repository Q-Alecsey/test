
import styles from './TextAreaChecker.module.scss';

import { type FieldError } from "react-hook-form";
import { type ComponentProps, useRef, useState } from "react";

interface TextAreaProps extends ComponentProps<'textarea'> {
    labelText: string;
    placeholderText: string;
    error?: FieldError;
    svgType: 'doc' | 'human' | 'key';
    borderActive?: boolean;
}

interface AttachedPhoto {
    url: string;
    name: string;
}

export const TextAreaChecker = ({ labelText, placeholderText, error, svgType, borderActive, ...rest }: TextAreaProps) => {

    const fileInputRef = useRef<HTMLInputElement>(null);
    const [photos, setPhotos] = useState<AttachedPhoto[]>([]);

    const handleAttachClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setPhotos(prev => [...prev, { url, name: file.name }]);
        }
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleRemovePhoto = (index: number) => {
        setPhotos(prev => {
            URL.revokeObjectURL(prev[index].url);
            return prev.filter((_, i) => i !== index);
        });
    };

    return (
        <div className={styles.fieldGroup}>
            <label className={styles.label}>
                {svgType === 'doc' && documentSVG()}
                {svgType === 'key' && keySVG()}
                {svgType === 'human' && humanSVG()}
                {labelText}
            </label>
            <textarea
                className={clsx(styles.textarea, borderActive && styles.activeBorder)}
                placeholder={placeholderText}
                rows={4}
                {...rest}
            />

            <div className={styles.attachRow}>
                <button
                    type="button"
                    className={styles.attachButton}
                    onClick={handleAttachClick}
                    title="Прикрепить фото"
                >
                    {attachPhotoSVG()}
                    <span className={styles.attachText}>Прикрепить фото</span>
                </button>

                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className={styles.hiddenInput}
                    onChange={handleFileChange}
                />
            </div>

            {photos.length > 0 && (
                <div className={styles.previewGallery}>
                    {photos.map((photo, index) => (
                        <div key={photo.url} className={styles.previewWrapper}>
                            <img src={photo.url} alt={photo.name} className={styles.previewImage} />
                            <button
                                type="button"
                                className={styles.removeButton}
                                onClick={() => handleRemovePhoto(index)}
                                title="Удалить фото"
                            >
                                ×
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {error && <span className={styles.error}>{error.message}</span>}
        </div>
    );
};

export default TextAreaChecker;

const attachPhotoSVG = () => (
    <svg className={styles.attachIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
    </svg>
);

const documentSVG = () => {
    return (
        <svg className={styles.labelIcon} viewBox="0 0 24 24" fill="currentColor">
            <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
        </svg>
    )
}

const keySVG = () => {
    return (
        <svg className={styles.labelIcon} viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 10h-8.35C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H13l2 2 2-2 2 2 4-4.04L21 10zM7 15c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z" />
        </svg>
    )
}

const humanSVG = () => {
    return (
        <svg className={styles.labelIcon} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
    )
}
