import Image from "next/image";
import { useState } from "react";

export default function PreviewImage({ file }) {
  const [preview, setPreview] = useState({});

  if (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreview(reader.result);
    };
  }

  return (
    <div className="flex justify-center ">
      <Image src={preview} alt="Your Main Image" width={200} height={150} />
    </div>
  );
}
