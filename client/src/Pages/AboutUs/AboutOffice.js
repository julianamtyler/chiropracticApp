import React from 'react';
import './aboutUsStyles.css';

const AboutOffice = () =>(
    <div>
<div className="about">
    <div className="title">What is Chiropractic?</div>
    <p>
    Chiropractors use hands-on, or instrument assisted spinal manipulation to properly align the spine.
    Manipulation is used to restore mobility of restricted joints which can be caused by repetitive stress,
    previous injury or improper posture. Chiropractic provides medication-free, non-surgical treatment
    methods for low back pain, neck pain, and headaches.
    </p>
   </div>
   <div className="about two">
    <div className="title">What is Chiropractic Neurology?</div>
    <p>
    Chiropractic neurologists are chiropractors who have continued with advanced post graduate studies to
    specialize in this area. Unlike medical neurologist or neurosurgeons, chiropractors provide an alternative
    treatment for conditions without the use of surgery or medication.
    </p>
    <div className="title">What conditions Chiropractic Neurology?</div>
        <ol>
            <li>Migraine</li>
            <li>Tension Headaches</li>
            <li>Chronic Pain</li>
            <li>Vertigo</li>
            <li>Head injury and Stroke</li>
            <li>Balance Disorders</li>
            <li>Movement Disorders</li>
            <li>Diabetic Neuronopathy</li>
        </ol>

</div>
</div>
)

export default AboutOffice;