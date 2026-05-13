import React from 'react';

const BrainLoader: React.FC = () => (
  <div className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-slate-100">
      <div className="h-12 w-12 rounded-full border-4 border-slate-200 border-t-indigo-500 animate-spin" />
    </div>
    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 mb-3">Loading medical visualization</p>
    <div className="space-y-3 w-full max-w-sm">
      <div className="h-3 rounded-full bg-slate-100 animate-pulse" />
      <div className="h-3 rounded-full bg-slate-100 animate-pulse delay-150" />
      <div className="h-3 rounded-full bg-slate-100 animate-pulse delay-300" />
    </div>
  </div>
);

export default BrainLoader;
