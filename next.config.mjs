import "./src/env.mjs";

/** @type {import('next').NextConfig} */
const config = {
    images: {
        remotePatterns: [
            {
                hostname: 'images.unsplash.com'
            }
        ]
    }
}
 
export default config;
