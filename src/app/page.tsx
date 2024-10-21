
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import DashboardTable from "./components/DashboardTable";
import { Dashboard } from "./types/Dashboard";
import DashboardForm from './components/DashboardForm';

const Home = () => {
  const [dashboards, setDashboards] = useState<Dashboard[]>([]);
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [nextId, setNextId] = React.useState(1);
  const [dateCreated, setDateCreated] = useState(new Date().toISOString());

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  React.useEffect(() => {
    const storedDashboards = localStorage.getItem('dashboards');
    
    if (storedDashboards) {
      const parsedDashboards = JSON.parse(storedDashboards) as Dashboard[];
      setDashboards(parsedDashboards);
      setNextId(nextId + 1);
    }
  }, []);


  const handleDashboardSubmit = (name: string) => {
    const newDashboard = {
      id: Date.now(), 
      name,
      dateCreated: new Date().toISOString(), 
    };
  
    
    const storedDashboards = localStorage.getItem('dashboards');
    let updatedDashboards: Dashboard[] = [];
  
    if (storedDashboards) {
      
      updatedDashboards = JSON.parse(storedDashboards) as Dashboard[];
    }
  
 
    updatedDashboards = [...updatedDashboards, newDashboard];
  
    
    localStorage.setItem('dashboards', JSON.stringify(updatedDashboards));
  
    
    setDashboards(updatedDashboards);
  
    console.log('Updated Dashboards:', localStorage.getItem('dashboards'));
  };
  

  const handleEditDashboard = (id: string) => {
    router.push(`/create?id=${id}`);
  };

  const handleDeleteDashboard = (id: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this dashboard?");
    if (confirmDelete) {
      setDashboards(dashboards.filter((dashboard) => dashboard.id !== id));
    }
  };
  
  return (
    <div>
      <h1>Dashboards</h1>
      <button onClick={handleOpenModal}>Add New Dashboard</button>
      <DashboardForm
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleDashboardSubmit}
      />
      <DashboardTable
        dashboards={dashboards}
        onEdit={handleEditDashboard}
        onDelete={handleDeleteDashboard}
      />
    </div>
  );
};

export default Home;
