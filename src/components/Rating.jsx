const Rating = ({ rating }) => {
  const roundedRating = Math.round(rating);

  return (
    <>
      <div className="mb-2">
        {" "}
        <span className="text-warning">
          {" "}
          {"★".repeat(roundedRating)} {"☆".repeat(5 - roundedRating)}{" "}
        </span>{" "}
        <span className="text-muted ms-2"> {rating} </span>{" "}
      </div>
    </>
  );
};

export default Rating;
