module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                portfoliotheme: {
                    primary: "#0D0D0D",

                    secondary: "#FFFFFF",

                    accent: "#DC143C",

                    neutral: "#1a1a1a",

                    "base-100": "#1a1a1a",

                    info: "#4F8FD8",

                    success: "#2ECC6B",

                    warning: "#B78F0B",

                    error: "#F26979",
                },
            },
        ],
    },
};
