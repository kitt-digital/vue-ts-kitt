import { LinkHTMLAttributes, DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
interface Props {
    text: string;
    htmlAttributes?: LinkHTMLAttributes;
}
declare const _default: DefineComponent<Props, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<Props> & Readonly<{}>, {
    text: string;
    htmlAttributes: LinkHTMLAttributes;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
export default _default;
