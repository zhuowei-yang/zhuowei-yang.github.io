---
permalink: /
title: "Zhuowei Yang"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<!-- Global Style Override -->
<style>
  /* --- Google Fonts --- */
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Serif+4:wght@400;600&display=swap');

  /* --- Global Typography --- */
  .page__content {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-size: 0.95rem;
    line-height: 1.75;
    color: #2d3748;
  }
  .page__content h2 {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 1.35rem;
    letter-spacing: -0.01em;
    color: #1a202c;
    margin-top: 2.2em;
    margin-bottom: 0.8em;
    padding-bottom: 0.45em;
    border-bottom: 2px solid #e2e8f0;
  }
  .page__content p, .page__content li {
    font-size: 0.92rem;
    color: #4a5568;
  }
  .page__content a {
    color: #2b6cb0;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: border-color 0.2s;
  }
  .page__content a:hover {
    border-bottom-color: #2b6cb0;
  }

  /* --- Intro Bio --- */
  .intro-bio {
    font-size: 1.02rem;
    line-height: 1.8;
    color: #4a5568;
    margin-bottom: 0.5em;
  }

  /* --- Section Card --- */
  .section-card {
    background: #f7fafc;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    padding: 1.2em 1.4em;
    margin: 0.8em 0 1.5em 0;
  }

  /* --- Research Interests Tags --- */
  .interest-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 0.6em 0 0.2em 0;
  }
  .interest-tags span {
    display: inline-block;
    background: linear-gradient(135deg, #ebf4ff 0%, #e9d8fd 100%);
    color: #2d3748;
    font-size: 0.82rem;
    font-weight: 500;
    padding: 5px 14px;
    border-radius: 20px;
    border: 1px solid #d6dfe8;
  }

  /* --- Education --- */
  .edu-item {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.93rem;
    color: #4a5568;
    padding: 0.4em 0;
  }
  .edu-item .edu-time {
    font-weight: 600;
    color: #2b6cb0;
    white-space: nowrap;
  }
  .edu-item .edu-gpa {
    background: #ebf8ff;
    color: #2b6cb0;
    font-size: 0.8rem;
    font-weight: 600;
    padding: 2px 10px;
    border-radius: 12px;
    white-space: nowrap;
  }

  /* --- Publication Card --- */
  .pub-item {
    display: flex;
    flex-direction: column;
    gap: 14px;
    background: #fff;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 1.4em;
    margin: 1em 0 1.5em 0;
    box-shadow: 0 1px 3px rgba(0,0,0,0.04);
    transition: box-shadow 0.25s;
  }
  .pub-item:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  }
  .pub-item img {
    width: 100%;
    max-width: 100%;
    height: auto;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
  }
  .pub-meta {
    font-size: 0.88rem;
    line-height: 1.65;
  }
  .pub-meta p {
    margin: 0 0 8px 0;
  }
  .pub-meta strong a {
    font-size: 0.98rem;
    font-weight: 600;
    color: #1a202c;
    border-bottom: none;
  }
  .pub-meta strong a:hover {
    color: #2b6cb0;
  }
  .pub-meta em {
    font-size: 0.84rem;
    color: #718096;
  }
  .pub-venue {
    display: inline-block;
    background: #ebf8ff;
    color: #2b6cb0;
    font-size: 0.78rem;
    font-weight: 600;
    font-style: normal;
    padding: 2px 10px;
    border-radius: 12px;
    margin-right: 4px;
  }
  .pub-meta ul {
    margin: 8px 0 0 18px;
    padding: 0;
  }
  .pub-meta ul li {
    font-size: 0.85rem;
    color: #4a5568;
    margin-bottom: 4px;
  }

  /* --- Experience Card --- */
  .exp-card {
    background: #fff;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 1.3em 1.4em;
    margin: 1em 0 1.5em 0;
    box-shadow: 0 1px 3px rgba(0,0,0,0.04);
  }
  .exp-card h3 {
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    color: #1a202c;
    margin: 0 0 0.3em 0;
  }
  .exp-card .exp-advisor {
    font-size: 0.85rem;
    color: #718096;
    margin-bottom: 0.2em;
  }
  .exp-card .exp-time {
    font-size: 0.82rem;
    color: #2b6cb0;
    font-weight: 500;
    margin-bottom: 0.8em;
  }
  .exp-card p, .exp-card li {
    font-size: 0.87rem;
    color: #4a5568;
    line-height: 1.65;
  }
  .exp-card .exp-overview {
    font-size: 0.88rem;
    color: #4a5568;
    margin-bottom: 0.8em;
  }
  .exp-card .exp-subtitle {
    font-weight: 600;
    font-size: 0.88rem;
    color: #2d3748;
    margin: 0.8em 0 0.4em 0;
  }
  .exp-card ul {
    margin: 4px 0 0 18px;
    padding: 0;
  }
  .exp-card ul li {
    margin-bottom: 4px;
  }

  /* --- Email Section --- */
  .email-section a {
    font-size: 0.95rem;
    font-weight: 500;
    color: #2b6cb0;
    border-bottom: 1px dashed #a0c4e8;
  }

  /* --- Mobile --- */
  @media (max-width: 640px) {
    .pub-item { padding: 1em; }
    .exp-card { padding: 1em; }
    .interest-tags span { font-size: 0.78rem; padding: 4px 10px; }
  }
