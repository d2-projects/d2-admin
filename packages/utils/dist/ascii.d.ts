interface Column {
    label: string;
    key: string;
}
interface Formatter {
    [key: string]: (value: any) => string;
}
interface TableToAsciiParams {
    title: string;
    columns: Column[];
    data: any[];
    formatters?: Formatter;
}
interface ObjectToAsciiParams {
    title: string;
    data: {
        [key: string]: any;
    };
}
export declare function tableToAscii({ title, columns, data, formatters }: TableToAsciiParams): string;
export declare function objectToAscii({ title, data, }: ObjectToAsciiParams): string;
export {};
