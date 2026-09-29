# Basics of Data Science — University of Tehran

An academic course portal for **Basics of Data Science** at the **University of Tehran**. Instructor: **Sayeh Mirzaee** (`s.mirzaei@ut.ac.ir`), **Department of Engineering Science**.

Hosted directly on GitHub Pages (`github.io`). Built with an open, non-boxy editorial layout following Apple Human Interface Guidelines (HIG) craft—refined SF system typography, University of Tehran insignia, frosted navigation, high-contrast accessibility tokens, a scrollable landscape schedule track, and dedicated HTML lecture notes with KaTeX math.

---

## 🏛️ Course Details

- **Institution**: University of Tehran
- **Department**: Engineering Science
- **Course**: Basics of Data Science
- **Instructor**: Sayeh Mirzaee (`s.mirzaei[at]ut[dot]ac[dot]ir`)
- **Lectures**: Sundays & Tuesdays • 9:00 – 10:30 AM
- **Location**: Class 8 of Engineering Science
- **Prerequisites**: Probability & statistics, linear algebra, basic python
- **Academic Integrity**: You can use AI, but there will be a quiz for every homework (1.0 coefficient that will be multiplied by the homework grade).
- **Term**: Academic Year 2026–2027

---

## 📁 Repository Structure

```text
├── index.html                   # Main course portal (Overview, Calendar, Lectures, Homeworks, References)
├── css/
│   └── main.css                 # Editorial academic design system (Apple HIG tokens, light/dark themes)
├── js/
│   └── main.js                  # Client interaction (theme switcher, landscape calendar scroll, nav spy)
├── notes/
│   ├── lecture-01.html          # Sample complete lecture note (math with KaTeX, code blocks, outline)
│   └── template.html            # Clean starter template to duplicate for new lecture notes
└── assets/
    ├── images/                  # University logo and real textbook covers (PNG / JPG)
    │   ├── ut-logo.png          # Official University of Tehran emblem (500x501 PNG)
    │   ├── book-fds.jpg         # Foundations of Data Science (Blum et al.)
    │   ├── book-islr.png        # An Introduction to Statistical Learning (James et al.)
    │   ├── book-sfds.jpg        # Statistical Foundations of Data Science (Fan et al.)
    │   ├── book-pml-intro.jpg   # Probabilistic Machine Learning: Intro (Murphy)
    │   ├── book-pml-adv.jpg     # Probabilistic Machine Learning: Advanced (Murphy)
    │   └── book-fml.jpg         # Foundations of Machine Learning (Mohri et al.)
    ├── docs/                    # Assignment PDFs (HW theory, CA computer assignments, syllabus)
    │   ├── syllabus.pdf
    │   ├── hw1-theory.pdf
    │   ├── hw1-ca.pdf
    │   ├── hw2-theory.pdf
    │   └── hw2-ca.pdf
    └── slides/                  # Complete lecture presentation slides folder (16 slide decks)
        ├── lecture#1 - introduction.pdf
        ├── lecture#2 - types of data.pdf
        ├── lecture#3 - statistical inference.pdf
        ├── lecture#4 - evaluation metrics.pdf
        ├── lecture#5 - supervised regression.pdf
        ├── lecture#6 - supervised classification.pdf
        ├── lecture#7 - kernel methods.pdf
        ├── lecture#8 - probabilistic learning.pdf
        ├── lecture#9 - bayesian models.pdf
        ├── lecture#10 - generative models.pdf
        ├── lecture#11 - dimensionality reduction.pdf
        ├── lecture#12 - clustering.pdf
        ├── lecture#13 - neural networks.pdf
        ├── lecture#14 - deep learning cnn.pdf
        ├── lecture#15 - deep learning rnn nlp.pdf
        └── lecture#16 - deep learning gnn.pdf
```

---

## 📚 Syllabus Outline

1. **Chapter 01: Foundations & Lifecycle**
   - Data Science Lifecycle & Workflow
   - Types of Data & Preprocessing
2. **Chapter 02: Statistical Inference & Evaluation**
   - Statistical Inference & Point Estimation
   - Evaluation Metrics (ROC/AUC, Cross-Validation)
3. **Chapter 03: Supervised Learning & Kernel Methods**
   - Supervised Learning: Regression (OLS, Ridge, Lasso)
   - Supervised Learning: Classification (Logistic Regression)
   - Kernel Methods & Support Vector Machines (SVM)
4. **Chapter 04: Probabilistic & Bayesian Learning**
   - Probabilistic Learning & Maximum Likelihood
   - Bayesian Models & Posterior Inference
   - Generative Models (Naive Bayes, GDA, GMM)
5. **Chapter 05: Unsupervised Learning**
   - Dimensionality Reduction (PCA, SVD, Manifold Learning)
   - Clustering (k-Means, Hierarchical, Spectral)
6. **Chapter 06: Deep Learning Foundations**
   - Neural Networks & Backpropagation
   - Deep Learning: Convolutional Neural Networks (CNN)
   - Deep Learning: Recurrent Models (RNN) & NLP
   - Deep Learning: Graph Neural Networks (GNN)

---

## 📖 Course References

1. **Avrim Blum, John Hopcroft, Ravindran Kannan** — *Foundations of Data Science* (Cambridge University Press, 2020)
2. **Gareth James, Daniela Witten, Trevor Hastie, Robert Tibshirani** — *An Introduction to Statistical Learning, with Applications in R* (Springer, Seventh Printing)
3. **Jianqing Fan, Runze Li, Cun-Hui Zhang, Hui Zou** — *Statistical Foundations of Data Science* (Chapman & Hall / CRC, Taylor & Francis Group, 2020)
4. **Kevin P. Murphy** — *Probabilistic Machine Learning: An Introduction* (The MIT Press, 2022)
5. **Kevin P. Murphy** — *Probabilistic Machine Learning: Advanced Topics* (The MIT Press, 2023)
6. **Mehryar Mohri, Afshin Rostamizadeh, Ameet Talwalkar** — *Foundations of Machine Learning*, second edition (The MIT Press, 2018)

---

## 🚀 Local Preview

```bash
cd "/Users/macbook/Codes/Antigravity/Data Science"
python3 -m http.server 8000
```
Open **`http://localhost:8000`** in your browser.
