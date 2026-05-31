import { ButtonHTMLAttributes, DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
interface Props extends /* @vue-ignore */ ButtonHTMLAttributes {
    secondary?: boolean;
    pill?: boolean;
    outlineStyle?: boolean;
    size?: 'small' | 'medium' | 'large';
    text: string;
}
declare const _default: DefineComponent<Props, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<Props> & Readonly<{}>, {
    text: string;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
export default _default;
