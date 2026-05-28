---
permalink: /
title: "Zhuowei Yang"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I am currently pursuing a Bachelor's Degree in Electrical Engineering at School of Electrical Engineering and Automation, Hohai University (Project 211), China.

## Research Interests

<div class="interests">
  <span>Talking Portrait Synthesis</span>
  <span>Co-Speech Gesture Generation</span>
  <span>Digital Human Creation</span>
  <span>Flow Matching & Diffusion</span>
</div>

## Education

<div class="edu-line">
  2023.09 - Present &nbsp;·&nbsp; <a href="https://www.hhu.edu.cn/">Hohai University</a>, Nanjing
  <span class="edu-detail">GPA 4.52/5.00 · Rank 9/30</span>
</div>

## Publications

<div class="pub-card">
  <img src="{{ '/images/paper-1.png' | relative_url }}" alt="DEMO">
  <div class="pub-title"><a href="https://arxiv.org/abs/2510.10650">DEMO: Disentangled Motion Latent Flow Matching for Fine-Grained Controllable Talking Portrait Synthesis</a></div>
  <span class="pub-venue">IJCNN 2026 (CCF-C)</span>
  <div class="pub-advisor">Advisor: <strong><em>Prof. Peiyin Chen</em></strong>, Hohai University · <strong><em>Prof. Rui Yan</em></strong>, Zhejiang University of Technology</div>
  <ul>
    <li>Designed a motion auto-encoder that constructs a disentangled, fine-grained motion latent space, enabling independent control over lip motion, head pose, and eye gaze.</li>
    <li>Introduced OT-based flow matching with a transformer predictor to efficiently sample temporally consistent motion trajectories across consecutive frames.</li>
  </ul>
</div>

<div class="pub-card">
  <img src="{{ '/images/paper-2.png' | relative_url }}" alt="SyncGesture">
  <div class="pub-title">SyncGesture: Dialogue-Adaptive Dyadic Gesture Synthesis with Rhythm and Interaction Awareness</div>
  <span class="pub-venue">CCF-A (Under Submission)</span>
  <div class="pub-advisor">Advisor: <strong><em>Prof. Zhaoxin Fan</em></strong>, Beihang University</div>
  <ul>
    <li>Built the TSD-Gesture dataset with 1,620 dyadic clips (~11 hours) covering 5 dialogue-state annotations — the first benchmark with real conversational turn-taking and dialogue-state labels.</li>
    <li>Designed a harmonic spectral prior that extracts periodic structures from motion features via learnable frequency-domain filtering, combined with MoE expert networks for rhythm-coherent motion enhancement.</li>
    <li>Proposed a conversation-adaptive interaction module using dual cross-attention with per-frame softmax gating to dynamically balance self-motion, partner influence, and dialogue-state information.</li>
    <li>Achieved SOTA performance on FGD, BC, and Diversity metrics.</li>
  </ul>
</div>

## Research Experience

<div class="exp-block">
  <div class="exp-title">Multifunctional Fiber-Optic Sensing Guidewire for Neurointerventional Assistance</div>
  <div class="exp-meta">Advisor: <strong><em><a href="http://web.ee.tsinghua.edu.cn/shengxing/zh_CN/index.htm">Prof. Xing Sheng</a></em></strong>, Department of Electronic Engineering, <strong>Tsinghua University</strong></div>
  <div class="exp-time">June 2024 — August 2024</div>
  <div class="exp-desc">Developed a dual-modality sensing platform integrating hemoglobin spectral sensing for real-time SpO2 monitoring and fluorescent tracer velocimetry for blood flow measurement.</div>
  <ul>
    <li>Extracted spectral biomarkers and dynamic fluorescence features; optimized excitation/detection modules with lock-in amplification.</li>
    <li>Built end-to-end ML pipelines with spectral-spatiotemporal feature extraction, comparing Random Forest, SVM, and lightweight CNN.</li>
    <li>Addressed class imbalance (SMOTE) and overfitting (L1 regularization), achieving <strong>92.3% classification accuracy</strong> for hemodynamic states.</li>
  </ul>
</div>

<div class="exp-block">
  <div class="exp-title">Flexible Biosensing Platform for Protein Species Detection</div>
  <div class="exp-meta">Advisor: <strong><em><a href="https://person.zju.edu.cn/knan">Prof. Kewang Nan</a></em></strong>, <strong>Zhejiang University</strong></div>
  <div class="exp-time">January 2025 — February 2025</div>
  <div class="exp-desc">Developed a novel protein detection system with flexible electronic sensors leveraging protein-specific current response variations and multimodal impedance spectroscopy.</div>
  <ul>
    <li>Enhanced sensitivity through interdigitated electrode optimization; developed PDMS-based microfluidic channels for controlled protein delivery.</li>
    <li>Built a CNN-LSTM hybrid architecture for end-to-end learning of complex protein-signal relationships from impedance spectra.</li>
    <li>Applied contrastive learning (3x augmentation) and attention mechanisms for discriminative signal weighting.</li>
    <li>Achieved <strong>96.7% accuracy</strong> across 8 protein species, outperforming PLS-DA (78.2%) by 18.5%; validated on 3 independent datasets with &lt;3% accuracy drop.</li>
  </ul>
</div>

## Contact

<div class="contact-line">
  <a href="mailto:zw.yang.04@gmail.com">zw.yang.04@gmail.com</a>
</div>
