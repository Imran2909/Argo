// src/components/admin/PageHeading.tsx
import React from "react";
import { Typography } from "@mui/material";
import styles from "../../styles/admin/PageHeading.module.css";

const PageHeading: React.FC = () => {
  return (
    <Typography className={styles.heading}>
      Admin Dashboard
    </Typography>
  );
};

export default PageHeading;
