'use client';
import { useState } from 'react';
import './Timeline.css'; // Pastikan untuk mengimpor file CSS Anda

const Timeline = () => {
  const [activeStep, setActiveStep] = useState(null); // State untuk menyimpan langkah aktif

  const handleStepClick = (step) => {
    setActiveStep(step); // Atur langkah aktif saat langkah diklik
  };

  return (
    <>
      <ul className="steps">
        <li data-content="" className="step step-neutral" onClick={() => handleStepClick(1980)}>1980</li>
        <li data-content="" className="step step-neutral" onClick={() => handleStepClick(1977)}>Step 2</li>
        <li data-content="" className="step step-neutral" onClick={() => handleStepClick(2001)}>Step 3</li>
        <li data-content="" className="step step-neutral" onClick={() => handleStepClick(5000)}>Step 4</li>
        <li data-content="" className="step step-neutral" onClick={() => handleStepClick(5211)}>Step 5</li>
      </ul>

      {/* Kotak informasi yang muncul saat langkah diklik */}
      {activeStep && (
        <div className="info-box" onClick={() => setActiveStep(null)}>
          <h3>Info untuk Step {activeStep}</h3>
          <p>Ini adalah konten untuk Step {activeStep}.</p>
          <img src={`https://via.placeholder.com/150?text=Step+${activeStep}`} alt={`Step ${activeStep}`} />
        </div>
      )}
    </>
  );
};

export default Timeline;
