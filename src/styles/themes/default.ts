import { future } from "@theme-ui/presets";

export const theme = {
  ...future,
  colors: {
    ...future.colors,
    red: "#F75A68",
    gray: {
      light: "#757575",
      medium: "#313131",
      dark: "#252525",
    },
    modes: {
      dark: {
        text: "#E1E1E6",
        background: "#1F1F1F",
        primary: "#0fc",
        "primary.600": "#00C79F",
      },
    },
  },
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
      borderRadius: 8,
      "&:hover": {
        bg: "primary.600",
      },
    },
  },
  layout: {
    container: {
      maxWidth: 700,
      mx: "auto",
      px: 4,
    },
  },
  cards: {
    primary: {
      p: 3,
      bg: "gray.dark",
      borderRadius: 8,
      border: "1px solid",
      borderColor: "gray.medium",
    },
  },
};
