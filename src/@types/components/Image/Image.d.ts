import { ImgHTMLAttributes, DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
interface Props {
    src: string;
    alt: string;
    htmlAttributes?: ImgHTMLAttributes;
}
declare const _default: DefineComponent<Props, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<Props> & Readonly<{}>, {
    htmlAttributes: ImgHTMLAttributes;
    src: string;
    alt: string;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
export default _default;
