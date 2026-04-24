const React = require("react");
const { useSelector } = require("react-redux");

const { useGetProductsQuery } = require("../services/api");
const ProductGrid = require("../widgets/ProductGrid/ProductGrid");
const Header = require("../widgets/Header/Header");
const CategoryTabs = require("../widgets/CategoryTabs/CategoryTabs");
const SidebarFilters = require("../widgets/SidebarFilters/SidebarFilters");
const SortBar = require("../widgets/SortBar/SortBar");
const CatalogToolbar = require("../widgets/CatalogToolbar/CatalogToolbar");

require("./styles/CatalogPage.css");

function CatalogPage() {
    const { data, isLoading, error } = useGetProductsQuery();
    const products = data?.products || [];

    const filters = useSelector((state) => state.filters);

    const filteredProducts = products.filter((product) => {
        const matchesCategory =
            !filters.category || product.category === filters.category;

        const matchesBrand =
            !filters.brand || product.brand === filters.brand;

        const matchesPrice =
            !filters.price ||
            (filters.price === "under-50" && product.price < 50) ||
            (filters.price === "50-100" && product.price >= 50 && product.price <= 100) ||
            (filters.price === "100-500" && product.price >= 100 && product.price <= 500) ||
            (filters.price === "over-500" && product.price > 500);

        const matchesRating =
            !filters.rating || product.rating >= Number(filters.rating);

        const matchesStock =
            !filters.stock ||
            (filters.stock === "in-stock" && product.stock > 0) ||
            (filters.stock === "low-stock" && product.stock > 0 && product.stock <= 10);

        const matchesSale =
            !filters.sale || product.discountPercentage > 0;

        const matchesSearch =
            !filters.search ||
            product.title.toLowerCase().includes(filters.search.toLowerCase()) ||
            product.description.toLowerCase().includes(filters.search.toLowerCase()) ||
            product.category.toLowerCase().includes(filters.search.toLowerCase()) ||
            product.brand?.toLowerCase().includes(filters.search.toLowerCase());

        return (
            matchesSearch &&
            matchesCategory &&
            matchesBrand &&
            matchesPrice &&
            matchesRating &&
            matchesStock &&
            matchesSale
        );
    });

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (filters.sort === "desc") {
            return b.price - a.price;
        }

        return a.price - b.price;
    });

    if (isLoading) {
        return (
            <main className="catalog-page">
                <div className="catalog-page__container">
                    <p className="catalog-page__state">Loading products...</p>
                </div>
            </main>
        );
    }

    if (error) {
        return (
            <main className="catalog-page">
                <div className="catalog-page__container">
                    <p className="catalog-page__state">
                        Something went wrong while loading products.
                    </p>
                </div>
            </main>
        );
    }

    return (
        <>
            <Header />
            <CategoryTabs />

            <main className="catalog-page">
                <div className="catalog-page__container">
                    <SidebarFilters />

                    <section className="catalog-page__content">
                        <CatalogToolbar products={products} />

                        <SortBar />

                        <div className="catalog-page__products">
                            <ProductGrid products={sortedProducts} />
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}

module.exports = CatalogPage;
module.exports.default = CatalogPage;