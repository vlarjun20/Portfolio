"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

interface FloatingCode {
  id: number
  code: string
  x: number
  y: number
  size: number
  rotation: number
  speed: number
  direction: number
  opacity: number
}

export function FloatingIcons() {
  const [codeSnippets, setCodeSnippets] = useState<FloatingCode[]>([])
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Determine the current theme, with proper fallback
  const currentTheme = mounted ? (theme === "system" ? resolvedTheme : theme) : "dark"

  useEffect(() => {
    setMounted(true)

    const aiCodeExamples = [
      "model.fit(X, y)",
      "import tensorflow as tf",
      "neural_network.predict()",
      "from sklearn import svm",
      "torch.nn.functional",
      "cv2.imread(image)",
      "np.array(data)",
      "model.compile()",
      "train_test_split()",
      "accuracy_score(y_true, y_pred)",
      "RandomForestClassifier()",
      "pipeline = Pipeline()",
      "GridSearchCV(estimator)",
      "cross_val_score()",
      "StandardScaler().fit()",
      "PCA(n_components=2)",
      "KMeans(n_clusters=3)",
      "LogisticRegression()",
      "confusion_matrix()",
      "classification_report()",
      "model.evaluate(X_test)",
      "optimizer='adam'",
      "activation='relu'",
      "loss='categorical_crossentropy'",
      "Dense(128, activation)",
      "Conv2D(32, (3,3))",
      "MaxPooling2D((2,2))",
      "Dropout(0.5)",
      "BatchNormalization()",
      "LSTM(50, return_sequences)",
      "Embedding(vocab_size)",
      "Attention()",
      "Transformer()",
      "BERT.from_pretrained()",
      "tokenizer.encode(text)",
      "model.generate()",
      "GPT-3.5-turbo",
      "OpenAI.Completion",
      "huggingface/transformers",
      "spacy.load('en_core')",
      "nltk.word_tokenize()",
      "TextBlob(text).sentiment",
      "word2vec.train()",
      "doc2vec.infer_vector()",
      "TfidfVectorizer()",
      "CountVectorizer()",
      "LabelEncoder()",
      "OneHotEncoder()",
      "train_size=0.8",
      "random_state=42",
    ]

    const newSnippets: FloatingCode[] = []

    for (let i = 0; i < 18; i++) {
      newSnippets.push({
        id: i,
        code: aiCodeExamples[i % aiCodeExamples.length],
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 0.4 + 0.6,
        rotation: Math.random() * 360,
        speed: Math.random() * 0.2 + 0.05,
        direction: Math.random() > 0.5 ? 1 : -1,
        opacity: Math.random() * 0.3 + 0.1,
      })
    }

    setCodeSnippets(newSnippets)

    const interval = setInterval(() => {
      setCodeSnippets((prevSnippets) =>
        prevSnippets.map((snippet) => ({
          ...snippet,
          y: snippet.y + snippet.speed * snippet.direction,
          x: snippet.x + Math.sin(Date.now() * 0.001 + snippet.id) * 0.05,
          rotation: snippet.rotation + 0.05,
          direction: snippet.y <= 0 ? 1 : snippet.y >= 100 ? -1 : snippet.direction,
        })),
      )
    }, 50)

    return () => clearInterval(interval)
  }, [])

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {codeSnippets.map((snippet) => (
        <div
          key={snippet.id}
          className="absolute transition-transform duration-1000 font-mono text-xs whitespace-nowrap select-none"
          style={{
            left: `${snippet.x}%`,
            top: `${snippet.y}%`,
            transform: `rotate(${snippet.rotation}deg) scale(${snippet.size})`,
            opacity: snippet.opacity,
            color: currentTheme === "dark" ? "#22d3ee" : "#0891b2",
            textShadow: currentTheme === "dark" ? "0 0 8px rgba(34, 211, 238, 0.4)" : "none",
            fontWeight: "500",
          }}
        >
          {snippet.code}
        </div>
      ))}
    </div>
  )
}
