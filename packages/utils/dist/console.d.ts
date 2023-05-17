export declare function logTable({ title, columns, data, formatters }: {
    title: string;
    columns: {
        label: string;
        key: string;
    }[];
    data: any[];
    formatters?: {
        [key: string]: (value: any) => string;
    };
}): void;
