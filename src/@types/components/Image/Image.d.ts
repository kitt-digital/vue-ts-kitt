import { ImgHTMLAttributes, DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
interface Props extends /* @vue-ignore */ ImgHTMLAttributes {
    src: string;
    alt: string;
}
declare const _default: DefineComponent<Props, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<Props> & Readonly<{}>, {
    src: string;
    alt: string;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
export default _default;
