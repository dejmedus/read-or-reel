
interface StarRatingProps {
    rating: number;
    // tracks which rating is being used so ratings can be normalized to the same scale
    isIMDB?: boolean;
  }
  // filled will be 0, 0.5, or 1 and is arg that Star is expecting, value will be set 
  // with fillAmount in the return
  function Star({ filled }: { filled: number }) { 
  // svg is a tag that uses math to draw shapes (Scalable Vector Graphics)
  // tailwind + svg specific classes determine size and shape
  // then set up gradients which are used to fill the stars
  // the path sets up coordinates to draw the shape of the start like connect the dots
    return (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`star-gradient-${filled}`}>
            <stop offset={`${filled * 100}%`} stopColor="#FCD34D" />
            <stop offset={`${filled * 100}%`} stopColor="#E5E7EB" />
          </linearGradient>
        </defs>
        <path
          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
          fill={`url(#star-gradient-${filled})`}
          stroke="#FCD34D"
          strokeWidth="1"
        />
      </svg>
    );
  }
  
  export default function StarRating({ rating, isIMDB = false }: StarRatingProps) {
    const normalizedRating = isIMDB ? rating / 2 : rating;
    // set the intital star array with all stars null, but the values don't matter, we are
    // just using the array to have refs for length and indices
    const stars = Array(5).fill(null);
    // _ is a js convention == map() recieves 2 args, but not going to use value, represented by _
    // only going to use index
    
    return (
      <div className="flex items-center">
        {stars.map((_, index) => {
          const starValue = index + 1;
          let fillAmount = 0;
  
          if (starValue <= normalizedRating) {
            fillAmount = 1; // full star
          } else if (starValue - 0.5 <= normalizedRating) {
            fillAmount = 0.5; // half star
          }
  
          return (
            <Star key={index} filled={fillAmount} />
          );
        })}
        <span className="ml-2 text-sm text-gray-600">
          ({rating.toFixed(1)})
        </span>
      </div>
    );
  }
  
  
  