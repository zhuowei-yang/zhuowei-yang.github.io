---
permalink: /
title: "Zhuowei Yang"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<p class="hero-kicker">B.Eng. student &middot; Digital Human Research</p>

I am currently pursuing a Bachelor's Degree in Electrical Engineering at School of Electrical Engineering and Automation, <a href="https://www.hhu.edu.cn/">Hohai University</a> (Project 211), China. My research centers on digital human generation — talking portrait synthesis and co-speech gesture generation with flow matching and diffusion models.

## Research Interests

<div class="interests">
  <span>Talking Portrait Synthesis</span>
  <span>Co-Speech Gesture Generation</span>
  <span>Digital Human Creation</span>
  <span>Flow Matching &amp; Diffusion</span>
</div>

## Education

<div class="edu-line">
  <span class="edu-date">2023.09 — Present</span>
  <div class="edu-body">
    <div class="edu-school"><a href="https://www.hhu.edu.cn/">Hohai University</a>, Nanjing</div>
    <div class="edu-note">B.Eng. in Electrical Engineering <span class="gpa-badge">GPA 4.52/5.00 &middot; Rank 9/30</span></div>
  </div>
</div>

## Publications

<div class="pub-card">
  <div class="pub-figure"><img src="{{ '/images/paper-1.png' | relative_url }}" alt="DEMO pipeline overview"></div>
  <div class="pub-body">
    <span class="pub-venue">IJCNN 2026 &middot; CCF-C</span>
    <div class="pub-title"><a href="https://arxiv.org/abs/2510.10650">DEMO: Disentangled Motion Latent Flow Matching for Fine-Grained Controllable Talking Portrait Synthesis</a></div>
    <div class="pub-advisor">Advisor: <strong><em>Prof. Peiyin Chen</em>, Hohai University &amp; <em>Prof. Rui Yan</em>, Zhejiang University of Technology</strong></div>
    <ul>
      <li>Designed a motion auto-encoder that constructs a disentangled, fine-grained motion latent space, enabling independent control over lip motion, head pose, and eye gaze.</li>
      <li>Introduced OT-based flow matching with a transformer predictor to efficiently sample temporally consistent motion trajectories across consecutive frames.</li>
    </ul>
    <div class="pub-links">
      <a href="https://arxiv.org/abs/2510.10650">arXiv &#8599;</a>
    </div>
  </div>
</div>

<div class="pub-card">
  <div class="pub-figure"><img src="{{ '/images/paper-2.png' | relative_url }}" alt="SyncGesture framework overview"></div>
  <div class="pub-body">
    <span class="pub-venue pub-venue--sub">CCF-A &middot; Under Submission</span>
    <div class="pub-title">SyncGesture: Dialogue-Adaptive Dyadic Gesture Synthesis with Rhythm and Interaction Awareness</div>
    <div class="pub-advisor">Advisor: <strong><em>Prof. Zhaoxin Fan</em>, Beihang University</strong></div>
    <ul>
      <li>Built the TSD-Gesture dataset with 1,620 dyadic clips (~11 hours) covering 5 dialogue-state annotations — the first benchmark with real conversational turn-taking and dialogue-state labels.</li>
      <li>Designed a harmonic spectral prior that extracts periodic structures from motion features via learnable frequency-domain filtering, combined with MoE expert networks for rhythm-coherent motion enhancement.</li>
      <li>Proposed a conversation-adaptive interaction module using dual cross-attention with per-frame softmax gating to dynamically balance self-motion, partner influence, and dialogue-state information.</li>
      <li>Achieved SOTA performance on FGD, BC, and Diversity metrics.</li>
    </ul>
  </div>
</div>

## Research Experience

<div class="exp-block">
  <div class="exp-title">Multifunctional Fiber-Optic Sensing Guidewire for Neurointerventional Assistance</div>
  <div class="exp-meta">Advisor: <strong><em><a href="http://web.ee.tsinghua.edu.cn/shengxing/zh_CN/index.htm">Prof. Xing Sheng</a></em>, Department of Electronic Engineering, Tsinghua University</strong></div>
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
  <div class="exp-meta">Advisor: <strong><em><a href="https://person.zju.edu.cn/knan">Prof. Kewang Nan</a></em>, Zhejiang University</strong></div>
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
  <a class="contact-mail" href="mailto:zw.yang.04@gmail.com">zw.yang.04@gmail.com</a>
  <span class="contact-note">&mdash; the best way to reach me.</span>
</div>
