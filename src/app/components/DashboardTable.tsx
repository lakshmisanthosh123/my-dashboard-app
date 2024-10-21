
import React from "react";
import { Dashboard } from "../types/Dashboard";

interface DashboardTableProps {
  dashboards: Dashboard[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const DashboardTable: React.FC<DashboardTableProps> = ({ dashboards, onEdit, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Date Created</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {dashboards.map((dashboard) => (
          <tr key={dashboard.id}>
            <td>{dashboard.name}</td>
            <td>{dashboard.dateCreated}</td>
            <td>
              <button onClick={() => onEdit(dashboard.id)}>Edit</button>
              <button onClick={() => onDelete(dashboard.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DashboardTable;
