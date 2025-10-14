// src/components/admin/ActionIcons.tsx
import React from "react";
import { FaEdit, FaCheckCircle } from "react-icons/fa";
import { MdDelete, MdRadioButtonUnchecked, MdCancel } from "react-icons/md";
import styles from "../../styles/admin/ActionIcons.module.css";

interface ActionIconsProps {
  type: "edit" | "delete" | "verified" | "pending" | "cancelled";
}

const ActionIcons: React.FC<ActionIconsProps> = ({ type }) => {
  switch (type) {
    case "edit":
      return <FaEdit className={styles.icon} />;
    case "delete":
      return <MdDelete className={`${styles.icon} ${styles.delete}`} />;
    case "verified":
      return <FaCheckCircle className={`${styles.icon} ${styles.verified}`} />;
    case "pending":
      return <MdRadioButtonUnchecked className={styles.icon} />;
    case "cancelled":
      return <MdCancel className={`${styles.icon} ${styles.cancelled}`} />;
    default:
      return null;
  }
};

export default ActionIcons;
