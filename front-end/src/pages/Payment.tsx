import { useEffect, useState, useMemo } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setPassenger } from "../redux/trips/actions"; // adjust path if using slice

import styles from "../styles/payment/Payment.module.css";

export default function Payment() {
  const navigate = useNavigate();

  const { selectedTrip, selectedSeats } = useSelector(
    (s: RootState) => s.trips
  );

  // ✅ Hooks first
  const [method, setMethod] = useState<"card" | "wallet">("card");

  // Form State:
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const dispatch = useDispatch();

  const total = useMemo(() => {
    if (!selectedTrip) return 0;
    return selectedTrip.price * selectedSeats.length;
  }, [selectedTrip, selectedSeats]);

  useEffect(() => {
    if (!selectedTrip) {
      navigate("/");
      return;
    }
    if (selectedSeats.length === 0) {
      navigate("/trip-details");
    }
  }, [selectedTrip, selectedSeats, navigate]);

  if (!selectedTrip || selectedSeats.length === 0) return null;

  const { from, to, dateTime } = selectedTrip;
  const dt = new Date(dateTime);
  const dateStr = dt.toISOString().slice(0, 10);
  const timeStr = dt.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });

  const onPay = () => {
    // ✅ Check required personal info
    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      toast.error("Please fill your name, email and phone number.");
      return;
    }

    // ✅ Check required card info
    if (
      method === "card" &&
      (!cardNumber.trim() || !cardName.trim() || !expiry.trim() || !cvv.trim())
    ) {
      toast.error("Please complete your card details.");
      return;
    }

    // ✅ SAVE PASSENGER DATA TO REDUX HERE
    dispatch(
      setPassenger({
        fullName,
        email,
        phone,
      })
    );

    // ✅ SUCCESS
    toast.success("Payment completed successfully!");
    navigate("/confirm-booking");
  };

  return (
    <div className={styles.page}>
      <Typography variant="h5" className={styles.heading}>
        Checkout &amp; Payment
      </Typography>

      <Grid container spacing={3}>
        {/* LEFT COLUMN */}
        <Grid item xs={12} md={7}>
          <Paper elevation={0} className={styles.card}>
            <Typography className={styles.cardTitle}>
              Your Information
            </Typography>
            <Typography className={styles.cardHint}>
              Please provide your contact details for this booking
            </Typography>

            <div className={styles.fieldCol}>
              <TextField
                fullWidth
                size="small"
                placeholder="Your Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className={styles.input}
              />
              <TextField
                fullWidth
                size="small"
                placeholder="Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
              />
              <TextField
                fullWidth
                size="small"
                placeholder="Your Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={styles.input}
              />
            </div>
          </Paper>

          <Paper
            elevation={0}
            className={styles.card}
            style={{ marginTop: 24 }}
          >
            <Typography className={styles.cardTitle}>Payment Method</Typography>

            <RadioGroup
              value={method}
              onChange={(e) => setMethod(e.target.value as "card" | "wallet")}
            >
              <FormControlLabel
                value="card"
                control={<Radio size="small" />}
                label="Credit or Debit Card"
                className={`${styles.radioItem} ${
                  method === "card" ? styles.radioActive : ""
                }`}
              />
              <FormControlLabel
                value="wallet"
                control={<Radio size="small" />}
                label="Digital Wallet (e.g., PayPal, Apple Pay)"
                className={styles.radioItem}
              />
            </RadioGroup>

            <div className={styles.fieldCol}>
              <TextField
                fullWidth
                size="small"
                placeholder="**** **** **** ****"
                label="Card Number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className={styles.input}
              />
              <TextField
                fullWidth
                size="small"
                placeholder="Name"
                label="Cardholder Name"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                className={styles.input}
              />

              <div className={styles.row2}>
                <TextField
                  size="small"
                  placeholder="MM/YY"
                  label="Expiry Date"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  className={styles.inputHalf}
                />
                <TextField
                  size="small"
                  placeholder="***"
                  label="CVV"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  className={styles.inputHalf}
                />
              </div>
            </div>
          </Paper>
        </Grid>

        {/* RIGHT COLUMN */}
        <Grid item xs={12} md={5}>
          <Paper elevation={0} className={styles.summary}>
            <div className={styles.summaryHeader}>
              <Typography className={styles.summaryTitle}>
                Booking Summary
              </Typography>
            </div>

            <div className={styles.summaryHero}>
              <span className={styles.plane}>✈️</span>
            </div>

            <div className={styles.summaryList}>
              <div className={styles.row}>
                <span className={styles.leftIcon}>📍</span>
                <span className={styles.left}>Route:</span>
                <span className={styles.right}>
                  {from} to {to}
                </span>
              </div>
              <div className={styles.row}>
                <span className={styles.leftIcon}>📅</span>
                <span className={styles.left}>Date:</span>
                <span className={styles.right}>{dateStr}</span>
              </div>
              <div className={styles.row}>
                <span className={styles.leftIcon}>⏰</span>
                <span className={styles.left}>Time:</span>
                <span className={styles.right}>{timeStr}</span>
              </div>
              <div className={styles.row}>
                <span className={styles.leftIcon}>🚌</span>
                <span className={styles.left}>Transport:</span>
                <span className={styles.right}>Flight</span>
              </div>
              <div className={styles.row}>
                <span className={styles.leftIcon}>👥</span>
                <span className={styles.left}>Seats:</span>
                <span className={styles.right}>{selectedSeats.join(", ")}</span>
              </div>
            </div>

            <Divider className={styles.sep} />

            <div className={styles.totalRow}>
              <span className={styles.totalLabel}>Total Fare:</span>
              <span className={styles.totalAmount}>USD {total.toFixed(2)}</span>
            </div>

            <Button
              variant="contained"
              className={styles.payBtn}
              onClick={onPay}
              fullWidth
            >
              Complete Payment
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
