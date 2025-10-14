// import React, { useState } from "react";
// import { Modal, Box, Button, Typography } from "@mui/material";
// import { useDispatch } from "react-redux";
// import { createTrip } from "../../redux/trips/actions";
// import type { AppDispatch } from "../../redux/store";
// import styles from "../../styles/admin/AddTripModal.module.css";

// interface AddTripModalProps {
//   open: boolean;
//   onClose: () => void;
// }

// const AddTripModal: React.FC<AddTripModalProps> = ({ open, onClose }) => {
//   const dispatch = useDispatch<AppDispatch>();

//   const [formData, setFormData] = useState({
//     from: "",
//     to: "",
//     dateTime: "",
//     price: "",
//     totalSeats: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = () => {
//     const { from, to, dateTime, price, totalSeats } = formData;

//     if (!from || !to || !dateTime || !price || !totalSeats) {
//       return;
//     }

//     dispatch(
//       createTrip({
//         from,
//         to,
//         dateTime,
//         price: Number(price),
//         totalSeats: Number(totalSeats),
//       })
//     );

//     onClose();
//     setFormData({
//       from: "",
//       to: "",
//       dateTime: "",
//       price: "",
//       totalSeats: "",
//     });
//   };

//   return (
//     <Modal open={open} onClose={onClose}>
//       <Box className={styles.modalContainer}>
//         <Typography className={styles.modalTitle}>Trip Details</Typography>

//         <div className={styles.row}>
//           <div className={styles.inputGroup}>
//             <label className={styles.inputLabel}>From</label>
//             <input
//               type="text"
//               name="from"
//               placeholder="Departure Location"
//               className={styles.inputField}
//               onChange={handleChange}
//               value={formData.from}
//             />
//           </div>

//           <div className={styles.inputGroup}>
//             <label className={styles.inputLabel}>To</label>
//             <input
//               type="text"
//               name="to"
//               placeholder="Arrival Destination"
//               className={styles.inputField}
//               onChange={handleChange}
//               value={formData.to}
//             />
//           </div>
//         </div>

//         <div className={styles.row}>
//           <div className={styles.inputGroup}>
//             <label className={styles.inputLabel}>Date & Time</label>
//             <input
//               type="text"
//               name="dateTime"
//               placeholder="Date & Time"
//               className={styles.inputField}
//               onChange={handleChange}
//               value={formData.dateTime}
//             />
//           </div>

//           <div className={styles.inputGroup}>
//             <label className={styles.inputLabel}>Price</label>
//             <input
//               type="number"
//               name="price"
//               placeholder="Price"
//               className={styles.inputField}
//               onChange={handleChange}
//               value={formData.price}
//             />
//           </div>
//         </div>

//         <div className={styles.inputGroupFull}>
//           <label className={styles.inputLabel}>Total Seat</label>
//           <input
//             type="number"
//             name="totalSeats"
//             placeholder="Total no. of seats"
//             className={styles.inputField}
//             onChange={handleChange}
//             value={formData.totalSeats}
//           />
//         </div>

//         <div className={styles.buttonWrapper}>
//           <Button className={styles.submitBtn} onClick={handleSubmit}>
//             Submit
//           </Button>
//         </div>
//       </Box>
//     </Modal>
//   );
// };

// export default AddTripModal;








import React, { useState } from "react";
import { Modal, Box, Button, Typography, TextField, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createTrip } from "../../redux/trips/actions";
import type { AppDispatch, RootState } from "../../redux/store";
import { DesktopDateTimePicker } from "@mui/x-date-pickers/DesktopDateTimePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import styles from "../../styles/admin/AddTripModal.module.css";

interface AddTripModalProps {
  open: boolean;
  onClose: () => void;
}

const AddTripModal: React.FC<AddTripModalProps> = ({ open, onClose }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading } = useSelector((state: RootState) => state.trips);

  const [formData, setFormData] = useState({
    from: "",
    to: "",
    dateTime: "",
    price: "",
    totalSeats: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (newValue: Date | null) => {
    setFormData({ ...formData, dateTime: newValue ? newValue.toISOString() : "" });
  };

  const handleSubmit = async () => {
    const { from, to, dateTime, price, totalSeats } = formData;

    if (!from || !to || !dateTime || !price || !totalSeats) return;

    await dispatch(
      createTrip({
        from,
        to,
        dateTime,
        price: Number(price),
        totalSeats: Number(totalSeats),
      })
    );

    onClose(); // CLOSE ONLY AFTER API FINISHES
    setFormData({
      from: "",
      to: "",
      dateTime: "",
      price: "",
      totalSeats: "",
    });
  };

  return (
    <Modal open={open} onClose={!loading ? onClose : undefined}>
      <Box className={styles.modalContainer}>
        <Typography className={styles.modalTitle}>Trip Details</Typography>

        {/* Row 1 */}
        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>From</label>
            <input
              type="text"
              name="from"
              placeholder="Departure Location"
              className={styles.inputField}
              onChange={handleChange}
              value={formData.from}
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>To</label>
            <input
              type="text"
              name="to"
              placeholder="Arrival Destination"
              className={styles.inputField}
              onChange={handleChange}
              value={formData.to}
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Date & Time</label>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDateTimePicker
                value={formData.dateTime ? new Date(formData.dateTime) : null}
                onChange={handleDateChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    InputProps={{
                      endAdornment: (
                        <IconButton>
                          <CalendarTodayIcon />
                        </IconButton>
                      ),
                    }}
                    sx={{ height: "48px !impotant" }}
                  />
                )}
              />
            </LocalizationProvider>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Price</label>
            <input
              type="number"
              name="price"
              placeholder="Price"
              className={styles.inputField}
              onChange={handleChange}
              value={formData.price}
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className={styles.inputGroupFull}>
          <label className={styles.inputLabel}>Total Seat</label>
          <input
            type="number"
            name="totalSeats"
            placeholder="Total no. of seats"
            className={styles.inputField}
            onChange={handleChange}
            value={formData.totalSeats}
          />
        </div>

        {/* Button */}
        <div className={styles.buttonWrapper}>
          <Button
            className={styles.submitBtn}
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default AddTripModal;
