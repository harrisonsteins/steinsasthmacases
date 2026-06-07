// ═══════════════════════════════════════════════════════════════════
//  SCENARIO DATA
// ═══════════════════════════════════════════════════════════════════
const SCENARIOS = [
  // ────────────────────────────────────────────────────
  {
    id: 1,
    title: "The Tachypneic Farmer",
    subtitle: "Mild-to-Moderate Acute Asthma",
    description: "A 34-year-old agricultural worker with known asthma presents after dust exposure in the fields.",
    tags: ["mild-moderate","diagnosis","first-line"],
    accent: "#0E7C7B",

    presentation: {
      eyebrow: "Scenario 01 — Presentation",
      imgEmoji: "🌾",
      imgLabel: "Photo: adult male, sitting upright, visibly using accessory muscles, dusty rural health post setting",
      imgPrompt: "AI prompt: 'Photorealistic image of a 34-year-old male farm worker sitting upright in a rural clinic chair, hands on knees, slightly distressed breathing, dusty clothing, daytime. Clinical portrait style, natural lighting.'",
      intro: `<strong>34-year-old male</strong> with a 5-year history of asthma presents to your Role 2 clinic 40 minutes after beginning work harvesting wheat. He used his salbutamol MDI twice in the field with minimal relief. He is sitting upright, breathing rapidly.`,
      vitals: [
        { label: "HR", value: "108", unit: "/min", state: "warn" },
        { label: "RR", value: "24", unit: "/min", state: "warn" },
        { label: "SpO₂", value: "93", unit: "%", state: "warn" },
        { label: "BP", value: "128/84", unit: "mmHg", state: "" },
        { label: "Temp", value: "37.1", unit: "°C", state: "ok" },
        { label: "PEFR", value: "58", unit: "% predicted", state: "warn" }
      ],
      findings: [
        { text: "Speaking in full sentences, mildly anxious", type: "" },
        { text: "Diffuse expiratory wheeze bilaterally", type: "warn" },
        { text: "Mild use of sternocleidomastoid muscles", type: "warn" },
        { text: "No cyanosis, no paradoxical breathing", type: "" },
        { text: "Chest: hyperresonant, prolonged expiratory phase", type: "" }
      ],
      resourceNote: "Available at your Role 2: salbutamol MDI, ipratropium MDI, spacer device, oral prednisolone, supplemental O₂ via nasal cannula. No nebulizer available."
    },

    diagnosis: {
      question: "What is your clinical stage and immediate diagnostic priority?",
      options: [
        { letter: "A", text: "Stage 1 (mild) — discharge with MDI and follow-up" },
        { letter: "B", text: "Stage 2 (moderate) — treat aggressively, reassess at 20 minutes", correct: true },
        { letter: "C", text: "Stage 3 (near-fatal) — prepare for immediate intubation" },
        { letter: "D", text: "Acute COPD exacerbation — treat differently" }
      ],
      correctFeedback: `Correct. <strong>Stage 2 moderate-to-severe</strong> is the right call. SpO₂ 93% on room air, PEFR 58% (in the 33-75% moderate range), tachycardia, and accessory muscle use all point here. He can still speak in sentences — he's not Stage 3 yet — but this is not mild. He failed two puffs of MDI in the field. He needs aggressive treatment and close reassessment at 20 minutes.`,
      incorrectFeedback: `Not quite. <strong>PEFR 58%</strong> puts him in the moderate range (33-75%), SpO₂ is 93% on room air, and he is using accessory muscles — these together define Stage 2, not Stage 1. He also failed pre-hospital bronchodilator treatment. Stage 3 would require paradoxical breathing, SpO₂ <88%, or inability to speak. COPD is incorrect — this is a known asthmatic with an allergic trigger.`
    },

    management: {
      title: "Management: Stage 2 Moderate Asthma at Role 2",
      phases: [
        {
          label: "Immediate — 0 to 5 min",
          color: "#0E7C7B",
          num: "1",
          time: "0–5 min",
          actions: [
            { icon: "💊", type: "drug", name: "Salbutamol MDI + spacer", detail: "8 puffs (800 mcg) via spacer, one puff every 15-30 seconds. Instruct patient to take slow, deep inhalations.", dose: "800 mcg via MDI+spacer", warn: null },
            { icon: "💊", type: "drug", name: "Ipratropium MDI + spacer", detail: "4 puffs (80 mcg) via spacer immediately after salbutamol.", dose: "80 mcg via MDI+spacer", warn: null },
            { icon: "🫁", type: "assess", name: "Supplemental oxygen", detail: "Nasal cannula 2-4 L/min targeting SpO₂ 93-95%. Do NOT aim for 100%.", dose: "Target SpO₂ 93–95%", warn: null },
            { icon: "💊", type: "drug", name: "Oral prednisolone", detail: "Give immediately — onset is 4-6 hours but earlier is better.", dose: "50 mg PO stat", warn: null }
          ]
        },
        {
          label: "Reassessment — 20 min",
          color: "#D97706",
          num: "2",
          time: "20 min",
          actions: [
            { icon: "📊", type: "monitor", name: "Repeat PEFR + SpO₂ + HR", detail: "PEFR increase of >15% from baseline = response. Compare accessory muscle use." },
            { icon: "💊", type: "drug", name: "Repeat salbutamol if partial response", detail: "8 puffs MDI+spacer q20 min × 3 doses total if responding. Continue ipratropium for 3 doses total.", dose: "Repeat q20 min × 3 cycles" },
            { icon: "📋", type: "assess", name: "Check pulsus paradoxus", detail: "Inflate BP cuff above systolic. Note first Korotkoff on expiration (A) and inspiration (B). A−B >25 mmHg = severe.", warn: "Narrowing pulsus = response. Widening = escalation." }
          ]
        },
        {
          label: "Disposition — 60 min",
          color: "#059669",
          num: "3",
          time: "60 min",
          actions: [
            { icon: "✅", type: "assess", name: "Criteria for discharge planning", detail: "PEFR >60% predicted, SpO₂ ≥93% on room air, speaks comfortably, no accessory muscle use." },
            { icon: "📋", type: "assess", name: "Criteria for continued treatment / transfer", detail: "PEFR <60%, persistent SpO₂ <93%, failure to improve after 3 salbutamol cycles → escalate to Better tier. Consider transfer." },
            { icon: "💊", type: "drug", name: "Discharge medications if improved", detail: "Prednisolone 40-50 mg daily × 5 days. Continue MDI+spacer q4-6h as needed. Written action plan." }
          ]
        }
      ],
      outcome: `<strong>Expected outcome:</strong> With correct MDI+spacer dosing equivalent to a nebulizer, this patient should show meaningful improvement (PEFR increase >15%, SpO₂ 94-96%, reduced tachycardia) within 40-60 minutes. The critical insight: <strong>MDI + spacer delivers equivalent bronchodilation to nebulizer</strong> in mild-moderate disease while conserving your oxygen supply — a key advantage in the Role 2 setting.`,
      pearl: "PEFR is your objective response tracker when you don't have a blood gas. A >15% rise from baseline is a treatment response. If PEFR doesn't rise after 3 cycles of full-dose salbutamol + ipratropium + steroid, this patient is not responding and needs escalation."
    }
  },

  // ────────────────────────────────────────────────────
  {
    id: 2,
    title: "The Silent Chest",
    subtitle: "Near-Fatal Asthma — Stage 3",
    description: "A 28-year-old is brought in by vehicle after two days of worsening asthma and no inhaler access.",
    tags: ["near-fatal","silent chest","escalation"],
    accent: "#C0392B",

    presentation: {
      eyebrow: "Scenario 02 — Presentation",
      imgEmoji: "🚨",
      imgLabel: "Photo: young adult female, tripod position, visibly distressed, unable to speak, healthcare worker at bedside in basic clinic",
      imgPrompt: "AI prompt: 'Photorealistic image of a 28-year-old woman in severe respiratory distress, sitting in tripod position on a basic clinic bed, unable to speak, diaphoretic, healthcare worker taking vitals beside her. Dim resource-limited clinic interior, dramatic lighting.'",
      intro: `A <strong>28-year-old woman</strong> is carried into your Role 2 facility by family. She has had asthma since childhood, has not had access to her inhalers for 2 days. On arrival she can say only <span class='danger-highlight'>one or two words</span>, is diaphoretic, and sits rigidly forward with hands on knees.`,
      vitals: [
        { label: "HR", value: "138", unit: "/min", state: "danger" },
        { label: "RR", value: "34", unit: "/min", state: "danger" },
        { label: "SpO₂", value: "86", unit: "%", state: "danger" },
        { label: "BP", value: "106/74", unit: "mmHg", state: "warn" },
        { label: "Pulsus", value: "28", unit: "mmHg", state: "danger" },
        { label: "PEFR", value: "Unable", unit: "to perform", state: "danger" }
      ],
      findings: [
        { text: "Sitting bolt upright, diaphoretic, cannot complete sentences", type: "danger" },
        { text: "Auscultation: markedly diminished breath sounds bilaterally — near-silent", type: "danger" },
        { text: "Severe subcostal and intercostal recession", type: "danger" },
        { text: "Trachea midline, no JVD, no asymmetry", type: "" },
        { text: "Pulsus paradoxus 28 mmHg on manual measurement", type: "danger" }
      ],
      resourceNote: "Available at your Role 2: salbutamol MDI + spacer, ipratropium MDI, oral/IV prednisolone, IV MgSO₄ 2g, IM/IV epinephrine, supplemental O₂. No mechanical ventilator on site — nearest ICU 4 hours by road."
    },

    diagnosis: {
      question: "You auscultate a near-silent chest. A student says 'good — the wheeze has cleared.' How do you respond?",
      options: [
        { letter: "A", text: "Agree — clearing wheeze indicates bronchodilation" },
        { letter: "B", text: "Disagree — silent chest in a distressed patient indicates minimal air movement, not improvement. This is a Stage 3 near-fatal presentation.", correct: true },
        { letter: "C", text: "Uncertain — obtain CXR before deciding severity" },
        { letter: "D", text: "Consider pneumothorax as primary diagnosis" }
      ],
      correctFeedback: `Exactly right. <strong>Silent chest in an obviously distressed patient is a clinical emergency.</strong> Wheeze requires airflow. The absence of wheeze alongside SpO₂ 86%, HR 138, pulsus paradoxus 28 mmHg, and inability to speak means this patient is barely moving air. This is Stage 3 near-fatal asthma. The student's error is one of the most dangerous in all of emergency medicine.`,
      incorrectFeedback: `This is a critical teaching point: <strong>a silent chest in a distressed patient = minimal air movement, NOT improvement.</strong> Wheeze requires turbulent airflow through narrowed airways. When there is almost no airflow, the wheeze disappears. Her other signs — SpO₂ 86%, HR 138, pulsus paradoxus 28 mmHg, inability to speak — confirm Stage 3. CXR and PTX workup are not the priority — immediate maximum therapy is.`
    },

    management: {
      title: "Management: Near-Fatal Asthma at Role 2 — Aggressive Bridge to Transfer",
      phases: [
        {
          label: "Immediate — 0 to 5 min",
          color: "#C0392B",
          num: "1",
          time: "0–5 min",
          actions: [
            { icon: "🫁", type: "drug", name: "High-flow oxygen", detail: "15 L/min via non-rebreather mask. Target SpO₂ ≥90% as immediate goal.", dose: "15 L/min NRB", warn: null },
            { icon: "💊", type: "drug", name: "Salbutamol MDI + spacer STAT", detail: "8 puffs immediately. If patient cannot coordinate, consider switching to continuous back-to-back dosing.", dose: "8 puffs q15 min continuous", warn: null },
            { icon: "💉", type: "drug", name: "IM Epinephrine", detail: "Given severity and unreliable inhaled delivery with near-absent airflow, IM epi bypasses the inhalation problem entirely.", dose: "0.5 mg IM (1:1000)", warn: "First-line for near-fatal when inhaled route unreliable" },
            { icon: "💉", type: "drug", name: "IV access — 2 large-bore IVs", detail: "Draw bloods if VBG available. Start fluid if hemodynamically compromised." }
          ]
        },
        {
          label: "First 20 min — IV Therapy",
          color: "#D97706",
          num: "2",
          time: "5–20 min",
          actions: [
            { icon: "💊", type: "drug", name: "IV Magnesium Sulfate", detail: "2g over 20 minutes. Bronchodilates via Ca²⁺-mediated smooth muscle inhibition. Greatest benefit in near-fatal disease.", dose: "MgSO₄ 2g IV over 20 min", warn: "Monitor for hypotension and flushing. Check DTRs." },
            { icon: "💊", type: "drug", name: "IV Hydrocortisone", detail: "Patient cannot safely swallow oral agents.", dose: "200 mg IV stat", warn: null },
            { icon: "💊", type: "drug", name: "Ipratropium MDI + spacer", detail: "4 puffs every 20 minutes × 3 doses alongside salbutamol.", dose: "80 mcg q20 min × 3", warn: null }
          ]
        },
        {
          label: "Reassessment + Transfer Prep",
          color: "#7C3AED",
          num: "3",
          time: "20–60 min",
          actions: [
            { icon: "📊", type: "monitor", name: "Serial pulsus paradoxus every 20 min", detail: "Narrowing from 28 mmHg toward <15 mmHg = response. Widening or unchanged = treatment failure." },
            { icon: "🚨", type: "escalate", name: "Prepare RSI if deteriorating", detail: "Lay out ketamine 1.5 mg/kg, succinylcholine 1.5 mg/kg, ETT, laryngoscope. Do NOT intubate unless: GCS dropping, SpO₂ falling below 85% despite all therapy, respiratory rate falling (fatigue). If you intubate, transfer immediately.", warn: "Intubation at Role 2 without ICU backup is high-risk — only if no other option" },
            { icon: "📡", type: "assess", name: "Contact receiving facility NOW", detail: "SBAR handover. Communicate trajectory: 'near-fatal asthma, 4h transfer, treated with epi, MgSO4, steroids. SpO2 trend: 86 → [current]. Preparing for possible RSI on route.'" },
            { icon: "💊", type: "drug", name: "Continue salbutamol every 20 min during transfer", detail: "Person assigned to give MDI puffs in transport vehicle. Document times and doses." }
          ]
        }
      ],
      outcome: `<strong>Near-fatal asthma at a Role 2 without mechanical ventilation is a time-critical transfer emergency.</strong> Your goal is to stabilize enough to survive the 4-hour transfer — not to achieve full resolution. IM epinephrine + IV magnesium + IV steroid + continuous bronchodilators is your maximal medical bundle. If SpO₂ remains ≥88-90% and pulsus is narrowing, you are buying transfer time. If the patient is deteriorating toward respiratory arrest, intubate with ketamine RSI and transfer intubated.`,
      pearl: "In near-fatal asthma with near-absent airflow, inhaled bronchodilators are unreliable because the drug cannot reach the distal airways. IM epinephrine bypasses this problem — systemic absorption works regardless of how little air is moving. Don't wait for the inhaled route to work in Stage 3."
    }
  },

  // ────────────────────────────────────────────────────
  {
    id: 3,
    title: "The Normal Blood Gas",
    subtitle: "The Dangerous Normal pCO₂",
    description: "A 41-year-old with asthma who looks 'improved' after treatment — but the blood gas tells a different story.",
    tags: ["blood gas","pCO2 trap","deterioration"],
    accent: "#D97706",

    presentation: {
      eyebrow: "Scenario 03 — Presentation",
      imgEmoji: "🩸",
      imgLabel: "Photo: male patient sitting on hospital bed, oxygen mask, nurse handing over VBG result paper, moderate clinic setting",
      imgPrompt: "AI prompt: 'Photorealistic clinical photo of a 41-year-old male patient sitting upright in a hospital bed, oxygen mask on face, slightly pale and diaphoretic. A healthcare worker hands him a blood gas printout. Role 2 clinic environment, controlled lighting.'",
      intro: `A <strong>41-year-old teacher</strong> with severe asthma is 30 minutes into treatment with salbutamol, ipratropium, and IV steroids. Your nurse says, <span class='highlight'>"His respiratory rate is coming down from 34 to 28, and his blood gas looks normal — pCO₂ 40 mmHg, pH 7.41."</span> He still looks uncomfortable but is no longer as agitated.`,
      vitals: [
        { label: "HR", value: "122", unit: "/min", state: "danger" },
        { label: "RR", value: "28", unit: "/min", state: "warn" },
        { label: "SpO₂", value: "91", unit: "%", state: "warn" },
        { label: "pH", value: "7.41", unit: "", state: "warn" },
        { label: "pCO₂", value: "40", unit: "mmHg", state: "danger" },
        { label: "PEFR", value: "31", unit: "% predicted", state: "danger" }
      ],
      findings: [
        { text: "Speaking in short phrases, still using accessory muscles", type: "warn" },
        { text: "Diffuse wheeze, improved but still prominent", type: "warn" },
        { text: "RR reduced 34 → 28 after treatment but remains elevated", type: "warn" },
        { text: "PEFR 31% predicted — below life-threatening threshold", type: "danger" },
        { text: "pCO₂ 40 mmHg with pH 7.41 — 'normal' gas", type: "danger" }
      ],
      resourceNote: "Available: VBG capability, salbutamol, IV MgSO₄, IV steroids, IM epinephrine. No mechanical ventilator. Transfer time to ICU: 90 minutes."
    },

    diagnosis: {
      question: "The nurse says the blood gas is normal. What is your interpretation?",
      options: [
        { letter: "A", text: "Normal gas — good sign, continue current treatment and observe" },
        { letter: "B", text: "Normal pCO₂ in a tachypneic, distressed asthmatic = danger sign. He should be hyperventilating — a normal CO₂ means he is tiring and cannot maintain compensation.", correct: true },
        { letter: "C", text: "Repeat the VBG in 1 hour to confirm the trend" },
        { letter: "D", text: "pH 7.41 confirms no acidosis, gas acceptable" }
      ],
      correctFeedback: `Precisely right. <strong>A normal pCO₂ (40 mmHg) in a patient working this hard is not reassuring — it is alarming.</strong> This patient should be hyperventilating, which would give a LOW pCO₂ of 28-34. Instead his CO₂ has climbed to 40 — the normal range — which means his minute ventilation has already started to fail. His muscles are fatiguing. This is the last warning before hypercapnia and respiratory failure. Combine this with PEFR 31% (life-threatening threshold) and you have a patient in impending respiratory failure despite a "normal" gas.`,
      incorrectFeedback: `This is one of the most important teaching points in asthma management: <strong>normal pCO₂ in a distressed, tachypneic asthmatic is a danger sign, not reassurance.</strong> Early-moderate asthma causes hyperventilation and a LOW pCO₂ (28-34 mmHg). When the CO₂ climbs back to "normal" (38-42 mmHg) in someone still breathing at RR 28 and still struggling, it means ventilatory compensation is failing. PEFR 31% confirms life-threatening severity. This patient needs escalation, not observation.`
    },

    management: {
      title: "Management: Impending Respiratory Failure — Escalate Before Arrest",
      phases: [
        {
          label: "Immediate Escalation",
          color: "#C0392B",
          num: "1",
          time: "Now",
          actions: [
            { icon: "🚨", type: "escalate", name: "Re-stage: this is now near-fatal / impending failure", detail: "PEFR 31%, normal pCO₂ in tachypneic patient, still on accessory muscles. Do NOT be reassured by normal blood gas.", warn: "Normal pCO₂ in distressed asthmatic = escalation trigger" },
            { icon: "💉", type: "drug", name: "IV Magnesium Sulfate if not already given", detail: "If MgSO₄ not yet administered, give 2g IV over 20 minutes now.", dose: "MgSO₄ 2g IV over 20 min", warn: null },
            { icon: "💊", type: "drug", name: "Continue continuous salbutamol", detail: "8 puffs MDI+spacer every 20 minutes. Do not decrease dose because gas 'looks normal.'", dose: "8 puffs q20 min ongoing", warn: null },
            { icon: "💉", type: "drug", name: "Consider IM epinephrine", detail: "PEFR 31% suggests severely obstructed small airways with unreliable inhaled drug delivery.", dose: "0.3–0.5 mg IM (1:1000)" }
          ]
        },
        {
          label: "Serial Monitoring — Every 15 min",
          color: "#D97706",
          num: "2",
          time: "Q15 min",
          actions: [
            { icon: "📊", type: "monitor", name: "Repeat VBG in 30 minutes", detail: "The critical number to watch: is the pCO₂ rising above 40? pCO₂ 45+ = hypercapnia = impending arrest. pH <7.35 confirms.", warn: "pCO₂ >45 + pH <7.35 = intubate now" },
            { icon: "📊", type: "monitor", name: "Serial PEFR every 20 min", detail: "Any movement above 33% is a partial response. No movement or decrease = treatment failure." },
            { icon: "📊", type: "monitor", name: "Watch for fatigue signs", detail: "Paradoxical breathing (belly in as chest rises), decreasing respiratory rate without clinical improvement, altered consciousness. Any of these = immediate RSI." }
          ]
        },
        {
          label: "RSI Preparation — Have Ready",
          color: "#7C3AED",
          num: "3",
          time: "Prepare now",
          actions: [
            { icon: "🔧", type: "procedure", name: "Lay out RSI equipment NOW", detail: "Ketamine drawn up, succinylcholine drawn up, ETT size 7-7.5, laryngoscope checked, BVM tested. Glycopyrrolate 0.2 mg drawn." },
            { icon: "📡", type: "assess", name: "Contact ICU / receiving facility", detail: "Report: 'Near-fatal asthma, impending failure, pCO₂ rising, PEFR 31%. May arrive intubated. Prepare ICU bed. ETA 90 min.'" },
            { icon: "💊", type: "drug", name: "RSI drugs if needed", detail: "Ketamine 1.5–2 mg/kg IV → succinylcholine 1.5 mg/kg IV. Post-intubation: ketamine infusion 0.5 mg/kg/hr. Restart bronchodilators via in-line nebulizer immediately.", dose: "Ketamine 1.5–2 mg/kg IV | Sux 1.5 mg/kg IV" }
          ]
        }
      ],
      outcome: `<strong>This patient has two outcomes depending on your speed of recognition.</strong> Recognized early: MgSO₄ + IM epi + escalated bronchodilators buys enough response to transfer spontaneously breathing. Missed: pCO₂ climbs to 55+ with pH 7.25, respiratory rate drops from fatigue, consciousness decreases, and you are doing emergency RSI in a Role 2 without ICU support. <strong>The pCO₂ trap kills when the blood gas is falsely reassuring.</strong>`,
      pearl: "The rule: In acute asthma, any pCO₂ ≥38 mmHg in a patient who is visibly distressed and tachypneic is a danger sign. They should be hyperventilating. A 'normal' value means compensation is failing. Trending UP from 34 to 40 is your most important number — it predicts deterioration before the patient looks worse."
    }
  },

  // ────────────────────────────────────────────────────
  {
    id: 4,
    title: "The Salbutamol Lactate",
    subtitle: "Iatrogenic Lactic Acidosis — Don't Escalate on the Lab",
    description: "A patient on continuous salbutamol has a rising lactate — and a junior clinician is ready to intubate.",
    tags: ["lactic acidosis","salbutamol","avoid escalation"],
    accent: "#059669",

    presentation: {
      eyebrow: "Scenario 04 — Presentation",
      imgEmoji: "⚗️",
      imgLabel: "Photo: healthcare worker reviewing a lab printout with rising lactate value, looking concerned, patient visible in background on oxygen",
      imgPrompt: "AI prompt: 'Photorealistic photo of a healthcare worker in scrubs reviewing a blood test printout, frowning, with a patient visible in the background lying on a clinic bed with oxygen mask, dim clinic environment, photojournalism style.'",
      intro: `A <strong>36-year-old woman with asthma</strong> has been on continuous salbutamol nebulization for 90 minutes (cumulative 20mg). She has received IV hydrocortisone and IV MgSO₄. Her wheeze is clearly improving, she is speaking in full sentences, and her SpO₂ has risen from 89% to 95%. Your junior colleague calls you over: <span class='highlight'>"Her lactate just came back at 5.2 mmol/L — should we intubate?"</span>`,
      vitals: [
        { label: "HR", value: "118", unit: "/min", state: "warn" },
        { label: "RR", value: "20", unit: "/min", state: "ok" },
        { label: "SpO₂", value: "95", unit: "%", state: "ok" },
        { label: "pH", value: "7.38", unit: "", state: "ok" },
        { label: "Lactate", value: "5.2", unit: "mmol/L", state: "danger" },
        { label: "PEFR", value: "52", unit: "% predicted", state: "warn" }
      ],
      findings: [
        { text: "Speaking in full sentences, reduced anxiety", type: "ok" },
        { text: "Wheeze markedly improved from admission", type: "ok" },
        { text: "SpO₂ improving: 89% on admission → 95% now", type: "ok" },
        { text: "Lactate 5.2 mmol/L (high anion gap metabolic acidosis)", type: "danger" },
        { text: "No hemodynamic compromise, capillary refill <2 sec", type: "ok" }
      ],
      resourceNote: "Available: VBG with lactate, potassium level. 90 minutes into continuous high-dose salbutamol therapy."
    },

    diagnosis: {
      question: "Your junior colleague wants to intubate because of the lactate of 5.2. What is your assessment?",
      options: [
        { letter: "A", text: "Intubate — lactate 5.2 indicates severe physiologic compromise" },
        { letter: "B", text: "Sepsis — start broad-spectrum antibiotics and fluids" },
        { letter: "C", text: "This is iatrogenic beta-2-agonist lactic acidosis. The patient is clinically improving. Do not escalate — reduce salbutamol dose and repeat lactate in 90 minutes.", correct: true },
        { letter: "D", text: "Obtain CT chest urgently to rule out PE" }
      ],
      correctFeedback: `Exactly right. <strong>High-dose salbutamol causes aerobic lactic acidosis</strong> through beta-2-mediated stimulation of glycolysis in skeletal muscle and adipose tissue, independent of tissue hypoxia. The lactate rises predictably with continuous nebulization doses above 15-20 mg. The key differentiator: the patient is <em>clinically improving</em> — SpO₂ up, RR down, PEFR up, speaking comfortably. If you treat the lactate by intubating, you cause harm. Reduce bronchodilator dose as the clinical response allows, repeat lactate in 90 minutes — it will trend down.`,
      incorrectFeedback: `<strong>This lactate is iatrogenic.</strong> High-dose salbutamol (beta-2 agonist) stimulates glycolysis and causes aerobic lactate production — not tissue hypoxia. The clinical picture does NOT support sepsis (no fever), PE, or acute deterioration requiring intubation. In fact, every clinical parameter is <em>improving</em>: SpO₂ 89→95%, RR reducing, wheeze improving, speaking in sentences. Intubating a clinically improving patient based on a drug-induced lab value is a serious clinical error.`
    },

    management: {
      title: "Management: Salbutamol Lactic Acidosis — Contextualize, Monitor, Reduce",
      phases: [
        {
          label: "Immediate Assessment",
          color: "#059669",
          num: "1",
          time: "Now",
          actions: [
            { icon: "🧠", type: "assess", name: "Clinical vs laboratory dissociation", detail: "When clinical trajectory and a lab value disagree, trust clinical trajectory. Patient improving clinically = do not escalate. Lab value is a red herring.", warn: "Never escalate management based on a single lab value that contradicts the clinical picture" },
            { icon: "📊", type: "monitor", name: "Check potassium", detail: "Beta-2 agonists drive K⁺ intracellularly. After 90 min of continuous salbutamol, hypokalemia is likely. K⁺ <3.0 = replace IV.", dose: "Supplement K⁺ if <3.5 mmol/L" },
            { icon: "📊", type: "assess", name: "Verify no alternative lactate cause", detail: "Is there any hemodynamic compromise? Skin mottling? Prolonged cap refill? Fever? None of these in this patient → iatrogenic cause confirmed." }
          ]
        },
        {
          label: "Treatment Adjustment",
          color: "#0E7C7B",
          num: "2",
          time: "90 min",
          actions: [
            { icon: "💊", type: "drug", name: "Reduce salbutamol as clinically appropriate", detail: "If PEFR >50% and SpO₂ ≥93%, transition from continuous to intermittent salbutamol q2-4h. This reduces the ongoing lactate burden.", dose: "Transition to salbutamol 4-8 puffs q2-4h when stable" },
            { icon: "💊", type: "drug", name: "Continue oral prednisolone", detail: "5-7 day course. Steroids do not contribute to lactic acidosis." },
            { icon: "📊", type: "monitor", name: "Repeat lactate in 90 minutes", detail: "Expected: downtrend toward normal (1-2 mmol/L) as salbutamol dose reduces. A rising lactate with clinical deterioration = reassess for alternative cause." }
          ]
        },
        {
          label: "Disposition",
          color: "#7C3AED",
          num: "3",
          time: "4–6 hours",
          actions: [
            { icon: "✅", type: "assess", name: "Safe to discharge if all criteria met", detail: "PEFR >60%, SpO₂ ≥93% on room air, speaking comfortably, lactate trending down, K⁺ repleted if low." },
            { icon: "📋", type: "assess", name: "Educate the clinical team", detail: "Document this case as a teaching point: beta-2-agonist lactic acidosis is predictable, dose-dependent, and benign. It should not drive clinical escalation decisions." }
          ]
        }
      ],
      outcome: `<strong>Outcome:</strong> The lactate trended from 5.2 → 3.1 → 1.8 mmol/L over 3 hours as salbutamol was weaned. Potassium was 3.1 mmol/L and was supplemented. The patient was discharged 5 hours after presentation with prednisolone and a written asthma action plan. <strong>No intubation needed.</strong> The junior clinician learned a critical lesson about clinical-laboratory dissociation.`,
      pearl: "The beta-2 lactate trap: the sicker the patient (higher salbutamol dose, longer duration), the higher the lactate — but ALSO the more likely the patient is improving clinically. A rising lactate in a clinically improving asthmatic after 60-90 minutes of high-dose bronchodilator therapy is virtually always iatrogenic. Check K⁺. Reduce the dose. Watch the trend. Do not intubate."
    }
  },

  // ────────────────────────────────────────────────────
  {
    id: 5,
    title: "The Deteriorating Transfer",
    subtitle: "Asthma Complicated by Pneumothorax",
    description: "A 22-year-old being treated for asthma suddenly worsens. The wheeze has gone — is it improvement or catastrophe?",
    tags: ["pneumothorax","complication","needle decompression"],
    accent: "#7C3AED",

    presentation: {
      eyebrow: "Scenario 05 — Presentation",
      imgEmoji: "⚡",
      imgLabel: "Photo: young male patient in acute distress, clinician performing auscultation with stethoscope, noting asymmetric breath sounds, basic clinic bed",
      imgPrompt: "AI prompt: 'Photorealistic medical photo of a young male patient in his 20s, gasping for breath on a clinic bed, while a clinician in scrubs auscultates his chest with a stethoscope. The clinician looks alarmed. Emergency lighting, role 2 clinic interior.'",
      intro: `A <strong>22-year-old male</strong> with asthma has been on treatment for 45 minutes: salbutamol, ipratropium, IV steroids. He was improving — SpO₂ had risen to 93% and wheeze was reducing. Suddenly he becomes acutely more distressed. <span class='danger-highlight'>SpO₂ drops to 82%</span>, he is unable to speak, and the wheeze has vanished completely.`,
      vitals: [
        { label: "HR", value: "148", unit: "/min", state: "danger" },
        { label: "RR", value: "38", unit: "/min", state: "danger" },
        { label: "SpO₂", value: "82", unit: "%", state: "danger" },
        { label: "BP", value: "94/68", unit: "mmHg", state: "danger" },
        { label: "L Chest", value: "Silent", unit: "on auscult.", state: "danger" },
        { label: "R Chest", value: "Wheeze", unit: "present", state: "warn" }
      ],
      findings: [
        { text: "SUDDEN deterioration after initial improvement — red flag", type: "danger" },
        { text: "Left chest: absent breath sounds, hyper-resonant on percussion", type: "danger" },
        { text: "Right chest: wheeze present, air entry reduced but present", type: "warn" },
        { text: "Trachea deviated slightly to the RIGHT", type: "danger" },
        { text: "Hypotension: BP 94/68 — cardiovascular compromise developing", type: "danger" }
      ],
      resourceNote: "Available: 14G IV cannula, finger thoracostomy capability. No CXR currently available. No mechanical ventilator."
    },

    diagnosis: {
      question: "What is the diagnosis and what is your first action?",
      options: [
        { letter: "A", text: "Worsening asthma — give IM epinephrine and escalate bronchodilators" },
        { letter: "B", text: "Left tension pneumothorax — immediate needle decompression without waiting for CXR", correct: true },
        { letter: "C", text: "Mucus plug with left lobar atelectasis — bronchodilators and physiotherapy" },
        { letter: "D", text: "Obtain portable CXR before any intervention" }
      ],
      correctFeedback: `Correct and critical. <strong>Tension pneumothorax is a clinical diagnosis.</strong> Sudden unilateral deterioration in a known asthmatic with asymmetric breath sounds (absent left, wheeze right), tracheal deviation away from the affected side, and hemodynamic compromise (BP 94/68) is tension PTX until proven otherwise. A CXR is NOT required. Every minute of delay increases mortality. Perform needle decompression of the left chest immediately — 2nd intercostal space, midclavicular line.`,
      incorrectFeedback: `<strong>This is a tension pneumothorax.</strong> The triad of sudden unilateral deterioration + absent unilateral breath sounds + hemodynamic compromise (hypotension, tachycardia) in an asthmatic who was improving = tension PTX. Tracheal deviation away from the affected side is a late but confirmatory sign. Mucus plug does not cause tracheal deviation or hemodynamic compromise this rapidly. NEVER wait for a CXR in suspected tension PTX with hemodynamic instability — the diagnosis is clinical.`
    },

    management: {
      title: "Management: Left Tension Pneumothorax Complicating Asthma",
      phases: [
        {
          label: "Immediate Decompression",
          color: "#C0392B",
          num: "1",
          time: "NOW — seconds",
          actions: [
            { icon: "🔧", type: "procedure", name: "Needle decompression — LEFT chest", detail: "14G IV cannula. 2nd intercostal space, midclavicular line. Insert perpendicular to chest wall, superior border of 3rd rib. Listen for hiss of air. If no response at MCL, try 4th/5th ICS anterior axillary line.", dose: "14G cannula, 2nd ICS MCL left", warn: "If no improvement: consider finger thoracostomy" },
            { icon: "🫁", type: "drug", name: "High-flow oxygen — 15 L/min NRB", detail: "Maximum FiO₂ while decompressing. SpO₂ 82% = critical hypoxemia." },
            { icon: "📊", type: "monitor", name: "Watch for immediate response", detail: "SpO₂ rising, BP recovering, HR slowing, trachea returning to midline = successful decompression." }
          ]
        },
        {
          label: "Definitive Chest Drain",
          color: "#7C3AED",
          num: "2",
          time: "5–15 min",
          actions: [
            { icon: "🔧", type: "procedure", name: "Finger thoracostomy + chest drain", detail: "If needle decompression successful but tension returns: 4th/5th ICS anterior axillary line. Blunt dissection with finger, then insert largest drain available (28-32Fr ideally). Connect to underwater seal or flutter valve.", dose: "28-32Fr chest drain left chest", warn: "At Role 2 without drain: finger thoracostomy with flutter valve improvisation" },
            { icon: "💉", type: "drug", name: "Local anaesthetic for chest drain", detail: "Lidocaine 1% infiltration to skin, subcutaneous tissue, and pleural space.", dose: "Lidocaine 1% 10–15 mL local" }
          ]
        },
        {
          label: "Resume Asthma Treatment + Transfer",
          color: "#0E7C7B",
          num: "3",
          time: "After decompression",
          actions: [
            { icon: "💊", type: "drug", name: "Resume bronchodilators", detail: "The asthma has NOT resolved. Once tension is relieved, resume salbutamol MDI + spacer and steroids. The pneumothorax was a complication, not the whole problem." },
            { icon: "📡", type: "assess", name: "Urgent transfer", detail: "Pneumothorax complicating near-fatal asthma at a Role 2 requires thoracic surgical backup. Transfer urgently with drain in situ and flutter valve." },
            { icon: "📊", type: "monitor", name: "Post-decompression monitoring", detail: "SpO₂, BP, HR, drain output every 15 minutes. Recurrence of tension before transfer = repeat needle decompression same site." }
          ]
        }
      ],
      outcome: `<strong>After left needle decompression:</strong> rush of air confirmed, SpO₂ improved 82% → 91% within 2 minutes, BP recovered to 112/74, HR 138→118. A chest drain was placed under local anaesthetic with improvised flutter valve. Asthma treatment resumed. Patient transferred urgently with drain in situ. <strong>Key lesson: A patient who improves and then suddenly worsens has a complication until proven otherwise.</strong>`,
      pearl: "Tension PTX in asthma mimics worsening asthma — both cause hypoxia and dyspnea. The differentiator is ASYMMETRY: absent unilateral breath sounds + tracheal deviation + hemodynamic compromise = tension until proven otherwise. In an asthmatic patient, bladders filled with trapped air are at higher risk of rupture under the elevated intrathoracic pressures of severe disease."
    }
  },

  // ────────────────────────────────────────────────────
  {
    id: 6,
    title: "The Intubation Decision",
    subtitle: "RSI in Near-Fatal Asthma at Role 2",
    description: "A 45-year-old has failed all medical therapy. The decision to intubate must be made — and done safely.",
    tags: ["RSI","ketamine","intubation"],
    accent: "#0D2137",

    presentation: {
      eyebrow: "Scenario 06 — Presentation",
      imgEmoji: "🔴",
      imgLabel: "Photo: emergency team preparing RSI drugs and laryngoscope at a bedside, patient on supplemental oxygen, dim role 2 facility",
      imgPrompt: "AI prompt: 'Photorealistic medical photograph of an emergency team preparing to intubate a critically ill patient. One clinician holds a laryngoscope, another draws up medication into a syringe. The patient is on a stretcher with oxygen mask. Dim clinical lighting, tense atmosphere, role 2 military or remote facility.'",
      intro: `A <strong>45-year-old man with asthma</strong> has received maximum therapy: continuous salbutamol × 90 min, ipratropium × 3 doses, IV MgSO₄ 2g, IV hydrocortisone 200 mg, IM epinephrine × 1. His SpO₂ is <span class='danger-highlight'>84%</span> on 15L NRB, he has become progressively more somnolent, and his respiratory rate has dropped from 36 to 18 — not from improvement, but from fatigue. You are 3 hours from any ICU.`,
      vitals: [
        { label: "GCS", value: "12", unit: "E3V4M5", state: "danger" },
        { label: "HR", value: "52", unit: "/min", state: "danger" },
        { label: "RR", value: "18", unit: "/min (↓)", state: "danger" },
        { label: "SpO₂", value: "84", unit: "%", state: "danger" },
        { label: "BP", value: "88/56", unit: "mmHg", state: "danger" },
        { label: "pCO₂", value: "62", unit: "mmHg", state: "danger" }
      ],
      findings: [
        { text: "GCS 12 — declining consciousness: do not wait further", type: "danger" },
        { text: "RR 18 DOWN from 36 — this is fatigue, not improvement", type: "danger" },
        { text: "Bradycardia HR 52 — ominous pre-arrest sign", type: "danger" },
        { text: "Hypotension — cardiovascular collapse from auto-PEEP + hypoxia", type: "danger" },
        { text: "pCO₂ 62 mmHg — hypercapnia confirmed: ventilatory failure", type: "danger" }
      ],
      resourceNote: "Available: ketamine, succinylcholine, ETT sizes 7.0–8.0, laryngoscope, BVM, cuffed ETT, in-line bronchodilator. No ICU for 3 hours. You must stabilize for transfer."
    },

    diagnosis: {
      question: "Which drug combination for RSI is most appropriate in this asthmatic?",
      options: [
        { letter: "A", text: "Propofol 2 mg/kg + succinylcholine 1.5 mg/kg" },
        { letter: "B", text: "Ketamine 1.5–2 mg/kg + succinylcholine 1.5 mg/kg", correct: true },
        { letter: "C", text: "Midazolam 0.3 mg/kg + vecuronium 0.1 mg/kg" },
        { letter: "D", text: "Etomidate 0.3 mg/kg + rocuronium 1.2 mg/kg" }
      ],
      correctFeedback: `Correct. <strong>Ketamine + succinylcholine is the drug combination of choice for RSI in acute asthma.</strong> Ketamine causes bronchodilation through two mechanisms: endogenous catecholamine release and direct airway smooth muscle relaxation. It also maintains cardiovascular stability — critical in this patient who is hypotensive (BP 88/56). Succinylcholine gives the fastest onset and shortest duration — if the intubation fails, the patient will resume spontaneous breathing in 8-12 minutes. Propofol can worsen bronchospasm at induction and causes dangerous hypotension in the hemodynamically compromised patient.`,
      incorrectFeedback: `<strong>Ketamine + succinylcholine is the correct combination in asthma.</strong> Ketamine is bronchodilatory — it releases catecholamines and directly relaxes smooth muscle. In this hemodynamically unstable patient (BP 88/56), it also maintains cardiovascular stability. Propofol can worsen bronchospasm and causes significant hypotension. Midazolam is hemodynamically unstable in a compromised patient. Vecuronium is too slow for RSI induction — onset 3-5 minutes. Etomidate+rocuronium is an acceptable alternative but not preferred given ketamine's dual bronchodilatory benefit.`
    },

    management: {
      title: "Management: RSI in Severe Asthma — Step by Step at Role 2",
      phases: [
        {
          label: "Pre-oxygenation",
          color: "#0D2137",
          num: "1",
          time: "3–5 min",
          actions: [
            { icon: "🫁", type: "drug", name: "15 L/min NRB — 3 minutes", detail: "Maximize apnea window. Patient must be UPRIGHT until moment of induction. Lay flat only immediately before laryngoscopy.", warn: "Supine = FRC drop = faster desaturation in asthmatic" },
            { icon: "💊", type: "drug", name: "Glycopyrrolate 0.2 mg IV", detail: "Pre-treatment to reduce ketamine-induced secretions. Give 1-2 min before induction.", dose: "Glycopyrrolate 0.2 mg IV" },
            { icon: "🔧", type: "procedure", name: "Check all equipment", detail: "ETT 7.5 cuffed, 10mL syringe for cuff, laryngoscope light works, suction ON, BVM ready, ETCO₂ if available. Assign roles: 1 intubates, 1 cricoid pressure + drug admin." }
          ]
        },
        {
          label: "Induction + Intubation",
          color: "#C0392B",
          num: "2",
          time: "RSI sequence",
          actions: [
            { icon: "💉", type: "drug", name: "Ketamine 1.5–2 mg/kg IV push", detail: "For a 70 kg patient: 105–140 mg IV push over 15-30 seconds. Patient will lose consciousness in ~45 seconds.", dose: "Ketamine 1.5–2 mg/kg IV (approx 105–140 mg for 70 kg)", warn: null },
            { icon: "💉", type: "drug", name: "Succinylcholine 1.5 mg/kg IV", detail: "Immediately after ketamine. 70 kg = 105 mg IV. Full paralysis in 45-60 seconds. Fasciculations then flaccidity.", dose: "Succinylcholine 1.5 mg/kg IV (approx 105 mg for 70 kg)", warn: null },
            { icon: "🔧", type: "procedure", name: "Laryngoscopy at 60 seconds", detail: "Direct or video laryngoscopy. Aim for Grade I-II view. Pass ETT 7.5 through cords. Inflate cuff to 20-25 cmH₂O." },
            { icon: "📊", type: "monitor", name: "Confirm position", detail: "Bilateral breath sounds + absent epigastric sounds + ETCO₂ capnography if available. Secure ETT at 21-23 cm at lip.", warn: "In asthma: unilateral absent sounds may indicate R mainstem intubation — pull back 2 cm and recheck" }
          ]
        },
        {
          label: "Post-intubation — Critical Phase",
          color: "#D97706",
          num: "3",
          time: "Immediately after",
          actions: [
            { icon: "💊", type: "drug", name: "Ketamine infusion — START NOW", detail: "Sedation AND bronchodilation in one agent. Do not use morphine (histamine release) or benzodiazepines without ketamine.", dose: "Ketamine 0.5–1 mg/kg/hr IV infusion" },
            { icon: "💊", type: "drug", name: "Restart in-line bronchodilators", detail: "Salbutamol via in-line nebulizer immediately. The asthma is NOT resolved by intubation.", dose: "Salbutamol 5 mg via in-line neb" },
            { icon: "🫁", type: "procedure", name: "Ventilator settings", detail: "Rate 10-12/min, TV 6-7 mL/kg IBW, PEEP 0-3, FiO₂ to SpO₂ 93-95%. Accept rising pCO₂ — target pH ≥7.20, not normal pCO₂.", warn: "PERMISSIVE HYPERCAPNIA: do not chase normal CO₂. Low rate = long expiratory time = less auto-PEEP." },
            { icon: "📡", type: "escalate", name: "Transfer IMMEDIATELY", detail: "Contact ICU: 'Intubated asthmatic. Ketamine infusion. Accept rising pCO₂ in transit — permissive hypercapnia strategy. ETA [time].' Assign experienced clinician for transport." }
          ]
        }
      ],
      outcome: `<strong>Post-intubation:</strong> SpO₂ improved 84% → 91% within 10 minutes on FiO₂ 60%. pCO₂ initially rose to 68 mmHg — accepted (permissive hypercapnia, pH 7.22 stable). Ketamine infusion maintained bronchodilation and sedation. Patient transferred intubated with in-line bronchodilators running. Extubated at receiving ICU 18 hours later. <strong>The peri-intubation window was managed safely because the team prepared in advance.</strong>`,
      pearl: "In the asthmatic you are about to intubate: expect pCO₂ to rise post-intubation. This is acceptable. A pH of 7.20-7.25 with rising CO₂ is safe short-term. What kills these patients post-intubation is aggressive ventilation with high rate and high TV causing auto-PEEP, hyperinflation, and cardiovascular collapse. Go slow, go low."
    }
  },

  // ────────────────────────────────────────────────────
  {
    id: 7,
    title: "The Intubated Asthmatic",
    subtitle: "Auto-PEEP on the Ventilator",
    description: "A mechanically ventilated asthmatic develops sudden hemodynamic collapse. The ventilator is killing him.",
    tags: ["auto-PEEP","ventilator","hemodynamic collapse"],
    accent: "#C0392B",

    presentation: {
      eyebrow: "Scenario 07 — Presentation",
      imgEmoji: "💨",
      imgLabel: "Photo: ventilated patient in bed, alarming ventilator monitor, clinician performing expiratory hold maneuver on ventilator controls",
      imgPrompt: "AI prompt: 'Photorealistic medical image of a critically ill intubated patient on a mechanical ventilator. The ventilator screen shows high airway pressures. A clinician is pressing buttons on the ventilator control panel. ICU or role 2 clinical environment, dramatic overhead lighting.'",
      intro: `A <strong>52-year-old intubated asthmatic</strong> was transferred to your Role 2 from a rural clinic. Ventilator settings on arrival: Rate 20, TV 550 mL, PEEP 5. Forty minutes later, your nurse calls urgently: <span class='danger-highlight'>BP has dropped from 118/76 to 68/42, HR spiking to 152.</span> The ventilator is alarming high peak pressures. Bilateral breath sounds are present but severely diminished.`,
      vitals: [
        { label: "BP", value: "68/42", unit: "mmHg ↓↓", state: "danger" },
        { label: "HR", value: "152", unit: "/min", state: "danger" },
        { label: "SpO₂", value: "89", unit: "%", state: "danger" },
        { label: "Peak P", value: "62", unit: "cmH₂O", state: "danger" },
        { label: "Plat P", value: "44", unit: "cmH₂O", state: "danger" },
        { label: "Auto-PEEP", value: "18", unit: "cmH₂O", state: "danger" }
      ],
      findings: [
        { text: "Sudden hemodynamic collapse — most common cause in ventilated asthmatic: auto-PEEP", type: "danger" },
        { text: "Breath sounds bilateral — this is NOT a pneumothorax (bilateral equal, no asymmetry)", type: "warn" },
        { text: "Plateau pressure 44 cmH₂O — above safe threshold of 35", type: "danger" },
        { text: "Auto-PEEP 18 cmH₂O measured on expiratory hold — critically elevated", type: "danger" },
        { text: "Ventilator rate 20 — far too high for an obstructed patient", type: "danger" }
      ],
      resourceNote: "Mechanical ventilator with auto-PEEP measurement capability. Ketamine, cisatracurium (if available). No ECMO."
    },

    diagnosis: {
      question: "What is causing this hemodynamic collapse and what is your first intervention?",
      options: [
        { letter: "A", text: "Tension pneumothorax — bilateral needle decompression" },
        { letter: "B", text: "Septic shock — start antibiotics and vasopressors" },
        { letter: "C", text: "Auto-PEEP causing dynamic hyperinflation and obstructive shock — disconnect from ventilator for 30 seconds to allow exhalation", correct: true },
        { letter: "D", text: "Increase PEEP to 10 to recruit alveoli" }
      ],
      correctFeedback: `Exactly right. <strong>Dynamic hyperinflation with auto-PEEP causing obstructive shock</strong> is the most common cause of sudden hemodynamic collapse in ventilated asthmatics. Rate 20 and PEEP 5 are completely wrong settings — the patient cannot exhale fast enough with obstructed airways at that rate. Auto-PEEP 18 cmH₂O means 18 cmH₂O of trapped gas pressure is crushing the right heart and impeding venous return. <strong>Disconnect from the ventilator for 20-30 seconds</strong> — allow passive exhalation of trapped gas. This is the fastest, safest intervention.`,
      incorrectFeedback: `<strong>This is obstructive shock from dynamic hyperinflation and auto-PEEP.</strong> Bilateral breath sounds rule out tension PTX. No infection signs rule out sepsis. Adding more PEEP to a patient with auto-PEEP 18 would be catastrophic — you would be adding external pressure on top of 18 cmH₂O of trapped pressure. The correct first step is to <strong>disconnect from the ventilator</strong> and allow the lungs to decompress passively. The ventilator settings (rate 20, PEEP 5) are causing this — they were completely inappropriate for an asthmatic.`
    },

    management: {
      title: "Management: Auto-PEEP Collapse in the Ventilated Asthmatic",
      phases: [
        {
          label: "Emergency Decompression",
          color: "#C0392B",
          num: "1",
          time: "NOW",
          actions: [
            { icon: "🔌", type: "procedure", name: "Disconnect from ventilator — 20 to 30 seconds", detail: "Remove ETT from ventilator circuit. BVM is not connected. Allow passive exhalation of trapped gas. You will often hear a prolonged exhalation. This alone may reverse the hemodynamic collapse.", warn: "This is the fastest and safest first intervention for auto-PEEP collapse" },
            { icon: "📊", type: "monitor", name: "Watch BP and HR during disconnect", detail: "Expected: BP rises, HR slows within 30-60 seconds as auto-PEEP decompresses. If no response or if SpO₂ falls critically, reconnect and consider PTX." },
            { icon: "💉", type: "drug", name: "IV fluid bolus 500 mL simultaneously", detail: "Obstructive shock = impaired venous return. Fluid challenge while decompressing helps restore cardiac output.", dose: "500 mL crystalloid IV rapid infusion" }
          ]
        },
        {
          label: "Reset Ventilator Settings",
          color: "#D97706",
          num: "2",
          time: "After stabilization",
          actions: [
            { icon: "🫁", type: "procedure", name: "Correct ventilator settings for asthma", detail: "Rate 10-12 (NOT 20), TV 6-7 mL/kg IBW (NOT 550 on 80 kg = 6.9 mL/kg — acceptable), PEEP 0-3 (NOT 5), FiO₂ titrate to SpO₂ 93-95%.", dose: "Rate 10-12 | TV 6-7 mL/kg | PEEP 0-3", warn: "Low rate = long expiratory time = less air trapping" },
            { icon: "📊", type: "procedure", name: "Measure auto-PEEP with expiratory hold", detail: "Perform expiratory hold (most ventilators: hold button at end expiration). Target auto-PEEP <10 cmH₂O. If still >10: decrease rate further.", warn: "Target auto-PEEP <10 cmH₂O and plateau pressure <35 cmH₂O" },
            { icon: "📊", type: "procedure", name: "Measure plateau pressure", detail: "Perform inspiratory hold (button on ventilator). Plateau pressure >35 cmH₂O = reduce tidal volume." }
          ]
        },
        {
          label: "Ongoing Management",
          color: "#0E7C7B",
          num: "3",
          time: "Ongoing",
          actions: [
            { icon: "💊", type: "drug", name: "Deepen sedation + consider paralysis", detail: "Patient fighting the ventilator = breath stacking = worse auto-PEEP. Deepen ketamine infusion. If auto-PEEP remains high: cisatracurium or vecuronium bolus for 30-60 min to allow controlled ventilation.", dose: "Ketamine ↑ infusion rate; cisatracurium 0.2 mg/kg IV if needed" },
            { icon: "💊", type: "drug", name: "Continue in-line bronchodilators", detail: "The auto-PEEP problem is from obstruction — bronchodilators are still essential. Never stop them because the patient is intubated.", dose: "Salbutamol + ipratropium via in-line neb q20 min" },
            { icon: "🧘", type: "assess", name: "Accept permissive hypercapnia", detail: "With rate 10-12, pCO₂ will rise. Accept pH ≥7.20. This is correct and intentional. Do NOT increase rate to chase normal CO₂." }
          ]
        }
      ],
      outcome: `<strong>After 25-second disconnect:</strong> prolonged exhalation audible, BP recovered 68/42 → 96/64 within 60 seconds. HR slowed 152 → 118. Reconnected to ventilator with corrected settings: Rate 12, TV 490 mL (6.2 mL/kg), PEEP 2, FiO₂ 50%. Auto-PEEP on repeat expiratory hold: 11 → 8 cmH₂O after rate adjustment. Plateau pressure 44 → 31 cmH₂O. <strong>The high ventilator rate was killing this patient.</strong>`,
      pearl: "The ventilated asthmatic follows a different physiology. In most ICU patients, a rate of 20 is normal. In severe asthma, rate 20 means the patient cannot exhale before the next breath begins — each breath adds to the trapped volume. The rule: low rate (10-12) to maximize expiratory time. If in doubt, disconnect and watch the patient exhale. The loudness and duration of that exhalation tells you everything."
    }
  },

  // ────────────────────────────────────────────────────
  {
    id: 8,
    title: "The Difficult Diagnosis",
    subtitle: "Not Everything is Asthma",
    description: "A 67-year-old with 'asthma' doesn't respond to bronchodilators. The diagnosis needs revisiting.",
    tags: ["differential","pulmonary edema","diagnostic error"],
    accent: "#D97706",

    presentation: {
      eyebrow: "Scenario 08 — Presentation",
      imgEmoji: "🔍",
      imgLabel: "Photo: older male patient in acute respiratory distress, sitting upright in bed, lower limb edema visible, concerned clinician at bedside performing POCUS",
      imgPrompt: "AI prompt: 'Photorealistic clinical photo of a 67-year-old male in visible respiratory distress, sitting upright in a hospital bed with obvious bilateral leg swelling below the knees. A clinician presses an ultrasound probe to the patient\'s chest while another monitors vital signs. Role 2 clinic setting.'",
      intro: `A <strong>67-year-old man</strong> presents with 3 days of worsening dyspnea and wheeze. He has a documented asthma history and has been given salbutamol, ipratropium, and oral steroids over the past 12 hours without improvement. On your assessment, you notice he is <span class='highlight'>orthopneic</span>, has <span class='highlight'>bilateral pitting leg edema to the knee</span>, and his JVP is elevated. His wheeze is bilateral and fine.`,
      vitals: [
        { label: "HR", value: "104", unit: "/min", state: "warn" },
        { label: "RR", value: "26", unit: "/min", state: "warn" },
        { text: "SpO₂", value: "90", unit: "% on 4L NC", state: "danger" },
        { label: "SpO₂", value: "90", unit: "% on 4L NC", state: "danger" },
        { label: "BP", value: "162/104", unit: "mmHg", state: "warn" },
        { label: "PEFR", value: "48", unit: "% predicted", state: "warn" }
      ],
      findings: [
        { text: "Orthopnea: 3-pillow sleeping — cannot lie flat", type: "danger" },
        { text: "Bilateral pitting leg edema to the knee", type: "danger" },
        { text: "Elevated JVP — venous hypertension", type: "danger" },
        { text: "Fine bilateral wheeze — 'cardiac asthma' pattern", type: "warn" },
        { text: "Bilateral basal crackles on auscultation", type: "danger" }
      ],
      resourceNote: "Available: furosemide IV, GTN sublingual, supplemental O₂. POCUS probe available (A-line vs B-line assessment). No echo capability."
    },

    diagnosis: {
      question: "The patient has been treated as asthma for 12 hours without improvement. What is the most likely diagnosis?",
      options: [
        { letter: "A", text: "Refractory asthma — escalate to IV magnesium and IM epinephrine" },
        { letter: "B", text: "Acute decompensated heart failure with cardiogenic pulmonary edema ('cardiac asthma')", correct: true },
        { letter: "C", text: "COPD exacerbation — start antibiotics and increase bronchodilators" },
        { letter: "D", text: "Bilateral pneumonia — antibiotics and O₂" }
      ],
      correctFeedback: `Correct and diagnostically critical. <strong>This is acute decompensated heart failure, not asthma.</strong> The history of orthopnea, leg edema to the knee, elevated JVP, hypertension, and bilateral basal crackles all point to cardiogenic pulmonary edema — sometimes called 'cardiac asthma' because pulmonary interstitial edema triggers bronchospasm and wheeze. The failure to respond to 12 hours of bronchodilators is the diagnostic key. The treatment is completely different: diuresis, vasodilation, and positioning — NOT more bronchodilators.`,
      incorrectFeedback: `<strong>This is acute decompensated heart failure, not asthma.</strong> Three features are incompatible with pure asthma: orthopnea, bilateral pitting leg edema to the knee, and elevated JVP. These are signs of right and left heart failure with fluid overload. 'Cardiac asthma' is a classic diagnostic trap — heart failure causes pulmonary edema which triggers bronchospasm and wheeze that mimics asthma. The key discriminator: failure to respond to bronchodilators + signs of fluid overload = heart failure until proven otherwise.`
    },

    management: {
      title: "Management: Acute Decompensated Heart Failure at Role 2 — Not More Bronchodilators",
      phases: [
        {
          label: "Immediate Treatment — STOP bronchodilators",
          color: "#D97706",
          num: "1",
          time: "Now",
          actions: [
            { icon: "🛑", type: "escalate", name: "Stop salbutamol and ipratropium", detail: "These are not the treatment. They may marginally help the bronchospasm component but address nothing about the underlying fluid overload.", warn: "Continued bronchodilators are not harmful but they are not helping — redirect immediately" },
            { icon: "🪑", type: "assess", name: "Position: sit upright / legs dependent", detail: "Upright position reduces venous return to the heart, decreasing preload and pulmonary edema. Keep legs dependent (off the bed) if tolerated." },
            { icon: "🫁", type: "drug", name: "Controlled supplemental oxygen", detail: "Target SpO₂ 94-98%. High-flow oxygen is appropriate here (unlike asthma, no concern about CO₂ retention in acute pulmonary edema without COPD)." }
          ]
        },
        {
          label: "Pharmacological Treatment",
          color: "#C0392B",
          num: "2",
          time: "0–30 min",
          actions: [
            { icon: "💊", type: "drug", name: "IV Furosemide (frusemide)", detail: "Rapid diuresis removes the fluid causing the pulmonary edema. If on regular oral furosemide, give 2.5× oral dose IV.", dose: "Furosemide 40–80 mg IV stat", warn: null },
            { icon: "💊", type: "drug", name: "GTN sublingual (nitroglycerin)", detail: "Vasodilation reduces preload and afterload. Rapid onset. Repeat every 5 minutes if BP allows (systolic >100 mmHg).", dose: "GTN 0.4 mg SL q5 min if BP >100 systolic", warn: "Do NOT give if systolic BP <100 mmHg — causes dangerous hypotension" },
            { icon: "📊", type: "monitor", name: "POCUS — B-lines vs A-lines", detail: "If POCUS available: B-lines (vertical, comet-tail artefacts) = interstitial fluid = heart failure confirmed. A-lines = obstructive pattern = favors asthma. B-lines bilaterally confirms cardiogenic etiology." }
          ]
        },
        {
          label: "Monitoring + Disposition",
          color: "#059669",
          num: "3",
          time: "30–120 min",
          actions: [
            { icon: "📊", type: "monitor", name: "Expected response to diuresis", detail: "RR should decrease within 20-40 min. SpO₂ should improve. Urine output >30 mL/hr confirms diuresis. Repeat PEFR — will also improve as pulmonary edema resolves." },
            { icon: "📊", type: "monitor", name: "Stop steroids if purely heart failure", detail: "Corticosteroids are not indicated for decompensated heart failure and may worsen fluid retention. Discontinue if diagnosis confirmed." },
            { icon: "📡", type: "escalate", name: "Transfer for echocardiography and cardiology review", detail: "Underlying cause of heart failure needs investigation: ischemic cardiomyopathy, valvular disease, hypertensive heart disease. This requires echo and cardiology. Transfer when stable.", warn: "Cardiac arrest risk remains elevated — do not discharge" }
          ]
        }
      ],
      outcome: `<strong>30 minutes after furosemide 80 mg IV + GTN SL:</strong> RR reduced 26 → 18, SpO₂ improved 90% → 96% on 4L NC, BP 162/104 → 138/88. Patient reported able to breathe more easily. Urine output 420 mL in first hour. POCUS showed confluent B-lines bilaterally confirming interstitial edema. Transferred for echocardiography — identified hypertensive dilated cardiomyopathy with EF 35%. <strong>12 hours of bronchodilators were the wrong treatment for the right symptom.</strong>`,
      pearl: "Cardiac asthma is one of the most important diagnostic traps in emergency medicine. Any 'asthmatic' who fails to respond to bronchodilators after 60-90 minutes, has orthopnea, elevated JVP, leg edema, or hypertension should trigger immediate reconsideration of the diagnosis. POCUS B-lines confirm pulmonary edema at the bedside. The treatments are opposite: asthma needs bronchodilators; heart failure needs diuresis and vasodilation."
    }
  }
];

