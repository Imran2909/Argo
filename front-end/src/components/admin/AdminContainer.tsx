// src/components/admin/AdminContainer.tsx
import React from "react";
import { Box } from "@mui/material";
import styles from "../../styles/admin/AdminContainer.module.css";

interface AdminContainerProps {
  children: React.ReactNode;
}

const AdminContainer: React.FC<AdminContainerProps> = ({ children }) => {
  return (
    <Box className={styles.container}>
      {children}
    </Box>
  );
};

export default AdminContainer;
