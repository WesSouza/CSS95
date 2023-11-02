import postcssPresetEnv from "postcss-preset-env";

export default {
  plugins: [
    postcssPresetEnv({
      stage: false,
      features: {
        "nesting-rules": true,
      },
    }),
  ],
};
