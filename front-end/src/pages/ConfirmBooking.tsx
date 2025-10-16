// import { useEffect, useMemo } from "react";
// import { useSelector } from "react-redux";
// import type { RootState } from "../redux/store";
// import { useNavigate } from "react-router-dom";

// import Button from "@mui/material/Button";
// import styles from "../styles/payment/ConfirmBooking.module.css";

// import FlightIcon from "@mui/icons-material/Flight";
// import DownloadIcon from "@mui/icons-material/Download";
// import VisibilityIcon from "@mui/icons-material/Visibility";

// import qrImg from "../assets/qrimage.png";

// function formatDate(dt: string) {
//   const d = new Date(dt);
//   return d.toLocaleDateString(undefined, {
//     month: "long",
//     day: "numeric",
//     year: "numeric",
//   });
// }
// function formatTime(dt: string) {
//   return new Date(dt).toLocaleTimeString(undefined, {
//     hour: "2-digit",
//     minute: "2-digit",
//   });
// }
// function addMinutes(dt: string, mins: number) {
//   const d = new Date(dt);
//   d.setMinutes(d.getMinutes() + mins);
//   return d;
// }
// function cityCode(city: string) {
//   // best-effort: first 3 uppercase letters of the first token
//   const token = (city || "").split(/[ (,-]/)[0];
//   return token.slice(0, 3).toUpperCase();
// }

// export default function ConfirmBooking() {
//   const navigate = useNavigate();
//   const { selectedTrip, selectedSeats } = useSelector(
//     (s: RootState) => s.trips
//   );

//   useEffect(() => {
//     if (!selectedTrip) {
//       navigate("/");
//       return;
//     }
//     if (!selectedSeats || selectedSeats.length === 0) {
//       navigate("/trip-details");
//     }
//   }, [selectedTrip, selectedSeats, navigate]);

//   if (!selectedTrip || selectedSeats.length === 0) return null;

//   const { from, to, dateTime, price } = selectedTrip;

//   const departTime = formatTime(dateTime);
//   const arrive = addMinutes(dateTime, 150); // 2h 30m to match mock
//   const arriveTime = arrive.toLocaleTimeString(undefined, {
//     hour: "2-digit",
//     minute: "2-digit",
//   });

//   const datePretty = formatDate(dateTime);

//   const fromCode = cityCode(from); // e.g., "LAX"
//   const toCode = cityCode(to);     // e.g., "SFO"

//   const total = useMemo(
//     () => price * selectedSeats.length,
//     [price, selectedSeats.length]
//   );

//   const bookingId = useMemo(
//     () => "#TXN" + Math.random().toString(36).slice(2, 8).toUpperCase(),
//     []
//   );

//   const onDownload = () => {
//     // Hook up real download later (PDF)
//     // Keeping silent to match "no alerts"; feel free to add toast here if desired.
//   };
//   const onView = () => {
//     // Navigate to a ticket detail route if you have one; stay put for now.
//   };

//   return (
//     <div className={styles.canvas}>
//       {/* Top success */}
//       <div className={styles.topCheck}>
//         <div className={styles.checkBadge}>✓</div>
//       </div>
//       <h2 className={styles.heading}>Booking Confirmed!</h2>
//       <p className={styles.subhead}>
//         Your trip is successfully booked. Enjoy your journey!
//       </p>

//       {/* Ticket Card */}
//       <div className={styles.card}>
//         {/* Blue header */}
//         <div className={styles.cardHeader}>
//           <div className={styles.headerLeft}>
//             <div className={styles.headerTitle}>Flight Ticket</div>
//             <div className={styles.headerSub}>Booking ID: {bookingId}</div>
//           </div>
//           <div className={styles.headerIcon}>
//             <FlightIcon fontSize="small" />
//           </div>
//         </div>

//         {/* Route Row */}
//         <div className={styles.routeRow}>
//           <div className={styles.routeSide}>
//             <div className={styles.code}>{fromCode}</div>
//             <div className={styles.cityLine}>{from}</div>
//             <div className={styles.time}>{departTime}</div>
//           </div>

//           <div className={styles.routeCenter}>
//             <div className={styles.dots} />
//             <FlightIcon className={styles.centerPlane} fontSize="small" />
//             <div className={styles.dots} />
//             <div className={styles.duration}>2h 30min</div>
//           </div>

//           <div className={styles.routeSideRight}>
//             <div className={styles.code}>{toCode}</div>
//             <div className={styles.cityLine}>{to}</div>
//             <div className={styles.time}>{arriveTime}</div>
//           </div>
//         </div>

//         {/* Chips row */}
//         <div className={styles.chipsRow}>
//           <div className={styles.chip}>
//             <div className={styles.chipLabel}>Date</div>
//             <div className={styles.chipValue}>{datePretty}</div>
//           </div>
//           <div className={styles.chip}>
//             <div className={styles.chipLabel}>Seats</div>
//             <div className={styles.chipValue}>{selectedSeats.join(", ")}</div>
//           </div>
//         </div>

//         <div className={styles.divider} />

//         {/* Total */}
//         <div className={styles.totalRow}>
//           <span className={styles.totalLabel}>Total Fare Paid</span>
//           <span className={styles.totalAmount}>${total.toFixed(2)}</span>
//         </div>

//         {/* QR */}
//         <div className={styles.qrWrap}>
//           <div className={styles.qrBox}>
//             <img src={qrImg} alt="QR Code" className={styles.qrImg} />
//           </div>
//           <div className={styles.qrNote}>
//             Scan this QR code at the boarding gate
//           </div>
//         </div>

