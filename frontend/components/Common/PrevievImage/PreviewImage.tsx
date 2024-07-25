import Image from "next/image";
import { useState } from "react";

type PreviewImageProps = {
  file: File | string; // Allow string as well
};

const PreviewImage: React.FC<PreviewImageProps> = ({ file }) => {
  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);

  if (file instanceof File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreview(reader.result);
    };
  } else if (typeof file === "string") {
    setPreview(file);
  }

  return (
    <div className="flex justify-center">
      {preview && (
        <Image
          src={preview.toString()} // Cast preview to string
          alt="Your Main Image"
          width={200}
          height={150}
        />
      )}
    </div>
  );
};

export default PreviewImage;
