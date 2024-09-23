'use client';

import { X } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export type ThumbFile = File & {
  preview: string;
  id: string;
};

type FileUploadThumbProps = {
  files: ThumbFile[];
  removePhoto: (id: string) => void;
};

const FileUploadThumb = ({ files, removePhoto }: FileUploadThumbProps) => {
  const [primary, setPrimary] = useState<ThumbFile | null>(null);

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () =>
      files.forEach((file) => URL.revokeObjectURL(file.preview || ''));
  }, [files]);

  useEffect(() => {
    if (files.length === 0) {
      setPrimary(null);
    } else if (!files.some((file) => file.id === primary?.id)) {
      setPrimary(files[0]);
    }
  }, [files, primary]);

  return (
    <aside className='grid grid-cols-4 gap-1'>
      {files.map((file) => (
        <div
          onClick={() => setPrimary(file)}
          className={`aspect-square bg-red-300 relative border-sky-500 ${
            primary?.id === file.id ? 'border-4' : 'border-0'
          }`}
          key={file.id}
        >
          <Image
            alt='Preview'
            src={file.preview || ''}
            className='object-cover w-full h-full'
            // Revoke data uri after image is loaded
            onLoad={() => {
              URL.revokeObjectURL(file.preview || '');
            }}
          />
          <div
            onClick={() => removePhoto(file.id)}
            className='absolute h-6 w-6 flex justify-center m-1 items-center top-0 right-0 bg-white/60  rounded-full'
          >
            <X className='h-5 w-5' />
          </div>
          {primary?.id === file.id && (
            <div className='absolute bottom-0 text-xs bg-sky-500 text-white font-bold'>
              Primary
            </div>
          )}
        </div>
      ))}
    </aside>
  );
};
export default FileUploadThumb;
