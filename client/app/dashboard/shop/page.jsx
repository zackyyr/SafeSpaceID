"use client";

import { useEffect, useState } from "react";
import { Search, Heart } from "lucide-react";
import products from "../data/Product.json";
import ProductSidebarFilter from "@/components/common/SidebarFilter";
import ProductModal from "@/components/common/ProductModal";
import ProductCard from "@/components/common/Card";
import WishlistSidebar from "@/components/common/WishlistSidebar";
import { motion, AnimatePresence } from "framer-motion";

const Shop = () => {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("Terbaru");
  const [wishlist, setWishlist] = useState({});
  const [showWishlist, setShowWishlist] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filters, setFilters] = useState({
    category: [],
    format: [],
    price: [],
  });

  useEffect(() => {
    if (selectedProduct || showWishlist) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProduct, showWishlist]);

  const toggleWishlist = (index) => {
    setWishlist((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handleCheckboxChange = (type, value) => {
    setFilters((prev) => {
      const current = new Set(prev[type]);
      if (current.has(value)) {
        current.delete(value);
      } else {
        current.add(value);
      }
      return { ...prev, [type]: Array.from(current) };
    });
  };

  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    )
    .filter((product) => {
      const { category, format, price } = filters;
      const isCategory =
        category.length === 0 || category.includes(product.category);
      const isFormat =
        format.length === 0 || format.includes(product.format);
      const isPrice =
        price.length === 0 ||
        (price.includes("Gratis") && product.price === 0) ||
        (price.includes("Berbayar") && product.price > 0);
      return isCategory && isFormat && isPrice;
    })
    .filter((product) => {
      if (activeFilter === "Populer") return product.isPopular;
      if (activeFilter === "Recommended") return product.isRecommended;
      return true;
    })
    .sort((a, b) => {
      if (activeFilter === "Terbaru") {
        return new Date(b.dateCreated) - new Date(a.dateCreated);
      }
      return 0;
    });

  return (
    <motion.div
      className="min-h-screen bg-[#f4f9fd] px-4 sm:px-10 py-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex flex-col md:flex-row gap-10">
        <ProductSidebarFilter
          filters={filters}
          handleCheckboxChange={handleCheckboxChange}
        />

        <section className="flex-1">
          {/* Header Produk + Wishlist */}
          <div className="flex items-center justify-between mb-4 px-1">
            <h1 className="text-2xl font-bold text-gray-900">Produk</h1>
            <button
              onClick={() => setShowWishlist(true)}
              className="bg-white text-[#2875D4] p-3 rounded-full hover:bg-[#2848d42f] transition cursor-pointer"
            >
              <Heart className="w-5 h-5" />
            </button>
          </div>

          {/* Filter Tab + Search */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4 bg-white p-3 rounded-2xl">
            <div className="flex items-center gap-3 bg-[#f9f9f9] p-3 rounded-xl">
              {["Terbaru", "Populer", "Recommended"].map((label) => (
                <button
                  key={label}
                  onClick={() => setActiveFilter(label)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition cursor-pointer border ${
                    activeFilter === label
                      ? "bg-white text-black border-gray-300"
                      : "bg-transparent text-gray-500 border-transparent"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Cari produk..."
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#f9f9f9] text-sm focus:outline-none"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, i) => (
              <ProductCard
                key={i}
                product={product}
                index={i}
                isWishlisted={wishlist[i]}
                onToggleWishlist={toggleWishlist}
                onClick={() => setSelectedProduct(product)}
              />
            ))}
          </div>
        </section>
      </div>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductModal
            key="product-modal"
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>

      {/* Wishlist Sidebar */}
      <AnimatePresence>
        {showWishlist && (
          <WishlistSidebar
            products={products}
            wishlist={wishlist}
            onClose={() => setShowWishlist(false)}
            onClickProduct={(product) => setSelectedProduct(product)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Shop;
