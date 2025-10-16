import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

import Button from "@mui/material/Button";

import styles from "../styles/trip/TripDetails.module.css";
import Header from "../components/layout/Header";
import Footer from "../components/footer/Footer";
import { setSelectedSeats } from "../redux/trips/actions";
import { toast } from "react-toastify";

const SEATS_PER_ROW = 6;

/** helper to format price and date/time like the mock */
function formatMoney(n: number) {
  return `$${n.toFixed(2)}`;
}
function formatParts(dt: string) {
  const d = new Date(dt);
  const date = d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const time = d.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });
  return { date, time };
}

/** build seat labels like A1..A6, B1..B6, ... up to totalSeats */
function buildSeatLabels(totalSeats: number) {
  const rows = Math.max(1, Math.ceil(totalSeats / SEATS_PER_ROW));
  const labels: string[] = [];
  for (let r = 0; r < rows; r++) {
    const rowLetter = String.fromCharCode(65 + r); // 65 => 'A'
    for (let c = 1; c <= SEATS_PER_ROW; c++) {
      const idx = r * SEATS_PER_ROW + c;
      if (idx > totalSeats) break;
      labels.push(`${rowLetter}${c}`);
    }
  }
  return labels;
}

export default function TripDetails() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const selectedTrip = useSelector(
    (state: RootState) => state.trips.selectedTrip
  );

  // Hooks at the top
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    if (!selectedTrip) navigate("/");
  }, [selectedTrip, navigate]);

  if (!selectedTrip) return null;

  const { from, to, dateTime, price, totalSeats, img } = selectedTrip;
  const { date, time } = formatParts(dateTime);

  // use the exact image string passed from TripCard; fallback to one of your assets
  const bannerImage = img || "/src/assets/newyork-boston.png";

  // Build seat labels (A1..)
  const seatLabels = useMemo(
    () => buildSeatLabels(Math.min(totalSeats, SEATS_PER_ROW * 6)),
    [totalSeats]
  );

  // Hard-coded booked seats to replicate the screenshot visual (non-interactive)
  const booked = useMemo<string[]>(
    () => [
      "A2",
      "A6",
      "B3",
      "B5",
      "C2",
      "C6",
      "D1",
      "D3",
      "D6",
      "E1",
      "E2",
      "F2",
      "F3",
      "F4",
      "F6",
    ],
    []
  );

  const toggleSeat = (label: string) => {
    if (booked.includes(label)) return; // cannot select booked seats
    setSelected((prev) =>
      prev.includes(label) ? prev.filter((s) => s !== label) : [...prev, label]
    );
  };

  const onConfirm = () => {
    if (selected.length === 0) {
      toast.error("Please select at least 1 seat before continuing.");
      return;
    }
    dispatch(setSelectedSeats(selected));
    navigate("/payment");
  };

  return (
    <>
      <Header />
      <div className={styles.page}>
        {/* Top image */}
        <div className={styles.bannerWrap}>
          <img src={bannerImage} alt="Trip Banner" className={styles.banner} />
        </div>

        {/* Trip Details Card */}
        <section className={styles.card}>
          <h3 className={styles.cardTitle}>Trip Details</h3>

          <div className={styles.detailsGrid}>
            <div className={styles.col}>
              <div className={styles.metaBlock}>
                <div className={styles.metaLabel}>From</div>
                <div className={styles.metaValue}>{from}</div>
              </div>

              <div className={styles.metaBlock}>
                <div className={styles.metaLabel}>Date</div>
                <div className={styles.metaValue}>{date}</div>
              </div>
            </div>

            <div className={styles.colRight}>
              <div className={styles.metaBlockRight}>
                <div className={styles.metaLabel}>To</div>
                <div className={styles.metaValue}>{to}</div>
              </div>

              <div className={styles.metaBlockRight}>
                <div className={styles.metaLabel}>Time</div>
                <div className={styles.metaValue}>{time}</div>
              </div>
            </div>
          </div>

          <div className={styles.fareWrap}>
            <div className={styles.fareLabel}>Fare per seat</div>
            <div className={styles.farePrice}>{formatMoney(price)}</div>
          </div>
        </section>

        {/* Seat Selection */}
        <section className={styles.card}>
          <h3 className={styles.cardTitle}>Select Your Seat</h3>

          <div className={styles.seatArea}>
            <div className={styles.cabinTitle}>Deluxe Cabin</div>

            <div className={styles.seatGrid}>
              {seatLabels.map((label) => {
                const isBooked = booked.includes(label);
                const isSelected = selected.includes(label);
                return (
                  <button
                    key={label}
                    onClick={() => toggleSeat(label)}
                    className={[
                      styles.seatBtn,
                      isBooked ? styles.seatBooked : "",
                      isSelected ? styles.seatSelected : "",
                    ].join(" ")}
                    aria-label={`Seat ${label}${isBooked ? " (booked)" : ""}`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>

            {/* Legend */}
            <div className={styles.legend}>
              <span className={styles.legendItem}>
                <span className={`${styles.dot} ${styles.dotAvailable}`} />
                Available
              </span>
              <span className={styles.legendItem}>
                <span className={`${styles.dot} ${styles.dotBooked}`} />
                Booked
              </span>
              <span className={styles.legendItem}>
                <span className={`${styles.dot} ${styles.dotSelected}`} />
                Selected
              </span>
            </div>
          </div>
        </section>

        {/* Selected Seats */}
        <section className={styles.card}>
          <h3 className={styles.cardTitle}>Selected Seats</h3>
          <div className={styles.selectedList}>
            {selected.length ? selected.join(", ") : "—"}
          </div>
        </section>

        {/* Confirm Button */}
        <div className={styles.footerCta}>
          <Button
            variant="contained"
            className={styles.confirmBtn}
            onClick={onConfirm}
          >
            Confirm Booking
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}
