---
title: FocusFuel
---

This project was submitted to NatHacks 2024.

We built a webapp that helps an individual's focus levels. We targeted this problem in 2 approaches:
1) Helping one to get into a focus state from an unfocused state.
2) Informing an individual to take breaks from a focused state so their endurance can last longer and avoid burnout.

The main way we did this was using a Muse 2 Headband where we took the EEG data produced by the headset, fed it through the Fast Fourier Transformation Algorithm (FFT) and then got the resulting Beta/Alpha ratio to assess focus levels. To get individuals into a focused state, we created a drawing game, a puzzle game, and mediation exercises. If the user's focus level dipped below the optimal threshold, we also used Python to send desktop notifications out to the user indicating it was time to take a break. 

This was our first time using hardware to do anything basically so it came with a learning curve but we learnt a lot in the process! Understanding how to get the input from the Muse 2 Headset was challenging but we eventually found a Python library that did that. Another roadblock we ran into was transferring the data from the headset to our webapp which was built in React but we used WebSockets to work around that. 

Check out our Devpost [[here]](https://devpost.com/software/stayfocused-lfh4ku?ref_content=my-projects-tab&ref_feature=my_projects)

Check out our [[GitHub repo]](https://github.com/tiaari04/MindOverMatterWebsite/tree/main)


<div style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">
    <img src="/GroupPhotoNatHacks.JPG" alt="The Squad" style="max-width: 45%; height: auto;">
    <img src="/NatHacksSign.JPG" alt="The Big Sign" style="max-width: 45%; height: auto;">
</div>