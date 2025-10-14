// // import React from "react";
// // import styles from "../../styles/hero/Hero.module.css";
// // import SearchInput from "./SearchInput";
// // import SearchButton from "./SearchButton";
// // import { FaLocationDot } from "react-icons/fa6";
// // import { MdOutlineDateRange } from "react-icons/md";

// // export default function SearchBox() {
// //   return (
// //     <div className={styles.searchBox}>
// //       <div className={styles.searchInner}>
// //         <SearchInput label="From" placeholder="Departure Location" icon={<FaLocationDot />} />
// //         <SearchInput label="To" placeholder="Arrival Location" icon={<FaLocationDot />} />
// //         <SearchInput label="Date" placeholder="mm/dd/yyyy" icon={<MdOutlineDateRange />} />
// //         <SearchButton />
// //       </div>
// //     </div>
// //   );
// // }




// import React from "react";
// import styles from "../../styles/hero/Hero.module.css";
// import SearchInput from "./SearchInput";
// import SearchButton from "./SearchButton";
// import { FaLocationDot } from "react-icons/fa6";
// import { MdOutlineDateRange } from "react-icons/md";

// export default function SearchBox() {
//   return (
//     <div className={styles.searchBox}>
//       <div className={styles.searchInner}>
//         <SearchInput label="From" placeholder="Departure Location" icon={<FaLocationDot />} />
//         <SearchInput label="To" placeholder="Arrival Location" icon={<FaLocationDot />} />
//         <SearchInput label="Date" placeholder="mm/dd/yyyy" icon={<MdOutlineDateRange />} />
//         <SearchButton />
//       </div>
//     </div>
//   );
// }





import { useState } from "react";
import styles from "../../styles/hero/Hero.module.css";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import { useDispatch } from "react-redux";
import { filterTrips } from "../../redux/trips/actions";
import type { AppDispatch } from "../../redux/store";
import {
  LocalizationProvider,
  DatePicker
} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { IconButton } from "@mui/material";

export default function SearchBox() {
  const dispatch = useDispatch<AppDispatch>();

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState<Date | null>(null);

  const handleSearch = () => {
    dispatch(
      filterTrips({
        from,
        to,
        date: date ? new Date(date).toISOString().split("T")[0] : "",
      })
    );
  };

  return (
    <div className={styles.searchBox}>
      <div className={styles.searchInner}>
        {/* ✅ From Input */}
        <SearchInput
          label="From"
          placeholder="Departure Location"
          icon={<FaLocationDot />}
          value={from}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFrom(e.target.value)
          }
        />

        {/* ✅ To Input */}
        <SearchInput
          label="To"
          placeholder="Arrival Location"
          icon={<FaLocationDot />}
          value={to}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTo(e.target.value)
          }
        />

        {/* ✅ Date Selector (FIXED API) */}
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

        {/* ✅ Search Button with onClick */}
        <SearchButton onClick={handleSearch} />
      </div>
    </div>
  );
}
