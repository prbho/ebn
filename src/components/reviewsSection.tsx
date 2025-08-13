import React, { useState } from "react";
import { Star, Quote, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Review, reviews } from "@/data";
import Image from "next/image";

const ReviewsSection: React.FC = () => {
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);

  const renderStars = (rating: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));

  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-pt-serif">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Don&apos;t just take our word for it — here&apos;s what our
            satisfied customers have to say.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid gap-6 md:grid-cols-3 auto-rows-fr">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              className={`relative group cursor-pointer ${
                index === 0 || index === 7 ? "md:row-span-2" : ""
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              viewport={{ once: true }}
              onClick={() => setSelectedReview(review)}>
              <div
                className={`bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 h-full ${
                  index === 0
                    ? "border-l-4 border-red-500"
                    : " hover:border-red-200"
                }
                ${
                  index === 7
                    ? "border-r-4 border-red-500"
                    : " hover:border-red-200"
                }
                
                
                `}>
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 overflow-hidden flex items-center justify-center test-red-600 text-white font-semibold bg-gradient-to-br from-red-500 to-red-600 rounded-full">
                      {review.avatar.startsWith("/") ? (
                        <Image
                          src={review.avatar}
                          alt={review.name}
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      ) : (
                        review.avatar
                      )}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {review.name}
                      </h4>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="w-3 h-3 mr-1" />
                        {review.location}
                      </div>
                    </div>
                  </div>
                  <Quote className="w-5 h-5 text-red-200" />
                </div>

                {/* Rating + Date */}
                <div className="flex items-center mb-3">
                  <div className="flex mr-2">{renderStars(review.rating)}</div>
                  <span className="text-sm text-gray-500 flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {review.date}
                  </span>
                </div>

                {/* Title & Excerpt */}
                <h3
                  className={`font-semibold text-gray-800 mb-2 ${
                    index === 0 ? "text-lg" : "text-sm"
                  }`}>
                  {review.title}
                </h3>
                <p
                  className={`text-gray-600 leading-relaxed ${
                    index === 0 ? "text-sm" : "text-xs line-clamp-3"
                  }`}>
                  {review.excerpt}
                </p>

                {/* Read more */}
                {index === 0 ||
                  (index === 7 && (
                    <div className="mt-4 text-sm text-red-600 font-medium hover:text-red-700 transition-colors">
                      Read full review →
                    </div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {selectedReview && (
          <motion.div
            className="fixed inset-0 bg-black/80 bg-opacity-50 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedReview(null)}>
            <motion.div
              className="bg-white rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}>
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                    {selectedReview.avatar}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {selectedReview.name}
                    </h3>
                    <div className="flex items-center text-gray-500 mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      {selectedReview.location}
                    </div>
                    <div className="flex items-center">
                      <div className="flex mr-2">
                        {renderStars(selectedReview.rating)}
                      </div>
                      <span className="text-sm text-gray-500">
                        {selectedReview.date}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedReview(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl">
                  ×
                </button>
              </div>

              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                {selectedReview.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {selectedReview.fullReview}
              </p>

              {selectedReview.link && (
                <a
                  href={selectedReview.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center text-sm text-blue-500 hover:underline">
                  Read on Google
                </a>
              )}

              <div className="mt-6 pt-6 border-t border-gray-200">
                <motion.button
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-6 py-2 rounded-lg font-semibold transition-colors"
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedReview(null)}>
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ReviewsSection;
