"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

export function AutoTypingCode() {
  const { theme, resolvedTheme } = useTheme()
  const [text, setText] = useState("")
  const [charIdx, setCharIdx] = useState(0)
  const [snippetIdx, setSnippetIdx] = useState(0)
  const [mounted, setMounted] = useState(false)

  // Determine the current theme, with proper fallback
  const currentTheme = mounted ? (theme === "system" ? resolvedTheme : theme) : "dark"

  const snippets = [
    `# Neural Network Training
import tensorflow as tf
from tensorflow.keras import layers

model = tf.keras.Sequential([
    layers.Dense(128, activation='relu'),
    layers.Dropout(0.2),
    layers.Dense(10, activation='softmax')
])

model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

# Train the model
history = model.fit(
    X_train, y_train,
    epochs=100,
    validation_data=(X_val, y_val),
    batch_size=32
)`,

    `# Computer Vision Pipeline
import cv2
import numpy as np
from sklearn.model_selection import train_test_split

def preprocess_image(image_path):
    img = cv2.imread(image_path)
    img = cv2.resize(img, (224, 224))
    img = img / 255.0
    return np.expand_dims(img, axis=0)

# Load and predict
prediction = model.predict(preprocess_image('input.jpg'))
confidence = np.max(prediction)
print(f"Prediction: {np.argmax(prediction)}")
print(f"Confidence: {confidence:.2f}")`,

    `# Natural Language Processing
from transformers import AutoTokenizer, AutoModel
import torch

tokenizer = AutoTokenizer.from_pretrained('bert-base-uncased')
model = AutoModel.from_pretrained('bert-base-uncased')

def analyze_sentiment(text):
    inputs = tokenizer(text, return_tensors='pt')
    with torch.no_grad():
        outputs = model(**inputs)
    
    # Get embeddings
    embeddings = outputs.last_hidden_state
    return torch.softmax(embeddings.mean(dim=1), dim=-1)

# Analyze text
result = analyze_sentiment("I love machine learning!")
print(f"Sentiment score: {result}")`,

    `# Deep Learning with PyTorch
import torch
import torch.nn as nn
import torch.optim as optim

class NeuralNet(nn.Module):
    def __init__(self, input_size, hidden_size, num_classes):
        super(NeuralNet, self).__init__()
        self.fc1 = nn.Linear(input_size, hidden_size)
        self.relu = nn.ReLU()
        self.dropout = nn.Dropout(0.2)
        self.fc2 = nn.Linear(hidden_size, num_classes)
    
    def forward(self, x):
        out = self.fc1(x)
        out = self.relu(out)
        out = self.dropout(out)
        out = self.fc2(out)
        return out

# Initialize model
model = NeuralNet(784, 128, 10)
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=0.001)`,

    `# Machine Learning Pipeline
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report
from sklearn.preprocessing import StandardScaler
import pandas as pd

# Load and prepare data
df = pd.read_csv('dataset.csv')
X = df.drop('target', axis=1)
y = df['target']

# Scale features
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Train model
rf_model = RandomForestClassifier(
    n_estimators=100, 
    random_state=42,
    max_depth=10
)
rf_model.fit(X_train, y_train)

# Evaluate
predictions = rf_model.predict(X_test)
accuracy = accuracy_score(y_test, predictions)
print(f"Model Accuracy: {accuracy:.3f}")
print(classification_report(y_test, predictions))`,

    `# YOLO Object Detection
import cv2
from ultralytics import YOLO

# Load YOLO model
model = YOLO('yolov8n.pt')

def detect_objects(image_path):
    # Load image
    img = cv2.imread(image_path)
    
    # Run inference
    results = model(img)
    
    # Process results
    for result in results:
        boxes = result.boxes
        for box in boxes:
            # Get coordinates
            x1, y1, x2, y2 = box.xyxy[0]
            confidence = box.conf[0]
            class_id = box.cls[0]
            
            # Draw bounding box
            cv2.rectangle(img, (int(x1), int(y1)), 
                         (int(x2), int(y2)), (0, 255, 0), 2)
    
    return img

# Detect objects in image
result_img = detect_objects('input.jpg')
cv2.imwrite('output.jpg', result_img)`,
  ]

  // Handle component mounting
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const currentSnippet = snippets[snippetIdx]
    if (charIdx < currentSnippet.length) {
      const id = setTimeout(() => {
        setText(currentSnippet.slice(0, charIdx + 1))
        setCharIdx(charIdx + 1)
      }, 30) // Slightly faster typing
      return () => clearTimeout(id)
    }

    // Pause before next snippet
    const id = setTimeout(() => {
      setCharIdx(0)
      setText("")
      setSnippetIdx((i) => (i + 1) % snippets.length)
    }, 4000) // Longer pause to read the code
    return () => clearTimeout(id)
  }, [charIdx, snippetIdx, snippets, mounted])

  // Don't render anything until mounted to avoid hydration mismatch
  if (!mounted) return null

  return (
    <div className="fixed top-20 right-4 max-w-xs lg:max-w-md xl:max-w-lg opacity-15 lg:opacity-20 pointer-events-none hidden lg:block z-0">
      <div
        className="rounded-lg border p-4 shadow-2xl font-mono text-xs whitespace-pre-wrap leading-relaxed max-h-96 overflow-hidden"
        style={{
          backgroundColor: currentTheme === "dark" ? "rgba(0,0,0,.9)" : "rgba(255,255,255,.95)",
          borderColor: currentTheme === "dark" ? "rgba(6,182,212,.5)" : "rgba(6,182,212,.4)",
          color: currentTheme === "dark" ? "#22d3ee" : "#0891b2",
          textShadow: currentTheme === "dark" ? "0 0 8px rgba(34,211,238,.4)" : undefined,
          boxShadow: currentTheme === "dark" ? "0 0 20px rgba(6,182,212,.2)" : "0 10px 25px rgba(0,0,0,.1)",
        }}
      >
        <div className="flex items-center gap-2 mb-2 pb-2 border-b border-current/20">
          <div className="w-2 h-2 rounded-full bg-red-500"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <span className="ml-2 text-xs opacity-60">ai_model.py</span>
        </div>
        {text}
        <span className="animate-pulse text-cyan-400">|</span>
      </div>
    </div>
  )
}
