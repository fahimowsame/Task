import React from 'react';
import { FaStar } from 'react-icons/fa';
import './style.css'

const feedbacks = [
  {
    name: 'Jenny Wilson',
    rating: 5,
    comment: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome, I had a burger and greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.',
  },
  {
    name: 'Dianne Russell',
    rating: 5,
    comment: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.',
  },
  {
    name: 'Devon Lane',
    rating: 4,
    comment: 'Normally wines are wines, but theirs are lean meaty and tender and go extremely well with the food.',
  },
];

const FeedbackList = () => (
  <div className="bg-gray-700 p-4 rounded-lg custom-scrollbar">
    <div className="text-lg font-semibold">Customer's Feedback</div>
    <div className="mt-2">
      {feedbacks.map(feedback => (
        <div key={feedback.name} className="mt-2">
          <div className="flex items-center">
            {/* Render filled stars */}
            {Array(feedback.rating).fill().map((_, i) => (
              <FaStar key={`filled-${i}`} className="text-yellow-400" />
            ))}
            {/* Render border stars */}
            {Array(5 - feedback.rating).fill().map((_, i) => (
              <FaStar key={`border-${i}`} className="text-white" />
            ))}
          </div>
          <div>{feedback.name}</div>
          <div className="text-sm">{feedback.comment}</div>
        </div>
      ))}
    </div>
  </div>
);

export default FeedbackList;
