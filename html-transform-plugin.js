// unplugin-html-transform.js
import { createUnplugin } from 'unplugin';

const HtmlTransformPlugin = createUnplugin(() => ({
    name: 'html-transform',
    enforce: 'pre',
    transformInclude(id) {
        return id.endsWith('.html');
    },
    transform(code) {
        try {
            // Replace URLs with the desired format
            const updatedCode = code.replace(
                /src="https:\/\/raw\.githubusercontent\.com\/[^/]+\/[^/]+\/[^/]+\/[^"]+"/g,
                (match) => {
                    return match.replace(
                        /https:\/\/raw\.githubusercontent\.com\/[^/]+\/[^/]+\/main/,
                        '../../'
                    );
                }
            );

            return {
                code: updatedCode,
                map: null,
            };
        } catch (error) {
            // Handle specific error if necessary, otherwise log it
            console.error('Error in HTML transformation:', error);

            // Optionally, you can choose to return the original code
            // if an error occurs, or handle it differently based on your needs.
            return {
                code, // Return the original code if there's an error
                map: null,
            };
        }
    },
}));

export default HtmlTransformPlugin;