// ═══════════════════════════════════════════════════════════════════
//  STATE
// ═══════════════════════════════════════════════════════════════════
let currentScenario = null;
let currentScreen = 0; // 0=presentation, 1=diagnosis, 2=management
let answered = false;

// ═══════════════════════════════════════════════════════════════════
//  BUILD HUB
// ═══════════════════════════════════════════════════════════════════
function buildHub() {
  const grid = document.getElementById('hub-grid');
  // Static HTML already rendered — JS only needed for scenario interactivity
  // Re-attach onclick handlers in case static HTML lost them
  const accentMap = { teal: '#0E7C7B', amber: '#D97706', red: '#C0392B', green: '#059669', purple: '#7C3AED' };
  // Only rebuild if grid is somehow empty (fallback)
  if (grid.children.length > 0) return;
  grid.innerHTML = SCENARIOS.map(s => `
    <div class="scenario-card" style="--card-accent: ${s.accent}" onclick="openScenario(${s.id})">
      <div class="card-num">Scenario ${String(s.id).padStart(2,'0')}</div>
      <div class="card-title">${s.title}</div>
      <div class="card-desc">${s.description}</div>
      <div class="card-tags">
        ${s.tags.map(t => {
          const cls = t.includes('near-fatal')||t.includes('complication')||t.includes('PTX')||t.includes('collapse') ? 'red' :
                      t.includes('diagnosis')||t.includes('pCO2')||t.includes('assessment') ? 'amber' :
                      t.includes('RSI')||t.includes('intub')||t.includes('ventilat') ? 'purple' :
                      t.includes('mild')||t.includes('first-line')||t.includes('avoidance') ? 'teal' : 'green';
          return `<span class="tag ${cls}">${t}</span>`;
        }).join('')}
      </div>
    </div>
  `).join('');
}

