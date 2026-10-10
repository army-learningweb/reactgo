import { Freelancers } from "../../data/Freelancer";
import { useState } from "react";
import { BaseLayout } from "../layouts/BaseLayout";
import { useSearchParams } from "react-router";
import FreelancerCard from "./FreelancerCard";
import FreelancerSearchBar from "./FreelancerSearchBar";

export default function Freelancer() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("search") ?? "";

  // Tìm kiếm
  const setQuery = (value) => {
    setSearchParams(value.trim() ? { search: value } : {}, { replace: true });
  };

  // Lọc danh sách
  const filteredUser = Freelancers.filter((user) => {
    return (
      user.name.toLowerCase().includes(query) ||
      user.live.toLowerCase().includes(query) ||
      user.skills.some((s) => s.toLowerCase().includes(query))
    );
  });

  return (
    <>
      <BaseLayout title="FREELANCER LIST BRANCHES">
        <div className="flex flex-col gap-5">
          {/* Tìm kiếm user */}
          <FreelancerSearchBar
            onSearch={setQuery}
            query={query}
            filteredUser={filteredUser}
          />

          {/* Danh sách freelancer */}
          {filteredUser.map((user) => (
            <FreelancerCard key={user.id} user={user} />
          ))}
        </div>
      </BaseLayout>
    </>
  );
}
