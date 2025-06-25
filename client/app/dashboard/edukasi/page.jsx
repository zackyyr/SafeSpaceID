"use client";
import React, { useState } from "react";
import CardArticle from "@/components/common/CardArticle";
import MenuCategories from "@/components/common/MenuCategories";
import Pagination from "@/components/common/Pagination";
import articles from "@/app/dashboard/data/Articles.json";

const POSTS_PER_PAGE = 9;

const Edukasi = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(null);

  // Filter berdasarkan search dan kategori
  const filteredArticles = articles.filter((article) => {
    const matchSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchCategory = activeCategory
      ? article.category.includes(activeCategory)
      : true;
    return matchSearch && matchCategory;
  });

  const totalPages = Math.ceil(filteredArticles.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedArticles = filteredArticles.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <div className="bg-[#F0F5F9] min-h-screen py-16 px-6 md:px-20 flex items-start gap-10">
      <MenuCategories
        onSearchChange={setSearchQuery}
        onCategoryChange={setActiveCategory}
        activeCategory={activeCategory}
      />
      <div className="flex gap-10 items-start">
        <main className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {paginatedArticles.map((post) => (
              <CardArticle key={post.id} post={post} />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </main>
      </div>
    </div>
  );
};

export default Edukasi;
