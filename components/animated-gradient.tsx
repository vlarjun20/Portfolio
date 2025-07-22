"use client"

export function AnimatedGradient() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -inset-[10px] opacity-30 dark:opacity-50">
        <div
          className="absolute top-0 -left-40 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-cyan-600/40 to-blue-600/40 blur-3xl dark:from-cyan-600/20 dark:to-blue-600/20"
          style={{ animation: "pulse 15s infinite" }}
        />
        <div
          className="absolute top-60 -right-40 h-[400px] w-[400px] rounded-full bg-gradient-to-r from-blue-600/40 to-cyan-600/40 blur-3xl dark:from-blue-600/20 dark:to-cyan-600/20"
          style={{ animation: "pulse 10s infinite 1s" }}
        />
        <div
          className="absolute bottom-40 left-20 h-[300px] w-[300px] rounded-full bg-gradient-to-r from-teal-600/40 to-cyan-600/40 blur-3xl dark:from-teal-600/20 dark:to-cyan-600/20"
          style={{ animation: "pulse 8s infinite 2s" }}
        />
      </div>
      <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); opacity: 0.8; }
        }
      `}</style>
    </div>
  )
}
