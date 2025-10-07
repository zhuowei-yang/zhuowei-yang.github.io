---
permalink: /
title: "Zhuowei Yang"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I am currently pursuing a Bachelor's Degree in Electrical Engineering,at School of Electrical Engineering and Automation,Hohai University(Project 211),China.

Research Interests
------
Video Generation, Digital Human Creation, Human-Centered 3D Vision.



Education
------
2023.09 -  now , [Hohai University](https://www.hhu.edu.cn/) , Nanjin, (GPA: 4.74/5, rank: 1/30).


Publications
------
📕 Papers

<!-- 样式：字体缩小、图片放大、移动端适配 -->
<style>
  .pub-item {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    margin: 14px 0 20px 0;
  }
  .pub-item img {
    width: 400px; /* 调整图片宽度 */
    max-width: 45vw;
    height: auto;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
  }
  .pub-meta {
    flex: 1;
    font-size: 0.9em; /* 调整文字整体大小 */
    line-height: 1.5;
  }
  .pub-meta p {
    margin: 0 0 6px 0;
  }
  .pub-meta ul {
    margin: 6px 0 0 18px;
  }
  /* 移动端自动换行 */
  @media (max-width: 640px) {
    .pub-item {
      flex-direction: column;
    }
    .pub-item img {
      width: 100%;
      max-width: 100%;
    }
  }
</style>

<div class="pub-item">
  <!-- 图片路径改成你仓库里实际的位置 -->
  <img src="{{ '/images/paper-1.png' | relative_url }}" alt="DEMO Paper Cover">

  <div class="pub-meta">
    <p>
      <strong>DEMO: Disentangled Motion Latent Flow Matching for Fine-Grained Controllable Talking Portrait Synthesis</strong><br/>
      <em>(CCF-B Under Submission)</em>
    </p>
    <ul>
      <li>Designed a motion auto-encoder that constructs a disentangled, fine-grained motion latent space, enabling independent control over lip motion, head pose, and eye gaze.</li>
      <li>Introduced OT-based flow matching with a transformer predictor to efficiently sample temporally consistent motion trajectories across consecutive frames.</li>
    </ul>
  </div>
</div>




Research Experience
------
**Multifunctional Fiber-Optic Sensing Guidewire for Neurointerventional Assistance**  
*(Advisor: [Prof. Xing Sheng](http://web.ee.tsinghua.edu.cn/shengxing/zh_CN/index.htm), Department of Electronic Engineering, **Tsinghua University**)*<br />
*June 2024 - August 2024*  

Project Overview: Developed a dual-modality sensing platform integrating:  
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

Project Overview: Developed a novel protein detection system featuring:  
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


Email
------
zw.yang.04@gmail.com
