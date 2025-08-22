import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Landing() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">MatricLink</h1>
      <div className="flex gap-4">
        <Link to="/matriculant" className="px-4 py-2 bg-blue-600 text-white rounded">I’m a Matriculant</Link>
        <Link to="/employer" className="px-4 py-2 bg-green-600 text-white rounded">I’m an Employer</Link>
      </div>
    </div>
  );
}

function MatriculantDashboard() {
  return <h2 className="p-6">Matriculant Dashboard (Profile & Jobs)</h2>;
}

function EmployerDashboard() {
  return <h2 className="p-6">Employer Dashboard (Post & View Jobs)</h2>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/matriculant" element={<MatriculantDashboard />} />
        <Route path="/employer" element={<EmployerDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
