"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, Play, RotateCcw, Zap } from "lucide-react"

export function AIModelDemo() {
  const [isTraining, setIsTraining] = useState(false)
  const [accuracy, setAccuracy] = useState(0)
  const [epoch, setEpoch] = useState(0)
  const [loss, setLoss] = useState(2.5)
  const [status, setStatus] = useState("Ready")

  const startTraining = () => {
    setIsTraining(true)
    setAccuracy(0)
    setEpoch(0)
    setLoss(2.5)
    setStatus("Initializing...")
  }

  const resetModel = () => {
    setIsTraining(false)
    setAccuracy(0)
    setEpoch(0)
    setLoss(2.5)
    setStatus("Ready")
  }

  useEffect(() => {
    if (!isTraining) return

    const interval = setInterval(() => {
      setEpoch((prev) => {
        const newEpoch = prev + 1

        // Update status based on progress
        if (newEpoch <= 10) {
          setStatus("Loading data...")
        } else if (newEpoch <= 30) {
          setStatus("Training neural network...")
        } else if (newEpoch <= 70) {
          setStatus("Optimizing weights...")
        } else if (newEpoch <= 90) {
          setStatus("Fine-tuning model...")
        } else if (newEpoch < 100) {
          setStatus("Finalizing training...")
        } else {
          setStatus("Training complete!")
          setIsTraining(false)
          return 100
        }

        // Simulate realistic training progress
        const progress = newEpoch / 100
        const baseAccuracy = 20 + progress * 70
        const noise = (Math.random() - 0.5) * 8
        const smoothedAccuracy = Math.min(95, Math.max(15, baseAccuracy + noise))

        const baseLoss = 2.5 - progress * 2.2
        const lossNoise = (Math.random() - 0.5) * 0.3
        const smoothedLoss = Math.max(0.05, baseLoss + lossNoise)

        setAccuracy(smoothedAccuracy)
        setLoss(smoothedLoss)

        return newEpoch
      })
    }, 120) // Slightly slower for better visualization

    return () => clearInterval(interval)
  }, [isTraining])

  return (
    <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-cyan-200 dark:border-cyan-800">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Brain className="h-5 w-5 text-cyan-500" />
          AI Model Training Demo
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Status */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              {isTraining && <Zap className="h-4 w-4 text-cyan-500 animate-pulse" />}
              <span className="text-sm font-medium text-cyan-600 dark:text-cyan-400">{status}</span>
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-cyan-600">{epoch}</div>
              <div className="text-xs text-slate-600 dark:text-slate-400">Epochs</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">{accuracy.toFixed(1)}%</div>
              <div className="text-xs text-slate-600 dark:text-slate-400">Accuracy</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600">{loss.toFixed(3)}</div>
              <div className="text-xs text-slate-600 dark:text-slate-400">Loss</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Training Progress</span>
              <span>{epoch}%</span>
            </div>
            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-cyan-500 to-blue-500 h-3 rounded-full transition-all duration-300 relative overflow-hidden"
                style={{ width: `${epoch}%` }}
              >
                {isTraining && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                )}
              </div>
            </div>
          </div>

          {/* Accuracy Chart Simulation */}
          <div className="h-16 bg-slate-100 dark:bg-slate-700 rounded-lg p-2 relative overflow-hidden">
            <div className="text-xs text-slate-500 mb-1">Accuracy Over Time</div>
            <div className="relative h-8">
              <svg className="w-full h-full" viewBox="0 0 100 30">
                <path
                  d={`M 0,${30 - (accuracy * 30) / 100} Q 25,${30 - (accuracy * 30) / 100} 50,${30 - (accuracy * 30) / 100} T 100,${30 - (accuracy * 30) / 100}`}
                  stroke="rgb(6, 182, 212)"
                  strokeWidth="2"
                  fill="none"
                  className="transition-all duration-300"
                />
                <circle
                  cx={epoch}
                  cy={30 - (accuracy * 30) / 100}
                  r="2"
                  fill="rgb(6, 182, 212)"
                  className="transition-all duration-300"
                />
              </svg>
            </div>
          </div>

          {/* Control Buttons */}
          <div className="flex gap-2">
            <Button
              onClick={startTraining}
              disabled={isTraining}
              size="sm"
              className="flex-1 bg-cyan-600 hover:bg-cyan-700 disabled:opacity-50"
            >
              <Play className="h-4 w-4 mr-1" />
              {isTraining ? "Training..." : "Start Training"}
            </Button>
            <Button
              onClick={resetModel}
              size="sm"
              variant="outline"
              className="border-cyan-500 text-cyan-600 bg-transparent hover:bg-cyan-50 dark:hover:bg-cyan-950"
            >
              <RotateCcw className="h-4 w-4" />
            </Button>
          </div>

          {/* Training Logs */}
          {isTraining && (
            <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-3 font-mono text-xs">
              <div className="text-green-600">✓ Data loaded successfully</div>
              <div className="text-blue-600">→ Epoch {epoch}/100</div>
              <div className="text-cyan-600">⚡ Learning rate: 0.001</div>
              {epoch > 50 && <div className="text-orange-600">⚠ Adjusting learning rate...</div>}
              {epoch > 80 && <div className="text-green-600">✓ Model converging...</div>}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
