import React from 'react';

const TimeSlotPicker = ({ selectedTime, onSelectTime }) => {
  const timeSlots = [
    '9:00 AM - 11:00 AM',
    '11:00 AM - 13:00 AM',
    
    '15:00 PM - 17:00 PM',
    '17:00 PM - 19:00 PM',
    
  ];

  return (
    <div className="space-y-3">
      <label className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white">
        Available Time Slots
      </label>
      <select
        className="flex h-10 w-full rounded-md border border-input input-white px-4 py-2 text-base ring-offset-background placeholder:text-gray-400 text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        value={selectedTime}
        onChange={(e) => onSelectTime(e.target.value)}
      >
        <option value="" className="text-gray-400">Select a time slot</option>
        {timeSlots.map((slot) => (
          <option key={slot} value={slot} className="text-black">
            {slot}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TimeSlotPicker;
