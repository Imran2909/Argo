// src/components/admin/OverviewSection.tsx
import React from "react";
import { Box, Typography } from "@mui/material";
import OverviewCard from "./OverviewCard";
import styles from "../../styles/admin/OverviewSection.module.css";

interface OverviewSectionProps {
  cards: {
    icon: React.ReactNode;
    number: string | number;
    label: string;
  }[];
}

const OverviewSection: React.FC<OverviewSectionProps> = ({ cards }) => {
  return (
    <Box className={styles.section}>
      <Typography className={styles.title}>Admin Overview</Typography>
      <Box className={styles.cardContainer}>
        {cards.map((card, idx) => (
          <OverviewCard
            key={idx}
            icon={card.icon}
            number={card.number}
            label={card.label}
          />
        ))}
      </Box>
    </Box>
  );
};

export default OverviewSection;
