import os
import requests
import random
from datetime import datetime
from zoneinfo import ZoneInfo

API_KEY = os.getenv("GROQ_API_KEY")

url = "https://api.groq.com/openai/v1/chat/completions"

headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}

research_topics = [
    "brain MRI preprocessing techniques",
    "MRI image normalization methods",
    "bias field correction in MRI scans",
    "skull stripping for brain MRI",
    "MRI image denoising techniques",
    "intensity standardization in MRI",
    "brain tumor classification using MRI",
    "healthy vs tumor MRI classification",
    "glioma detection from MRI scans",
    "brain tumor segmentation methods",
    "MRI tumor localization techniques",
    "deep learning for brain tumor diagnosis",
    "convolutional neural networks for MRI classification",
    "transformer models for brain MRI analysis",
    "multimodal MRI tumor classification",
    "radiomics feature extraction from MRI",
    "MRI feature engineering for tumor detection",
    "3D MRI image analysis",
    "volumetric tumor assessment",
    "MRI cohort-based tumor studies",
    "cross-cohort MRI classification",
    "multi-center MRI dataset harmonization",
    "class imbalance handling in MRI datasets",
    "data augmentation for brain MRI",
    "synthetic MRI generation for tumor detection",
    "transfer learning for brain tumor classification",
    "self-supervised learning on MRI scans",
    "few-shot learning for MRI tumor recognition",
    "explainable AI for brain tumor diagnosis",
    "attention mechanisms in MRI classification",
    "MRI image registration techniques",
    "tumor grading using MRI scans",
    "benign vs malignant tumor classification",
    "automated brain abnormality detection",
    "tumor progression prediction using MRI",
    "survival prediction from brain MRI",
    "brain lesion detection and classification",
    "medical image segmentation with U-Net",
    "3D U-Net for brain tumor segmentation",
    "Vision Transformers for MRI analysis",
    "ensemble models for tumor classification",
    "clinical MRI dataset analysis"
]

selected_topic = random.choice(research_topics)

prompt = f"""
You are a developer casually working on a Brain Computer Interface project.

Write ONLY 2 short human-like lines for a README daily update.

Topic: {selected_topic}

Requirements:
- sound natural
- sound like a real developer
- avoid corporate language
- avoid sounding like AI
- mention learning, experimenting, debugging, optimizing, discovering, or understanding something
- keep it short
- no markdown headings
- no bullet points
- no emojis
"""

data = {
    "model": "llama3-8b-8192",
    "messages": [
        {
            "role": "user",
            "content": prompt
        }
    ],
    "temperature": 1.1,
    "max_tokens": 120
}

