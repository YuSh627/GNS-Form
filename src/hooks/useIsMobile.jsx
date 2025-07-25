import { useMediaQuery, useTheme } from "@mui/material";

export default function useIsMobile() {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down("md"));
}
