import SearchHeader from "@/components/searchHeader/page";
import "./../globals.css";

export default function SearchLayout({ children }) {
  return (
    <div>
      <SearchHeader />
      {children}
      {/* Footer */}
    </div>
  );
}
