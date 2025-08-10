"use client";
import type { Product } from "@/types/product";
import ReactStars from "react-stars";

const RatingSection = ({ rating }: { rating: Product["rating"] }) => {

    if (!rating) return null;
    return (
        <div className="flex items-center gap-3 text-sm text-gray-600">
              <div className="flex items-center gap-0.5 text-yellow-500">
              <ReactStars count={5} value={rating.rate} size={24} color2={'#ffd700'} edit={false} />
              </div>
              <span className="text-xs text-gray-500">
                {rating.count} reviews
              </span>
            </div>
    )
}

export default RatingSection;