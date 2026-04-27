// app/page.tsx
"use client";

import { useMemo, useState } from "react";

export default function Home() {
  const [dataType, setDataType] = useState("");
  const [goal, setGoal] = useState("");
  const [groups, setGroups] = useState("");
  const [normal, setNormal] = useState("");

  const result = useMemo(() => {
    if (dataType === "continuous" && goal === "compare_mean") {
      if (groups === "two")
        return normal === "yes"
          ? "Independent t-test"
          : "Mann-Whitney U test";

      if (groups === "paired")
        return normal === "yes"
          ? "Paired t-test"
          : "Wilcoxon Signed-Rank test";

      if (groups === "three")
        return normal === "yes"
          ? "One-way ANOVA"
          : "Kruskal-Wallis test";
    }

    if (dataType === "categorical") {
      if (goal === "compare_ratio") return "Chi-square test";
      if (goal === "prediction") return "Logistic Regression";
    }

    return "";
  }, [dataType, goal, groups, normal]);

  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow">
        <h1 className="text-3xl font-bold text-center mb-6">
          生物統計檢定助手
        </h1>

        <select
          className="w-full border p-3 rounded mb-4"
          onChange={(e) => setDataType(e.target.value)}
        >
          <option value="">資料型態</option>
          <option value="continuous">連續變數</option>
          <option value="categorical">類別變數</option>
        </select>

        <select
          className="w-full border p-3 rounded mb-4"
          onChange={(e) => setGoal(e.target.value)}
        >
          <option value="">分析目的</option>
          <option value="compare_mean">比較平均數</option>
          <option value="compare_ratio">比較比例</option>
          <option value="prediction">預測結果</option>
        </select>

        <select
          className="w-full border p-3 rounded mb-4"
          onChange={(e) => setGroups(e.target.value)}
        >
          <option value="">組數</option>
          <option value="two">兩組</option>
          <option value="paired">配對</option>
          <option value="three">三組以上</option>
        </select>

        <select
          className="w-full border p-3 rounded mb-4"
          onChange={(e) => setNormal(e.target.value)}
        >
          <option value="">常態分布?</option>
          <option value="yes">是</option>
          <option value="no">否</option>
        </select>

        {result && (
          <div className="mt-6 bg-blue-50 p-5 rounded-xl border">
            <h2 className="font-bold text-xl">建議檢定：</h2>
            <p className="text-lg mt-2">{result}</p>
          </div>
        )}
      </div>
    </main>
  );
}