//         {/* CTAs */}
//         <div className={styles.ctaRow}>
//           <Button
//             variant="contained"
//             className={styles.primaryBtn}
//             startIcon={<DownloadIcon />}
//             onClick={onDownload}
//           >
//             Download Ticket
//           </Button>

//           <Button
//             variant="outlined"
//             className={styles.secondaryBtn}
//             startIcon={<VisibilityIcon />}
//             onClick={onView}
//           >
//             View Ticket
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useEffect, useMemo, useRef } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import styles from "../styles/payment/ConfirmBooking.module.css";

import FlightIcon from "@mui/icons-material/Flight";
import DownloadIcon from "@mui/icons-material/Download";
import VisibilityIcon from "@mui/icons-material/Visibility";

import qrImg from "../assets/qrimage.png";
import html2canvas from "html2canvas";
import { toast } from "react-toastify";

function formatDate(dt: string) {
  const d = new Date(dt);
  return d.toLocaleDateString(undefined, {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
function formatTime(dt: string) {
  return new Date(dt).toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });
}
function addMinutes(dt: string, mins: number) {
  const d = new Date(dt);
  d.setMinutes(d.getMinutes() + mins);
  return d;
}
function cityCode(city: string) {
  const token = (city || "").split(/[ (,-]/)[0];
  return token.slice(0, 3).toUpperCase();
}

export default function ConfirmBooking() {
  const navigate = useNavigate();
  const { selectedTrip, selectedSeats } = useSelector(
    (s: RootState) => s.trips
  );

  const ticketRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!selectedTrip) {
      navigate("/");
      return;
    }
    if (!selectedSeats || selectedSeats.length === 0) {
      navigate("/trip-details");
    }
  }, [selectedTrip, selectedSeats, navigate]);

  if (!selectedTrip || selectedSeats.length === 0) return null;

  const { from, to, dateTime, price } = selectedTrip;

  const departTime = formatTime(dateTime);
  const arrive = addMinutes(dateTime, 150);
  const arriveTime = arrive.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });

  const datePretty = formatDate(dateTime);

  const fromCode = cityCode(from);
  const toCode = cityCode(to);

  const total = useMemo(
    () => price * selectedSeats.length,
    [price, selectedSeats.length]
  );

  const bookingId = useMemo(
    () => "#TXN" + Math.random().toString(36).slice(2, 8).toUpperCase(),
    []
  );

  const onDownload = async () => {
    if (!ticketRef.current) {
      toast.error("Ticket not found!");
      return;
    }

    try {
      const canvas = await html2canvas(ticketRef.current, {
        useCORS: true,
        scale: 2,
      });

      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "ticket.png";
      link.click();

      toast.success("Ticket downloaded successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to download ticket!");
    }
  };

  const onView = () => {
    navigate("/ticket");
  };

  return (
    <div className={styles.canvas}>
      <div className={styles.topCheck}>
        <div className={styles.checkBadge}>✓</div>
      </div>
      <h2 className={styles.heading}>Booking Confirmed!</h2>
      <p className={styles.subhead}>
        Your trip is successfully booked. Enjoy your journey!
      </p>

      <div className={styles.card} >
        {/* Ticket Card with ref */}
        <div ref={ticketRef}>
          <div className={styles.cardHeader}>
            <div className={styles.headerLeft}>
              <div className={styles.headerTitle}>Flight Ticket</div>
              <div className={styles.headerSub}>Booking ID: {bookingId}</div>
            </div>
            <div className={styles.headerIcon}>
              <FlightIcon fontSize="small" />
            </div>
          </div>

          <div className={styles.routeRow}>
            <div className={styles.routeSide}>
              <div className={styles.code}>{fromCode}</div>
              <div className={styles.cityLine}>{from}</div>
              <div className={styles.time}>{departTime}</div>
            </div>

            <div className={styles.routeCenter}>
              <div className={styles.dots} />
              <FlightIcon className={styles.centerPlane} fontSize="small" />
              <div className={styles.dots} />
              <div className={styles.duration}>2h 30min</div>
            </div>

            <div className={styles.routeSideRight}>
              <div className={styles.code}>{toCode}</div>
              <div className={styles.cityLine}>{to}</div>
              <div className={styles.time}>{arriveTime}</div>
            </div>
          </div>

          <div className={styles.chipsRow}>
            <div className={styles.chip}>
              <div className={styles.chipLabel}>Date</div>
              <div className={styles.chipValue}>{datePretty}</div>
            </div>
            <div className={styles.chip}>
              <div className={styles.chipLabel}>Seats</div>
              <div className={styles.chipValue}>{selectedSeats.join(", ")}</div>
            </div>
          </div>

          <div className={styles.divider} />

          <div className={styles.totalRow}>
            <span className={styles.totalLabel}>Total Fare Paid</span>
            <span className={styles.totalAmount}>${total.toFixed(2)}</span>
          </div>

          <div className={styles.qrWrap}>
            <div className={styles.qrBox}>
              <img src={qrImg} alt="QR Code" className={styles.qrImg} />
            </div>
            <div className={styles.qrNote}>
              Scan this QR code at the boarding gate
            </div>
          </div>
        </div>

        {/* Buttons outside of ticket */}
        <div className={styles.ctaRow}>
          <Button
            variant="contained"
            className={styles.primaryBtn}
            startIcon={<DownloadIcon />}
            onClick={onDownload}
          >
            Download Ticket
          </Button>

          <Button
            variant="outlined"
            className={styles.secondaryBtn}
            startIcon={<VisibilityIcon />}
            onClick={onView}
          >
            View Ticket
          </Button>
        </div>
      </div>
    </div>
  );
}
