import { future } from "@theme-ui/presets";

export const theme = {
  ...future,
  fonts: {
    body: "'Fira Sans', sans-serif",
    heading: "Lora, serif",
    monospace: "'Fira Mono', monospace",
  },
  links: {
    logo: {
      fontWeight: "bold",
      color: "inherit",
      textDecoration: "none",
      fontFamily: "heading",
      fontSize: 4,
    },
  },
  buttons: {
    primary: {
      color: "background",
      bg: "primary",
      fontWeight: "bold",
      cursor: "pointer",
      "&:hover": {
        bg: "primary.600",
      },
    },
  },
  layout: {
    container: {
      maxWidth: 640,
      mx: "auto",
      px: 4,
    },
  },
};
