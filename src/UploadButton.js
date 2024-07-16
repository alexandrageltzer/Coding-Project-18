import React, { useState } from 'react';

const UploadButton = () => {
  const [uploading, setUploading] = useState(false);

  const handleUpload = () => {
    setUploading(true);
    alert('Uploading image...');

    // upload process with a timeout
    setTimeout(() => {
      setUploading(false);
      alert('Image uploaded successfully!');
    }, 2000); // 2-second upload time
  };

  return (
    <button onClick={handleUpload} disabled={uploading}>
      {uploading ? 'Uploading...' : 'Upload Image'}
    </button>
  );
};

export default UploadButton;
