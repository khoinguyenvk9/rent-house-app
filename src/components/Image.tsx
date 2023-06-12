import { ComponentProps, FC, useState } from "react";

const DEFAULT_TAG = "img";
type ImageTagProps = ComponentProps<typeof DEFAULT_TAG>;

type ImageProps = {
  aspectRatio?: "16/9" | "1/1" | string;
} & ImageTagProps;

export const Image: FC<ImageProps> = (props) => {
  const [loading, setLoading] = useState<boolean>(true);
  const onLoaded = () => setLoading(false);

  const { aspectRatio, ...imageProps } = props;

  return (
    <div
      className={`blurred-img ${loading ? "" : "loaded"}`}
      style={{ width: props?.width || "auto", height: props?.height || "auto" }}
    >
      <img {...imageProps} loading="lazy" onLoad={onLoaded} />
      {loading && (
        <div className="absolute top-0 bottom-0 w-full bg-slate-50 rounded-lg"></div>
      )}
    </div>
  );
};
