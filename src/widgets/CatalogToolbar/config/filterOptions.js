const colorOptions = [
    { value: "", label: "Color" },
    { value: "white-dark", label: "White, Dark" },
    { value: "black", label: "Black" },
    { value: "brown", label: "Brown" },
];

const sizeOptions = [
    { value: "", label: "Size" },
    { value: "36-36.5", label: "36, 36.5" },
    { value: "s", label: "S" },
    { value: "m", label: "M" },
    { value: "l", label: "L" },
];

const priceOptions = [
    { value: "", label: "Price" },
    { value: "under-50", label: "Under $50" },
    { value: "50-100", label: "$50 - $100" },
    { value: "100-500", label: "$100 - $500" },
    { value: "over-500", label: "Over $500" },
];

const conditionOptions = [
    { value: "", label: "Condition" },
    { value: "new", label: "New" },
    { value: "used", label: "Used" },
];

const shopOptions = [
    { value: "", label: "Shop" },
    { value: "resale-hub", label: "Resale Hub" },
    { value: "trend-traders", label: "TrendTraders" },
];

export const filterConfig = [
    {
        name: "color",
        options: colorOptions,
    },
    {
        name: "size",
        options: sizeOptions,
    },
    {
        name: "brand",
        options: null,
    },
    {
        name: "price",
        options: priceOptions,
    },
    {
        name: "condition",
        options: conditionOptions,
    },
    {
        name: "shop",
        options: shopOptions,
    },
];