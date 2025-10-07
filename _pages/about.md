---
permalink: /
title: "Zhuowei Yang"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
He is currently pursuing a Bachelor's Degree in Electrical Engineering,at School of Electrical Engineering and Automation,Hohai University(Project 211),China.

Research Interests
------
Video Generation, Digital Human Creation, Human-Centered 3D Vision.



Education
------
2023.09 -  now , [Hohai University](https://www.hhu.edu.cn/) , Nanjin, (GPA: 4.74/5, rank: 1/30).



Research Experience
------
**DEMO: Disentangled Motion Latent Flow Matching for Fine-Grained Controllable Talking Portrait Synthesis**<br />

*October 2024 - Present*

Project Overview: Developed DEMO, **an audio-driven talking-portrait video synthesis framework** based on flow-matching generative modeling, addressing the core challenges of poor temporal coherence and limited fine-grained motion control in existing diffusion-based methods. The framework constructs a structured disentangled motion latent space to achieve high-fidelity independent control of lip motion, head pose, and eye gaze, and generates audio-conditioned temporally smooth motion trajectories, ultimately enhancing video realism, lip-audio synchronization, and motion fidelity.

Key Contributions:
1. Proposed two technical innovations:
 - Designed **a Fine-Grained Controllable Motion Auto-Encoder**: First separates appearance and motion, using motion reconstruction loss, then applies motion-specific contrastive learning (eye gaze with cosine similarity-based contrastive loss, head pose with 3D face prior L1 loss, lip motion with audio-visual InfoNCE loss) to build an approximately orthogonal disentangled latent space for flexible facial dynamics manipulation.
 - Proposed an optimal-transport (OT)-based flow matching approach with a transformer predictor: The transformer-based vector-field predictor (adopting frame-wise adaptive layer normalization and masked self-attention over neighboring frames) to generate temporally consistent audio-driven motion trajectories efficiently.


2. Academic outputs:
 - Authored an academic conference paper detailing the DEMO framework, technical principles, and experimental results.


Achievements:
1. Mastered key technologies for audio-driven talking-portrait synthesis, including disentangled motion latent space construction, OT-based flow matching, and transformer-based conditional motion prediction.
2. Established a systematic understanding of the audio-driven talking-portrait video synthesis pipeline.
<br />
<br />



------
**Multifunctional Fiber-Optic Sensing Guidewire for Neurointerventional Assistance**  
*(Advisor: [Prof. Xing Sheng](http://web.ee.tsinghua.edu.cn/shengxing/zh_CN/index.htm), Department of Electronic Engineering, **Tsinghua University**)*<br />
*June 2024 - August 2024*  

Project Overview:
Developed a dual-modality sensing platform integrating:  
1. *Hemoglobin spectral sensing*: Achieved real-time blood oxygen saturation (SpO2) monitoring through differential absorption spectroscopy of oxyhemoglobin (HbO2) and deoxyhemoglobin (Hb)

2. *Fluorescent tracer velocimetry*: Implemented blood flow velocity measurement via time-resolved fluorescence tracking  

Key Contributions:  
1. Machine Learning–Driven Classification Pipeline  
- Extracted spectral biomarkers (peak intensities, absorption ratios) and dynamic fluorescence features (rise time, decay constants)
- Optimized fluorescence excitation/detection modules with lock-in amplification techniques  
2. Machine Learning-Driven Accuracy Enhancement   
- Developed end-to-end machine learning pipelines: Implemented spectral-spatiotemporal feature extraction (including wavelet transform for spectral features and time-series embedding for flow dynamics) and compared performance across algorithms (Random Forest, SVM, and lightweight CNN), selecting the optimal model based on cross-validation metrics   
- Addressed class imbalance in clinical data (via SMOTE augmentation) and minimized overfitting (through L1 regularization), resulting in **92.3% classification accuracy** for hemodynamic states. 
<br />
<br />



------
**Flexible Biosensing Platform for Protein Species Detection**  
*(Advisor: [Prof. Kewang Nan](https://person.zju.edu.cn/knan), **Zhejiang University**)*<br />
*January 2025 - February 2025*  

Project Overview:  
Developed a novel protein detection system featuring:  
1. *Chemoelectric transduction interface*: Implemented flexible electronic sensors as carrier platforms, leveraging protein-specific current response variations induced by molecular charge characteristics  
2. *Multimodal signal decoding*: Established correlations between protein chemical properties (isoelectric points, molecular weights) and impedance spectroscopy patterns  

Key Contributions:
1. Device Optimization  
 - Enhanced sensitivity through interdigitated electrode structural optimization  
 - Developed PDMS-based microfluidic channels for controlled protein delivery  

2. AI-Driven Analysis  
 - Developed a CNN-LSTM hybrid architecture: CNN layers extracted frequency-domain features from impedance spectra, while LSTM modules modeled temporal dynamics of current waveforms, enabling end-to-end learning of complex protein-signal relationships  
 - Addressed class overlap challenges via: (1) Contrastive learning for feature augmentation (increasing effective training samples by 3x); (2) Attention mechanisms to weight discriminative signal segments (e.g., 100-500Hz impedance bands for low-molecular-weight proteins)  
 - Achieved **96.7% accuracy** in differentiating 8 protein species (including albumin, IgG, and thrombin), outperforming traditional chemometric methods (PLS-DA, 78.2%) by 18.5%  
 - Validated generalizability across 3 independent datasets (n=420 samples) with <3% accuracy drop, demonstrating AI model's resilience to batch effects and environmental variations  



Publications
------
- **DEMO: Disentangled Motion Latent Flow Matching for Fine-Grained Controllable Talking Portrait Synthesis** (CCF-B Under Submission)



Email
------
zw.yang.04@gmail.com
