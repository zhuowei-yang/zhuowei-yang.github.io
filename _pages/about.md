---
permalink: /
title: "Zhuowei Yang"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<style>
  .pub-item {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin: 16px 0 28px 0;
  }
  .pub-item img {
    width: 100%;
    max-width: 720px;
    height: auto;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  .pub-meta { line-height: 1.6; }
  .pub-meta p { margin: 0 0 6px 0; }
  .pub-meta ul { margin: 6px 0 0 18px; }
</style>

I am currently pursuing a Bachelor's Degree in Electrical Engineering at School of Electrical Engineering and Automation, Hohai University (Project 211), China.

## Research Interests

Talking Portrait Synthesis, Co-Speech Gesture Generation, Digital Human Creation, Generative Models (Flow Matching & Diffusion).

## Education

2023.09 - Present, [Hohai University](https://www.hhu.edu.cn/), Nanjing (GPA: 4.74/5, Rank: 1/30).

## Publications

<div class="pub-item">
  <img src="{{ '/images/paper-1.png' | relative_url }}" alt="DEMO Paper Cover">
  <div class="pub-meta">
    <p>
      <strong><a href="https://arxiv.org/abs/2510.10650">DEMO: Disentangled Motion Latent Flow Matching for Fine-Grained Controllable Talking Portrait Synthesis</a></strong><br/>
      <em>IJCNN 2026 (CCF-C)</em><br/>
      <em>(Advisor: Prof. Peiyin Chen, Hohai University)</em>
    </p>
    <ul>
      <li>Designed a motion auto-encoder that constructs a disentangled, fine-grained motion latent space, enabling independent control over lip motion, head pose, and eye gaze.</li>
      <li>Introduced OT-based flow matching with a transformer predictor to efficiently sample temporally consistent motion trajectories across consecutive frames.</li>
    </ul>
  </div>
</div>

---

<div class="pub-item">
  <img src="{{ '/images/paper-2.png' | relative_url }}" alt="SyncGesture Pipeline">
  <div class="pub-meta">
    <p>
      <strong>SyncGesture: Dialogue-Adaptive Dyadic Gesture Synthesis with Rhythm and Interaction Awareness</strong><br/>
      <em>CCF-A (Under Submission)</em><br/>
      <em>(Advisor: Prof. Zhaoxin Fan, Beihang University)</em>
    </p>
    <ul>
      <li>Built the TSD-Gesture dataset with 1,620 dyadic clips (~11 hours) covering 5 dialogue-state annotations — the first benchmark featuring real conversational turn-taking with dialogue-state labels for co-speech gesture research.</li>
      <li>Designed a harmonic spectral prior that extracts periodic structures from motion features via learnable frequency-domain filtering, combined with MoE expert networks to produce interpretable periodic parameters for rhythm-coherent motion enhancement.</li>
      <li>Proposed a conversation-adaptive interaction module using dual cross-attention to extract companion interaction features and dialogue-state features, with per-frame softmax gating to dynamically balance self-motion, partner influence, and dialogue-state information.</li>
      <li>Achieved SOTA performance on FGD, BC, and Diversity metrics.</li>
    </ul>
  </div>
</div>

## Research Experience

**Multifunctional Fiber-Optic Sensing Guidewire for Neurointerventional Assistance**  
*(Advisor: [Prof. Xing Sheng](http://web.ee.tsinghua.edu.cn/shengxing/zh_CN/index.htm), Department of Electronic Engineering, **Tsinghua University**)*  
*June 2024 - August 2024*

Developed a dual-modality sensing platform integrating hemoglobin spectral sensing for real-time SpO2 monitoring and fluorescent tracer velocimetry for blood flow measurement.

- Extracted spectral biomarkers and dynamic fluorescence features; optimized excitation/detection modules with lock-in amplification techniques.
- Developed end-to-end ML pipelines with spectral-spatiotemporal feature extraction (wavelet transform + time-series embedding), comparing Random Forest, SVM, and lightweight CNN.
- Addressed class imbalance (SMOTE) and overfitting (L1 regularization), achieving **92.3% classification accuracy** for hemodynamic states.

---

**Flexible Biosensing Platform for Protein Species Detection**  
*(Advisor: [Prof. Kewang Nan](https://person.zju.edu.cn/knan), **Zhejiang University**)*  
*January 2025 - February 2025*

Developed a novel protein detection system with flexible electronic sensors leveraging protein-specific current response variations and multimodal impedance spectroscopy.

- Enhanced sensitivity through interdigitated electrode optimization; developed PDMS-based microfluidic channels for controlled protein delivery.
- Developed a CNN-LSTM hybrid architecture: CNN for frequency-domain feature extraction from impedance spectra, LSTM for temporal dynamics modeling of current waveforms.
- Applied contrastive learning (3x sample augmentation) and attention mechanisms for discriminative signal weighting.
- Achieved **96.7% accuracy** across 8 protein species, outperforming PLS-DA (78.2%) by 18.5%; validated on 3 independent datasets (n=420) with <3% accuracy drop.

## Contact

zw.yang.04@gmail.com
