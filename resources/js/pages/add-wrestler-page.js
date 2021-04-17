import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import { getPromotions } from '../api/promotions';
import { uploadCSV } from '../api/wrestlers';
import { useRouteMatch } from 'react-router-dom';
import EditWrestler from '../components/edit-wrestler-card';

function AddWrestlerPage () {
  const [loading, setLoading] = useState(true);
  const [promotions, setPromotions] = useState([]);
  const [wrestler, setWrestler] = useState([]);
  const slug = useRouteMatch().params.slug;

  const getAllPromotions = () => {
    getPromotions(slug)
      .then(({ data }) => {
        setPromotions(data);
        setLoading(false);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    getAllPromotions();
  }, []);

  const uploadCSVFile = (file) => {
    const formData = new FormData();
    formData.append('file_name', 'upload.csv');

    formData.append('file', file);

    return uploadCSV(formData);
  };

  const onChange = (e) => {
    let files = e.target.files || e.dataTransfer.files;
    if (!files.length) { return; }
    uploadCSVFile(files[0]);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <h1>File Upload</h1>
        <input type="file" onChange={onChange} />
        <button>Upload</button>
      </div>
    </div>
  );
};

export default AddWrestlerPage;
