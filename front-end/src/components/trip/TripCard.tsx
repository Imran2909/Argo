import { useDispatch } from "react-redux";
import { setSelectedTrip } from "../../redux/trips/actions"; // adjust path
import styles from "../../styles/trip/TripCard.module.css";
import { MdAccessTimeFilled, MdGroups2 } from "react-icons/md";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
  imgSrc: string;
  price: number;
  oldPrice?: number | null;
  duration: string;
  seats: number;
  rating: number;
  date: string;
  reviews: number;
  popular?: boolean;
  discount?: string | null;
}

export default function TripCard({
  title,
  imgSrc,
  price,
  oldPrice,
  duration,
  seats,
  rating,
  date,
  reviews,
  popular,
  discount,
}: Props) {

const dispatch = useDispatch();
const navigate = useNavigate()

const handleBook = () => {
dispatch(
  setSelectedTrip({
    _id: "",              // or pass actual trip._id if available
    from: title.split(" to ")[0] || "",  // TEMP mapping since no 'from'
    to: title.split(" to ")[1] || "",    // TEMP mapping since no 'to'
    dateTime: date,       // you're already passing this prop
    price: price,         // from existing props
    totalSeats: seats,    // matching TripData.totalSeats
    img:imgSrc
  })
);

  navigate("/trip-details");
};


  return (
    <article className={styles.card} aria-label={title}>
      <div className={styles.imageWrap}>
        <img src={imgSrc} alt={title} className={styles.image} />
        {popular && <div className={styles.popularTag}>Popular</div>}
        {discount && <div className={styles.discountTag}>{discount}</div>}
      </div>

      <div className={styles.details}>
        <div className={styles.reviews}>
          <span className={styles.stars}>
            {[...Array(5)].map((_, index) => {
              const starValue = index + 1;
              return (
                <span key={index}>
                  {starValue <= Math.floor(rating) ? (
                    <FaStar className={styles.fullStar} />
                  ) : starValue === Math.ceil(rating) && rating % 1 >= 0.5 ? (
                    <FaStar className={styles.halfStar} /> // Optional half (or use full for simplicity)
                  ) : (
                    <FaRegStar className={styles.emptyStar} />
                  )}
                </span>
              );
            })}
          </span>
          <span className={styles.reviewCount}>&nbsp;({reviews} reviews)</span>
        </div>

        <h3 className={styles.title}>{title}</h3>

        <div className={styles.infoList}>
          <div className={styles.infoItem}>
            <MdAccessTimeFilled className={styles.icon} />{" "}
            <span>{duration}</span>
          </div>
          <div className={styles.infoItem}>
            <MdGroups2 className={styles.icon} />{" "}
            <span>{seats} seats available</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.icon}>📅</span> <span>{date}</span>
          </div>
        </div>

        <div className={styles.priceRow}>
          <div className={styles.amountRow}>
            <div className={styles.amount}>${price}</div>
            {oldPrice && <div className={styles.oldAmount}>${oldPrice}</div>}
          </div>

          <button
            className={styles.bookBtn}
            aria-label={`Book ${title}`}
            onClick={handleBook}
          >
            Book Now
          </button>
        </div>
      </div>
    </article>
  );
}
