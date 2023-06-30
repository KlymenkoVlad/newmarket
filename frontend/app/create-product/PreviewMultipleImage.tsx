import Image from "next/image";
import { useState } from "react";

export default function PreviewMultipleImage({ files }) {
  const [previewList, setPreviewList] = useState([]);

  if (files) {
    const readerList = [];
    const previewListTemp = [];

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.readAsDataURL(files[i]);
      reader.onload = () => {
        previewListTemp[i] = reader.result;
        setPreviewList([...previewListTemp]);
      };

      readerList.push(reader);
    }
  }

  return (
    <div className="flex justify-center">
      <div className="flex justify-center md:flex-row flex-col">
        {previewList.map((preview, index) => (
          <Image
            width={120}
            height={50}
            key={index}
            src={preview}
            alt={`Preview ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
