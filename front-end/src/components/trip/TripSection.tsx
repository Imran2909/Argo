// import { useEffect } from "react";
// import TripCard from "./TripCard";
// import styles from "../../styles/trip/TripSection.module.css";
// import { useDispatch, useSelector } from "react-redux";
// import { getTrips } from "../../redux/trips/actions";
// import type { AppDispatch, RootState } from "../../redux/store";
// import { CircularProgress } from "@mui/material";

// import atlantaImg from "../../assets/atlanta-miami.png";
// import chicagoImg from "../../assets/chicago-losangeles.png";
// import nyImg from "../../assets/newyork-boston.png";
// import type { TripData } from "../../redux/trips/actionTypes";

// const images = [atlantaImg, chicagoImg, nyImg];

// export default function TripSection() {
//   const dispatch = useDispatch<AppDispatch>();

//   const { trips, filteredTrips, isSearchApplied, loading, error } = useSelector(
//     (state: RootState) => state.trips
//   );

//   useEffect(() => {
//     dispatch(getTrips());
//   }, [dispatch]);

//   if (loading) {
//     return (
//       <section className={styles.tripSection}>
//         <div className={styles.headingBlock}>
//           <p className={styles.mainHeading}>Available Trips</p>
//           <p className={styles.subHeading}>Fetching latest trips...</p>
//         </div>
//         <div style={{ textAlign: "center", marginTop: "30px" }}>
//           <CircularProgress />
//         </div>
//       </section>
//     );
//   }

//   if (error) {
//     return (
//       <section className={styles.tripSection}>
//         <div className={styles.headingBlock}>
//           <p className={styles.mainHeading}>Available Trips</p>
//           <p className={styles.subHeading} style={{ color: "red" }}>
//             {error}
//           </p>
//         </div>
//       </section>
//     );
//   }

//   const displayTrips = isSearchApplied ? filteredTrips : trips;

//   return (
//     <section className={styles.tripSection}>
//       <div className={styles.headingBlock}>
//         <p className={styles.mainHeading}>Available Trips</p>
//         <p className={styles.subHeading}>
//           Choose from our carefully selected destinations and enjoy a
//           comfortable journey.
//         </p>
//       </div>

//       <div className={styles.tripGrid}>
//         {isSearchApplied && filteredTrips.length === 0 ? (
//           <p style={{ textAlign: "center", marginTop: "20px" }}>
//             No matching trips found
//           </p>
//         ) : (
//           displayTrips.map((t: TripData, index: number) => (
//             <TripCard
//               key={t._id}
//               title={`${t.from} → ${t.to}`}
//               imgSrc={images[index % images.length]}
//               price={t.price}
//               oldPrice={t.price + 30}
//               duration="4h 30min"
//               seats={t.totalSeats}
//               rating={Math.floor(Math.random() * 2) + 4}
//               date={new Date(t.dateTime).toDateString()}
//               reviews={Math.floor(Math.random() * 200) + 50}
//               popular={index % 2 === 0}
//               discount={index % 2 === 0 ? "25% OFF" : null}
//             />
//           ))
//         )}
//       </div>
//     </section>
//   );
// }










import { useEffect } from "react";
import TripCard from "./TripCard";
import styles from "../../styles/trip/TripSection.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getTrips } from "../../redux/trips/actions";
import type { AppDispatch, RootState } from "../../redux/store";
import { CircularProgress } from "@mui/material";

import atlantaImg from "../../assets/atlanta-miami.png";
import chicagoImg from "../../assets/chicago-losangeles.png";
import nyImg from "../../assets/newyork-boston.png";
import type { TripData } from "../../redux/trips/actionTypes";

const images = [atlantaImg, chicagoImg, nyImg];

export default function TripSection() {
  const dispatch = useDispatch<AppDispatch>();

  const {
    trips,
    filteredTrips,
    isSearchApplied,
    loading,
    error,
  } = useSelector((state: RootState) => state.trips);

  // ✅ Load trips only once
  useEffect(() => {
    dispatch(getTrips());
  }, [dispatch]);

  // ✅ Loading UI
  if (loading) {
    return (
      <section className={styles.tripSection}>
        <div className={styles.headingBlock}>
          <p className={styles.mainHeading}>Available Trips</p>
          <p className={styles.subHeading}>Fetching latest trips...</p>
        </div>
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <CircularProgress />
        </div>
      </section>
    );
  }

  // ✅ Error UI
  if (error) {
    return (
      <section className={styles.tripSection}>
        <div className={styles.headingBlock}>
          <p className={styles.mainHeading}>Available Trips</p>
          <p className={styles.subHeading} style={{ color: "red" }}>
            {error}
          </p>
        </div>
      </section>
    );
  }

  // ✅ Decide which trips to show
  const displayTrips =
    isSearchApplied && filteredTrips.length > 0
      ? filteredTrips
      : !isSearchApplied
      ? trips
      : [];

  return (
    <section className={styles.tripSection}>
      <div className={styles.headingBlock}>
        <p className={styles.mainHeading}>Available Trips</p>
        <p className={styles.subHeading}>
          Choose from our carefully selected destinations and enjoy a
          comfortable journey.
        </p>
      </div>

      <div className={styles.tripGrid}>
        {isSearchApplied && filteredTrips.length === 0 ? (
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            No matching trips found
          </p>
        ) : (
          displayTrips.map((t: TripData, index: number) => (
            <TripCard
              key={t._id}
              title={`${t.from} → ${t.to}`}
              imgSrc={images[index % images.length]}
              price={t.price}
              oldPrice={t.price + 30}
              duration="4h 30min"
              seats={t.totalSeats}
              rating={Math.floor(Math.random() * 2) + 4}
              date={new Date(t.dateTime).toDateString()}
              reviews={Math.floor(Math.random() * 200) + 50}
              popular={index % 2 === 0}
              discount={index % 2 === 0 ? "25% OFF" : null}
            />
          ))
        )}
      </div>
    </section>
  );
}