// ═══════════════════════════════════════════════════════════════════
//  NAVIGATION
// ═══════════════════════════════════════════════════════════════════
function openScenario(id) {
  currentScenario = SCENARIOS.find(s => s.id === id);
  currentScreen = 0;
  answered = false;
  triedOptions = new Set();
  document.getElementById('scenario-hub').style.display = 'none';
  document.getElementById('scenario-view').style.display = 'block';
  renderProgressBar();
  renderScreen();
  window.scrollTo(0, 0);
}

function goHub() {
  document.getElementById('scenario-hub').style.display = 'block';
  document.getElementById('scenario-view').style.display = 'none';
  window.scrollTo(0, 0);
}

function nextScreen() {
  currentScreen++;
  answered = false;
  triedOptions = new Set();
  renderProgressBar();
  renderScreen();
  window.scrollTo(0, 80);
}

function renderProgressBar() {
  const bar = document.getElementById('progress-bar');
  const steps = ['Presentation', 'Diagnosis', 'Management'];
  bar.innerHTML = steps.map((s, i) => `
    <div class="progress-step ${i < currentScreen ? 'done' : i === currentScreen ? 'active' : ''}"></div>
  `).join('');
}

// ═══════════════════════════════════════════════════════════════════
//  SCREEN RENDERERS
// ═══════════════════════════════════════════════════════════════════
function renderScreen() {
  const container = document.getElementById('screen-container');
  if (currentScreen === 0) container.innerHTML = renderPresentation();
  else if (currentScreen === 1) container.innerHTML = renderDiagnosis();
  else if (currentScreen === 2) container.innerHTML = renderManagement();
  
  // Activate
  container.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const sc = container.querySelector('.screen');
  if (sc) sc.classList.add('active');
}

