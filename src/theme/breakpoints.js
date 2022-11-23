const size = {
    mobile: '411px',
    tablet: '768px',
    laptop: '1400px',
    desktop: '1921px'
}

export const device = {
    mobile: `(max-width: ${size.mobile})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    desktopPlus: `(min-width: ${size.desktop})`
};
