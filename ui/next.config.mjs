/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            //issuer: /\.[jt]sx?$/,
            use: [{
                loader: '@svgr/webpack',
                options: {
                    jsxRuntime: 'classic',
                    typescript: true,
                    dimensions: true,
                    expandProps: 'end'
                }
            }],
        })

        return config
    }
};

export default nextConfig;
