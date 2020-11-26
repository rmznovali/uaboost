export { default as Contact } from '../../components/Contact.vue'
export { default as Features } from '../../components/Features.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as Heading } from '../../components/Heading.vue'
export { default as Logo } from '../../components/Logo.vue'

export const LazyContact = import('../../components/Contact.vue' /* webpackChunkName: "components/Contact" */).then(c => c.default || c)
export const LazyFeatures = import('../../components/Features.vue' /* webpackChunkName: "components/Features" */).then(c => c.default || c)
export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/Footer" */).then(c => c.default || c)
export const LazyHeading = import('../../components/Heading.vue' /* webpackChunkName: "components/Heading" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
