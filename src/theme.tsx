import { extendTheme } from "@chakra-ui/react";
import "@fontsource/raleway/400.css";
import "@fontsource/bungee";
import { switchAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys);

const baseStyle = definePartsStyle({
  thumb: {
    bg: "gray.100",
  },
  track: {
    bg: "gray.300",
    _checked: {
      bg: "ui.main",
    },
  },
});

const switchTheme = defineMultiStyleConfig({ baseStyle });

const disabledStyles = {
  _disabled: {
    backgroundColor: "ui.main",
  },
};

const theme = extendTheme({
  fonts: {
    body: `'Raleway', sans-serif`,
    heading: `'Bungee', sans-serif`,
  },
  colors: {
    ui: {
      main: "#33C3F0",
      secondary: "#EDF2F7",
      success: "#48BB78",
      danger: "#E53E3E",
      black: "#000",
      white: "#fff",
      neonpink: "#EA346B",
      neongreen: "#72F351",
      neonyellow: "#FEF453",
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "3xl",
        _hover: {
          backgroundColor: "transparent",
          color: "#333",
          outline: 0,
          borderColor: "#888",
        },
        _disabled: {
          ...disabledStyles,
          _hover: {
            ...disabledStyles,
          },
        },
      },
      variants: {
        primary: {
          backgroundColor: "ui.neongreen",
          color: "ui.black",
          borderColor: "ui.main",
          fontSize: "14px",
          fontWeight: "900",
          _hover: {
            backgroundColor: "#04a817",
            color: "#FFF",
            borderColor: "#1EAEDB",
          },
          _disabled: {
            ...disabledStyles,
            _hover: {
              ...disabledStyles,
            },
          },
        },
        danger: {
          backgroundColor: "ui.danger",
          color: "ui.light",
          _hover: {
            backgroundColor: "#E32727",
          },
        },
      },
    },
    Tabs: {
      variants: {
        enclosed: {
          tab: {
            _selected: {
              color: "ui.main",
            },
          },
        },
      },
    },
    Switch: switchTheme,
  },
});

export default theme;
