This project was submitted to [HackED 2025](https://devpost.com/software/sightsense-hoyi1d?_gl=1*12preps*_gcl_au*MTg0NDU4MDU4LjE3MzcyNjEzOTY.*_ga*NTYxNzM1Mjc5LjE3MzcyNjEzOTY.*_ga_0YHJK3Y10M*MTc0MDAyMTQ0MS45LjEuMTc0MDAyMTQ0Ny4wLjAuMA..) and won 2nd place in the DivE Category (Diversity in Engineering).

SightSense is a device with 2 components:
1) AI-Powered Object Recognition with Speech Integration: We leveraged [OpenCV](https://opencv.org/) and [TensorFlow’s COCO Object Recognition API](https://tensorflow-object-detection-api-tutorial.readthedocs.io/en/latest/) for real-time object detection and integrated Python speech recognition libraries for voice interaction.

2) Arduino-Based Crash Detection System
Using an ultrasonic sensor, active buzzer, and a 9V battery, we built a portable device that alerts users with sound when they are about to collide with an object.

None of us had any Arduino experience (we are all computer science majors) so we had to learn the basics of circuits and electricity while learning how to use an Arduino. I vividly remember pulling out my iPad and doing [[Ohm's Law]] to calculate what type of resistor we need. 

On the other hand, the computer vision component was also a learning curve as we had to learn the basics of using a pre-trained model with Tensorflow. The most challenging aspect was connecting the speech recognition with the visual object recognition model to produce our final product. In fact, we ended up having to use multithreading to do so (shoutout to [[CMPUT 379]](https://apps.ualberta.ca/catalogue/course/cmput/379) lectures for saving the day). Who knew paying attention in class could come in handy during a hackathon? 

Here is the demo video on [[Youtube]](https://www.youtube.com/watch?v=Jasby95lXDI)

Check out the [[website]](https://hackedproject.netlify.app/) we built to showcase it! 

Check out the [[Github repo]](https://github.com/DivyaPrasad05/HackED2025)

<div style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">
    <img src="/Arduino Pic.jpg" alt="Arduino Component" style="max-width: 45%; height: auto;">
    <img src="/Group Photo HackED.JPG" alt="Our Team" style="max-width: 45%; height: auto;">
</div>

