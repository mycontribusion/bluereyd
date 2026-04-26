import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "BlueReyd HealthTech Solutions",
        short_name: "BlueReyd",
        description:
            "Bridging the gap between medical expertise and full-stack development. Building reliable, offline-first mHealth solutions for Nigeria.",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#00a3bf",
        icons: [
            {
                src: "/icon.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "/icon.png",
                sizes: "512x512",
                type: "image/png",
            },
            {
                src: "/icon.png",
                sizes: "any",
                type: "image/png",
                purpose: "maskable",
            },
        ],
    };
}
