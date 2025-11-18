/* eslint-disable @typescript-eslint/no-explicit-any */
import { type FC } from "react";
import { RotateCcw, SkipBack, Play, Pause, SkipForward } from "lucide-react";

interface ControlsProps {
    currentOp: number;
    operationsLength: number;
    isPlaying: boolean;
    speed: number;
    setIsPlaying: (play: boolean) => void;
    setSpeed: (ms: number) => void;
    reset: () => void;
    prevStep: () => void;
    nextStep: () => void;
    t: any;
}

export const Controls: FC<ControlsProps> = ({
    currentOp,
    operationsLength,
    isPlaying,
    speed,
    setIsPlaying,
    setSpeed,
    reset,
    prevStep,
    nextStep,
    t,
}) => {
    return (
        <div className="rounded-xl shadow-sm p-6 mb-6 transition-colors bg-white border border-slate-200 dark:bg-slate-800 dark:border-slate-700">
            <div className="flex items-center justify-center gap-3 mb-6">
                <button
                    onClick={reset}
                    disabled={currentOp === 0}
                    className="p-3 rounded-lg transition-all disabled:opacity-40 disabled:cursor-not-allowed active:scale-95 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600"
                    title={t.reset}
                >
                    <RotateCcw className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                </button>

                <button
                    onClick={prevStep}
                    disabled={currentOp === 0}
                    className="p-3 rounded-lg transition-all disabled:opacity-40 disabled:cursor-not-allowed active:scale-95 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600"
                    title={t.previous}
                >
                    <SkipBack className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                </button>

                <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    disabled={currentOp >= operationsLength}
                    className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-sm hover:shadow-md active:scale-95"
                    title={isPlaying ? t.pause : t.play}
                >
                    {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                </button>

                <button
                    onClick={nextStep}
                    disabled={currentOp >= operationsLength}
                    className="p-3 rounded-lg transition-all disabled:opacity-40 disabled:cursor-not-allowed active:scale-95 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600"
                    title={t.next}
                >
                    <SkipForward className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                </button>
            </div>

            <div className="flex items-center justify-center gap-4">
                <label className="text-sm font-medium text-slate-600 dark:text-slate-400">{t.speed}:</label>
                <input
                    type="range"
                    min={100}
                    max={2000}
                    step={100}
                    value={speed}
                    onChange={(e) => setSpeed(Number(e.target.value))}
                    className="w-64 accent-blue-600"
                />
                <span className="text-sm font-mono min-w-[60px] text-slate-500 dark:text-slate-400">
                    {speed}ms
                </span>
            </div>
        </div>
    );
};
