export default {
    filters: {
        useLGLogo( str ) {
            if( str ) {
                return config.LG_LOGO + str.replace(/\s+/g, '-').toUpperCase() + '.png';
            }
        },
        useMDLogo( str ) {
            if( str ) {
                return config.MD_LOGO + str.replace(/\s+/g, '-').toUpperCase() + '.png';
            }
        },
        useSMLogo( str ) {
            if( str ) {
                return config.SM_LOGO + str.replace(/\s+/g, '-').toUpperCase() + '.png';
            }
        },
    }
};
