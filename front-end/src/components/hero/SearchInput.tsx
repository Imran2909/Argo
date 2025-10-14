// import React from "react";
// import styles from "../../styles/hero/Hero.module.css";

// interface SearchInputProps {
//   label: string;
//   placeholder: string;
//   icon: React.ReactNode;
// }

// export default function SearchInput({ label, placeholder, icon }: SearchInputProps) {
//   return (
    // <div className={styles.inputGroup}>
    //   <label>{label}</label>
    //   <div className={styles.inputWrapper}>
    //     <input type="text" placeholder={placeholder} />
    //     <span className={styles.icon}>{icon}</span>
    //   </div>
    // </div>
//   );
// }





import React from "react";
import styles from "../../styles/hero/Hero.module.css";

interface SearchInputProps {
  label: string;
  placeholder: string;
  icon: React.ReactNode;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchInput({
  label,
  placeholder,
  icon,
  value,
  onChange,
}: SearchInputProps) {
  return (
    <div className={styles.inputGroup}>
      <label>{label}</label>
      <div className={styles.inputWrapper}>
        <input type="text" placeholder={placeholder} value={value} onChange={onChange} />
        <span className={styles.icon}>{icon}</span>
      </div>
    </div>
  );
}
