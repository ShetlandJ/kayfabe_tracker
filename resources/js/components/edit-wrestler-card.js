import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getInitials } from '../utils/wrestlers';
import EditStateCard from './edit-state-card';
import { getAllStates } from '../api/states';
import { deleteState } from '../api/wrestlers';
import { useRouteMatch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import WrestlerStatesList from './wrestler-states-list';

function EditWrestlerCard ({ wrestler, getWrestlerHistory }) {
  const [creating, setCreating] = useState(false);
  const [loading, setLoading] = useState(true);
  const [states, setStates] = useState([]);
  const [editState, setEditState] = useState(null);
  const [emptyState, setEmptyState] = useState({
    title: '',
    description: '',
    status: null,
    start: new Date()
  });

  const defaultEmptyState = {
    title: '',
    description: '',
    status: null,
    start: new Date()
  };

  const slug = useRouteMatch().params.slug;

  const getStates = () => {
    return getAllStates(slug)
      .then(({ data }) => {
        setStates(data);
        setLoading(false);
      })
      .catch(error => console.log(error));
  };
  useEffect(() => {
    getStates();
  }, []);

  const removeState = (state) => {
    deleteState(state.id);
    getWrestlerHistory();
  };

  const editStateTrigger = (stateData) => {
    setEditState(stateData);
  };

  const reset = () => {
    getWrestlerHistory();
    setCreating(false);
    setEditState(null);
    setEmptyState(defaultEmptyState);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-between mt-4 w-11/12 bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
        <div className="flex items-center space-x-4">
          <div className="rounded-full h-auto text-3xl flex bg-green-50 w-20 h-20 p-2 items-center justify-center mr-2">
            {getInitials(wrestler.ring_name)}
          </div>
          <div className="flex flex-col space-y-1">
            <p className="font-semibold text-gray-800 dark:text-gray-200 sm:text-lg dark:hover:text-primary hover:text-primary hover:underline">
              {wrestler.ring_name}
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              {wrestler.biography}
            </div>
          </div>
        </div>

      </div>

      <div className="mt-3 p-3 w-11/12">
        <WrestlerStatesList
          key={wrestler.states.length}
          states={wrestler.states}
          editState={editStateTrigger}
          deleteState={removeState}
        />

        <div className="rounded-lg mb-2">
          {!editState && (
            <EditStateCard
              state={emptyState}
              states={states}
              wrestler={wrestler}
              reset={reset}
              creating={true}
            />
          )}

          {!creating && editState && (
            <EditStateCard
              key={JSON.stringify(editState)}
              state={editState}
              states={states}
              wrestler={wrestler}
              reset={reset}
            />
          )}

        </div>
      </div>
    </div>
  );
}

EditWrestlerCard.propTypes = {
  wrestler: PropTypes.object.required
};

export default EditWrestlerCard;
