import { Box, Grid2, Grid2Props, Stack, Typography } from "@mui/material";
import { FC } from "react";

interface ContentItemProps extends Grid2Props {
  step: string;
  title: string;
  subtitle: string;
}
export const ContentItem: FC<ContentItemProps> = ({
  step,
  title,
  subtitle,
  ...rest
}) => {
  return (
    <Grid2
      size={{ xs: 12 }}
      display="flex"
      justifyContent="flex-start"
      width={290}
      {...rest}
    >
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        rowGap={2}
        width="fit-content"
      >
        <Box>
          <Stack direction="row" columnGap={3}>
            <Typography
              fontFamily="Barlow Condensed"
              fontSize={20}
              fontWeight={200}
            >
              {step}
            </Typography>
            <Typography
              fontFamily="Roslindale"
              fontSize={25}
              fontWeight={200}
              noWrap
            >
              {title}
            </Typography>
          </Stack>
        </Box>
        <Box pl={6}>
          <Typography
            fontFamily="Roslindale"
            fontSize={15}
            fontWeight={200}
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
        </Box>
      </Stack>
    </Grid2>
  );
};