function renderPresentation() {
  const p = currentScenario.presentation;
  const s = currentScenario;
  return `
    <div class="screen active">
      <div class="scenario-header">
        <div class="role2-badge">⚙ Role 2 Environment</div>
        <div class="scenario-eyebrow">${p.eyebrow}</div>
        <h2 class="scenario-title">${s.title}</h2>
        <p class="scenario-subtitle">${s.subtitle}</p>
      </div>

      <div class="clinical-card">
        <div class="clinical-card-header">
          <span class="label">Clinical Presentation</span>
        </div>
        <div class="clinical-card-body">
          <img
            src="images/scenario${s.id}_${['','farmer','silent_chest','blood_gas','lactate','pneumothorax','intubation','ventilator','cardiac'][s.id]}.jpg"
            alt="${p.imgLabel}"
            style="width:100%; height:220px; object-fit:cover; border-radius:8px; margin-bottom:20px;"
            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
          />
          <div class="img-placeholder" style="display:none;">
            <div class="img-icon">${p.imgEmoji}</div>
            <div class="img-label">${p.imgLabel}</div>
            <div class="img-prompt">${p.imgPrompt}</div>
          </div>
          <p class="clinical-text">${p.intro}</p>
        </div>
      </div>

      <div class="clinical-card">
        <div class="clinical-card-header">
          <span class="label">Vital Signs</span>
        </div>
        <div class="clinical-card-body">
          <div class="vitals-grid">
            ${p.vitals.map(v => `
              <div class="vital-box ${v.state || ''}">
                <div class="vital-label">${v.label}</div>
                <div class="vital-value">${v.value}<span class="vital-unit">${v.unit}</span></div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="clinical-card">
        <div class="clinical-card-header">
          <span class="label">Examination Findings</span>
        </div>
        <div class="clinical-card-body">
          <ul class="findings-list">
            ${p.findings.map(f => `<li class="${f.type}">${f.text}</li>`).join('')}
          </ul>
          <div class="resource-note">
            <div class="r-icon">⚙</div>
            <div class="r-text"><strong>Role 2 Resources:</strong> ${p.resourceNote}</div>
          </div>
        </div>
      </div>

      <button class="next-btn" onclick="nextScreen()">
        Proceed to Diagnostic Reasoning
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </button>
    </div>
  `;
}

function renderDiagnosis() {
  const d = currentScenario.diagnosis;
  return `
    <div class="screen active">
      <h2 class="question-text">${d.question}</h2>
      <p class="question-sub">${d.sub}</p>

      <div class="options-list" id="options-list">
        ${d.options.map((o, i) => `
          <button class="option-btn" onclick="selectOption(${i})" id="opt-${i}">
            <div class="option-letter">${o.letter}</div>
            <div class="option-text">${o.text}</div>
          </button>
        `).join('')}
      </div>

      <div class="feedback-box tryagain-fb" id="fb-tryagain">
        <div class="feedback-header">↩ Not quite — try again</div>
        <div class="feedback-body" id="fb-tryagain-body"></div>
      </div>
      <div class="feedback-box correct-fb" id="fb-correct">
        <div class="feedback-header">✓ Correct</div>
        <div class="feedback-body">${d.correctFeedback}</div>
      </div>
      <div class="feedback-box incorrect-fb" id="fb-incorrect" style="display:none">
        <div class="feedback-header">✗ Incorrect — Here's Why</div>
        <div class="feedback-body">${d.incorrectFeedback}</div>
      </div>

      <button class="next-btn" id="next-mgmt-btn" style="display:none" onclick="nextScreen()">
        Proceed to Management
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </button>
    </div>
  `;
}

// Track which options the learner has already tried
let triedOptions = new Set();

function selectOption(idx) {
  if (answered) return;

  const opts = document.querySelectorAll('.option-btn');
  const d = currentScenario.diagnosis;
  const btn = document.getElementById('opt-' + idx);

  // ── CORRECT answer chosen ─────────────────────────────────────────────────
  if (d.options[idx].correct) {
    answered = true;

    // Lock all buttons and style them
    opts.forEach((b, i) => {
      b.disabled = true;
      b.classList.remove('wrong-pick', 'shake');
      if (d.options[i].correct) b.classList.add('correct');
      else if (triedOptions.has(i)) b.classList.add('incorrect');
      else b.classList.add('neutral-reveal');
    });

    // Hide try-again, show correct feedback and next button
    document.getElementById('fb-tryagain').classList.remove('show');
    document.getElementById('fb-correct').classList.add('show');
    document.getElementById('next-mgmt-btn').style.display = 'inline-flex';

  // ── WRONG answer chosen ───────────────────────────────────────────────────
  } else {
    // Already tried this one — ignore repeat click
    if (triedOptions.has(idx)) return;
    triedOptions.add(idx);

    // Flash red + shake on the chosen button, then reset after animation
    btn.classList.add('wrong-pick', 'shake');
    setTimeout(() => {
      btn.classList.remove('shake');
      // Keep wrong-pick styling so they know they tried it, but re-enable others
    }, 400);

    // Disable just this wrong option so they cannot pick it again
    btn.disabled = true;

    // Show a brief, non-revealing try-again nudge
    const nudges = [
      'That's not the best answer here — consider the full clinical picture and try again.',
      'Not quite — look again at the vital signs and examination findings.',
      'Think about what the combination of findings tells you as a whole.',
      'Consider which finding is most clinically significant in this context.',
    ];
    const nudge = nudges[triedOptions.size % nudges.length];
    document.getElementById('fb-tryagain-body').textContent = nudge;
    document.getElementById('fb-tryagain').classList.add('show');

    // Hide correct feedback in case somehow visible
    document.getElementById('fb-correct').classList.remove('show');
  }
}

function renderManagement() {
  const m = currentScenario.management;
  const phaseColors = { teal: '#0E7C7B', amber: '#D97706', red: '#C0392B', purple: '#7C3AED', green: '#059669', navy: '#0D2137' };
  
  return `
    <div class="screen active">
      <h2 class="mgmt-title">${m.title}</h2>
      <p class="mgmt-sub">${m.sub}</p>

      ${m.phases.map(phase => `
        <div class="mgmt-phase">
          <div class="mgmt-phase-header" style="background: ${phase.color}">
            <div class="phase-num">${phase.num}</div>
            <div class="phase-label">${phase.label}</div>
            <div class="phase-time">${phase.time}</div>
          </div>
          <div class="mgmt-phase-body">
            ${phase.actions.map(action => `
              <div class="action-item">
                <div class="action-icon ${action.type}">${action.icon}</div>
                <div class="action-content">
                  <div class="action-name">${action.name}</div>
                  <div class="action-detail">${action.detail}</div>
                  ${action.dose ? `<div class="action-dose">${action.dose}</div>` : ''}
                  ${action.warn ? `<div class="action-warn">⚠ ${action.warn}</div>` : ''}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}

      <div class="outcome-box">
        <div class="outcome-label">Expected Outcome</div>
        <div class="outcome-text">${m.outcome}</div>
      </div>

      <div class="key-pearl">
        <div class="pearl-label">Clinical Pearl</div>
        <div class="pearl-text">${m.pearl}</div>
      </div>

      <div class="complete-actions">
        <button class="hub-btn" onclick="goHub()">
          ← Return to All Scenarios
        </button>
        ${getNextScenarioButton()}
      </div>
    </div>
  `;
}

function getNextScenarioButton() {
  const current = currentScenario.id;
  const next = SCENARIOS.find(s => s.id === current + 1);
  if (!next) return '';
  return `<button class="hub-btn primary" onclick="openScenario(${next.id})">
    Next: ${next.title} →
  </button>`;
}

// ═══════════════════════════════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════════════════════════════
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", buildHub);
} else {
  buildHub();
}