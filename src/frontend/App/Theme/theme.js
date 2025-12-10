const breakpoints = {
    medium: 800,
    large: 1200,
};

export const theme = {
    cssMedia: {
        isSmall: `(max-width: ${breakpoints.medium - 1}px)`,
        isMediumAndUp: `(min-width: ${breakpoints.medium}px)`,
        isMedium: `(min-width: ${breakpoints.medium}px) and (max-width: ${
            breakpoints.large - 1
        }px)`,
        isLarge: `(min-width: ${breakpoints.large}px)`,
    },
    fonts: {
        default: "'Helvetica Neue', sans-serif",
        inter: '"Inter", sans-serif',
    },
    fontWeights: {
        thin: 100,
        light: 300,
        regular: 400,
        medium: 500,
        bold: 700,
        black: 900,
    },
    colors: {
        primary: {
            dark: "#00283F", // GLAR deep navy
            default: "#003C5F", // Primary GLAR blue
            medium: "#4F82A6", // Accent medium blue
            light: "#839EBA", // You chose this
            tint: "#B3C7D8", // Extra light tint for backgrounds
        },

        secondary: {
            default: "#F3F6F9", // light gray-blue
            light: "#FFFFFF",
            dark: "#D0D7DD",
        },

        messaging: {
            success: { color: "#FFFFFF", bgColor: "#3A8A5F" },
            error: { color: "#FFFFFF", bgColor: "#C4423A" },
        },
    },
};
