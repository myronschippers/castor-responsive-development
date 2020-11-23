import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import AlertMessages from '../../AlertMessages/AlertMessages';
import CreatureAttributes from '../../CreatureAttributes/CreatureAttributes';
import CreatureHabitats from '../../CreatureHabitats/CreatureHabitats';

// MATERIAL-UI
import { Grid } from '@material-ui/core';

class Details extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_CREATURE_DETAILS',
      payload: parseInt(this.props.match.params.id),
    });
  }

  handleClickBACK = (event) => {
    this.props.history.push('/');
  };

  handleClickToEdit = (event) => {
    if (!this.props.store.creatureDetails.id) {
      return; // exit early if the id is not available
    }

    this.props.history.push(
      `/creature-edit/${this.props.store.creatureDetails.id}`
    );
  };

  render() {
    const { creatureDetails } = this.props.store;

    return (
      <div>
        <div>
          <h2>Creature Details</h2>
          <button className="btn" onClick={this.handleClickBACK}>
            BACK TO LIST
          </button>
          <button className="btn" onClick={this.handleClickToEdit}>
            EDIT
          </button>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3} md={2}>
            <h3>{creatureDetails.name}</h3>
            <p>
              <strong>Type:</strong> {creatureDetails.type_label}
            </p>
          </Grid>

          <Grid item xs={12} sm={9} md={10}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                {creatureDetails.img_path && (
                  <img
                    src={`images/${creatureDetails.img_path}`}
                    alt={creatureDetails}
                  />
                )}
              </Grid>
              <Grid item xs={12} sm={6} md={8}>
                <p>
                  <strong>Physical Description:</strong>{' '}
                  {creatureDetails.physical_description}
                </p>
                <p>
                  <strong>Background:</strong> {creatureDetails.background}
                </p>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6}>
            <CreatureAttributes attributes={creatureDetails.attributes} />
          </Grid>

          <Grid item xs={12} sm={6}>
            <CreatureHabitats habitats={creatureDetails.habitats} />
          </Grid>
        </Grid>

        <AlertMessages />
      </div>
    );
  }
}

export default connect(mapStoreToProps('creatureDetails'))(Details);
