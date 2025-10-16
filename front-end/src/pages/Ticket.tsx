import { useEffect, useMemo, useRef } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";

import styles from "../styles/trip/Ticket.module.css";

import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import FlightIcon from "@mui/icons-material/Flight";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";

import html2canvas from "html2canvas";
import { toast } from "react-toastify";

import avatarImg from "../assets/atlanta-miami.png";   // using your local asset as avatar/thumbnail
import barcodeImg from "../assets/barcode.png";        // simple barcode image
import routeImg from "../assets/route.png";            // right-side route illustration

function fmtDate(dt: string) {
  const d = new Date(dt);
  return d.toLocaleDateString(undefined, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
function fmtTime(dt: string) {
  return new Date(dt).toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });
}
function plusMinutes(dt: string, mins: number) {
  const d = new Date(dt);
  d.setMinutes(d.getMinutes() + mins);
  return d.toISOString();
}

export default function TicketPage() {
  const navigate = useNavigate();
  const { selectedTrip, selectedSeats } = useSelector(
    (s: RootState) => s.trips
  );

  // redirect safety
  useEffect(() => {
    if (!selectedTrip) navigate("/");
  }, [selectedTrip, navigate]);

  if (!selectedTrip) return null;

  const { from, to, dateTime, price } = selectedTrip;
  const seats = selectedSeats?.length ? selectedSeats.join(", ") : "-";
  const total = useMemo(
    () => (selectedSeats?.length ?? 0) * price,
    [price, selectedSeats]
  );

  const depart = fmtTime(dateTime);
  const arrive = fmtTime(plusMinutes(dateTime, 150));
  const datePretty = fmtDate(dateTime);

  // passenger name (prefer selectedTrip.passengerName; fallback)
  const passengerName = selectedTrip.passengerName || "James Doe";

  // ref for download (left ticket card only, like the mock)
  const ticketRef = useRef<HTMLDivElement | null>(null);

  const onDownload = async () => {
    if (!ticketRef.current) {
      toast.error("Ticket not found!");
      return;
    }
    try {
      const canvas = await html2canvas(ticketRef.current, {
        useCORS: true,
        scale: 2,
        backgroundColor: "#ffffff",
      });
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "ticket.png";
      link.click();
      toast.success("Ticket downloaded successfully!");
    } catch (err) {
      toast.error("Failed to download ticket!");
    }
  };

  return (
    <div className={styles.page}>
      {/* Header: title + address (left), price + download (right) */}
      <div className={styles.headRow}>
        <div className={styles.headLeft}>
          <div className={styles.title}>Emirates A380 Airbus</div>
          <div className={styles.addr}>
            <FmdGoodOutlinedIcon fontSize="small" />
            <span>Gümüssuyu Mah. İnönü Cad. No:8, Istanbul 34437</span>
          </div>
        </div>

        <div className={styles.headRight}>
          <div className={styles.price}>${total.toFixed(0)}</div>
          <Button
            variant="contained"
            className={styles.downloadBtn}
            startIcon={<DownloadIcon />}
            onClick={onDownload}
          >
            Download
          </Button>
        </div>
      </div>

      {/* Main block: left ticket (captured), right route card */}
      <div className={styles.mainRow}>
        {/* LEFT: the actual ticket card */}
        <div className={styles.ticketCard} ref={ticketRef}>
          {/* Left time rail */}
          <div className={styles.timeCol}>
            <div className={styles.bigTime}>{depart}</div>
            <div className={styles.cityTiny}>{from}</div>

            <div className={styles.axisWrap}>
              <span className={styles.axisDot} />
              <span className={styles.axisLine} />
              <FlightIcon className={styles.axisPlane} />
              <span className={styles.axisLine} />
              <span className={styles.axisDot} />
            </div>

            <div className={styles.bigTime}>{arrive}</div>
            <div className={styles.cityTiny}>{to}</div>
          </div>

          {/* Right ticket body */}
          <div className={styles.ticketBody}>
            {/* Blue header */}
            <div className={styles.blueBar}>
              <div className={styles.userLeft}>
                <img src={avatarImg} alt="avatar" className={styles.avatar} />
                <div>
                  <div className={styles.userName}>{passengerName}</div>
                  <div className={styles.userSub}>Boarding Pass N°123</div>
                </div>
              </div>
              <div className={styles.cabin}>Business Class</div>
            </div>

            {/* Chips row */}
            <div className={styles.chipsRow}>
              <div className={styles.chip}>
                <CalendarMonthIcon fontSize="small" />
                <div>
                  <div className={styles.chipLabel}>Date</div>
                  <div className={styles.chipValue}>{datePretty}</div>
                </div>
              </div>

              <div className={styles.chip}>
                <AccessTimeIcon fontSize="small" />
                <div>
                  <div className={styles.chipLabel}>Flight time</div>
                  <div className={styles.chipValue}>12:00</div>
                </div>
              </div>

              <div className={styles.chip}>
                <MeetingRoomIcon fontSize="small" />
                <div>
                  <div className={styles.chipLabel}>Gate</div>
                  <div className={styles.chipValue}>A12</div>
                </div>
              </div>

              <div className={styles.chip}>
                <AirlineSeatReclineNormalIcon fontSize="small" />
                <div>
                  <div className={styles.chipLabel}>Seat</div>
                  <div className={styles.chipValue}>{seats}</div>
                </div>
              </div>
            </div>

            {/* Airline + barcode */}
            <div className={styles.airRow}>
              <div className={styles.airLeft}>
                <div className={styles.airCode}>EK</div>
                <div className={styles.airSub}>ABC12345</div>
              </div>
              <img src={barcodeImg} alt="barcode" className={styles.barcode} />
            </div>
          </div>
        </div>

        {/* RIGHT: Route illustration card */}
        <div className={styles.routeCard}>
          <img src={routeImg} alt="route" className={styles.routeImg} />
        </div>
      </div>

      {/* Terms & Conditions */}
      <div className={styles.termsBlock}>
        <div className={styles.sectionTitle}>Terms and Conditions</div>

        <div className={styles.subTitle}>Payments</div>
        <ul className={styles.bullets}>
          <li>
            If you are purchasing your ticket using a debit or credit card via
            the Website, we will process these payments via the automated secure
            common payment gateway which will be subject to fraud screening
            purposes.
          </li>
          <li>
            If you do not supply the correct card billing address and/or
            cardholder information, your booking will not be confirmed and the
            overall cost may increase. We reserve the right to cancel your
            booking if payment is declined for any reason or if you have
            supplied incorrect card information. If we become aware of, or are
            notified of, any fraud or illegal activity associated with the
            payment for the booking, the booking will be cancelled and you will
            be liable for all costs and expenses arising from such
            cancellation, without prejudice to any action that we may take
            against us.
          </li>
          <li>
            Argo may require the card holder to provide additional payment
            verification upon request by either submitting an online form or
            visiting the nearest Argo office, or at the airport at the time of
            check-in. Argo reserves the right to deny boarding or to collect a
            guarantee payment if the original payment has been withheld or
            disputed by the card issuing bank.
          </li>
        </ul>

        <div className={styles.subTitle}>Contact Us</div>
        <div className={styles.contactLines}>
          <div>Argo Group Q.C.S.C</div>
          <div>Argo Tower</div>
          <div>P.O. Box: 22550</div>
          <div>Doha, State of Qatar</div>
          <div>
            Further contact details can be found at{" "}
            <a href="#" onClick={(e) => e.preventDefault()}>
              argo.com/help
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
