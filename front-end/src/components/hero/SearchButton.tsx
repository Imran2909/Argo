import styles from "../../styles/hero/Hero.module.css";

interface SearchButtonProps {
  onClick: () => void;
}

export default function SearchButton({ onClick }: SearchButtonProps) {
  return (
    <button className={styles.searchButton} onClick={onClick}>
      Search
    </button>
  );
}
