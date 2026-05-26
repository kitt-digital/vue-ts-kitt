import { Component, AnchorHTMLAttributes, DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
interface Props {
    content: Component | string;
    htmlAttributes?: AnchorHTMLAttributes;
}
declare const _default: DefineComponent<Props, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<Props> & Readonly<{}>, {
    htmlAttributes: AnchorHTMLAttributes;
    content: Component | string;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
export default _default;
