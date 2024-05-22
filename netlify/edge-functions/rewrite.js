const rewrite = async (request, context) => {
    const path = context.geo?.country?.code === 'AU' ? '/edge/australia' : '/edge/not-australia';
    console.log('rewrite middleware', { path, context, request });
    return new URL(path, request.url);
};

export const config = {
    path: '/edge'
};

export default rewrite;
