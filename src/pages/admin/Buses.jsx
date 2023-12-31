import React, { useState } from "react";
import { FiPlus, FiLayers } from "react-icons/fi";
import BusSeatsList from "../../components/admin/buses/BusSeatsList";
import { Link } from "react-router-dom";
import BusFormModal from "../../components/admin/buses/BusFormModal";
import Breadcrumb from "../../components/common/Breadcrumb";

const Seats = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <div className="flex-center-between">
        <h1 className="text-2xl font-semibold">Seats</h1>
        <Breadcrumb />
      </div>
      <div className="mt-5 card">
        <div className="sm:flex-center-between pb-2 border-b">
          <div className="sm:flex-align-center gap-x-2">
            <button
              className="btn btn-secondary flex-center-center sm:flex-align-center gap-x-2 w-full sm:w-fit"
              onClick={handleOpenModal}
            >
              <FiPlus />
              <span>New</span>
            </button>
            <Link
              to="manage"
              className="btn border border-primary text-primary shadow shadow-primary/30 flex-align-center gap-x-2 mt-3 sm:mt-0"
            >
              <FiLayers />
              <span>Manage Seats</span>
            </Link>
          </div>
          <div className="mt-3 sm:mt-0">
            <select name="operator" id="operator" className="pr-8">
              <option value="">Select</option>
              <option value="Jaguar">Jaguar</option>
              <option value="Link">Link</option>
              <option value="Y.Y Coaches">Y.Y Coaches</option>
              <option value="Global">Global</option>
            </select>
          </div>
        </div>
        <div>
          <BusSeatsList handleOpenModal={handleOpenModal} />
        </div>
      </div>
      {/* Busform Modal */}
      <BusFormModal
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
        title="Add Schedule"
      />
    </div>
  );
};

export default Seats;
