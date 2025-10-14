// src/components/admin/OverviewCard.tsx
import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "../../styles/admin/OverviewCard.module.css";

interface OverviewCardProps {
  icon: React.ReactNode;
  number: string | number;
  label: string;
}

const OverviewCard: React.FC<OverviewCardProps> = ({ icon, number, label }) => {
  return (
    <Box className={styles.card}>
      <Box className={styles.innerBox}>
        <Box>
          <div className={styles.icon}>{icon}</div>
        </Box>
        <Box className={styles.textContent}>
          <Typography className={styles.number}>{number}</Typography>
          <Typography className={styles.label}>{label}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default OverviewCard;
