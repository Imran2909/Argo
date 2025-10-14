// // src/components/admin/SectionHeading.tsx
// import React from "react";
// import { Box, Button, Typography } from "@mui/material";
// import styles from "../../styles/admin/SectionHeading.module.css";

// interface SectionHeadingProps {
//   title: string;
//   buttons?: {
//     label: string;
//     onClick?: () => void;
//   }[];
// }

// const SectionHeading: React.FC<SectionHeadingProps> = ({ title, buttons }) => {
//   return (
//     <Box className={styles.sectionHeading}>
//       <Typography className={styles.title}>{title}</Typography>
//       <Box className={styles.buttonGroup}>
//         {buttons?.map((btn, i) => (
//           <Button
//             key={i}
//             onClick={btn.onClick}
//             className={styles.button}
//             variant="contained"
//           >
//             {btn.label}
//           </Button>
//         ))}
//       </Box>
//     </Box>
//   );
// };

// export default SectionHeading;




// src/components/admin/SectionHeading.tsx
import React from "react";
import { Box, Button, Typography } from "@mui/material";
import styles from "../../styles/admin/SectionHeading.module.css";

interface SectionHeadingProps {
  title: string;
  buttons?: {
    label: string;
    onClick?: () => void;
  }[];
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, buttons }) => {
  return (
    <Box className={styles.sectionHeading}>
      <Typography className={styles.title}>{title}</Typography>
      <Box className={styles.buttonGroup}>
        {buttons?.map((btn, i) => (
          <Button
            key={i}
            onClick={btn.onClick}
            className={styles.button}
            variant="contained"
          >
            {btn.label}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default SectionHeading;
