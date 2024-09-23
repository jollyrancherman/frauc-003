'use client';

import { Camera } from 'lucide-react';
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import FileUploadThumb, { ThumbFile } from './FileUploadThumb';

const dropzoneOptions = {
  accept: {
    'image/*': [],
  },
};

export default function FileUpload() {
  const [files, setFiles] = useState<ThumbFile[]>([]);
  const [count, setCount] = useState(0);
  const { getRootProps, getInputProps } = useDropzone({
    ...dropzoneOptions,
    onDrop: (acceptedFiles) => {
      const newFiles = acceptedFiles.map((file) => ({
        ...file,
        preview: URL.createObjectURL(file),
        id: crypto.randomUUID(),
      }));

      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
      setCount((prevCount) => prevCount + newFiles.length);
      console.log({ files: [...files, ...newFiles] });
    },
  });

  const handleRemovePhoto = (id: string) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.id !== id));
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <section className='container'>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <div className='flex flex-col items-center justify-center pt-4'>
          <div className='border-dashed border-2 border-gray-200  flex flex-col items-center justify-center p-8 aspect-video rounded-sm bg-gray-100 mb-1'>
            <Camera className='h-6 w-6' />
            <p>Add photos</p>
          </div>
          <div className='text-sm text-gray-700'>Photos: {count}/8</div>
        </div>
      </div>
      <FileUploadThumb files={files} removePhoto={handleRemovePhoto} />
    </section>
  );
}
