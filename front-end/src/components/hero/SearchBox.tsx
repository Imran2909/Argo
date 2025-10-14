import { useState } from "react";
import styles from "../../styles/hero/Hero.module.css";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import { useDispatch } from "react-redux";
import { filterTrips } from "../../redux/trips/actions";
import type { AppDispatch } from "../../redux/store";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { IconButton } from "@mui/material";

export default function SearchBox() {
  const dispatch = useDispatch<AppDispatch>();

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState<Date | null>(null);

  // inside handleSearch in SearchBox.tsx
  const toLocalYMD = (d: Date) => {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  };

  const handleSearch = () => {
    dispatch(
      filterTrips({
        from,
        to,
        date: date ? toLocalYMD(date) : "", // ✅ local calendar date
      })
    );
  };

  return (
    <div className={styles.searchBox}>
      <div className={styles.searchInner}>
        <SearchInput
          label="From"
          placeholder="Departure Location"
          icon={<FaLocationDot />}
          value={from}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFrom(e.target.value)
          }
        />

        <SearchInput
          label="To"
          placeholder="Arrival Location"
          icon={<FaLocationDot />}
          value={to}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTo(e.target.value)
          }
        />

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <div className={styles.searchInputBox}>
            <label className={styles.label}>Date</label>
            <DatePicker
              className={styles.datePicker}
              value={date}
              onChange={(newValue: Date | null) => setDate(newValue)}
              slotProps={{
                textField: {
                  placeholder: "mm/dd/yyyy",
                  InputProps: {
                    endAdornment: (
                      <IconButton>
                        <MdOutlineDateRange />
                      </IconButton>
                    ),
                  },
                },
              }}
            />
          </div>
        </LocalizationProvider>

        <SearchButton onClick={handleSearch} />
      </div>
    </div>
  );
}
