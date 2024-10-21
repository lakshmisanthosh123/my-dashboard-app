"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ChartContainer from "../components/ChartContainer";
import DashboardForm from "../components/DashboardForm";
import { Dashboard } from "../types/Dashboard";
import { useSearchParams } from 'next/navigation';

const CreateDashboard = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  
  const id = searchParams.get('id');
  const [dashboard, setDashboard] = useState<Dashboard | null>(null);

  
  const existingDashboards: Dashboard[] = [
    { id: "1", name: "Sales Dashboard", dateCreated: "2023-10-01", layout: [] },
    { id: "2", name: "Marketing Dashboard", dateCreated: "2023-10-02", layout: [] },
  ];

  useEffect(() => {
    if (id) {
      const foundDashboard = existingDashboards.find((d) => d.id === id);
      setDashboard(foundDashboard || null);
    }
  }, [id]);

  const handleSave = (name: string, layout: any[]) => {
  
    console.log("Saving Dashboard:", name, layout);
    router.push("/");
  };

  return (
    <div>
      <h1>{dashboard ? "Edit Dashboard" : "Create Dashboard"}</h1>
     
      <ChartContainer />
    </div>
  );
};

export default CreateDashboard;
