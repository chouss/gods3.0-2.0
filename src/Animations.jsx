import React, { useEffect } from 'react';

const YourComponent = () => {
  // Function to update the count from 0 to the specified number
  const updateCount = (elementId, targetNumber, intervalDuration) => {
    let count = 0;
    const element = document.getElementById(elementId);

    // Update the count at intervals until it reaches the target number
    const intervalId = setInterval(() => {
      element.textContent = count++;
      if (count > targetNumber) {
        clearInterval(intervalId);
        element.textContent = targetNumber; // Ensure the final count is the target number
      }
    }, intervalDuration); // Adjust the interval duration as needed
  };

  // Specify the target numbers and interval durations for each circle
  const participantsTarget = 350;
  const workshopsTarget = 6;
  const prizesTarget = 1800;

  const participantsInterval = 20;
  const workshopsInterval = 100;
  const prizesInterval = 2; // Faster interval for "Prizes"

  // Call the function for each circle with the specified interval duration
  useEffect(() => {
    updateCount('participantsCount', participantsTarget, participantsInterval);
    updateCount('workshopsCount', workshopsTarget, workshopsInterval);
    updateCount('prizesCount', prizesTarget, prizesInterval);
  }, []);

  // Wait for a delay and then recount simultaneously
  const delay = 10000; // 10 seconds delay
  useEffect(() => {
    const recountSimultaneously = () => {
      updateCount('participantsCount', participantsTarget, participantsInterval);
      updateCount('workshopsCount', workshopsTarget, workshopsInterval);
      updateCount('prizesCount', prizesTarget, prizesInterval);
    };

    const timeoutId = setTimeout(recountSimultaneously, delay);

    // Clear the timeout on component unmount to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []);

  // Scroll event listener for div_kbira1
  const handleScroll1 = () => {
    const div_kbira1 = document.getElementById('div_kbira1');
    const scrollPosition = window.scrollY;
    const divPosition = div_kbira1.offsetTop;

    if (scrollPosition + window.innerHeight > divPosition) {
      div_kbira1.style.opacity = 1;
    }
  };

  // Scroll event listener for div_kbira2
  const handleScroll2 = () => {
    const div_kbira2 = document.getElementById('div_kbira2');
    const scrollPosition = window.scrollY;
    const divPosition = div_kbira2.offsetTop;

    if (scrollPosition + window.innerHeight > divPosition) {
      div_kbira2.style.opacity = 1;
    }
  };

  // Add scroll event listeners on component mount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll1);
    window.addEventListener('scroll', handleScroll2);

    // Remove scroll event listeners on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll1);
      window.removeEventListener('scroll', handleScroll2);
    };
  }, []);

  return (
    <div>
      {/* Your JSX content goes here */}
    </div>
  );
};

export default YourComponent;
