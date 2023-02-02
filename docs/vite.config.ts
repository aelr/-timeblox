import solid from "solid-start/vite";
import Unocss from 'unocss/vite';
import { presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    Unocss({
      presets: [presetUno()],
      transformers: [
        transformerDirectives(),
        transformerVariantGroup()
      ],
    }),
    solid({ ssr: false })
  ]
});