fallback_updates = [
    f"Reviewed recent methodologies in {selected_topic} today.\nNoticed several studies emphasize preprocessing consistency before model training.",

    f"Spent time investigating challenges related to {selected_topic}.\nDifferences in MRI acquisition protocols appear to affect downstream results.",

    f"Analyzed a subset of scans for {selected_topic}.\nObserved that image quality variations can influence feature extraction reliability.",

    f"Read multiple research papers connected to {selected_topic}.\nMany approaches rely heavily on robust preprocessing before classification.",

    f"Explored how dataset characteristics impact {selected_topic}.\nClass distribution and cohort diversity seem important for evaluation.",

    f"Examined preprocessing outputs associated with {selected_topic}.\nNormalization appears to improve consistency across different MRI studies.",

    f"Compared several techniques used in {selected_topic}.\nEach method presents trade-offs between accuracy, complexity, and interpretability.",

    f"Focused on understanding the workflow behind {selected_topic}.\nData preparation remains a critical step before model development.",

    f"Investigated recent developments related to {selected_topic}.\nTransformer-based approaches are becoming more common in medical imaging research.",

    f"Reviewed examples of clinical applications involving {selected_topic}.\nPractical deployment often requires extensive validation across cohorts.",

    f"Analyzed feature extraction strategies used for {selected_topic}.\nCertain image-derived features appear more robust across datasets.",

    f"Looked into common challenges encountered during {selected_topic}.\nData heterogeneity remains a recurring issue in published studies.",

    f"Spent time understanding evaluation metrics for {selected_topic}.\nDifferent metrics can highlight different aspects of model performance.",

    f"Explored the impact of preprocessing choices on {selected_topic}.\nEven small modifications may influence downstream predictions.",

    f"Reviewed open-source implementations related to {selected_topic}.\nInteresting differences exist between academic and production pipelines.",

    f"Examined cohort composition for {selected_topic}.\nBalanced representation may help improve generalization outcomes.",

    f"Compared traditional machine learning and deep learning methods for {selected_topic}.\nPerformance differences often depend on dataset size and quality.",

    f"Focused on reproducibility concerns surrounding {selected_topic}.\nConsistent preprocessing protocols appear essential for reliable results.",

    f"Investigated data augmentation practices used in {selected_topic}.\nSeveral studies report improvements when training diversity is increased.",

    f"Read about explainability techniques associated with {selected_topic}.\nUnderstanding model decisions remains important for medical applications.",

    f"Analyzed segmentation approaches relevant to {selected_topic}.\nAccurate region identification often improves downstream classification tasks.",

    f"Explored transfer learning strategies for {selected_topic}.\nPretrained models may help when labeled MRI data is limited.",

    f"Reviewed recent benchmark studies connected to {selected_topic}.\nCross-dataset evaluation is frequently used to assess robustness.",

    f"Investigated image registration workflows related to {selected_topic}.\nAlignment quality appears important for comparative analysis.",

    f"Examined feature stability across multiple cohorts in {selected_topic}.\nSome representations appear more transferable than others.",

    f"Looked into automated quality control methods for {selected_topic}.\nEarly detection of problematic scans may reduce downstream errors.",

    f"Studied recent advances in medical image segmentation for {selected_topic}.\nSeveral architectures focus on preserving fine structural details.",

    f"Analyzed model validation procedures used in {selected_topic}.\nIndependent testing cohorts are commonly recommended.",

    f"Compared different MRI preprocessing pipelines related to {selected_topic}.\nStandardization remains a key theme across studies.",

    f"Reviewed literature discussing dataset harmonization for {selected_topic}.\nReducing scanner-specific variation could improve generalization.",

    f"Examined approaches for handling class imbalance in {selected_topic}.\nSampling strategies continue to be widely adopted.",

    f"Spent time understanding annotation practices used in {selected_topic}.\nLabel quality can significantly affect training outcomes.",

    f"Explored volumetric analysis methods associated with {selected_topic}.\nThree-dimensional information provides additional clinical context.",

    f"Investigated multimodal approaches linked to {selected_topic}.\nCombining complementary MRI sequences may enhance performance.",

    f"Reviewed recent publications involving {selected_topic}.\nMany studies focus on improving robustness across institutions.",

    f"Analyzed common sources of variability affecting {selected_topic}.\nScanner settings and acquisition parameters remain influential factors.",

    f"Compared feature extraction pipelines used in {selected_topic}.\nSome methods prioritize interpretability over predictive performance.",

    f"Examined current challenges surrounding {selected_topic}.\nGeneralization across unseen cohorts remains an active research area.",

    f"Studied evaluation protocols commonly applied to {selected_topic}.\nCross-validation strategies vary substantially between studies.",

    f"Reviewed advances in 3D deep learning relevant to {selected_topic}.\nVolumetric models continue to show promising results.",

    f"Explored methods for reducing preprocessing variability in {selected_topic}.\nStandard workflows may improve reproducibility.",

    f"Analyzed segmentation outputs associated with {selected_topic}.\nBoundary precision appears important for downstream analysis.",

    f"Investigated feature representation techniques used in {selected_topic}.\nLatent-space learning approaches are gaining popularity.",

    f"Compared recent architectures applied to {selected_topic}.\nModel complexity does not always translate to better performance.",

    f"Reviewed research focused on clinical translation of {selected_topic}.\nInterpretability and reliability remain major considerations.",

    f"Examined data quality issues impacting {selected_topic}.\nArtifact management continues to be discussed extensively in literature.",

    f"Studied preprocessing recommendations proposed for {selected_topic}.\nSeveral guidelines emphasize consistency across datasets.",

    f"Explored cross-cohort evaluation strategies related to {selected_topic}.\nExternal validation is frequently highlighted as best practice.",

    f"Analyzed recent trends shaping {selected_topic}.\nFoundation models and self-supervised approaches are receiving increased attention.",

    f"Reviewed the overall research landscape around {selected_topic}.\nThe field continues to move toward more robust and clinically applicable solutions."
]

try:
    response = requests.post(url, headers=headers, json=data)

    response_json = response.json()

    if "choices" in response_json:
        ai_content = response_json["choices"][0]["message"]["content"].strip()
    else:
        ai_content = random.choice(fallback_updates)

except Exception:
    ai_content = random.choice(fallback_updates)

timestamp = datetime.now(
    ZoneInfo("Asia/Kolkata")
).strftime("%Y-%m-%d %H:%M:%S IST")

daily_update = f"""

---

### Daily Update ({timestamp})

{ai_content}

"""

with open("README.md", "a", encoding="utf-8") as file:
    file.write(daily_update)

print("README updated successfully.")