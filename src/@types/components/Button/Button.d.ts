import { ButtonHTMLAttributes, DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
interface Props extends /* @vue-ignore */ ButtonHTMLAttributes {
    primary?: boolean;
    size?: 'small' | 'medium' | 'large';
    text: string;
}
declare const _default: DefineComponent<Props, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<Props> & Readonly<{}>, {
    primary: boolean;
    size: "small" | "medium" | "large";
    text: string;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
export default _default;
