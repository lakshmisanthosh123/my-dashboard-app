
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (name: string) => void; 
}

const DashboardForm: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [dashboardName, setDashboardName] = React.useState('');

  const handleSubmit = () => {
    onSubmit(dashboardName);
    setDashboardName('');
    onClose();
  };

  if (!isOpen) return null; 

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add New Dashboard</h2>
        <input
          type="text"
          value={dashboardName}
          onChange={(e) => setDashboardName(e.target.value)}
          placeholder="Enter dashboard name"
        />
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={onClose}>Cancel</button>
      </div>
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .modal-content {
          background: white;
          padding: 20px;
          border-radius: 5px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
          width: 300px;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default DashboardForm;
