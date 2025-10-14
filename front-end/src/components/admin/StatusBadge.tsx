// src/components/admin/StatusBadge.tsx
import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "../../styles/admin/StatusBadge.module.css";

interface StatusBadgeProps {
  status: "Confirmed" | "Pending" | "Cancelled";
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  return (
    <Box className={`${styles.badge} ${styles[status.toLowerCase()]}`}>
      <Typography className={styles.text}>{status}</Typography>
    </Box>
  );
};

export default StatusBadge;
