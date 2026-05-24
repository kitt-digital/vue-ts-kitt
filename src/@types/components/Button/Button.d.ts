import { ButtonHTMLAttributes, DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
export interface Props {
    primary?: boolean;
    size?: 'small' | 'medium' | 'large';
    text: string;
    htmlAttributes?: ButtonHTMLAttributes;
}
declare const _default: DefineComponent<Props, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<Props> & Readonly<{}>, {
    primary: boolean;
    size: "small" | "medium" | "large";
    text: string;
    htmlAttributes: ButtonHTMLAttributes;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
export default _default;
