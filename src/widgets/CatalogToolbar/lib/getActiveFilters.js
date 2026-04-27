export function getActiveFilters(filters, filterConfig) {
    const activeFilters = [];

    if (filters.categoryPath && filters.categoryPath.length > 0) {
        filters.categoryPath.forEach((categoryTitle, index) => {
            activeFilters.push({
                name: `categoryPath-${index}`,
                label: categoryTitle,
                type: "categoryPath",
            });
        });
    }

    filterConfig.forEach((filter) => {
        const value = filters[filter.name];

        if (!value) {
            return;
        }

        if (filter.options) {
            const option = filter.options.find((item) => item.value === value);

            activeFilters.push({
                name: filter.name,
                label: option?.label || value,
            });

            return;
        }

        activeFilters.push({
            name: filter.name,
            label: value,
        });
    });

    if (filters.sale) {
        activeFilters.push({
            name: "sale",
            label: "Sale",
        });
    }

    return activeFilters;
}