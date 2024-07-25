import Image from "next/image";
import { useEffect, useState } from "react";
import { arrayBuffer } from "stream/consumers";

export default function PreviewMultipleImage({ files }: { files: FileList }) {
  const [previewList, setPreviewList] = useState<string[]>([]);

  useEffect(() => {
    if (files) {
      setPreviewList([]);
      const readerList = [];
      const previewListTemp: string[] = [];

      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.readAsDataURL(files[i]);
        reader.onload = () => {
          previewListTemp[i] = reader.result as string;

          if (typeof previewListTemp[i] === "string") {
            setPreviewList((prev) => [...prev, previewListTemp[i]]);
          }
        };

        readerList.push(reader);
      }
    }
  }, [files]);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center md:flex-row">
        {previewList.map((preview, index) => (
          <img
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