</style>

<p class="intro-bio">
I am currently pursuing a Bachelor's Degree in Electrical Engineering at School of Electrical Engineering and Automation, Hohai University (Project 211), China.
</p>

## Research Interests

<div class="interest-tags">
  <span>Talking Portrait Synthesis</span>
  <span>Co-Speech Gesture Generation</span>
  <span>Digital Human Creation</span>
  <span>Generative Models (Flow Matching & Diffusion)</span>
</div>

## Education

<div class="section-card">
  <div class="edu-item">
    <span class="edu-time">2023.09 - Present</span>
    <a href="https://www.hhu.edu.cn/">Hohai University</a>, Nanjing
    <span class="edu-gpa">GPA: 4.74/5 &middot; Rank: 1/30</span>
  </div>
</div>

## Publications

<div class="pub-item">
  <img src="{{ '/images/paper-1.png' | relative_url }}" alt="DEMO Paper Cover">
  <div class="pub-meta">
    <p>
      <strong><a href="https://arxiv.org/abs/2510.10650">DEMO: Disentangled Motion Latent Flow Matching for Fine-Grained Controllable Talking Portrait Synthesis</a></strong><br/>
      <span class="pub-venue">IJCNN 2026 (CCF-C)</span><br/>
      <em>(Advisor: Prof. Peiyin Chen, Hohai University)</em>
    </p>
    <ul>
      <li>Designed a motion auto-encoder that constructs a disentangled, fine-grained motion latent space, enabling independent control over lip motion, head pose, and eye gaze.</li>
      <li>Introduced OT-based flow matching with a transformer predictor to efficiently sample temporally consistent motion trajectories across consecutive frames.</li>
    </ul>
  </div>
</div>

<div class="pub-item">
  <img src="{{ '/images/paper-2.png' | relative_url }}" alt="SyncGesture Pipeline">
  <div class="pub-meta">
    <p>
      <strong>SyncGesture: Dialogue-Adaptive Dyadic Gesture Synthesis with Rhythm and Interaction Awareness</strong><br/>
      <span class="pub-venue">CCF-A (Under Submission)</span><br/>
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

<div class="exp-card">
  <h3>Multifunctional Fiber-Optic Sensing Guidewire for Neurointerventional Assistance</h3>
  <div class="exp-advisor">Advisor: <a href="http://web.ee.tsinghua.edu.cn/shengxing/zh_CN/index.htm">Prof. Xing Sheng</a>, Department of Electronic Engineering, <strong>Tsinghua University</strong></div>
  <div class="exp-time">June 2024 - August 2024</div>
  <div class="exp-overview">Developed a dual-modality sensing platform integrating hemoglobin spectral sensing for real-time SpO2 monitoring and fluorescent tracer velocimetry for blood flow measurement.</div>
  <div class="exp-subtitle">Key Contributions:</div>
  <ul>
    <li>Extracted spectral biomarkers and dynamic fluorescence features; optimized excitation/detection modules with lock-in amplification techniques.</li>
    <li>Developed end-to-end ML pipelines with spectral-spatiotemporal feature extraction (wavelet transform + time-series embedding), comparing Random Forest, SVM, and lightweight CNN.</li>
    <li>Addressed class imbalance (SMOTE) and overfitting (L1 regularization), achieving <strong>92.3% classification accuracy</strong> for hemodynamic states.</li>
  </ul>
</div>

<div class="exp-card">
  <h3>Flexible Biosensing Platform for Protein Species Detection</h3>
  <div class="exp-advisor">Advisor: <a href="https://person.zju.edu.cn/knan">Prof. Kewang Nan</a>, <strong>Zhejiang University</strong></div>
  <div class="exp-time">January 2025 - February 2025</div>
  <div class="exp-overview">Developed a novel protein detection system with flexible electronic sensors leveraging protein-specific current response variations and multimodal impedance spectroscopy.</div>
  <div class="exp-subtitle">Key Contributions:</div>
  <ul>
    <li>Enhanced sensitivity through interdigitated electrode optimization; developed PDMS-based microfluidic channels for controlled protein delivery.</li>
    <li>Developed a CNN-LSTM hybrid architecture: CNN for frequency-domain feature extraction from impedance spectra, LSTM for temporal dynamics modeling of current waveforms.</li>
    <li>Applied contrastive learning (3x sample augmentation) and attention mechanisms for discriminative signal weighting.</li>
    <li>Achieved <strong>96.7% accuracy</strong> across 8 protein species, outperforming PLS-DA (78.2%) by 18.5%; validated on 3 independent datasets (n=420) with &lt;3% accuracy drop.</li>
  </ul>
</div>

## Contact

<div class="email-section">
  <a href="mailto:zw.yang.04@gmail.com">zw.yang.04@gmail.com</a>
</div>
