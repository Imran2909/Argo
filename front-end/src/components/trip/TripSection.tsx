// import React, { useEffect } from "react";
// import TripCard from "./TripCard";
// import styles from "../../styles/trip/TripSection.module.css";
// import { useDispatch, useSelector } from "react-redux";
// import { getTrips } from "../../redux/trips/actions";
// import type { AppDispatch, RootState } from "../../redux/store";
// import { CircularProgress } from "@mui/material";

// // ✅ Import 3 available images
// import atlantaImg from "../../assets/atlanta-miami.png";
// import chicagoImg from "../../assets/chicago-losangeles.png";
// import nyImg from "../../assets/newyork-boston.png";

// const images = [atlantaImg, chicagoImg, nyImg];

// export default function TripSection() {
//   const dispatch = useDispatch<AppDispatch>();
//   const { trips, loading, error } = useSelector(
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
//         {trips.length > 0 ? (
//           trips.map((t: any, index: number) => (
//             <TripCard
//               key={t._id}
//               title={`${t.from} → ${t.to}`}
//               imgSrc={images[index % images.length]} // ✅ random image
//               price={t.price}
//               oldPrice={t.price + 30} // ✅ dummy old price
//               duration="4h 30min" // ✅ dummy duration
//               seats={t.totalSeats}
//               rating={Math.floor(Math.random() * 2) + 4} // ✅ 4 or 5
//               date={new Date(t.dateTime).toDateString()} // ✅ format date
//               reviews={Math.floor(Math.random() * 200) + 50} // ✅ random reviews
//               popular={index % 2 === 0} // ✅ mark every 2nd as popular
//               discount={index % 2 === 0 ? "25% OFF" : null} // ✅ apply randomly
//             />
//           ))
//         ) : (
//           <p>No trips available</p>
//         )}
//       </div>
//     </section>
//   );
// }






import React, { useEffect } from "react";
import TripCard from "./TripCard";
import styles from "../../styles/trip/TripSection.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getTrips } from "../../redux/trips/actions";
import type { AppDispatch, RootState } from "../../redux/store";
import { CircularProgress } from "@mui/material";

// ✅ Import 3 available images
import atlantaImg from "../../assets/atlanta-miami.png";
import chicagoImg from "../../assets/chicago-losangeles.png";
import nyImg from "../../assets/newyork-boston.png";

const images = [atlantaImg, chicagoImg, nyImg];

export default function TripSection() {
  const dispatch = useDispatch<AppDispatch>();

  const { trips, filteredTrips, loading, error } = useSelector(
    (state: RootState) => state.trips
  );

  useEffect(() => {
    dispatch(getTrips());
  }, [dispatch]);

  // ✅ While loading
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

  // ✅ On error
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

  // ✅ Use filtered trips if search applied
  const list = filteredTrips.length > 0 ? filteredTrips : trips;

  return (
    <section className={styles.tripSection}>
      <div className={styles.headingBlock}>
        <p className={styles.mainHeading}>Available Trips</p>
        <p className={styles.subHeading}>
          Choose from our carefully selected destinations and enjoy a comfortable journey.
        </p>
      </div>

      <div className={styles.tripGrid}>
        {list.length > 0 ? (
          list.map((t: any, index: number) => (
            <TripCard
              key={t._id}
              title={`${t.from} → ${t.to}`}
              imgSrc={images[index % images.length]} // ✅ random image
              price={t.price}
              oldPrice={t.price + 30} // ✅ dummy old price
              duration="4h 30min" // ✅ dummy duration
              seats={t.totalSeats}
              rating={Math.floor(Math.random() * 2) + 4} // ✅ 4 or 5
              date={new Date(t.dateTime).toDateString()} // ✅ formatted date
              reviews={Math.floor(Math.random() * 200) + 50} // ✅ random reviews
              popular={index % 2 === 0} // ✅ mark every 2nd as popular
              discount={index % 2 === 0 ? "25% OFF" : null} // ✅ random discount
            />
          ))
        ) : (
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            No matching trips found
          </p>
        )}
      </div>
    </section>
  );
}
