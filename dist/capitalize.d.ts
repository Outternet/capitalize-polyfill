export declare type CapitalizeOptions = ({
    preserve?: boolean;
    wordByWord?: false;
    skipWord?: undefined;
}) | ({
    preserve?: boolean;
    wordByWord: true;
    skipWord?: ((str: string) => boolean) | RegExp;
} | boolean);
