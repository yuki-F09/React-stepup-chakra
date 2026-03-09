import { createSystem, defineConfig, defaultConfig} from "@chakra-ui/react"

const config = defineConfig({
  globalCss: {
    "html, body": {
      bg: "gray.100",
      color: "gray.800",
      backgroundColor:"blue.100"
    },
  },
});

export const system = createSystem(defaultConfig, config);