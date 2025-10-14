// src/components/admin/DataTable.tsx
import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
} from "@mui/material";
import StatusBadge from "./StatusBadge";
import ActionIcons from "./ActionIcons";
import styles from "../../styles/admin/DataTable.module.css";

interface Column {
  label: string;
  field: string;
}

interface DataRow {
  [key: string]:
    | string
    | number
    | string[]
    | ("edit" | "delete" | "verified" | "pending" | "cancelled")[];
}

interface DataTableProps {
  columns: Column[];
  data: DataRow[];
}

const DataTable: React.FC<DataTableProps> = ({ columns, data }) => {
  return (
    <Box className={styles.tableWrapper}>
      <Table className={styles.table}>
        <TableHead>
          <TableRow className={styles.headerRow}>
            {columns.map((col, idx) => (
              <TableCell key={idx} className={styles.headerCell}>
                {col.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex} className={styles.dataRow}>
              {columns.map((col, colIndex) => {
                const value = row[col.field];

                // Status column
                if (col.field === "status" && typeof value === "string") {
                  return (
                    <TableCell key={colIndex}>
                      <StatusBadge
                        status={value as "Confirmed" | "Pending" | "Cancelled"}
                      />
                    </TableCell>
                  );
                }

                // Actions column
                if (col.field === "actions" && Array.isArray(value)) {
                  return (
                    <TableCell key={colIndex}>
                      <Box className={styles.actionsCell}>
                        {(
                          value as (
                            | "edit"
                            | "delete"
                            | "verified"
                            | "pending"
                            | "cancelled"
                          )[]
                        ).map((actionType, idx2) => (
                          <ActionIcons key={idx2} type={actionType} />
                        ))}
                      </Box>
                    </TableCell>
                  );
                }

                // QR Verified column (with icon logic)
                if (col.field === "qr" && typeof value === "string") {
                  const qrValue = value as "verified" | "pending" | "cancelled";
                  return (
                    <TableCell key={colIndex}>
                      <ActionIcons type={qrValue} />
                    </TableCell>
                  );
                }

                // Default text cell
                return (
                  <TableCell key={colIndex} className={styles.dataCell}>
                    {String(value)}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default DataTable;
