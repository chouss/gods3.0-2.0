import React, { useEffect, useRef } from 'react';

const CounterAnimation = () => {
  const participantsRef = useRef(null);
  const workshopsRef = useRef(null);
  const prizesRef = useRef(null);

  useEffect(() => {
    // Function to update the count from 0 to the specified number
    const updateCount = (elementRef, targetNumber, intervalDuration) => {
      let count = 0;
      const element = elementRef.current;

      const intervalId = setInterval(() => {
        element.textContent = count++;
        if (count > targetNumber) {
          clearInterval(intervalId);
          element.textContent = targetNumber;
        }
      }, intervalDuration);
    };

    // Specify the target numbers and interval durations for each circle
    const participantsTarget = 350;
    const workshopsTarget = 6;
    const prizesTarget = 1800;

    const participantsInterval = 20;
    const workshopsInterval = 100;
    const prizesInterval = 2;

    // Call the function for each circle with the specified interval duration
    updateCount(participantsRef, participantsTarget, participantsInterval);
    updateCount(workshopsRef, workshopsTarget, workshopsInterval);
    updateCount(prizesRef, prizesTarget, prizesInterval);

    // Wait for a delay and then recount simultaneously
    const delay = 10000; // 10 seconds delay
    setTimeout(() => {
      updateCount(participantsRef, participantsTarget, participantsInterval);
      updateCount(workshopsRef, workshopsTarget, workshopsInterval);
      updateCount(prizesRef, prizesTarget, prizesInterval);
    }, delay);

    // Add scroll event listeners using React useEffect
    const handleScroll = () => {
      const div_kbira1 = participantsRef.current;
      const div_kbira2 = workshopsRef.current;

      const scrollPosition = window.scrollY;
      const divPosition1 = div_kbira1.offsetTop;
      const divPosition2 = div_kbira2.offsetTop;

      if (scrollPosition + window.innerHeight > divPosition1) {
        div_kbira1.style.opacity = 1;
      }

      if (scrollPosition + window.innerHeight > divPosition2) {
        div_kbira2.style.opacity = 1;
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup: Remove event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures useEffect runs once on component mount

  return (
    <div>
      <div ref={participantsRef} id="participantsCount"></div>
      <div ref={workshopsRef} id="workshopsCount"></div>
      <div ref={prizesRef} id="prizesCount"></div>
    </div>
  );
};

export default CounterAnimation;