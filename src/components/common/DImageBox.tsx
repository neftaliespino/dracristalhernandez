import { Box, BoxProps } from "@mui/material";
import { CSSProperties, FC } from "react";

interface DImageBoxProps extends Omit<BoxProps, "component"> {
  src: string;
  alt: string;
  objectFit: CSSProperties["objectFit"];
}

const DImageBox: FC<DImageBoxProps> = ({ src, alt, objectFit, ...rest }) => {
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{
        objectFit,
      }}
      {...rest}
    />
  );
};

export default DImageBox;
